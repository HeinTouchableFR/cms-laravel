@extends('base')

@section('title', 'Forbidden')

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
                <h3>Forbidden</h3>
                <h1>
                    <span>4</span>
                    <span>0</span>
                    <span>3</span>
                </h1>
            </div>
            <p class="error__content-message m-bottom-4">
                Vous avez essayé d'accéder à une page pour laquelle vous n'aviez pas d'autorisation préalable.
            </p>
            <a class="btn primary" href="{{ route('home') }}">Retourner à l'accueil</a>
        </div>
    </section>
@endsection
