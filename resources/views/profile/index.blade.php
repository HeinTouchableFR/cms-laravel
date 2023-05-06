@extends('profile.layout')

@section('title', 'Mon compte')

@section('description')
    @parent
@endsection

@section('content')
    @if($hasActivity)
        <div class="bg p-block-3">
            <div class="container">
                <div class="stack" style="--gap: 7;">
                    @if(count($comments) > 0)
                        <div class="stack">
                            <div class="flex">
                                <h2 class="h3">Mes <strong>derniers</strong> commentaires</h2>
                            </div>
                            <table class="table">
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
                                            <a href="{{ route('blog.show', $comment->target->slug) }}">
                                                {{ $comment->target->title }}
                                            </a>
                                        </td>
                                        <td width="150" class="mobile-hidden">
                                            {{ $comment->createdAt }}
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
            </div>
        </div>
    @else
        <div class="p-block-3">
            <div class="h2 center">Bienvenue !</div>
            <p class="text-muted text-center mt1 mb2">
                Cette page affichera votre activité sur le site. <br/>
                Pour le moment je n'ai rien à vous montrer :(
            </p>
        </div>
    @endif
@endsection
