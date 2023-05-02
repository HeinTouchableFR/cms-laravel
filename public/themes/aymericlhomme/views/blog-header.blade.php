@extends('aymericlhomme.views.layout')

@section('element')section
@overwrite
@section('additionalClass')blog-header
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
                @foreach($categories as $category)
                    <li {{ !empty ($currentCategory) and $category->id == $currentCategory->id ? "aria-selected=\"true\"" : "" }}>
                        <a href="">
                            {{ $category->name }}
                            <span class="badge">{{ $category->postsCount }}</span>
                        </a>
                    </li>
                @endforeach
            </ul>
        </drop-down>
    </div>
@overwrite
