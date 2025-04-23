<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use App\Models\Commentaire;
use App\Models\Intervention;
use App\Models\Signalement;
use App\Models\Vote;
use Illuminate\Support\Facades\Auth;

// use Illuminate\Container\Attributes\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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
    public function index()
    {
        $userId = auth()->id();

        $signalements = Signalement::with(['commentaire.user', 'votes', 'user'])->get()->map(function ($s) use ($userId) {
            $s->is_owner = $s->user_id === $userId;
            return $s;
        });


        $comments = Commentaire::with('user')->get();


        return Inertia::render('Signalements/ListSignalements', [
            'signalements' => $signalements,
            'commentes'=>$comments
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

        // Création du signalement
        Signalement::create($validated);
        // dd($validated);

    
        // Redirection
        return redirect()->route('dashboard')->with('success', 'Signalement créé avec succès.');
    }


    /**
     * Display the specified resource.
     */
    public function show(Signalement $signalement)
    {
        $signalement->load('commentaires.user', 'votes');
        return Inertia::render('Signalements/Show', [
            'signalement' => $signalement,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
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


    public function toggleUrgent($signalementId)
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
            Vote::create([
                'user_id' => $user->id,
                'signalement_id' => $signalementId,
                'type' => true, // Par défaut, on marque ce signalement comme urgent
            ]);
        }
    }


    public function destroy($id)
    {
        $signalement = Signalement::find($id);
        $comments=Commentaire::where('signalement_id',$id)->get();
        foreach($comments as $comment){
            $comment->delete();
        }
        if ($signalement->image) {
            Storage::delete(str_replace('/storage/', '', $signalement->image));
        }
        $signalement->delete();

    }
    public function mesSignalements()
    {
    
        if (Auth::user()->role !== 'agent_municipal') {
            
            abort(403, );
        }


        $signalements = Intervention::where('user_id', Auth::id())->with('user','signalement.categorie')->get();

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
    $signalement = Signalement::with('interventions', 'categorie','user')->findOrFail($id);

    // Retourner la vue Inertia avec les données nécessaires
    return Inertia::render('Agent_municipal/SignalementDetails', [
        'signalement' => $signalement,
    ]);
}



}

