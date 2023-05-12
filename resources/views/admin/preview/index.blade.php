@extends('base')

@section('stylesheets')
    @php
        $storage = File::allFiles(public_path() . "/themes/" . theme() ."/css/modules");
    @endphp
    @foreach($storage as $style)
        <link rel="stylesheet" href="/themes/{{ theme() }}/css/modules/{{ $style->getFileName() }}">
    @endforeach
    <link rel="stylesheet" href="/Editor.css">
@overwrite

@section('body')
    <div id="ve-components">
        @foreach($blocs as $bloc)
            @includeIf(theme() . '.views.' . $bloc['_name'], ['bloc' => $bloc, 'animate' => 'no-animate'])
        @endforeach
    </div>
@overwrite
