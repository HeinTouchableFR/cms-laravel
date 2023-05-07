@extends('admin.layout.card')

@section('title')
    @if($tag->exists)
        Editer le tag
    @else
        Créer le tag
    @endif
@endsection

@section('card-title')
    @if($tag->exists)
        {!! icon('pen') !!} Editer le tag
    @else
        {!! icon('pen') !!} Créer le tag
    @endif
@endsection

@section('meta')
    <meta name="turbolinks-visit-control" content="reload">
@endsection
@section('content')
    <form class="stacked"
          action="{{ route($tag->exists ? 'admin.tag.update' : 'admin.tag.store', $tag) }}"
          method="POST">
        @csrf
        @method($tag->exists ? 'put' : 'post')
        <div class="grid">
            @include('shared.input', ['label' => 'Nom', 'name' => 'name', 'value' => $tag->name])
            @include('shared.input', ['label' => 'URL', 'name' => 'slug', 'value' => $tag->slug])
            @include('shared.input', ['label' => 'Description', 'name' => 'description', 'value' => $tag->description, 'type' => 'textarea'])
            @include('shared.switch', ['label' => 'Visible ?', 'name' => 'visible', 'value' => $tag->visible, 'current' => true])
            @include('shared.select', ['label' => 'Parent', 'name' => 'tag_id', 'value' => $tag->tag_id, 'options' => $tags->map(fn($t) => (object)['key' => $t->id, 'label' => $t->name])])
            <div class="full m-top-2">
                <button type="submit" class="btn primary">Sauvegarder</button>
            </div>
        </div>
    </form>
@endsection
