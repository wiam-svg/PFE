


// import React, { useState } from 'react';
// import { router } from '@inertiajs/react';
// import AppLayout from '@/Layouts/AppLayout';
// import AdminSidebar from '@/Components/AdminSidebar';

// export default function ListSignalements({ signalements, agents }) {
//   const [selectedSignalementId, setSelectedSignalementId] = useState(null);
//   const [search, setSearch] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');
//   const [selectedCategorie, setSelectedCategorie] = useState('');





//   const filteredSignalements = signalements.filter((signalement) => {
//     const matchCity = selectedCity ? signalement.ville === selectedCity : true;
//     const matchCategorie = selectedCategorie ? signalement.categorie.nom === selectedCategorie : true;
//     const matchSearch =
//       signalement.titre.toLowerCase().includes(search.toLowerCase()) ||
//       signalement.ville.toLowerCase().includes(search.toLowerCase());

//     return matchCity && matchCategorie && matchSearch;
//   });

//   const handleAssign = (agentId, signalementId) => {
//     router.post(`/admin/assign-agent-to-signalement`, {
//       agent_id: agentId,
//       signalement_id: signalementId,
//     }, {
//       preserveScroll: true,
//       onSuccess: () => {
//         alert("Agent assigné avec succès !");
//         setSelectedSignalementId(null);
//       },
//       onError: () => {
//         alert("Erreur lors de l'assignation.");
//       }
//     });
//   };
//   const cities = [...new Set(signalements.map((signalement) => signalement.ville))];
//   const categorie = [...new Set(signalements.map((signalement) => signalement.categorie.nom))];
//   return (
//     <AppLayout>
//       <div className="flex min-h-screen bg-red-50">
//         <AdminSidebar />

//         <div className="flex-1 p-8">
//           {/* Header Section */}
//           <div className="flex justify-between items-center mb-8">
//             <h1 className="text-3xl font-bold text-red-800">
//               Gestion des Signalements
//               <span className="ml-4 text-red-500 text-xl bg-red-100 px-4 py-1 rounded-full">
//                 {signalements.length} en attente
//               </span>
//             </h1>
//             <button
//               onClick={() => router.get('/admin/assignements')}
//               className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
//             >
//               Voir les Assignements →
//             </button>
//           </div>
//           <div className="flex gap-4">
//                 <input
//                   type="text"
//                   placeholder="Rechercher par nom ou email..." 
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   className="px-4 py-2 border rounded-md w-1/3 text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300" 
//                 />
//                 <select
//                   value={selectedCity}
//                   onChange={(e) => setSelectedCity(e.target.value)}
//                   className="px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
//                 >
//                   <option value="">Filtrer par ville</option>
//                   {cities.map((city) => (
//                     <option key={city} value={city}>{city}</option>
//                   ))}
//                 </select>
//                 <select
//                   value={selectedCategorie}
//                   onChange={(e) => setSelectedCategorie(e.target.value)}
//                   className="px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300" 
//                 >
//                   <option value="">Filtrer par categorie</option>
//                   {categorie.map((categorie) => (
//                     <option key={categorie} value={categorie}>{categorie}</option>
//                   ))}
//                 </select>
//           </div>

//           {/* Main Table */}
//           <div className="bg-white rounded-xl shadow-2xl border-2 border-red-100 overflow-hidden">
//             <table className="w-full">
//               <thead className="bg-red-800 text-white">
//                 <tr>
//                   <th className="p-4 text-left">ID</th>
//                   <th className="p-4 text-left">Titre</th>
//                   <th className="p-4 text-left">Catégorie</th>
//                   <th className="p-4 text-center">Statut</th>
//                   <th className="p-4 text-center">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-red-100">
//                 {filteredSignalements.map(s => (
//                   <tr key={s.id} className="hover:bg-red-50 transition-colors">
//                     <td className="p-4 font-mono text-red-600">#{s.id}</td>
//                     <td className="p-4 font-semibold">{s.titre}</td>
//                     <td className="p-4">
//                       <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
//                         {s.categorie.nom}
//                       </span>
//                     </td>
//                     <td className="p-4 text-center">
//                       <span className="inline-block w-24 py-1 rounded-full bg-red-100 text-red-800">
//                         {s.statut}
//                       </span>
//                     </td>
//                     <td className="p-4 text-center">
//                       <button
//                         onClick={() => setSelectedSignalementId(s.id)}
//                         className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 mx-auto transition-colors"
//                       >
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                           <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
//                         </svg>
//                         Assigner
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Agent Selection Panel */}
//           {selectedSignalementId && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//               <div className="bg-white rounded-xl w-3/4 p-8 relative">
//                 <button
//                   onClick={() => setSelectedSignalementId(null)}
//                   className="absolute top-4 right-4 text-red-600 hover:text-red-800"
//                 >
//                   ✕
//                 </button>

