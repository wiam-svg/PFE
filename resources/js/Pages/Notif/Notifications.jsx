// import React from 'react';
// import { Link, usePage } from '@inertiajs/react';
// import { Bell } from 'lucide-react';
// import AppLayout from '@/Layouts/AppLayout';


// export default function Notifications() {
//     const { notifications } = usePage().props;

//     const unreadCount = notifications.filter(n => !n.est_lue).length;

//     return (
//         <AppLayout>
//             <div className="flex min-h-screen bg-gray-50">
//         <div className="p-4">
//             <div className="flex items-center mb-4">
//                 <Bell size={24} />
//                 {unreadCount > 0 && (
//                     <span className="ml-2 bg-red-600 text-white text-xs rounded-full px-2">
//                         {unreadCount} non lues
//                     </span>
//                 )}
//             </div>

//             <h2 className="text-xl font-bold mb-4">Mes Notifications</h2>

//             {notifications.length === 0 ? (
//                 <p>Aucune notification.</p>
//             ) : (
//                 <ul>
//                     {notifications.map((notif) => (
//                         <li key={notif.id} className="mb-3 p-3 border rounded shadow">
//                             <div className="flex justify-between items-center">
//                                 <div>
//                                     {!notif.est_lue && (
//                                         <span className="text-red-500 font-bold mr-2">●</span>
//                                     )}
//                                     <span className="font-semibold">{notif.titre}</span>
//                                     <p>{notif.message}</p>
//                                     {notif.lien && (
//                                         <a 
//                                             href={notif.lien}
//                                             className="text-blue-500 hover:underline"
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                         >
//                                             Voir le lien
//                                         </a>
//                                     )}
//                                     <small className="block text-gray-500">
//                                         {new Date(notif.created_at).toLocaleString()}
//                                     </small>
//                                 </div>
//                                 <div className="flex space-x-2">
//                                     {!notif.est_lue && (
//                                         <Link 
//                                             href={route('notifications.markAsRead', notif.id)} 
//                                             method="post" 
//                                             as="button"
//                                             className="text-green-600 hover:underline text-sm"
//                                         >
//                                             Marquer comme lu
//                                         </Link>
//                                     )}
//                                     <Link 
//                                         href={route('notifications.destroy', notif.id)} 
//                                         method="delete" 
//                                         as="button"
//                                         className="text-red-600 hover:underline text-sm"
//                                     >
//                                         Supprimer
//                                     </Link>
//                                 </div>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//         </div>
//         </AppLayout>
//     );
// }


// import React from 'react';
// import { Link, usePage } from '@inertiajs/react';
// import { Bell } from 'lucide-react';
// import AppLayout from '@/Layouts/AppLayout';
// import AgentSidebar from '@/Components/AgentSidebar';
// import AdminSidebar from '@/Components/AdminSidebar';

// export default function Notifications() {
//     const { notifications, auth } = usePage().props;
//     const unreadCount = notifications.filter(n => !n.est_lue).length;
//     const role = auth.user.role;
 
//     const renderSidebar = () => {
//         if (role === 'admin') {
//             return <AdminSidebar />;
//         } else if (role === 'agent_municipal') {
//             return <AgentSidebar />;
//         }
//         return null; // citoyen → no sidebar
//     };

//     return (
//         <AppLayout>
//             <div className="flex min-h-screen bg-gray-50">
//                 {renderSidebar()}

//                 <div className="flex-1 p-4">
//                     <div className="flex items-center mb-4">
//                         <Bell size={24} />
//                         {unreadCount > 0 && (
//                             <span className="ml-2 bg-red-600 text-white text-xs rounded-full px-2">
//                                 {unreadCount} non lues
//                             </span>
//                         )}
//                     </div>

//                     <h2 className="text-xl font-bold mb-4">Mes Notifications</h2>

