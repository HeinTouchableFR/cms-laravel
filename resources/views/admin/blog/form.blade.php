@extends('admin.layout.card')

@section('title')
    @if($blog->exists)
        Editer l'article
    @else
        Créer l'article
    @endif
@endsection

@section('card-title')
    @if($blog->exists)
        {!! icon('blog') !!} Editer l'article
    @else
        {!! icon('blog') !!} Créer l'article
    @endif
@endsection

@section('meta')
    <meta name="turbolinks-visit-control" content="reload">
@endsection
@section('content')
    <form class="stacked"
          action="{{ route($blog->exists ? 'admin.blog.update' : 'admin.blog.store', $blog) }}"
          method="POST">
        @csrf
        @method($blog->exists ? 'put' : 'post')
        <div class="grid">
            @include('shared.input', ['label' => 'Titre', 'name' => 'title', 'value' => $blog->title])
            @include('shared.input', ['label' => 'URL', 'name' => 'slug', 'value' => $blog->slug])
            @include('shared.input', ['label' => 'Description', 'name' => 'description', 'value' => $blog->description, 'type' => 'textarea'])
            @include('shared.attachment', ['label' => 'Image', 'name' => 'attachment_id', 'value' => $blog->attachment?->id, 'preview' => $blog->attachment?->filename])
            @include('shared.switch', ['label' => 'En ligne ?', 'name' => 'online', 'value' => $blog->online, 'current' => true])
            @include('shared.input', ['label' => 'Date de publication', 'name' => 'created_at', 'value' => $blog->created_at, 'type' => 'datepicker'])
            @include('shared.select', ['label' => 'Catégorie', 'name' => 'category_id', 'value' => $blog->category_id, 'options' => $categories->map(fn($c) => (object)['key' => $c->id,'label' => $c->name])])
            <div class="form-group">
                <label for="tags" id="post_form_tags-ts-label">Tags</label>
                <input type="text"
                       id="tags"
                       name="tags"
                       is="input-choices"
                       data-remote="{{route('admin.tag.search')}}"
                       data-value="name"
                       data-label="name"
                       value="{{ $tags ?: '' }}"
                >
            </div>
            <editor-builder
                id="content"
                name="content"
                preview="{{ route('admin.preview.index') }}"
                iconsUrl="/themes/{{ theme() }}/assets/editor/[name].svg"
                value="{{ $blog->content ?: '[]' }}"
            ></editor-builder>
            <div class="full m-top-2">
                <button type="submit" class="btn primary">Sauvegarder</button>
            </div>
        </div>
    </form>
@endsection
