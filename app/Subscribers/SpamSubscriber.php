<?php

namespace App\Subscribers;

class SpamSubscriber
{
    public function checkComment(\App\Events\PreCommentCreatedEvent $commentCreatedEvent): void
    {
        $comment = $commentCreatedEvent->comment;
        $content = (string) $comment->content;
        foreach ($this->getSpamWords() as $word) {
            if (false !== stripos($content, (string) $word)) {
                $comment->spam = true;

                return;
            }
        }
    }

    private function getSpamWords(): array
    {
        $spamWords = \App\Models\Option::where('key', 'spam_words')->first();
        if (null === $spamWords) {
            return [];
        }

        return preg_split('/\r\n|\r|\n/', $spamWords) ?: [];
    }

    public function subscribe(\Illuminate\Events\Dispatcher $events): array
    {
        return [
            \App\Events\PreCommentCreatedEvent::class => 'checkComment',
        ];
    }
}
