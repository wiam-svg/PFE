import { usePage } from '@inertiajs/react';

export default function Notifications() {
    const { notifications } = usePage().props;

    return (
        <div>
            {notifications.map((notif) => (
                <div key={notif.id} className="p-2 border-b">
                    <a href={notif.lien} className="text-blue-500">
                        {notif.titre}
                    </a>
                    <p>{notif.message}</p>
                </div>
            ))}
        </div>
    );
}

