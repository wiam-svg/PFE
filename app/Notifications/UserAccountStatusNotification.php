<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class UserAccountStatusNotification extends Notification
{
    use Queueable;
    public $status;  // 'validé' ou 'rejeté'
    public $user;
    /**
     * Create a new notification instance.
     */
    public function __construct($status, $user)
    {
        $this->status = $status;
        $this->user = $user;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via( $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
    //     return (new MailMessage)
    //                 ->line('The introduction to the notification.')
    //                 ->action('Notification Action', url('/'))
    //                 ->line('Thank you for using our application!');
    $message = (new MailMessage)
            ->subject('Mise à jour de votre compte')
            ->line("Bonjour {$this->user->name}, votre compte a été {$this->status}.");

        if ($this->status === 'validé') {
            $message->action('Se connecter', url('/login'))
                    ->line('Bienvenue sur notre plateforme !');
        } else {
            $message->line('Nous vous remercions d’avoir essayé de vous inscrire.');
        }

        return $message;
    }
    

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
