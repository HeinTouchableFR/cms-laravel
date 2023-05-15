<x-mail::message>
# Bonjour

Veuillez cliquer sur le bouton ci-dessous pour vérifier votre adresse e-mail.

<x-mail::button :url="$actionUrl">
    {{ $actionText }}
</x-mail::button>

Si vous n'arrivez pas à cliquer sur le bouton "Vérifier l'adresse e-mail", copiez et collez l'URL ci-dessous dans votre navigateur web.<br/>
<em>{{$actionUrl}}</em>

Bien à vous,<br/>
{{ sitename() }}
</x-mail::message>
