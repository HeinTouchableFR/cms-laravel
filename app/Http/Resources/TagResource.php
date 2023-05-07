<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TagResource extends JsonResource
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
            'position' => $this->resource->position,
            'name' => $this->resource->name,
            'url' => route('admin.tag.edit', $this->resource->id),
            'children' => TagResource::collection($this->resource->children->sortBy('position')),
        ];
    }
}
