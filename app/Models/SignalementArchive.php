<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SignalementArchive extends Model
{
    protected $table = 'signalements_archive';  // Spécifie la table à utiliser
    protected $fillable = [
        'signalement_id', 'titre', 'description', 'image', 'statut', 'ville', 
        'adresse', 'dateCreation', 'user_id', 'categorie_id', 'created_at', 'updated_at', 
        'latitude', 'longitude', 'supprime_par', 'deleted_at'
    ];
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function suppriméPar()
{
    return $this->belongsTo(User::class, 'supprime_par');
}


    public function categorie()
    {
        return $this->belongsTo(Categorie::class, 'categorie_id');
    }
}
