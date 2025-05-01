// import { router } from '@inertiajs/react';
// import { useState } from 'react';
// import AppLayout from '@/Layouts/AppLayout';
// import AdminSidebar from '@/Components/AdminSidebar';

// export default function EditAssignement({ intervention, agents, signalements }) {
//   const [userId, setUserId] = useState(intervention.user_id || '');
//   const [signalementId, setSignalementId] = useState(intervention.signalement_id || '');
//   // console.log("Agents:", agents);


//   const handleSubmit = (e) => {
//     e.preventDefault(); // important !

//     router.post(`/admin/assignements/${intervention.id}`, {
//       user_id: userId,
//       signalement_id: signalementId,
//     }, {
//       onSuccess: () => {
//         alert('Assignement mis à jour avec succès');
//       },
//       onError: (errors) => {
//         console.error(errors);
//         alert('Erreur lors de la mise à jour');
//       }
//     });
//   };

//   return (
//     <AppLayout>
//        <div className="flex">
//         <AdminSidebar/>
//     <div>
//       <h2>Modifier l'assignement</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Agent :</label>
//         <select value={userId} onChange={e => setUserId(e.target.value)}
//           className="border p-2 rounded w-full">
//           <option value="">-- Choisir un agent --</option>
//           {agents.map(agent => (
//             <option key={agent.id} value={agent.id}>{agent.name}
//             {agent.prenom} {agent.email}</option>
//           ))}
//         </select>

//         <label>Signalement :</label>
//         <select value={signalementId} onChange={e => setSignalementId(e.target.value)}>
//           <option value="">Choisir un signalement</option>
//           {signalements.map(sig => (
//             <option key={sig.id} value={sig.id}>{sig.description}</option>
//           ))}
//         </select>

//         <button type="submit"
//         onClick={handleSubmit}>Mettre à jour</button>
//       </form>
//     </div>
//     </div>
//     </AppLayout>
//   );
// }


import { router } from '@inertiajs/react';
import { useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import AdminSidebar from '@/Components/AdminSidebar';

export default function EditAssignement({ intervention, agents, signalements }) {
  const [userId, setUserId] = useState(intervention.user_id || '');
  const [signalementId, setSignalementId] = useState(intervention.signalement_id || '');

  const handleSubmit = (e) => {
    e.preventDefault();

    router.post(`/admin/assignements/${intervention.id}`, {
      user_id: userId,
      signalement_id: signalementId,
    }, {
      onSuccess: () => alert('Assignement mis à jour avec succès'),
      onError: () => alert('Erreur lors de la mise à jour'),
    });
  };

  return (
    <AppLayout>
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 p-8 bg-white shadow rounded-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-6 border-b pb-2">Modifier l'assignement</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Agent select */}
            <div>
              <label className="block mb-2 text-sm font-medium text-black">Agent :</label>
              <select
                value={userId}
                onChange={e => setUserId(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">-- Choisir un agent --</option>
                {agents.map(agent => (
                  <option key={agent.id} value={agent.id}>
                    {agent.name} {agent.prenom} ({agent.email})
                  </option>
                ))}
              </select>
            </div>

            {/* Signalement select */}
            <div>
              <label className="block mb-2 text-sm font-medium text-black">Signalement :</label>
              <select
                value={signalementId}
                onChange={e => setSignalementId(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">-- Choisir un signalement --</option>
                {signalements.map(sig => (
                  <option key={sig.id} value={sig.id}>{sig.description}</option>
                ))}
              </select>
            </div>

            {/* Submit button */}
            <div className="text-right">
              <button
                type="submit"
                className="px-6 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition"
              >
                Mettre à jour
              </button>
            </div>
          </form>
        </div>
      </div>
    </AppLayout>
  );
}
