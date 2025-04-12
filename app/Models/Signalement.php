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
        'categorie',
        'dateCreation',
        'user_id',
        'categorie_id',
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
        return $this->belongsTo(User::class);
    }

    /**
     * Relation avec la catégorie (un signalement appartient à une catégorie)
     */
    public function categorieSingelement()
    {
        return $this->belongsTo(Categorie::class,'categorie_id');
    }
    public function votes()
   {
    return $this->hasMany(Vote::class);
    }


}

