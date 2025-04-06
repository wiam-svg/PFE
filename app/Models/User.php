<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */

    // protected $fillable = [
    //         // 'nom',
    //         // 'prenom',
    //         // 'email',
    //         // 'password',
    //         // 'adresse',
    //         // 'telephone',
            
    // ];
    protected $fillable = [
        'nom', 
        'prenom', 
        'email', 
        'password', 
        'adresse', 
        'ville', 
        'telephone', 
        'postal_code',
        'accept_terms',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */


    protected $hidden = [
        'password',
        
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'password' => 'hashed',
        ];
    }
}
