<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Categorie extends Model
{
    /** @use HasFactory<\Database\Factories\CategorieFactory> */
    use HasFactory;
     /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $fillable = [
        'nom',
        'description',
    ];
        /**
     * chaque categorie a plusieur signalement
     */

    public function signalements(): HasMany
    {
        return $this->hasMany(Signalement::class);
    }
}
