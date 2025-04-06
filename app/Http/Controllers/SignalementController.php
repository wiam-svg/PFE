<?php

namespace App\Http\Controllers;

use App\Models\Signalement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SignalementController extends Controller
{
    /**
     * Affiche la liste des signalements.
     */
    public function index()
    {
        $signalements = Signalement::latest()->paginate(10);

    }

    /**
     * Stocke un nouveau signalement.
     */
    public function store(Request $request)
    {
        $request->validate([
            'titre' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'statut' => 'nullable|in:en attente,en cours,résolu',
            'ville' => 'required|string|max:255',
            'adresse' => 'nullable|string|max:255',
            'categorie' => 'nullable|string|max:255',
        ]);

        $signalement = new Signalement([
            'user_id' => Auth::id(),
            'titre' => $request->titre,
            'description' => $request->description,
            'statut' => $request->statut ?? 'en attente',
            'ville' => $request->ville,
            'adresse' => $request->adresse,
            'categorie' => $request->categorie
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('signalements', 'public');
            $signalement->image = $path;
        }

        $signalement->save();

    }

    /**
     * Affiche un signalement spécifique.
     */
    public function show(Signalement $signalement)
    {
        return response()->json($signalement);
    }

    /**
     * Met à jour un signalement.
     */
    public function update(Request $request, Signalement $signalement)
    {
        $request->validate([
            'titre' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'statut' => 'sometimes|in:en attente,en cours,résolu',
            'ville' => 'sometimes|string|max:255',
            'adresse' => 'sometimes|string|max:255',
            'categorie' => 'sometimes|string|max:255',
        ]);

        $signalement->update($request->all());

    }

    /**
     * Supprime un signalement.
     */
    public function destroy(Signalement $signalement)
    {
        $signalement->delete();
        }
}
