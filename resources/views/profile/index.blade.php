@extends('base')

@section('title', 'Mon compte')

@section('description')
    @parent
@endsection

@section('body')
    <section class="container profile p-block-4">
        <main>
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
            <form id="send-verification" method="post" action="{{ route('verification.send') }}">
                @csrf
            </form>
            <form method="post" class="m-bottom-4" action="{{ route('profile.update') }}">
                @csrf
                @method('patch')
                <h2 class="h2 m-bottom-2">
                    {!! icon('user') !!}
                    Mes informations
                </h2>
                @if ($user instanceof \Illuminate\Contracts\Auth\MustVerifyEmail && ! $user->hasVerifiedEmail())
                    <alert-message type="error" duration="0">
                        Votre adresse e-mail n'est pas vérifiée.
                        <button form="send-verification" style="color: var(--contrast);">
                            Cliquez ici pour renvoyer l'e-mail de vérification.
                        </button>
                    </alert-message>
                @endif
                <div class="card p-3">
                    @include('shared.input', ['label' => 'Nom d\'utilisateur', 'name' => 'username', 'value' => $user->username])
                    @include('shared.input', ['label' => 'Email', 'name' => 'email', 'value' => $user->email])
                </div>
                <button type="submit" class="btn primary m-top-2" name="action" value="update">Modifier mon
                    profil
                </button>
            </form>
            <form method="post" class="m-bottom-4" action="{{ route('password.update') }}">
                @csrf
                @method('put')
                <h2 class="h2 m-bottom-2">
                    {!! icon('lock') !!}
                    Mot de passe
                </h2>
                <div class="card p-3">
                    @include('shared.input', ['label' => 'Mot de passe actuel', 'name' => 'current_password', 'type' => 'password', 'errorLocation' => 'updatePassword'])
                    @include('shared.input', ['label' => 'Nouveau mot de passe', 'name' => 'password', 'type' => 'password', 'errorLocation' => 'updatePassword'])
                    @include('shared.input', ['label' => 'Confirmer le mot de passe', 'name' => 'password_confirmation', 'type' => 'password', 'errorLocation' => 'updatePassword'])
                </div>
                <button type="submit" class="btn primary m-top-2" name="action" value="password">
                    Modifier mon mot de passe
                </button>
            </form>
            <form method="post" action="{{ route('profile.destroy') }}">
                @csrf
                @method('delete')
                <h2 class="h2 m-bottom-2 text-danger">
                    {!!  icon('trash') !!}
                    Zone de danger
                </h2>
                <div class="card p-3">
                    <p style="font-size: 1.2rem;" class="m-bottom-2">
                        Êtes-vous sûr de vouloir supprimer votre compte ?<br>
                        Une fois votre compte supprimé, toutes ses ressources et données seront définitivement
                        effacées.<br>
                        Veuillez saisir votre mot de passe pour confirmer que vous souhaitez supprimer
                        définitivement
                        votre compte.
                    </p>
                    @include('shared.input', ['label' => 'Mot de passe actuel', 'name' => 'password', 'type' => 'password', 'errorLocation' => 'userDeletion'])
                    <button class="btn danger">
                        {!! icon('trash') !!}
                        Supprimer le compte
                    </button>
                </div>
            </form>
        </main>
        <aside>
            <div class="profile__social">
                <h3 class="h3 m-bottom-2">Connexion social</h3>
                <div class="card p-3">
                    <p>Reliez votre compte à un réseau social afin de l'utiliser comme mode de connexion</p>
                    @if(config('services.facebook.client_id'))
                        <a href="{{ route('oauth.connect', 'facebook') }}" title="Se connecter avec Facebook"
                           class="btn secondary">
                            <svg class="icon">
                                <use xlink:href="/social.svg#facebook"></use>
                            </svg>
                            {{ $user->facebook_id ? 'Dissocier' : 'Lier' }} mon compte Facebook
                        </a>
                    @endif
                    @if(config('services.google.client_id'))
                        <a href="{{ route('oauth.connect', 'google') }}" title="Se connecter avec Google"
                           class="btn secondary">
                            <svg class="icon">
                                <use xlink:href="/social.svg#google"></use>
                            </svg>
                            {{ $user->facebook_id ? 'Dissocier' : 'Lier' }} mon compte Google
                        </a>
                    @endif
                    @if(config('services.github.client_id'))
                        <a href="{{ route('oauth.connect', 'github') }}" title="Se connecter avec Github"
                           class="btn secondary">
                            <svg class="icon">
                                <use xlink:href="/social.svg#github"></use>
                            </svg>
                            {{ $user->facebook_id ? 'Dissocier' : 'Lier' }} mon compte Github
                        </a>
                    @endif
                </div>
            </div>
            <div class="profile__notifications">
                <h3 class="h3 m-bottom-2">
                    Mes notifications
                    <form action="{{ route('profile.clean-notification') }}" method="post">
                        @csrf
                        @method('delete')
                        <button class="text-danger">
                            {!! icon('trash') !!}
                        </button>
                    </form>
                </h3>
                <div class="card p-3">
                    @forelse ($notifications as $notification)
                        <a href="{{ $notification['url'] }}">
                            {!! $notification['message'] !!}
                        </a>
                    @empty
                        <p class="">
                            Vous n'avez aucune notifications.
                        </p>
                    @endforelse
                </div>
            </div>
            @if($hasActivity)
                @if(count($comments) > 0)
                    <div class="profile__comments">
                        <h3 class="h3 m-bottom-2">Mes derniers commentaires</h3>
                        <div class="card p-3">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th width="40%">Article</th>
                                    <th>Commentaire</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($comments as $comment)
                                    <tr>
                                        <td>
                                            <a href="{{ route('blog.show', $comment->getContent()->slug) }}">
                                                {{ $comment->getContent()->title }}
                                            </a>
                                        </td>
                                        <td>
                                            {{ $comment->content }}
                                        </td>
                                    </tr>
                                @endforeach
                            </table>
                        </div>
                    </div>
                @endif
            @endif
        </aside>
    </section>
@endsection
