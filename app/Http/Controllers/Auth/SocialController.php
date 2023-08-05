<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
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
        return redirect()->route('home');
    }

    protected function registerOrLogin($incomingUser, string $service)
    {
        $method = $service . '_id';
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
    }
}
