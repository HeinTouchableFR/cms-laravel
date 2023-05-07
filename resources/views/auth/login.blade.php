@extends('base')

@section('title', 'Se connecter')

@section('description')
    @parent
@endsection

@section('body')
    <div class="container p-block-2">
        <h1 class="h1 text-center animate fadeup">Se connecter</h1>
        @if (session('status'))
            <alert-message type="success">
                Votre mot de passe a bien été réinitialisé
            </alert-message>
        @endif
        @if (session('error') === 'user-banned')
            <alert-message type="error">
                Votre compte est suspendu, veuillez contacter l'administrateur.
            </alert-message>
        @endif
        @if(count($errors) > 0)
            @foreach( $errors->all() as $message )
                <alert-message type="danger">
                    {{ $message }}
                </alert-message>
            @endforeach
        @endif
        <form class="auth-form fade fade-1" method="post" action="{{ route('login') }}">
            @csrf
            @include('shared.input', ['label' => 'Email', 'name' => 'email', 'value' => old('email'), 'displayError' => false])
            @include('shared.input', ['label' => 'Mot de passe', 'name' => 'password', 'type' => 'password', 'displayError' => false])
            <div class="auth-actions flex">
                @include('shared.switch', ['label' => 'Se souvenir de moi', 'name' => 'remember', 'displayError' => false])
                <a href="{{ route('password.request') }}" class="auth-password-forgot">Mot de passe oublié ?</a>
            </div>
            <button type="submit" class="btn primary">Se connecter</button>
            <div class="auth-actions">
                <a href="{{ route('register') }}" class="auth-register">Pas de compte ? S'inscrire</a>
            </div>
        </form>
    </div>
@endsection

