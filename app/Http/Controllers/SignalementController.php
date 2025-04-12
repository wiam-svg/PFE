<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use App\Models\Signalement;
use App\Models\Vote;
use Illuminate\Support\Facades\Auth;
use Illuminate\Container\Attributes\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage as FacadesStorage;
use Inertia\Inertia;

class SignalementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $signalements = Signalement::with(['votes' => function ($query) {
            $query->where('user_id', Auth::id());
        }])->get();
    
        return Inertia::render('Signalements/ListSignalements', [
            'signalements' => $signalements,
            'auth' => [
                'user' => Auth::user(),
            ],
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
            // 'titre' => 'required|string|max:255',
            // 'description' => 'required|string',
            // // 'image' => 'required|string',
            // "image" =>'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            // 'statut' => 'required|in:en attente,en cours,résolu',
            // 'ville' => 'required|string',
            // 'adresse' => 'required|string',
            // 'categorie' => 'nullable|string',
            // 'dateCreation' => 'required|date',
            // 'user_id' => 'required|exists:users,id',
            // 'categorie_id' => 'required|exists:categories,id',

            'titre' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|max:2048',
            'ville' => 'required|string',
            'adresse' => 'required|string',
            'categorie_id' => 'required|exists:categories,id',
        ]);
        // $imagePath = $request->file('image')->store('signalement_images', 'public');
        // $imageUrl = Storage::url($imagePath);

        
    if ($request->hasFile('image')) {
        $validated['image'] = $request->file('image')->store('signalements', 'public');
    }

    $validated['statut'] = 'en attente';
    $validated['dateCreation'] = now();
    $validated['user_id'] = auth()->id();

        Signalement::create($validated);

        // return redirect()->route('signalements.index')->with('success', 'Signalement créé avec succès.');
        return redirect()->route('dashboard')->with('success', 'Signalement créé avec succès.');
        if ($categories->isEmpty()) {
            // Message ou gestion des catégories vides si besoin
            dd('Aucune catégorie disponible');
        }
    
    }

    /**
     * Display the specified resource.
     */
    public function show(Signalement $signalement)
    {
        return Inertia::render('Signalements/Show', [
            'signalement' => $signalement,
        ]);
       
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Signalement $signalement)
    {
        $categories = Categorie::all();
        return Inertia::render('Signalements/Edit', [
            'signalement' => $signalement,
            'categories' => $categories,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Signalement $signalement)
    {
        $validated = $request->validate([
            'titre' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|string',
            'statut' => 'required|in:en attente,en cours,résolu',
            'ville' => 'required|string',
            'adresse' => 'required|string',
            'categorie' => 'nullable|string',
            'dateCreation' => 'required|date',
            'user_id' => 'required|exists:users,id',
            'categorie_id' => 'required|exists:categories,id',
        ]);

        $signalement->update($validated);

        if ($request->hasFile('image')) {
            // Supprimer l'ancienne image (facultatif)
            Storage::delete(str_replace(Storage::url(''), '', $signalement->image));

            $imagePath = $request->file('image')->store('signalement_images', 'public');
            $updatedData['image'] = Storage::url($imagePath);
        }

        $signalement->update($updatedData);

        return redirect()->route('signalements.index')->with('success', 'Signalement mis à jour avec succès.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Signalement $signalement)
    {
         // Supprimer l'image associée
        Storage::delete(str_replace(Storage::url(''), '', $signalement->image));
        $signalement->delete();
        return redirect()->route('signalements.index')->with('success', 'Signalement supprimé avec succès.');
    
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




}

















 