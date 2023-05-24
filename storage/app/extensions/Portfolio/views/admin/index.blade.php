@extends('admin.layout.card')

@section('title')
    Gestion du portfolio
@endsection

@section('card-title')
    {!! icon('portfolio') !!} Gestion du portfolio
@endsection

@section('actions')
    <a href="{{ route('admin.portfolio.create') }}" class="btn primary">Ajouter un contenu</a>
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
        @foreach($items as $item)
            <tr>
                <td class="dashboard-id">
                    <a href="{{ route('admin.portfolio.edit', $item) }}">{{ $item->id }}</a>
                </td>
                <td>
                    <a href="{{ route('admin.portfolio.edit', $item) }}">{{ $item->title }}</a>
                </td>
                <td><span class="bullet @if(!$item->online) bullet--danger @endif"></span></td>
                <td>
                    <div class="dashboard-actions">
                        <a href="{{ route('admin.portfolio.edit', $item) }}">{!! icon('edit') !!}</a>
                        <form action="{{ route('admin.portfolio.destroy', $item) }}" method="post"
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
    {{$items->links()}}
@endsection
