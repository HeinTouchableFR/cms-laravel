<?php

namespace App\Http\Controllers;

use App\Models\Content;
use App\Models\Option;
use Illuminate\Http\Request;
use Illuminate\Contracts\View\View;
class PageController extends Controller
{
    public function home(): View
    {
        $homepage = Option::where('key', 'homepage')->first();
        $content = Content::find($homepage->value);

        return view('home', [
            'menu' => route('home'),
            'content' => $content
        ]);
    }


    public function show(string $post): View
    {
        return view('pages.show', [
            'menu' => route('page.show', $post),
            'content' => Content::where('type', 'page')->where('slug', $post)->firstOrFail()
        ]);
    }
}
