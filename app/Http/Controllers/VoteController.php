<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use App\Models\Signalement; 
use App\Models\Vote; 
use Illuminate\Support\Facades\Auth; // Importe la façade Auth pour accéder aux informations de l'utilisateur authentifié.
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse; // Importe la classe JsonResponse pour retourner des réponses JSON à l'API.

class VoteController extends Controller
{
    /**
     * Marque un signalement comme urgent pour l'utilisateur authentifié.
     *
     * @param  \Illuminate\Http\Request  $request La requête HTTP.
     * @param  \App\Models\Signalement  $signalement L'objet Signalement sur lequel l'utilisateur vote. (Grâce au route model binding).
     * @return \Illuminate\Http\JsonResponse Retourne une réponse JSON indiquant le résultat de l'opération.
     */
    public function markAsUrgent(Request $request, Signalement $signalement): JsonResponse
    {
        
        // Vérifie si l'utilisateur connecté (Auth::id()) a déjà un vote d'urgence (où 'type' est true) pour ce signalement spécifique ($signalement->id)
        
        
        
        
        

        $existingUrgentVote = Vote::where('user_id', Auth::id())
            ->where('signalement_id', $signalement->id)
            ->where('type', true)
            ->first(); 

        if (!$existingUrgentVote) {
        
            Vote::create([
                'user_id' => Auth::id(), 
                'signalement_id' => $signalement->id, 
                'type' => true,
            ]);
            

            return response()->json(['message' => 'Signalement marqué comme urgent.'], 201);
        }

        // Si un vote d'urgence existe déjà, on retourne un message informant l'utilisateur.
        return response()->json(['message' => 'Vous avez déjà marqué ce signalement comme urgent.'], 200);
    }

    /**
     * 
     *
     * @param  \App\Models\Signalement  $signalement L'objet Signalement dont on annule le vote d'urgence.
     * @return \Illuminate\Http\JsonResponse Retourne une réponse JSON indiquant le résultat de l'opération.
     */
    public function unmarkAsUrgent(Signalement $signalement): JsonResponse
    {
    
        $urgentVote = Vote::where('user_id', Auth::id())
            ->where('signalement_id', $signalement->id)
            ->where('type', true)
            ->first();

        if ($urgentVote) {

            $urgentVote->delete();
            return response()->json(['message' => 'Vote d\'urgence annulé.'], 200); 
        }


        return response()->json(['message' => 'Vous n\'aviez pas marqué ce signalement comme urgent.'], 200);
    }

    /**
     * Enregistre un nouveau vote pour un signalement (avec un type spécifié).
     *
     * @param  \Illuminate\Http\Request  $request Les données de la requête, incluant le 'type' du vote.
     * @param  \App\Models\Signalement  $signalement Le Signalement sur lequel l'utilisateur vote.
     * @return \Illuminate\Http\JsonResponse Retourne une réponse JSON indiquant le résultat de l'enregistrement.
     */
    public function store(Request $request, Signalement $signalement): JsonResponse
    {
        
        $request->validate([
            'type' => 'required|boolean',
        ]);

        
        $existingVote = Vote::where('user_id', Auth::id())
            ->where('signalement_id', $signalement->id)
            ->first();

        if ($existingVote) {
           
            $existingVote->update(['type' => $request->type]);
            return response()->json(['message' => 'Votre vote a été mis à jour.'], 200);
        } else {
            
            Vote::create([
                'user_id' => Auth::id(),
                'signalement_id' => $signalement->id,
                'type' => $request->type,
            ]);
            $userDuSignalement = $signalement->user;
         dd($userDuSignalement);

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
                ]);}
            return response()->json(['message' => 'Votre vote a été enregistré.'], 201);
        }
    }

    /**
     * Supprime le vote de l'utilisateur authentifié pour un signalement donné (sans se soucier du type).
     *
     * @param  \App\Models\Signalement  $signalement Le Signalement dont on supprime le vote.
     * @return \Illuminate\Http\JsonResponse Retourne une réponse JSON indiquant le résultat de la suppression.
     */
    public function destroy(Signalement $signalement): JsonResponse
    {
      
        $vote = Vote::where('user_id', Auth::id())
            ->where('signalement_id', $signalement->id)
            ->first();

        if ($vote) {
           
            $vote->delete();
            return response()->json(['message' => 'Votre vote a été retiré.'], 200);
        }

        
        return response()->json(['message' => 'Vous n\'avez pas voté pour ce signalement.'], 200);
    }

    /**
     * Affiche une liste de tous les votes (pour l'administration par exemple).
     *
     * @return \Illuminate\Http\JsonResponse Retourne une liste de tous les votes au format JSON.
     */
    public function index(): JsonResponse
    {
        $votes = Vote::all(); 
        return response()->json($votes);
    }

    /**
     * Affiche les détails d'un vote spécifique.
     *
     * @param  \App\Models\Vote  $vote L'objet Vote à afficher (grâce au route model binding si utilisé dans une route).
     * @return \Illuminate\Http\JsonResponse Retourne les détails du vote au format JSON.
     */
    public function show(Vote $vote): JsonResponse
    {
        return response()->json($vote); // Retourne l'objet Vote au format JSON.
    }

    /**
     * Met à jour un vote spécifique dans la base de données.
     *
     * @param  \Illuminate\Http\Request  $request Les données de la requête pour la mise à jour.
     * @param  \App\Models\Vote  $vote L'objet Vote à mettre à jour.
     * @return \Illuminate\Http\JsonResponse Retourne une réponse JSON indiquant le succès de la mise à jour.
     */
    public function update(Request $request, Vote $vote): JsonResponse
    {
        $vote->update($request->all()); 
        return response()->json(['message' => 'Vote mis à jour.'], 200);
    }

    /**
     * Affiche le formulaire pour créer un nouveau vote (non utilisé pour l'API d'urgence).
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return abort(404); 
    }

    /**
     * Affiche le formulaire pour éditer un vote spécifique (non utilisé pour l'API d'urgence).
     *
     * @param  \App\Models\Vote  $vote L'objet Vote à éditer.
     * @return \Illuminate\Http\Response
     */
    public function edit(Vote $vote)
    {
        return abort(404); 
    }
}