
// import React, { useState, useEffect, useRef } from 'react';
// import { router } from '@inertiajs/react';
// import AppLayout from '@/Layouts/AppLayout';
// import AdminSidebar from '@/Components/AdminSidebar';
// import { Trash2, Edit, AlertCircle, User, CheckCircle, Clock, Menu, X, Search, Filter, MapPin, Tag } from 'lucide-react';

// export default function Assignments({ interventions }) {
//   const [openMenuId, setOpenMenuId] = useState(null);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [search, setSearch] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');
//   const [selectedCategorie, setSelectedCategorie] = useState('');
//   const searchInputRef = useRef(null);
//   console.log(interventions);
//   useEffect(() => {
//     const checkIsMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkIsMobile();
//     window.addEventListener('resize', checkIsMobile);

//     return () => {
//       window.removeEventListener('resize', checkIsMobile);
//     };
//   }, []);

//   const handleDelete = (id) => {
//     if (confirm("Supprimer cet assignement ?")) {
//       router.delete(`/admin/assignements/${id}`);
//     }
//   };

//   const handleEdit = (id) => {
//     router.get(`/admin/assignements/${id}/edit`);
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };
//   useEffect(() => {
//     if (searchInputRef.current) {
//       searchInputRef.current.focus();
//     }
//   }, [search]);
//   const filteredSignalements = interventions.filter(intervention => {
//     const signalement = intervention.signalement;
//     if (!signalement) return false;

//     const matchCity = selectedCity ? signalement.ville === selectedCity : true;
//     const matchCategorie = selectedCategorie ? signalement.categorie.nom === selectedCategorie : true;
//     const matchSearch =
//       signalement.titre.toLowerCase().includes(search.toLowerCase()) ||
//       signalement.ville.toLowerCase().includes(search.toLowerCase());

//     return matchCity && matchCategorie && matchSearch;
//   });


//   const cities = [
//     ...new Set(
//       interventions
//         .map(intervention => intervention.signalement)
//         .filter(signalement => signalement) // sécurité
//         .map(signalement => signalement.ville)
//     ),
//   ];

//   const categories = [
//     ...new Set(
//       interventions
//         .map(intervention => intervention.signalement)
//         .filter(signalement => signalement && signalement.categorie) // sécurité
//         .map(signalement => signalement.categorie.nom)
//     ),
//   ];



//   return (
//     <AppLayout>
//       <div className="flex min-h-screen bg-gray-50">
//         {/* Barre latérale - visible sur tous les écrans */}
//         <div className={`${sidebarOpen ? 'fixed inset-0 z-50' : 'hidden'} md:relative md:block`}>
//           <div className={`${sidebarOpen ? 'fixed w-64 h-full z-50' : ''} md:relative`}>
//             <AdminSidebar />
//             {/* Bouton de fermeture de la sidebar sur mobile uniquement */}
//             {sidebarOpen && (
//               <button
//                 className="absolute top-4 right-4 md:hidden bg-red-700 text-white p-1 rounded-full"
//                 onClick={toggleSidebar}
//               >
//                 <X size={20} />
//               </button>
//             )}
//           </div>
//           {/* Overlay pour fermer la sidebar en cliquant à l'extérieur sur mobile */}
//           {sidebarOpen && (
//             <div
//               className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//               onClick={toggleSidebar}
//             ></div>
//           )}
//         </div>

//         {/* Contenu principal */}
//         <div className="flex-1 overflow-hidden">
//           {/* En-tête avec bouton de menu sur mobile */}
//           <div className="bg-white border-b border-gray-200 p-4 md:p-6 flex justify-between items-center">
//             <h1 className="text-xl md:text-3xl font-bold text-red-800 flex items-center">
//               Assignements
//               <span className="ml-2 text-red-700 text-sm md:text-xl bg-red-100 px-2 md:px-3 py-1 rounded-full">
//                 {interventions.length} actifs
//               </span>
//             </h1>

