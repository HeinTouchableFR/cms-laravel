<?php

namespace App\Http\Controllers\Api;

use App\Exceptions\TooManyContactException;
use App\Http\Controllers\Controller;
use App\Mail\ContactMail;
use App\Models\ContactRequest;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    /**
     * @throws TooManyContactException
     */
    public function index(\App\Http\Requests\ContactRequest $request): \Illuminate\Http\JsonResponse
    {
        try {
            $this->send($request);
        } catch (TooManyContactException) {
            return response()->json([
                'title' => 'Vous avez fait trop de demandes de contact consécutives.',
            ], 401);
        }

        return response()->json([], 204);
    }

    public function send(\App\Http\Requests\ContactRequest $request): void
    {
        $contactRequest = (new ContactRequest())->setRawIp($request->ip());
        $lastRequest = ContactRequest::where('ip', $contactRequest->ip)->first();
        if ($lastRequest && $lastRequest->created_at > Carbon::now()->subHour()) {
            throw new TooManyContactException();
        }

        if (null !== $lastRequest) {
            $lastRequest->created_at = now();
            $lastRequest->save();
        } else {
            $contactRequest->save();
        }

        Mail::queue(new ContactMail($request->validated()));
    }
}
