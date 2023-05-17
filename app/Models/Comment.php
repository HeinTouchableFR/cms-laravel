<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @mixin IdeHelperComment
 */
class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'username',
        'content',
        'user_id',
        'comment_id',
        'content_id',
        'spam',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function target(): BelongsTo
    {
        return $this->belongsTo(Content::class);
    }

    public function parent(): BelongsTo
    {
        return $this->belongsTo(Comment::class);
    }

    public function replies(): HasMany
    {
        return $this->hasMany(Comment::class, 'comment_id')->with('replies');
    }

    public function getContent(): Content
    {
        return Content::find($this->content_id);
    }
}
