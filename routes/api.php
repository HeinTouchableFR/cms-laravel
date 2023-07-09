<?php

use App\Models\Extension;
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

if (Schema::hasTable('extensions')) {
    $extensions = Extension::where('active', 1)->get();
    foreach ($extensions as $item) {
        $file = Storage::path("extensions/$item->name/routes/api.php");
        if (File::exists($file)) {
            require $file;
        }
    }
}

Route::middleware('lscache:no-cache')->group(function () {
    Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
        return $request->user();
    });

    Route::get('/posts', [\App\Http\Controllers\Api\ContentController::class, 'index']);

    Route::post('/contact', [\App\Http\Controllers\Api\ContactController::class, 'index']);

    Route::get('/search', function (App\Http\Requests\SearchRequest $request) {
        $q = htmlspecialchars($request->validated('q'), ENT_QUOTES, 'UTF-8');

        if ($q) {
            $results = \App\Models\Content::search($q,
                function ($meiliSearch, string $query, array $options) {
                    $options['attributesToHighlight'] = ['title', 'content'];
                    $options['attributesToCrop'] = ['content'];
                    $options['cropLength'] = 35;
                    $options['filter'] = 'type NOT IN [\'template\', \'header\', \'footer\']';

                    return $meiliSearch->search($query, $options);
                })->where('online', '1')->take(5)->raw();
        } else {
            $results = [
                'hits' => [],
                'totalHits' => 0,
            ];
        }

        $items = [];
        foreach ($results['hits'] as $item) {
            if ($item['type'] === 'blog') {
                $category = 'Article';
            } elseif ($item['type'] === 'page') {
                $category = 'Page';
            } else {
                $category = ucfirst($item['type']);
            }

            $items[] = [
                'title' => $item['_formatted']['title'],
                'url' => route($item['type'].'.show', $item['slug']),
                'category' => $category,
            ];
        }

        return [
            'items' => $items,
            'hits' => $results['totalHits'],
        ];
    });
});
