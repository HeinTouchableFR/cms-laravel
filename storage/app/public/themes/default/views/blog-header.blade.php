@extends('default.views.layout')

@section('element')
    section
@overwrite
@section('additionalClass')
    blog-header
@overwrite

@section('content')
    <div class="container flex flex-end">
        <h1 class="reader-only">{{ $title }}</h1>
        <drop-down class="dropdown" id="categories">
            <button class="btn primary" aria-label="Sélectionner une catégorie">
                {{ !empty ($currentCategory) ? $currentCategory->name : "Toutes les catégories" }}
                {!! icon('arrow-down') !!}
            </button>
            <ul hidden>
                @if(!empty ($currentCategory))
                    <li>
                        <a href="{{ route('blog.index') }}">
                            Toutes les catégories
                        </a>
                    </li>
                @endif
                @foreach($categories as $category)
                    <li {{ (!empty ($currentCategory) and $category->id === $currentCategory->id) ? "aria-selected=\"true\"" : "" }}>
                        <a href="{{ route('blog.category', $category->slug) }}">
                            {{ $category->name }}
                            <span class="badge">{{ $category->count }}</span>
                        </a>
                    </li>
                @endforeach
            </ul>
        </drop-down>
    </div>
@overwrite
