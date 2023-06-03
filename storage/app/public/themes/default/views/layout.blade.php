<{{trim(View::yieldContent('element', 'div'))}} class="{{ 'bloc p-block-' . $bloc['padding'] ?? '0' }} {{trim(View::yieldContent('additionalClass'))}}"
id="{{key_exists('id', $bloc) ? $bloc['id'] : ''}}"
style="{{ $bloc['backgroundColor'] ? '--backgroundColor: ' . $bloc['backgroundColor'] . ';' : '' }}  {{ $bloc['textColor'] ? 'color: ' . $bloc['textColor'] .';' : ''}} {{ $bloc['backgroundDesktop'] ? '--backgroundDesktop: url(' . image_url_raw($bloc['backgroundDesktop']) .');' : ''}} {{ $bloc['backgroundSize'] ? '--backgroundSize: ' . $bloc['backgroundSize'] .';' : ''}} {{ $bloc['backgroundRepeat'] ? '--backgroundRepeat: ' . $bloc['backgroundRepeat'] .';' : ''}} {{ $bloc['backgroundXPosition'] ? '--backgroundXPosition: ' . $bloc['backgroundXPosition'] .';' : ''}} {{ $bloc['backgroundYPosition'] ? '--backgroundYPosition: ' . $bloc['backgroundYPosition'] .';' : ''}} {{ $bloc['backgroundMobile'] ? '--backgroundMobile: url(' . image_url_raw($bloc['backgroundMobile']) .');' : ''}}"
>
@yield('content')
</{{trim(View::yieldContent('element', 'div'))}}>
