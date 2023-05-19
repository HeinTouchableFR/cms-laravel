<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->resource->id,
            'content' => $this->resource->content,
            'created_at' => $this->resource->created_at->timestamp,
            'parent' => $this->resource->comment_id ?: 0,
            'avatar' => '/images/default.png',
            'user_id' => $this->resource->user_id,
            'author' => $this->resource->user,
            'username' => $this->resource->username ?: $this->resource->user->username,
            'email' => $this->resource->email ?: $this->resource->user->email,
        ];
    }
}
