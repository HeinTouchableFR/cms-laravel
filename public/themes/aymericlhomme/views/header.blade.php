@extends('aymericlhomme.views.layout')

@section('element')nav
@overwrite
@section('id')header
@overwrite
@section('additionalClass')header
@overwrite

@section('content')
    <div class="container">
        @if($bloc['logo'])
            <a class="header__logo" href="{{ route('home') }}" {{ menu_active('home') }} title="Accueil"
               style="--logo-width: {{ $bloc['logoWidth'] }}px">
                {!! logoTag($bloc['logoWidth'], $bloc['logoHeight']) !!}
            </a>
        @endif
        <div class="header__spacer"></div>
        <ul class="header__nav">
            @foreach($bloc['links'] as $link)
                @if($link['url'] !== '')
                    @php
                        $json = json_decode($link['url'], true);
                        $path = key_exists('slug', $json) ? route($json['path'], $json['slug']) : route($json['path']);
                        $label = $link['label'] !== '' ? $link['label'] :  $json['label'];
                    @endphp
                    <li><a href="{{ $path }}" {{ menu_active($path) }}>{{ $label }}</a></li>
                @endif
            @endforeach
        </ul>
        <div class="header__spacer"></div>
        <ul class="header__actions">
            @if($bloc['searchbar'])
                <li class="header__actions-search">
                    <search-input></search-input>
                </li>
            @endif
        </ul>
        <button
            id="js-burger" class="header__burger" aria-controls="primary-navigation" aria-expanded="false">
            <svg stroke="var(--color-dark)" fill="none" class="hamburger" viewBox="-10 -10 120 120" width="50">
                <path class="line" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"
                      d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70">
                </path>
            </svg>
        </button>
    </div>
@overwrite
