@extends('aymericlhomme.views.layout')

@section('element')div
@overwrite
@section('id')footer
@overwrite
@section('additionalClass')footer
@overwrite

@section('content')
    @if(key_exists('content', $bloc) or key_exists('links', $bloc) )
        <div class="container">
            @if(key_exists('credit', $bloc))
                {!! $bloc['credit'] !!}
            @endif
            @if(key_exists('links', $bloc))
                    <ul>
                        @foreach($bloc['links'] as $link)
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
        </div>
    @endif
@overwrite
