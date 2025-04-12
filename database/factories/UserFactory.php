<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nom' => $this->faker->lastName(),
            'prenom' => $this->faker->firstName(),
            'age' => $this->faker->numberBetween(18, 60),
            'email' => $this->faker->unique()->safeEmail(),
            'password' => bcrypt('password'), 
            'adresse' => $this->faker->streetAddress(),
            'ville' => $this->faker->city(),
            'telephone' => $this->faker->phoneNumber(),
            'type' => $this->faker->randomElement(['stagiaire', 'entreprise', null]), 
            'nomEntreprise' => $this->faker->company(),
            'ice'=>$this->faker->numerify('###############'),
            'role' =>$this->faker->randomElement(['user','agent_muncipal']),
            'postal_code' => $this->faker->optional()->numberBetween(10000, 99999),
            'accept_terms' => true,
            
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
