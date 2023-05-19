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

@section('jsonLd')
    {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "{{ route('blog.show', $content->slug) }}"
    },
    "headline": "{{ $content->title }}",
    "description": "{{ $content->description }}",
    "image": "{{ image_url_raw($content->attachment_id)}}",
    "author": {
    "@type": "Person",
    "name": "{{ $content->user->username }}",
    "url": "{{ Request::root() }}"
    },
    "publisher": {
    "@type": "Organization",
    "name": "{{ sitename() }}",
    "logo": {
    "@type": "ImageObject",
    "url": "{{ logo() }}"
    }
    },
    "datePublished": "{{ $content->created_at }}",
    "dateModified": "{{ $content->updated_at }}",
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
@overwrite

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
        <div class="container p-block-4">
            <comments-area target="{{ $content->id }}"></comments-area>
        </div>
    </div>
@endsection
