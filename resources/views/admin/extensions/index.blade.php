@extends('admin.layout.card')

@section('title')
    Gestion des extensions
@endsection

@section('card-title')
    {!! icon('extension') !!} Gestion des extensions
@endsection

@section('content')
    @can('extension-upload')
        <form action="{{ route('admin.extension.upload') }}" method="post" enctype="multipart/form-data">
            @csrf
            <input type="file" is="drop-files" label="Déposez les fichiers ici ou cliquez pour les télécharger."
                   help="Fichier au format ZIP uniquement." name="zip" accept=".zip">
            <button type="submit" class="btn primary m-top-2">Envoyer</button>
        </form>
    @endcan

    <h2 class="h2 m-block-3">Mes extensions installés</h2>
    <table class="table">
        <thead>
        <tr>
            <th>ID</th>
            <th>Extension</th>
            <th>Auteur</th>
            <th>Version</th>
            <th class="text-center">Statut</th>
            <th class="text-right">Actions</th>
        </tr>
        </thead>
        <tbody>
        @foreach($extensions as $item)
            @php
                $configFile = Storage::get("/extensions/$item->name/config.json");
                $data = json_decode($configFile, true);
            @endphp
            <tr>
                <td class="dashboard-id">
                    {{ $item->id }}
                </td>
                <td width="30%">
                    {{ $item->name }}
                    @if($data && key_exists('description', $data))
                        <p class="m-top-1" style="color: var(--color); font-size: .8rem">
                            {{ $data['description'] }}
                        </p>
                    @endif
                </td>
                <td>
                    @if($data && key_exists('author', $data))
                        {{ $data['author'] }}
                    @endif
                </td>
                <td>
                    @if($data && key_exists('version', $data))
                        {{ $data['version'] }}
                    @endif
                </td>
                <td><span class="bullet @if(!$item->active) bullet--danger @endif"></span></td>
                <td>
                    <div class="dashboard-actions">
                        @can('extension-toggle')
                            <form action="{{ route('admin.extension.toggle', $item) }}" method="post"
                                  onsubmit="return confirm('Voulez-vous vraiment {{ $item->active ? 'désactiver' : 'activer' }} cette extension ?')">
                                @csrf
                                <button style="color: {{ $item->active ? 'var(--red);' : 'var(--green);' }}"
                                        type="submit">
                                    {!! $item->active ? icon('ban') : icon('confirm') !!}
                                </button>
                            </form>
                        @endcan
                        @can('extension-delete')
                            <form action="{{ route('admin.extension.destroy', $item) }}" method="post"
                                  onsubmit="return confirm('Voulez-vous vraiment supprimer cette extension ?')">
                                @csrf
                                @method('delete')
                                <button type="submit">
                                    {!! icon('trash') !!}
                                </button>
                            </form>
                        @endcan
                    </div>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
@endsection
