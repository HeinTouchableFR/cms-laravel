@extends('aymericlhomme.views.layout')

@section('element')section
@overwrite
@section('additionalClass')blog-layout
@overwrite

@section('content')
    <div class="container">
        <div class="blog-layout__images m-auto @if($bloc['invertingImages'] != '')inverted @endif">
            <div class="blog-layout__images-shape"></div>
            @if(key_exists('mainImage', $bloc))
                {!! imageTag($bloc['mainImage'], 785, 538) !!}
            @endif
            @if(key_exists('secondaryImage', $bloc))
                {!! imageTag($bloc['secondaryImage'], 450, 298) !!}
            @endif
        </div>
        <div class="blog-layout__content m-top-3">
            <div class="blog-layout__content-row">
                <div class="blog-layout__content-left">
                    @if(key_exists('title', $bloc))
                        <h2 class="h3 bold m-bottom-2"
                            style="color: {{ $bloc['titleColor'] ?: "var(--contrast)" }};">{{ $bloc['title'] }}</h2>
                    @endif
                    {!! $bloc['textAtLeft'] !!}
                </div>
                <div class="blog-layout__content-right">
                    {!! $bloc['textAtRight'] !!}
                </div>
            </div>
        </div>
    </div>
@overwrite