//             {/* Bouton de menu sur mobile uniquement */}
//             <button
//               className="md:hidden text-gray-700 hover:text-red-700"
//               onClick={toggleSidebar}
//             >
//               <Menu size={24} />
//             </button>
//           </div>
//           {/* Recherche et filtres - Adaptables */}
//           <div className="flex flex-col md:flex-row gap-3 mb-6">
//             <div className="relative flex-1">
//               <Search size={18} className="absolute left-3 top-3 text-gray-400" />
//               <input
//                 ref={searchInputRef}
//                 type="text"
//                 placeholder="Rechercher par titre ou ville..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="pl-10 pr-4 py-2 border rounded-lg w-full text-gray-700 focus:ring-2 focus:ring-red-300 focus:border-red-300"
//               />
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-0 md:flex md:space-x-3">
//               <div className="relative w-full md:w-48">
//                 <MapPin size={16} className="absolute left-3 top-3 text-gray-400" />
//                 <select
//                   value={selectedCity}
//                   onChange={(e) => setSelectedCity(e.target.value)}
//                   className="pl-10 pr-4 py-2 border rounded-lg w-full text-gray-700 focus:ring-2 focus:ring-red-300 focus:border-red-300"
//                 >
//                   <option value="">Toutes les villes</option>
//                   {cities.map((city) => (
//                     <option key={city} value={city}>{city}</option>
//                   ))}
//                 </select>
//               </div>

//               <div className="relative w-full md:w-48">
//                 <Tag size={16} className="absolute left-3 top-3 text-gray-400" />
//                 <select
//                   value={selectedCategorie}
//                   onChange={(e) => setSelectedCategorie(e.target.value)}
//                   className="pl-10 pr-4 py-2 border rounded-lg w-full text-gray-700 focus:ring-2 focus:ring-red-300 focus:border-red-300"
//                 >
//                   <option value="">Toutes catégories</option>
//                   {categories.map((cat) => (
//                     <option key={cat} value={cat}>{cat}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>

//           {/* Contenu principal avec switch entre tableau et cartes */}
//           <div className="p-4 md:p-8">
//             {/* Vue tableau pour écrans md et plus */}
//             <div className="hidden md:block">
//               <div className="bg-white rounded-xl shadow-lg border border-red-100 overflow-hidden">
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead className="bg-red-700 text-white">
//                       <tr>
//                         <th className="p-4 text-left font-medium">ID</th>
//                         <th className="p-4 text-left font-medium">Signalement</th>
//                         <th className="p-4 text-left font-medium">Agent</th>
//                         <th className="p-4 text-center font-medium">Statut</th>
//                         <th className="p-4 text-center font-medium">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-red-100">
//                       {filteredSignalements.map(intervention => (
//                         <tr key={intervention.id} className="hover:bg-red-50 transition-colors">
//                           <td className="p-4 font-mono text-red-600 font-bold">#{intervention.id}</td>
//                           <td className="p-4">
//                             <div className="flex items-center gap-2">
//                               <AlertCircle size={18} className="text-red-600" />
//                               <span className="font-medium">{intervention.signalement?.titre}</span>
//                             </div>
//                           </td>
//                           <td className="p-4">
//                             <div className="flex items-center gap-3">
//                               <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center">
//                                 <span className="text-red-600 font-bold">
//                                   {intervention.user?.nom[0]}
//                                 </span>
//                               </div>
//                               <div>
//                                 <p className="font-medium">{intervention.user?.nom}</p>
//                                 <p className="text-xs text-red-600">{intervention.user?.email}</p>
//                               </div>
//                             </div>
//                           </td>
//                           <td className="p-4 text-center">
//                             <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold
//                               ${intervention.resolution_status === 'terminé'
//                                 ? 'bg-green-100 text-green-800'
//                                 : 'bg-red-100 text-red-800'}`}>
//                               {intervention.resolution_status === 'terminé' ?
//                                 <CheckCircle size={14} /> :
//                                 <Clock size={14} />
//                               }
//                               {intervention.resolution_status}
//                             </span>
//                           </td>
//                           <td className="p-4 text-center">
//                             <div className="flex items-center justify-center gap-2">
//                               <button
//                                 onClick={() => handleEdit(intervention.id)}
//                                 className="px-3 py-2 bg-amber-100 text-amber-800 font-medium text-sm rounded-lg hover:bg-amber-200 transition flex items-center gap-1"
//                               >
//                                 <Edit size={14} />
//                                 Modifier
//                               </button>
//                               <button
//                                 onClick={() => handleDelete(intervention.id)}
//                                 className="px-3 py-2 bg-red-100 text-red-800 font-medium text-sm rounded-lg hover:bg-red-200 transition flex items-center gap-1"
//                               >
//                                 <Trash2 size={14} />
//                                 Supprimer
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>

