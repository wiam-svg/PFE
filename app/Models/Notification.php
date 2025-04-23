<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    /** @use HasFactory<\Database\Factories\NotificationFactory> */
    use HasFactory;
    protected $fillable = [
        'user_id',
        'type',
        'titre',
        'est_lue',
        'lien',
        'message',
        'reference_id',
        'reference_type',
        'read_at',
    ];

    //  Chaque notification appartient à un utilisateur
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Pour faire référence à un objet comme un signalement, commentaire, etc.
    public function notifiable()
    {
        return $this->morphTo();
    }

    // Si tu veux accéder directement au signalement associé
    public function signalement()
    {
        return $this->belongsTo(Signalement::class, 'reference_id');
    }
}
