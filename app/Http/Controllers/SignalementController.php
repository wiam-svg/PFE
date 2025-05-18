<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use App\Models\Commentaire;
use App\Models\Intervention;
use App\Models\Notification;
use App\Models\Signalement;
use App\Models\Vote;
use Illuminate\Support\Facades\Auth;
use App\Helpers\GeoHelper;
use App\Models\User;
// use Illuminate\Container\Attributes\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
// use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SignalementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // public function index()
    // {

    //     $signalements = Signalement::with(['commentaire.user','votes' => function ($query) {
    //         $query->where('user_id', Auth::id());
    //     }])->get();

    //     return Inertia::render('Signalements/ListSignalements', [
    //         'signalements' => $signalements,
    //         'auth' => [
    //             'user' => Auth::user(),
    //         ],
    //     ]);
    // }
    public function index_api()
    {
        // Récupérer tous les signalements avec latitude et longitude
        $signalements = Signalement::with(['categorie', 'user'])->get();
        $categories = Categorie::all();
        $user = auth::user();

        // Retourner la vue avec les signalements
        return Inertia::render('Signalements/Index', [
            'signalements' => $signalements,
            'categories' => $categories,
            'user' => $user
        ]);
    }


    public function index()
    {
        $userId = auth()->id();
        // dd($userId);

        $signalements = Signalement::with(['commentaire.user', 'votes', 'user'])
            ->orderBy('created_at', 'desc')
            ->get();
        // ->map(function ($s) use ($userId) {
        //     $s->is_owner = $s->user_id === $userId;
        //     return $s;
        // });


        $comments = Commentaire::with('user')
            ->orderBy('created_at', 'desc')
            ->get();


        return Inertia::render('Signalements/ListSignalements', [
            'signalements' => $signalements,
            'commentes' => $comments,
            'Usere_id' => $userId
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Categorie::all();
        return Inertia::render('Signalements/createSignalement', [
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    // public function store(Request $request)
    // {
    //     $validated = $request->validate([
    //         'titre' => 'required|string|max:255',
    //         'description' => 'required|string',
    //         'image' => 'nullable|image|max:2048',
    //         'ville' => 'required|string',
    //         'adresse' => 'required|string',
    //         'categorie_id' => 'required|exists:categories,id',
    //     ]);

    //     // Upload de l'image si elle existe
    //     if ($request->hasFile('image')) {
    //         $validated['image'] = $request->file('image')->store('signalements_test', 'public');
    //     }

    //     // Ajout des champs automatiques
    //     $validated['statut'] = 'en attente';
    //     $validated['dateCreation'] = now();
    //     $validated['user_id'] = auth()->id();

    //     // Création du signalement
    //     $signalement=Signalement::create($validated);
    //     Notification::create([
    //         'user_id' => 1,  // ou boucle sur tous les admins
    //         'type' => 'nouveau_signalement',
    //         'titre' => 'Nouveau Signalement',
    //         'message' => 'Un nouveau signalement a été ajouté : "' . $signalement->description . '"',
    //         'lien' => route('messignalements.auth', $signalement->id),
    //         'reference_id' => $signalement->id,
    //         'reference_type' => 'Signalement',
    //         'notifiable_id' => $signalement->id,
    //         'notifiable_type' => 'Signalement',
    //     ]);
    //     // dd($validated);


    //     // Redirection
    //     return redirect()->route('signalements.index');

    // }


    // /**
    //  * Display the specified resource.
    //  */
    public function show(Signalement $signalement)
    {
        $signalement->load('commentaires.user', 'votes');
        return Inertia::render('Signalements/Show', [
            'signalement' => $signalement,
        ]);
    }

    // /**
    //  * Show the form for editing the specified resource.
    //  */
    public function edit($id)
    {
        //  Récupérer le signalement avec ses relations
        $signalement = Signalement::with('votes', 'commentaire')->findOrFail($id);
        $categories = Categorie::all();
        return Inertia::render('Signalements/EditSignalement', [
            'signalement' => $signalement,
            'categories' => $categories,
        ]);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'titre' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|max:2048',
            'ville' => 'required|string',
            'adresse' => 'required|string',
            'categorie_id' => 'required|exists:categories,id',
        ]);

        // Upload de l'image si elle existe
        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('signalements_test', 'public');
        }

        // Ajout des champs automatiques
        $validated['statut'] = 'en attente';
        $validated['dateCreation'] = now();
        $validated['user_id'] = auth()->id();


        $fullAddress = $validated['adresse'] . ', ' . $validated['ville'] . ', Maroc';
        $coords = \App\Helpers\GeoHelper::getCoordinates($fullAddress, env('GEOAPIFY_API_KEY'));

        if ($coords) {
            $validated['longitude'] = $coords[0];
            $validated['latitude'] = $coords[1];
        } else {
            $validated['longitude'] = null;
            $validated['latitude'] = null;
        }


        // Création du signalement AVEC latitude et longitude
        $signalement = Signalement::create($validated);
        // dd($coords);


        Notification::create([
            'user_id' => 1,  // ou boucle sur tous les admins
            'type' => 'nouveau_signalement',
            'titre' => 'Nouveau Signalement',
            'message' => 'Un nouveau signalement a été ajouté : "' . $signalement->description . '"',
            'lien' => route('signalements.index', $signalement->id),
            'reference_id' => $signalement->id,
            'reference_type' => 'Signalement',
            'notifiable_id' => $signalement->id,
            'notifiable_type' => 'Signalement',
        ]);

        // Redirection
        return redirect()->route('signalements.index');
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // dd($request->all());
        $signalement = Signalement::findOrFail($id);
        // Vérifie si l'utilisateur est bien le créateur
        // if ($signalement->user_id !== auth()->id()) {
        //     abort(403);
        // }

        // Valide les champs sauf 'statut' (si tu ne veux pas le modifier)
        $request->validate([
            'titre' => '|string|max:255',
            'description' => '|string',
            'ville' => '|string',
            'adresse' => '|string',
            'categorie_id' => '|exists:categories,id',
            // 'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        $signalement->titre = $request->titre;
        $signalement->description = $request->description;
        $signalement->ville = $request->ville;
        $signalement->adresse = $request->adresse;
        $signalement->categorie_id = $request->categorie_id;

        // Gestion de l'image si elle a été mise à jour
        if ($request->hasFile('image')) {
            if ($signalement->image) {
                Storage::delete(str_replace('/storage/', '', $signalement->image));
            }
            // Supprime l'ancienne image
            // Enregistre la nouvelle image
            $imagePath = $request->file('image')->store('signalements', 'public');
            $signalement->image = $imagePath;
        }


        $signalement->update();
        return redirect()->route('signalements.index');
    }


    public function toggleUrgent(Request $request, $signalementId)
    {
        // dd($signalementId);

        $signalement = Signalement::find($signalementId);

        // Vérifier si le signalement existe
        if (!$signalement) {
            return response()->json(['message' => 'Signalement not found'], 404);
        }

        // Récupérer l'utilisateur actuellement authentifié
        $user = auth()->user();

        // Vérifier si l'utilisateur a déjà voté sur ce signalement (si c'est un vote pour urgent)
        $vote = Vote::where('user_id', $user->id)->where('signalement_id', $signalementId)->first();

        if ($vote) {
            // Inverser l'état de l'urgence (type : true pour urgent, false pour non urgent)
            $vote->type = !$vote->type;  // Si c'est urgent, ça deviendra non urgent et vice versa
            $vote->update();
        } else {
            // Si aucun vote n'existe pour ce signalement, en créer un
            $vote = Vote::create(
                [
                    'user_id' => $user->id,
                    'signalement_id' => $signalementId,
                    'type' => true, // Par défaut, on marque ce signalement comme urgent
                ],

            );
        }

        $signalement = Signalement::findOrFail($request->signalement_id);
        if ($vote->type == 1) {
            $userDuSignalement = $signalement->user;
            //  dd($userDuSignalement);

            if ($userDuSignalement) {
                Notification::create([
                    'user_id' => $userDuSignalement->id,  // L'utilisateur qui a posté le signalement
                    'type' => 'urgent_signalement',
                    'titre' => 'Signalement Urgent',
                    'message' => 'Votre signalement "' . $signalement->description . '" a été marqué comme urgent par un utilisateur.',
                    'lien' => route('messignalements.auth', $signalement->id),  // Le lien vers le signalement
                    'reference_id' => $signalement->id,
                    'reference_type' => 'Signalement',
                    'notifiable_id' => $signalement->id,
                    'notifiable_type' => 'Signalement',
                ]);
            }
        }
    }


    public function destroy($id)
    {
        $signalement = Signalement::find($id);
        $signalementId = $signalement->id;
        $signalementDescription =  $signalement->description;

        if ($signalement->image) {
            Storage::delete(str_replace('/storage/', '', $signalement->image));
        }
        DB::statement("SET @deleted_by = " . auth()->id());
        $user = $signalement->user;
        $signalement->delete($id);
        if ($user) {
            Notification::create([
                'user_id' => $user->id,
                'type' => 'suppression_signalement',
                'titre' => 'Signalement Supprimé',
                'message' => 'Votre signalement "' .  $signalementDescription . '" a été supprimé par l\'administrateur.',
                'lien' => route('messignalements.auth'),  // Lien vers la liste des signalements ou une autre page
                'reference_id' =>  $signalementId,  // ID du signalement supprimé
                'reference_type' => 'Signalement',  // Type de la référence
                'notifiable_id' =>  $signalementId,  // ID du signalement
                'notifiable_type' => 'Signalement',  // Type de la référence
            ]);
            return redirect()->back()->with('success', 'Le signalement a été supprimé.');
        }
    }
    public function destroy_user($id)
    {
        $signalement = Signalement::find($id);
        // dd($signalement->id);
        $signalementId = $signalement->id;
        $signalementDescription =  $signalement->description;
        // if ($signalement->status !== 'en attente') {
        //     return redirect()->back()->with('error', 'Vous ne pouvez supprimer qu’un signalement en attente.');
        // }

        if ($signalement->image) {
            Storage::delete(str_replace('/storage/', '', $signalement->image));
        }
        DB::statement("SET @deleted_by =" . auth()->id());
        $signalement->delete($id);
        $admin = User::where('role', 'admin')->first();
        if ($admin) {
            Notification::create([
                'user_id' => $admin->id,
                'type' => 'suppression_signalement',
                'titre' => 'Signalement Supprimé',
                'message' => 'Un utilisateur a supprimé le signalement : "' .  $signalementDescription . '".',
                'lien' => route('archives.index'),
                'reference_id' =>  $signalementId,  // ID du signalement supprimé
                'reference_type' => 'Signalement',  // Type de la référence
                'notifiable_id' =>  $signalementId,  // ID du signalement
                'notifiable_type' => 'Signalement',  // Type de la référence
            ]);
        }
        return redirect()->back()->with('success', 'Le signalement a été supprimé.');
    }




    public function mesSignalements()
    {

        if (Auth::user()->role !== 'agent_municipal') {

            abort(403,);
        }


        $signalements = Intervention::where('user_id', Auth::id())
            ->where('resolution_status', 'en cours')
            ->with('user', 'signalement.categorie')->get();

        return Inertia::render('Agent_municipal/MesSignalements', [
            'signalements' => $signalements,
        ]);
    }
    public function validerSolution($id)
    {
        $signalement = Signalement::findOrFail($id);
        $signalement->statut = 'résolu';
        $signalement->save();

        return redirect()->route('admin.signalements')->with('success', 'Signalement résolu.');
    }
    public function showDetails($id)
    {
        // Récupérer le signalement avec ses détails (y compris les interventions)
        $signalement = Signalement::with('interventions', 'categorie', 'user')->findOrFail($id);
        // dd($signalement);

        // Retourner la vue Inertia avec les données nécessaires
        return Inertia::render('Agent_municipal/SignalementDetails', [
            'signalement' => $signalement,
        ]);
    }
   
    public function SignalementDetails($id)
    {
        $signalement = Signalement::with(['commentaire.user', 'votes', 'interventions', 'Categorie'])->findOrFail($id);
        $votesCount = $signalement->votes->count();

        return Inertia::render('Signalements/SignalementDetails', [
            'signalement' => $signalement,
            'votesCount' => $votesCount,
        ]);
    }
    public function mesSignalementsAuth()
    {
        $user = auth()->user();

        $signalements = Signalement::with(['Categorie', 'votes', 'commentaire.user'])
            ->where('user_id', $user->id)
            ->get();
        $categories = Categorie::all();

        return Inertia::render('Signalements/MesSignalements_auth', [
            'signalements' => $signalements,
            'User_id' => $user,


        ]);
    }
    public function getDetails_signalement($id)
    {
        $signalement = Signalement::with([
            'categorie',
            'user',
            'commentaire.user',
            'votes',

        ])->findOrFail($id);

        return Inertia::render('Admin/GetDetail', [
            'signalement' => $signalement,



        ]);
    }
}
