// import React, { useState, useEffect } from 'react';
// import {router } from '@inertiajs/react';
// import { AlertCircle, Eye, Pencil, Filter, RefreshCw, ArrowDown, ArrowUp, ChevronRight, Menu, X } from 'lucide-react';
// import AppLayout from '@/Layouts/AppLayout';
// import AgentSidebar from '@/Components/AgentSidebar';

// const InterventionsRejetes = ({ interventions }) => {
//   const [isMobile, setIsMobile] = useState(false);
//   // const [sidebarOpen, setSidebarOpen] = useState(false);
  
//   // Détecte si l'écran est de taille mobile
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     // Vérifier au chargement
//     checkScreenSize();
    
//     // Ajouter un écouteur d'événement pour le redimensionnement
//     window.addEventListener('resize', checkScreenSize);
    
//     // Nettoyer l'écouteur d'événement au démontage
//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);
//    // Filtrer les interventions selon le terme de recherche
//     const filteredInterventions = interventions.filter(intervention => 
//       intervention.signalement?.titre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       intervention.description_action?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       intervention.signalement?.categorie?.nom?.toLowerCase().includes(searchTerm.toLowerCase())
//     );
  
//     // Trier les interventions
//     const sortedInterventions = [...filteredInterventions].sort((a, b) => {
//       let valueA = a[sortField] || '';
//       let valueB = b[sortField] || '';
      
//       if (sortField === 'priorite') {
//         return sortDirection === 'asc' 
//           ? valueA - valueB 
//           : valueB - valueA;
//       }
      
//       if (typeof valueA === 'string') valueA = valueA.toLowerCase();
//       if (typeof valueB === 'string') valueB = valueB.toLowerCase();
      
//       if (valueA < valueB) return sortDirection === 'asc' ? -1 : 1;
//       if (valueA > valueB) return sortDirection === 'asc' ? 1 : -1;
//       return 0;
//     });
  
//     const getSortIcon = (field) => {
//       if (field !== sortField) return null;
//       return sortDirection === 'asc' 
//         ? <ChevronUp size={16} className="inline ml-1" /> 
//         : <ChevronDown size={16} className="inline ml-1" />;
//     };
  
//   // Vue pour les appareils mobiles
//   const MobileView = () => (
//     <div className="flex flex-col bg-gray-50 min-h-screen">
//       <div className="p-4 flex-1">
//         <div className="mb-4 flex justify-between items-center">
//           <p className="text-xs text-gray-500">Gérez les interventions rejetées</p>
//         </div>
      
        
//         {/* Liste des interventions */}
//         <div className="space-y-3">
//           {interventions.length === 0 ? (
//             <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center justify-center text-center">
//               <AlertCircle size={32} className="text-gray-400 mb-2" />
//               <p className="text-gray-500 font-medium">Aucune intervention rejetée</p>
//               <p className="text-gray-400 text-xs mt-1">Les interventions rejetées apparaîtront ici</p>
//             </div>
//           ) : (
//             interventions.map((intervention) => (
//               <div key={intervention.id} className="bg-white rounded-xl shadow-md p-4 border border-gray-200">
//                 <div className="flex justify-between items-start mb-3">
//                   <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
//                     {intervention.resolution_status}
//                   </span>
//                   {intervention.priorite > 5 ? (
//                     <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
//                       Haute
//                     </span>
//                   ) : (
//                     <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
//                       Moyenne
//                     </span>
//                   )}
//                 </div>
                
//                 <h3 className="font-medium text-gray-900 mb-2">{intervention.signalement?.titre}</h3>
                
//                 <div className="mb-3">
//                   <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-800">
//                     {intervention.signalement?.categorie?.nom}
//                   </span>
//                 </div>
                
//                 <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-4">
//                   <div>
//                     <p className="text-gray-400">Début:</p>
//                     <p>{intervention.dateDebut}</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-400">Fin:</p>
//                     <p>{intervention.dateFin}</p>
//                   </div>
//                 </div>
                
