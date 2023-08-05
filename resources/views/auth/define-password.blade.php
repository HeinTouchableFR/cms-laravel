@extends('base')

@section('title', 'Définir un mot de passe oublié')

@section('description')
    @parent
@endsection

@section('body')
    <div class="container p-block-2">
        <div class="card p-3">
            <h1 class="h1 text-center animate fadeup m-bottom-4">Définir un mot de passe</h1>
            <p>Vous y êtes presque, il ne vous reste plus qu'à choisir votre mot de passe</p>
            <form method="post" class="grid" action="{{ route('password.define') }}">
                @csrf
                @include('shared.input', ['label' => 'Nouveau mot de passe', 'name' => 'password', 'type' => 'password', 'errorLocation' => 'updatePassword'])
                @include('shared.input', ['label' => 'Confirmer le mot de passe', 'name' => 'password_confirmation', 'type' => 'password', 'errorLocation' => 'updatePassword'])
                <button type="submit" class="btn primary m-top-2">Définir le mot de passe</button>
            </form>
        </div>
    </div>
@endsection


