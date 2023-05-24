<?php

namespace Extensions\Portfolio\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Content;
use Illuminate\Contracts\View\View;

class PortfolioController extends Controller
{
    /**
     * @throws \JsonException
     */
    public function index(): View
    {
        $posts = Content::where('type', 'portfolio')->where('online', true)->paginate(10);

        return view('Portfolio.views.index', [
            'posts' => $posts,
            'title' => 'Portfolio',
            'content' => template('blog'),
            'menu' => route('portfolio.index'),
        ]);
    }

    public function show(string $portfolio): View
    {
        return view('Portfolio.views.show', [
            'menu' => route('portfolio.show', $portfolio),
            'content' => Content::where('type', 'portfolio')->where('slug', $portfolio)->firstOrFail(),
        ]);
    }
}
