@props(['url'])
<tr>
    <td class="header">
        <a href="{{ $url }}" style="display: inline-block;">
            @if (trim($slot) === 'Laravel')
                <img src="{{ Request::root() }}{{logo()}}" class="logo" alt="{{sitename()}} Logo">
            @else
                {{ $slot }}
            @endif
</a>
</td>
</tr>
