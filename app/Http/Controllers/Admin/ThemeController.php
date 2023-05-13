<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Option;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use \Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\File;
use ZipArchive;

class ThemeController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:theme-list|theme-upload|theme-delete', ['only' => ['index', 'store']]);
        $this->middleware('permission:theme-upload', ['only' => ['create', 'store']]);
        $this->middleware('permission:theme-delete', ['only' => ['destroy']]);
    }


    function index(): View
    {
        return view('admin.themes.index', [
            'menu' => route('admin.theme.index'),
        ]);
    }

    function upload(Request $request): RedirectResponse
    {
        $zip = new ZipArchive();
        $status = $zip->open($request->file("zip")->getRealPath());
        if ($status !== true) {
            throw new \Exception($status);
        } else {
            $storageDestinationPath = storage_path("app/public/themes/");

            if (!\File::exists($storageDestinationPath)) {
                \File::makeDirectory($storageDestinationPath, 0755, true);
            }
            $zip->extractTo($storageDestinationPath);
            $zip->close();
            return to_route('admin.theme.index')->with('success', 'Le thème a bien été envoyé');
        }
    }

    function define(string $theme, Request $request): RedirectResponse
    {
        Option::where('key', 'theme')->update(['value' => $theme]);
        return to_route('admin.theme.index')->with('success', 'Le thème a bien été changé');
    }

    function destroy(string $theme, Request $request): RedirectResponse
    {
        if (theme() === $theme) {
            Option::where('key', 'theme')->update(['value' => 'default']);
        }

        File::deleteDirectory(storage_path("app/public/themes/$theme"));

        return to_route('admin.theme.index')->with('success', 'Le thème a bien été supprimé');
    }
}