//                 <h2 className="text-2xl font-bold text-red-800 mb-6">
//                   Sélection d'agent pour le signalement #{selectedSignalementId}
//                 </h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {agents.map(agent => (
//                     <div
//                       key={agent.id}
//                       className="border-2 border-red-100 rounded-xl p-6 hover:border-red-300 transition-all cursor-pointer"
//                       onClick={() => handleAssign(agent.id, selectedSignalementId)}
//                     >
//                       <div className="flex items-center gap-4">
//                         <div className="flex-shrink-0">
//                           <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center">
//                             <span className="text-red-600 font-bold">
//                               {agent.nom[0]}
//                             </span>
//                           </div>
//                         </div>
//                         <div className="flex-1">
//                           <h3 className="font-bold text-red-800">{agent.nom}</h3>
//                           <p className="text-sm text-red-600">{agent.email}</p>
//                           <div className="mt-2 flex items-center gap-2">
//                             <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
//                               {agent.signalements_count} missions
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </AppLayout>
//   );
// }
// import React, { useState, useEffect,useRef } from 'react';
// import { router } from '@inertiajs/react';
// import AppLayout from '@/Layouts/AppLayout';
// import AdminSidebar from '@/Components/AdminSidebar';
// import { Search, Filter, Users, X, CheckCircle, MapPin, Tag } from 'lucide-react';

// export default function ListSignalements({ signalements, agents }) {
//   const [selectedSignalementId, setSelectedSignalementId] = useState(null);
//   const [search, setSearch] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');
//   const [selectedCategorie, setSelectedCategorie] = useState('');
//   const [isMobile, setIsMobile] = useState(false);

//   // Détection de l'écran mobile
//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     // Vérifier au chargement
//     checkIfMobile();

//     // Ajouter un écouteur d'événement pour le redimensionnement
//     window.addEventListener('resize', checkIfMobile);

//     // Nettoyer l'écouteur d'événement lors du démontage
//     return () => {
//       window.removeEventListener('resize', checkIfMobile);
//     };
//   }, []);
//   const searchInputRef = useRef(null);

//   useEffect(() => {
//     if (searchInputRef.current) {
//       searchInputRef.current.focus();
//     }
//   }, [search]);

//   const filteredSignalements = signalements.filter((signalement) => {
//     const matchCity = selectedCity ? signalement.ville === selectedCity : true;
//     const matchCategorie = selectedCategorie ? signalement.categorie.nom === selectedCategorie : true;
//     const matchSearch =
//       signalement.titre.toLowerCase().includes(search.toLowerCase()) ||
//       signalement.ville.toLowerCase().includes(search.toLowerCase());

//     return matchCity && matchCategorie && matchSearch;
//   });

//   const handleAssign = (agentId, signalementId) => {
//     router.post(`/admin/assign-agent-to-signalement`, {
//       agent_id: agentId,
//       signalement_id: signalementId,
//     }, {
//       preserveScroll: true,
//       onSuccess: () => {
//         alert("Agent assigné avec succès !");
//         setSelectedSignalementId(null);
//       },
//       onError: () => {
//         alert("Erreur lors de l'assignation.");
//       }
//     });
//   };

