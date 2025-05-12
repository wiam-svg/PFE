<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use App\Models\Intervention;
use App\Models\Signalement;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;


class AdminDashboardController extends Controller
{

    public function dashboard()
    {
        // 1. Signalements totaux et croissance
        $totalSignalements = Signalement::count();
        $lastMonthSignalements = Signalement::whereMonth('created_at', '=', Carbon::now()->subMonth()->month)
            ->whereYear('created_at', '=', Carbon::now()->subMonth()->year)
            ->count();
        $thisMonthSignalements = Signalement::whereMonth('created_at', '=', Carbon::now()->month)
            ->whereYear('created_at', '=', Carbon::now()->year)
            ->count();
        $signalementGrowth = $lastMonthSignalements > 0
            ? round((($thisMonthSignalements - $lastMonthSignalements) / $lastMonthSignalements) * 100, 1)
            : 0;

        // 2. Utilisateurs actifs
        $activeUsers = User::where('created_at', '>=', Carbon::now()->subMonths(3))->count();
        $lastMonthActiveUsers = User::where('created_at', '>=', Carbon::now()->subMonths(4))
            ->where('created_at', '<', Carbon::now()->subMonths(3))
            ->count();
        $userGrowth = $lastMonthActiveUsers > 0
            ? round((($activeUsers - $lastMonthActiveUsers) / $lastMonthActiveUsers) * 100, 1)
            : 0;

        // 3. Taux de résolution
        $resolvedSignalements = Signalement::where('statut', 'résolu')->count();
        $resolutionRate = $totalSignalements > 0
            ? round(($resolvedSignalements / $totalSignalements) * 100, 1)
            : 0;
        // Calculer le taux de résolution du mois dernier
        $lastMonthResolved = Signalement::where('statut', 'résolu')
            ->whereMonth('updated_at', '=', Carbon::now()->subMonth()->month)
            ->whereYear('updated_at', '=', Carbon::now()->subMonth()->year)
            ->count();
        $lastMonthTotal = Signalement::whereMonth('created_at', '<=', Carbon::now()->subMonth()->month)
            ->whereYear('created_at', '<=', Carbon::now()->subMonth()->year)
            ->count();
        $lastMonthResolutionRate = $lastMonthTotal > 0
            ? round(($lastMonthResolved / $lastMonthTotal) * 100, 1)
            : 0;
        $resolutionGrowth = $lastMonthResolutionRate > 0
            ? round(($resolutionRate - $lastMonthResolutionRate), 1)
            : 0;

        // 4. Signalements par mois (dernier 7 mois)
        $signalementsByMonth = [];
        for ($i = 6; $i >= 0; $i--) {
            $date = Carbon::now()->subMonths($i);
            $count = Signalement::whereMonth('created_at', '=', $date->month)
                ->whereYear('created_at', '=', $date->year)
                ->count();
            $signalementsByMonth[] = [
                'month' => $date->translatedFormat('M'), // Format avec le nom du mois abrégé
                'signalements' => $count
            ];
        }

        // // 5. Types de signalements par catégorie
        // $signalementsByCategory = Categorie::withCount('signalements')
        //     ->orderBy('signalements_count', 'desc')
        //     ->get()
        //     ->map(function ($categorie) {
        //         return [
        //             'name' => $categorie->nom,
        //             'count' => $categorie->signalements_count
        //         ];
        //     });
        // استدعاء الـ stored procedure
        $signalementsByCategory = DB::select('CALL GetSignalementCountByCategory()');
        $recentSignalements = Signalement::with('Categorie')->get();



        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'totalSignalements' => [
                    'value' => $totalSignalements,
                    'growth' => $signalementGrowth
                ],
                'activeUsers' => [
                    'value' => $activeUsers,
                    'growth' => $userGrowth
                ],
                'resolutionRate' => [
                    'value' => $resolutionRate,
                    'growth' => $resolutionGrowth
                ],
                'signalementsByMonth' => $signalementsByMonth,
                'signalementsByCategory' => $signalementsByCategory,
                'recentSignalements' => $recentSignalements
            ]

        ]);
    }
}
