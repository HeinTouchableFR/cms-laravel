<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\BlogContentFormRequest;
use App\Models\Content;
use \Illuminate\Contracts\View\View;
use \Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

class BlogContentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): View
    {
        return view('admin.blog.index', [
            'blogs' => Content::where('type', 'blog')->orderBy('created_at', 'desc')->paginate(20)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() :View
    {
        $blog = new Content();

        return view('admin.blog.form', [
            'blog' => $blog
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(BlogContentFormRequest $request): RedirectResponse
    {
        $blog = new Content();
        $blog->user_id = Auth::user()->id;
        $blog->type = 'blog';
        $blog->fill($request->validated());
        $blog->save();
        return to_route('admin.blog.index')->with('success', 'Le contenu a bien été créé');
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Content $blog): View
    {
        return view('admin.blog.form', [
            'blog' => $blog
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(BlogContentFormRequest $request, Content $blog): RedirectResponse
    {
        $blog->update($request->validated());
        return to_route('admin.blog.index')->with('success', 'Le contenu a bien été modifié');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Content $blog): RedirectResponse
    {
        $blog->delete();
        return to_route('admin.blog.index')->with('success', 'Le contenu a bien été supprimé');
    }
}
