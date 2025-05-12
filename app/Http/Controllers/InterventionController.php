<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use App\Models\Intervention;
use App\Models\Notification;
use App\Models\Signalement;
use App\Models\User;
use App\Models\Vote;
use App\Notifications\SignalementAssigned;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Storage;
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
    public function historique()
    {
        $agentId = auth()->user()->id;


        $interventions = Intervention::with('signalement')
            ->where('user_id', $agentId)
            ->where('resolution_status', 'fermee')
            ->where('validation_admin', 1)
            ->orderBy('updated_at', 'desc')
            ->get();
        // dd($interventions);

        return Inertia::render('Agent_municipal/Historique', [
            'interventions' => $interventions,
        ]);
    }

    public function index()
    {
        $interventions = Intervention::with(['signalement.categorie', 'user'])->get();
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
    public function update(Request $request, Intervention $intervention, $id)
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

        $findsignalement = Intervention::where('signalement_id', $request->signalement_id)->first();


        if ($findsignalement) {
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

       




        Notification::create([
            'user_id' => $request->agent_id,  // l’agent assigné
            'type' => 'assignement',
            'titre' => 'Nouvelle Intervention',
            'message' => 'Vous avez été assigné au eintervention: "' . $signalement->description . '"',
            'lien' => route('signalements.mes', $intervention->id),
            'reference_id' => $signalement->id,
            'reference_type' => 'intervention',
            'notifiable_id' => $signalement->id,
            'notifiable_type' => 'Signalement',
        ]);
        // Notification pour le citoyen
        Notification::create([
            'user_id' => $signalement->user_id,
            'type' => 'update_signalement',
            'titre' => 'Mise à jour du Signalement',
            'message' => 'Votre signalement "' . $signalement->description . '" est maintenant en cours de traitement.',
            'lien' => route('messignalements.auth', $signalement->id),
            'reference_id' => $signalement->id,
            'reference_type' => 'Signalement',
            'notifiable_id' => $signalement->id,
            'notifiable_type' => 'Signalement',
        ]);

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
        $agent = $intervention->user;
        $agent = User::find($intervention->user_id);




        // Trouver l’admin (par exemple, tous les utilisateurs avec rôle admin)
        $admins = User::where('role', 'admin')->get();

        foreach ($admins as $admin) {
            Notification::create([
                'user_id' => $admin->id,  // l’admin destinataire
                'type' => 'intervention_terminee',
                'titre' => 'Intervention terminée a valideé',
                'message' => 'L’intervention sur le signalement "' . $intervention->signalement->description . '" a été terminée par l’agent municipal "' . $agent->name . '".',
                'lien' => route('intervention.valide_rejeter', $intervention->id),
                'reference_id' => $intervention->signalement->id,
                'reference_type' => 'Signalement_temrine_a_valide',
                'notifiable_id' => $intervention->id,
                'notifiable_type' => 'Intervention_termine',
            ]);
        }



        // Redirection selon le paramètre `source`
        $source = $request->input('source'); // Récupérer la source envoyée

        if ($source === 'termine') {
            return Inertia::location('/agent/interventions/terminees');
        } elseif ($source === 'encours') {
            return Inertia::location('/agent_municipal/MesSignalements');
        } elseif ($source === 'rejete') {
            return Inertia::location('/agent/interventions/rejetes');
        } else {
            return Inertia::location('/agent/intervention');
        }
    }
    public function interventionsTerminees()
    {
        $interventions = Intervention::with('signalement.categorie', 'user')
            ->where('resolution_status', 'termine')
            ->where(function ($query) {
                $query->whereNull('validation_admin')
                    ->orWhere('validation_admin', 0);
            })
            ->get();


        return Inertia::render('Admin/InterventionsTerminees', [
            'interventions' => $interventions,
        ]);
    }
    public function interventionsrejete()
    {

        $interventionsRejete = Intervention::with(['signalement.categorie', 'signalement.votes'])
            ->where('resolution_status', 'rejetee')
            ->where('validation_admin', 0)
            ->get()
            ->map(function ($interventionsRejete) {
                $interventionsRejete->dateDebut = \Carbon\Carbon::parse($interventionsRejete->dateDebut)->format('d/m/Y');
                $interventionsRejete->dateFin = \Carbon\Carbon::parse($interventionsRejete->dateFin)->format('d/m/Y');

                return $interventionsRejete;
            });
        $categories = Categorie::all();

        // dd($interventionsRejete);
        return Inertia::render('Agent_municipal/InterventionsRejete', [
            'interventions' => $interventionsRejete,
            'categories' => $categories
        ]);
    }
    public function valider(Request $request, $id)
    {
        $intervention = Intervention::findOrFail($id);
        $intervention->validation_admin = true;
        $intervention->resolution_status = 'fermee';
        $intervention->save();

        // Mettre à jour le signalement
        $signalement = $intervention->signalement;
        $signalement->statut = 'resolu';
        $signalement->save();
        // $intervention->signalement->statut = 'resolu';
        // $intervention->signalement->save();

        // Notification pour l’agent
        Notification::create([
            'user_id' => $intervention->user_id,  // l’agent assigné
            'type' => 'validation_intervention',
            'titre' => 'Intervention validée',
            'message' => 'L’intervention sur le signalement "' . $signalement->description . '" a été validée par l’administrateur.',
            'lien' => route('mon.historique', $intervention->id),
            'reference_id' => $signalement->id,
            'reference_type' => 'Signalement',
            'notifiable_id' => $signalement->id,
            'notifiable_type' => 'Signalement',
        ]);

        // Notification pour le citoyen (user)
        Notification::create([
            'user_id' => $signalement->user_id,  // le citoyen
            'type' => 'signalement_resolu',
            'titre' => 'Signalement résolu',
            'message' => 'Votre signalement "' . $signalement->description . '" a été résolu merci a voter confiance.',
            'lien' => route('messignalements.auth', $signalement->id),
            'reference_id' => $signalement->id,
            'reference_type' => 'Signalement',
            'notifiable_id' => $signalement->id,
            'notifiable_type' => 'Signalement',
        ]);


        return back()->with('success', 'Intervention validée');
    }

    public function rejeter(Request $request, $id)
    {
        $intervention = Intervention::findOrFail($id);
        $intervention->validation_admin = false;
        $intervention->commentaire_admin = $request->commentaire_admin;
        $intervention->resolution_status = 'rejetee';
        $intervention->save();
        // Envoyer une notification à l’agent assigné dans le rejeter
        Notification::create([
            'user_id' => $intervention->user_id,  // l’agent affecté
            'type' => 'intervention_rejetee',
            'titre' => 'Intervention rejetée',
            'message' => 'Votre intervention sur le signalement "' . $intervention->signalement->description . '" a été rejetée par l’administrateur.',
            'lien' => route('interventions.rejetes', $intervention->id),
            'reference_id' => $intervention->signalement->id,
            'reference_type' => 'Signalement',
            'notifiable_id' => $intervention->signalement->id,
            'notifiable_type' => 'Signalement',
        ]);

        return back()->with('error', 'Intervention rejetée');
    }
    public function showDetail_I_Atermine($id)
    {
        $intervention = Intervention::with(['signalement.categorie', 'user'])->findOrFail($id);
        return Inertia::render('Admin/Detail_Interv_Atermine', [
            'signalement' => $intervention->signalement,
            'intervention' => $intervention
        ]);
    }
    public function  Detail_I_Atermine_agent($id)
    {
        $intervention = Intervention::with(['signalement.categorie', 'signalement.votes', 'signalement.user', 'user'])->findOrFail($id);
        //   dd($intervention);
        return Inertia::render('Agent_municipal/Detail_Interv_Atermine_agent', [
            'signalement' => $intervention->signalement,
            'intervention' => $intervention
        ]);
    }
    public function  Detail_I_Rejete_agent($id)
    {
        $intervention = Intervention::with([
            'signalement.categorie',
            'signalement.votes',
            'signalement.user',
            'user'
        ])->findOrFail($id);
        // Calculer la priorité en fonction du nombre de votes
        $totalVotes = $intervention->signalement->votes->count(); // Compte tous les votes
        // $urgentVotes = $intervention->signalement->votes->where('type', 1)->count(); // Compte les votes "urgents"

        // Calculer la priorité
        if ($totalVotes > 10) {
            $priority = 'Urgent'; // Plus de 10 votes => Urgent
        } elseif ($totalVotes >= 5 && $totalVotes <= 10) {
            $priority = 'Moyenne'; // Entre 5 et 10 votes => Moyenne
        } else {
            $priority = 'Basse'; // Moins de 5 votes => Basse
        }

        return Inertia::render('Agent_municipal/Detail_Interv_Rejeter_agent', [
            'signalement' => $intervention->signalement,
            'intervention' => $intervention,
            'priority' => $priority
        ]);
        dd($intervention);
    }
    public function exportPDF($id)
    {
        $intervention = Intervention::with('signalement')->findOrFail($id);

        $pdf = Pdf::loadView('pdf.intervention', compact('intervention'));
        return $pdf->download('intervention_' . $id . '.pdf');
    }
    public function afficherInterventions(Request $request)

    {

        $user = auth()->user(); // utilisateur connecté

        $interventions =  Intervention::where('user_id', $user->id)->get();

        $stats = [
            'en_cours' => $interventions->where('resolution_status', 'en cours')->count(),
            'terminees' => $interventions->where('resolution_status', 'termine')->count(),
            'rejetes' => $interventions->where('resolution_status', 'rejeté')->count(),
            'fermees' => $interventions->where('resolution_status', 'fermee')->count(),
        ];
        // dd($interventions);
        // dd($user);
        // dd($stats);

        return Inertia::render('Agent_municipal/Interventions', [
            'interventions' => $interventions,
            'stats' => $stats,
        ]);
    }
    public function resetIntervention($id)
    {
        // Trouver l'intervention par son ID
        $intervention = Intervention::findOrFail($id);
        // dd($intervention);

        // Réinitialiser les champs spécifiques
        $intervention->update([
            'description_action' => null,
            'solution_photo' => null,
            'dateFin' => null,
            'resolution_status' => 'en cours',
        ]);

        // Retourner une réponse avec Inertia
        return Inertia::render('Agent_municipal/InterventionTerminee', [
            'interventions' => Intervention::with(['signalement.categorie', 'signalement.votes'])
                ->where('resolution_status', 'termine')

                ->get() // Mettre à jour la liste des interventions
        ]);
    }
    public function getTerminees()
    {

        $interventionsTerminees = Intervention::with(['signalement.categorie', 'signalement.votes'])
            ->where('resolution_status', 'termine')
            ->get()
            ->map(function ($interventionTerminees) {
                $interventionTerminees->dateDebut = \Carbon\Carbon::parse($interventionTerminees->dateDebut)->format('d/m/Y');
                $interventionTerminees->dateFin = \Carbon\Carbon::parse($interventionTerminees->dateFin)->format('d/m/Y');

                return $interventionTerminees;
            });

        return Inertia::render('Agent_municipal/InterventionTerminee', [
            'interventions' => $interventionsTerminees,

        ]);
    }
}
