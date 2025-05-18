<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Notification;
use App\Models\Signalement;


class SupprimerSignalementsPlanifies extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:supprimer-signalements-planifies';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */

    public function handle()
    {
        $notifs = Notification::where('type', 'suppression_signalement')
            ->where('created_at', '<=', now())
            ->get();

        foreach ($notifs as $notif) {
            $signalement = Signalement::find($notif->reference_id);
            if ($signalement) {
                $signalement->delete();
                $this->info("Signalement ID {$signalement->id} supprimé.");
            }

            // Supprime aussi la notification pour éviter la répétition
            $notif->delete();
        }

        $this->info('Suppression terminée.');
    }
}
