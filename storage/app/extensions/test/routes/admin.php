<?php

Route::get('test', function () {
    return view('test.views.admin.index', [
        'menu' => route('admin.test.index')
    ]);
})->name('test.index');
