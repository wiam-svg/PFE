// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { Head } from '@inertiajs/react';
// import DeleteUserForm from './Partials/DeleteUserForm';
// import UpdatePasswordForm from './Partials/UpdatePasswordForm';
// import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
// import AppLayout from '@/Layouts/AppLayout';
// import AdminSidebar from '@/Components/AdminSidebar';

// export default function Edit({ mustVerifyEmail, status }) {
//     return (
//         // <AuthenticatedLayout
//         //     header={
//         //         <h2 className="text-xl font-semibold leading-tight text-gray-800">
//         //             Profile
//         //         </h2>
//         //     }
//         // >
//         //     <Head title="Profile" />
//         <AppLayout>
//         <div className="flex min-h-screen bg-gray-50">
//           <AdminSidebar />

//                 <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
//                     <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
//                         <UpdateProfileInformationForm
//                             mustVerifyEmail={mustVerifyEmail}
//                             status={status}
//                             className="max-w-xl"
//                         />
//                     </div>

//                     <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
//                         <UpdatePasswordForm className="max-w-xl" />
//                     </div>

//                     <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
//                         <DeleteUserForm className="max-w-xl" />
//                     </div>
//                 </div>
      
//         </div>
//         </AppLayout>
//     );
// }

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import AppLayout from '@/Layouts/AppLayout';
import AdminSidebar from '@/Components/AdminSidebar';
import AgentSidebar from '@/Components/AgentSidebar';

export default function Edit({ mustVerifyEmail, status }) {
    const { auth } = usePage().props;
    const role = auth.user.role;
    console.log(role);

    return (
        <AppLayout>
            <div className="flex min-h-screen bg-gray-50">
                {/* Affiche la bonne sidebar selon le rôle */}
                {role === 'admin' && <AdminSidebar />}
                {role === 'agent_municipal' && <AgentSidebar />}

                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
