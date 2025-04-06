<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        // dd($request->all());
        
                $request->validate([
            
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'adresse' => 'required|string|max:255',
            'ville'=>'required|string|max:10',
            'telephone' => 'required|string|max:9999999999',
            'postal_code'=>'required|integer|max:99999',
            'accept_terms'=>'required',
            
        ]);
        // dd($errors);
      
        // $user=User::create(
        //     $request->all()
        // );

        $user=User::create([
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'adresse' => $request->adresse,
            'ville'=>$request->ville,
            'telephone' => $request->telephone,
            'postal_code'=>$request->postal_code,
            'accept_terms'=>$request->accept_terms,

            
        ]);
return redirect()->route('login')->with('success', 'Inscription réussie !');
        dd($user);
        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard'));
    }
}
