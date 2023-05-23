@extends('base')

@section('title', 'Test extension')

@section('description')
    @parent
@endsection

@section('body')
    <div class="container">
        <alert-message type="success" duration="999">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid architecto at atque consequatur
            delectus dolorem eum ex, facilis illo labore laboriosam, molestias mollitia nisi possimus rem repellat
            temporibus voluptate!
        </alert-message>

        <alert-message type="error" duration="999">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid architecto at atque consequatur
            delectus dolorem eum ex, facilis illo labore laboriosam, molestias mollitia nisi possimus rem repellat
            temporibus voluptate!
        </alert-message>

        <alert-message type="warning" duration="999">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid architecto at atque consequatur
            delectus dolorem eum ex, facilis illo labore laboriosam, molestias mollitia nisi possimus rem repellat
            temporibus voluptate!
        </alert-message>

        <alert-message type="info" duration="999">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid architecto at atque consequatur
            delectus dolorem eum ex, facilis illo labore laboriosam, molestias mollitia nisi possimus rem repellat
            temporibus voluptate!
        </alert-message>
    </div>
@endsection
