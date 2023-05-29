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
                    @foreach($item['sub_items'] as $sub)
                        <div style="display: flex; gap: 8px;">
                            [{{ $sub['isTest'] ? 'X' : '  ' }}]
                            {!! $sub['content'] !!}
                        </div>
                        <div class="m-top-2" style="color: var(--color); font-size: 0.8em;">
                            {!! $sub['comment'] !!}
                        </div>
                    @endforeach
                </div>
            @endforeach
        @endif
    </div>
@overwrite
