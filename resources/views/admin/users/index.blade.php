@extends('admin.layout.card')

@section('title')
    Gestion des utilisateurs
@endsection

@section('card-title')
    {!! icon('users') !!} Gestion des utilisateurs
@endsection

@section('actions')
    <a href="{{ route('admin.user.create') }}" class="btn primary">Ajouter un utilisateur</a>
@endsection

@section('content')
    <table class="table">
        <thead>
        <tr>
            <th>ID</th>
            <th>Pseudo</th>
            <th>Email</th>
            <th>Inscription</th>
            <th>Roles</th>
            <th class="text-right">Actions</th>
        </tr>
        </thead>
        <tbody>
        @foreach($users as $user)
            <tr>
                <td class="dashboard-id">
                    <a href="{{ route('admin.user.edit', $user) }}">{{ $user->id }}</a>
                </td>
                <td class="dashboard-id">
                    <a href="{{ route('admin.user.edit', $user) }}">{{ $user->username }}</a>
                </td>
                <td>
                    {{ $user->email }}
                </td>
                <td class="dashboard-id">
                    {{ $user->created_at }}
                </td>
                <td>
                    @if(count($user->roles) > 0)
                        @foreach($user->roles as $role)
                            <p>{{ $role->name }}</p>
                        @endforeach
                    @else
                        Utilisateur
                    @endif
                </td>
                <td>
                    <div class="dashboard-actions">
                        <a href="{{ route('admin.user.edit', $user) }}">{!! icon('edit') !!}</a>
                        @if(!$user->email_verified_at)
                            <form action="{{ route('admin.user.confirm', $user) }}" method="post">
                                @csrf
                                <button type="submit">
                                    {!! icon('confirm') !!}
                                </button>
                            </form>
                        @else
                            <a href="/?_ninja={{ $user->email }}">
                                {!! icon('ninja') !!}
                            </a>
                        @endif
                        <form
                            action="{{ $user->status === 0 ? route('admin.user.unban', $user) : route('admin.user.ban', $user) }}"
                            method="post"
                            onsubmit="{{ $user->status === 0 ? 'return confirm("Voulez-vous vraiment débannir cet utilisateur ?")' : 'return confirm("Voulez-vous vraiment bannir cet utilisateur ?")' }}">
                            @csrf
                            <button style="color: {{ $user->status === 0 ? 'var(--green);' : 'var(--red);' }}"
                                    type="submit">
                                {!! icon('ban') !!}
                            </button>
                        </form>
                    </div>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
    {{ $users->links() }}
@endsection
