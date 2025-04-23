<?php

namespace App\Notifications;

use App\Models\Signalement;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SignalementAssigned extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(Signalement $signalement)
    {
        $this->signalement = $signalement;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via($notifiable): array
    {
        return ['database', 'mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail($notifiable): MailMessage
    {
        return (new MailMessage)
        ->subject('Vous avez été assigné à un signalement')
        ->line('Un signalement vous a été assigné.')
        ->action('Voir le signalement', url('/signalements/'.$this->signalement->id)) // Lien vers le signalement
        ->line('Merci de traiter ce signalement.');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toDatabase(object $notifiable): array
    {
        return [
            'titre' => 'Signalement assigné',
            'message' => 'Vous avez été assigné à un signalement.',
            'lien' => url('/signalements/'.$this->signalement->id), // Lien vers le signalement
            'signalement_id' => $this->signalement->id,
        ];
    }
}
