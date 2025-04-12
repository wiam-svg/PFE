<?php

namespace App\Http\Controllers;

use App\Models\Commentaire;
use App\Models\Signalement;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CommentaireController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Signalement $signalement)
    {
        $commentaires = $signalement->commentaires()->latest()->paginate(10);
        return Inertia::render('Commentaires/Index', [
            'signalement' => $signalement,
            'commentaires' => $commentaires,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Signalement $signalement)
    {
        return Inertia::render('Commentaires/Create', [
            'signalement' => $signalement,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Signalement $signalement)
    {
        $request->validate([
            'contenu' => 'required|string',
        ]);

        $signalement->commentaires()->create([
            'user_id' => auth()->id(), // Assurez-vous que l'utilisateur est authentifié
            'contenu' => $request->contenu,
        ]);

        return redirect()->route('signalements.show', $signalement->id)->with('success', 'Commentaire ajouté avec succès.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Commentaire $commentaire)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Commentaire $commentaire)
    {
        return Inertia::render('Commentaires/Edit', [
            'commentaire' => $commentaire,
            'signalement' => $commentaire->signalement, // Passer le signalement associé pour les liens/informations
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Commentaire $commentaire)
    {
        $request->validate([
            'contenu' => 'required|string',
        ]);

        $commentaire->update($request->all());

        return redirect()->route('signalements.show', $commentaire->signalement->id)->with('success', 'Commentaire mis à jour avec succès.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Commentaire $commentaire)
    {
        $signalementId = $commentaire->signalement->id;
        $commentaire->delete();
        return redirect()->route('signalements.show', $signalementId)->with('success', 'Commentaire supprimé avec succès.');
    }
}
