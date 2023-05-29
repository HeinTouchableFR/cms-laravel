@extends('default.views.layout')

@section('element')
    section
@overwrite
@section('additionalClass')
    hero {{ $animate }}
@overwrite

@section('content')
    <div class="container">
        @if(key_exists('title', $bloc))
            <h2 class="h2 bold text-{{ $bloc['titleAlign'] }} m-bottom-3"
                style="color: {{ $bloc['titleColor'] ?: "var(--contrast)" }};">{{ $bloc['title'] }}</h2>
        @endif
        {!! $bloc['content'] !!}
        @if(key_exists('items', $bloc) and count($bloc['items']) > 0)
            @foreach($bloc['items'] as $item)
                <div class="p-block-2">
                    <h3 class="h3 bold text-left m-bottom-3"
                        style="color: {{ $bloc['titleColor'] ?: "var(--contrast)" }};">{{ $item['title'] }}</h3>
                    <p>
                        [{{ $item['isTest'] ? 'X' : '  ' }}]
                        {!! $item['content'] !!}
                    </p>
                    <div class="m-top-2" style="color: var(--color); font-size: 0.8em;">
                        {!! $item['comment'] !!}
                    </div>
                </div>
            @endforeach
        @endif
    </div>
@overwrite
