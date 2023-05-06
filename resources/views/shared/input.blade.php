@php
    $label ??= null;
    $type ??= 'text';
    $class ??= null;
    $name ??= '';
    $value ??= '';
    $displayError ??= true;
    $errorLocation ??= null;
@endphp

<div @class(['form-group', $class])>
    <label for="{{ $name }}" class="required">{{ $label }}</label>
    @if($type === 'textarea')
        <textarea
            id="{{ $name }}"
            name="{{ $name }}"
            class="form-control @if($displayError) @error($name, $errorLocation) is-invalid @enderror @endif">{{ old($name, $value) }}</textarea>
    @elseif($type === 'datepicker')
        <input type="hidden" id="{{ $name }}" name="{{ $name }}" is="date-picker" class="form-control flatpickr-input"
               value="{{ $value }}">
    @else
        <input type="{{ $type }}"
               id="{{ $name }}"
               name="{{ $name }}"
               value="{{ old($name, $value) }}"
               class="form-control @if($displayError) @error($name, $errorLocation) is-invalid @enderror @endif">
    @endif
    @if($displayError)
        @error($name, $errorLocation)
        <div class="invalid-feedback">
            {{ $message }}
        </div>
        @enderror
    @endif
</div>
