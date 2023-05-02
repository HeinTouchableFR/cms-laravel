<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Content;
use \Illuminate\Contracts\View\View;
use App\Models\Option;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Symfony\Component\HttpKernel\Exception\UnprocessableEntityHttpException;

class OptionController extends Controller
{
    final public const MANAGEABLE_KEYS = [
        "sitename",
        "logo",
        "favicon",
        "description",
        "homepage",
        "header",
        "footer",
        "blog",
        "facebook",
        "twitter",
        "instagram",
        "linkedin",
        "contact-email",
        "noreply-email",
        "sav-email",
        "spam_words",
        "theme",
    ];

    public function index(): View
    {
        return view('admin.options.index', [
            'options' => Option::whereIn('key', self::MANAGEABLE_KEYS)->orderBy('created_at', 'asc')->get(),
            "blogPosts" => Content::where('type', 'post')->get(),
            "pagePosts" => Content::where('type', 'page')->get(),
            "templatePosts" => Content::whereIn('type', ['header', 'footer', 'blog'])->get(),
            "dataEndpoint" => "/admin/attachment",
        ]);
    }

    public function update(Request $request)
    {
        $data = json_decode(
            $request->getContent(),
            true,
            512,
            JSON_THROW_ON_ERROR
        );
        $key = $data["key"] ?? null;
        $value = $data["value"] ?? null;
        if (!in_array($key, self::MANAGEABLE_KEYS)) {
            throw new UnprocessableEntityHttpException(
                "Impossible de modifier cette clef"
            );
        }
        $option = Option::where('key', $key)->update(['value' => $value]);
        Artisan::call('view:clear');
        return $option;
    }
}