//             {/* Vue cartes pour écrans xs et sm */}
//             <div className="md:hidden space-y-4">
//               {interventions.map(intervention => (
//                 <div key={intervention.id} className="bg-white rounded-lg shadow-md p-4 border-l-4 border-red-500">
//                   <div className="flex justify-between items-start mb-3">
//                     <div>
//                       <span className="font-mono text-red-600 text-sm">#{intervention.id}</span>
//                       <h3 className="font-semibold text-lg">{intervention.signalement?.titre}</h3>
//                     </div>
//                     <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1
//                       ${intervention.resolution_status === 'terminé'
//                         ? 'bg-green-100 text-green-800'
//                         : 'bg-red-100 text-red-800'}`}>
//                       {intervention.resolution_status === 'terminé' ?
//                         <CheckCircle size={14} /> :
//                         <Clock size={14} />
//                       }
//                       {intervention.resolution_status}
//                     </span>
//                   </div>

//                   <div className="flex items-center gap-2 mb-3">
//                     <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center">
//                       <User size={16} className="text-red-600" />
//                     </div>
//                     <div>
//                       <p className="font-semibold">{intervention.user?.nom}</p>
//                       <p className="text-xs text-red-600">{intervention.user?.email}</p>
//                     </div>
//                   </div>

//                   <div className="flex justify-end gap-2 mt-2">
//                     <button
//                       onClick={() => handleEdit(intervention.id)}
//                       className="px-3 py-1 bg-amber-100 text-amber-800 font-semibold text-sm rounded-lg flex items-center gap-1"
//                     >
//                       <Edit size={14} />
//                       Modifier
//                     </button>
//                     <button
//                       onClick={() => handleDelete(intervention.id)}
//                       className="px-3 py-1 bg-red-100 text-red-800 font-semibold text-sm rounded-lg flex items-center gap-1"
//                     >
//                       <Trash2 size={14} />
//                       Supprimer
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </AppLayout>
//   );
// }

