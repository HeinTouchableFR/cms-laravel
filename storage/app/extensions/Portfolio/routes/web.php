<?php

Route::get('/portfolio', [\Extensions\Portfolio\Controllers\PortfolioController::class, 'index'])->name('portfolio.index');
Route::get('/portfolio/{portfolio:slug}', [\Extensions\Portfolio\Controllers\PortfolioController::class, 'show'])->where(['portfolio' => '[a-z0-9\-]+'])->name('portfolio.show');
