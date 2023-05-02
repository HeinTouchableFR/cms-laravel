<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>@yield('title') | {{ siteName() }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="/themes/{{ theme() }}/css/style.css">
    <script src="/themes/{{ theme() }}/assets/app.js" type="module" defer=""></script>
    @vite(['resources/css/app.scss', 'resources/ts/app.ts'])
    @yield('stylesheets')
    <meta name="turbolinks-cache-control" content="no-cache"/>
    <link rel="apple-touch-icon" sizes="128x128" href="{{ favicon() }}">
    <link rel="icon" type="image/webp" href="{{ favicon() }}"/>
    @yield('meta')
    <meta property='og:locale' content='fr'/>
    <meta property='og:type' content='website'/>
    <meta property="og:title" content="@yield('title')"/>
    <meta property="og:site_name" content="{{ siteName() }}"/>
    <meta property="og:language" content="fr"/>
    <meta property='og:url' content="{{ Request::root() }}"/>
    <meta property='og:image' content="{{ openGraphLogo() }}"/>
    <meta name='twitter:card' content='summary'/>
    <meta name='twitter:site' content="{{ Request::root() }}"/>
    <meta name='twitter:title' content="@yield('title') | {{ siteName() }}"/>
    <meta name='twitter:image' content="{{ openGraphLogo() }}"/>

    @section('description')
        <meta property='og:description' content="{{ description() }}"/>
        <meta name='twitter:description' content="{{ description() }}"/>
        <meta name="description" content="{{ description() }}"/>
    @show

    @foreach(template('header') as $bloc)
        <link rel="stylesheet" href="/themes/{{ theme() }}/css/modules/{{ $bloc['_name'] }}.css">
    @endforeach

    @foreach(template('footer') as $bloc)
        <link rel="stylesheet" href="/themes/{{ theme() }}/css/modules/{{ $bloc['_name'] }}.css">
    @endforeach

    <link rel='canonical' href="{{ Request::root() }}"/>
    <script type="application/ld+json">
        {"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"{{ Request::root() }}
        /#organization","name":"{{ siteName() }}","url":"{{ Request::root() }}","sameAs":["{{ social('facebook') }}
        ","{{ social('twitter') }}","{{ social('instagram') }}","{{ social('linkedin') }}","{{ social('twitch') }}
        ","{{ social('rss') }}","{{ social('youtube') }}","{{ social('github') }}
        "],"logo":{"@type":"ImageObject","@id":"{{ Request::root() }}
        /#logo","inLanguage":"fr","url":"{{ openGraphLogo() }}
        ","contentUrl":"{{ openGraphLogo() }}","caption":"{{ siteName() }}
        "},"image":{"@id":"{{ Request::root() }}/#logo"}},{"@type":"WebSite","@id":"{{ Request::root() }}
        /#website","url":"{{ Request::root() }}/","name":"{{ siteName() }}","description":"{{ description() }}
        ","publisher":{"@id":"{{ Request::root() }}
        /#organization"},"potentialAction":[{"@type":"SearchAction","target":"{{ Request::root() }}
        /recherche?q={search_term_string}","query-input":"required name=search_term_string"}],"inLanguage":"fr"},{"@type":"ImageObject","@id":"{{ Request::root() }}
        /#primaryimage","inLanguage":"fr","url":"{{ openGraphLogo() }}
        ","contentUrl":"{{ openGraphLogo() }}"},{"@type":"WebPage","@id":"{{ Request::root() }}
        /#webpage","url":"{{ Request::root() }}","name":"{{ siteName() }}","isPartOf":{"@id":"{{ Request::root() }}
        /#website"},"about":{"@id":"{{ Request::root() }}
        /#organization"},"primaryImageOfPage":{"@id":"{{ Request::root() }}
        /#primaryimage"},"datePublished":null,"dateModified":null,"breadcrumb":{"@id":"{{ Request::root() }}
        /#breadcrumb"},"inLanguage":"fr","potentialAction":[{"@type":"ReadAction","target":["{{ Request::root() }}
        /"]}]},{"@type":"BreadcrumbList","@id":"{{ Request::root() }}
        /#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"{{ Request::root() }}
        /#webpage"}}]}]}

    </script>
</head>
<body class="">
<div class="page-wrapper">
    @foreach(template('header') as $bloc)
        @include(theme() . '.views.' . $bloc['_name'], ['bloc' => $bloc, 'animate' => 'animate'])
    @endforeach
    <div class="body">
        @yield('body')
    </div>
    <footer>
        @foreach(template('footer') as $bloc)
            @include(theme() . '.views.' . $bloc['_name'], ['bloc' => $bloc, 'animate' => 'animate'])
        @endforeach
    </footer>
</div>

@yield('javascripts_footer')
</body>
</html>
