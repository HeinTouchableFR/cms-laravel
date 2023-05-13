<?php

use App\Http\Controllers\Admin\AttachmentController;
use App\Http\Controllers\Admin\BlogContentController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\OptionController;
use App\Http\Controllers\Admin\PageContentController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\TagController;
use App\Http\Controllers\Admin\TemplateContentController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\ThemeController;
use App\Http\Controllers\Admin\PreviewController;
use App\Http\Controllers\Admin\DashboardController;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\VerifyCsrfToken;

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

    Route::post('/preview', [PreviewController::class, 'index'])->name('preview.index')->withoutMiddleware(VerifyCsrfToken::class);
    Route::post('/preview/template', [PreviewController::class, 'template'])->name('preview.template')->withoutMiddleware(VerifyCsrfToken::class);

    Route::get('/options', [OptionController::class, 'index'])->name('options.index');
    Route::post('/options', [OptionController::class, 'update'])->name('options.update');

    Route::get('/theme', [ThemeController::class, 'index'])->name('theme.index');
    Route::post('/theme', [ThemeController::class, 'upload'])->name('theme.upload');
    Route::post('/theme/{theme}', [ThemeController::class, 'define'])->name('theme.define');
    Route::delete('/theme/{theme}', [ThemeController::class, 'destroy'])->name('theme.destroy');

    Route::prefix('/attachment')->group(function () {
        Route::post('/', [AttachmentController::class, 'update'])->withoutMiddleware(VerifyCsrfToken::class);
        Route::post('/{attachment}', [AttachmentController::class, 'update'])->withoutMiddleware(VerifyCsrfToken::class);
        Route::delete('/{attachment}', [AttachmentController::class, 'destroy'])->withoutMiddleware(VerifyCsrfToken::class);

        Route::get('/folders', [AttachmentController::class, 'folders']);
        Route::get('/files', [AttachmentController::class, 'files']);
    });
});
