<?php

namespace App\Providers;

use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;
use Illuminate\Routing\UrlGenerator;

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
    public function boot(UrlGenerator $url): void
    {
        if(env('APP_ENV') !== 'dev')
        {
            $url->forceScheme('https');
        }

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
