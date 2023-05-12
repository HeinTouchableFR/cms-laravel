<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Template | {{ siteName() }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimal-ui"/>
    <link rel="apple-touch-icon" sizes="128x128" href="{{ favicon() }}">
    <link rel="icon" type="image/webp" href="{{ favicon() }}"/>
    <link rel="stylesheet" href="/themes/{{ theme() }}/css/style.css">
    <script src="/themes/{{ theme() }}/assets/app.js" type="module" defer=""></script>
    <script src="/themes/{{ theme() }}/assets/admin.js" type="module" defer=""></script>
    @vite(['resources/css/app.scss', 'resources/css/admin.scss', 'resources/ts/app.ts', 'resources/ts/admin.ts'])
    <meta name="turbolinks-cache-control" content="no-cache"/>
    @php
        $storage = File::allFiles(public_path() . "/themes/" . theme() ."/css/modules");
    @endphp
    @foreach($storage as $style)
        <link rel="stylesheet" href="/themes/{{ theme() }}/css/modules/{{ $style->getFileName() }}">
    @endforeach
    <link rel="stylesheet" href="/Editor.css">
</head>
<body>
<div class="page-wrapper">
    <div id="ve-components">
        @foreach($blocs as $bloc)
            @includeIf(theme() . '.views.' . $bloc['_name'], ['bloc' => $bloc, 'animate' => 'no-animate'])
        @endforeach
    </div>
</div>
</body>
</html>
