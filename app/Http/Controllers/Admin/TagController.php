<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\TagFormRequest;
use App\Http\Resources\TagResource;
use App\Models\Tag;
use \Illuminate\Contracts\View\View;
use \Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

class TagController extends Controller
{
    function __construct()
    {
        $this->middleware('permission:tag-list|tag-create|tag-edit|tag-delete', ['only' => ['index', 'store']]);
        $this->middleware('permission:tag-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:tag-edit', ['only' => ['edit', 'update']]);
        $this->middleware('permission:tag-delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): View
    {
        return view('admin.tags.index', [
            'tags' => TagResource::collection(Tag::orderBy('position', 'ASC')->where('visible', '1')->where('tag_id', null)->with('children')->get())->toJson(),
            'menu' => route('admin.tag.index')
        ]);
    }

    /**
     * @throws \JsonException
     */
    public function position(Request $request): \Illuminate\Http\JsonResponse
    {
        ['positions' => $positions] = json_decode((string)$request->getContent(), true, 512, JSON_THROW_ON_ERROR);
        $positionById = array_reduce($positions, function ($acc, $position) {
            $acc[$position['id']] = $position;

            return $acc;
        }, []);
        $tags = Tag::find(array_keys($positionById));
        foreach ($tags as $tag) {
            $position = $positionById[$tag->id];
            $parent = null;
            if ($position['parent'] > 0) {
                /** @var Tag $parent */
                $parent = Tag::find($position['parent']);
            }
            $tag->tag_id = $parent->id;
            $tag->position = $position['position'] + 1;
            $tag->save();
        }

        return response()->json([]);
    }

    public function search(Request $request): \Illuminate\Http\JsonResponse
    {
        $search = $request->query->get('q');
        if (null === $search) {
            return response()->json([]);
        }

        $tags = Tag::whereRaw('LOWER(tags.name) like "'. strtolower($search) . '%"')->orderBy(DB::raw('LENGTH(tags.name)'))->get()->toArray();

        return response()->json(array_map(fn ($t) => [
            'name' => $t['name'],
            'slug' => $t['slug'],
        ], $tags));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): View
    {
        $tag = new tag();

        return view('admin.tags.form', [
            'tag' => $tag,
            'tags' => Tag::all(),
            'menu' => route('admin.tag.index')
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TagFormRequest $request): RedirectResponse
    {
        $tag = new Tag();
        $tag->fill($request->validated());
        $tag->save();
        return to_route('admin.tag.index')->with('success', 'Le contenu a bien été créé');
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tag $tag): View
    {
        return view('admin.tags.form', [
            'tag' => $tag,
            'tags' => Tag::all(),
            'menu' => route('admin.tag.index')
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TagFormRequest $request, Tag $tag): RedirectResponse
    {
        $tag->update($request->validated());
        return to_route('admin.tag.index')->with('success', 'Le contenu a bien été modifié');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tag $tag): RedirectResponse
    {
        $tag->delete();
        return to_route('admin.tag.index')->with('success', 'Le contenu a bien été supprimé');
    }
}
