// import React, { useState } from 'react';
// import { router } from '@inertiajs/react';
// import AppLayout from '@/Layouts/AppLayout';
// import AgentSidebar from '@/Components/AgentSidebar';
// import SignalementDetails from './SignalementDetails';
// import { X, Eye, CheckCircle, AlertTriangle, Filter, Search } from 'lucide-react';

// export default function MesSignalements({ signalements }) {
//   const [showDetails, setShowDetails] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//   const categories = [...new Set(signalements.map(s => s.signalement?.categorie?.nom).filter(Boolean))];

//   // Filtrage combiné : catégorie + recherche
//   const filteredSignalements = signalements.filter((s) => {
//     const categoryMatch = selectedCategory === '' || s.signalement?.categorie?.nom === selectedCategory;
//     const searchMatch = s.signalement?.titre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       s.signalement?.description?.toLowerCase().includes(searchTerm.toLowerCase());
//     return categoryMatch && searchMatch;
//   });

//   const handleShowDetails = (signalementId) => {
//     setShowDetails(signalementId);
//   };

//   const handleCloseDetails = () => {
//     setShowDetails(null);
//   };

//   return (
//     <AppLayout>
//       <div className="flex min-h-screen bg-gray-50">
//         <AgentSidebar />

//         <div className="flex-1 p-6 max-w-6xl mx-auto">
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold text-gray-800 mb-6">Mes Signalements Assignés</h1>

//             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//               {/* Barre de recherche */}
//               <div className="relative flex-1">
//                 <Search className="absolute top-2.5 left-3 text-gray-400" size={18} />
//                 <input
//                   type="text"
//                   placeholder="Rechercher par titre ou description..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
//                 />
//               </div>

//               {/* Sélecteur catégorie */}
//               <div className="flex items-center space-x-3 bg-white p-2 rounded-lg shadow-sm">
//                 <Filter size={18} className="text-gray-500" />
//                 <select
//                   value={selectedCategory}
//                   onChange={(e) => setSelectedCategory(e.target.value)}
//                   className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
//                 >
//                   <option value="">Toutes les catégories</option>
//                   {categories.map((cat, index) => (
//                     <option key={index} value={cat}>{cat}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>
//           {/* Barre d'information */}
//           <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-md shadow-sm">
//             <div className="flex">
//               <div className="flex-shrink-0">
//                 <AlertTriangle className="h-5 w-5 text-blue-500" />
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm text-blue-700">
//                   {filteredSignalements.length} signalement(s) correspondent à votre recherche.
//                 </p>
//               </div>
//             </div>
//           </div>
//           {/* Liste filtrée */}
//           <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//             {filteredSignalements.length > 0 ? (
//               filteredSignalements.map((s) => (
//                 <div
//                   key={s.id}
//                   className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
//                 >
//                   <div className="p-4 flex flex-col md:flex-row md:items-center md:justify-between">
//                     <div className="flex-1">
//                       <div className="flex items-center mb-2">
//                         <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${s.resolution_status === 'Terminé'
//                           ? 'bg-green-100 text-green-800'
//                           : 'bg-yellow-100 text-yellow-800'
//                           }`}>
//                           {s.resolution_status === 'Terminé'
//                             ? <CheckCircle size={14} className="mr-1" />
//                             : <AlertTriangle size={14} className="mr-1" />}
//                           {s.resolution_status}
//                         </span>
//                         {s.signalement?.categorie?.nom && (
//                           <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-gray-800">
//                             {s.signalement.categorie.nom}
//                           </span>
//                         )}
//                       </div>
//                       <h3 className="font-medium text-gray-900 mb-1">{s.signalement.titre}</h3>
//                       <p className="text-sm text-gray-500 line-clamp-1">{s.signalement.description}</p>
//                       <div className="mt-2 text-xs text-gray-500">{s.signalement.adresse}</div>
//                     </div>
//                     <div className="flex mt-4 md:mt-0 space-x-3">
//                       <button
//                         onClick={() => handleShowDetails(s.id)}
//                         className="flex items-center justify-center px-4 py-2 border border-blue-300 rounded-md shadow-sm text-sm font-medium text-blue-700 bg-white hover:bg-blue-50 transition"
//                       >
//                         <Eye size={16} className="mr-2" />
//                         Détails
//                       </button>

