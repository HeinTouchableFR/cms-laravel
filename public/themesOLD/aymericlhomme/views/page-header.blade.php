@extends('aymericlhomme.views.layout')

@section('element')section
@overwrite
@section('additionalClass')page-header
@overwrite

@section('content')
    <div class="container">
        @if(key_exists('title', $bloc))
            <h1 class="h1 m-bottom-2">{{ $bloc['title'] }}</h1>
        @endif
    </div>
@overwrite
