<?php

namespace App\Providers;

use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Paginator::defaultView('shared.partials.paginator');
        Paginator::defaultSimpleView('pagination::simple-bootstrap-5');

        Blade::directive('icon', function (string $name, ?int $size = null) {
            $attrs = '';
            if ($size) {
                $attrs = " width=\"{$size}px\" height=\"{$size}px\"";
            }

            return <<<HTML
                        <svg class="icon icon-{$name}"{$attrs}>
                          <use xlink:href="/sprite.svg?logo#{$name}"></use>
                        </svg>
                    HTML;
        });
    }
}
