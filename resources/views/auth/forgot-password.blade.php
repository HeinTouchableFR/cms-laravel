@extends('base')

@section('title', 'Mot de passe oublié')

@section('description')
    @parent
@endsection

@section('body')
    <div class="container p-block-2">
        <h1 class="h1 text-center animate fadeup m-bottom-4">Mot de passe oublié</h1>
        @if (session('status'))
            <alert-message type="success">
                Nous vous avons envoyé un lien de réinitialisation de votre mot de passe.
            </alert-message>
        @endif
        <p>Vous avez oublié votre mot de passe ? Pas de problème. Indiquez-nous votre adresse électronique et nous vous enverrons un lien de réinitialisation du mot de passe qui vous permettra d'en choisir un nouveau.</p>
        <form class="auth-form fade fade-1 m-top-2" method="post" action="{{ route('password.email') }}">
            @csrf
            @include('shared.input', ['label' => 'Email', 'name' => 'email', 'value' => old('email')])
            <button type="submit" class="btn primary m-top-2">M'envoyer les instructions</button>
        </form>
    </div>
@endsection


