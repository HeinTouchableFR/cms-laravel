<?php

Route::get('test', function () {
    return view('test.views.index', [
        'menu' => route('test.index')
    ]);
})->name('test.index');
