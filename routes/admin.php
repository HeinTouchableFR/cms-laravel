<?php

use App\Http\Controllers\Admin\AttachmentController;
use App\Http\Controllers\Admin\BlogContentController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ExtensionController;
use App\Http\Controllers\Admin\OptionController;
use App\Http\Controllers\Admin\PageContentController;
use App\Http\Controllers\Admin\PreviewController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\TagController;
use App\Http\Controllers\Admin\TemplateContentController;
use App\Http\Controllers\Admin\ThemeController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Middleware\VerifyCsrfToken;
use App\Models\Extension;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->prefix('admin')->name('admin.')->group(function () {
    Route::resource('blog', BlogContentController::class)->except(['show']);
    Route::resource('category', CategoryController::class)->except(['show']);

    Route::resource('tag', TagController::class)->except(['show']);
    Route::post('/tag/position', [TagController::class, 'position'])->name('tag.positions')->withoutMiddleware(VerifyCsrfToken::class);
    Route::get('/tag/search', [TagController::class, 'search'])->name('tag.search')->withoutMiddleware(VerifyCsrfToken::class);

    Route::resource('page', PageContentController::class)->except(['show']);

    Route::resource('template', TemplateContentController::class)->except(['show']);

    Route::resource('role', RoleController::class)->except(['show']);

    Route::resource('user', UserController::class)->except(['show']);
    Route::post('/user/{user:id}/ban', [UserController::class, 'ban'])->where(['user' => '[0-9]+'])->name('user.ban');
    Route::post('/user/{user:id}/unban', [UserController::class, 'unban'])->where(['user' => '[0-9]+'])->name('user.unban');
    Route::post('/user/{user:id}/confirm', [UserController::class, 'confirm'])->where(['user' => '[0-9]+'])->name('user.confirm');

    Route::get('/', [DashboardController::class, 'index'])->name('index');
    Route::post('/mail', [DashboardController::class, 'mail'])->name('mail');
    Route::delete('/cache', [DashboardController::class, 'cache'])->name('cache');
    Route::delete('/{comment}/destroy', [DashboardController::class, 'destroy'])->name('destroy');

    Route::post('/preview', [PreviewController::class, 'index'])->name('preview.index')->withoutMiddleware(VerifyCsrfToken::class);
    Route::post('/preview/template', [PreviewController::class, 'template'])->name('preview.template')->withoutMiddleware(VerifyCsrfToken::class);

    Route::get('/options', [OptionController::class, 'index'])->name('options.index');
    Route::post('/options', [OptionController::class, 'update'])->name('options.update');

    Route::get('/theme', [ThemeController::class, 'index'])->name('theme.index');
    Route::post('/theme', [ThemeController::class, 'upload'])->name('theme.upload');
    Route::post('/theme/{theme}', [ThemeController::class, 'define'])->name('theme.define');
    Route::delete('/theme/{theme}', [ThemeController::class, 'destroy'])->name('theme.destroy');

    Route::get('/extension', [ExtensionController::class, 'index'])->name('extension.index');
    Route::post('/extension', [ExtensionController::class, 'upload'])->name('extension.upload');
    Route::post('/extension/{extension}', [ExtensionController::class, 'toggle'])->name('extension.toggle');
    Route::delete('/extension/{extension}', [ExtensionController::class, 'destroy'])->name('extension.destroy');

    Route::get('/spam', [\App\Http\Controllers\Admin\SpamController::class, 'index'])->name('spam.index');
    Route::post('/spam/detect', [\App\Http\Controllers\Admin\SpamController::class, 'detect'])->name('spam.detect');
    Route::delete('/spam/{comment:id}/unspam', [\App\Http\Controllers\Admin\SpamController::class, 'unspam'])->name('spam.unspam')->withoutMiddleware(VerifyCsrfToken::class);

    Route::prefix('/attachment')->group(function () {
        Route::post('/', [AttachmentController::class, 'update'])->withoutMiddleware(VerifyCsrfToken::class);
        Route::post('/{attachment}', [AttachmentController::class, 'update'])->withoutMiddleware(VerifyCsrfToken::class);
        Route::delete('/{attachment}', [AttachmentController::class, 'destroy'])->withoutMiddleware(VerifyCsrfToken::class);

        Route::get('/folders', [AttachmentController::class, 'folders']);
        Route::get('/files', [AttachmentController::class, 'files']);
    });

    if (Schema::hasTable('extensions')) {
        $extensions = Extension::where('active', 1)->get();
        foreach ($extensions as $item) {
            $file = Storage::path("extensions/$item->name/routes/admin.php");
            if (File::exists($file)) {
                require $file;
            }
        }
    }
});
