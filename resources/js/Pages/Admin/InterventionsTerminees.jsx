
// import React, { useState } from 'react';
// import { router } from '@inertiajs/react';
// import AppLayout from '@/Layouts/AppLayout';
// import AdminSidebar from '@/Components/AdminSidebar';

// export default function InterventionsTerminees({ interventions }) {
//   const [selected, setSelected] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [commentaire, setCommentaire] = useState('');
//   const [rejectionId, setRejectionId] = useState(null);
//    console.log(interventions);
//   const handleAction = (id, action) => {
//     if (action === 'valider') {
//       router.post(`/admin/intervention/${id}/valider`);
//     } else if (action === 'rejeter') {
//       setShowModal(true);
//       setRejectionId(id);
//     } else if (action === 'detail') {
//       router.get(`/admin/intervention/${id}/detail_I_Atermine`);
//     }
//   };

//   const handleRejectionSubmit = () => {
//     router.post(`/admin/intervention/${rejectionId}/rejeter`, { commentaire_admin: commentaire }, {
//       onSuccess: () => {
//         setShowModal(false);
//         setCommentaire('');
//         setRejectionId(null);
//       }
//     });
//   };

//   return (
//     <AppLayout>
//        <div className="flex">
//         <AdminSidebar/>
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Interventions Terminées à Valider</h1>

//       <table className="w-full border text-left">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="p-2">Titre</th>
//             <th>Agent</th>
//             <th>Description</th>
//             <th>Date Début</th>
//             <th>Date Fin</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {interventions.map((i) => (
//             <tr key={i.id} className="border-b">
//               <td className="p-2">{i.signalement?.titre}</td>
//               <td>{i.user?.nom}</td>
//               <td>{i.description_action}</td>
//               <td>{i.dateDebut}</td>
//               <td>{i.dateFin}</td>
//               <td>
//                 <div className="relative">
//                   <button
//                     onClick={() => setSelected(selected === i.id ? null : i.id)}
//                     className="text-gray-600 hover:text-black"
//                   >
//                     ⋮
//                   </button>

//                   {selected === i.id && (
//                     <div className="absolute right-0 mt-1 w-40 bg-white shadow border rounded z-10">
//                       <button
//                         onClick={() => handleAction(i.id, 'detail')}
//                         className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                       >
//                         Voir les détails
//                       </button>
//                       <button
//                         onClick={() => handleAction(i.id, 'valider')}
//                         className="block w-full text-left px-4 py-2 hover:bg-green-100"
//                       >
//                         Valider
//                       </button>
//                       <button
//                         onClick={() => handleAction(i.id, 'rejeter')}
//                         className="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
//                       >
//                         Rejeter
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* MODALE POUR REJET */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h2 className="text-lg font-semibold mb-4">Commentaire de rejet</h2>
//             <textarea
//               value={commentaire}
//               onChange={(e) => setCommentaire(e.target.value)}
//               className="w-full p-2 border rounded mb-4"
//               rows="4"
//               placeholder="Pourquoi cette intervention est rejetée ?"
//             />
//             <div className="flex justify-end gap-2">
//               <button
//                 onClick={() => {
//                   setShowModal(false);
//                   setCommentaire('');
//                 }}
//                 className="px-4 py-2 bg-gray-300 rounded"
//               >
//                 Annuler
//               </button>
//               <button
//                 onClick={handleRejectionSubmit}
//                 className="px-4 py-2 bg-red-600 text-white rounded"
//               >
//                 Rejeter
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//     </div>
//     </AppLayout>
//   );
// }

import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import AdminSidebar from '@/Components/AdminSidebar';

export default function InterventionsTerminees({ interventions }) {
  const [showModal, setShowModal] = useState(false);
  const [commentaire, setCommentaire] = useState('');
  const [rejectionId, setRejectionId] = useState(null);
  console.log(interventions);

  const handleAction = (id, action) => {
    if (action === 'valider') {
      router.post(`/admin/intervention/${id}/valider`);
    } else if (action === 'rejeter') {
      setShowModal(true);
      setRejectionId(id);
    } else if (action === 'detail') {
      router.get(`/admin/intervention/${id}/detail_I_Atermine`);
    }
  };

  const handleRejectionSubmit = () => {
    router.post(`/admin/intervention/${rejectionId}/rejeter`, {
      commentaire_admin: commentaire,
    }, {
      onSuccess: () => {
        setShowModal(false);
        setCommentaire('');
        setRejectionId(null);
      }
    });
  };

  return (
    <AppLayout>
      <div className="flex">
        <AdminSidebar />
        <div className="w-full p-8 bg-gray-50 min-h-screen">
          <h1 className="text-3xl font-bold text-red-800 mb-8">Interventions Terminées à Valider</h1>

          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full table-auto text-sm">
              <thead className="bg-red-800 text-white uppercase text-left">
                <tr>
                  <th className="px-6 py-3">Titre</th>
                  <th className="px-6 py-3">Agent</th>
                  <th className="px-6 py-3">Description</th>
                  <th className="px-6 py-3">Date Début</th>
                  <th className="px-6 py-3">Date Fin</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {interventions.map((i) => (
                  <tr key={i.id} className="border-b hover:bg-gray-100">
                    <td className="px-6 py-4">{i.signalement?.titre}</td>
                    <td className="px-6 py-4">{i.user?.nom}</td>
                    <td className="px-6 py-4">{i.description_action}</td>
                    <td className="px-6 py-4">{i.dateDebut}</td>
                    <td className="px-6 py-4">{i.dateFin}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => handleAction(i.id, 'detail')}
                          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded transition"
                        >
                          Détails
                        </button>
                        <button
                          onClick={() => handleAction(i.id, 'valider')}
                          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition"
                        >
                          Valider
                        </button>
                        <button
                          onClick={() => handleAction(i.id, 'rejeter')}
                          className="px-4 py-2 bg-red-800 hover:bg-red-900 text-white rounded transition"
                        >
                          Rejeter
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Modal de Rejet */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold text-red-800 mb-4">Commentaire de rejet</h2>
                <textarea
                  value={commentaire}
                  onChange={(e) => setCommentaire(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-red-800"
                  rows="4"
                  placeholder="Pourquoi cette intervention est rejetée ?"
                />
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => {
                      setShowModal(false);
                      setCommentaire('');
                    }}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                  >
                    Annuler
                  </button>
                  <button
                    onClick={handleRejectionSubmit}
                    className="px-4 py-2 bg-red-800 text-white rounded hover:bg-red-900"
                  >
                    Rejeter
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
