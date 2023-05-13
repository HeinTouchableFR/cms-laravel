@extends('aymericlhomme.views.layout')

@section('element')section
@overwrite
@section('additionalClass')hero {{ $animate }}
@overwrite

@section('content')
    <div class="container">
        @if(key_exists('title', $bloc))
            <h2 class="h2 bold text-{{ $bloc['titleAlign'] }} m-bottom-3"
                style="color: {{ $bloc['titleColor'] ?: "var(--contrast)" }};">{{ $bloc['title'] }}</h2>
        @endif
        {!! $bloc['content'] !!}
        @if(key_exists('buttons', $bloc) and count($bloc['buttons']) > 0)
            <p class="p-block-2 hero__buttons">
                @foreach($bloc->buttons as $button)
                    <a class="btn {{ $button['style'] }}" href="{{ $button['url'] }}">{{ $button['label'] }}</a>
                @endforeach
            </p>
        @endif
    </div>
@overwrite
