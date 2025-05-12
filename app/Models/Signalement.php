<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Signalement extends Model
{
    /** @use HasFactory<\Database\Factories\SignalementFactory> */
    use HasFactory;

    
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'titre',
        'description',
        'image',
        'statut',
        'ville',
        'adresse',
        'dateCreation',
        'user_id',
        'categorie_id',
        'latitude',   
        'longitude',  
    ];
    protected $casts = [
        'dateCreation' => 'date',
    ];
    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    /**
     * Relation avec l'utilisateur (un signalement appartient à un utilisateur)
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function agent()
     {
    return $this->belongsTo(User::class, 'user_id');
     }
  

    /**
     * Relation avec la catégorie (un signalement appartient à une catégorie)
     */
    public function categorie()
    {
        return $this->belongsTo(Categorie::class);
    }
    public function votes()
   {
    return $this->hasMany(Vote::class);
    }
    public function commentaire()
    {
        return $this->hasMany(Commentaire::class);
    }
    public function notifications()
    {
       return $this->hasMany(Notification::class, 'reference_id');
    }
    public function interventions()
    {
        return $this->hasOne(Intervention::class);
    }



}

