<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SignalementController;
use App\Http\Controllers\CommentaireController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\VoteController;
use App\Models\Categorie;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    // Route::get('create_signalements', function(){
    //     return Inertia::render('Signalements/createSignalement');
    // });
    Route::get('Signalements/createSignalement', [SignalementController::class, 'create'])->name('signalements.create');
    Route::post('Signalements/createSignalement', [SignalementController::class, 'store'])->name('signalements.store');
    
    
    // Route::post('categories', [CategorieController::class, 'store'])->name('categories');
    // Route::get('create_categories',function(){
    //     return Inertia::render('Categories/create');
    // });

    Route::get('/signalements', [SignalementController::class, 'index'])->name('signalements.index');
    Route::post('signalements/{signalementId}/urgent', [SignalementController::class, 'toggleUrgent']);


});



Route::middleware(['auth','role:admin'])->group(function () {
   
    
    Route::post('categories', [CategorieController::class, 'store'])->name('categories');
    Route::get('create_categories',function(){
        return Inertia::render('Categories/create');
    });

});
Route::middleware(['auth','role:tech'])->group(function () {
   
    
    Route::post('categories', [CategorieController::class, 'store'])->name('categories');
    Route::get('create_categories',function(){
        return Inertia::render('Categories/create');
    });

});
Route::middleware(['auth','role:tech'])->group(function () {
   
   

});

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




require __DIR__.'/auth.php';
