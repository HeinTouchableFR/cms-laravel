<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:access-administration', ['only' => ['index']]);
    }

    public function index(): View
    {
        return view('admin.dashboard', [
            'menu' => route('admin.index'),
        ]);
    }
}
