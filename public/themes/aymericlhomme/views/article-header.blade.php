@extends('aymericlhomme.views.layout')

@section('element')section
@overwrite
@section('additionalClass')article-header
@overwrite

@section('content')
    <div class="container">
        <h1 class="h1 bold m-bottom-1">{{ $content->title }}</h1>
        <div class="article-header__meta">
            Posté le {{ $content->created_at }}
            @if(!empty($content->category))
                - <a href="{{ route('blog.category', $content->category->slug)}}">{{$content->category->name}}</a>
            @endif
            - Par <span>{{ $content->user->username }}</span>
        </div>
    </div>
@overwrite