//   const cities = [...new Set(signalements.map((signalement) => signalement.ville))];
//   const categorie = [...new Set(signalements.map((signalement) => signalement.categorie.nom))];

//   // Agent selection modal - shared between desktop and mobile
//   const AgentSelectionModal = () => (
//     <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 relative shadow-xl">
//         <button
//           onClick={() => setSelectedSignalementId(null)}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
//         >
//           <X size={24} />
//         </button>

//         <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center">
//           <Users size={20} className="text-red-600 mr-2" />
//           Sélection d'agent pour le signalement #{selectedSignalementId}
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {agents.map(agent => (
//             <div
//               key={agent.id}
//               className="border border-gray-200 rounded-lg p-4 hover:bg-red-50 transition-all cursor-pointer group"
//               onClick={() => handleAssign(agent.id, selectedSignalementId)}
//             >
//               <div className="flex items-center gap-3">
//                 <div className="flex-shrink-0">
//                   <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
//                     <span className="text-red-700 font-medium">
//                       {agent.nom[0]}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="font-semibold text-gray-800">{agent.nom}</h3>
//                   <p className="text-sm text-gray-600">{agent.email}</p>
//                   <div className="mt-1">
//                     <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs inline-flex items-center">
//                       <CheckCircle size={12} className="mr-1" />
//                       {agent.signalements_count} missions
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   // Mobile view component
//   const MobileView = () => (
//     <div className="w-full p-4">
//       {/* Header Section */}
//       <div className="mb-6">
//         <h1 className="text-xl font-bold text-gray-800 mb-2">
//           Gestion des Signalements
//         </h1>
//         <div className="flex items-center mb-4">
//           <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm flex items-center">
//             <Users size={14} className="mr-1" />
//             {signalements.length} en attente
//           </div>
//         </div>
//         <button
//           onClick={() => router.get('/admin/assignements')}
//           className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow w-full flex justify-center items-center mb-4"
//         >
//           Voir les Assignements →
//         </button>
//       </div>

//       {/* Search and Filters */}
//       <div className="space-y-3 mb-4">
//         <div className="relative">
//           <Search size={18} className="absolute left-3 top-3 text-gray-400" />
//           <input
//            ref={searchInputRef}
//             type="text"
//             placeholder="Rechercher..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="pl-10 pr-4 py-2 border rounded-lg w-full text-gray-700 focus:ring-2 focus:ring-red-300 focus:border-red-300"
//           />
//         </div>

//         <div className="grid grid-cols-2 gap-2">
//           <div className="relative">
//             <MapPin size={16} className="absolute left-3 top-3 text-gray-400" />
//             <select
//               value={selectedCity}
//               onChange={(e) => setSelectedCity(e.target.value)}
//               className="pl-10 pr-2 py-2 border rounded-lg w-full text-gray-700 focus:ring-2 focus:ring-red-300 focus:border-red-300 appearance-none"
//             >
//               <option value="">Toutes les villes</option>
//               {cities.map((city) => (
//                 <option key={city} value={city}>{city}</option>
//               ))}
//             </select>
//           </div>

//           <div className="relative">
//             <Tag size={16} className="absolute left-3 top-3 text-gray-400" />
//             <select
//               value={selectedCategorie}
//               onChange={(e) => setSelectedCategorie(e.target.value)}
//               className="pl-10 pr-2 py-2 border rounded-lg w-full text-gray-700 focus:ring-2 focus:ring-red-300 focus:border-red-300 appearance-none"
//             >
//               <option value="">Toutes catégories</option>
//               {categorie.map((cat) => (
//                 <option key={cat} value={cat}>{cat}</option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Card List for Mobile */}
//       <div className="space-y-3">
//         {filteredSignalements.map(s => (
//           <div key={s.id} className="bg-white rounded-lg shadow border border-gray-100 p-4">
//             <div className="flex justify-between items-start mb-2">
//               <h3 className="font-medium text-gray-800">{s.titre}</h3>
//               <span className="font-mono text-xs text-red-600">#{s.id}</span>
//             </div>

//             <div className="flex flex-wrap gap-2 mb-3">
//               <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs">
//                 {s.categorie.nom}
//               </span>
//               <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs">
//                 {s.statut}
//               </span>
//             </div>

//             <button
//               onClick={() => setSelectedSignalementId(s.id)}
//               className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded flex items-center justify-center gap-1"
//             >
//               <Users size={16} />
//               Assigner un agent
//             </button>
//           </div>
//         ))}

//         {filteredSignalements.length === 0 && (
//           <div className="bg-white rounded-lg shadow border border-gray-100 p-6 text-center text-gray-500">
//             Aucun signalement ne correspond à vos critères
//           </div>
//         )}
//       </div>

//       {/* Agent modal */}
//       {selectedSignalementId && <AgentSelectionModal />}
//     </div>
//   );

//   // Desktop view component
//   const DesktopView = () => (
//     <div className="flex-1 p-6">
//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800 flex items-center">
//           Gestion des Signalements
//           <span className="ml-3 text-red-600 text-sm bg-red-50 px-3 py-1 rounded-full flex items-center">
//             <Users size={14} className="mr-1" />
//             {signalements.length} en attente
//           </span>
//         </h1>
//         <button
//           onClick={() => router.get('/admin/assignements')}
//           className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow transition-all"
//         >
//           Voir les Assignements →
//         </button>
//       </div>

//       {/* Filters Row */}
//       <div className="flex gap-3 mb-6">
//         <div className="relative flex-1">
//           <Search size={18} className="absolute left-3 top-3 text-gray-400" />
//           <input
//            ref={searchInputRef}
//             type="text"
//             placeholder="Rechercher par titre ou ville..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="pl-10 pr-4 py-2 border rounded-lg w-full text-gray-700 focus:ring-2 focus:ring-red-300 focus:border-red-300"
//           />
//         </div>

//         <div className="relative w-48">
//           <MapPin size={16} className="absolute left-3 top-3 text-gray-400" />
//           <select
//             value={selectedCity}
//             onChange={(e) => setSelectedCity(e.target.value)}
//             className="pl-10 pr-4 py-2 border rounded-lg w-full text-gray-700 focus:ring-2 focus:ring-red-300 focus:border-red-300"
//           >
//             <option value="">Toutes les villes</option>
//             {cities.map((city) => (
//               <option key={city} value={city}>{city}</option>
//             ))}
//           </select>
//         </div>

//         <div className="relative w-48">
//           <Tag size={16} className="absolute left-3 top-3 text-gray-400" />
//           <select
//             value={selectedCategorie}
//             onChange={(e) => setSelectedCategorie(e.target.value)}
//             className="pl-10 pr-4 py-2 border rounded-lg w-full text-gray-700 focus:ring-2 focus:ring-red-300 focus:border-red-300"
//           >
//             <option value="">Toutes catégories</option>
//             {categorie.map((cat) => (
//               <option key={cat} value={cat}>{cat}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Main Table */}
//       <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
//         <table className="w-full">
//           <thead className="bg-gray-50 text-gray-700 border-b border-gray-200">
//             <tr>
//               <th className="p-3 text-left font-medium">ID</th>
//               <th className="p-3 text-left font-medium">Titre</th>
//               <th className="p-3 text-left font-medium">Catégorie</th>
//               <th className="p-3 text-center font-medium">Statut</th>
//               <th className="p-3 text-center font-medium">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-100">
//             {filteredSignalements.map(s => (
//               <tr key={s.id} className="hover:bg-gray-50 transition-colors">
//                 <td className="p-3 font-mono text-red-600">#{s.id}</td>
//                 <td className="p-3 font-medium text-gray-800">{s.titre}</td>
//                 <td className="p-3">
//                   <span className="bg-red-100 text-red-800 px-2.5 py-0.5 rounded-full text-xs">
//                     {s.categorie.nom}
//                   </span>
//                 </td>
//                 <td className="p-3 text-center">
//                   <span className="inline-block px-3 py-0.5 rounded-full bg-gray-100 text-gray-800 text-xs">
//                     {s.statut}
//                   </span>
//                 </td>
//                 <td className="p-3 text-center">
//                   <button
//                     onClick={() => setSelectedSignalementId(s.id)}
//                     className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-lg inline-flex items-center gap-1 transition-colors"
//                   >
//                     <Users size={16} />
//                     Assigner
//                   </button>
//                 </td>
//               </tr>
//             ))}

//             {filteredSignalements.length === 0 && (
//               <tr>
//                 <td colSpan="5" className="p-6 text-center text-gray-500">
//                   Aucun signalement ne correspond à vos critères
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Agent modal */}
//       {selectedSignalementId && <AgentSelectionModal />}
//     </div>
//   );

//   // Main return
//   return (
//     <AppLayout>
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Afficher AdminSidebar uniquement sur desktop */}
//       {!isMobile && <AdminSidebar />}
      
//       {/* Ajuster la largeur du contenu principal */}
//       <div className="flex-1">
//         {isMobile ? <MobileView /> : <DesktopView />}
//       </div>
//     </div>
//   </AppLayout>
//   );
// }

import React, { useState, useEffect, useRef } from 'react';
import { router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import AdminSidebar from '@/Components/AdminSidebar';
import { Search, Filter, Users, X, CheckCircle, MapPin, Tag } from 'lucide-react';

export default function ListSignalements({ signalements, agents }) {
  const [selectedSignalementId, setSelectedSignalementId] = useState(null);
  const [search, setSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategorie, setSelectedCategorie] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const searchInputRef = useRef(null);

  // Détection de l'écran mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Vérifier au chargement
    checkIfMobile();

    // Ajouter un écouteur d'événement pour le redimensionnement
    window.addEventListener('resize', checkIfMobile);

    // Nettoyer l'écouteur d'événement lors du démontage
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [search]);

  const filteredSignalements = signalements.filter((signalement) => {
    const matchCity = selectedCity ? signalement.ville === selectedCity : true;
    const matchCategorie = selectedCategorie ? signalement.categorie.nom === selectedCategorie : true;
    const matchSearch =
      signalement.titre.toLowerCase().includes(search.toLowerCase()) ||
      signalement.ville.toLowerCase().includes(search.toLowerCase());

    return matchCity && matchCategorie && matchSearch;
  });

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

  const cities = [...new Set(signalements.map((signalement) => signalement.ville))];
  const categorie = [...new Set(signalements.map((signalement) => signalement.categorie.nom))];

  // Agent selection modal - shared between desktop and mobile
  const AgentSelectionModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 relative shadow-xl">
        <button
          onClick={() => setSelectedSignalementId(null)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Users size={20} className="text-red-600 mr-2" />
          Sélection d'agent pour le signalement #{selectedSignalementId}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {agents.map(agent => (
            <div
              key={agent.id}
              className="border border-gray-200 rounded-lg p-4 hover:bg-red-50 transition-all cursor-pointer group"
              onClick={() => handleAssign(agent.id, selectedSignalementId)}
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <span className="text-red-700 font-medium">
                      {agent.nom[0]}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{agent.nom}</h3>
                  <p className="text-sm text-gray-600">{agent.email}</p>
                  <div className="mt-1">
                    <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs inline-flex items-center">
                      <CheckCircle size={12} className="mr-1" />
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
  );

  return (
    <AppLayout>
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar sur grand écran uniquement */}
       
          <AdminSidebar />
    
    
        
        {/* Contenu principal avec adaptation automatique */}
        <div className="flex-1 w-full overflow-hidden">
          {/* Header Section - Adaptable sur tous les écrans */}
          <div className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
              <div className="mb-4 md:mb-0">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-0">
                  Gestion des Signalements
                  <span className="ml-0 md:ml-3 mt-2 md:mt-0 text-red-600 text-sm bg-red-50 px-3 py-1 rounded-full inline-flex items-center">
                    <Users size={14} className="mr-1" />
                    {signalements.length} en attente
                  </span>
                </h1>
              </div>
              <button
                onClick={() => router.get('/admin/assignements')}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow w-full md:w-auto flex justify-center items-center"
              >
                Voir les Assignements →
              </button>
            </div>

            {/* Recherche et filtres - Adaptables */}
            <div className="flex flex-col md:flex-row gap-3 mb-6">
              <div className="relative flex-1">
                <Search size={18} className="absolute left-3 top-3 text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Rechercher par titre ou ville..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 pr-4 py-2 border rounded-lg w-full text-gray-700 focus:ring-2 focus:ring-red-300 focus:border-red-300"
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-0 md:flex md:space-x-3">
                <div className="relative w-full md:w-48">
                  <MapPin size={16} className="absolute left-3 top-3 text-gray-400" />
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="pl-10 pr-4 py-2 border rounded-lg w-full text-gray-700 focus:ring-2 focus:ring-red-300 focus:border-red-300"
                  >
                    <option value="">Toutes les villes</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div className="relative w-full md:w-48">
                  <Tag size={16} className="absolute left-3 top-3 text-gray-400" />
                  <select
                    value={selectedCategorie}
                    onChange={(e) => setSelectedCategorie(e.target.value)}
                    className="pl-10 pr-4 py-2 border rounded-lg w-full text-gray-700 focus:ring-2 focus:ring-red-300 focus:border-red-300"
                  >
                    <option value="">Toutes catégories</option>
                    {categorie.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Vue responsive des signalements - tableau sur desktop, cartes sur mobile */}
            <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
              {/* Tableau pour écrans md et plus */}
              <div className="hidden md:block">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 text-gray-700 border-b border-gray-200">
                      <tr>
                        <th className="p-3 text-left font-medium">ID</th>
                        <th className="p-3 text-left font-medium">Titre</th>
                        <th className="p-3 text-left font-medium">Catégorie</th>
                        <th className="p-3 text-center font-medium">Statut</th>
                        <th className="p-3 text-center font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredSignalements.length > 0 ? (
                        filteredSignalements.map(s => (
                          <tr key={s.id} className="hover:bg-gray-50 transition-colors">
                            <td className="p-3 font-mono text-red-600">#{s.id}</td>
                            <td className="p-3 font-medium text-gray-800">{s.titre}</td>
                            <td className="p-3">
                              <span className="bg-red-100 text-red-800 px-2.5 py-0.5 rounded-full text-xs">
                                {s.categorie.nom}
                              </span>
                            </td>
                            <td className="p-3 text-center">
                              <span className="inline-block px-3 py-0.5 rounded-full bg-gray-100 text-gray-800 text-xs">
                                {s.statut}
                              </span>
                            </td>
                            <td className="p-3 text-center">
                              <button
                                onClick={() => setSelectedSignalementId(s.id)}
                                className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-lg inline-flex items-center gap-1 transition-colors"
                              >
                                <Users size={16} />
                                Assigner
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5" className="p-6 text-center text-gray-500">
                            Aucun signalement ne correspond à vos critères
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Cartes pour écrans sm et xs */}
              <div className="md:hidden">
                <div className="space-y-3 p-4">
                  {filteredSignalements.length > 0 ? (
                    filteredSignalements.map(s => (
                      <div key={s.id} className="bg-white rounded-lg shadow border border-gray-100 p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium text-gray-800">{s.titre}</h3>
                          <span className="font-mono text-xs text-red-600">#{s.id}</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs">
                            {s.categorie.nom}
                          </span>
                          <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs">
                            {s.statut}
                          </span>
                        </div>

                        <button
                          onClick={() => setSelectedSignalementId(s.id)}
                          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded flex items-center justify-center gap-1"
                        >
                          <Users size={16} />
                          Assigner un agent
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="bg-white rounded-lg shadow border border-gray-100 p-6 text-center text-gray-500">
                      Aucun signalement ne correspond à vos critères
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal d'assignation */}
      {selectedSignalementId && <AgentSelectionModal />}
    </AppLayout>
  );
}