import React, { useState, useEffect, useRef } from 'react';
import { router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import AdminSidebar from '@/Components/AdminSidebar';
import { Trash2, Edit, AlertCircle, User, CheckCircle, Clock, Menu, X, Search, Filter, MapPin, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Assignments({ interventions }) {
  const { t } = useTranslation();
  const [openMenuId, setOpenMenuId] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategorie, setSelectedCategorie] = useState('');
  const searchInputRef = useRef(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleDelete = (id) => {
    if (confirm(t('Assignements.buttons.delete_confirm'))) {
      router.delete(`/admin/assignements/${id}`);
    }
  };

  const handleEdit = (id) => {
    router.get(`/admin/assignements/${id}/edit`);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [search]);

  const filteredSignalements = interventions.filter(intervention => {
    const signalement = intervention.signalement;
    if (!signalement) return false;

    const matchCity = selectedCity ? signalement.ville === selectedCity : true;
    const matchCategorie = selectedCategorie ? signalement.categorie.nom === selectedCategorie : true;
    const matchSearch =
      signalement.titre.toLowerCase().includes(search.toLowerCase()) ||
      signalement.ville.toLowerCase().includes(search.toLowerCase());

    return matchCity && matchCategorie && matchSearch;
  });

  const cities = [
    ...new Set(
      interventions
        .map(intervention => intervention.signalement?.ville)
        .filter(ville => ville)
    ),
  ];

  const categories = [
    ...new Set(
      interventions
        .map(intervention => intervention.signalement?.categorie?.nom)
        .filter(nom => nom)
    ),
  ];

  return (
    <AppLayout>
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'fixed inset-0 z-50' : 'hidden'} md:relative md:block`}>
          <div className={`${sidebarOpen ? 'fixed w-64 h-full z-50' : ''} md:relative`}>
            <AdminSidebar />
            {sidebarOpen && (
              <button
                className="absolute top-4 right-4 md:hidden bg-red-700 text-white p-1 rounded-full"
                onClick={toggleSidebar}
              >
                <X size={20} />
              </button>
            )}
          </div>
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={toggleSidebar}
            ></div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 p-4 md:p-6 flex justify-between items-center">
            <h1 className="text-xl md:text-3xl font-bold text-red-800 flex items-center">
              {t('Assignements.title')}
              <span className="ml-2 text-red-700 text-sm md:text-xl bg-red-100 px-2 md:px-3 py-1 rounded-full">
                {t('Assignements.active_count', { count: interventions.length })}
              </span>
            </h1>

            <button
              className="md:hidden text-gray-700 hover:text-red-700"
              onClick={toggleSidebar}
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-3 mb-6 p-4">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-3 top-3 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder={t('Assignements.search_placeholder')}
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
                  <option value="">{t('Assignements.all_cities')}</option>
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
                  <option value="">{t('Assignements.all_categories')}</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block p-4">
            {filteredSignalements.length > 0 ? (
              <div className="bg-white rounded-xl shadow-lg border border-red-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-red-700 text-white">
                      <tr>
                        <th className="p-4 text-left font-medium">{t('Assignements.table_headers.id')}</th>
                        <th className="p-4 text-left font-medium">{t('Assignements.table_headers.report')}</th>
                        <th className="p-4 text-left font-medium">{t('Assignements.table_headers.agent')}</th>
                        <th className="p-4 text-center font-medium">{t('Assignements.table_headers.status')}</th>
                        <th className="p-4 text-center font-medium">{t('Assignements.table_headers.actions')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-red-100">
                      {filteredSignalements.map(intervention => (
                        <tr key={intervention.id} className="hover:bg-red-50 transition-colors">
                          <td className="p-4 font-mono text-red-600 font-bold">#{intervention.id}</td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <AlertCircle size={18} className="text-red-600" />
                              <span className="font-medium">{intervention.signalement?.titre}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center">
                                <span className="text-red-600 font-bold">
                                  {intervention.user?.nom?.[0]}
                                </span>
                              </div>
                              <div>
                                <p className="font-medium">{intervention.user?.nom}</p>
                                <p className="text-xs text-red-600">{intervention.user?.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 text-center">
                            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold
                              ${intervention.resolution_status === 'completed'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'}`}>
                              {intervention.resolution_status === 'completed' ?
                                <CheckCircle size={14} /> :
                                <Clock size={14} />
                              }
                              {t(`Assignements.status.${intervention.resolution_status}`)}
                            </span>
                          </td>
                          <td className="p-4 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <button
                                onClick={() => handleEdit(intervention.id)}
                                className="px-3 py-2 bg-amber-100 text-amber-800 font-medium text-sm rounded-lg hover:bg-amber-200 transition flex items-center gap-1"
                              >
                                <Edit size={14} />
                                {t('Assignements.buttons.edit')}
                              </button>
                              <button
                                onClick={() => handleDelete(intervention.id)}
                                className="px-3 py-2 bg-red-100 text-red-800 font-medium text-sm rounded-lg hover:bg-red-200 transition flex items-center gap-1"
                              >
                                <Trash2 size={14} />
                                {t('Assignements.buttons.delete')}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg border border-red-100 p-8 text-center">
                <p className="text-gray-500">{t('Assignements.no_results')}</p>
              </div>
            )}
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-4 p-4">
            {filteredSignalements.length > 0 ? (
              filteredSignalements.map(intervention => (
                <div key={intervention.id} className="bg-white rounded-lg shadow-md p-4 border-l-4 border-red-500">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="text-xs text-gray-500">{t('Assignements.mobile_view.report_id')}: #{intervention.signalement?.id}</span>
                      <h3 className="font-semibold text-lg">{intervention.signalement?.titre}</h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1
                      ${intervention.resolution_status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'}`}>
                      {intervention.resolution_status === 'completed' ?
                        <CheckCircle size={14} /> :
                        <Clock size={14} />
                      }
                      {t(`Assignements.status.${intervention.resolution_status}`)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center">
                      <User size={16} className="text-red-600" />
                    </div>
                    <div>
                      <p className="font-semibold">{t('Assignements.mobile_view.assigned_to')}: {intervention.user?.nom}</p>
                      <p className="text-xs text-red-600">{intervention.user?.email}</p>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 mt-2">
                    <button
                      onClick={() => handleEdit(intervention.id)}
                      className="px-3 py-1 bg-amber-100 text-amber-800 font-semibold text-sm rounded-lg flex items-center gap-1"
                    >
                      <Edit size={14} />
                      {t('Assignements.buttons.edit')}
                    </button>
                    <button
                      onClick={() => handleDelete(intervention.id)}
                      className="px-3 py-1 bg-red-100 text-red-800 font-semibold text-sm rounded-lg flex items-center gap-1"
                    >
                      <Trash2 size={14} />
                      {t('Assignements.buttons.delete')}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-red-500 text-center">
                <p className="text-gray-500">{t('Assignements.no_results')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}