//                       {s.resolution_status !== 'Terminé' && (
//                         <button
//                           onClick={() => router.get(`/agent/intervention/${s.id}/editStatut?source=encours`)}
//                           className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition"
//                         >
//                           <CheckCircle size={16} className="mr-2" />
//                           Marquer terminé
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="p-8 text-center">
//                 <p className="text-gray-500">Aucun signalement trouvé.</p>
//               </div>
//             )}
//           </div>

//           {/* Modal détails */}
//           {showDetails && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//               <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
//                 <div className="flex justify-between items-center p-4 border-b">
//                   <h2 className="text-xl font-semibold text-gray-800">Détails du Signalement</h2>
//                   <button
//                     onClick={handleCloseDetails}
//                     className="p-1 rounded-full hover:bg-gray-100 transition"
//                   >
//                     <X size={20} className="text-gray-500" />
//                   </button>
//                 </div>

//                 <div className="p-6 overflow-y-auto">
//                   <SignalementDetails
//                     signalement={signalements.find(s => s.id === showDetails).signalement}
//                   />
//                 </div>

//                 <div className="p-4 border-t bg-gray-50 flex justify-end">
//                   <button
//                     onClick={handleCloseDetails}
//                     className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
//                   >
//                     Fermer
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </AppLayout>
//   );
// }

// import React, { useState } from 'react';
// import { router } from '@inertiajs/react';
// import AppLayout from '@/Layouts/AppLayout';
// import AgentSidebar from '@/Components/AgentSidebar';
// import SignalementDetails from './SignalementDetails';
// import { X, Eye, CheckCircle, AlertTriangle, Filter, Search, Calendar } from 'lucide-react';

// export default function MesSignalements({ signalements }) {
//   const [showDetails, setShowDetails] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//   const categories = [...new Set(signalements.map(s => s.signalement?.categorie?.nom).filter(Boolean))];

//   // Filtrage combiné : catégorie + recherche + date
//   const filteredSignalements = signalements.filter((s) => {
//     const categoryMatch = selectedCategory === '' || s.signalement?.categorie?.nom === selectedCategory;
//     const searchMatch = s.signalement?.titre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       s.signalement?.description?.toLowerCase().includes(searchTerm.toLowerCase());
   
//     return categoryMatch && searchMatch ;
//   });

//   const handleShowDetails = (signalementId) => {
//     setShowDetails(signalementId);
//   };

//   const handleCloseDetails = () => {
//     setShowDetails(null);
//   };
//   const [sortOrder, setSortOrder] = useState('desc'); 

//   const toggleSortOrder = () => {
//     setSortOrder(prev => (prev === 'desc' ? 'asc' : 'desc'));
//   };
//   const sortedSignalements = [...filteredSignalements].sort((a, b) => {
//     const dateA = new Date(a.signalement?.created_at);
//     const dateB = new Date(b.signalement?.created_at);
//     return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
//   });


//   return (
//     <AppLayout>
//       <div className="flex min-h-screen bg-gray-50">
//         <AgentSidebar />

//         <div className="flex-1 p-6 max-w-6xl mx-auto">
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold text-gray-800 mb-6">Mes Signalements Assignés</h1>

//             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 flex-wrap">
//               {/* Barre de recherche */}
//               <div className="relative flex-1">
//                 <Search className="absolute top-2.5 left-3 text-gray-400" size={18} />
//                 <input
//                   type="text"
//                   placeholder="Rechercher par titre ou description..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
//                 />
//               </div>

