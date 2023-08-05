<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Http\Resources\NotificationResource;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\View\View;

class ProfileController extends Controller
{
    /**
     * Display the user's profile.
     */
    public function index(Request $request): View
    {
        $comments = Auth::user()->comments()->orderBy('created_at', 'desc')->get();
        $hasActivity = count($comments) > 0;

        $notifications = NotificationResource::collection(Auth::user()->notifications)->toArray($request);

        return view('profile.index', [
            'user' => $request->user(),
            'hasActivity' => $hasActivity,
            'notifications' => $notifications,
            'comments' => $comments,
            'menu' => route('profile.index'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()?->fill($request->validated());

        if ($request->user()?->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()?->save();

        return Redirect::route('profile.index')->with('status', 'profile-updated');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validateWithBag('userDeletion', [
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user?->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    public function cleanNotification(): RedirectResponse
    {
        Auth::user()->notifications()->delete();

        return Redirect::route('profile.index')->with('success', 'Notifications supprimées avec succès');
    }
}
