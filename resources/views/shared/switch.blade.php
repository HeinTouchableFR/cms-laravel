@php
    $label ??= null;
    $type ??= 'text';
    $class ??= null;
    $name ??= '';
    $value ??= '';
@endphp

<div @class(['form-group', $class])>
    <div class="form-switch m-top-2">
        <input type="hidden" value="0" name="{{ $name }}">
        <input type="checkbox"
               id="{{ $name }}"
               name="{{ $name }}"
               role="switch"
               value="1"
               @checked( old($name, $value ?? false))
               class="form-control @error($name) is-invalid @enderror">
        <label class="form-check-label" for="{{ $name }}"><span class="switch"></span>{{ $label }}</label>
        @error($name)
        <div class="invalid-feedback">
            {{ $message }}
        </div>
        @enderror
    </div>
</div>
