<?php

namespace Database\Factories;

use App\Models\Signalement;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Signalement>
 */
class SignalementFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Signalement::class;

    public function definition()
    {
        return [
            'user_id' => User::factory(), // Génère un utilisateur
            'titre' => $this->faker->sentence(4),
            'description' => $this->faker->paragraph(),
            'image' => $this->faker->imageUrl(640, 480, 'city', true), // Image aléatoire
            'statut' => $this->faker->randomElement(['en attente', 'en cours', 'résolu']),
            'ville' => $this->faker->city(),
            'adresse' => $this->faker->address(),
            'categorie' => $this->faker->randomElement(['Voirie', 'Éclairage', 'Déchets', 'Autre']),
        ];
    }
}
