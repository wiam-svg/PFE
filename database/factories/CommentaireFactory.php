<?php

namespace Database\Factories;

use App\Models\Commentaire;
use App\Models\Signalement;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Commentaire>
 */
class CommentaireFactory extends Factory
{     /**
    * The name of the factory's corresponding model.
    *
    * @var string<\App\Models\Commentaire>
    */
   protected $model = Commentaire::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'signalement_id' => Signalement::factory(),
            'contenu' => $this->faker->paragraph(),
            'created_at' => now(),
            'updated_at' => now(),
    
        ];
    }
}
