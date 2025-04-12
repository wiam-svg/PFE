// import React from 'react';


// export default function Index({ signalements }) {
//     return (
//         <div className="p-6 space-y-4">
//             <h1 className="text-2xl font-bold">Tous les signalements</h1>

//             {signalements.length === 0 ? (
//                 <p>Aucun signalement trouvé.</p>
//             ) : (
//                 signalements.map((signalement) => (
//                     <div
//                         key={signalement.id}
//                         className="border rounded-xl p-4 shadow-md bg-white"
//                     >
//                         <h2 className="text-xl font-semibold mb-2">{signalement.titre}</h2>
//                         {signalement.image && (
//                             <img
//                                 src={`/storage/${signalement.image}`}
//                                 alt="Signalement"
//                                 className="w-full max-w-md rounded mb-3"
//                             />
//                         )}
//                         <p><strong>Description:</strong> {signalement.description}</p>
//                         <p><strong>Statut:</strong> {signalement.statut}</p>
//                         <p><strong>Ville:</strong> {signalement.ville}</p>
//                         <p><strong>Adresse:</strong> {signalement.adresse}</p>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// }




// import React, { useState, useEffect } from 'react';
// import { usePage } from '@inertiajs/react';
// import axios from 'axios';

// export default function Index({ signalements }) {
//     const { auth } = usePage().props;
//     const [urgentVotes, setUrgentVotes] = useState({});

//     useEffect(() => {
//         if (signalements && auth.user) {
//             const initialUrgentVotes = {};
//             signalements.forEach(signalement => {
//                 // Vérifie si l'utilisateur actuel a un vote d'urgence (type: true) pour ce signalement
//                 const hasUrgentVote = signalement.votes && signalement.votes.some(vote => vote.user_id === auth.user.id && vote.type === true);
//                 initialUrgentVotes[signalement.id] = hasUrgentVote;
//             });
//             setUrgentVotes(initialUrgentVotes);
//         }
//     }, [signalements, auth.user]);

//     const handleUrgentClick = (signalementId) => {
//         if (urgentVotes[signalementId]) {
//             // Annuler le vote d'urgence (DELETE request)
//             axios.post(`/api/signalements/${signalementId}/unvote-urgent`)
//                 .then(() => {
//                     setUrgentVotes(prevVotes => ({ ...prevVotes, [signalementId]: false }));
//                 })
//                 .catch(error => {
//                     console.error("Erreur lors de l'annulation du vote d'urgence:", error);
//                 });
//         } else {
//             // Marquer comme urgent (POST request)
//             axios.post(`/api/signalements/${signalementId}/vote-urgent`)
//                 .then(() => {
//                     setUrgentVotes(prevVotes => ({ ...prevVotes, [signalementId]: true }));
//                 })
//                 .catch(error => {
//                     console.error("Erreur lors du marquage comme urgent:", error);
//                 });
//         }
//     };

//     return (
//         <div className="p-6 space-y-4">
//             <h1 className="text-2xl font-bold">Tous les signalements</h1>

//             {signalements.length === 0 ? (
//                 <p>Aucun signalement trouvé.</p>
//             ) : (
//                 signalements.map((signalement) => (
//                     <div
//                         key={signalement.id}
//                         className="border rounded-xl p-4 shadow-md bg-white flex items-center justify-between" // Ajout de flex pour aligner le contenu et le bouton
//                     >
//                         <div>
//                             <h2 className="text-xl font-semibold mb-2">{signalement.titre}</h2>
//                             {signalement.image && (
//                                 <img
//                                     src={`/storage/${signalement.image}`}
//                                     alt="Signalement"
//                                     className="w-full max-w-md rounded mb-3"
//                                 />
//                             )}
//                             <p><strong>Description:</strong> {signalement.description}</p>
//                             <p><strong>Statut:</strong> {signalement.statut}</p>
//                             <p><strong>Ville:</strong> {signalement.ville}</p>
//                             <p><strong>Adresse:</strong> {signalement.adresse}</p>
//                         </div>
//                         <button
//                             style={{
//                                 backgroundColor: urgentVotes[signalement.id] ? 'red' : 'orange',
//                                 color: 'white',
//                                 padding: '8px 15px',
//                                 borderRadius: '5px',
//                                 cursor: 'pointer',
//                             }}
//                             onClick={() => handleUrgentClick(signalement.id)}
//                         >
//                             {urgentVotes[signalement.id] ? 'Annuler Urgent' : 'Urgent'}
//                         </button>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// }




import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import axios from 'axios';
import SignalementItem from './SignalementItem';


 

export default function Index({ signalements }) {
    const { auth } = usePage().props;

    console.log(signalements)


    // const handleUrgentClick = (signalementId) => {
    //     if (urgentVotes[signalementId]) {
    //         axios.delete(`/api/signalements/${signalementId}/unvote-urgent`)
    //             .then(() => {
    //                 setUrgentVotes(prevVotes => ({ ...prevVotes, [signalementId]: false }));
    //             })
    //             .catch(error => {
    //                 console.error("Erreur lors de l'annulation du vote d'urgence:", error);
    //             });
    //     } else {
    //         axios.post(`/api/signalements/${signalementId}/vote-urgent`)
    //             .then(() => {
    //                 setUrgentVotes(prevVotes => ({ ...prevVotes, [signalementId]: true }));
    //             })
    //             .catch(error => {
    //                 console.error("Erreur lors du marquage comme urgent:", error);
    //             });
    //     }
    // };

    return (
        <div className="p-6 space-y-4">
            <h1 className="text-2xl font-bold">Tous les signalements</h1>

            {signalements.length === 0 ? (
                <p>Aucun signalement trouvé.</p>
            ) : (
                signalements.map((signalement) => (
                    <SignalementItem
                        key={signalement.id}
                        signalement={signalement}
                    />
                ))
            )}
        </div>
    );
}















// import { usePage } from '@inertiajs/react';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const ListSignalements = ({ signalements }) => {
//     const {votes}= usePage().props;
//     console.log(props);
//   const [signalementUrgent, setSignalementUrgent] = useState(null);

// //   useEffect(()=>{
// //     checkUrgent
// //   },[votes]);
// //    const checkUrgent = (id)=>{
// //     const check=votes.map(elem=>elem.signalement.id===id);
// //     if (check){
// //         setSignalementUrgent(true);
// //     }
// //    }

   

//   const handleUrgentClick = async (id) => {
//     // Mettre à jour l'état localement
//     setSignalementUrgent(id);
    

//     // Envoyer la requête à Laravel pour marquer comme urgent
//     const response = await axios.post(`signalements/${id}/urgent`);
//     console.log(response);

//     // if (response.ok) {
//     //   console.log('Signalement marqué comme urgent');
//     // } else {
//     //   console.error('Erreur lors de la mise à jour du signalement');
//     // }
//   };

//   return (
//     <div>
//       <h1>Liste des Signalements</h1>
//       <div className="grid grid-cols-3 gap-4">
//         {signalements.map((signalement) => (
//           <div key={signalement.id} className="border p-4 rounded">
//             <img
//              src={`/storage/signalements/${signalement.photo}`}
//              alt="Signalement"
//              className="w-full h-48 object-cover mb-4"
//             />

//             <p>{signalement.description}</p>
//             <p>Status: {signalement.status}</p>
//             <button
//               onClick={() => handleUrgentClick(signalement.id)}
//               className={`py-2 px-4 rounded ${
//                 signalementUrgent === signalement.id ? 'bg-red-500' : 'bg-orange-500'
//               } text-white`}
//             >
//               Urgent
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ListSignalements;
