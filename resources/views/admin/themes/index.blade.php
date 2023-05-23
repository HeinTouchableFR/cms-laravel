@extends('admin.layout.card')

@section('title')
    Gestion des thèmes
@endsection

@section('card-title')
    {!! icon('theme') !!} Gestion des thèmes
@endsection

@section('content')
    <form action="{{ route('admin.theme.upload') }}" method="post" enctype="multipart/form-data">
        @csrf
        <input type="file" is="drop-files" label="Déposez les fichiers ici ou cliquez pour les télécharger."
               help="Fichier au format ZIP uniquement." name="zip" accept=".zip">
        <button type="submit" class="btn primary m-top-2">Envoyer</button>
    </form>


    <h2 class="h2 m-block-3">Mes thèmes installés</h2>
    <div class="themes">
        @php
            $storage = Storage::disk('public')->directories('themes');
        @endphp
        @foreach($storage as $theme)
            <div class="card">
                <div class="preview">
                    <img src="/{{ $theme }}/preview.png" alt="Theme preview">
                </div>
                <div class="footer">
                    <h2>
                        {{ Str::replace('themes/', '', $theme) }}
                        @if(theme() === Str::replace('themes/', '', $theme))
                            <span>(actif)</span>
                        @endif
                    </h2>
                    <div class="actions">
                        @if(theme() !== Str::replace('themes/', '', $theme))
                            <form action="{{ route('admin.theme.define', Str::replace('themes/', '', $theme)) }}"
                                  method="post">
                                @csrf
                                <button type="submit" style="color: var(--green);">
                                    {!! icon('confirm') !!}
                                </button>
                            </form>
                        @endif
                        @if(Str::replace('themes/', '', $theme) !== 'default')
                            <form action="{{ route('admin.theme.destroy', Str::replace('themes/', '', $theme)) }}"
                                  method="post">
                                @csrf
                                @method('delete')
                                <button type="submit">
                                    {!! icon('trash') !!}
                                </button>
                            </form>
                        @endif
                    </div>
                </div>
            </div>
        @endforeach
    </div>
@endsection
