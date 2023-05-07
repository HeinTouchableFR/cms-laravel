<?php

use App\Http\Controllers\Admin\BlogContentController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\TagController;
use App\Http\Controllers\Admin\PageContentController;
use App\Http\Controllers\Admin\TemplateContentController;
use \App\Http\Controllers\Admin\AttachmentController;
use \App\Http\Controllers\Admin\OptionController;
use \App\Http\Controllers\Admin\RoleController;
use \App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->prefix('admin')->name('admin.')->group(function () {
    Route::resource('blog', BlogContentController::class)->except(['show']);
    Route::resource('category', CategoryController::class)->except(['show']);

    Route::resource('tag', TagController::class)->except(['show']);
    Route::post('/tag/position', [TagController::class, 'position'])->name('tag.positions')->withoutMiddleware(\App\Http\Middleware\VerifyCsrfToken::class);
    Route::get('/tag/search', [TagController::class, 'search'])->name('tag.search')->withoutMiddleware(\App\Http\Middleware\VerifyCsrfToken::class);

    Route::resource('page', PageContentController::class)->except(['show']);

    Route::resource('template', TemplateContentController::class)->except(['show']);

    Route::resource('role', RoleController::class)->except(['show']);

    Route::resource('user', UserController::class)->except(['show']);
    Route::post('/user/{user:id}/ban', [UserController::class, 'ban'])->where(['user' => '[0-9]+'])->name('user.ban');
    Route::post('/user/{user:id}/unban', [UserController::class, 'unban'])->where(['user' => '[0-9]+'])->name('user.unban');
    Route::post('/user/{user:id}/confirm', [UserController::class, 'confirm'])->where(['user' => '[0-9]+'])->name('user.confirm');

    Route::get('/', [\App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('index');

    Route::post('/preview', [\App\Http\Controllers\Admin\PreviewController::class, 'index'])->name('preview.index')->withoutMiddleware(\App\Http\Middleware\VerifyCsrfToken::class);
    Route::post('/preview/template', [\App\Http\Controllers\Admin\PreviewController::class, 'template'])->name('preview.template')->withoutMiddleware(\App\Http\Middleware\VerifyCsrfToken::class);


    Route::get('/options', [OptionController::class, 'index'])->name('options.index');
    Route::post('/options', [OptionController::class, 'update'])->name('options.update');

    Route::prefix('/attachment')->group(function () {
        Route::post('/', [AttachmentController::class, 'update'])->withoutMiddleware(\App\Http\Middleware\VerifyCsrfToken::class);
        Route::post('/{attachment}', [AttachmentController::class, 'update'])->withoutMiddleware(\App\Http\Middleware\VerifyCsrfToken::class);
        Route::delete('/{attachment}', [AttachmentController::class, 'destroy'])->withoutMiddleware(\App\Http\Middleware\VerifyCsrfToken::class);

        Route::get('/folders', [AttachmentController::class, 'folders']);
        Route::get('/files', [AttachmentController::class, 'files']);
    });
});
