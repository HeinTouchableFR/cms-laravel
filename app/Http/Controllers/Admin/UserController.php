<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UserFormRequest;
use App\Models\User;
use \Illuminate\Contracts\View\View;
use \Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    function __construct()
    {
        $this->middleware('permission:user-list|user-create|user-edit|user-delete', ['only' => ['index', 'store']]);
        $this->middleware('permission:user-create', ['only' => ['create', 'store']]);
        $this->middleware('permission:user-edit', ['only' => ['edit', 'update']]);
        $this->middleware('permission:user-delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): View
    {
        return view('admin.users.index', [
            'users' => User::orderBy('created_at', 'desc')->paginate(20),
            'menu' => route('admin.user.index')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): View
    {
        $user = new User();

        return view('admin.users.form', [
            'user' => $user,
            'roles' => Role::all(),
            'userRoles' => [],
            'menu' => route('admin.user.index')
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserFormRequest $request): RedirectResponse
    {
        $user = new User();
        $user->fill($request->validated());
        if ($request->validated('new_password')) {
            $user->password = Hash::make($request->validated('new_password'));
        }
        $user->syncRoles($request->input('role'));
        $user->save();
        return to_route('admin.user.index')->with('success', 'Le contenu a bien été créé');
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user): View
    {
        $userRoles = DB::table("model_has_roles")->where("model_has_roles.model_type", 'App\Models\User')->where("model_has_roles.model_id", $user->id)
            ->pluck('model_has_roles.role_id', 'model_has_roles.role_id')
            ->all();

        return view('admin.users.form', [
            'user' => $user,
            'roles' => Role::all(),
            'userRoles' => $userRoles,
            'menu' => route('admin.user.index')
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserFormRequest $request, User $user): RedirectResponse
    {
        $user->update($request->validated());
        if ($request->validated('new_password')) {
            $user->password = Hash::make($request->validated('new_password'));
            $user->save();
        }
        $user->syncRoles($request->input('role'));
        return to_route('admin.user.index')->with('success', 'Le contenu a bien été modifié');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user): RedirectResponse
    {
        $user->delete();
        return to_route('admin.user.index')->with('success', 'Le contenu a bien été supprimé');
    }

    public function ban(User $user): RedirectResponse
    {
        $user->status = 0;
        $user->save();
        return to_route('admin.user.index')->with('success', 'L\'utilisateur à bien été banni !');
    }

    public function unban(User $user): RedirectResponse
    {
        $user->status = 1;
        $user->save();
        return to_route('admin.user.index')->with('success', 'L\'utilisateur à bien été débanni !');
    }

    public function confirm(User $user): RedirectResponse
    {
        $user->email_verified_at = now();
        $user->save();
        return to_route('admin.user.index')->with('success', 'L\'utilisateur à bien été confirmé !');
    }
}
