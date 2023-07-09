@extends('admin.layout.card')

@section('title')
    @if($page->exists)
        Editer la page
    @else
        Créer la page
    @endif
@endsection

@section('card-title')
    @if($page->exists)
        {!! icon('page') !!} Editer la page
    @else
        {!! icon('page') !!} Créer la page
    @endif
@endsection

@section('meta')
    <meta name="turbolinks-visit-control" content="reload">
@endsection

@section('content')
    <form class="stacked"
          action="{{ route($page->exists ? 'admin.page.update' : 'admin.page.store', $page) }}"
          method="POST">
        @csrf
        @method($page->exists ? 'put' : 'post')
        <div class="grid">
            @include('shared.input', ['label' => 'Titre', 'name' => 'title', 'value' => $page->title])
            @include('shared.input', ['label' => 'URL', 'name' => 'slug', 'value' => $page->slug])
            @include('shared.input', ['label' => 'Description', 'name' => 'description', 'value' => $page->description, 'type' => 'textarea'])
            @include('shared.attachment', ['label' => 'Image', 'name' => 'attachment_id', 'value' => $page->attachment?->id, 'preview' => $page->attachment?->filename])
            @include('shared.switch', ['label' => 'En ligne ?', 'name' => 'online', 'value' => $page->online, 'current' => true])
            @include('shared.input', ['label' => 'Date de publication', 'name' => 'created_at', 'value' => $page->created_at, 'type' => 'datepicker'])
            <editor-builder
                id="content"
                name="content"
                preview="{{ route('admin.preview.index') }}"
                iconsUrl="/themes/{{ theme() }}/assets/editor/[name].svg"
                value="{{ $page->content ?: '[]' }}"
            ></editor-builder>
            <div class="full m-top-2">
                <button type="submit" class="btn primary">Sauvegarder</button>
            </div>
        </div>
    </form>
@endsection
