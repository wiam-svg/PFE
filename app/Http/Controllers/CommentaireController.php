<?php

namespace App\Http\Controllers;

use App\Models\Commentaire;
use App\Models\Notification;
use App\Models\Signalement;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CommentaireController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Signalement $signalement )
    {
        $commentaires =Commentaire::with('user')->where('signalement_id',$signalement->id)->latest()->paginate(10);
        // dd($commentaire);
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
        $data = $request->validate([
            'contenu' => 'required|string|max:1000',
        ]);

        // 2) Création du commentaire lié au signalement
        // $commentaire = $signalement->commentaires()->create([
        //     'user_id' => auth()->id(),
        //     'contenu' => $data['contenu'],
        // ]);
        $signalement = Signalement::findOrFail($request->signalement_id);
        $commentaire = new Commentaire();
        $commentaire->signalement_id = $request->signalement_id;
        $commentaire->user_id = auth()->id();
        $commentaire->contenu = $data['contenu'];
        $commentaire->save(); 
        // dd($commentaire);
        // return response()->json($commentaire);
        // dd($signalement);
        // $userDuSignalement = $signalement->user;
        $userDuSignalement = $signalement->user;
        // dd($userDuSignalement);

        if ($userDuSignalement) {
            $notification= Notification::create([
                'user_id' => $userDuSignalement->id,  
                'type' => 'nouveau_commentaire',  
                'titre' => 'Nouveau Commentaire', 
                'lien' => route('messignalements.auth', $signalement->id),  
                'message' => 'Un nouvel utilisateur a commenté votre signalement "' . $signalement->description . '".',
                'notifiable_type' => 'Commentaire', 
                'notifiable_id' => $signalement->id,  
                'reference_id' => $signalement->id,  
                'reference_type' => 'Commantaire',  
            ]);
        }
       dd($notification);
        return redirect()->route('messignalements.auth', $signalement->id)->with('success', 'Commentaire ajouté avec succès');
        
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
    public function update(Request $request, $id)
{
    $commentaire = Commentaire::findOrFail($id);
    if (trim($commentaire->contenu) !== trim($request->contenu)) {
        $commentaire->contenu = $request->contenu;
        $commentaire->edit = true; // force à true
        $commentaire->save();
    
    }
  
    return back();
}

    /**
     * Remove the specified resource from storage.
     */
    // public function destroy(Commentaire $commentaire)
    // {
    //     $signalementId = $commentaire->signalement->id;
    //     $commentaire->delete();
    //     return redirect()->route('signalements.show', $signalementId)->with('success', 'Commentaire supprimé avec succès.');
    // }
    public function destroy($id)
{
    $commentaire = Commentaire::findOrFail($id);

    // Vérifie que l'utilisateur est bien le propriétaire du commentaire
    // if ($commentaire->user_id !== auth()->id()) {
    //     abort(403);
    // }

    $commentaire->delete();

    return back()->with('success', 'Commentaire supprimé.');
}

}
