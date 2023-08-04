@extends('base')

@section('title', 'Service Unavailable')

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
                <h3>Service Unavailable</h3>
                <h1>
                    <span>5</span>
                    <span>0</span>
                    <span>3</span>
                </h1>
            </div>
            <p class="error__content-message m-bottom-2">
                Nous sommes désolés pour le retard pris dans la réalisation de votre travail.
                Nous sommes temporairement en maintenance régulière.
            </p>
            <p class="error__content-message m-bottom-4">
                Il est toujours temps de faire une pause-café.
                Nous devrions être de retour le temps que vous finissiez votre café.
            </p>
            <a class="btn primary" href="{{ route('home') }}">Retourner à l'accueil</a>
        </div>
    </section>
@endsection
