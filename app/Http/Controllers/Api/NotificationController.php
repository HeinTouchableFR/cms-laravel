<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\NotificationResource;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    public function index(\App\Http\Requests\ContactRequest $request): \Illuminate\Http\Resources\Json\AnonymousResourceCollection
    {
        return NotificationResource::collection(Auth::user()->notifications->take($request->get('count')));
    }

    public function readAll()
    {
        Auth::user()->notifications->markAsRead();
        Auth::user()->update([
            'notifications_read_at' => now(),
        ]);

        return request()->json([], 204);
    }
}
