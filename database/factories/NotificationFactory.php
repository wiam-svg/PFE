<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Notification>
 */
class NotificationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'type' => 'assignation',
            'titre' => 'Nouveau signalement',
            'est_lue' => false,
            'lien' => '/signalements/' . $this->faker->numberBetween(1, 100),
            'message' => 'Un signalement vous a été assigné.',
            'reference_id' => $this->faker->numberBetween(1, 100),
            'reference_type' => 'signalement',
            'read_at' => null,
        ];
    }
}
