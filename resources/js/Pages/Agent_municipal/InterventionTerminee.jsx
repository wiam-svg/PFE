


// import React, { useState } from 'react';
// import { Link, router } from '@inertiajs/react';
// import { AlertCircle, Trash2, Eye, Calendar, CheckCircle, Clock, Pencil, Filter, Search, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';
// import AppLayout from '@/Layouts/AppLayout';
// import AgentSidebar from '@/Components/AgentSidebar';

// const InterventionTerminee = ({ interventions }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortField, setSortField] = useState('dateFin');
//   const [sortDirection, setSortDirection] = useState('desc');
//   const [expandedRow, setExpandedRow] = useState(null);

//   const handleReset = (id) => {
//     // Envoie la requête POST pour réinitialiser l'intervention
//     router.get(`/agent/intervention/reset/${id}`, {
//       _method: 'POST',
//       // Ajoute ici d'autres données si nécessaires
//     });
//   };

//   const handleSort = (field) => {
//     if (field === sortField) {
//       setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
//     } else {
//       setSortField(field);
//       setSortDirection('asc');
//     }
//   };

//   const toggleExpandRow = (id) => {
//     setExpandedRow(expandedRow === id ? null : id);
//   };

//   // Filtrer les interventions selon le terme de recherche
//   const filteredInterventions = interventions.filter(intervention => 
//     intervention.signalement?.titre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     intervention.description_action?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     intervention.signalement?.categorie?.nom?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Trier les interventions
//   const sortedInterventions = [...filteredInterventions].sort((a, b) => {
//     let valueA = a[sortField] || '';
//     let valueB = b[sortField] || '';
    
//     if (sortField === 'priorite') {
//       return sortDirection === 'asc' 
//         ? valueA - valueB 
//         : valueB - valueA;
//     }
    
//     if (typeof valueA === 'string') valueA = valueA.toLowerCase();
//     if (typeof valueB === 'string') valueB = valueB.toLowerCase();
    
//     if (valueA < valueB) return sortDirection === 'asc' ? -1 : 1;
//     if (valueA > valueB) return sortDirection === 'asc' ? 1 : -1;
//     return 0;
//   });

//   const getSortIcon = (field) => {
//     if (field !== sortField) return null;
//     return sortDirection === 'asc' 
//       ? <ChevronUp size={16} className="inline ml-1" /> 
//       : <ChevronDown size={16} className="inline ml-1" />;
//   };

//   return (
//     <AppLayout>
//       <div className="flex min-h-screen bg-gray-50">
//         <AgentSidebar />
        
//         <div className="flex-1 p-6">
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold text-gray-800">Interventions Terminées</h1>
//             <p className="mt-2 text-gray-600">Liste des interventions complétées et archivées</p>
//           </div>

//           {/* Search and filters */}
//           <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//             <div className="relative flex-1 max-w-md">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Search size={18} className="text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Rechercher par titre, description ou catégorie..."
//                 className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
            
//             <div className="flex items-center space-x-2">
//               <span className="text-gray-500 flex items-center">
//                 <Filter size={16} className="mr-2" /> Filtrer:
//               </span>
//               <select 
//                 className="block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
//                 onChange={(e) => setSortField(e.target.value)}
//                 value={sortField}
//               >
//                 <option value="dateFin">Date de fin</option>
//                 <option value="dateDebut">Date de début</option>
//                 <option value="priorite">Priorité</option>
//               </select>
//               <button 
//                 onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
//                 className="p-2 rounded-md bg-white border border-gray-300 shadow-sm hover:bg-gray-50"
//               >
//                 {sortDirection === 'asc' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
//               </button>
//             </div>
//           </div>
          
