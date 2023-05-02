@extends('admin.layout.card')

@section('title')
    Gestion des pages
@endsection

@section('card-title')
    {!! icon('pen') !!} Gestion des pages
@endsection

@section('actions')
    <a href="{{ route('admin.page.create') }}" class="btn primary">Ajouter une page</a>
@endsection

@section('content')
    <table class="table">
        <thead>
        <tr>
            <th>ID</th>
            <th>Nom</th>
            <th class="text-center">Statut</th>
            <th class="text-right">Actions</th>
        </tr>
        </thead>
        <tbody>
        @foreach($pages as $item)
            <tr>
                <td class="dashboard-id">
                    <a href="{{ route('admin.page.edit', $item) }}">{{ $item->id }}</a>
                </td>
                <td>
                    <a href="{{ route('admin.page.edit', $item) }}">{{ $item->title }}</a>
                </td>
                <td><span class="bullet @if(!$item->online) bullet--danger @endif"></span></td>
                <td>
                    <div class="dashboard-actions">
                        <a href="{{ route('admin.page.edit', $item) }}">{!! icon('edit') !!}</a>
                        <form action="{{ route('admin.page.destroy', $item) }}" method="post" onsubmit="return confirm('Voulez-vous vraiment supprimer ce contenu')">
                            @csrf
                            @method('delete')
                            <button type="submit">
                                {!! icon('delete') !!}
                            </button>
                        </form>
                    </div>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
    {{$pages->links()}}
@endsection
