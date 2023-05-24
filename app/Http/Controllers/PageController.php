<?php

namespace App\Http\Controllers;

use App\Http\Requests\SearchRequest;
use App\Models\Content;
use App\Models\Option;
use Carbon\Carbon;
use Illuminate\Contracts\View\View;

class PageController extends Controller
{
    public function home(): View
    {
        $homepage = Option::where('key', 'homepage')->first();
        $content = Content::find($homepage?->value);

        return view('home', [
            'menu' => route('home'),
            'content' => $content,
        ]);
    }

    public function sitemap(): \Illuminate\Http\Response
    {
        $urls = [];

        $urls[] = ['loc' => route('home')];

        foreach (Content::whereNotIn('type', ['template', 'header', 'footer'])->get() as $post) {
            $urls[] = [
                'loc' => route($post->type . '.show', $post->slug),
                'lastmod' => $post->updated_at,
            ];
        }

        return response()->view('sitemap', [
            'urls' => $urls,
        ])->header('Content-Type', 'text/xml');
    }

    public function robots(): \Illuminate\Http\Response
    {
        $sitemap = route('sitemap');

        return response()->view('robots', [
            'content' => "User-agent: * \nDisallow: /profile/\nDisallow: /admin/\nSitemap: {$sitemap}",
        ])->header('Content-Type', 'text/txt');
    }

    /**
     * @throws \JsonException
     */
    public function search(SearchRequest $request): View
    {
        $q = htmlspecialchars($request->validated('q'), ENT_QUOTES, 'UTF-8');

        if ($q) {
            $results = \App\Models\Content::search($q,
                function ($meiliSearch, string $query, array $options) {
                    $options['attributesToHighlight'] = ['title', 'content'];

                    return $meiliSearch->search($query, $options);
                })->whereIn('type', ['blog', 'page'])->where('online', '1')->raw();
        } else {
            $results = [
                'hits' => [],
                'totalHits' => 0,
            ];
        }

        $items = [];

        foreach ($results['hits'] as $item) {
            $type = '';

            if ($item['type'] === 'blog') {
                $type = 'Article';
            }

            if ($item['type'] === 'page') {
                $type = 'Page';
            }

            $excerpt = '';
            $json = json_decode($item['_formatted']['content'], true);
            if ($json) {
                foreach ($json as $bloc) {
                    foreach ($bloc as $v) {
                        if (is_string($v) and str_contains($v, '<em>')) {
                            $excerpt .= $v;
                            $excerpt .= "\n...";
                        } elseif (is_array($v)) {
                            foreach ($v as $b) {
                                foreach ($b as $c) {
                                    if (is_string($c) and str_contains($c, '<em>')) {
                                        $excerpt .= $c;
                                        $excerpt .= "\n...";
                                    }
                                }
                            }
                        }
                    }
                }
            }

            $items[] = [
                'title' => $item['_formatted']['title'],
                'created_at' => new Carbon($item['created_at']),
                'url' => route($item['type'] . '.show', $item['slug']),
                'excerpt' => $excerpt,
                'type' => $type,
            ];
        }

        return view('search', [
            'menu' => route('search'),
            'results' => $items,
            'total' => count($items),
            'q' => $q,
        ]);
    }

    public function show(string $post): View
    {
        return view('pages.show', [
            'menu' => route('page.show', $post),
            'content' => Content::where('type', 'page')->where('slug', $post)->firstOrFail(),
        ]);
    }
}