//           {/* Stats summary */}
//           <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
//               <div className="flex items-center">
//                 <div className="p-3 rounded-full bg-blue-100 text-blue-600">
//                   <CheckCircle size={20} />
//                 </div>
//                 <div className="ml-4">
//                   <p className="text-sm font-medium text-gray-500">Total interventions</p>
//                   <p className="text-xl font-bold text-gray-900">{interventions.length}</p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
//               <div className="flex items-center">
//                 <div className="p-3 rounded-full bg-red-100 text-red-600">
//                   <AlertCircle size={20} />
//                 </div>
//                 <div className="ml-4">
//                   <p className="text-sm font-medium text-gray-500">Priorité haute</p>
//                   <p className="text-xl font-bold text-gray-900">
//                     {interventions.filter(i => i.priorite > 5).length}
//                   </p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
//               <div className="flex items-center">
//                 <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
//                   <AlertTriangle size={20} />
//                 </div>
//                 <div className="ml-4">
//                   <p className="text-sm font-medium text-gray-500">Priorité moyenne</p>
//                   <p className="text-xl font-bold text-gray-900">
//                     {interventions.filter(i => i.priorite <= 5).length}
//                   </p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
//               <div className="flex items-center">
//                 <div className="p-3 rounded-full bg-green-100 text-green-600">
//                   <Calendar size={20} />
//                 </div>
//                 <div className="ml-4">
//                   <p className="text-sm font-medium text-gray-500">Ce mois</p>
//                   <p className="text-xl font-bold text-gray-900">
//                     {interventions.filter(i => {
//                       const date = new Date(i.dateFin);
//                       const today = new Date();
//                       return date.getMonth() === today.getMonth() && 
//                              date.getFullYear() === today.getFullYear();
//                     }).length}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main content table/cards */}
//           <div className="bg-white rounded-lg shadow overflow-hidden">
//             {filteredInterventions.length === 0 ? (
//               <div className="flex flex-col items-center justify-center py-16 px-4">
//                 <CheckCircle size={48} className="text-gray-300 mb-4" />
//                 <h3 className="text-lg font-medium text-gray-900">Aucune intervention terminée</h3>
//                 <p className="mt-1 text-sm text-gray-500">
//                   Les interventions terminées apparaîtront ici une fois complétées.
//                 </p>
//               </div>
//             ) : (
//               <>
//                 {/* Desktop view: Table */}
//                 <div className="hidden md:block">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('resolution_status')}>
//                           Statut {getSortIcon('resolution_status')}
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('signalement.titre')}>
//                           Titre {getSortIcon('signalement.titre')}
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('signalement.categorie.nom')}>
//                           Catégorie {getSortIcon('signalement.categorie.nom')}
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('dateDebut')}>
//                           Date début {getSortIcon('dateDebut')}
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('dateFin')}>
//                           Date fin {getSortIcon('dateFin')}
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('priorite')}>
//                           Priorité {getSortIcon('priorite')}
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Actions
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {sortedInterventions.map((intervention) => (
//                         <tr key={intervention.id} className="hover:bg-gray-50">
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                               {intervention.resolution_status}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="text-sm font-medium text-gray-900">{intervention.signalement?.titre || '-'}</div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="text-sm text-gray-900">{intervention.signalement?.categorie?.nom || '-'}</div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center text-sm text-gray-500">
//                               <Calendar size={14} className="mr-1" />
//                               {intervention.dateDebut || '-'}
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center text-sm text-gray-500">
//                               <Calendar size={14} className="mr-1" />
//                               {intervention.dateFin || '-'}
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             {intervention.priorite > 5 ? (
//                               <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
//                                 <AlertCircle size={12} className="mr-1" /> Haute
//                               </span>
//                             ) : (
//                               <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
//                                 <Clock size={12} className="mr-1" /> Moyenne
//                               </span>
//                             )}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-center">
//                             <div className="flex justify-center space-x-2">
//                               <button
//                                 onClick={() => handleReset(intervention.id)}
//                                 className="p-1 rounded-full text-red-600 hover:bg-red-50 transition-colors"
//                                 title="Réinitialiser"
//                               >
//                                 <Trash2 e size={18} />
//                               </button>
//                               <button
//                                 onClick={() => router.get(`/agent/intervention/${intervention.id}/editStatut?source=termine`)}
//                                 className="p-1 rounded-full text-gray-600 hover:bg-gray-50 transition-colors"
//                                 title="Modifier"
//                               >
//                                 <Pencil size={18} />
//                               </button>
//                               <button
//                                 onClick={() => router.get(`/agent/intervention/${intervention.id}/detail_I_Atermine_agent`)}
//                                 className="p-1 rounded-full text-green-600 hover:bg-green-50 transition-colors"
//                                 title="Voir détails"
//                               >
//                                 <Eye size={18} />
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>

//                 {/* Mobile view: Cards */}
//                 <div className="block md:hidden">
//                   <ul className="divide-y divide-gray-200">
//                     {sortedInterventions.map((intervention) => (
//                       <li key={intervention.id} className="px-4 py-4">
//                         <div className="flex justify-between items-start">
//                           <div>
//                             <div>
//                               <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-2">
//                                 {intervention.resolution_status}
//                               </span>
//                               {intervention.priorite > 5 && (
//                                 <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
//                                   <AlertCircle size={12} className="mr-1" /> Haute
//                                 </span>
//                               )}
//                             </div>
//                             <h3 className="text-sm font-medium text-gray-900">{intervention.signalement?.titre || '-'}</h3>
//                             <p className="mt-1 text-xs text-gray-500 line-clamp-1">{intervention.description_action || '-'}</p>
//                           </div>
//                           <button
//                             onClick={() => toggleExpandRow(intervention.id)}
//                             className="p-1 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
//                           >
//                             {expandedRow === intervention.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//                           </button>
//                         </div>
                        
//                         {expandedRow === intervention.id && (
//                           <div className="mt-4 space-y-3">
//                             <div>
//                               <div className="text-xs font-medium text-gray-500">Catégorie</div>
//                               <div className="text-sm">{intervention.signalement?.categorie?.nom || '-'}</div>
//                             </div>
//                             <div className="grid grid-cols-2 gap-2">
//                               <div>
//                                 <div className="text-xs font-medium text-gray-500">Date de début</div>
//                                 <div className="text-sm flex items-center">
//                                   <Calendar size={14} className="mr-1 text-gray-400" />
//                                   {intervention.dateDebut || '-'}
//                                 </div>
//                               </div>
//                               <div>
//                                 <div className="text-xs font-medium text-gray-500">Date de fin</div>
//                                 <div className="text-sm flex items-center">
//                                   <Calendar size={14} className="mr-1 text-gray-400" />
//                                   {intervention.dateFin || '-'}
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="flex justify-around pt-3 border-t">
//                               <button
//                                 onClick={() => handleReset(intervention.id)}
//                                 className="flex items-center text-xs font-medium text-red-600"
//                               >
//                                 <Trash2  size={16} className="mr-1" /> 
//                                 Réinitialiser
//                               </button>
//                               <button
//                                 onClick={() => router.get(`/agent/intervention/${intervention.id}/editStatut?source=termine`)}
//                                 className="flex items-center text-xs font-medium text-gray-600"
//                               >
//                                 <Pencil size={16} className="mr-1" /> 
//                                 Modifier
//                               </button>
//                               <button
//                                 onClick={() => router.get(`/agent/intervention/${intervention.id}/detail_I_Atermine_agent`)}
//                                 className="flex items-center text-xs font-medium text-green-600"
//                               >
//                                 <Eye size={16} className="mr-1" /> 
//                                 Détails
//                               </button>
//                             </div>
//                           </div>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </AppLayout>
//   );
// };

// export default InterventionTerminee;



import React, { useState } from 'react';
import { Link, router } from '@inertiajs/react';
import { AlertCircle, Trash2, Eye, Calendar, CheckCircle, Clock, Pencil, Filter, Search, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';
import AppLayout from '@/Layouts/AppLayout';
import AgentSidebar from '@/Components/AgentSidebar';
import { useTranslation } from 'react-i18next';

const InterventionTerminee = ({ interventions }) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('dateFin');
  const [sortDirection, setSortDirection] = useState('desc');
  const [expandedRow, setExpandedRow] = useState(null);

  const handleReset = (id) => {
    router.get(`/agent/intervention/reset/${id}`, {
      _method: 'POST',
    });
  };

  const handleSort = (field) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const toggleExpandRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const filteredInterventions = interventions.filter(intervention => 
    intervention.signalement?.titre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    intervention.description_action?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    intervention.signalement?.categorie?.nom?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedInterventions = [...filteredInterventions].sort((a, b) => {
    let valueA = a[sortField] || '';
    let valueB = b[sortField] || '';
    
    if (sortField === 'priorite') {
      return sortDirection === 'asc' 
        ? valueA - valueB 
        : valueB - valueA;
    }
    
    if (typeof valueA === 'string') valueA = valueA.toLowerCase();
    if (typeof valueB === 'string') valueB = valueB.toLowerCase();
    
    if (valueA < valueB) return sortDirection === 'asc' ? -1 : 1;
    if (valueA > valueB) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const getSortIcon = (field) => {
    if (field !== sortField) return null;
    return sortDirection === 'asc' 
      ? <ChevronUp size={16} className="inline ml-1" /> 
      : <ChevronDown size={16} className="inline ml-1" />;
  };

  return (
    <AppLayout>
      <div className="flex min-h-screen bg-gray-50">
        <AgentSidebar />
        
        <div className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">{t('InterventionTerminee.title')}</h1>
            <p className="mt-2 text-gray-600">{t('InterventionTerminee.subtitle')}</p>
          </div>

          {/* Search and filters */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={t('InterventionTerminee.searchPlaceholder')}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 flex items-center">
                <Filter size={16} className="mr-2" /> {t('InterventionTerminee.filter')}:
              </span>
              <select 
                className="block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                onChange={(e) => setSortField(e.target.value)}
                value={sortField}
              >
                <option value="dateFin">{t('InterventionTerminee.endDate')}</option>
                <option value="dateDebut">{t('InterventionTerminee.startDate')}</option>
                <option value="priorite">{t('InterventionTerminee.priority')}</option>
              </select>
              <button 
                onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
                className="p-2 rounded-md bg-white border border-gray-300 shadow-sm hover:bg-gray-50"
              >
                {sortDirection === 'asc' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
            </div>
          </div>
          
          {/* Stats summary */}
          <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <CheckCircle size={20} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">{t('InterventionTerminee.totalInterventions')}</p>
                  <p className="text-xl font-bold text-gray-900">{interventions.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-red-100 text-red-600">
                  <AlertCircle size={20} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">{t('InterventionTerminee.highPriority')}</p>
                  <p className="text-xl font-bold text-gray-900">
                    {interventions.filter(i => i.priorite > 5).length}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                  <AlertTriangle size={20} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">{t('InterventionTerminee.mediumPriority')}</p>
                  <p className="text-xl font-bold text-gray-900">
                    {interventions.filter(i => i.priorite <= 5).length}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100 text-green-600">
                  <Calendar size={20} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">{t('InterventionTerminee.thisMonth')}</p>
                  <p className="text-xl font-bold text-gray-900">
                    {interventions.filter(i => {
                      const date = new Date(i.dateFin);
                      const today = new Date();
                      return date.getMonth() === today.getMonth() && 
                             date.getFullYear() === today.getFullYear();
                    }).length}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main content table/cards */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {filteredInterventions.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 px-4">
                <CheckCircle size={48} className="text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">{t('InterventionTerminee.noInterventionsTitle')}</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {t('InterventionTerminee.noInterventionsSubtitle')}
                </p>
              </div>
            ) : (
              <>
                {/* Desktop view: Table */}
                <div className="hidden md:block">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('resolution_status')}>
                          {t('InterventionTerminee.status')} {getSortIcon('resolution_status')}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('signalement.titre')}>
                          {t('InterventionTerminee.titlee')} {getSortIcon('signalement.titre')}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('signalement.categorie.nom')}>
                          {t('InterventionTerminee.category')} {getSortIcon('signalement.categorie.nom')}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('dateDebut')}>
                          {t('InterventionTerminee.startDate')} {getSortIcon('dateDebut')}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('dateFin')}>
                          {t('InterventionTerminee.endDate')} {getSortIcon('dateFin')}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => handleSort('priorite')}>
                          {t('InterventionTerminee.priority')} {getSortIcon('priorite')}
                        </th>
                        <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {t('InterventionTerminee.actions')}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {sortedInterventions.map((intervention) => (
                        <tr key={intervention.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              {intervention.resolution_status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{intervention.signalement?.titre || '-'}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{intervention.signalement?.categorie?.nom || '-'}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar size={14} className="mr-1" />
                              {intervention.dateDebut || '-'}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar size={14} className="mr-1" />
                              {intervention.dateFin || '-'}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {intervention.priorite > 5 ? (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                <AlertCircle size={12} className="mr-1" /> {t('InterventionTerminee.high')}
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                <Clock size={12} className="mr-1" /> {t('InterventionTerminee.medium')}
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-center">
                            <div className="flex justify-center space-x-2">
                              <button
                                onClick={() => handleReset(intervention.id)}
                                className="p-1 rounded-full text-red-600 hover:bg-red-50 transition-colors"
                                title={t('InterventionTerminee.reset')}
                              >
                                <Trash2 size={18} />
                              </button>
                              <button
                                onClick={() => router.get(`/agent/intervention/${intervention.id}/editStatut?source=termine`)}
                                className="p-1 rounded-full text-gray-600 hover:bg-gray-50 transition-colors"
                                title={t('InterventionTerminee.edit')}
                              >
                                <Pencil size={18} />
                              </button>
                              <button
                                onClick={() => router.get(`/agent/intervention/${intervention.id}/detail_I_Atermine_agent`)}
                                className="p-1 rounded-full text-green-600 hover:bg-green-50 transition-colors"
                                title={t('InterventionTerminee.viewDetails')}
                              >
                                <Eye size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile view: Cards */}
                <div className="block md:hidden">
                  <ul className="divide-y divide-gray-200">
                    {sortedInterventions.map((intervention) => (
                      <li key={intervention.id} className="px-4 py-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <div>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-2">
                                {intervention.resolution_status}
                              </span>
                              {intervention.priorite > 5 && (
                                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                  <AlertCircle size={12} className="mr-1" /> {t('InterventionTerminee.high')}
                                </span>
                              )}
                            </div>
                            <h3 className="text-sm font-medium text-gray-900">{intervention.signalement?.titre || '-'}</h3>
                            <p className="mt-1 text-xs text-gray-500 line-clamp-1">{intervention.description_action || '-'}</p>
                          </div>
                          <button
                            onClick={() => toggleExpandRow(intervention.id)}
                            className="p-1 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
                          >
                            {expandedRow === intervention.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          </button>
                        </div>
                        
                        {expandedRow === intervention.id && (
                          <div className="mt-4 space-y-3">
                            <div>
                              <div className="text-xs font-medium text-gray-500">{t('InterventionTerminee.category')}</div>
                              <div className="text-sm">{intervention.signalement?.categorie?.nom || '-'}</div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <div className="text-xs font-medium text-gray-500">{t('InterventionTerminee.startDate')}</div>
                                <div className="text-sm flex items-center">
                                  <Calendar size={14} className="mr-1 text-gray-400" />
                                  {intervention.dateDebut || '-'}
                                </div>
                              </div>
                              <div>
                                <div className="text-xs font-medium text-gray-500">{t('InterventionTerminee.endDate')}</div>
                                <div className="text-sm flex items-center">
                                  <Calendar size={14} className="mr-1 text-gray-400" />
                                  {intervention.dateFin || '-'}
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-around pt-3 border-t">
                              <button
                                onClick={() => handleReset(intervention.id)}
                                className="flex items-center text-xs font-medium text-red-600"
                              >
                                <Trash2 size={16} className="mr-1" /> 
                                {t('InterventionTerminee.reset')}
                              </button>
                              <button
                                onClick={() => router.get(`/agent/intervention/${intervention.id}/editStatut?source=termine`)}
                                className="flex items-center text-xs font-medium text-gray-600"
                              >
                                <Pencil size={16} className="mr-1" /> 
                                {t('InterventionTerminee.edit')}
                              </button>
                              <button
                                onClick={() => router.get(`/agent/intervention/${intervention.id}/detail_I_Atermine_agent`)}
                                className="flex items-center text-xs font-medium text-green-600"
                              >
                                <Eye size={16} className="mr-1" /> 
                                {t('InterventionTerminee.viewDetails')}
                              </button>
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default InterventionTerminee;