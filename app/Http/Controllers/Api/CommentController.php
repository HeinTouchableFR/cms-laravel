<?php

namespace App\Http\Controllers\Api;

use App\Events\CommentCreatedEvent;
use App\Events\PreCommentCreatedEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\Api\CommentRequest;
use App\Http\Resources\CommentResource;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function index(Request $request): \Illuminate\Http\Resources\Json\AnonymousResourceCollection
    {
        return CommentResource::collection(Comment::where('content_id', $request->get('content'))->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CommentRequest $request): CommentResource
    {
        $comment = new Comment();
        $data = $request->validated();
        $comment->user_id = Auth::user()->id;
        $comment->content_id = $data['content_id'];
        $comment->comment_id = array_key_exists('comment_id', $data) ? $data['comment_id'] : null;
        $comment->content = $data['content'];
        event(new PreCommentCreatedEvent($comment));
        $comment->save();
        event(new CommentCreatedEvent($comment));

        return new CommentResource($comment);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Comment $comment): CommentResource
    {
        $comment->update([
            'content' => $request->input('content'),
        ]);

        return new CommentResource($comment);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment): \Illuminate\Http\JsonResponse
    {
        $comment->delete();

        return response()->json([], 204);
    }
}
