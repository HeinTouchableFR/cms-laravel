<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\BlogContentFormRequest;
use App\Models\Category;
use App\Models\Content;
use App\Models\Tag;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;

class BlogContentController extends Controller
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
        return view('admin.blog.index', [
            'blogs' => Content::where('type', 'blog')->orderBy('created_at', 'desc')->paginate(20),
            'menu' => route('admin.blog.index'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): View
    {
        $blog = new Content();

        return view('admin.blog.form', [
            'blog' => $blog,
            'categories' => Category::all(),
            'tags' => '',
            'menu' => route('admin.blog.index'),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(BlogContentFormRequest $request): RedirectResponse
    {
        $blog = new Content();
        $blog->user_id = (int) Auth::user()?->id;
        $blog->type = 'blog';
        $blog->fill($request->validated());
        $blog->tags()->sync($this->reverseTagTransform($request->validated('tags')));
        $blog->save();

        return to_route('admin.blog.index')->with('success', 'Le contenu a bien été créé');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Content $blog): View
    {
        return view('admin.blog.form', [
            'blog' => $blog,
            'categories' => Category::all(),
            'tags' => $this->tagTransform($blog->tags()->get()->toArray()),
            'menu' => route('admin.blog.index'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(BlogContentFormRequest $request, Content $blog): RedirectResponse
    {
        $blog->update($request->validated());
        $blog->tags()->sync($this->reverseTagTransform($request->validated('tags')));

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

    public function tagTransform(array $array): ?string
    {
        if (! is_array($array)) {
            return null;
        }

        return implode(',', array_map(fn ($tag): ?string => $tag['name'], $array));
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
            if (! empty($parts[0])) {
                $versions[$parts[0]] = $parts[1] ?? null;
            }
        }

        // On trouve les tags depuis la base de données
        return Tag::whereIn('name', array_keys($versions))->get();
    }
}
