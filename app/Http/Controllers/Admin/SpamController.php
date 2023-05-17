<?php

namespace App\Http\Controllers\Admin;

use App\Events\CommentCreatedEvent;
use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Option;
use Illuminate\Http\Request;

class SpamController extends Controller
{
    public function index(): \Illuminate\Contracts\View\View
    {
        return view('admin.spam.index', [
            'comments' => Comment::where('spam', '=', '1')->get(),
            'menu' => route('admin.spam.index'),
        ]);
    }

    public function detect(): \Illuminate\Http\RedirectResponse
    {
        $words = preg_split('/\r\n|\r|\n/', Option::where('key', 'spam_words')->first()->value);
        $request = Comment::where('spam', '!=', 0);
        foreach ($words as $word) {
            $request = $request->orWhere("content", "LIKE", "%{$word}%");
        }
        $count = $request->update(array('spam' => true));

        if($count > 0) {
            return to_route('admin.spam.index')->with('success', "$count spams détectés");
        }

        return to_route('admin.index')->with('success', "$count spams détectés");
    }

    public function unspam(Comment $comment): \Illuminate\Http\RedirectResponse
    {
        $comment->update([
            'spam' => 0
        ]);

        // On émet à nouveau l'évènement pour notifier les utilisateurs
        event(new CommentCreatedEvent($comment));

        return to_route('admin.spam.index')->with('success', 'Le contenu a bien été restauré');
    }
}