//                 <div className="flex space-x-2">
//                   <button
//                     onClick={() => router.get(`/agent/intervention/${intervention.id}/editStatut?source=rejete`)}
//                     className="flex-1 bg-white px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 flex items-center justify-center"
//                   >
//                     <Pencil size={14} className="mr-1" />
//                     Modifier
//                   </button>
//                   <button
//                     onClick={() => router.get(`/agent/intervention/${intervention.id}/detail_I_Rejete_agent`)}
//                     className="flex-1 bg-green-50 px-3 py-2 border border-green-300 rounded-md shadow-sm text-xs font-medium text-green-700 flex items-center justify-center"
//                   >
//                     <Eye size={14} className="mr-1" />
//                     Détails
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
        
//         {/* Footer mobile */}
//         {interventions.length > 0 && (
//           <div className="mt-4 bg-white p-3 rounded-lg shadow-sm border border-gray-200">
//             <p className="text-sm text-gray-600 text-center">
//               Total: <span className="font-medium text-gray-800">{interventions.length}</span> interventions rejetées
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
  
//   // Vue pour les ordinateurs de bureau (version originale)
//   const DesktopView = () => (
//     <div className="flex bg-gray-50 min-h-screen">
    
      
//       <div className="flex-1 p-6">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-800">Interventions Rejetées</h1>
//               <p className="text-sm text-gray-500 mt-1">Gérez les interventions qui ont été rejetées</p>
//             </div>
//           </div> 
          
//           {/* Main content */}
//           <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
//             {/* Table header */}
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead>
//                   <tr className="bg-gradient-to-r from-gray-100 to-gray-50">
//                     <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase">
//                       <div className="flex items-center">
//                         Statut
//                         <div className="flex flex-col ml-1 text-gray-400">
//                           <ArrowUp size={10} className="mb-[2px]" />
//                           <ArrowDown size={10} className="mt-[2px]" />
//                         </div>
//                       </div>
//                     </th>
//                     <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase">
//                       Titre Signalement
//                     </th>
//                     <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase">
//                       Catégorie
//                     </th>
//                     <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase">
//                       Date de début
//                     </th>
//                     <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase">
//                       Date de fin
//                     </th>
//                     <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase">
//                       Priorité
//                     </th>
//                     <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {interventions.length === 0 ? (
//                     <tr>
//                       <td colSpan="8" className="py-10 text-center">
//                         <div className="flex flex-col items-center justify-center">
//                           <AlertCircle size={40} className="text-gray-400 mb-3" />
//                           <p className="text-gray-500 font-medium">Aucune intervention rejetée trouvée</p>
//                           <p className="text-gray-400 text-sm">Les interventions rejetées apparaîtront ici</p>
//                         </div>
//                       </td>
//                     </tr>
//                   ) : (
//                     interventions.map((intervention) => (
//                       <tr key={intervention.id} className="hover:bg-gray-50">
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
//                             {intervention.resolution_status}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                           {intervention.signalement?.titre}
//                         </td>

//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-800">
//                             {intervention.signalement?.categorie?.nom}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {intervention.dateDebut}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {intervention.dateFin}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           {intervention.priorite > 5 ? (
//                             <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
//                               Haute
//                             </span>
//                           ) : (
//                             <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
//                               Moyenne
//                             </span>
//                           )}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
//                           <div className="flex space-x-3">
//                             <button
//                               onClick={() => router.get(`/agent/intervention/${intervention.id}/editStatut?source=rejete`)}
//                               className="bg-white px-3 py-1 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 hover:bg-gray-50 flex items-center"
//                             >
//                               <Pencil size={14} className="mr-1" />
//                               Modifier
//                             </button>
//                             <button
//                               onClick={() => router.get(`/agent/intervention/${intervention.id}/detail_I_Rejete_agent`)}
//                               className="bg-green-50 px-3 py-1 border border-green-300 rounded-md shadow-sm text-xs font-medium text-green-700 hover:bg-green-100 flex items-center"
//                             >
//                               <Eye size={14} className="mr-1" />
//                               Détails
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>
            
