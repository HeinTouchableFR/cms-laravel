<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Extension;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use ZipArchive;

class ExtensionController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:extension-list|extension-toggle|extension-upload|extension-delete', ['only' => ['index']]);
        $this->middleware('permission:extension-upload', ['only' => ['upload']]);
        $this->middleware('permission:extension-toggle', ['only' => ['toggle']]);
        $this->middleware('permission:extension-delete', ['only' => ['destroy']]);
    }

    public function index(): View
    {
        return view('admin.extensions.index', [
            'menu' => route('admin.extension.index'),
            'extensions' => Extension::all(),
        ]);
    }

    /**
     * @throws \Exception
     */
    public function upload(Request $request)
    {
        $zip = new ZipArchive();
        $status = $zip->open($request->file('zip')->getRealPath());
        if ($status !== true) {
            throw new \Exception($status);
        } else {
            $storageDestinationPath = storage_path('app/extensions');
            if (! \File::exists($storageDestinationPath)) {
                \File::makeDirectory($storageDestinationPath, 0755, true);
            }

            $extensionName = basename($zip->getNameIndex(0));

            for ($i = 0; $i < $zip->numFiles; $i++) {
                $OnlyFileName = str_replace('../', '', $zip->getNameIndex($i));
                $FullFileName = $zip->statIndex($i);
                if (! ($FullFileName['name'][strlen($FullFileName['name']) - 1] == '/')) {
                    if (preg_match('#\.(jpg|jpeg|gif|png|svg|css|scss|php|js|woff|ttf|json)$#i', $OnlyFileName)) {
                        $dirname = pathinfo($FullFileName['name'], PATHINFO_DIRNAME);
                        $basename = pathinfo($FullFileName['name'], PATHINFO_BASENAME);
                        $name = $dirname.'/'.$basename;
                        $file = $zip->getFromIndex($i);
                        Storage::put('/extensions/'.$name, $file);
                    }
                }
            }

            $zip->close();

            $extension = new Extension();
            $extension->fill([
                'name' => $extensionName,
                'active' => 1,
            ]);
            $extension->save();
            $folder = "storage/app/extensions/$extension->name/migrations";
            Artisan::call('migrate', ['--path' => $folder, '--force' => true]);

            return to_route('admin.extension.index')->with('success', 'L\'extension a bien été envoyée');
        }
    }

    public function toggle(Extension $extension): RedirectResponse
    {
        $extension->update(['active' => ! $extension->active]);

        $state = $extension->active ? 'activée' : 'désactivée';

        return to_route('admin.extension.index')->with('success', "L'extension a bien été $state");
    }

    public function destroy(Extension $extension): RedirectResponse
    {
        $folder = "storage/app/extensions/$extension->name/migrations";
        Artisan::call('migrate:rollback', ['--path' => $folder, '--force' => true]);
        File::deleteDirectory(storage_path("app/extensions/$extension->name"));

        $extension->delete();

        return to_route('admin.extension.index')->with('success', 'L\'extension a bien été supprimée');
    }
}
