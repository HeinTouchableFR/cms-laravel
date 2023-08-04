@extends('base')

@section('title', 'Not Found')

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
                <h3>Not Found</h3>
                <h1>
                    <span>4</span>
                    <span>0</span>
                    <span>4</span>
                </h1>
            </div>
            <p class="error__content-message m-bottom-4">
                Désolé, le contenu que vous recherchez n'existe pas, a été supprimé, le nom a changé ou est
                temporairement indisponible.</p>
            <a class="btn primary" href="{{ route('home') }}">Retourner à l'accueil</a>
        </div>
    </section>
@endsection
