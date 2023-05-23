@extends('admin.layout.card')

@section('title')
    Gestion des roles
@endsection

@section('card-title')
    {!! icon('role') !!} Gestion des roles
@endsection

@section('actions')
    <a href="{{ route('admin.role.create') }}" class="btn primary">Ajouter un rôle</a>
@endsection

@section('content')
    <table class="table">
        <thead>
        <tr>
            <th>ID</th>
            <th>Nom</th>
            <th class="text-right">Actions</th>
        </tr>
        </thead>
        <tbody>
        @foreach($roles as $item)
            <tr>
                <td class="dashboard-id">
                    <a href="{{ route('admin.role.edit', $item) }}">{{ $item->id }}</a>
                </td>
                <td>
                    <a href="{{ route('admin.role.edit', $item) }}">{{ $item->name }}</a>
                </td>
                <td>
                    <div class="dashboard-actions">
                        @can('role-edit')
                            <a href="{{ route('admin.role.edit', $item) }}">{!! icon('edit') !!}</a>
                        @endcan
                        @can('role-delete')
                            <form action="{{ route('admin.role.destroy', $item) }}" method="post"
                                  onsubmit="return confirm('Voulez-vous vraiment supprimer ce contenu')">
                                @csrf
                                @method('delete')
                                <button type="submit">
                                    {!! icon('trash') !!}
                                </button>
                            </form>
                        @endcan
                    </div>
                </td>
            </tr>
        @endforeach
    </table>
    {{ $roles->links() }}
@endsection
