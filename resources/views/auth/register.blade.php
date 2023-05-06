@extends('base')

@section('title', 'Inscription')

@section('description')
    @parent
@endsection

@section('body')
    <div class="container p-block-2">
        <h1 class="h1 text-center animate fadeup">S'inscrire</h1>
        <form class="auth-form fade fade-1" method="post" action="{{ route('register') }}">
            @csrf
            @include('shared.input', ['label' => 'Nom d\'utilisateur', 'name' => 'username', 'value' => old('username')])
            @include('shared.input', ['label' => 'Email', 'name' => 'email', 'value' => old('email')])
            @include('shared.input', ['label' => 'Mot de passe', 'name' => 'password', 'type' => 'password'])
            @include('shared.input', ['label' => 'Confirmer le mot de passe', 'name' => 'password_confirmation', 'type' => 'password'])
            <div class="auth-actions flex m-top-2">
                <a href="{{ route('login') }}" class="auth-password-forgot">Déjà inscrit ?</a>
            </div>
            <button type="submit" class="btn primary">S'inscrire</button>
            <p class="text-muted m-top-2">
                <small>Vos données personnelles (email et nom d'utilisateur) ne sont utilisées qu'à des fins
                    d'authentification et ne sont pas partagées avec des tiers.</small>
            </p>
        </form>
    </div>
@endsection


