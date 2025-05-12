<?php

namespace App\Http\Controllers;

use App\Models\Signalement;
use App\Models\SignalementArchive;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArchiveController extends Controller
{
    public function index()
    { // Récupérer les signalements archivés (supprimés)
        // $archivedSignalements = SignalementArchive::with(['user', 'categorie'])->get();
        $archivedSignalements = SignalementArchive::with(['user', 'categorie', 'suppriméPar'])->get();




        // Passer les données à la vue via Inertia
        return Inertia::render('Admin/Archives', [
            'archivedSignalements' => $archivedSignalements
        ]);
    }
}
