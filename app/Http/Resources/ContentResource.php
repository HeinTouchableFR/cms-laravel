<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ContentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'label' => $this->resource->title,
            'type' => $this->resource->type,
            'path' => $this->resource->type.'.show',
            'slug' => $this->resource->slug,
        ];
    }
}
