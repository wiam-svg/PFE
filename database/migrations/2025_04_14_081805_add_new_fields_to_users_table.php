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
        Schema::table('users', function (Blueprint $table) {
            $table->string('cin')->nullable()->unique();          // Pour citoyen
            $table->string('cne')->nullable()->unique();          // Pour étudiant
            $table->string('matricule')->nullable()->unique();    // Pour agent municipal

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['cin', 'cne', 'matricule']);
        });
    }
};
