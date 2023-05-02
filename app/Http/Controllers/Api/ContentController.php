<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ContentResource;
use App\Models\Content;
use Illuminate\Http\Request;

class ContentController extends Controller
{
    public function index (): \Illuminate\Http\Resources\Json\AnonymousResourceCollection
    {
        return ContentResource::collection(Content::whereIn('type', ['blog', 'page'])->get());
    }
}
