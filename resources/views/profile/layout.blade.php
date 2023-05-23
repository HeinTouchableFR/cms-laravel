@extends('base')

@section('title', 'Mon compte')

@section('description')
    @parent
@endsection

@section('body')
    <div class="tabs-bar bg-light">
        <div class="container">
            <a href="{{ route('profile.index') }}" {{ menu_active($menu, route('profile.index')) }}>
                {!! icon('lines') !!}
                Profil
            </a>
            <a href="{{ route('profile.edit') }}" {{ menu_active($menu, route('profile.edit')) }}>
                {!! icon('user') !!}
                Editer
            </a>
            @can('access-administration')
                <a href="{{ route('admin.index') }}" class="mla">
                    {!! icon('edit') !!}
                    Administration
                </a>
            @endcan
            <form
                action="{{ /*is_granted('IS_IMPERSONATOR') ? impersonation_exit_path(path('home')) :*/ route('logout') }}"
                method="post">
                @csrf
                <button>
                    {!! icon('logout') !!}
                    Déconnexion
                </button>
            </form>
        </div>
    </div>
    @yield('content')
@endsection
