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
        'age',
        'email',
        'password',
        'adresse',
        'ville',
        'telephone',
        'type',
        'nomEntreprise',
        'ice',
        'postal_code',
        'accept_terms',
        'cin',
        'cne',
        'matricule',
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
    public function votes()
    {
        return $this->hasMany(Vote::class);
    }


    public function isAdmin(): bool
    {
        return $this->role === 'admin';
    }

    public function hasRole(string $role): bool
    {
        return $this->role === $role;
    }
    // app/Models/User.php

    // public function signalements()
    // {
    //     return $this->hasMany(Signalement::class);
    // }
    public function signalements()
    {
    return $this->hasManyThrough(
        Signalement::class, // Le modèle final qu’on veut atteindre
        Intervention::class, // Le modèle intermédiaire
        'user_id', // Clé étrangère sur interventions (vers users)
        'id', // Clé primaire sur signalements
        'id', // Clé primaire sur users
        'signalement_id' // Clé étrangère sur interventions (vers signalements)
    );
    }


    public function notifications()
    {
       return $this->hasMany(Notification::class);
    }
    public function interventions()
{
    return $this->hasMany(Intervention::class, 'user_id');
}
public function assignedSignalements()
{
    return $this->hasManyThrough(
        Signalement::class,
        Intervention::class,
        'user_id', // Foreign key on interventions table
        'id', // Foreign key on signalements table
        'id', // Local key on users table
        'signalement_id' // Local key on interventions table
    );



}}
