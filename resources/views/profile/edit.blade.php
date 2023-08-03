@extends('profile.layout')

@section('title', 'Modifier mes informations')

@section('description')
    @parent
@endsection

@section('content')
    <div class="container">
        @if (session('status') === 'password-updated')
            <alert-message type="success">
                Le mot de passe a été modifié avec succès !
            </alert-message>
        @endif
        @if (session('status') === 'profile-updated')
            <alert-message type="success">
                Le profil a été modifié avec succès !
            </alert-message>
        @endif
        @if (session('status') === 'verification-link-sent')
            <alert-message type="success">
                Un nouveau lien de vérification a été envoyé à votre adresse email.
            </alert-message>
        @endif
        <div class="profil-sidebar p-block-3" style="--gap:5;">
            <main class="s">
                <form id="send-verification" method="post" action="{{ route('verification.send') }}">
                    @csrf
                </form>
                <form method="post" action="{{ route('profile.update') }}" class="stack m-bottom-4">
                    @csrf
                    @method('patch')
                    <div class="stack">
                        <h3 class="h3">
                            {!! icon('user') !!}
                            <strong>Mes informations</strong>
                        </h3>
                        @if ($user instanceof \Illuminate\Contracts\Auth\MustVerifyEmail && ! $user->hasVerifiedEmail())
                            <div class="alert alert-danger ">
                                <svg class="icon icon-warning">
                                    <use xlink:href="/sprite.svg#warning"></use>
                                </svg>
                                <div>
                                    <p>
                                        Votre adresse e-mail n'est pas vérifiée.
                                        <button form="send-verification" style="color: var(--contrast);">
                                            Cliquez ici pour renvoyer l'e-mail de vérification.
                                        </button>
                                    </p>
                                </div>
                            </div>
                        @endif
                        <div class="card p-3 grid">
                            @include('shared.input', ['label' => 'Nom d\'utilisateur', 'name' => 'username', 'value' => $user->username])
                            @include('shared.input', ['label' => 'Email', 'name' => 'email', 'value' => $user->email])
                        </div>
                        <div class="text-right">
                            <button type="submit" class="btn primary m-top-2" name="action" value="update">Modifier mon
                                profil
                            </button>
                        </div>
                    </div>
                </form>
                <form method="post" class="stack m-bottom-4" action="{{ route('password.update') }}">
                    @csrf
                    @method('put')
                    <h3 class="h3 m-bottom-2">
                        {!! icon('lock') !!}
                        <strong>Mot de passe</strong>
                    </h3>
                    <div class="card p-3 grid2">
                        @include('shared.input', ['label' => 'Mot de passe actuel', 'name' => 'current_password', 'type' => 'password', 'errorLocation' => 'updatePassword'])
                        @include('shared.input', ['label' => 'Nouveau mot de passe', 'name' => 'password', 'type' => 'password', 'errorLocation' => 'updatePassword'])
                        @include('shared.input', ['label' => 'Confirmer le mot de passe', 'name' => 'password_confirmation', 'type' => 'password', 'errorLocation' => 'updatePassword'])
                    </div>
                    <div class="text-right">
                        <button type="submit" class="btn primary m-top-2" name="action" value="password">
                            Modifier mon mot de passe
                        </button>
                    </div>
                </form>
                <div class="stack">
                    <h3 class="text-danger h3 m-bottom-2">
                        {!!  icon('trash') !!}
                        <strong>Zone de danger</strong>
                    </h3>
                    <div class="card p-3 grid2">
                        <form method="post" action="{{ route('profile.destroy') }}">
                            @csrf
                            @method('delete')
                            <p style="font-size: 1.2rem;" class="m-bottom-2">
                                Êtes-vous sûr de vouloir supprimer votre compte ?<br>
                                Une fois votre compte supprimé, toutes ses ressources et données seront définitivement
                                effacées.<br>
                                Veuillez saisir votre mot de passe pour confirmer que vous souhaitez supprimer
                                définitivement
                                votre compte.
                            </p>
                            @include('shared.input', ['label' => 'Mot de passe actuel', 'name' => 'password', 'type' => 'password', 'errorLocation' => 'userDeletion'])
                            <button class="btn danger m-top-2">
                                {!! icon('trash') !!}
                                Supprimer le compte
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <aside class="stack">
                <h3 class="h4">Connexion social</h3>
                <p>Reliez votre compte à un réseau social afin de l'utiliser comme mode de connexion</p>
                <div class="stack m-bottom-4">
                    <div>
                        <a href="#"
                           class="btn secondary">
                            <svg class="icon">
                                <use xlink:href="/social.svg#google"></use>
                            </svg>
                            {{ false ? 'Dissocier' : 'Lier' }} mon compte Google
                        </a>
                    </div>
                    <div>
                        <a href="#"
                           class="btn secondary">
                            <svg class="icon">
                                <use xlink:href="/social.svg#facebook"></use>
                            </svg>
                            {{ false ? 'Dissocier' : 'Lier' }} mon compte Facebook
                        </a>
                    </div>
                </div>
            </aside>
        </div>
    </div>
@endsection
