<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Content;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PreviewController extends Controller
{
    function __construct()
    {
        $this->middleware('permission:content-list|content-create|content-edit|content-delete', ['only' => ['index', 'template']]);
    }

    /**
     * @throws \JsonException
     */
    public function index(Request $request)
    {
        $content = json_decode($request->getContent(), true, 512, JSON_THROW_ON_ERROR);

        $post = new Content();

        $post->id = 9_999_999;
        $post->title = 'Lorem ipsum dolor';
        $post->slug = 'lorem-ipsum-dolor';
        $post->user = Auth::user();
        $post->created_at = now();

        if (array_is_list($content)) {
            return view('admin.preview.index', [
                "blocs" => $content,
                "content" => $post,
                "menu" => route('home')
            ]);
        }

        return view(theme() . '.views.' . $content['_name'], [
            "bloc" => $content,
            "content" => $post,
            "animate" => "no-animate",
            "menu" => route('home')
        ]);
    }

    /**
     * @throws \JsonException
     */
    public function template(Request $request)
    {
        $content = json_decode($request->getContent(), true, 512, JSON_THROW_ON_ERROR);

        if (array_is_list($content)) {
            return view('admin.preview.template', [
                "blocs" => $content,
                "menu" => route('home')
            ]);
        }

        return view(theme() . '.views.' . $content['_name'], [
            "bloc" => $content,
            "animate" => "no-animate",
            "menu" => route('home')
        ]);
    }
}
