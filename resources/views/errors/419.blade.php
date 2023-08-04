@extends('base')

@section('title', 'Page expired')

@php
    $menu = '';
@endphp

@section('description')
    @parent
@endsection

@section('body')
    <section class="error">
        <div class="container error__content">
            <div class="error__content-header text-center m-bottom-2">
                <h3>Page expired</h3>
                <h1>
                    <span>4</span>
                    <span>1</span>
                    <span>9</span>
                </h1>
            </div>
            <p class="error__content-message m-bottom-4">
                Désolé, votre session a expiré. Veuillez actualiser la page et réessayer.
            </p>
            <a class="btn primary" href="{{ route('home') }}">Retourner à l'accueil</a>
        </div>
    </section>
@endsection
