@extends('base')

@section('title', 'Unauthorised')

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
                <h3>Unauthorised</h3>
                <h1>
                    <span>4</span>
                    <span>0</span>
                    <span>1</span>
                </h1>
            </div>
            <p class="error__content-message m-bottom-4">
                Cette page n'est pas accessible au public. Pour y accéder, veuillez d'abord vous connecter.
            </p>
            <a class="btn primary" href="{{ route('home') }}">Retourner à l'accueil</a>
        </div>
    </section>
@endsection
