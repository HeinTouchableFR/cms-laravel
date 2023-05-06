<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Content;
use \Illuminate\Contracts\View\View;
use App\Models\Option;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Symfony\Component\HttpKernel\Exception\UnprocessableEntityHttpException;

class DashboardController extends Controller
{
    function __construct()
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
