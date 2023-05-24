<?php

namespace Extensions\test\Controllers\Admin;

class TestController
{
    function index(): \Illuminate\Contracts\View\View
    {
        return view('test.views.admin.index', [
            'menu' => route('admin.test.index')
        ]);
    }
}
