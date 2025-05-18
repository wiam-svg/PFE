<?php

use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\Agent_municipalDashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SignalementController;
use App\Http\Controllers\CommentaireController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\VoteController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\InterventionController;
use App\Http\Controllers\NotificationController;
use App\Mail\AccountStatusMail;
use App\Models\Categorie;
use App\Models\Intervention;
use App\Models\Notification;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ArchiveController;


use Illuminate\Support\Facades\Mail;
// use Illuminate\Notifications\Notification as NotificationsNotification;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/test-mail', function () {
    $user = App\Models\User::first();
    $status = 'approved';
    Mail::to($user->email)->send(new AccountStatusMail($user, $status));
    return 'Email envoyé !';
});

Route::get('/a-propos', function () {
    return Inertia::render('Accueil/a-propos');
});
Route::get('/comment-ca-marche', function () {
    return Inertia::render('Accueil/comment-ca-marche');
});
Route::get('/footer', function () {
    return Inertia::render('footer');
});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});




Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::get('/profile/{id}', [ProfileController::class, 'index'])->name('profile.index');
    Route::post('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    // Route::get('create_signalements', function(){
    //     return Inertia::render('Signalements/createSignalement');
    // });
    Route::get('Signalements/createSignalement', [SignalementController::class, 'create'])->name('signalements.create');
    Route::post('Signalements/createSignalement', [SignalementController::class, 'store'])->name('signalements.store');



    Route::get('/Carte', [SignalementController::class, 'index_api'])->name('signalements.carte');

    Route::get('/signalements', [SignalementController::class, 'index'])->name('signalements.index');
    Route::post('signalements/{signalementId}/urgent', [SignalementController::class, 'toggleUrgent']);

    Route::get('/signalements/{id}/edit', [SignalementController::class, 'edit'])->name('signalements.edit');
    Route::post('/signalements/{signalement}', [SignalementController::class, 'update'])->name('signalements.update');
    Route::post('/signalements/{id}/delete', [SignalementController::class, 'destroy_user'])->name('signalements.destroy');
    Route::get('/signalement/{id}', [SignalementController::class, 'show'])->name('signalement.show');



    Route::post('/commentaires', [CommentaireController::class, 'store'])->name('commentaires.store');
    Route::post('/commentaires/{id}/delete', [CommentaireController::class, 'destroy'])->name('commentaires.destroy');
    Route::post('/commentaires/{id}/update', [CommentaireController::class, 'update'])->name('commentaires.update');
    Route::get('/mes-signalements', [SignalementController::class, 'mesSignalementsAuth'])->name('messignalements.auth');



    //Notifications
    Route::get('/notifications', [NotificationController::class, 'mesNotifications'])->name('notifications.index');
    Route::post('/notifications/{id}/mark-as-read', [NotificationController::class, 'markAsRead'])->name('notifications.markAsRead');
    Route::delete('/notifications/{id}', [NotificationController::class, 'destroy'])->name('notifications.destroy');
});



Route::middleware(['auth', 'role:admin'])->group(function () {

    Route::get('/admin/dashboard', [AdminDashboardController::class, 'dashboard'])
        ->name('admin.dashboard');


    Route::get('/archives', [ArchiveController::class, 'index'])->name('archives.index');



    Route::get('create_categories', function () {
        return Inertia::render('Categories/create');
    });
    Route::post('categories', [CategorieController::class, 'store'])->name('categories');
    Route::get('ListCategories', [CategorieController::class, 'index'])->name('listcategories');
    Route::delete('/categories/{id}', [CategorieController::class, 'destroy'])->name('categories.destroy');
    Route::get('/categories/{id}/edit', [CategorieController::class, 'edit'])->name('categories.edit');
    Route::post('/categories/{id}/update', [CategorieController::class, 'update'])->name('categories.update');


    Route::get('/admin/users', [RegisteredUserController::class, 'index'])->name('users.compte');
    Route::post('/users/{id}/validate', [RegisteredUserController::class, 'validateUser'])->name('users.validate');
    Route::post('/admin/validate-user/{id}', [RegisteredUserController::class, 'validateUser']);
    Route::post('/admin/delete-user/{id}', [RegisteredUserController::class, 'destoryUser']);
    //intervention GRUD:

    Route::get('/admin/signalement_nonassigne', [InterventionController::class, 'showSignalements']);
    Route::post('/admin/assign-agent-to-signalement', [InterventionController::class, 'assignAgent']);
    Route::get('/admin/signalements/{id}/details', [SignalementController::class, 'getDetails_signalement'])->name('admin.signalement.details');


    Route::get('/admin/assignements', [InterventionController::class, 'index'])->name('admin.assignements');
    Route::delete('/admin/assignements/{id}', [InterventionController::class, 'destroy'])->name('admin.delete_assignement');
    Route::get('/admin/assignements/{id}/edit', [InterventionController::class, 'edit'])->name('admin.edit');
    Route::post('/admin/assignements/{id}', [InterventionController::class, 'update']);
    Route::get('/admin/intervention/terminees/{id}/detail_I_Atermine', [InterventionController::class, 'showDetail_I_Atermine']);
    

    Route::get('/admin/interventions/terminees', [InterventionController::class, 'interventionsTerminees'])->name('intervention.valide_rejeter');
    Route::post('/admin/intervention/{id}/valider', [InterventionController::class, 'valider']);
    Route::post('/admin/intervention/{id}/rejeter', [InterventionController::class, 'rejeter']);
    Route::delete('/admin/signalements/{id}', [SignalementController::class, 'destroy'])->name('signalements.destroy');
});

