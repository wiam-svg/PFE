<?php

namespace App\Http\Controllers;

use App\Models\Intervention;
use App\Models\Signalement;
use Illuminate\Http\Request;
use App\Models\Categorie;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Carbon\Carbon;

class Agent_municipalDashboardController extends Controller
{

public function dashboard()
{
    // Récupérer l'agent connecté
    $agent = Auth::user();
    // 1. Total des signalements assignés à l'agent
    $assignedSignalements = $agent->interventions()
        ->with('signalement')
        ->get();
    $totalAssigned = $assignedSignalements->count();
    // Répartition par statut
    $statusCounts = [
        'en attente' => 0,
        'en cours' => 0,
        'résolu' => 0
    ];
    foreach ($assignedSignalements as $intervention) {
        if ($intervention->signalement) {
            $statusCounts[$intervention->signalement->statut]++;
        }
    }
    // 2. Signalements assignés cette semaine
    $thisWeekStart = Carbon::now()->startOfWeek();
    $lastWeekStart = Carbon::now()->subWeek()->startOfWeek();
    $lastWeekEnd = Carbon::now()->subWeek()->endOfWeek();
    $thisWeekAssigned = $agent->interventions()
        ->where('created_at', '>=', $thisWeekStart)
        ->count();
    $lastWeekAssigned = $agent->interventions()
        ->whereBetween('created_at', [$lastWeekStart, $lastWeekEnd])
        ->count();
    $weekOverWeekChange = $thisWeekAssigned - $lastWeekAssigned;
    // 3. Signalements résolus cette année
    $resolvedThisYear = $agent->interventions()
        ->whereHas('signalement', function ($query) {
            $query->where('statut', 'résolu');
        })
        ->whereYear('updated_at', Carbon::now()->year)
        ->count();
    // 4. Activité hebdomadaire (signalements assignés par jour de la semaine actuelle)
    $weeklyActivity = [];
    $currentWeekStart = Carbon::now()->startOfWeek();
    for ($i = 0; $i < 7; $i++) {
        $day = $currentWeekStart->copy()->addDays($i);
        $count = $agent->interventions()
            ->whereDate('created_at', $day)
            ->count();
        $weeklyActivity[] = [
            'day' => $day->locale('fr')->isoFormat('ddd'), // Format jour abrégé en français
            'count' => $count
        ];
    }
    // 5. État des signalements (répartition par statut)
    $signalementStatusData = [
        [
            'name' => 'En attente',
            'value' => $statusCounts['en attente']
        ],
        [
            'name' => 'En cours',
            'value' => $statusCounts['en cours']
        ],
        [
            'name' => 'Résolus',
            'value' => $statusCounts['résolu']
        ]
    ];
    return Inertia::render('Agent_municipal/Dashboard', [
        'stats' => [
            'assignedSignalements' => [
                'total' => $totalAssigned,
                'pending' => $statusCounts['en attente'],
                'inProgress' => $statusCounts['en cours']
            ],
            'thisWeekAssigned' => [
                'total' => $thisWeekAssigned,
                'change' => $weekOverWeekChange
            ],
            'resolvedThisYear' => $resolvedThisYear,
            'weeklyActivity' => $weeklyActivity,
            'signalementStatusData' => $signalementStatusData
        ]
    ]);
}

}
