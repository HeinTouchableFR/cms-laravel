<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>@yield('title') | {{ sitename() }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimal-ui"/>
    <link rel="apple-touch-icon" sizes="128x128" href="{{ favicon() }}">
    <link rel="icon" type="image/webp" href="{{ favicon() }}"/>
    <link rel="stylesheet" href="/themes/{{ theme() }}/css/style.css">
    <link rel="stylesheet" href="/Editor.css">
    <script src="/themes/{{ theme() }}/assets/app.js" type="module" defer=""></script>
    <meta property='og:image' content="{{ openGraphLogo() }}"/>
    <script src="/themes/{{ theme() }}/assets/admin.js" type="module" defer=""></script>
    @vite(['resources/css/app.scss', 'resources/css/admin.scss', 'resources/ts/app.ts', 'resources/ts/admin.ts'])
    <meta name="turbolinks-cache-control" content="no-cache"/>
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    @yield('meta')
</head>
<body class="">
<div class="admin">
    <nav>
        <img src="{{ logo() }}" alt="logo">
        <ul>
            <li>
                <a href="{{ route('admin.index') }}">{!! icon('home') !!} Dashboard</a>
            </li>
            <h4 class="h4 bold m-left-1 m-top-2 m-bottom-1">Contenu</h4>
            <li>
                <a href="{{ route('admin.template.index') }}">
                    {!! icon('pen') !!}
                    Modèles
                </a>
                <ul>
                    <li hidden="hidden">
                        <a href="{{ route('admin.template.index') }}">Ajouter un modèle</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="{{ route('admin.page.index') }}">
                    {!! icon('pen') !!}
                    Pages
                </a>
                <ul>
                    <li hidden="hidden">
                        <a href="{{ route('admin.page.index') }}">Ajouter une page</a>
                    </li>
                </ul>
            </li>
            <h4 class="h4 bold m-left-1 m-top-2 m-bottom-1">Utilisateurs</h4>
            <li>
                <a href="#">
                    {!! icon('user') !!}
                    Utilisateurs
                </a>
            </li>

            <h4 class="h4 bold m-left-1 m-top-2 m-bottom-1">Communauté</h4>
            <li>
                <a href="{{ route('admin.blog.index') }}">
                    {!! icon('pen') !!}
                    Articles
                </a>
                <ul>
                    <li hidden="hidden">
                        <a href="{{ route('admin.blog.index') }}">Ajouter un article</a>
                    </li>
                    <li>
                        <a href="#">Catégories</a>
                        <ul>
                            <li hidden="hidden">
                                <a href="#">Ajouter une catégorie</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Tag</a>
                        <ul>
                            <li hidden="hidden">
                                <a href="#">Ajouter un tag</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>

            <h4 class="h4 bold m-left-1 m-top-2 m-bottom-1">Divers</h4>
            <li>
                <a href="{{ route('admin.options.index') }}">
                    {!! icon('edit') !!}
                    Options
                </a>
            </li>
            <li>
                <a href="#">
                    {!! icon('chart') !!}
                    Stats
                </a>
            </li>

            <h4 class="h4 bold m-left-1 m-top-2 m-bottom-1">Superadmin</h4>
            <li>
                <a href="#">
                    {!! icon('pen') !!}
                    Documentation
                </a>
            </li>
        </ul>
    </nav>

    <header>
        <div class="admin__body-notification">
            <site-notifications></site-notifications>
        </div>
        <div class="admin__body-search">

        </div>
        <ul class="admin__body-nav">

            <li class="header__notification">
                <a href="#">
                    {!! icon('trash') !!}
                    <span class='notification-badge'>spam</span>
                </a>
            </li>
            <li class="header__logout"><a href="{{ route('logout') }}">{!! icon('logout') !!}</a></li>
        </ul>
    </header>
    <main>
        @include('shared.partials.flash', ['floating' => true, 'duration' => 2])
        @yield('body')
    </main>
</div>
<spotlight-bar></spotlight-bar>
</body>
</html>