Route::middleware(['auth', 'role:agent_municipal'])->group(function () {

    Route::get('/agent/dashboard', [Agent_municipalDashboardController::class, 'dashboard'])
        ->name('agent.dashboard');


    Route::get('/intervention/{id}/pdf', [InterventionController::class, 'exportPDF']);


    Route::get('/agent/interventions/rejetes', [InterventionController::class, 'interventionsrejete'])->name('interventions.rejetes');


    Route::get('/signalement/{id}', [SignalementController::class, 'SignalementDetails'])
        ->name('signalement.details');



    Route::get('/agent/interventions/terminees', [InterventionController::class, 'getTerminees'])->name('interventions.terminees');
    Route::get('/agent/intervention/reset/{id}', [InterventionController::class, 'resetIntervention']);
    // Route::get('/agent/intervention/detail/{id}', [InterventionController::class, 'detailIntervention']);
    Route::get('/agent/intervention/{id}/detail_I_Atermine_agent', [InterventionController::class, 'Detail_I_Atermine_agent']);
    Route::get('/agent/intervention/{id}/detail_I_Rejete_agent', [InterventionController::class, 'Detail_I_Rejete_agent']);
    // Route::get('/agent/intervention/{id}/detail_I_Atermine_agent', [InterventionController::class, 'Detail_I_Rejte_agent']);


    Route::get('/signalements/historique', [InterventionController::class, 'historique'])->name('mon.historique');
    Route::get('/interventions', [InterventionController::class, 'afficherInterventions'])->name('interventions.index');
    Route::get('/agent_municipal/MesSignalements', [SignalementController::class, 'mesSignalements'])->name('signalements.mes');
    Route::get('/agent/intervention/{id}/editStatut', [InterventionController::class, 'editStatut'])->name('agent.intervention.edit');
    Route::post('/agent/intervention/{id}', [InterventionController::class, 'updateStatut'])->name('agent.intervention.update');
    Route::get('/agent/signalement/{id}/details', [SignalementController::class, 'showDetails'])->name('agent.signalement.details');
});
// Route::middleware(['auth','role:tech'])->group(function () {



// });

Route::prefix('signalements/{signalement}')->group(function () {
    Route::get('commentaires', [CommentaireController::class, 'index'])->name('signalements.commentaires.index');
    Route::post('commentaires/create', [CommentaireController::class, 'create'])->name('signalements.commentaires.create');
    Route::post('commentaires', [CommentaireController::class, 'store'])->name('signalements.commentaires.store');
    Route::get('commentaires/{commentaire}/edit', [CommentaireController::class, 'edit'])->name('commentaires.edit');
    Route::put('commentaires/{commentaire}', [CommentaireController::class, 'update'])->name('commentaires.update');
    Route::delete('commentaires/{commentaire}', [CommentaireController::class, 'destroy'])->name('commentaires.destroy');
});


Route::prefix('signalements/{signalement}')->group(function () {
    Route::post('votes', [VoteController::class, 'store'])->name('signalements.votes.store');
    Route::delete('votes', [VoteController::class, 'destroy'])->name('signalements.votes.destroy');
});




require __DIR__ . '/auth.php';
