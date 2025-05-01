// import React, { useState } from 'react';
// import { router } from '@inertiajs/react';
// import AppLayout from '@/Layouts/AppLayout';
// import AdminSidebar from '@/Components/AdminSidebar';

// export default function ListSignalements({ signalements, agents }) {
//   const [selectedSignalementId, setSelectedSignalementId] = useState(null);

//   const handleAssign = (agentId, signalementId) => {
//     router.post(`/admin/assign-agent-to-signalement`, {
//       agent_id: agentId,
//       signalement_id: signalementId,
//     }, {
//       preserveScroll: true,
//       onSuccess: () => {
//         alert("Agent assigné avec succès !");
//         setSelectedSignalementId(null); // Masquer le tableau des agents après assignation
//       },
//       onError: () => {
//         alert("Erreur lors de l’assignation.");
//       }
//     });
//   };
//   console.log(signalements);

//   return (
//     <AppLayout>
//       <div className="flex">
//         <AdminSidebar />
//         <div className="p-6">
//           <button
//             onClick={() => router.get('/admin/assignements')}
//             className="mb-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
//           >
//             Voir les Assignements
//           </button>
//           <h1 className="text-2xl font-bold mb-4">Signalements en Attente</h1>

//           <table className="w-full text-center border mb-6">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border p-2">ID</th>
//                 <th className="border p-2">Titre</th>
//                 <th className="border p-2">Catégorie</th>
//                 <th className="border p-2">Statut</th>
//                 <th className="border p-2">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {signalements.map(s => (
//                 <tr key={s.id} className="border">
//                   <td className="p-2">{s.id}</td>
//                   <td className="p-2">{s.titre}</td>
//                   <td className="p-2">{s.categorie.nom}</td>
//                   <td className="p-2">{s.statut}</td>
//                   <td className="p-2">
//                     <button
//                       onClick={() => setSelectedSignalementId(s.id)}
//                       className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
//                     >
//                       Assigner un agent
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {selectedSignalementId && (
//             <div className="mt-4 border p-4 rounded bg-gray-50">
//               <h2 className="text-xl font-semibold mb-2">
//                 Choisir un agent pour le signalement #{selectedSignalementId}
//               </h2>

//               <table className="w-full text-center border">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="border p-2">Nom</th>
//                     <th className="border p-2">Email</th>
//                     <th className="border p-2">Nb. de signalements</th>
//                     <th className="border p-2">Choisir</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {agents.map(agent => (
//                     <tr key={agent.id} className="border">
//                       <td className="p-2">{agent.nom}</td>
//                       <td className="p-2">{agent.email}</td>
//                       <td className="p-2">{agent.signalements_count}</td>
//                       <td className="p-2">
//                         <input
//                           type="checkbox"
//                           onChange={() => handleAssign(agent.id, selectedSignalementId)}
//                         />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </AppLayout>
//   );
// }


import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import AdminSidebar from '@/Components/AdminSidebar';

export default function ListSignalements({ signalements, agents }) {
  const [selectedSignalementId, setSelectedSignalementId] = useState(null);

  const handleAssign = (agentId, signalementId) => {
    router.post(`/admin/assign-agent-to-signalement`, {
      agent_id: agentId,
      signalement_id: signalementId,
    }, {
      preserveScroll: true,
      onSuccess: () => {
        alert("Agent assigné avec succès !");
        setSelectedSignalementId(null);
      },
      onError: () => {
        alert("Erreur lors de l'assignation.");
      }
    });
  };

  return (
    <AppLayout>
      <div className="flex min-h-screen bg-red-50">
        <AdminSidebar />
        
        <div className="flex-1 p-8">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-red-800">
              Gestion des Signalements
              <span className="ml-4 text-red-500 text-xl bg-red-100 px-4 py-1 rounded-full">
                {signalements.length} en attente
              </span>
            </h1>
            <button
              onClick={() => router.get('/admin/assignements')}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Voir les Assignements →
            </button>
          </div>

          {/* Main Table */}
          <div className="bg-white rounded-xl shadow-2xl border-2 border-red-100 overflow-hidden">
            <table className="w-full">
              <thead className="bg-red-800 text-white">
                <tr>
                  <th className="p-4 text-left">ID</th>
                  <th className="p-4 text-left">Titre</th>
                  <th className="p-4 text-left">Catégorie</th>
                  <th className="p-4 text-center">Statut</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-red-100">
                {signalements.map(s => (
                  <tr key={s.id} className="hover:bg-red-50 transition-colors">
                    <td className="p-4 font-mono text-red-600">#{s.id}</td>
                    <td className="p-4 font-semibold">{s.titre}</td>
                    <td className="p-4">
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                        {s.categorie.nom}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="inline-block w-24 py-1 rounded-full bg-red-100 text-red-800">
                        {s.statut}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => setSelectedSignalementId(s.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 mx-auto transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                        Assigner
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Agent Selection Panel */}
          {selectedSignalementId && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white rounded-xl w-3/4 p-8 relative">
                <button 
                  onClick={() => setSelectedSignalementId(null)}
                  className="absolute top-4 right-4 text-red-600 hover:text-red-800"
                >
                  ✕
                </button>
                
                <h2 className="text-2xl font-bold text-red-800 mb-6">
                  Sélection d'agent pour le signalement #{selectedSignalementId}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {agents.map(agent => (
                    <div 
                      key={agent.id}
                      className="border-2 border-red-100 rounded-xl p-6 hover:border-red-300 transition-all cursor-pointer"
                      onClick={() => handleAssign(agent.id, selectedSignalementId)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center">
                            <span className="text-red-600 font-bold">
                              {agent.nom[0]}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-red-800">{agent.nom}</h3>
                          <p className="text-sm text-red-600">{agent.email}</p>
                          <div className="mt-2 flex items-center gap-2">
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                              {agent.signalements_count} missions
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}