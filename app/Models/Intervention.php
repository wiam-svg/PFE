<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Intervention extends Model
{
    /** @use HasFactory<\Database\Factories\InterventionFactory> */
    use HasFactory;
    protected $fillable = [
        
        'user_id',
        'signalement_id',
        'description_action',
        'dateDebut',
        'dateFin',
        'solution_photo',
        'resolution_status',
    ];
   
    public function signalement()
     {
           return $this->belongsTo(Signalement::class);
     }

    public function user()
      {
           return $this->belongsTo(User::class);
      }

}
