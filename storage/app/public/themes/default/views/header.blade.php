@extends('default.views.layout')

@section('element')
    nav
@overwrite
@section('id')
    header
@overwrite
@section('additionalClass')
    header
@overwrite

@section('content')
    <div class="container">
            <a class="header__logo h2" href="{{ route('home') }}" {{ menu_active($menu, 'home') }} title="Accueil">
                {{ sitename() }}
            </a>
        <div class="header__spacer"></div>
        <ul class="header__nav">
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
        <div class="header__spacer"></div>
        <ul class="header__actions">
            @if($bloc['auth'])
                @guest
                    <li class="header__actions-auth">
                        <a href="{{ route('login') }}" {{ menu_active($menu, route('login')) }}>
                            <svg class="icon icon-login" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 24 24">
                                <g>
                                    <defs>
                                        <style>.cls-1 {
                                                fill: none;
                                                stroke: currentColor;
                                                stroke-miterlimit: 10;
                                                stroke-width: 2.04
                                            }</style>
                                    </defs>
                                    <circle cx="12.02" cy="7.24" r="5.74" class="cls-1"/>
                                    <path
                                        d="M2.46 23.5v-1.91a9.55 9.55 0 0 1 7-9.21M16.8 14.89l-1 1.91H9.15l-1.91 1.92 1.91 1.91h6.7l1 1.91h2.87a2.86 2.86 0 0 0 2.87-2.87v-1.91a2.87 2.87 0 0 0-2.87-2.87ZM12.02 18.72v1.91M19.67 17.76v1.91"
                                        class="cls-1"/>
                                </g>
                            </svg>
                            Se connecter
                        </a>
                    </li>
                @endguest
                @auth
                    <li class="header__actions-account">
                        <a href="{{ route('profile.index') }}" {{ menu_active($menu, route('profile.index')) }}>
                            <svg class="icon icon-login" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 viewBox="0 0 24 24">
                                <g>
                                    <defs>
                                        <style>.cls-1 {
                                                fill: none;
                                                stroke: currentColor;
                                                stroke-miterlimit: 10;
                                                stroke-width: 2.04
                                            }</style>
                                    </defs>
                                    <circle cx="12.02" cy="7.24" r="5.74" class="cls-1"/>
                                    <path
                                        d="M2.46 23.5v-1.91a9.55 9.55 0 0 1 7-9.21M16.8 14.89l-1 1.91H9.15l-1.91 1.92 1.91 1.91h6.7l1 1.91h2.87a2.86 2.86 0 0 0 2.87-2.87v-1.91a2.87 2.87 0 0 0-2.87-2.87ZM12.02 18.72v1.91M19.67 17.76v1.91"
                                        class="cls-1"/>
                                </g>
                            </svg>
                            Mon compte
                        </a>
                    </li>
                @endauth
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
