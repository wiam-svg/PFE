<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Récupérer les notifications non lues pour l'utilisateur connecté
        $notifications = auth()->user()->notifications()->where('est_lue', false)->get();
        dd($notifications);
        // Retourner la réponse Inertia
        return Inertia::render('Agent_municipal/Dashboard', [
            'notifications' => $notifications,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Notification $notification)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Notification $notification)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Notification $notification)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    // public function destroy(Notification $notification)
    // {
    //     //
    // }
    public function dashboard()
    {

        $notifications = auth()->user()->notifications;

        return inertia('Dashboard', [
            'notifications' => $notifications,
        ]);
    }
    //     public function markAsRead($notificationId)
    // {
    //     $notification = auth()->user()->notifications()->findOrFail($notificationId);
    //     $notification->markAsRead(); // Cette méthode marque la notification comme lue

    //     return back(); // Rediriger l'utilisateur vers la page précédente
    // }

    public function mesNotifications()
    {
        $notifications = Notification::where('user_id', Auth::id())
            ->latest()
            ->get();



        return Inertia::render('Notif/Notifications', [
            'notifications' => $notifications,
        ]);
    }


    public function markAsRead($id)
    {
        $notif = auth()->user()->notifications()->findOrFail($id);
        $notif->update([
            'est_lue' => true,
            'read_at' => now(),
        ]);

        return redirect()->back()->with('success', 'Notification marquée comme lue.');
    }

    public function destroy($id)
    {
        $notif = auth()->user()->notifications()->findOrFail($id);
        $notif->delete();

        return redirect()->back()->with('success', 'Notification supprimée.');
    }
}
