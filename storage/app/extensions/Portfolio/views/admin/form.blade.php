@extends('admin.layout.card')

@section('title')
    @if($portfolio->exists)
        Editer le contenu
    @else
        Créer le contenu
    @endif
@endsection

@section('card-title')
    @if($portfolio->exists)
        {!! icon('portfolio') !!} Editer le contenu
    @else
        {!! icon('portfolio') !!} Créer le contenu
    @endif
@endsection

@section('meta')
    <meta name="turbolinks-visit-control" content="reload">
@endsection

@section('content')
    <form class="stacked"
          action="{{ route($portfolio->exists ? 'admin.portfolio.update' : 'admin.portfolio.store', $portfolio) }}"
          method="POST">
        @csrf
        @method($portfolio->exists ? 'put' : 'post')
        <div class="grid">
            @include('shared.input', ['label' => 'Titre', 'name' => 'title', 'value' => $portfolio->title])
            @include('shared.input', ['label' => 'URL', 'name' => 'slug', 'value' => $portfolio->slug])
            @include('shared.input', ['label' => 'Description', 'name' => 'description', 'value' => $portfolio->description, 'type' => 'textarea'])
            @include('shared.attachment', ['label' => 'Image', 'name' => 'attachment_id', 'value' => $portfolio->attachment?->id, 'preview' => $portfolio->attachment?->filename])
            @include('shared.switch', ['label' => 'En ligne ?', 'name' => 'online', 'value' => $portfolio->online, 'current' => true])
            @include('shared.input', ['label' => 'Date de publication', 'name' => 'created_at', 'value' => $portfolio->created_at, 'type' => 'datepicker'])
            <editor-builder
                id="content"
                name="content"
                preview="{{ route('admin.preview.index') }}"
                iconsUrl="/themes/{{ theme() }}/assets/editor/[name].svg"
                value="{{ $portfolio->content ?: '[]' }}"
            ></editor-builder>
            <div class="full m-top-2">
                <button type="submit" class="btn primary">Sauvegarder</button>
            </div>
        </div>
    </form>
@endsection
