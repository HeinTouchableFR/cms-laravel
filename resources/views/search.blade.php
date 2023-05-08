@extends('base')

@section('title', 'Résultats pour la recherche: ' . $q)

@section('description')
    @parent
@endsection

@section('body')
    <div class="search-header">
        <div class="container">
            @if(empty($q))
                <h1 class="h1">Ooops !</h1>
            @elseif(count($results) === 0)
                <h1 class="h1">Aucun résultat</h1>
            @else
                <h1 class="h1">{{ $total }} Résultat{{ $total > 1 ? 's' : '' }}</h1>
            @endif
            <form class="form-group" action="{{ route('search') }}" method="get">
                <input name="q" id="q" value="{{$q}}" autocomplete="off" placeholder="Rechercher un contenu...">
                <button>
                    {!! icon('search') !!}
                </button>
            </form>
        </div>
    </div>
    <div class="container p-block-5">
        @if(empty($q))
            <div class="formatted">
                <p>
                    Essayez de taper au moins un mot clé. Sinon je ne sais pas quoi vous trouver :(
                </p>
                <p>
                    Sérieusement je ne peux vraiment pas vous trouver ce que vous cherchez si vous ne m'aidez pas un
                    peu.<br/>
                    Alors je sais, parfois on arrive sur une nouvelle page et on ne sait plus ce que l'on cherche, ça
                    arrive !<br/>
                    Dans ce cas là il va falloir travailler un peu votre mémoire.
                </p>
            </div>
        @endif
        <ul class="stack-separated">
            @forelse($results as $result)
                <li class="search-result">
                    <h2 class="h5">
                        <a href="{{ $result['url'] }}">{!! $result['title'] !!}</a>
                    </h2>
                    <p class="text-muted text-small">
                        {{ $result['type'] }} |
                        {!! ago($result['created_at']) !!}
                    </p>
                    <p class="m-top-1">
                        {!! $result['excerpt'] !!}
                    </p>
                </li>
            @empty
                <p class="text-center text-muted h3">
                    Aucun résultat ne semble correspondre à votre recherche :(
                </p>
            @endforelse
        </ul>
    </div>
@endsection
