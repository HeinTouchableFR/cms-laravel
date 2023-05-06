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

    public function sitemap(): \Illuminate\Http\Response
    {
        $urls = [];

        $urls[] = ["loc" => route('home')];

        foreach (Content::whereIn('type', ['blog', 'page'])->get() as $post) {
            $urls[] = [
                "loc" => route($post->type . '.show', $post->slug),
                "lastmod" => $post->updated_at,
            ];
        }

        return response()->view('sitemap', [
            'urls' => $urls
        ])->header('Content-Type', 'text/xml');
    }

    public function robots(): \Illuminate\Http\Response
    {
        $sitemap = route('sitemap');

        return response()->view('robots', [
            'content' => "User-agent: * \nDisallow: /profile/\nDisallow: /admin/\nSitemap: {$sitemap}"
        ])->header('Content-Type', 'text/txt');
    }


    public function show(string $post): View
    {
        return view('pages.show', [
            'menu' => route('page.show', $post),
            'content' => Content::where('type', 'page')->where('slug', $post)->firstOrFail()
        ]);
    }
}