//                     {notifications.length === 0 ? (
//                         <p>Aucune notification.</p>
//                     ) : (
//                         <ul>
//                             {notifications.map((notif) => (
//                                 <li key={notif.id} className="mb-3 p-3 border rounded shadow">
//                                     <div className="flex justify-between items-center">
//                                         <div>
//                                             {!notif.est_lue && (
//                                                 <span className="text-red-500 font-bold mr-2">●</span>
//                                             )}
//                                             <span className="font-semibold">{notif.titre}</span>
//                                             <p>{notif.message}</p>
//                                             {notif.lien && (
//                                                 <a 
//                                                     href={notif.lien}
//                                                     className="text-blue-500 hover:underline"
//                                                     rel="noopener noreferrer"
//                                                 >
//                                                     Voir le lien
//                                                 </a>
//                                             )}
//                                             <small className="block text-gray-500">
//                                                 {new Date(notif.created_at).toLocaleString()}
//                                             </small>
//                                         </div>
//                                         <div className="flex space-x-2">
//                                             {!notif.est_lue && (
//                                                 <Link 
//                                                     href={route('notifications.markAsRead', notif.id)} 
//                                                     method="post" 
//                                                     as="button"
//                                                     className="text-green-600 hover:underline text-sm"
//                                                 >
//                                                     Marquer comme lu
//                                                 </Link>
//                                             )}
//                                             <Link 
//                                                 href={route('notifications.destroy', notif.id)} 
//                                                 method="delete" 
//                                                 as="button"
//                                                 className="text-red-600 hover:underline text-sm"
//                                             >
//                                                 Supprimer
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </li>
//                             ))}
//                         </ul>
//                     )}
//                 </div>
//             </div>
//         </AppLayout>
//     );
// }




import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Bell } from 'lucide-react';
import AppLayout from '@/Layouts/AppLayout';
import AgentSidebar from '@/Components/AgentSidebar';
import AdminSidebar from '@/Components/AdminSidebar';
import { useTranslation } from 'react-i18next';

export default function Notifications() {
    const { t } = useTranslation();
    const { notifications, auth } = usePage().props;
    const unreadCount = notifications.filter(n => !n.est_lue).length;
    const role = auth.user.role;
 
    const renderSidebar = () => {
        if (role === 'admin') {
            return <AdminSidebar />;
        } else if (role === 'agent_municipal') {
            return <AgentSidebar />;
        }
        return null; // citoyen → no sidebar
    };

    return (
        <AppLayout>
            <div className="flex min-h-screen bg-gray-50">
                {renderSidebar()}

                <div className="flex-1 p-4">
                    <div className="flex items-center mb-4">
                        <Bell size={24} />
                        {unreadCount > 0 && (
                            <span className="ml-2 bg-red-600 text-white text-xs rounded-full px-2">
                                {t('notifications.unread', { count: unreadCount })}
                            </span>
                        )}
                    </div>

                    <h2 className="text-xl font-bold mb-4">{t('notifications.title')}</h2>

                    {notifications.length === 0 ? (
                        <p>{t('notifications.none')}</p>
                    ) : (
                        <ul>
                            {notifications.map((notif) => (
                                <li key={notif.id} className="mb-3 p-3 border rounded shadow">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            {!notif.est_lue && (
                                                <span className="text-red-500 font-bold mr-2">
                                                    {t('notifications.dot')}
                                                </span>
                                            )}
                                            <span className="font-semibold">{notif.titre}</span>
                                            <p>{notif.message}</p>
                                            {notif.lien && (
                                                <a 
                                                    href={notif.lien}
                                                    className="text-blue-500 hover:underline"
                                                    rel="noopener noreferrer"
                                                >
                                                    {t('notifications.view_link')}
                                                </a>
                                            )}
                                            <small className="block text-gray-500">
                                                {new Date(notif.created_at).toLocaleString()}
                                            </small>
                                        </div>
                                        <div className="flex space-x-2">
                                            {!notif.est_lue && (
                                                <Link 
                                                    href={route('notifications.markAsRead', notif.id)} 
                                                    method="post" 
                                                    as="button"
                                                    className="text-green-600 hover:underline text-sm"
                                                >
                                                    {t('notifications.mark_as_read')}
                                                </Link>
                                            )}
                                            <Link 
                                                href={route('notifications.destroy', notif.id)} 
                                                method="delete" 
                                                as="button"
                                                className="text-red-600 hover:underline text-sm"
                                            >
                                                {t('notifications.delete')}
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
