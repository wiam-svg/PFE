<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Signalement extends Model
{
    /** @use HasFactory<\Database\Factories\SignalementFactory> */
    use HasFactory;
    protected $fillable = [
        'titre',
        'description',
        'image',
        'statut',
        'ville',
        'adresse',
        'categorie',
        'user_id'
    ];

        public function user()
        {
            return $this->belongsTo(User::class);
        }
    
}
