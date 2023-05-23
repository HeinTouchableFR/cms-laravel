@extends('admin.layout.card')

@section('title')
    Gestion des articles
@endsection

@section('card-title')
    {!! icon('blog') !!} Gestion des articles
@endsection

@section('actions')
    <a href="{{ route('admin.blog.create') }}" class="btn primary">Ajouter un article</a>
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
        @foreach($blogs as $item)
            <tr>
                <td class="dashboard-id">
                    <a href="{{ route('admin.blog.edit', $item) }}">{{ $item->id }}</a>
                </td>
                <td>
                    <a href="{{ route('admin.blog.edit', $item) }}">{{ $item->title }}</a>
                </td>
                <td><span class="bullet @if(!$item->online) bullet--danger @endif"></span></td>
                <td>
                    <div class="dashboard-actions">
                        <a href="{{ route('admin.blog.edit', $item) }}">{!! icon('edit') !!}</a>
                        <form action="{{ route('admin.blog.destroy', $item) }}" method="post"
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
    {{$blogs->links()}}
@endsection
