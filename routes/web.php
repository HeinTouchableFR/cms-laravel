<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\VerifyCsrfToken;
use App\Models\Extension;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

require __DIR__.'/auth.php';
require __DIR__.'/admin.php';

if (Schema::hasTable('extensions')) {
    $extensions = Extension::where('active', 1)->get();
    foreach ($extensions as $item) {
        $file = Storage::path("extensions/$item->name/routes/web.php");
        if (File::exists($file)) {
            require $file;
        }
    }
}

Route::get('/', [PageController::class, 'home'])->name('home')->middleware(['lscache:private', 'lstags:public:post;public:blog']);
Route::get('/recherche', [PageController::class, 'search'])->name('search')->middleware('lscache:no-cache');
Route::get('/sitemap.xml', [PageController::class, 'sitemap'])->name('sitemap')->middleware('lscache:no-cache');
Route::get('/robots.txt', [PageController::class, 'robots'])->name('robots')->middleware('lscache:no-cache');
Route::get('/csrf', function () {
    $response = csrf_token();

    return response($response, 200);
})->middleware('lscache:private;max-age=900');

Route::middleware(['auth', 'lscache:no-cache'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'index'])->name('profile.index');
    Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::delete('/profile/clean-notifications', [ProfileController::class, 'cleanNotification'])->name('profile.clean-notification');
});

Route::middleware('lscache:no-cache')->group(function () {
    Route::get('/api/comments', [\App\Http\Controllers\Api\CommentController::class, 'index']);
    Route::get('/api/notifications', [\App\Http\Controllers\Api\NotificationController::class, 'index']);
    Route::post('/api/notifications/read', [\App\Http\Controllers\Api\NotificationController::class, 'readAll'])->withoutMiddleware(VerifyCsrfToken::class);
});

Route::middleware(['auth', 'lscache:no-cache'])->group(function () {
    Route::post('/api/comments', [\App\Http\Controllers\Api\CommentController::class, 'store'])->withoutMiddleware(VerifyCsrfToken::class);
    Route::put('/api/comments/{comment:id}', [\App\Http\Controllers\Api\CommentController::class, 'update'])->withoutMiddleware(VerifyCsrfToken::class);
    Route::delete('/api/comments/{comment:id}', [\App\Http\Controllers\Api\CommentController::class, 'destroy'])->withoutMiddleware(VerifyCsrfToken::class);
});

Route::get('/media/resize/{path}', [ImageController::class, 'resize'])->where(['path' => '.+'])->middleware(['lscache:private', 'lstags:public:media;']);

Route::get('/blog', [BlogController::class, 'index'])->name('blog.index')->middleware(['lscache:private', 'lstags:public:blog;']);
Route::get('/blog/{post:slug}', [BlogController::class, 'show'])->where(['post' => '[a-z0-9\-]+'])->name('blog.show')->middleware(['lscache:private', 'lstags:public:blog;']);
Route::get('/blog/category/{category:slug}', [BlogController::class, 'category'])->where(['category' => '[a-z0-9\-]+'])->name('blog.category')->middleware(['lscache:private', 'lstags:public:blog;']);

Route::get('/{post:slug}', [PageController::class, 'show'])->where(['post' => '[a-z0-9\-]+'])->name('page.show')->middleware(['lscache:private', 'lstags:public:post;']);
