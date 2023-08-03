<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>@yield('title') | {{ sitename() }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimal-ui" />
    <link rel="apple-touch-icon" sizes="128x128" href="{{ favicon() }}">
    <link rel="icon" type="image/webp" href="{{ favicon() }}" />
    @vite(['resources/css/app.scss', 'resources/css/admin.scss', 'resources/ts/app.ts', 'resources/ts/admin.ts'])
    <link rel="stylesheet" href="/themes/{{ theme() }}/css/style.css">
    <link rel="stylesheet" href="/Editor.css">
    <script src="/themes/{{ theme() }}/assets/app.js" type="module" defer=""></script>
    <meta property='og:image' content="{{ openGraphLogo() }}" />
    <script src="/themes/{{ theme() }}/assets/admin.js" type="module" defer=""></script>
    <meta name="turbolinks-cache-control" content="no-cache" />
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    @yield('meta')
</head>
<body class="">
<div class="admin">
    <nav>
        @if(logo() !== '')
            <img src="{{ logo() }}" alt="logo">
        @else
            <h2 class="h2 center p-block-2">{{ sitename() }}</h2>
        @endif
        <ul>
            <li>
                <a href="{{ route('admin.index') }}" {{ menu_active($menu, route('admin.index')) }}>{!! icon('home') !!}
                    Dashboard</a>
            </li>
            @can('content-list')
                <h4 class="h4 bold m-left-1 m-top-2 m-bottom-1">Contenu</h4>
                <li>
                    <a href="{{ route('admin.template.index') }}" {{ menu_active($menu, route('admin.template.index')) }}>
                        {!! icon('template') !!}
                        Modèles
                    </a>
                    <ul>
                        <li hidden="hidden">
                            <a href="{{ route('admin.template.create') }}">Ajouter un modèle</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="{{ route('admin.page.index') }}" {{ menu_active($menu, route('admin.page.index')) }}>
                        {!! icon('page') !!}
                        Pages
                    </a>
                    <ul>
                        <li hidden="hidden">
                            <a href="{{ route('admin.page.create') }}">Ajouter une page</a>
                        </li>
                    </ul>
                </li>
            @endcan
            @can('user-list')
                <h4 class="h4 bold m-left-1 m-top-2 m-bottom-1">Utilisateurs</h4>
                <li>
                    <a href="{{ route('admin.user.index') }}" {{ menu_active($menu, route('admin.user.index')) }}>
                        {!! icon('users') !!}
                        Utilisateurs
                    </a>
                </li>
            @endcan
            @can('content-list')
                <h4 class="h4 bold m-left-1 m-top-2 m-bottom-1">Communauté</h4>
                <li>
                    <a href="{{ route('admin.blog.index') }}" {{ menu_active($menu, route('admin.blog.index')) }}>
                        {!! icon('blog') !!}
                        Articles
                    </a>
                    <ul>
                        <li hidden="hidden">
                            <a href="{{ route('admin.blog.create') }}">Ajouter un article</a>
                        </li>
                        @can('category-list')
                            <li>
                                <a href="{{ route('admin.category.index') }}" {{ menu_active($menu, route('admin.category.index')) }}>
                                    {!! icon('category') !!}
                                    Catégories
                                </a>
                                <ul>
                                    <li hidden="hidden">
                                        <a href="{{ route('admin.category.create') }}">Ajouter une catégorie</a>
                                    </li>
                                </ul>
                            </li>
                        @endcan
                        @can('tag-list')
                            <li>
                                <a href="{{ route('admin.tag.index') }}" {{ menu_active($menu, route('admin.tag.index')) }}>
                                    {!! icon('tag') !!}
                                    Tag
                                </a>
                                <ul>
                                    <li hidden="hidden">
                                        <a href="{{ route('admin.tag.create') }}">Ajouter un tag</a>
                                    </li>
                                </ul>
                            </li>
                        @endcan
                    </ul>
                </li>
            @endcan
            <h4 class="h4 bold m-left-1 m-top-2 m-bottom-1">Divers</h4>
            @can('option-list')
                <li>
                    <a href="{{ route('admin.options.index') }}" {{ menu_active($menu, route('admin.options.index')) }}>
                        {!! icon('option') !!}
                        Options
                    </a>
                </li>
            @endcan
            @can('theme-list')
                <li>
                    <a href="{{ route('admin.theme.index') }}" {{ menu_active($menu, route('admin.theme.index')) }}>
                        {!! icon('theme') !!}
                        Thèmes
                    </a>
                </li>
            @endcan
            @can('role-list')
                <li>
                    <a href="{{ route('admin.role.index') }}" {{ menu_active($menu, route('admin.role.index')) }}>
                        {!! icon('role') !!}
                        Rôles
                    </a>
                </li>
            @endcan
            <h4 class="h4 bold m-left-1 m-top-2 m-bottom-1">Extensions</h4>
            @can('extension-list')
                <li>
                    <a href="{{ route('admin.extension.index') }}" {{ menu_active($menu, route('admin.extension.index')) }}>
                        {!! icon('extension') !!}
                        Extensions
                    </a>
                </li>
                @foreach(extensions() as $item)
                    @includeIf("$item->name.views.admin.menu")
                @endforeach
            @endcan
        </ul>
    </nav>

    <header>
        <div class="admin__body-notification">
            <site-notifications></site-notifications>
        </div>
        <div class="admin__body-search">

        </div>
        <ul class="admin__body-nav">
            @if(count_spam() > 0)
                <li class="header__notification">
                    <a href="{{ route('admin.spam.index') }}">
                        {!! icon('trash') !!}
                        <span class='notification-badge'>{{ count_spam() }}</span>
                    </a>
                </li>
            @endif
            <li class="header__logout">
                <form action="{{ route('logout') }}" method="post">
                    @csrf
                    <button>{!! icon('logout') !!}</button>
                </form>
            </li>
        </ul>
    </header>
    <main>
        @include('shared.partials.flash', ['floating' => true, 'duration' => 2])
        @yield('body')
    </main>
</div>
<spotlight-bar></spotlight-bar>
<script>
    window.cms = {
        ...(window.cms || {}),
        USER: {{ Auth::user() ? Auth::user()->id : 'null' }},
        NOTIFICATION: new Date({{ (\Illuminate\Support\Facades\Auth::user() and \Illuminate\Support\Facades\Auth::user()->notifications_read_at) ? \Illuminate\Support\Facades\Auth::user()->getNotificationsReadAtTimestamp() : 0 }} * 1000)
    };
</script>
</body>
</html>

