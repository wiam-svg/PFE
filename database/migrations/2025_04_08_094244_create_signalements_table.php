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
        Schema::create('signalements', function (Blueprint $table) {
            $table->id();
            $table->string('titre');
            $table->text('description');
            $table->string('image');
            $table->enum('statut', ['en attente', 'en cours', 'résolu'])
            ->default('en attente'); 
            $table->string('ville'); 
            $table->string('adresse'); 
            $table->string('categorie')->default('Autre');
            $table->date('dateCreation');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('categorie_id')->constrained()->onDelete('cascade');
            $table->timestamps();
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('signalements');
    }
};
