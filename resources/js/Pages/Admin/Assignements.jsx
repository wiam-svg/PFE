// import React, { useState } from 'react';
// import { router } from '@inertiajs/react';
// import AppLayout from '@/Layouts/AppLayout';
// import AdminSidebar from '@/Components/AdminSidebar';

// export default function Assignements({ interventions }) {
//   const [openMenuId, setOpenMenuId] = useState(null);

//   const handleDelete = (id) => {
//     if (confirm("Supprimer cet assignement ?")) {
//       router.delete(`/admin/assignements/${id}`);
//     }
//   };

//   const handleEdit = (id) => {
//     router.get(`/admin/assignements/${id}/edit`)
//     alert(`Redirection vers la page de modification pour l'intervention ID: ${id}`);
//   };

//   return (
//     <AppLayout>
//        <div className="flex">
//         <AdminSidebar/>
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Liste des Assignements</h1>
//       <table className="w-full border">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="border p-2">ID</th>
//             <th className="border p-2">Signalement</th>
//             <th className="border p-2">Agent</th>
//             <th className="border p-2">Statut</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {interventions.map(intervention => (
//             <tr key={intervention.id} className="border hover:bg-gray-50">
//               <td className="p-2">{intervention.id}</td>
//               <td className="p-2">{intervention.signalement?.titre}</td>
//               <td className="p-2">{intervention.user?.nom} ({intervention.user?.email})</td>
//               <td className="p-2">
//                 <span className={`px-2 py-1 rounded text-white text-sm
//                   ${intervention.resolution_status === 'terminé' ? 'bg-green-600' : 'bg-orange-500'}`}>
//                   {intervention.resolution_status}
//                 </span>
//               </td>
//               <td className="p-2 relative">
//                 <button
//                   onClick={() => setOpenMenuId(openMenuId === intervention.id ? null : intervention.id)}
//                   className="text-xl font-bold text-gray-600 hover:text-black"
//                 >
//                   ⋮
//                 </button>
//                 {openMenuId === intervention.id && (
//                   <div className="absolute right-0 mt-2 w-32 bg-white border shadow-lg rounded z-10">
//                     <button
//                       onClick={() => handleEdit(intervention.id)}
//                       className="block px-4 py-2 w-full text-left hover:bg-gray-100"
//                     >
//                       Modifier
//                     </button>
//                     <button
//                       onClick={() => handleDelete(intervention.id)}
//                       className="block px-4 py-2 w-full text-left text-red-600 hover:bg-red-100"
//                     >
//                       Supprimer
//                     </button>
//                   </div>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </div>
//     </AppLayout>
//   );
// }



import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import AdminSidebar from '@/Components/AdminSidebar';

export default function Assignements({ interventions }) {
  const [openMenuId, setOpenMenuId] = useState(null);

  const handleDelete = (id) => {
    if (confirm("Supprimer cet assignement ?")) {
      router.delete(`/admin/assignements/${id}`);
    }
  };

  const handleEdit = (id) => {
    router.get(`/admin/assignements/${id}/edit`);
  };

  return (
    <AppLayout>
      <div className="flex min-h-screen bg-red-50">
        <AdminSidebar />

        <div className="flex-1 p-8">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-red-800">
              Assignements en Cours
              <span className="ml-4 text-red-500 text-xl bg-red-100 px-4 py-1 rounded-full">
                {interventions.length} actifs
              </span>
            </h1>
          </div>

          {/* Main Table */}
          <div className="bg-white rounded-xl shadow-2xl border-2 border-red-100 overflow-hidden">
            <table className="w-full">
              <thead className="bg-red-800 text-white">
                <tr>
                  <th className="p-4 text-left">ID</th>
                  <th className="p-4 text-left">Signalement</th>
                  <th className="p-4 text-left">Agent</th>
                  <th className="p-4 text-center">Statut</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-red-100">
                {interventions.map(intervention => (
                  <tr
                    key={intervention.id}
                    className="hover:bg-red-50 transition-colors group"
                  >
                    <td className="p-4 font-mono text-red-600">#{intervention.id}</td>
                    <td className="p-4 font-semibold">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-600">📌</span>
                        </div>
                        {intervention.signalement?.titre}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-600 font-bold">
                            {intervention.user?.nom[0]}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold">{intervention.user?.nom}</p>
                          <p className="text-sm text-red-600">{intervention.user?.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`inline-block w-32 py-2 rounded-full text-sm font-bold
                        ${intervention.resolution_status === 'terminé'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'}`}>
                        {intervention.resolution_status}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-3">
                        <button
                          onClick={() => handleEdit(intervention.id)}
                          className="px-3 py-1 bg-yellow-100 text-yellow-800 font-semibold text-sm rounded-lg hover:bg-yellow-200 transition"
                        >
                          Modifier
                        </button>
                        <button
                          onClick={() => handleDelete(intervention.id)}
                          className="px-3 py-1 bg-red-100 text-red-800 font-semibold text-sm rounded-lg hover:bg-red-200 transition"
                        >
                          Supprimer
                        </button>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}