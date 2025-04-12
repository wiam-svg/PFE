<?php

namespace Database\Factories;

use App\Models\Categorie;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Categorie>
 */
class CategorieFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string<\App\Models\Categorie>
     */
    protected $model = Categorie::class;

 
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nom'=>$this->faker->word,
            'description'=>$this->faker->paragraph,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
