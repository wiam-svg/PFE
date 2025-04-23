// import React from 'react';
// import { usePage, Link, useForm, router } from '@inertiajs/react';
// import { Menu, Transition } from '@headlessui/react';
// import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
// import axios from 'axios';

// const MesSignalements = () => {
// const {post} =useForm();
//   const { signalements } = usePage().props;
//   console.log(signalements);

//   const handleStatutChange = (event, signalementId) => {
//     const value = event.target;
  

//     // Appel backend pour mettre à jour le statut
//      router.post(route('update.etat.intervention'),{
//       intervention:signalementId,
//       etat:value.value
//      });
//     // Exemple: Inertia.put(`/signalements/${signalementId}`, { resolution_status: newStatut });
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-semibold mb-4">Signalements</h1>
//       {signalements.length > 0 ? (
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-md">
//             <thead className="bg-gray-50">
//               <tr>
//                 {['Titre', 'Catégorie', 'Téléphone', 'Email', 'Statut', 'Actions'].map((header) => (
//                   <th
//                     key={header}
//                     className={`px-6 py-3 text-xs font-medium uppercase tracking-wider ${
//                       header === 'Actions' ? 'text-right' : 'text-left'
//                     } text-gray-500`}
//                   >
//                     {header}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {signalements.map((s) => (
//                 <tr key={s.id}>
//                   <td className="px-6 py-4 text-sm text-gray-900">{s.signalement.titre}</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">{s.signalement.categorie.nom}</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">{s.user?.telephone ?? 'N/A'}</td>
//                   <td className="px-6 py-4 text-sm text-gray-900">{s.user?.email ?? 'N/A'}</td>
//                   <td className="px-6 py-4">
//                     <select
//                       value={s.resolution_status}
//                       onChange={(e) => handleStatutChange(e, s.id)}
//                       className="w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     >
//                       <option value="en cours">En cours</option>
//                       <option value="resolu">Terminer l'action</option>
//                       <option value="ferme">Fermé</option>
//                     </select>
//                   </td>
//                   <td className="px-6 py-4 text-sm text-right">
//                     <Menu as="div" className="relative inline-block text-left">
//                       <div>
//                         <Menu.Button className="inline-flex items-center px-4 py-2 bg-white text-sm font-medium text-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
//                           <EllipsisVerticalIcon className="ml-2 h-5 w-5" aria-hidden="true" />
//                         </Menu.Button>
//                       </div>

//                       <Transition
//                         as={React.Fragment}
//                         enter="transition ease-out duration-100"
//                         enterFrom="transform opacity-0 scale-95"
//                         enterTo="transform opacity-100 scale-100"
//                         leave="transition ease-in duration-75"
//                         leaveFrom="transform opacity-100 scale-100"
//                         leaveTo="transform opacity-0 scale-95"
//                       >
//                         <Menu.Items
//                           static
//                           className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
//                         >
//                           <div className="py-1">
//                             <Menu.Item>
//                               {({ active }) => (
//                                 <Link
//                                   href={`/signalements/${s.id}`}
//                                   className={`${
//                                     active ? 'bg-gray-100' : ''
//                                   } block px-4 py-2 text-sm text-gray-700`}
//                                 >
//                                   Voir les détails
//                                 </Link>
//                               )}
//                             </Menu.Item>
//                             <Menu.Item>
//                               {({ active }) => (
//                                 <Link
//                                   href={`/signalements/${s.id}/edit`}
//                                   className={`${
//                                     active ? 'bg-gray-100' : ''
//                                   } block px-4 py-2 text-sm text-gray-700`}
//                                 >
//                                   Mettre à jour
//                                 </Link>
//                               )}
//                             </Menu.Item>
//                             <Menu.Item>
//                               {({ active }) => (
//                                 <Link
//                                   href={`/interventions/planifier/${s.id}`}
//                                   className={`${
//                                     active ? 'bg-gray-100' : ''
//                                   } block px-4 py-2 text-sm text-gray-700`}
//                                 >
//                                   Planifier une intervention
//                                 </Link>
//                               )}
//                             </Menu.Item>
//                             <Menu.Item>
//                               {({ active }) => (
//                                 <Link
//                                   href={`/signalements/${s.id}/transfer`}
//                                   className={`${
//                                     active ? 'bg-gray-100' : ''
//                                   } block px-4 py-2 text-sm text-gray-700`}
//                                 >
//                                   Transférer à un autre agent
//                                 </Link>
//                               )}
//                             </Menu.Item>
//                           </div>
//                         </Menu.Items>
//                       </Transition>
//                     </Menu>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <p className="text-gray-600">Aucun signalement trouvé.</p>
//       )}
//     </div>
//   );
// };

// export default MesSignalements;

import React, { useState } from 'react';
import { router } from '@inertiajs/react';

export default function MesSignalements({ signalements }) {
  const [selected, setSelected] = useState(null);
  console.log(signalements);


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Mes Signalements Assignés</h1>

      <table className="w-full text-left border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Titre</th>
            <th>Description</th>
            <th>Catégorie</th>
            <th>Adresse</th>
            <th>Statut</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {signalements.map((s) => (
            <tr key={s.id} className="border-b">
              <td className="p-2">{s.signalement.titre}</td>
              <td>{s.signalement.description}</td>
              <td>{s.signalement.categorie?.nom}</td>
              <td>{s.signalement.adresse}</td>
              <td>{s.resolution_status}</td>
              <td>
                <div className="relative">
                  <button
                    onClick={() => setSelected(selected === s.id ? null : s.id)}
                    className="text-gray-600 hover:text-black"
                  >
                    ⋮
                  </button>

                  {selected === s.id && (
                    <div className="absolute right-0 mt-1 w-40 bg-white shadow border rounded z-10">
                      <button 
                      onClick={() => 
                        router.get(`/agent/signalement/${s.signalement.id}/details`)
                      }
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                        Voir les détails
                      </button>
                      <button
                        onClick={() =>{
                          console.log('Bouton cliqué pour ID:', s.id);
                          router.get(`/agent/intervention/${s.id}/editStatut`)}
                        }
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Marquer comme terminé
                      </button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
