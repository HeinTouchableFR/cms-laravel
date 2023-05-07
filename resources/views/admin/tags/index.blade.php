@extends('admin.layout.card')

@section('title')
    Gestion des tags
@endsection

@section('card-title')
    {!! icon('pen') !!} Gestion des tags
@endsection

@section('actions')
    <a href="{{ route('admin.tag.create') }}" class="btn primary">Ajouter un tag</a>
@endsection

@section('content')
    <item-sorter items="{{ $tags }}" endpoint="{{ route('admin.tag.positions') }}"></item-sorter>
@endsection
