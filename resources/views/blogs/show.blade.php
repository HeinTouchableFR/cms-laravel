@extends('base')

@section('title', $content->title)

@section('description')
    @if($content->description)
        <meta property='og:description' content="{{ $content->description }}"/>
        <meta name='twitter:description' content="{{ $content->description }}"/>
        <meta name="description" content="{{ $content->description }}"/>
    @else
        @parent
    @endif
@endsection

@section('meta')
    <meta property="og:image" content="{{ image_url_raw($content->attachment_id)}}"/>
    <meta property="og:created_time" content="{{ $content->created_at }}"/>
    <meta name="twitter:card" content="summary_large_image"/>
@endsection

@section('stylesheets')
    @foreach($content->getContent() as $bloc)
        <link rel="stylesheet" href="/themes/{{ theme() }}/css/modules/{{ $bloc['_name'] }}.css">
    @endforeach
@overwrite

@section('body')
    <div
        class="{{ $content->isScheduled() ? 'blog-scheduled' : '' }}" {{ $content->isScheduled() ? "id=scheduled-" . $content->id : '' }}>
        @foreach($content->getContent() as $bloc)
            @includeIf(theme() . '.views.' . $bloc['_name'], ['bloc' => $bloc, 'animate' => 'animate'])
        @endforeach
        @if($content->isScheduled())
            <div class="countdown">
                <small>Disponible dans</small>
                <strong>{{ countdown($content->created_at, "scheduled-" . $content->id) }}</strong>
            </div>
        @endif
    </div>
@endsection
