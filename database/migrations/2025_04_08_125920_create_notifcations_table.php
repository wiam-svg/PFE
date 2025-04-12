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
        Schema::create('notifcations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('type');
            $table->string('titre')->nullable();
            $table->boolean('est_lue')->default(false);
            $table->string('lien')->nullable();
            $table->text('message')->nullable();
            $table->nullableMorphs('notifiable');
            $table->bigInteger('reference_id')->unsigned()->nullable()->index();
            $table->string('reference_type')->nullable()->index(); 
            $table->timestamp('read_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notifcations');
    }
};
