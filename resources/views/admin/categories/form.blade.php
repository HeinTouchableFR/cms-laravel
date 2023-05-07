@extends('admin.layout.card')

@section('title')
    @if($category->exists)
        Editer la catégorie
    @else
        Créer la catégorie
    @endif
@endsection

@section('card-title')
    @if($category->exists)
        {!! icon('pen') !!} Editer la catégorie
    @else
        {!! icon('pen') !!} Créer la catégorie
    @endif
@endsection

@section('meta')
    <meta name="turbolinks-visit-control" content="reload">
@endsection

@section('content')
    <form class="stacked"
          action="{{ route($category->exists ? 'admin.category.update' : 'admin.category.store', $category) }}"
          method="POST">
        @csrf
        @method($category->exists ? 'put' : 'post')
        <div class="grid">
            @include('shared.input', ['label' => 'Titre', 'name' => 'name', 'value' => $category->name])
            @include('shared.input', ['label' => 'URL', 'name' => 'slug', 'value' => $category->slug])
            <div class="full m-top-2">
                <button type="submit" class="btn primary">Sauvegarder</button>
            </div>
        </div>
    </form>
@endsection
