@extends('base')

@section('title', 'Too Many Requests')

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
                <h3>Too Many Requests</h3>
                <h1>
                    <span>4</span>
                    <span>2</span>
                    <span>9</span>
                </h1>
            </div>
            <p class="error__content-message m-bottom-4">
                Vous avez effectué trop de demandes récemment. Veuillez patienter et réessayer votre demande plus
                tard.
            </p>
            <a class="btn primary" href="{{ route('home') }}">Retourner à l'accueil</a>
        </div>
    </section>
@endsection
