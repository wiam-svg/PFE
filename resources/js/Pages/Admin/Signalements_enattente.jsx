
// import React, { useState, useEffect, useRef } from 'react';
// import { router } from '@inertiajs/react';
// import AppLayout from '@/Layouts/AppLayout';
// import AdminSidebar from '@/Components/AdminSidebar';
// import { Search, Filter, Users, X, CheckCircle, MapPin, Tag, MoreVertical, Trash2, Eye } from 'lucide-react';

// export default function ListSignalements({ signalements, agents }) {
//   const [selectedSignalementId, setSelectedSignalementId] = useState(null);
//   const [search, setSearch] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');
//   const [selectedCategorie, setSelectedCategorie] = useState('');
//   const [isMobile, setIsMobile] = useState(false);
//   const [openMenuId, setOpenMenuId] = useState(null);
//   const searchInputRef = useRef(null);
//   const menuRef = useRef(null);

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

//   useEffect(() => {
//     if (searchInputRef.current) {
//       searchInputRef.current.focus();
//     }
//   }, [search]);

//   // Fermer le menu si on clique en dehors
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (openMenuId && !event.target.closest('.action-menu') && !event.target.closest('.menu-trigger')) {
//         setOpenMenuId(null);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [openMenuId]);

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

//   const toggleMenu = (id, e) => {
//     e.stopPropagation();
//     setOpenMenuId(openMenuId === id ? null : id);
//   };

//   const handleDelete = (id, e) => {
//     e.stopPropagation();
//     if (confirm('Êtes-vous sûr de vouloir supprimer ce signalement?')) {
//       router.delete(`/admin/signalements/${id}`, {
//         preserveScroll: true,
//         onSuccess: () => {
//           alert("Signalement supprimé avec succès!");
//           setOpenMenuId(null);
//         },
//         onError: () => {
//           alert("Erreur lors de la suppression.");
//         }
//       });
//     }
//   };

//   const handleViewDetails = (id, e) => {
//     e.stopPropagation();
//     router.get(`/admin/signalements/${id}/details`);
//     setOpenMenuId(null);
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

//   // Menu dropdown component
//   const ActionMenu = ({ id }) => (
//     <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-10 w-40 action-menu">
//       <div className="py-1">
//         <button
//           onClick={(e) => handleViewDetails(id, e)}
//           className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//         >
//           <Eye size={16} className="mr-2 text-gray-500" />
//           Voir détails
//         </button>
//         <button
//           onClick={(e) => handleDelete(id, e)}
//           className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
//         >
//           <Trash2 size={16} className="mr-2" />
//           Supprimer
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <AppLayout>
//       <div className="flex min-h-screen bg-gray-50">
//         {/* Sidebar sur grand écran uniquement */}
//         <AdminSidebar />

//         {/* Contenu principal avec adaptation automatique */}
//         <div className="flex-1 w-full overflow-hidden">
//           {/* Header Section - Adaptable sur tous les écrans */}
//           <div className="p-4 md:p-6">
//             <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
//               <div className="mb-4 md:mb-0">
//                 <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-0">
//                   Gestion des Signalements
//                   <span className="ml-0 md:ml-3 mt-2 md:mt-0 text-red-600 text-sm bg-red-50 px-3 py-1 rounded-full inline-flex items-center">
//                     <Users size={14} className="mr-1" />
//                     {signalements.length} en attente
//                   </span>
//                 </h1>
//               </div>
//               <button
//                 onClick={() => router.get('/admin/assignements')}
//                 className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow w-full md:w-auto flex justify-center items-center"
//               >
//                 Voir les Assignements →
//               </button>
//             </div>

//             {/* Recherche et filtres - Adaptables */}
//             <div className="flex flex-col md:flex-row gap-3 mb-6">
//               <div className="relative flex-1">
//                 <Search size={18} className="absolute left-3 top-3 text-gray-400" />
//                 <input
//                   ref={searchInputRef}
//                   type="text"
//                   placeholder="Rechercher par titre ou ville..."
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   className="pl-10 pr-4 py-2 border rounded-lg w-full text-gray-700 focus:ring-2 focus:ring-red-300 focus:border-red-300"
//                 />
//               </div>

//               <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-0 md:flex md:space-x-3">
//                 <div className="relative w-full md:w-48">
//                   <MapPin size={16} className="absolute left-3 top-3 text-gray-400" />
//                   <select
//                     value={selectedCity}
//                     onChange={(e) => setSelectedCity(e.target.value)}
//                     className="pl-10 pr-4 py-2 border rounded-lg w-full text-gray-700 focus:ring-2 focus:ring-red-300 focus:border-red-300"
//                   >
//                     <option value="">Toutes les villes</option>
//                     {cities.map((city) => (
//                       <option key={city} value={city}>{city}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="relative w-full md:w-48">
//                   <Tag size={16} className="absolute left-3 top-3 text-gray-400" />
//                   <select
//                     value={selectedCategorie}
//                     onChange={(e) => setSelectedCategorie(e.target.value)}
//                     className="pl-10 pr-4 py-2 border rounded-lg w-full text-gray-700 focus:ring-2 focus:ring-red-300 focus:border-red-300"
//                   >
//                     <option value="">Toutes catégories</option>
//                     {categorie.map((cat) => (
//                       <option key={cat} value={cat}>{cat}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Vue responsive des signalements - tableau sur desktop, cartes sur mobile */}
//             <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
//               {/* Tableau pour écrans md et plus */}
//               <div className="hidden md:block">
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead className="bg-gray-50 text-gray-700 border-b border-gray-200">
//                       <tr>
//                         <th className="p-3 text-left font-medium">ID</th>
//                         <th className="p-3 text-left font-medium">Titre</th>
//                         <th className="p-3 text-left font-medium">Catégorie</th>
//                         <th className="p-3 text-center font-medium">Statut</th>
//                         <th className="p-3 text-center font-medium">Actions</th>
//                         <th className="p-3 text-center font-medium"></th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-100">
//                       {filteredSignalements.length > 0 ? (
//                         filteredSignalements.map(s => (
//                           <tr key={s.id} className="hover:bg-gray-50 transition-colors">
//                             <td className="p-3 font-mono text-red-600">#{s.id}</td>
//                             <td className="p-3 font-medium text-gray-800">{s.titre}</td>
//                             <td className="p-3">
//                               <span className="bg-red-100 text-red-800 px-2.5 py-0.5 rounded-full text-xs">
//                                 {s.categorie.nom}
//                               </span>
//                             </td>
//                             <td className="p-3 text-center">
//                               <span className="inline-block px-3 py-0.5 rounded-full bg-gray-100 text-gray-800 text-xs">
//                                 {s.statut}
//                               </span>
//                             </td>
//                             <td className="p-3 text-center">
//                               <button
//                                 onClick={() => setSelectedSignalementId(s.id)}
//                                 className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-lg inline-flex items-center gap-1 transition-colors"
//                               >
//                                 <Users size={16} />
//                                 Assigner
//                               </button>
//                             </td>
//                             <td className="p-3 text-center relative">
//                               <button
//                                 onClick={(e) => toggleMenu(s.id, e)}
//                                 className="text-gray-500 hover:text-gray-700 transition-colors menu-trigger"
//                               >
//                                 <MoreVertical size={20} />
//                               </button>
//                               {openMenuId === s.id && <ActionMenu id={s.id} />}
//                             </td>
//                           </tr>
//                         ))
//                       ) : (
//                         <tr>
//                           <td colSpan="6" className="p-6 text-center text-gray-500">
//                             Aucun signalement ne correspond à vos critères
//                           </td>
//                         </tr>
//                       )}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>

//               {/* Cartes pour écrans sm et xs */}
//               <div className="md:hidden">
//                 <div className="space-y-3 p-4">
//                   {filteredSignalements.length > 0 ? (
//                     filteredSignalements.map(s => (
//                       <div key={s.id} className="bg-white rounded-lg shadow border border-gray-100 p-4 relative">
//                         <div className="flex justify-between items-start mb-2">
//                           <h3 className="font-medium text-gray-800">{s.titre}</h3>
//                           <div className="relative">
//                             <button
//                               onClick={(e) => toggleMenu(s.id, e)}
//                               className="text-gray-500 hover:text-gray-700 transition-colors p-1 menu-trigger"
//                             >
//                               <MoreVertical size={20} />
//                             </button>
//                             {openMenuId === s.id && <ActionMenu id={s.id} />}
//                           </div>
//                         </div>
//                         <div className="flex flex-wrap gap-2 mb-3">
//                           <span className="font-mono text-xs text-red-600">#{s.id}</span>
//                           <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs">
//                             {s.categorie.nom}
//                           </span>
//                           <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs">
//                             {s.statut}
//                           </span>
//                         </div>

//                         <button
//                           onClick={() => setSelectedSignalementId(s.id)}
//                           className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded flex items-center justify-center gap-1"
//                         >
//                           <Users size={16} />
//                           Assigner un agent
//                         </button>
//                       </div>
//                     ))
//                   ) : (
//                     <div className="bg-white rounded-lg shadow border border-gray-100 p-6 text-center text-gray-500">
//                       Aucun signalement ne correspond à vos critères
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal d'assignation */}
//       {selectedSignalementId && <AgentSelectionModal />}
//     </AppLayout>
//   );
// }




import React, { useState, useEffect, useRef } from 'react';
import { router } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import AppLayout from '@/Layouts/AppLayout';
import AdminSidebar from '@/Components/AdminSidebar';
import { Search, Filter, Users, X, CheckCircle, MapPin, Tag, MoreVertical, Trash2, Eye } from 'lucide-react';

export default function ListSignalements({ signalements, agents }) {
  const { t } = useTranslation();
  const [selectedSignalementId, setSelectedSignalementId] = useState(null);
  const [search, setSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategorie, setSelectedCategorie] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);
  const searchInputRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [search]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openMenuId && !event.target.closest('.action-menu') && !event.target.closest('.menu-trigger')) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMenuId]);

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
        alert(t('admin_dashboard.assign_success'));
        setSelectedSignalementId(null);
      },
      onError: () => {
        alert(t('admin_dashboard.assign_error'));
      }
    });
  };

  const toggleMenu = (id, e) => {
    e.stopPropagation();
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const handleDelete = (id, e) => {
    e.stopPropagation();
    if (confirm(t('admin_dashboard.delete_confirm'))) {
      router.delete(`/admin/signalements/${id}`, {
        preserveScroll: true,
        onSuccess: () => {
          alert(t('admin_dashboard.delete_success'));
          setOpenMenuId(null);
        },
        onError: () => {
          alert(t('admin_dashboard.delete_error'));
        }
      });
    }
  };

  const handleViewDetails = (id, e) => {
    e.stopPropagation();
    router.get(`/admin/signalements/${id}/details`);
    setOpenMenuId(null);
  };

  const cities = [...new Set(signalements.map((signalement) => signalement.ville))];
  const categorie = [...new Set(signalements.map((signalement) => signalement.categorie.nom))];

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
          {t('admin_dashboard.select_agent_for')} #{selectedSignalementId}
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
                      {agent.signalements_count} {t('admin_dashboard.missions')}
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

  const ActionMenu = ({ id }) => (
    <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-10 w-40 action-menu">
      <div className="py-1">
        <button
          onClick={(e) => handleViewDetails(id, e)}
          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <Eye size={16} className="mr-2 text-gray-500" />
          {t('admin_dashboard.view_details')}
        </button>
        <button
          onClick={(e) => handleDelete(id, e)}
          className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
        >
          <Trash2 size={16} className="mr-2" />
          {t('admin_dashboard.delete')}
        </button>
      </div>
    </div>
  );

  return (
    <AppLayout>
      <div className="flex min-h-screen bg-gray-50">
        <AdminSidebar />

        <div className="flex-1 w-full overflow-hidden">
          <div className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
              <div className="mb-4 md:mb-0">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-0">
                  {t('admin_dashboard.reports_management')}
                  <span className="ml-0 md:ml-3 mt-2 md:mt-0 text-red-600 text-sm bg-red-50 px-3 py-1 rounded-full inline-flex items-center">
                    <Users size={14} className="mr-1" />
                    {signalements.length} {t('admin_dashboard.pending')}
                  </span>
                </h1>
              </div>
              <button
                onClick={() => router.get('/admin/assignements')}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow w-full md:w-auto flex justify-center items-center"
              >
                {t('admin_dashboard.view_assignments')} →
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-3 mb-6">
              <div className="relative flex-1">
                <Search size={18} className="absolute left-3 top-3 text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder={t('admin_dashboard.search_placeholder')}
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
                    <option value="">{t('admin_dashboard.all_cities')}</option>
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
                    <option value="">{t('admin_dashboard.all_categories')}</option>
                    {categorie.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
              <div className="hidden md:block">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 text-gray-700 border-b border-gray-200">
                      <tr>
                        <th className="p-3 text-left font-medium">ID</th>
                        <th className="p-3 text-left font-medium">{t('admin_dashboard.title')}</th>
                        <th className="p-3 text-left font-medium">{t('admin_dashboard.category')}</th>
                        <th className="p-3 text-center font-medium">{t('admin_dashboard.status')}</th>
                        <th className="p-3 text-center font-medium">{t('admin_dashboard.actions')}</th>
                        <th className="p-3 text-center font-medium"></th>
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
                                {t('admin_dashboard.assign')}
                              </button>
                            </td>
                            <td className="p-3 text-center relative">
                              <button
                                onClick={(e) => toggleMenu(s.id, e)}
                                className="text-gray-500 hover:text-gray-700 transition-colors menu-trigger"
                              >
                                <MoreVertical size={20} />
                              </button>
                              {openMenuId === s.id && <ActionMenu id={s.id} />}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" className="p-6 text-center text-gray-500">
                            {t('admin_dashboard.no_reports_found')}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="md:hidden">
                <div className="space-y-3 p-4">
                  {filteredSignalements.length > 0 ? (
                    filteredSignalements.map(s => (
                      <div key={s.id} className="bg-white rounded-lg shadow border border-gray-100 p-4 relative">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium text-gray-800">{s.titre}</h3>
                          <div className="relative">
                            <button
                              onClick={(e) => toggleMenu(s.id, e)}
                              className="text-gray-500 hover:text-gray-700 transition-colors p-1 menu-trigger"
                            >
                              <MoreVertical size={20} />
                            </button>
                            {openMenuId === s.id && <ActionMenu id={s.id} />}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="font-mono text-xs text-red-600">#{s.id}</span>
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
                          {t('admin_dashboard.assign_agent')}
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="bg-white rounded-lg shadow border border-gray-100 p-6 text-center text-gray-500">
                      {t('admin_dashboard.no_reports_found')}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedSignalementId && <AgentSelectionModal />}
    </AppLayout>
  );
}