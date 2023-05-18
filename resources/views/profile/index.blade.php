@extends('profile.layout')

@section('title', 'Mon compte')

@section('description')
    @parent
@endsection

@section('content')
    <div class="bg p-block-3">
        <div class="container flex profil" style="align-items: initial; gap: 16px;">
            @if(session('success'))
                <alert-message type="success" duration="2" is-floating="true">
                    {{ session('success') }}
                </alert-message>
            @endif
            @if($hasActivity)
                <div class="stack" style="--gap: 7; width: 100%">
                    @if(count($comments) > 0)
                        <div class="stack">
                            <div class="flex">
                                <h2 class="h3">Mes <strong>derniers</strong> commentaires</h2>
                            </div>
                            <table class="table m-top-4">
                                <thead>
                                <tr>
                                    <th>Article</th>
                                    <th width="150" class="mobile-hidden">Date</th>
                                    <th class="text-left">Commentaire</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($comments as $comment)
                                    <tr>
                                        <td>
                                            <a href="{{ route('blog.show', $comment->getContent()->slug) }}">
                                                {{ $comment->getContent()->title }}
                                            </a>
                                        </td>
                                        <td width="150" class="mobile-hidden">
                                            {!! ago($comment->created_at) !!}
                                        </td>
                                        <td width="50%">
                                            {{ $comment->content }}
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                    @endif
                </div>
            @else
                <div class="stack" style="width: 100%">
                    <div class="h2 center">Bienvenue !</div>
                    <p class="text-muted text-center m-top-1 m-bottom-2">
                        Cette page affichera votre activité sur le site. <br/>
                        Pour le moment je n'ai rien à vous montrer :(
                    </p>
                </div>
            @endif
            <div class="stack profil-notifications">
                <div class="flex">
                    <h2 class="h3">Mes notifications</h2>
                    <form action="{{ route('profile.clean-notification') }}" method="post">
                        @csrf
                        @method('delete')
                        <button class="danger">
                            {!! icon('trash') !!}
                        </button>
                    </form>
                </div>
                <div class="m-top-2">
                    @forelse ($notifications as $notification)
                        <a class="p-block-2" href="{{ $notification['url'] }}">
                            {!! $notification['message'] !!}
                        </a>
                    @empty
                        <p class="text-muted text-center m-top-1 m-bottom-2">
                            Vous n'avez aucune notifications.
                        </p>
                    @endforelse
                </div>
            </div>
        </div>
    </div>
@endsection
