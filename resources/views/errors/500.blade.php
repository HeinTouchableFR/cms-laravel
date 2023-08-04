@extends('base')

@section('title', 'Internal Server Error')

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
                <h3>Internal Server Error</h3>
                <h1>
                    <span>5</span>
                    <span>0</span>
                    <span>0</span>
                </h1>
            </div>
            <p class="error__content-message m-bottom-2">
                Nous ne sommes pas en mesure de répondre à votre demande.
                Soyez assuré que nous avons été informés et que nous examinons le problème.
                Veuillez actualiser votre navigateur.
            </p>
            <p class="error__content-message m-bottom-4">
                Si l'erreur persiste, il est toujours temps de faire une pause-café.
                Nous devrions être de retour le temps que vous finissiez votre café.
            </p>
            <a class="btn primary" href="{{ route('home') }}">Retourner à l'accueil</a>
        </div>
    </section>
@endsection
