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
use Illuminate\Validation\Rule; 
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
            'age' => 'required|integer|min:1|max:120',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6|confirmed',
            'adresse' => 'required|string|max:255',
            'ville' => 'required|string|max:100',
            'telephone' => 'required|string|max:20',
            'type' => [
                'required', 
                Rule::in(['particulier', 'professionnel']) // Utilisation correcte
            ],
        'nomEntreprise' => 'required_if:type,professionnel|nullable|string|max:255',
        'ice' => [
            'required_if:type,professionnel',
            'nullable',
            'string',
            'size:15',
            // 'regex:/^[0-9]{15}$/',
          
        ],
    ]);

            

        // dd($errors);
      
        // $user=User::create(
        //     $request->all()
        // );

        $user=User::create([
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'age'=>$request->age,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'adresse' => $request->adresse,
            'ville'=>$request->ville,
            'telephone' => $request->telephone,
            'type'=> $request->type,
            'nomEntreprise'=>$request->nomEntreprise,
            'ice'=>$request->ice,
            'role'=>$request->role,
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
