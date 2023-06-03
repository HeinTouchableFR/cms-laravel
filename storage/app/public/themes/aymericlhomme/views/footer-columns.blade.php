@extends('aymericlhomme.views.layout')


@section('element')
    div
@overwrite
@section('additionalClass')
    footer-columns
@overwrite

@section('content')
    <div class="container">
        @foreach($bloc['columns'] as $column)
            <div>
                @if(key_exists('title', $column))
                    <div class="bold m-bottom-2 footer-columns__title"
                         style="color: {{ $bloc['titleColor'] ?: "var(--contrast)" }};">{{$column['title'] }}</div>
                @endif
                @if(key_exists('content', $column))
                    <div class="text-muted m-bottom-2">
                        {!! $column['content'] !!}
                    </div>
                @endif
                @if(key_exists('links', $column))
                    <ul class="m-bottom-2">
                        @foreach($column['links'] as $link)
                            @if($link['url'] !== '')
                                @php
                                    $json = json_decode($link['url'], true);
                                    $path = key_exists('slug', $json) ? route($json['path'], $json['slug']) : route($json['path']);
                                    $label = $link['label'] !== '' ? $link['label'] :  $json['label'];
                                @endphp
                                <li><a href="{{ $path }}" {{ menu_active($menu, $path) }}>{{ $label }}</a></li>
                            @endif
                        @endforeach
                    </ul>
                @endif
                @if($column['social'] != '')
                    <div class="flex">
                        @include('shared.partials.social')
                    </div>
                @endif
                @if($column['themeswitcher'] != '')
                    <theme-switcher class="mb3"></theme-switcher>
                @endif
            </div>
        @endforeach
    </div>
@overwrite
