<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/posts', [\App\Http\Controllers\Api\ContentController::class, 'index']);

Route::post('/contact', [\App\Http\Controllers\Api\ContactController::class, 'index']);

Route::get('/search', function (\App\Http\Requests\SearchRequest $request) {
    $q = htmlspecialchars($request->validated('q'), ENT_QUOTES, 'UTF-8');

    if ($q) {
        $results = \App\Models\Content::search($q,
            function ($meiliSearch, string $query, array $options) {
                $options['attributesToHighlight'] = ['title', 'content'];
                $options['attributesToCrop'] = ['content'];
                $options['cropLength'] = 35;

                return $meiliSearch->search($query, $options);
            })->whereIn('type', ['blog', 'page'])->where('online', '1')->take(5)->raw();
    } else {
        $results = [
            'hits' => [],
            'totalHits' => 0,
        ];
    }

    $items = [];
    foreach ($results['hits'] as $item) {
        $category = '';

        if ($item['type'] === 'blog') {
            $category = 'Article';
        }

        if ($item['type'] === 'page') {
            $category = 'Page';
        }

        $items[] = [
            'title' => $item['_formatted']['title'],
            'url' => route($item['type'] . '.show', $item['slug']),
            'category' => $category,
        ];
    }

    return [
        'items' => $items,
        'hits' => $results['totalHits'],
    ];
});
