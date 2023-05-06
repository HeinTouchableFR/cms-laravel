@extends('admin.layout.card')

@section('title')
    @if($role->exists)
        Editer le role
    @else
        Créer le role
    @endif
@endsection

@section('card-title')
    @if($role->exists)
        {!! icon('pen') !!} Editer le role
    @else
        {!! icon('pen') !!} Créer le role
    @endif
@endsection

@section('meta')
    <meta name="turbolinks-visit-control" content="reload">
@endsection

@section('content')
    <form class="stacked"
          action="{{ route($role->exists ? 'admin.role.update' : 'admin.role.store', $role) }}"
          method="POST">
        @csrf
        @method($role->exists ? 'put' : 'post')
        <div class="grid">
            @include('shared.input', ['label' => 'Nom', 'name' => 'name', 'value' => $role->name])

            <h3 class="h3 m-top-3">Permissions</h3>
            @foreach($permission as $value)
                @include('shared.switch', ['label' => $value->name, 'name' => 'permission[]', 'id' => $value->id, 'value' => in_array($value->id, $rolePermissions) ? true : false])
            @endforeach
            <div class="full m-top-2">
                <button type="submit" class="btn primary">Sauvegarder</button>
            </div>
        </div>
    </form>
@endsection
