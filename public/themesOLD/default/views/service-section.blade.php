@extends('aymericlhomme.views.layout')

@section('element')
    section
@overwrite
@section('id')
    services
@overwrite
@section('additionalClass')
    services
@overwrite

@section('content')
    <div class="container">
        @foreach($bloc['blocs'] as $item)
            <div class="services__card {{ $animate }}">
                <div class="services__card-imageBox" data-text="{{ $item['title'] }}">
                    @if(key_exists('image', $item))
                        {!! imageTag($item['image'], 100, 100) !!}
                    @endif
                </div>
                <div class="services__card-content">
                    <div>
                        <h2 class="h2 m-bottom-1"
                            style="color: {{ $bloc['titleColor'] ?: "var(--contrast)" }};">{{ $item['title'] }}</h2>
                        {!! $item['content'] !!}
                    </div>
                </div>
            </div>
        @endforeach
    </div>
@overwrite
