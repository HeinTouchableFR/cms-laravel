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
            <form action="{{ /*is_granted('IS_IMPERSONATOR') ? impersonation_exit_path(path('home')) :*/ route('logout') }}" method="post">
                @csrf
                <button>
                    <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.16"
                                  d="M15 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8m4-9-4-4m4 4-4 4m4-4H9"></path>
                        </g>
                    </svg>
                    Déconnexion
                </button>
            </form>
        </div>
    </div>
    @yield('content')
@endsection
