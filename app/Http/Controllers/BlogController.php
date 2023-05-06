<?php

namespace App\Http\Controllers;

use App\Models\Content;
use App\Models\Option;
use Illuminate\Http\Request;
use Illuminate\Contracts\View\View;

class BlogController extends Controller
{
    /**
     * @throws \JsonException
     */
    public function index(): View
    {
        $posts = Content::where('type', 'blog')->paginate(10);
        return $this->renderListing('Blog', $posts);
    }


    public function show(string $post): View
    {
        return view('blogs.show', [
            'menu' => route('blog.index'),
            'content' => Content::where('type', 'blog')->where('slug', $post)->firstOrFail()
        ]);
    }

    /**
     * @throws \JsonException
     */
    public function renderListing(string $title, $posts, array $params = []): View
    {
        $categories = [];


        return view('blogs.index', array_merge(
            [
                "posts" => $posts,
                "categories" => $categories,
                "title" => $title,
                'content' => template('blog'),
                "menu" => route('blog.index'),
            ],
            $params
        ));
    }
}
