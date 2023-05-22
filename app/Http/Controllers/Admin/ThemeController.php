<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Option;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use ZipArchive;

class ThemeController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:theme-list|theme-upload|theme-delete', ['only' => ['index', 'store']]);
        $this->middleware('permission:theme-upload', ['only' => ['create', 'store']]);
        $this->middleware('permission:theme-delete', ['only' => ['destroy']]);
    }

    public function index(): View
    {
        return view('admin.themes.index', [
            'menu' => route('admin.theme.index'),
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
            $storageDestinationPath = storage_path('themes');
            if (! \File::exists($storageDestinationPath)) {
                \File::makeDirectory($storageDestinationPath, 0755, true);
            }

            for ($i = 0; $i < $zip->numFiles; $i++) {
                $OnlyFileName = str_replace('../', '', $zip->getNameIndex($i));
                $FullFileName = $zip->statIndex($i);
                if (! ($FullFileName['name'][strlen($FullFileName['name']) - 1] == '/')) {
                    if (preg_match('#\.(jpg|jpeg|gif|png|svg|css|scss|php|js|woff|ttf)$#i', $OnlyFileName)) {
                        $dirname = pathinfo($FullFileName['name'], PATHINFO_DIRNAME);
                        $basename = pathinfo($FullFileName['name'], PATHINFO_BASENAME);
                        $name = $dirname.'/'.$basename;
                        $file = $zip->getFromIndex($i);
                        Storage::disk('public')->put('/themes/'.$name, $file);
                    }
                }
            }

            $zip->close();

            return to_route('admin.theme.index')->with('success', 'Le thème a bien été envoyé');
        }
    }

    public function define(string $theme, Request $request): RedirectResponse
    {
        Option::where('key', 'theme')->update(['value' => $theme]);

        return to_route('admin.theme.index')->with('success', 'Le thème a bien été changé');
    }

    public function destroy(string $theme, Request $request): RedirectResponse
    {
        if (theme() === $theme) {
            Option::where('key', 'theme')->update(['value' => 'default']);
        }

        File::deleteDirectory(storage_path("app/public/themes/$theme"));

        return to_route('admin.theme.index')->with('success', 'Le thème a bien été supprimé');
    }
}
