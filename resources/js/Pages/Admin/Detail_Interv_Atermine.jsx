// import React from 'react';
// import { router } from '@inertiajs/react';

// export default function DetailSignalement({ signalement, intervention }) {
//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white shadow rounded">
//       <h1 className="text-2xl font-bold mb-6">Détail du Signalement</h1>

//       <div className="mb-4">
//         <h2 className="text-lg font-semibold">📝 Informations du signalement</h2>
//         <p><strong>Titre :</strong> {signalement.titre}</p>
//         <p><strong>Description :</strong> {signalement.description}</p>
//         <p><strong>Statut :</strong> {signalement.statut}</p>
//         {signalement.image && (
//           <img 
//             src={`/storage/${signalement.image}`} 
//             alt="Image du signalement" 
//             className="mt-2 max-w-full h-auto rounded" 
//           />
//         )}
//       </div>

//       <div className="mb-4">
//         <h2 className="text-lg font-semibold">👷 Intervention</h2>
//         <p><strong>Agent :</strong> {intervention.user?.nom}</p>
//         <p><strong>Description action :</strong> {intervention.description_action}</p>
//         <p><strong>Date début :</strong> {intervention.dateDebut}</p>
//         <p><strong>Date fin :</strong> {intervention.dateFin}</p>
//       </div>

//       <button
//         onClick={() => router.get('/admin/interventions-terminees')}
//         className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded"
//       >
//         ⬅️ Retour à la liste
//       </button>
//     </div>
//   );
// }





import React, { useState } from 'react';
import { router } from '@inertiajs/react';

export default function DetailIntervention({ signalement, intervention }) {
  const [zoomImage, setZoomImage] = useState(null);
  // console.log(signalement);
  console.log(intervention);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Détail Intervention vs Signalement</h1>

      {/* Grid en 2 colonnes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Intervention */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">🛠️ Intervention</h2>
          <p><strong>Agent :</strong> {intervention.user.nom}</p>
          <p><strong>Description action :</strong> {intervention.description_action}</p>
          <p><strong>Statut De Solution :</strong> {intervention.resolution_status}</p>
          <p><strong>Date début :</strong> {intervention.dateDebut}</p>
          <p><strong>Date fin :</strong> {intervention.dateFin}</p>
          <div className="mt-3">
            <img
              src={`/storage/${intervention.solution_photo}`}
              className="w-40 h-40 object-cover rounded cursor-pointer"
              onClick={() => setZoomImage(`/storage/${intervention.solution_photo}`)}
              alt="Preuve intervention"
            />
          </div>
        </div>

        {/* Signalement */}
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">📋 Signalement</h2>
          <p><strong>Titre :</strong> {signalement.titre}</p>
          <p><strong>Description :</strong> {signalement.description}</p>
          <p><strong>Signalé par :</strong> {intervention.user.nom}</p>
          <p><strong>Statut :</strong> {signalement.statut}</p>
          <p><strong>Date :</strong> {signalement.created_at}</p>
          <div className="mt-3">
            <img
              src={`/storage/${signalement.image}`}
              className="w-40 h-40 object-cover rounded cursor-pointer"
              onClick={() => setZoomImage(`/storage/${signalement.image}`)}
              alt="Photo signalement"
            />
          </div>
        </div>
      </div>

      {/* Zoom Image */}
      {zoomImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setZoomImage(null)}
        >
          <img src={zoomImage} className="max-w-full max-h-full rounded shadow" alt="Zoom" />
        </div>
      )}

      {/* Bouton Retour */}
      <div className="mt-6 text-center">
        <button
          onClick={() => router.get('/admin/interventions/terminees')}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          ⬅ Annuler et revenir
        </button>
      </div>
    </div>
  );
}
