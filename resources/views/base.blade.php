<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>@yield('title') | {{ siteName() }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="/themes/{{ theme() }}/assets/app.js" type="module" defer=""></script>
    @vite(['resources/css/app.scss', 'resources/ts/app.ts'])
    <link rel="stylesheet" href="/themes/{{ theme() }}/css/style.css">
    @yield('stylesheets')
    <meta name="turbolinks-cache-control" content="no-cache" />
    <link rel="apple-touch-icon" sizes="128x128" href="{{ favicon() }}">
    <link rel="icon" type="image/webp" href="{{ favicon() }}" />
    @yield('meta')
    <meta property='og:locale' content='fr' />
    <meta property='og:type' content='website' />
    <meta property="og:title" content="@yield('title')" />
    <meta property="og:site_name" content="{{ siteName() }}" />
    <meta property="og:language" content="fr" />
    <meta property='og:url' content="{{ Request::url() }}" />
    <meta property='og:image' content="{{ openGraphLogo() }}" />
    <meta name='twitter:card' content='summary' />
    <meta name='twitter:site' content="{{ Request::url() }}" />
    <meta name='twitter:title' content="@yield('title') | {{ siteName() }}" />
    <meta name='twitter:image' content="{{ openGraphLogo() }}" />

    @section('description')
        <meta property='og:description' content="{{ description() }}" />
        <meta name='twitter:description' content="{{ description() }}" />
        <meta name="description" content="{{ description() }}" />
    @show

    @foreach(template('header') as $bloc)
        <link rel="stylesheet" href="/themes/{{ theme() }}/css/modules/{{ $bloc['_name'] }}.css">
    @endforeach

    @foreach(template('footer') as $bloc)
        <link rel="stylesheet" href="/themes/{{ theme() }}/css/modules/{{ $bloc['_name'] }}.css">
    @endforeach

    <link rel='canonical' href="{{ Request::url() }}" />
    <script type="application/ld+json">
    @section('jsonLd')
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "{{ siteName() }}",
              "url": "{{ Request::url() }}",
              "logo": "{{ openGraphLogo() }}",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "{{ Request::root() }}/recherche?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "sameAs": [
                "{{ social('facebook') }}",
                "{{ social('instagram') }}",
                "{{ social('twitter') }}",
                "{{ social('linkedin') }}",
                "{{ social('twitch') }}",
                "{{ social('rss') }}",
                "{{ social('youtube') }}",
                "{{ social('github') }}"
              ]
            }





        @show
    </script>
</head>
<body class="">
<div class="page-wrapper">
    @foreach(template('header') as $bloc)
        @includeIf(theme() . '.views.' . $bloc['_name'], ['bloc' => $bloc, 'animate' => $bloc['animate'] ? 'animate' : ''])
    @endforeach
    <div class="body">
        @yield('body')
    </div>
    <footer>
        @foreach(template('footer') as $bloc)
            @includeIf(theme() . '.views.' . $bloc['_name'], ['bloc' => $bloc, 'animate' => $bloc['animate'] ? 'animate' : ''])
        @endforeach
    </footer>
</div>
<script>
    window.cms = {
        ...(window.cms || {}),
        USER: {{ Auth::user() ? Auth::user()->id : 'null' }},
        NOTIFICATION: new Date({{ (\Illuminate\Support\Facades\Auth::user() and \Illuminate\Support\Facades\Auth::user()->notifications_read_at) ? \Illuminate\Support\Facades\Auth::user()->getNotificationsReadAtTimestamp() : 0 }})
    };
</script>
@yield('javascripts_footer')
</body>
</html>
