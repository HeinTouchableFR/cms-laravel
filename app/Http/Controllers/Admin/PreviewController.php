<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Content;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PreviewController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:content-list|content-create|content-edit|content-delete', ['only' => ['index', 'template']]);
    }

    /**
     * @throws \JsonException
     */
    public function index(Request $request): \Illuminate\Contracts\View\View|\Illuminate\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\Foundation\Application
    {
        $content = json_decode($request->getContent(), true, 512, JSON_THROW_ON_ERROR);

        $post = new Content();

        $post->id = 9_999_999;
        $post->title = 'Lorem ipsum dolor';
        $post->slug = 'lorem-ipsum-dolor';
        $post->user_id = (int) Auth::user()?->id;
        $post->created_at = now();

        if (array_is_list($content)) {
            return view('admin.preview.index', [
                'blocs' => $content,
                'content' => $post,
                'menu' => route('home'),
            ]);
        }

        return view(theme().'.views.'.$content['_name'], [
            'bloc' => $content,
            'content' => $post,
            'animate' => 'no-animate',
            'menu' => route('home'),
        ]);
    }

    /**
     * @throws \JsonException
     */
    public function template(Request $request): \Illuminate\Contracts\View\View|\Illuminate\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\Foundation\Application
    {
        $content = json_decode($request->getContent(), true, 512, JSON_THROW_ON_ERROR);

        $categories = DB::table('categories')
            ->join('contents', 'categories.id', '=', 'contents.category_id')
            ->where('contents.online', true)
            ->select(DB::raw('categories.*, COUNT(categories.id) as count'))
            ->groupBy('categories.id')
            ->get();

        $posts = Content::where('type', 'blog')->where('online', true)->paginate(10);

        if (array_is_list($content)) {
            return view('admin.preview.template', [
                'blocs' => $content,
                'title' => 'Blog',
                'posts' => $posts,
                'menu' => route('home'),
                'categories' => $categories,
            ]);
        }

        return view(theme().'.views.'.$content['_name'], [
            'bloc' => $content,
            'title' => 'Blog',
            'posts' => $posts,
            'animate' => 'no-animate',
            'menu' => route('home'),
            'categories' => $categories,
        ]);
    }
}
