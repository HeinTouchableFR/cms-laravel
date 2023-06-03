@extends('base')

@section('title', $title)

@section('description')
    @parent
@endsection

@section('stylesheets')
    @foreach($content as $bloc)
        <link rel="stylesheet" href="/themes/{{ theme() }}/css/modules/{{ $bloc['_name'] }}.css">
    @endforeach
@overwrite

@section('body')
    @foreach($content as $bloc)
        @includeIf(theme() . '.views.' . $bloc['_name'], ['bloc' => $bloc, 'animate' => $bloc['animate'] ? 'animate' : ''])
    @endforeach
@endsection
