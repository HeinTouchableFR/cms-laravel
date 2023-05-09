<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Content;
use Illuminate\Contracts\View\View;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;

class BlogController extends Controller
{
    /**
     * @throws \JsonException
     */
    public function index(): View
    {
        $posts = Content::where('type', 'blog')->where('online', true)->paginate(10);

        return $this->renderListing('Blog', $posts);
    }

    /**
     * @throws \JsonException
     */
    public function category(Category $category): View
    {
        $posts = Content::where('type', 'blog')->where('online', true)->where('category_id', $category->id)->paginate(10);

        return $this->renderListing('Blog', $posts, ['currentCategory' => $category]);
    }

    public function show(string $post): View
    {
        return view('blogs.show', [
            'menu' => route('blog.index'),
            'content' => Content::where('type', 'blog')->where('slug', $post)->firstOrFail(),
        ]);
    }

    /**
     * @throws \JsonException
     */
    public function renderListing(string $title, LengthAwarePaginator $posts, array $params = []): View
    {
        $categories = DB::table('categories')
            ->join('contents', 'categories.id', '=', 'contents.category_id')
            ->where('contents.online', true)
            ->select(DB::raw('categories.*, COUNT(categories.id) as count'))
            ->groupBy('categories.id')
            ->get();

        return view('blogs.index', array_merge(
            [
                'posts' => $posts,
                'categories' => $categories,
                'title' => $title,
                'content' => template('blog'),
                'menu' => route('blog.index'),
            ],
            $params
        ));
    }
}