//               {/* Sélecteur catégorie */}
//               <div className="flex items-center space-x-3 bg-white p-2 rounded-lg shadow-sm">
//                 <Filter size={18} className="text-gray-500" />
//                 <select
//                   value={selectedCategory}
//                   onChange={(e) => setSelectedCategory(e.target.value)}
//                   className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
//                 >
//                   <option value="">Toutes les catégories</option>
//                   {categories.map((cat, index) => (
//                     <option key={index} value={cat}>{cat}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Filtrage par date */}
//               <div className="flex items-center space-x-2">
//                 <Calendar size={16} className="text-gray-500" />
//                 <button
//                   onClick={toggleSortOrder}
//                   className="px-4 py-2 text-sm bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-gray-200 transition"
//                 >
//                   Trier: {sortOrder === 'desc' ? 'Nouveaux → Anciens' : 'Anciens → Nouveaux'}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Barre d'information */}
//           <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-md shadow-sm">
//             <div className="flex">
//               <div className="flex-shrink-0">
//                 <AlertTriangle className="h-5 w-5 text-blue-500" />
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm text-blue-700">
//                   {filteredSignalements.length} signalement(s) correspondent à votre recherche.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Liste filtrée */}
//           <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//             {sortedSignalements.length > 0 ? (
//               sortedSignalements.map((s) => (
//                 <div key={s.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
//                   <div className="p-4 flex flex-col md:flex-row md:items-center md:justify-between">
//                     <div className="flex-1">
//                       <div className="flex items-center mb-2">
//                         <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${s.resolution_status === 'Terminé'
//                           ? 'bg-green-100 text-green-800'
//                           : 'bg-yellow-100 text-yellow-800'}`}>
//                           {s.resolution_status === 'Terminé'
//                             ? <CheckCircle size={14} className="mr-1" />
//                             : <AlertTriangle size={14} className="mr-1" />}
//                           {s.resolution_status}
//                         </span>
//                         {s.signalement?.categorie?.nom && (
//                           <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-gray-800">
//                             {s.signalement.categorie.nom}
//                           </span>
//                         )}
//                       </div>
//                       <h3 className="font-medium text-gray-900 mb-1">{s.signalement.titre}</h3>
//                       <p className="text-sm text-gray-500 line-clamp-1">{s.signalement.description}</p>
//                       <div className="mt-2 text-xs text-gray-500">{s.signalement.adresse}</div>
//                       <div className="mt-1 text-xs text-gray-400">Créé le : {new Date(s.created_at).toLocaleDateString()}</div>
//                     </div>
//                     <div className="flex mt-4 md:mt-0 space-x-3">
//                       <button
//                         onClick={() => handleShowDetails(s.id)}
//                         className="flex items-center justify-center px-4 py-2 border border-blue-300 rounded-md shadow-sm text-sm font-medium text-blue-700 bg-white hover:bg-blue-50 transition"
//                       >
//                         <Eye size={16} className="mr-2" />
//                         Détails
//                       </button>
//                       {s.resolution_status !== 'Terminé' && (
//                         <button
//                           onClick={() => router.get(`/agent/intervention/${s.id}/editStatut?source=encours`)}
//                           className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition"
//                         >
//                           <CheckCircle size={16} className="mr-2" />
//                           Marquer terminé
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="p-8 text-center">
//                 <p className="text-gray-500">Aucun signalement trouvé.</p>
//               </div>
//             )}
//           </div>

//           {/* Modal détails */}
//           {showDetails && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//               <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
//                 <div className="flex justify-between items-center p-4 border-b">
//                   <h2 className="text-xl font-semibold text-gray-800">Détails du Signalement</h2>
//                   <button
//                     onClick={handleCloseDetails}
//                     className="p-1 rounded-full hover:bg-gray-100 transition"
//                   >
//                     <X size={20} className="text-gray-500" />
//                   </button>
//                 </div>
//                 <div className="p-6 overflow-y-auto">
//                   <SignalementDetails
//                     signalement={signalements.find(s => s.id === showDetails).signalement}
//                   />
//                 </div>
//                 <div className="p-4 border-t bg-gray-50 flex justify-end">
//                   <button
//                     onClick={handleCloseDetails}
//                     className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
//                   >
//                     Fermer
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </AppLayout>
//   );
// }

import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import AgentSidebar from '@/Components/AgentSidebar';
import SignalementDetails from './SignalementDetails';
import { X, Eye, CheckCircle, AlertTriangle, Filter, Search, Calendar } from 'lucide-react';

