<?php

namespace Extensions\Portfolio\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Content;
use Extensions\Portfolio\Requests\Admin\PortfolioFormRequest;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

class PortfolioController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index(): View
    {
        return view('Portfolio.views.admin.index', [
            'items' => Content::where('type', 'portfolio')->orderBy('created_at', 'desc')->paginate(20),
            'menu' => route('admin.portfolio.index'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): View
    {
        $portfolio = new Content();

        return view('Portfolio.views.admin.form', [
            'portfolio' => $portfolio,
            'menu' => route('admin.portfolio.index'),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PortfolioFormRequest $request): RedirectResponse
    {
        $portfolio = new Content();
        $portfolio->user_id = (int)Auth::user()?->id;
        $portfolio->type = 'portfolio';
        $portfolio->fill($request->validated());
        $portfolio->save();

        return to_route('admin.portfolio.index')->with('success', 'Le contenu a bien été créé');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Content $portfolio): View
    {
        return view('Portfolio.views.admin.form', [
            'portfolio' => $portfolio,
            'menu' => route('admin.portfolio.index'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PortfolioFormRequest $request, Content $portfolio): RedirectResponse
    {
        $portfolio->update($request->validated());

        return to_route('admin.portfolio.index')->with('success', 'Le contenu a bien été modifié');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Content $portfolio): RedirectResponse
    {
        $portfolio->delete();

        return to_route('admin.portfolio.index')->with('success', 'Le contenu a bien été supprimé');
    }
}
