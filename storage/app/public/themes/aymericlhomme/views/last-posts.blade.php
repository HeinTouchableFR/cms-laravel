@extends('aymericlhomme.views.layout')

@section('element')
    section
@overwrite
@section('additionalClass')
    last-posts
@overwrite

@section('content')
    <div class="container">
        @if(key_exists('title', $bloc))
            <h2 class="h2 bold text-center m-bottom-4 {{ $animate }} fadeup"
                style="color: {{ $bloc['titleColor'] ?: 'var(--contrast)' }};">{{ $bloc['title'] }}</h2>
        @endif
        {!! $bloc['content'] !!}
        <div class="last-posts__items">
            @foreach(lastContentPosts('portfolio') as $post)
                @php
                    $link = route($post->type . '.show', $post->slug)
                @endphp
                <div class="last-posts__card {{ $animate }}">
                    <div class="last-posts__card-imageBox">
                        <span class="last-posts__card-imageBox-overlay"></span>
                        <div class="last-posts__card-imageBox-image">
                            @if($post->attachment_id)
                                {!! imageTag($post->attachment_id, 500, 300) !!}
                            @endif
                        </div>
                    </div>
                    <div class="last-posts__card-content">
                        <h3 class="h3 bold text-center"
                            style="color: {{ $bloc['titleColor'] ?: 'var(--contrast)' }};">{{ $post->title }}</h3>
                        <p class="m-block-3 p-inline-2 text-justify">{{ $post->description }}</p>
                        <a class="btn primary" href="{{ $link }}">En savoir plus</a>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
@overwrite
