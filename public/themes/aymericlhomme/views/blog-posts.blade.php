@extends('aymericlhomme.views.layout')

@section('element')section
@overwrite
@section('additionalClass')page-posts
@overwrite

@section('content')
    <div class="container">
        @forelse($posts as $post)
            @php
                $link = route('blog.show', $post->slug);
            @endphp
            <article
                class="blog-post animate {{ $post->isScheduled() ? 'blog-scheduled' : '' }}" {{ $post->isScheduled() ? "id=scheduled-" . $post->id : '' }}>
                <a href="{{ $link }}" class="blog-post__image">
                    @if($post->attachment_id)
                        {!! imageTag($post->attachment_id, 160, 160) !!}
                    @endif
                </a>
                <div class="blog-post__body">
                    <h2 class="h2 bold blog-post__title"><a href="{{ $link }}">{{ $post->title }}</a></h2>
                    <div class="blog-post__meta">
                        <div>
                            {{ $post->created_at }}
                            @if(!empty($post->category))
                                - <span>
                                <a href="{{ route('blog.category', $post->category->slug) }}">{{ $post->category->name }}</a>
                            </span>
                            @endif
                        </div>
                    </div>
                    <div class="blog-description">
                        <p>
                            {{ $post->description }}
                        </p>
                        @if($post->isScheduled())
                            <div class="countdown">
                                <small>Disponible dans</small>
                                <strong>{{ countdown($post->created_at, "scheduled-" . $post->id) }}</strong>
                            </div>
                        @endif
                    </div>
                </div>
            </article>
        @empty
            Aucun articles ne correspond à cette page
        @endforelse
        {{ $posts->links() }}
    </div>
@overwrite
