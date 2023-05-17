@extends('admin.layout.card')

@section('title')
    Gestion des spams
@endsection

@section('card-title')
    {!! icon('pen') !!} Gestion des spams
@endsection

@section('content')
    @foreach($comments as $comment)
        <article class="dashboard-comment stack p-block-2" style="--gap:1">
            <div class="flex">
                <h3>
                    @if($comment->user_id)
                    <strong>
                        <a
                            href="">{!! icon('user') !!} {{ $comment->user->username }}</a>
                    </strong>,
                    @endif
                    <a href="{{ route('blog.show', $comment->getContent()->slug) }}" target="_blank">
                        {{ $comment->getContent()->title }}
                    </a>
                </h3>
                <div class="hstack" style="--gap:1;">
                    <form
                        action="{{ route('admin.spam.unspam', $comment->id) }}"
                        method="post"
                        onsubmit="{{ 'return confirm("Voulez vous vraiment effectuer cette action ?")' }}">
                        @csrf
                        @method('delete')
                        <button class="btn secondary" type="submit">
                            {!! icon('check') !!} Non spam
                        </button>
                    </form>
                    @if($comment->user_id !== null)
                        <form
                            action="{{ route('admin.user.ban', $comment->user) }}"
                            method="post"
                            onsubmit="{{ 'return confirm("Voulez-vous vraiment bannir cet utilisateur ?")' }}">
                            @csrf
                            <button class="btn danger" type="submit">
                                {!! icon('delete') !!} Bannir l'utilisateur
                            </button>
                        </form>
                    @endif
                </div>
            </div>
            <p>{!! $comment->content !!}</p>
        </article>
    @endforeach
@endsection
