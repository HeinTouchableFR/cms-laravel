<x-mail::message>
# {{ $title }}

{{ $message }}

<x-mail::button :url="$url">
    Voir le commentaire
</x-mail::button>

</x-mail::message>
