<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Commentaire extends Model
{
    /** @use HasFactory<\Database\Factories\CommentaireFactory> */
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'signalement_id',
        'contenu',
    ];
    /**
     * Get the user that wrote the commentaire.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the signalement that the commentaire belongs to.
     */
    public function signalement(): BelongsTo
    {
        return $this->belongsTo(Signalement::class);
    }
    
}
