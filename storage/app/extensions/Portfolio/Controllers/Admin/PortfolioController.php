<?php

namespace Extensions\Portfolio\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Content;
use App\Models\Tag;
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
            'categories' => Category::all(),
            'tags' => '',
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
        $portfolio->tags()->sync($this->reverseTagTransform($request->validated('tags')));

        return to_route('admin.portfolio.index')->with('success', 'Le contenu a bien été créé');
    }

    public function reverseTagTransform(?string $value): \Illuminate\Support\Collection|array
    {
        if (empty($value)) {
            return [];
        }

        // On construit un tableau contenant les noms des tags en clef et la version en valeur
        $versions = [];
        $tags = explode(',', $value);
        foreach ($tags as $tag) {
            $parts = explode(':', trim($tag));
            if (!empty($parts[0])) {
                $versions[$parts[0]] = $parts[1] ?? null;
            }
        }

        // On trouve les tags depuis la base de données
        return Tag::whereIn('name', array_keys($versions))->get();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Content $portfolio): View
    {
        return view('Portfolio.views.admin.form', [
            'portfolio' => $portfolio,
            'categories' => Category::all(),
            'tags' => $this->tagTransform($portfolio->tags()->get()->toArray()),
            'menu' => route('admin.portfolio.index'),
        ]);
    }

    public function tagTransform(array $array): ?string
    {
        if (!is_array($array)) {
            return null;
        }

        return implode(',', array_map(fn($tag): ?string => $tag['name'], $array));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PortfolioFormRequest $request, Content $portfolio): RedirectResponse
    {
        $portfolio->update($request->validated());
        $portfolio->tags()->sync($this->reverseTagTransform($request->validated('tags')));

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
