@extends('base')

@section('stylesheets')
    @foreach($blocs as $bloc)
        <link rel="stylesheet" href="/themes/{{ theme() }}/css/modules/{{ $bloc['_name'] }}.css">
    @endforeach
    <link rel="stylesheet" href="/Editor.css">
@overwrite

@section('body')
    <div id="ve-components">
        @foreach($blocs as $bloc)
            @includeIf(theme() . '.views.' . $bloc['_name'], ['bloc' => $bloc, 'animate' => 'animate'])
        @endforeach
    </div>
@overwrite