//             {/* Simple footer */}
//             {interventions.length > 0 && (
//               <div className="bg-white px-6 py-4 border-t border-gray-200">
//                 <p className="text-sm text-gray-600 text-center">
//                   Total: <span className="font-medium text-gray-800">{interventions.length}</span> interventions rejetées
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
  
//   return (
//     <AppLayout>
//       <div className="flex min-h-screen bg-gray-50">
//       <AgentSidebar />

//       {isMobile ? <MobileView /> : <DesktopView />}</div>
//     </AppLayout>
//   );
// };

// export default InterventionsRejetes;






import React, { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';
import { AlertCircle, Eye, Pencil, Filter, RefreshCw, ArrowDown, ArrowUp, ChevronDown, ChevronUp, Search, X } from 'lucide-react';
import AppLayout from '@/Layouts/AppLayout';
import AgentSidebar from '@/Components/AgentSidebar';

const InterventionsRejetes = ({ interventions }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('priorite');
  const [sortDirection, setSortDirection] = useState('desc');
  const [showFilters, setShowFilters] = useState(false);
  
  // Détecte si l'écran est de taille mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Vérifier au chargement
    checkScreenSize();
    
    // Ajouter un écouteur d'événement pour le redimensionnement
    window.addEventListener('resize', checkScreenSize);
    
    // Nettoyer l'écouteur d'événement au démontage
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  // Filtrer les interventions selon le terme de recherche
  const filteredInterventions = interventions.filter(intervention => 
    intervention.signalement?.titre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    intervention.description_action?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    intervention.signalement?.categorie?.nom?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Trier les interventions
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
  
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  const getSortIcon = (field) => {
    if (field !== sortField) return null;
    return sortDirection === 'asc' 
      ? <ChevronUp size={16} className="inline ml-1" /> 
      : <ChevronDown size={16} className="inline ml-1" />;
  };
  
  const resetFilters = () => {
    setSearchTerm('');
    setSortField('priorite');
    setSortDirection('desc');
  };
  
  // Vue pour les appareils mobiles
  const MobileView = () => (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      <div className="p-4 flex-1">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-3">
            <p className="text-xs text-gray-500">Gérez les interventions rejetées</p>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="bg-gray-100 p-2 rounded-lg text-gray-600 hover:bg-gray-200 flex items-center"
            >
              <Filter size={16} className="mr-1" />
              <span className="text-xs">Filtres</span>
            </button>
          </div>
          
          {showFilters && (
            <div className="bg-white rounded-lg shadow-md p-3 mb-3 border border-gray-200">
              <div className="mb-3">
                <div className="flex items-center bg-gray-50 rounded-lg px-3 py-2 border border-gray-200">
                  <Search size={16} className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Rechercher par titre, description..."
                    className="bg-transparent border-0 flex-1 focus:outline-none text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {searchTerm && (
                    <button 
                      onClick={() => setSearchTerm('')} 
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-xs text-gray-500 mr-2">Trier par:</span>
                  <select
                    className="text-xs bg-gray-50 border border-gray-200 rounded-md px-2 py-1"
                    value={sortField}
                    onChange={(e) => {
                      setSortField(e.target.value);
                      setSortDirection('asc');
                    }}
                  >
                    <option value="priorite">Priorité</option>
                    <option value="dateDebut">Date de début</option>
                    <option value="dateFin">Date de fin</option>
                    <option value="resolution_status">Statut</option>
                  </select>
                  <button 
                    onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
                    className="ml-2 bg-gray-100 p-1 rounded-md"
                  >
                    {sortDirection === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                  </button>
                </div>
                
                <button 
                  onClick={resetFilters}
                  className="text-xs text-blue-600 flex items-center"
                >
                  <RefreshCw size={12} className="mr-1" />
                  Réinitialiser
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Info sur le nombre d'interventions filtrées */}
        {searchTerm && (
          <div className="bg-blue-50 rounded-lg p-2 mb-3 text-xs text-blue-700 flex items-center justify-between">
            <span>
              {sortedInterventions.length} intervention(s) correspondant à "{searchTerm}"
            </span>
            <button 
              onClick={() => setSearchTerm('')}
              className="text-blue-600 hover:text-blue-800"
            >
              <X size={16} />
            </button>
          </div>
        )}
        
        {/* Liste des interventions */}
        <div className="space-y-3">
          {sortedInterventions.length === 0 ? (
            <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center justify-center text-center">
              <AlertCircle size={32} className="text-gray-400 mb-2" />
              <p className="text-gray-500 font-medium">Aucune intervention rejetée</p>
              <p className="text-gray-400 text-xs mt-1">Les interventions rejetées apparaîtront ici</p>
            </div>
          ) : (
            sortedInterventions.map((intervention) => (
              <div key={intervention.id} className="bg-white rounded-xl shadow-md p-4 border border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                    {intervention.resolution_status}
                  </span>
                  {intervention.priorite > 5 ? (
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                      Haute
                    </span>
                  ) : (
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Moyenne
                    </span>
                  )}
                </div>
                
                <h3 className="font-medium text-gray-900 mb-2">{intervention.signalement?.titre}</h3>
                
                <div className="mb-3">
                  <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-800">
                    {intervention.signalement?.categorie?.nom}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-4">
                  <div>
                    <p className="text-gray-400">Début:</p>
                    <p>{intervention.dateDebut}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Fin:</p>
                    <p>{intervention.dateFin}</p>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => router.get(`/agent/intervention/${intervention.id}/editStatut?source=rejete`)}
                    className="flex-1 bg-white px-3 py-2 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 flex items-center justify-center"
                  >
                    <Pencil size={14} className="mr-1" />
                    Modifier
                  </button>
                  <button
                    onClick={() => router.get(`/agent/intervention/${intervention.id}/detail_I_Rejete_agent`)}
                    className="flex-1 bg-green-50 px-3 py-2 border border-green-300 rounded-md shadow-sm text-xs font-medium text-green-700 flex items-center justify-center"
                  >
                    <Eye size={14} className="mr-1" />
                    Détails
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        
        {/* Footer mobile */}
        {sortedInterventions.length > 0 && (
          <div className="mt-4 bg-white p-3 rounded-lg shadow-sm border border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              Total: <span className="font-medium text-gray-800">{sortedInterventions.length}</span> interventions rejetées
            </p>
          </div>
        )}
      </div>
    </div>
  );
  
  // Vue pour les ordinateurs de bureau (version originale)
  const DesktopView = () => (
    <div className="flex bg-gray-50 min-h-screen">
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Interventions Rejetées</h1>
              <p className="text-sm text-gray-500 mt-1">Gérez les interventions qui ont été rejetées</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <button 
                onClick={resetFilters}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 flex items-center text-sm"
              >
                <RefreshCw size={16} className="mr-2" />
                Réinitialiser
              </button>
            </div>
          </div>
          
          {/* Barre de recherche et filtres */}
          <div className="bg-white rounded-xl shadow-md p-4 mb-6 flex items-center justify-between border border-gray-200">
            <div className="flex items-center flex-1">
              <div className="flex items-center bg-gray-50 rounded-lg px-3 py-2 border border-gray-200 flex-1 max-w-xl">
                <Search size={18} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Rechercher par titre, description ou catégorie..."
                  className="bg-transparent border-0 flex-1 focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')} 
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">Trier par:</span>
                <select
                  className="text-sm bg-gray-50 border border-gray-200 rounded-md px-3 py-2"
                  value={sortField}
                  onChange={(e) => {
                    setSortField(e.target.value);
                    setSortDirection('asc');
                  }}
                >
                  <option value="priorite">Priorité</option>
                  <option value="dateDebut">Date de début</option>
                  <option value="dateFin">Date de fin</option>
                  <option value="resolution_status">Statut</option>
                </select>
                <button 
                  onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
                  className="ml-2 bg-gray-100 p-1 rounded-md"
                >
                  {sortDirection === 'asc' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                </button>
              </div>
            </div>
          </div>
          
          {/* Info sur le nombre d'interventions filtrées */}
          {searchTerm && (
            <div className="bg-blue-50 rounded-lg p-3 mb-6 text-sm text-blue-700 flex items-center justify-between">
              <span>
                {sortedInterventions.length} intervention(s) correspondant à "{searchTerm}"
              </span>
              <button 
                onClick={() => setSearchTerm('')}
                className="text-blue-600 hover:text-blue-800"
              >
                <X size={16} />
              </button>
            </div>
          )}
          
          {/* Main content */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            {/* Table header */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-100 to-gray-50">
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase">
                      <div className="flex items-center cursor-pointer" onClick={() => handleSort('resolution_status')}>
                        Statut
                        {getSortIcon('resolution_status')}
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase">
                      <div className="flex items-center cursor-pointer" onClick={() => handleSort('signalement.titre')}>
                        Titre Signalement
                        {getSortIcon('signalement.titre')}
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase">
                      <div className="flex items-center cursor-pointer" onClick={() => handleSort('signalement.categorie.nom')}>
                        Catégorie
                        {getSortIcon('signalement.categorie.nom')}
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase">
                      <div className="flex items-center cursor-pointer" onClick={() => handleSort('dateDebut')}>
                        Date de début
                        {getSortIcon('dateDebut')}
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase">
                      <div className="flex items-center cursor-pointer" onClick={() => handleSort('dateFin')}>
                        Date de fin
                        {getSortIcon('dateFin')}
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase">
                      <div className="flex items-center cursor-pointer" onClick={() => handleSort('priorite')}>
                        Priorité
                        {getSortIcon('priorite')}
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sortedInterventions.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="py-10 text-center">
                        <div className="flex flex-col items-center justify-center">
                          <AlertCircle size={40} className="text-gray-400 mb-3" />
                          <p className="text-gray-500 font-medium">Aucune intervention rejetée trouvée</p>
                          <p className="text-gray-400 text-sm">Les interventions rejetées apparaîtront ici</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    sortedInterventions.map((intervention) => (
                      <tr key={intervention.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            {intervention.resolution_status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {intervention.signalement?.titre}
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-800">
                            {intervention.signalement?.categorie?.nom}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {intervention.dateDebut}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {intervention.dateFin}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {intervention.priorite > 5 ? (
                            <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              Haute
                            </span>
                          ) : (
                            <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                              Moyenne
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                          <div className="flex space-x-3">
                            <button
                              onClick={() => router.get(`/agent/intervention/${intervention.id}/editStatut?source=rejete`)}
                              className="bg-white px-3 py-1 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 hover:bg-gray-50 flex items-center"
                            >
                              <Pencil size={14} className="mr-1" />
                              Modifier
                            </button>
                            <button
                              onClick={() => router.get(`/agent/intervention/${intervention.id}/detail_I_Rejete_agent`)}
                              className="bg-green-50 px-3 py-1 border border-green-300 rounded-md shadow-sm text-xs font-medium text-green-700 hover:bg-green-100 flex items-center"
                            >
                              <Eye size={14} className="mr-1" />
                              Détails
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            
            {/* Simple footer */}
            {sortedInterventions.length > 0 && (
              <div className="bg-white px-6 py-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  Total: <span className="font-medium text-gray-800">{sortedInterventions.length}</span> interventions rejetées
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  
  return (
    <AppLayout>
      <div className="flex min-h-screen bg-gray-50">
        <AgentSidebar />
        {isMobile ? <MobileView /> : <DesktopView />}
      </div>
    </AppLayout>
  );
};

export default InterventionsRejetes;