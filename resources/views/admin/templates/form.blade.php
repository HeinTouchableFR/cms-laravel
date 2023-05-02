@extends('admin.layout.card')

@section('title')
    @if($template->exists)
        Editer le modèle
    @else
        Créer le modèle
    @endif
@endsection

@section('card-title')
    @if($template->exists)
        {!! icon('pen') !!} Editer le modèle
    @else
        {!! icon('pen') !!} Créer le modèle
    @endif
@endsection

@section('meta')
    <meta name="turbolinks-visit-control" content="reload">
@endsection

@section('content')
    <form class="stacked"
          action="{{ route($template->exists ? 'admin.template.update' : 'admin.template.store', $template) }}"
          method="POST">
        @csrf
        @method($template->exists ? 'put' : 'post')
        <div class="grid">
            @include('shared.input', ['label' => 'Titre', 'name' => 'title', 'value' => $template->title])
            @include('shared.input', ['label' => 'URL', 'name' => 'slug', 'value' => $template->slug])
            @include('shared.input', ['label' => 'Description', 'name' => 'description', 'value' => $template->description, 'type' => 'textarea'])
            @include('shared.attachment', ['label' => 'Image', 'name' => 'attachment_id', 'value' => $template->attachment?->id, 'preview' => $template->attachment?->filename])
            @include('shared.switch', ['label' => 'En ligne ?', 'name' => 'online', 'value' => $template->online])
            @include('shared.input', ['label' => 'Date de publication', 'name' => 'created_at', 'value' => $template->created_at, 'type' => 'datepicker'])
            @include('shared.select', ['label' => 'Type de modèle', 'name' => 'type', 'value' => $template->type, 'options' => array((object) ['key' => 'header','label' => 'En-tête'],(object) ['key' => 'footer','label' => 'Pied de page'],(object) ['key' => 'template','label' => 'Modèle'])])
            <div x-data="{open: false}">
                <button @click="open = true" type="button" class="btn primary">Éditer le contenu</button>
                <editor-builder
                    :hidden="open === false"
                    @close="open = false"
                    id="content"
                    name="content"
                    preview="{{ route('admin.preview.template') }}"
                    mode="template"
                    iconsUrl="/themes/{{ theme() }}/assets/editor/[name].svg"
                    value="{{ $template->content ?: '[]' }}"
                ></editor-builder>
            </div>
            <div class="full m-top-2">
                <button type="submit" class="btn primary">Sauvegarder</button>
            </div>
        </div>
    </form>
@endsection
