<?php

namespace App\Notifications;

use App\Models\Option;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Auth;

class EmailVerificationNotification extends VerifyEmail implements ShouldQueue
{
    use Queueable;

    public $user;

    /**
     * Create a new notification instance.
     */
    public function __construct($user = '')
    {
        $this->user = $user ?: Auth::user();         //if user is not supplied, get from session
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(mixed $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(mixed $notifiable): MailMessage
    {
        $actionUrl = $this->verificationUrl($notifiable);     //verificationUrl required for the verification link
        $actionText = 'Vérifier l\'adresse e-mail';

        return (new MailMessage)
            ->from(Option::where('key', 'contact-email')->first()?->value, sitename())
            ->subject('Vérification de l\'adresse e-mail')->markdown(
                'mails.emailverify',
                [
                    'user' => $this->user,
                    'actionText' => $actionText,
                    'actionUrl' => $actionUrl,
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
            //
        ];
    }
}
