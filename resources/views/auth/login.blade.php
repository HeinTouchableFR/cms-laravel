@extends('base')

@section('title', 'Se connecter')

@section('description')
    @parent
@endsection

@section('body')
    <div class="container p-block-2">
        <div class="card p-3">
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
            <form class="grid" method="post" action="{{ route('login') }}">
                @csrf
                @include('shared.input', ['label' => 'Email', 'name' => 'email', 'value' => old('email'), 'displayError' => false])
                @include('shared.input', ['label' => 'Mot de passe', 'name' => 'password', 'type' => 'password', 'displayError' => false])
                <div class="auth-actions flex">
                    <div class="form-group">
                        <div class="form-switch m-top-2">
                            <input type="checkbox"
                                   id="checkbox-remember"
                                   name="remember"
                                   role="switch"
                                {{ old('remember') ? 'checked' : '' }}
                            >
                            <label class="form-check-label" for="checkbox-remember"><span class="switch"></span>Se
                                souvenir
                                de moi
                            </label>
                        </div>
                    </div>
                    <a href="{{ route('password.request') }}" class="auth-password-forgot">Mot de passe oublié ?</a>
                </div>
                <button type="submit" class="btn primary">Se connecter</button>
                <div class="auth-actions">
                    <a href="{{ route('register') }}" class="auth-register">Pas de compte ? S'inscrire</a>
                </div>
            </form>
            <section class="m-top-4">
                <h2 class="section-title text-center">Utiliser les réseaux sociaux</h2>
                <div class="btn-social-stack">
                    <a href="{{ route('oauth.connect', 'google') }}" title="Se connecter avec Google"
                       class="btn primary-outlined mb-3">
                        <svg class="icon">
                            <use xlink:href="/social.svg#google"></use>
                        </svg>
                    </a>
                    <a href="{{ route('oauth.connect', 'github') }}" title="Se connecter avec Github"
                       class="btn primary-outlined">
                        <svg class="icon">
                            <use xlink:href="/social.svg#github"></use>
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    </div>
@endsection

