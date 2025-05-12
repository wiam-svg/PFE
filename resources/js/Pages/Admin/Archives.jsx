// import React from 'react';
// import { Archive, AlertTriangle } from 'lucide-react';
// import AppLayout from '@/Layouts/AppLayout';
// import AdminSidebar from '@/Components/AdminSidebar';

// const Archives = ({ archivedSignalements }) => {
//   return (
//     <AppLayout>
//       <div className="flex min-h-screen bg-gray-50">
//          <AdminSidebar />
//     <div className="max-w-7xl mx-auto p-6">
//       <div className="flex items-center gap-2 mb-6">
//         <Archive className="w-6 h-6 text-blue-600" />
//         <h1 className="text-2xl font-bold text-gray-800">Archives des Signalements</h1>
//       </div>

//       {archivedSignalements.length === 0 ? (
//         <div className="flex items-center gap-2 text-gray-600 bg-yellow-50 p-4 rounded-md">
//           <AlertTriangle className="w-5 h-5 text-yellow-500" />
//           <p>Aucun signalement archivé.</p>
//         </div>
//       ) : (
//         <div className="overflow-x-auto rounded-lg shadow-md">
//           <table className="min-w-full bg-white border border-gray-200">
//             <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
//               <tr>
//                 <th className="px-4 py-3 border-b">ID</th>
//                 <th className="px-4 py-3 border-b">Titre</th>
//                 <th className="px-4 py-3 border-b">Description</th>
//                 <th className="px-4 py-3 border-b">Statut</th>
//                 <th className="px-4 py-3 border-b">Catégorie</th>
//                 <th className="px-4 py-3 border-b">Utilisateur</th>
//                 <th className="px-4 py-3 border-b">Créé le</th>
//                 <th className="px-4 py-3 border-b">Supprimé le</th>
//                 <th className="px-4 py-3 border-b">Supprimé par (ID)</th>
//               </tr>
//             </thead>
//             <tbody className="text-sm text-gray-700">
//               {archivedSignalements.map((signalement) => (
//                 <tr key={signalement.id} className="hover:bg-gray-50 transition">
//                   <td className="px-4 py-2 border-b">{signalement.id}</td>
//                   <td className="px-4 py-2 border-b">{signalement.titre}</td>
//                   <td className="px-4 py-2 border-b">{signalement.description}</td>
//                   <td className="px-4 py-2 border-b">
//                     <span
//                       className={`px-2 py-1 rounded text-xs font-medium ${signalement.statut === 'urgent'
//                           ? 'bg-red-100 text-red-700'
//                           : 'bg-green-100 text-green-700'
//                         }`}
//                     >
//                       {signalement.statut}
//                     </span>
//                   </td>
//                   <td className="px-4 py-2 border-b">{signalement.categorie?.nom || 'N/A'}</td>
//                   <td className="px-4 py-2 border-b">
//                     {signalement.supprimé_par?.nom || 'Inconnu'}
//                   </td>

//                   <td className="px-4 py-2 border-b">{signalement.dateCreation}</td>
//                   <td className="px-4 py-2 border-b">{signalement.deleted_at}</td>
//                   <td className="px-4 py-2 border-b">{signalement.supprime_par}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//     </div>
//     </AppLayout>
//   );
// };

// export default Archives;


import React, { useState } from 'react';
import { Archive, AlertTriangle, ChevronDown, Filter, Search, Calendar, User, Tag } from 'lucide-react';
import AppLayout from '@/Layouts/AppLayout';
import AdminSidebar from '@/Components/AdminSidebar';

const Archives = ({ archivedSignalements }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Nouveaux états pour les filtres
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedUser, setSelectedUser] = useState('');

  // Filtrage des signalements selon le terme de recherche, la date et le nom d'utilisateur
  const filteredSignalements = archivedSignalements.filter(signalement =>
    (signalement.titre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      signalement.description?.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedDate ? signalement.deleted_at.includes(selectedDate) : true) &&
    (selectedUser ? signalement.supprimé_par?.nom.toLowerCase().includes(selectedUser.toLowerCase()) : true)
  );

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredSignalements.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredSignalements.length / itemsPerPage);

  return (
    <AppLayout>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
        <div className="md:block">
          <AdminSidebar />
        </div>

        <div className="flex-1 p-4 md:p-6">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Archive className="w-6 h-6 text-blue-600" />
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">Archives des Signalements</h1>
            </div>
            <p className="text-sm text-gray-500">Liste des signalements qui ont été archivés</p>
          </div>

          {/* Barre de recherche et filtres */}
          <div className="bg-white rounded-lg shadow-sm mb-6 p-4">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Rechercher un signalement..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1); // reset to page 1 on new search
                  }}
                />
              </div>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md"
              >
                <Filter className="h-4 w-4" />
                <span>Filtres</span>
                <ChevronDown className={`h-4 w-4 transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Filtres avancés (visuels uniquement) */}
            {isFilterOpen && (
              <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-700">Date d'archivage</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <input
                      type="date"
                      className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-md"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-700">Utilisateur</label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Nom utilisateur"
                      className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-md"
                      value={selectedUser}
                      onChange={(e) => setSelectedUser(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Liste des signalements */}
          {filteredSignalements.length === 0 ? (
            <div className="flex items-center gap-3 text-gray-600 bg-yellow-50 p-6 rounded-lg shadow-sm">
              <AlertTriangle className="w-6 h-6 text-yellow-500" />
              <div>
                <p className="font-medium">Aucun résultat</p>
                <p className="text-sm mt-1">Aucun signalement archivé ne correspond à votre recherche.</p>
              </div>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto rounded-lg shadow">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    <tr>
                      <th className="px-4 py-3 border-b">ID</th>
                      <th className="px-4 py-3 border-b">Titre</th>
                      <th className="px-4 py-3 border-b">Description</th>
                      <th className="px-4 py-3 border-b">Statut</th>
                      <th className="px-4 py-3 border-b">Catégorie</th>
                      <th className="px-4 py-3 border-b">Utilisateur</th>
                      <th className="px-4 py-3 border-b">Créé le</th>
                      <th className="px-4 py-3 border-b">Archivé le</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-700">
                    {currentItems.map(signalement => (
                      <tr key={signalement.id} className="hover:bg-gray-50 transition">
                        <td className="px-4 py-3 border-b">{signalement.id}</td>
                        <td className="px-4 py-3 border-b font-medium">{signalement.titre}</td>
                        <td className="px-4 py-3 border-b truncate">{signalement.description}</td>
                        <td className="px-4 py-3 border-b">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            signalement.statut === 'urgent'
                              ? 'bg-red-100 text-red-700'
                              : signalement.statut === 'résolu'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {signalement.statut}
                          </span>
                        </td>
                        <td className="px-4 py-3 border-b flex items-center gap-1">
                          <Tag className="w-3 h-3 text-gray-400" />
                          <span>{signalement.categorie?.nom || 'N/A'}</span>
                        </td>
                        <td className="px-4 py-3 border-b">{signalement.supprimé_par?.nom || 'Inconnu'}</td>
                        <td className="px-4 py-3 border-b text-gray-500">{signalement.dateCreation}</td>
                        <td className="px-4 py-3 border-b text-gray-500">{signalement.deleted_at}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-6 gap-2">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border rounded disabled:text-gray-400"
                >
                  Précédent
                </button>
                <span className="px-4 py-1">{currentPage} / {totalPages}</span>
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border rounded disabled:text-gray-400"
                >
                  Suivant
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Archives;
