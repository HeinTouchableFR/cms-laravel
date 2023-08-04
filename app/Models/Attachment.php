<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use League\Glide\Urls\UrlBuilderFactory;

/**
 * @mixin IdeHelperAttachment
 */
class Attachment extends Model
{
    use HasFactory;

    protected $fillable = [
        'filename',
        'filesize',
    ];

    protected static function booted(): void
    {
        static::deleted(function (Attachment $item) {
            Storage::disk('public')->delete($item->filename);
        });
    }

    public function resize(?int $width = null, ?int $height = null): string
    {
        $urlBuilder = UrlBuilderFactory::create('/media/resize/', config('glide.key'));

        return $urlBuilder->getUrl($this->filename, ['w' => $width, 'h' => $height, 'fit' => 'crop', 'fm' => 'webp']);
    }
}
