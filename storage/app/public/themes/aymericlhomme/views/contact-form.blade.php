@extends('aymericlhomme.views.layout')

@section('element')
    div
@overwrite
@section('additionalClass')
    contact-form
@overwrite

@section('content')
    <div class="container">
        <contact-form content="{{ json_encode( $bloc['fields']) }}" buttonClass="btn primary flex m-auto">
        </contact-form>
        <div class="contact-form__sidebar">
            <div>
                <h3 class="h3 bold m-bottom-2 contact-form__sidebar-title">Sur les réseaux sociaux</h3>
                @includeIf('shared.partials.social')
            </div>
        </div>
    </div>
@overwrite
