@extends('admin.admin')


@section('title')
    Dashboard
@endsection

@section('body')
    <div class="stack-large dashboard">
        @if(count($failed_jobs) > 0)
            <section class="stack p-block-4" style="--gap:2">
                <div class="flex">
                    <h2 class="h2 m-botton-2" style="color: var(--red);">
                        {!! icon('warning') !!} Tâches échouées
                    </h2>
                </div>
                <div class="admin__body-card">
                    <table class="table">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($failed_jobs as $job)
                            <tr>
                                <td style="white-space: nowrap" class="text-muted">
                                    <small>{!! ago(new \Carbon\Carbon($job->failed_at)) !!}</small>
                                </td>
                                <td width="75%">
                                    <h4 class="m-bottom-1 formatted"><strong>{{ $job->uuid }}</strong></h4>
                                    <p style="color: var(--color); font-size: .6rem;">{{ $job->exception }}</p>
                                </td>
                                <td>
                                    <div class="dashboard-actions">
                                        <form action="{{ route('admin.retry_job', $job) }}" method="post">
                                            @csrf
                                            <button>{!! icon('sync') !!}</button>
                                        </form>
                                        <form action="{{ route('admin.destroy_job', $job) }}" method="post">
                                            @csrf
                                            @method('delete')
                                            <button>{!! icon('trash') !!}</button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </section>
        @endif
        <div class="grid two" style="--gap: 4">
            <!-- Commentaires -->
            <section class="stack" style="--gap:2">
                <div class="flex">
                    <h2 class="h2">
                        {!! icon('comments') !!} Derniers commentaires
                    </h2>
                    {{ $comments->links() }}
                </div>
                <div class="dashboard-card stack-separated">
                    @foreach($comments as $comment)
                        <article class="dashboard-comment stack" style="--gap:2">
                            <div class="flex">
                                <h3>
                                    <strong>
                                        @if($comment->user)
                                            {{ $comment->user->username }}
                                        @else
                                            {{ $comment->username }}
                                        @endif
                                    </strong>,
                                    <a href="{{ route('blog.show', $comment->getContent()->slug) }}">
                                        {{ $comment->getContent()->title }}
                                    </a>
                                </h3>
                                <form
                                    action="{{ route('admin.destroy', $comment->id) }}"
                                    method="post"
                                    onsubmit="{{ 'return confirm("Voulez vous vraiment supprimer le commentaire ?")' }}">
                                    @csrf
                                    @method('delete')
                                    <button type="submit">
                                        {!! icon('trash') !!}
                                    </button>
                                </form>
                            </div>
                            <p>{!! $comment->content !!}</p>
                        </article>
                    @endforeach
                </div>
            </section>
            <div class="stack-large">
                <!-- Actions -->
                <section class="stack" style="--gap: 1">
                    <div class="flex">
                        <h2 class="h2">{!! icon('action') !!} Actions</h2>
                    </div>
                    <div class="dashboard-card">
                        <div class="flex">
                            <form action="{{ route('admin.cache') }}" method="post">
                                @csrf
                                @method('delete')
                                <button>{!! icon('cache') !!} Vider le cache</button>
                            </form>
                            <form action="{{ route('admin.spam.detect') }}" method="post">
                                @csrf
                                <button>{!! icon('comments') !!} Détecter le spam</button>
                            </form>
                        </div>
                    </div>
                </section>
                <section class="stack m-top-2" style="--gap: 1">
                    <div class="flex">
                        <h2 class="h2">{!! icon('email') !!} <a href="https://www.mail-tester.com/"
                                                                target="_blank"
                                                                rel="noreferrer">Tester les emails</a></h2>
                    </div>
                    <div class="dashboard-card">
                        <form action="{{ route('admin.mail') }}" method="post" class="flex stretch">
                            @csrf
                            <div class="form-group" style="width: 88%">
                                <input class="form-control" placeholder="Email" name="email">
                            </div>
                            <button class="btn primary-outlined">Envoyer</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    </div>
@endsection
