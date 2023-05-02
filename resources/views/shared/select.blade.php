@php
    $label ??= null;
    $class ??= null;
    $name ??= '';
    $value ??= '';
    $options ??= [];
@endphp

<div @class(['form-group', $class])>
    <label for="{{ $name }}" class="required">{{ $label }}</label>
    <select id="{{ $name }}"
            name="{{ $name }}"
            class="form-control @error($name) is-invalid @enderror">
        <option value="">Choisir une option</option>
        @foreach($options as $option)
            <option @selected(old($name, $value) === $option->key) value="{{ $option->key }}">{{ $option->label }}</option>
        @endforeach
    </select>
    @error($name)
    <div class="invalid-feedback">
        {{ $message }}
    </div>
    @enderror
</div>
