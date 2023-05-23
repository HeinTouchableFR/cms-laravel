@extends('admin.layout.card')

@section('title')
    Gestion des options
@endsection

@section('card-title')
    {!! icon('option') !!} Gestion des options
@endsection

@section('content')
    <div id="app"></div>
    <table class="table">
        <thead>
        <tr>
            <th style="width: 120px;">ID</th>
            <th class="text-left">Valeur</th>
        </tr>
        </thead>
        <tbody>
        @foreach($options as $option)
            <tr>
                <td style="vertical-align: top;">
                    <label for="{{ $option->key }}">{{ $option->key }}</label>
                </td>
                <td>
                    <form class="form-group" method="post" is="autosave-blur">
                        @csrf
                        @if($option->key === 'logo')
                            <div class="form-attachment form-group"
                                 style="grid-row-start:1;align-self:stretch;width: 250px">
                                <input type="text" name="value" data-endpoint="{{ $dataEndpoint }}"
                                       preview='{{ image_url_raw($option->value) }}'
                                       is="input-attachment" id="{{ $option->key }}" value="{{ $option->value }}" />
                            </div>
                        @elseif($option->key === 'favicon')
                            <div class="form-attachment form-group"
                                 style="grid-row-start:1;align-self:stretch;width: 250px">
                                <input type="text" name="value" data-endpoint="{{ $dataEndpoint }}"
                                       preview='{{ image_url_raw($option->value) }}'
                                       is="input-attachment" id="{{ $option->key }}" value="{{ $option->value }}" />
                            </div>
                        @elseif($option->key === 'homepage')
                            <div class="form-attachment form-group"
                                 style="grid-row-start:1;align-self:stretch;width: 250px">
                                <select name="value" id="{{ $option->key }}">
                                    <option>Choisir une option</option>
                                    <optgroup label="Page">
                                        @foreach($pagePosts as $post)
                                            <option value="{{ $post->id }}"
                                                    @if($option->value== $post->id) selected @endif>{{ $post->title }}</option>
                                        @endforeach
                                    </optgroup>
                                    <optgroup label="Article">
                                        @foreach($blogPosts as $post)
                                            <option value="{{ $post->id }}"
                                                    @if($option->value== $post->id) selected @endif>{{ $post->title }}</option>
                                        @endforeach
                                    </optgroup>
                                </select>
                            </div>
                        @elseif($option->key === 'header')
                            <div class="form-attachment form-group"
                                 style="grid-row-start:1;align-self:stretch;width: 250px">
                                <select name="value" id="{{ $option->key }}">
                                    <option>Choisir une option</option>
                                    @foreach($templatePosts as $post)
                                        @if($post->type === 'header')
                                            <option value="{{ $post->id }}"
                                                    @if($option->value== $post->id) selected @endif>{{ $post->title }}</option>
                                        @endif
                                    @endforeach
                                </select>
                            </div>
                        @elseif($option->key === 'footer')
                            <div class="form-attachment form-group"
                                 style="grid-row-start:1;align-self:stretch;width: 250px">
                                <select name="value" id="{{ $option->key }}">
                                    <option>Choisir une option</option>
                                    @foreach($templatePosts as $post)
                                        @if($post->type === 'footer')
                                            <option value="{{ $post->id }}"
                                                    @if($option->value== $post->id) selected @endif>{{ $post->title }}</option>
                                        @endif
                                    @endforeach
                                </select>
                            </div>
                        @elseif($option->key === 'blog')
                            <div class="form-attachment form-group"
                                 style="grid-row-start:1;align-self:stretch;width: 250px">
                                <select name="value" id="{{ $option->key }}">
                                    <option>Choisir une option</option>
                                    @foreach($templatePosts as $post)
                                        @if($post->type === 'template')
                                            <option value="{{ $post->id }}"
                                                    @if($option->value== $post->id) selected @endif>{{ $post->title }}</option>
                                        @endif
                                    @endforeach
                                </select>
                            </div>
                        @else
                            <textarea name="value" id="{{ $option->key }}" cols="30"
                                      rows="10">{{ $option->value }}</textarea>
                        @endif
                        <input type="hidden" name="key" value="{{ $option->key }}">
                    </form>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
@endsection
