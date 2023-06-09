<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\TemplateContentFormRequest;
use App\Models\Content;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

class TemplateContentController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:content-list|content-create|content-edit|content-delete', ['only' => ['index', 'store']]);
        $this->middleware('permission:content-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:content-edit', ['only' => ['edit', 'update']]);
        $this->middleware('permission:content-delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): View
    {
        return view('admin.templates.index', [
            'templates' => Content::whereIn('type', ['header', 'footer', 'template'])->orderBy('created_at', 'desc')->paginate(20),
            'menu' => route('admin.template.index'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): View
    {
        $template = new Content();

        return view('admin.templates.form', [
            'template' => $template,
            'menu' => route('admin.template.index'),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TemplateContentFormRequest $request): RedirectResponse
    {
        $template = new Content();
        $template->user_id = (int) Auth::user()?->id;
        $template->fill($request->validated());
        $template->save();

        return to_route('admin.template.index')->with('success', 'Le contenu a bien été créé');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Content $template): View
    {
        return view('admin.templates.form', [
            'template' => $template,
            'menu' => route('admin.template.index'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TemplateContentFormRequest $request, Content $template): RedirectResponse
    {
        $template->update($request->validated());

        return to_route('admin.template.index')->with('success', 'Le contenu a bien été modifié');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Content $template): RedirectResponse
    {
        $template->delete();

        return to_route('admin.template.index')->with('success', 'Le contenu a bien été supprimé');
    }
}
