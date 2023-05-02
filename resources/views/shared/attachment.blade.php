@php
    $label ??= null;
    $type ??= 'text';
    $class ??= null;
    $name ??= '';
    $value ??= '';
    $preview ??= '';
@endphp

<div class="form-attachment form-group m-bottom-6" style="grid-row-start:1;align-self:stretch;">
    <label for="{{ $name }}">{{ $label }}</label>
    <input type="text" id="{{ $name }}" name="{{ $name }}"
           is="input-attachment"
           data-endpoint="/admin/attachment"
           overwrite="overwrite"
           class="form-control"
           value="{{ $value }}"
           preview="/storage/{{ $preview }}"
           style="display: none;"
    >
</div>
