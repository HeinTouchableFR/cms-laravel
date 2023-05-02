<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\PageContentFormRequest;
use App\Models\Content;
use \Illuminate\Contracts\View\View;
use \Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

class PageContentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): View
    {
        return view('admin.pages.index', [
            'pages' => Content::where('type', 'page')->orderBy('created_at', 'desc')->paginate(20)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() :View
    {
        $page = new Content();

        return view('admin.pages.form', [
            'page' => $page
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PageContentFormRequest $request): RedirectResponse
    {
        $page = new Content();
        $page->user_id = Auth::user()->id;
        $page->type = 'page';
        $page->fill($request->validated());
        $page->save();
        return to_route('admin.page.index')->with('success', 'Le contenu a bien été créé');
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Content $page): View
    {
        return view('admin.pages.form', [
            'page' => $page
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PageContentFormRequest $request, Content $page): RedirectResponse
    {
        $page->update($request->validated());
        return to_route('admin.page.index')->with('success', 'Le contenu a bien été modifié');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Content $page): RedirectResponse
    {
        $page->delete();
        return to_route('admin.page.index')->with('success', 'Le contenu a bien été supprimé');
    }
}