export default function MesSignalements({ signalements }) {
  const [showDetails, setShowDetails] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');

  const categories = [...new Set(signalements.map(s => s.signalement?.categorie?.nom).filter(Boolean))];

  const filteredSignalements = signalements.filter((s) => {
    const categoryMatch = selectedCategory === '' || s.signalement?.categorie?.nom === selectedCategory;
    const searchMatch =
      s.signalement?.titre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.signalement?.description?.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const sortedSignalements = [...filteredSignalements].sort((a, b) => {
    const dateA = new Date(a.signalement?.created_at);
    const dateB = new Date(b.signalement?.created_at);
    return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
  });

  const handleShowDetails = (signalementId) => {
    setShowDetails(signalementId);
  };

  const handleCloseDetails = () => {
    setShowDetails(null);
  };

  const toggleSortOrder = () => {
    setSortOrder(prev => (prev === 'desc' ? 'asc' : 'desc'));
  };

  const selectedSignalement = signalements.find(s => s.id === showDetails);

  return (
    <AppLayout>
      <div className="flex min-h-screen bg-gray-50">
        <AgentSidebar />

        <div className="flex-1 p-6 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Mes Signalements Assignés</h1>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 flex-wrap">
              {/* Barre de recherche */}
              <div className="relative flex-1">
                <Search className="absolute top-2.5 left-3 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Rechercher par titre ou description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>

              {/* Filtrage catégorie */}
              <div className="flex items-center space-x-3 bg-white p-2 rounded-lg shadow-sm">
                <Filter size={18} className="text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
                >
                  <option value="">Toutes les catégories</option>
                  {categories.map((cat, index) => (
                    <option key={index} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Tri par date */}
              <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-gray-500" />
                <button
                  onClick={toggleSortOrder}
                  className="px-4 py-2 text-sm bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-gray-200 transition"
                >
                  Trier: {sortOrder === 'desc' ? 'Nouveaux → Anciens' : 'Anciens → Nouveaux'}
                </button>
              </div>
            </div>
          </div>

          {/* Barre d'information */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-md shadow-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-blue-500" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  {filteredSignalements.length} signalement(s) correspondent à votre recherche.
                </p>
              </div>
            </div>
          </div>

          {/* Liste signalements */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {sortedSignalements.length > 0 ? (
              sortedSignalements.map((s) => (
                <div key={s.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <div className="p-4 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          s.resolution_status === 'Terminé'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {s.resolution_status === 'Terminé'
                            ? <CheckCircle size={14} className="mr-1" />
                            : <AlertTriangle size={14} className="mr-1" />}
                          {s.resolution_status}
                        </span>
                        {s.signalement?.categorie?.nom && (
                          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-gray-800">
                            {s.signalement.categorie.nom}
                          </span>
                        )}
                      </div>
                      <h3 className="font-medium text-gray-900 mb-1">{s.signalement.titre}</h3>
                      <p className="text-sm text-gray-500 line-clamp-1">{s.signalement.description}</p>
                      <div className="mt-2 text-xs text-gray-500">{s.signalement.adresse}</div>
                      <div className="mt-1 text-xs text-gray-400">
                        Créé le : {new Date(s.signalement?.created_at).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex mt-4 md:mt-0 space-x-3">
                      <button
                        onClick={() => handleShowDetails(s.id)}
                        className="flex items-center justify-center px-4 py-2 border border-blue-300 rounded-md shadow-sm text-sm font-medium text-blue-700 bg-white hover:bg-blue-50 transition"
                      >
                        <Eye size={16} className="mr-2" />
                        Détails
                      </button>
                      {s.resolution_status !== 'Terminé' && (
                        <button
                          onClick={() => router.get(`/agent/intervention/${s.id}/editStatut?source=encours`)}
                          className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition"
                        >
                          <CheckCircle size={16} className="mr-2" />
                          Marquer terminé
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-500">Aucun signalement trouvé.</p>
              </div>
            )}
          </div>

          {/* Modal détails */}
          {showDetails && selectedSignalement && selectedSignalement.signalement && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                <div className="flex justify-between items-center p-4 border-b">
                  <h2 className="text-xl font-semibold text-gray-800">Détails du Signalement</h2>
                  <button
                    onClick={handleCloseDetails}
                    className="p-1 rounded-full hover:bg-gray-100 transition"
                  >
                    <X size={20} className="text-gray-500" />
                  </button>
                </div>
                <div className="p-6 overflow-y-auto">
                  <SignalementDetails signalement={selectedSignalement.signalement} />
                </div>
                <div className="p-4 border-t bg-gray-50 flex justify-end">
                  <button
                    onClick={handleCloseDetails}
                    className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
