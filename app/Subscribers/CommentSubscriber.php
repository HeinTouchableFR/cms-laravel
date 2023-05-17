<?php

namespace App\Subscribers;

use App\Models\Comment;
use App\Notifications\CommentNotification;
use Spatie\Permission\Models\Role;

class CommentSubscriber
{
    public function onCommentCreated(\App\Events\CommentCreatedEvent $commentCreatedEvent): void
    {
        $comment = $commentCreatedEvent->comment;

        // Si le commentaire est un spam, on notifie personne
        if ($comment->spam) {
            return;
        }

        $parent = $comment->comment_id;

        // Le commentaire n'est pas une réponse, on notifie les administrateurs et modérateurs
        if (null === $parent) {
            $adminRole = Role::where('name', '=', 'Administrateur')->first();
            $modoRole = Role::where('name', '=', 'Modérateur')->first();
            $users = collect([]);

            $users = $users->merge($adminRole?->users);
            $users = $users->merge($modoRole?->users);

            $excerpt = htmlentities(substr($comment->content, 0, 40));
            $author = htmlentities($comment->username ?: $comment->user->username);
            foreach ($users as $user) {
                $user->notify(new CommentNotification($comment, "<strong>{$author}</strong> a ajouté un nouveau commentaire « {$excerpt} »", 'Nouveau commentaire'));
            }

            return;
        }

        $parent = Comment::find($parent);

        $comments = collect($parent->replies)
            ->push($parent)
            ->filter(fn (Comment $c) => null !== $c->user_id && $comment->user_id !== $c->user_id)
            ->keyBy(function (Comment $c) {
                $author = $c->user;

                return $author?->id;
            });

        $excerpt = htmlentities(substr($parent->content, 0, 40));
        $author = htmlentities($comment->user->username);

        foreach ($comments as $c) {
            $c->user->notify(new CommentNotification($parent, "<strong>{$author}</strong> a répondu au commentaire « {$excerpt} »", 'Nouvelle commentaire'));
        }
    }

    public function subscribe(\Illuminate\Events\Dispatcher $events): array
    {
        return [
            \App\Events\CommentCreatedEvent::class => 'onCommentCreated',
        ];
    }
}
