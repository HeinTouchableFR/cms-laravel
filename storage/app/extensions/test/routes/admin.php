<?php

Route::get('test', [Extensions\test\Controllers\Admin\TestController::class, 'index'])->name('test.index');
