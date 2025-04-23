// import React from 'react';
// import { router } from '@inertiajs/react';

// export default function InterventionsTerminees({ interventions }) {
//   const handleValidation = (id, type) => {
//     if (type === 'valider') {
//       router.post(`/admin/intervention/${id}/valider`);
//     } else {
//       router.post(`/admin/intervention/${id}/rejeter`);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Interventions à Valider</h1>

//       {interventions.length === 0 ? (
//         <p className="text-gray-600">Aucune intervention terminée à valider.</p>
//       ) : (
//         <table className="w-full border text-left">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-2">Signalement</th>
//               <th>Description action</th>
//               <th>Date début</th>
//               <th>Date fin</th>
//               <th>Photo</th>
//               <th>Agent</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {interventions.map((i) => (
//               <tr key={i.id} className="border-b">
//                 <td className="p-2 font-semibold">{i.signalement?.titre}</td>
//                 <td>{i.description_action}</td>
//                 <td>{i.dateDebut}</td>
//                 <td>{i.dateFin || 'Non spécifiée'}</td>
//                 <td>
//                   {i.solution_photo ? (
//                     <img
//                       src={`/storage/${i.solution_photo}`}
//                       alt="solution"
//                       className="w-20 h-20 object-cover rounded"
//                     />
//                   ) : (
//                     'Pas d’image'
//                   )}
//                 </td>
//                 <td>{i.user?.name}</td>
//                 <td className="space-x-2">
//                   <button
//                     onClick={() => handleValidation(i.id, 'valider')}
//                     className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
//                   >
//                     ✅ Valider
//                   </button>
//                   <button
//                     onClick={() => handleValidation(i.id, 'rejeter')}
//                     className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                   >
//                     ❌ Rejeter
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import { router } from '@inertiajs/react';

// export default function InterventionsTerminees({ interventions }) {
//   const [selected, setSelected] = useState(null);
//   const [commentaire, setCommentaire] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   console.log(interventions);

//   const handleAction = (id, action) => {
//     if (action === 'valider') {
//       router.post(`/admin/intervention/${id}/valider`);
//     } else if (action === 'rejeter') {
//       router.post(`/admin/intervention/${id}/rejeter`);
//     } else if (action === 'detail') {
//       router.get(`/admin/intervention/${id}`);
//     }
//   };

//   return (
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
//                         className="block w-full text-left px-4 py-2 hover:bg-red-100"
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
//     </div>
//   );
// }


import React, { useState } from 'react';
import { router } from '@inertiajs/react';

export default function InterventionsTerminees({ interventions }) {
  const [selected, setSelected] = useState(null);
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
    router.post(`/admin/intervention/${rejectionId}/rejeter`, { commentaire_admin: commentaire }, {
      onSuccess: () => {
        setShowModal(false);
        setCommentaire('');
        setRejectionId(null);
      }
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Interventions Terminées à Valider</h1>

      <table className="w-full border text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Titre</th>
            <th>Agent</th>
            <th>Description</th>
            <th>Date Début</th>
            <th>Date Fin</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {interventions.map((i) => (
            <tr key={i.id} className="border-b">
              <td className="p-2">{i.signalement?.titre}</td>
              <td>{i.user?.nom}</td>
              <td>{i.description_action}</td>
              <td>{i.dateDebut}</td>
              <td>{i.dateFin}</td>
              <td>
                <div className="relative">
                  <button
                    onClick={() => setSelected(selected === i.id ? null : i.id)}
                    className="text-gray-600 hover:text-black"
                  >
                    ⋮
                  </button>

                  {selected === i.id && (
                    <div className="absolute right-0 mt-1 w-40 bg-white shadow border rounded z-10">
                      <button
                        onClick={() => handleAction(i.id, 'detail')}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Voir les détails
                      </button>
                      <button
                        onClick={() => handleAction(i.id, 'valider')}
                        className="block w-full text-left px-4 py-2 hover:bg-green-100"
                      >
                        Valider
                      </button>
                      <button
                        onClick={() => handleAction(i.id, 'rejeter')}
                        className="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
                      >
                        Rejeter
                      </button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODALE POUR REJET */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Commentaire de rejet</h2>
            <textarea
              value={commentaire}
              onChange={(e) => setCommentaire(e.target.value)}
              className="w-full p-2 border rounded mb-4"
              rows="4"
              placeholder="Pourquoi cette intervention est rejetée ?"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setShowModal(false);
                  setCommentaire('');
                }}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Annuler
              </button>
              <button
                onClick={handleRejectionSubmit}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Rejeter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
