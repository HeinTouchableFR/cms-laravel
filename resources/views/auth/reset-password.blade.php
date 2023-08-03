@extends('base')

@section('title', 'Réinitialisation du mot de passe')

@section('description')
    @parent
@endsection

@section('body')
    <div class="container p-block-2">
        <div class="card p-3">
            <h1 class="h1 text-center animate fadeup m-bottom-4">Mot de passe oublié</h1>
            @if (session('status'))
                <alert-message type="success">
                    Nous vous avons envoyé un lien de réinitialisation de votre mot de passe.
                </alert-message>
            @endif
            <p>Vous avez oublié votre mot de passe ? Pas de problème. Indiquez-nous votre adresse électronique et nous
                vous enverrons un lien de réinitialisation du mot de passe qui vous permettra d'en choisir un
                nouveau.</p>
            <form class="grid" method="post" action="{{ route('password.store') }}">
                @csrf
                @include('shared.input', ['type' => 'hidden', 'name' => 'token', 'value' => $request->route('token')])
                @include('shared.input', ['label' => 'Email', 'name' => 'email', 'value' => $request->email])
                @include('shared.input', ['label' => 'Nouveau mot de passe', 'type' => 'password', 'name' => 'password'])
                @include('shared.input', ['label' => 'Confirmer mot de passe', 'type' => 'password', 'name' => 'password_confirmation'])
                <button type="submit" class="btn primary m-top-2">Réinitialiser mon mot de passe</button>
            </form>
        </div>
    </div>
@endsection
