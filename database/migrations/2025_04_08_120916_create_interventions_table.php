<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('interventions', function (Blueprint $table) {
        $table->id();
        // Définir explicitement les tables de référence si nécessaire
        $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
        $table->foreignId('signalement_id')->constrained('signalements')->onDelete('cascade');
        $table->string('description_action')->nullable();
        $table->date('dateDebut');
        $table->date('dateFin')->nullable();
        $table->string('solution_photo')->nullable(); // Ajout de nullable() si la photo est facultative
        $table->string('resolution_status')->default('en cours');
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('interventions');
    }
};
