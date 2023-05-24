<?php

Route::resource('portfolio', Extensions\Portfolio\Controllers\Admin\PortfolioController::class)->except(['show']);
