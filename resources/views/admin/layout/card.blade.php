@extends('admin.admin')


@section('body')
    <div class="flex m-bottom-3">
        <h2 class="h2 bold">
            @yield('card-title')
        </h2>
        <aside class="flex">
            @yield('actions')
        </aside>
    </div>
    <!--{% include 'partials/flash.html.twig' %}-->
    <div class="admin__body-card">
        @yield('content')
    </div>
@endsection
