<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Laravel\Socialite\Facades\Socialite;

class SocialController extends Controller
{

    public function connect(string $service): RedirectResponse
    {
        return Socialite::driver($service)->redirect();
    }

    public function callback(string $service)
    {
        $user = Socialite::driver($service)->user();
        $this->registerOrLogin($user, $service);
    }

    protected function registerOrLogin($incomingUser, string $service): RedirectResponse
    {
        $method = $service . '_id';

        $user = Auth::user();

        if ($user) {
            $user->$method = $incomingUser->id;
            $user->save();
            Auth::login($user);
            return Redirect::route('profile.index')->with('status', 'oauth-link');
        }

        $user = User::where($method, $incomingUser->id)->first();

        if (!$user) {
            $user = new User();
            $user->username = $incomingUser->name;
            $user->email = $incomingUser->email;
            $user->status = 1;
            $user->$method = $incomingUser->id;
            $user->password = encrypt('password');
            $user->save();
        }

        Auth::login($user);

        return redirect()->route('home');
    }

    public function link(string $service): RedirectResponse
    {
        $user = Socialite::driver($service)->user();
        $this->registerOrLogin($user, $service);
        return redirect()->route('home');
    }

    public function unlink(string $service): RedirectResponse
    {
        $method = $service . '_id';

        $user = Auth::user();
        $user->$method = null;
        $user->save();
        Auth::login($user);

        return Redirect::route('profile.index')->with('status', 'oauth-unlink');
    }
}
