@extends('admin.layout.card')

@section('title')
    Gestion des catégories
@endsection

@section('card-title')
    {!! icon('category') !!} Gestion des catégories
@endsection

@section('actions')
    <a href="{{ route('admin.category.create') }}" class="btn primary">Ajouter une catégorie</a>
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
        @foreach($categories as $item)
            <tr>
                <td class="dashboard-id">
                    <a href="{{ route('admin.category.edit', $item) }}">{{ $item->id }}</a>
                </td>
                <td>
                    <a href="{{ route('admin.category.edit', $item) }}">{{ $item->name }}</a>
                </td>
                <td>
                    <div class="dashboard-actions">
                        <a href="{{ route('admin.category.edit', $item) }}">{!! icon('edit') !!}</a>
                        <form action="{{ route('admin.category.destroy', $item) }}" method="post"
                              onsubmit="return confirm('Voulez-vous vraiment supprimer ce contenu')">
                            @csrf
                            @method('delete')
                            <button type="submit">
                                {!! icon('trash') !!}
                            </button>
                        </form>
                    </div>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
    {{$categories->links()}}
@endsection
