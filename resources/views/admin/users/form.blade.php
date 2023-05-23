@extends('admin.layout.card')

@section('title')
    @if($user->exists)
        Editer l'utilisateur
    @else
        Créer l'utilisateur
    @endif
@endsection

@section('card-title')
    @if($user->exists)
        {!! icon('users') !!} Editer l'utilisateur
    @else
        {!! icon('users') !!} Créer l'utilisateur
    @endif
@endsection

@section('meta')
    <meta name="turbolinks-visit-control" content="reload">
@endsection
@section('content')
    <form class="stacked"
          action="{{ route($user->exists ? 'admin.user.update' : 'admin.user.store', $user) }}"
          method="POST">
        @csrf
        @method($user->exists ? 'put' : 'post')
        <div class="grid">
            @include('shared.input', ['label' => 'Nom d\'utilisateur', 'name' => 'username', 'value' => $user->username])
            @include('shared.input', ['label' => 'E-mail', 'name' => 'email', 'value' => $user->email, 'type' => 'email'])
            @include('shared.input', ['label' => 'Mot de passe', 'name' => 'new_password', 'type' => 'password'])
            @include('shared.input', ['label' => 'Confirmer le mot de passe', 'name' => 'new_password_confirmation', 'type' => 'password'])
            <h3 class="h3 m-top-3">Rôles</h3>
            @foreach($roles as $value)
                @include('shared.switch', ['label' => $value->name, 'name' => 'role[]', 'id' => $value->id, 'value' => in_array($value->id, $userRoles) ? true : false])
            @endforeach
            <div class="full m-top-2">
                <button type="submit" class="btn primary">Sauvegarder</button>
            </div>
        </div>
    </form>
@endsection
