<?php

namespace Database\Factories;

use App\Models\Categorie;
use App\Models\Signalement;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Signalement>
 */
class SignalementFactory extends Factory
{
     /**
     * The name of the factory's corresponding model.
     *
     * @var string<\App\Models\Signalement>
     */
    protected $model = Signalement::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        
            return [
                'titre' => $this->faker->word,
                'description' => $this->faker->paragraph,
                'image' => $this->faker->imageUrl(),
                'statut' => $this->faker->randomElement(['en attente', 'en cours', 'résolu']),
                'ville' => $this->faker->city,
                'adresse' => $this->faker->address,
                'categorie' => $this->faker->word,
                'dateCreation' => $this->faker->date,
                'user_id' => User::factory(),
                'categorie_id' => Categorie::factory(), 
                'created_at' => now(),
                'updated_at' => now(),
            ];
        
    }
}
