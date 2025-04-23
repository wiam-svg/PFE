<?php

namespace App\Http\Controllers;

use App\Models\Intervention;
use App\Models\Notification;
use App\Models\Signalement;
use App\Models\User;
use App\Notifications\SignalementAssigned;
// use Illuminate\Container\Attributes\Auth;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use Inertia\Inertia;
use IntlChar;

class InterventionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $interventions = Intervention::with(['signalement', 'user'])->get();
        return Inertia::render('Admin/Assignements', [
            'interventions' => $interventions
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Intervention $intervention)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $intervention = Intervention::with('user', 'signalement')->findOrFail($id);
        $agents = User::where('role', 'agent_municipal')->get();
        $signalements = Signalement::all();
    
        return Inertia::render('Admin/EditAssignement', [
            'intervention' => $intervention,
            'agents' => $agents,
            'signalements' => $signalements,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Intervention $intervention,$id)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'signalement_id' => 'required|exists:signalements,id',
           
        ]);
        $intervention = Intervention::findOrFail($id);

    
        
        $intervention->user_id = $request->user_id;
        $intervention->signalement_id = $request->signalement_id;
        $intervention->save();
        
    
        return redirect()->route('admin.assignements')->with('success', 'Assignement mis à jour.');
        // return Inertia::render('Admin/Assignements');
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $intervention = Intervention::findOrFail($id);
        if (!$intervention) {
            return back()->with('error', 'Intervention introuvable.');
        }
        $signalementId = $intervention->signalement_id;
        $intervention->delete();
        $signalement = Signalement::find($signalementId);
        if ($signalement) {
            $signalement->statut = 'en attente';
            $signalement->save();
        }
        
    
        return redirect()->back()->with('success', 'Assignement supprimé avec succès.');
    }
    public function assignAgent(Request $request)
{
    
    $request->validate([
        'signalement_id' => 'required|exists:signalements,id',
        'agent_id' => 'required|exists:users,id',
    ]);

    $findsignalement=Intervention::where('signalement_id',$request->signalement_id)->first();
   

    if( $findsignalement){
        $findsignalement->delete();

   

    }
    
    $intervention = Intervention::create([
        'user_id' => $request->agent_id,
        'signalement_id' => $request->signalement_id,
        'description_action' => $request->description_action,
        'dateDebut' => now(), // Utilisation de la date actuelle
        'dateFin' => $request->dateFin, // Date de fin fournie par l'utilisateur
        'solution_photo' => $request->solution_photo, // Optionnel
        'resolution_status' => 'en cours', // Par défaut
    ]);
    $signalement = Signalement::find($request->signalement_id);
    $signalement->statut = 'en cours';
    $signalement->save();

    // $agent = User::find($request->agent_id);
    // $agent->notify(new SignalementAssigned($signalement));
    //  // Créer la notification
    // $agent = User::find($request->agent_id); // Récupère l'agent
    // $notification = new Notification([
    //     'user_id' => $agent->id, // Utilisateur qui va recevoir la notification
    //     'type' => 'App\Notifications\SignalementAssigned',
    //     'titre' => 'Vous avez été affecté à un signalement',
    //     'message' => 'Vous devez intervenir sur le signalement "' . $signalement->description . '"',
    //     'lien' => route('signalement.show', ['id' => $signalement->id]), // lien vers le signalement
    //     'reference_id' => $signalement->id, // référence au signalement
    //     'reference_type' => 'Signalement', // type de référence
    // ]);

    // // Sauvegarde de la notification
    // $notification->save();
    

    // Retourner une réponse
    if ($intervention) {


        return back()->with('success', 'Agent affecté et intervention enregistrée');
    }
    return back()->with('error', 'Erreur lors de l\'enregistrement de l\'intervention');
    
}
public function showSignalements()
{
    $signalements = Signalement::with('categorie')->where('statut', 'en attente')->get();
    $agents = User::with('interventions')
    ->withCount('signalements') 
    ->where('role', 'agent_municipal')
    ->get();
           
            

    return Inertia::render('Admin/Signalements_enattente', [
        'signalements' => $signalements,
        'agents' => $agents,
    ]);
    // dd($agents);
}
public function editStatut($id)
{
    $intervention = Intervention::with('signalement.categorie')
        ->where('id', $id)
        ->where('user_id', Auth::id()) 
        ->firstOrFail();

    return Inertia::render('Agent_municipal/EditStatutIntervention', [
        'intervention' => $intervention,
    ]);
}
public function updateStatut(Request $request, $id)
{
  
    $intervention = Intervention::where('id', $id)
        ->where('user_id', Auth::id())
        ->firstOrFail();

    $request->validate([
        'description_action' => 'required|string',
        'dateDebut' => 'required|date',
        'dateFin' => 'nullable|date|after_or_equal:dateDebut',
        'solution_photo' => 'nullable|image|max:2048',
    ]);

    if ($request->hasFile('solution_photo')) {
        $path = $request->file('solution_photo')->store('solutions', 'public');
        $intervention->solution_photo = $path;
    }

    $intervention->description_action = $request->description_action;
    $intervention->dateDebut = $request->dateDebut;
    $intervention->dateFin = $request->dateFin;
    $intervention->resolution_status = 'termine';
    $intervention->save();
    // dd($intervention);

    // Mettre à jour le statut du signalement
   

    return redirect()->route('signalements.mes')->with('success', 'Intervention marquée comme terminée.');
}
public function interventionsTerminees()
{
    $interventions = Intervention::with('signalement', 'user')
        ->where('resolution_status', 'termine')
        ->whereNull('validation_admin')
        ->get();

    return Inertia::render('Admin/InterventionsTerminees', [
        'interventions' => $interventions,
    ]);
}
public function valider($id)
{
    $intervention = Intervention::findOrFail($id);
    $intervention->validation_admin = true;
    $intervention->resolution_status='freme';
    $intervention->save();

    // Mettre à jour le signalement
    $intervention->signalement->statut = 'résolu';
    $intervention->signalement->save();

    return back()->with('success', 'Intervention validée');
}

public function rejeter(Request $request ,$id)
{
    $intervention = Intervention::findOrFail($id);
    $intervention->validation_admin = false;
    $intervention->commentaire_admin = $request->commentaire_admin;
    $intervention->save();

    return back()->with('error', 'Intervention rejetée');
}
public function showDetail_I_Atermine($id)
{
    $intervention = Intervention::with(['signalement', 'user'])->findOrFail($id);
    return Inertia::render('Admin/Detail_Interv_Atermine', [
        'signalement' => $intervention->signalement,
        'intervention' => $intervention
    ]);
}







}

