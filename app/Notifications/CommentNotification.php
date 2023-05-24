<?php

namespace App\Notifications;

use App\Models\Comment;
use App\Models\Option;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class CommentNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public $deleteWhenMissingModels = true;

    /**
     * Create a new notification instance.
     */
    public function __construct(public Comment $comment, public string $message, public string $title)
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->from(Option::where('key', 'noreply-email')->first()?->value, sitename())
            ->subject('Vous avez une nouvelle notification | ' . sitename())
            ->markdown(
                'mails.comment',
                [
                    'message' => str_replace('<strong>', '**', str_replace('</strong>', '**', $this->message)),
                    'url' => route('blog.show', $this->comment->getContent()->slug) . '#c' . $this->comment->id,
                    'title' => $this->title,
                ]);
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'comment_id' => $this->comment->id,
            'content_id' => $this->comment->getContent()->id,
            'message' => $this->message,
        ];
    }
}
