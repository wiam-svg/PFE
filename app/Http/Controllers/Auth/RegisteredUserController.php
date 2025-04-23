<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Signalement;
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
    public function index()
{

    $users = User::all();

    
    return Inertia::render('Admin/ListUsers', [
        'users' => $users
    ]);
    
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
                Rule::in(['citoyen', 'etudiant', 'agent_municipal', 'entreprise',]) 
            ],
        'nomEntreprise' => 'required_if:type,entreprise|nullable|string|max:255',
        'ice' => [
            'required_if:type,entreprise',
            'nullable',
            'string',
            'size:15',
        ],
        'cin' => [
            'required_if:type,citoyen',
            'nullable',
            'string',
            'regex:/^[A-Z]{2}[0-9]{6}$/',
            'unique:users,cin',
        ],
    
        'cne' => [
            'required_if:type,etudiant',
            'nullable',
            'string',
            'regex:/^[0-9]{10}$/',
            'unique:users,cne',
        ],
    
        'matricule' => [
            'required_if:type,agent municipal',
            'nullable',
            'string',
            'regex:/^AGT-[0-9]{4}$/',
            'unique:users,matricule',
        ],
    ]);
    

   
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
            'cin' => $request->cin,
            'cne' => $request->cne,
             'matricule' => $request->matricule,
 ]);
return redirect()->route('login')->with('success', 'Inscription réussie !');
        // dd($user);
        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard'));
    }

    public function create(){

        return Inertia::render('Auth/Register');
    }

    



    public function validateUser($id)
{
    $user = User::findOrFail($id);

    $user->validated = !$user->validated;

    if($user->validated){
        $user->role = $user->type;
    }
    else{
        $user->role ='user';

    }
     $user->update();

}
    public function dashboard()
    {
       $user = auth()->user(); // L'utilisateur connecté
       $notifications = $user->notifications; // Récupérer toutes les notifications de l'utilisateur

        return inertia('Agent_municipal/Dashboard', [
             'notifications' => $notifications, // Passer les notifications à la vue React
    ]);
    }
    public function destoryUser($id){
        $user = User::findOrFail($id);
        $user->delete();
    
        return redirect()->back()->with('success', 'Utilisateur supprimé avec succès.');
    }

}