<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\TestMailRequest;
use App\Mail\TestMail;
use App\Models\Comment;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Mail;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:access-administration', ['only' => ['index']]);
    }

    public function index(): View
    {
        return view('admin.dashboard', [
            'comments' => Comment::where('spam', 0)->orderBy('created_at', 'desc')->paginate(7),
            'menu' => route('admin.index'),
        ]);
    }

    public function cache(): RedirectResponse
    {
        Artisan::call('cache:clear');
        Artisan::call('view:clear');

        return to_route('admin.index')->with('success', 'Le cache a bien été vidé');
    }

    public function mail(TestMailRequest $request): RedirectResponse
    {
        Mail::send(new TestMail($request->validated()));

        return to_route('admin.index')->with('success', 'Le mail de test a bien été envoyé');
    }

    public function destroy(Comment $comment): RedirectResponse
    {
        $comment->delete();

        return to_route('admin.index')->with('success', 'Le commentaire a bien été supprimé');
    }
}
