<?php

use App\Models\Attachment;
use App\Models\Option;
use App\Models\Content;
use Illuminate\Support\Facades\Storage;

if (!function_exists('sitename')) {
    function sitename(): string
    {
        $option = Option::where('key', 'sitename')->first();

        return $option->value;
    }
}

if (!function_exists('theme')) {
    function theme(): string
    {
        $option = Option::where('key', 'theme')->first();
        return $option->value;
    }
}

if (!function_exists('logo')) {
    function logo()
    {
        $option = Option::where('key', 'logo')->first();
        return image_url($option->value);
    }
}

if (!function_exists('openGraphLogo')) {
    function openGraphLogo()
    {
        $option = Option::where('key', 'logo')->first();
        return image_url_raw($option->value);
    }
}

if (!function_exists('favicon')) {
    function favicon()
    {
        $option = Option::where('key', 'favicon')->first();
        return image_url($option->value);
    }
}

if (!function_exists('description')) {
    function description()
    {
        $option = Option::where('key', 'description')->first();

        return $option->value ?? '';
    }
}

if (!function_exists('social')) {
    function social(string $name)
    {
        $option = Option::where('key', $name)->first();

        return $option->value ?? '';
    }
}

if (!function_exists('image_url')) {
    function image_url(string|null $entity, ?int $width = null, ?int $height = null)
    {
        if (is_string($entity)) {
            $entity = Attachment::find($entity);
        }

        if (null === $entity) {
            return '';
        }
        return $entity->resize($width, $height);
    }
}

if (!function_exists('image_url_raw')) {
    function image_url_raw(string|null $entity)
    {
        if (is_string($entity)) {
            $entity = Attachment::find($entity);
        }

        if (null === $entity) {
            return '';
        }
        return Storage::disk('public')->url($entity->filename);
    }
}

if (!function_exists('icon')) {
    function icon(string $name, ?int $size = null): string
    {
        $attrs = '';
        if ($size) {
            $attrs = " width=\"{$size}px\" height=\"{$size}px\"";
        }

        return <<<HTML
                        <svg class="icon icon-{$name}"{$attrs}>
                          <use xlink:href="/sprite.svg?logo#{$name}"></use>
                        </svg>
                    HTML;
    }
}

if (!function_exists('template')) {
    /**
     * @throws JsonException
     */
    function template(string $name)
    {
        $option = Option::where('key', $name)->first();
        $content = Content::find($option->value);
        return json_decode($content->content, true, 512, JSON_THROW_ON_ERROR);
    }
}

if (!function_exists('menu_active')) {
    function menu_active(string $path)
    {
        return false;
    }
}

if (!function_exists('imageTag')) {
    function imageTag(string $entity, ?int $width = null, ?int $height = null, ?string $class = null): ?string
    {
        if (is_string($entity)) {
            $entity = Attachment::find($entity);
        }

        if($entity === null) {
            return null;
        }

        $url = image_url($entity->id, $width, $height);

        if (null !== $url) {
            $height = $height ?: '100%';
            $width = $width ?: '100%';
            return "<img loading=\"lazy\" class=\"{$class}\" src=\"{$url}\" width=\"{$width}\" height=\"{$height}\" alt=\"{$entity->filename}\"/>";
        }

        return null;
    }
}

if (!function_exists('logoTag')) {
    function logoTag(?int $width = null, ?int $height = null): string
    {
        $option = Option::where('key', 'logo')->first();
        return imageTag(
            $option->value,
            $width,
            $height
        );
    }
}

if (!function_exists('lastBlogPosts')) {
    function lastBlogPosts()
    {
        return Content::where('type', 'blog')->orderBy('created_at', 'desc')->limit(4)->get();
    }
}

if (!function_exists('countdown')) {
    function countdown(\Carbon\Carbon $date, ?string $id): string
    {
        return "<time-countdown time=\"{$date->getTimestamp()}\" id=\"{$id}\"></time-countdown>";
    }
}
