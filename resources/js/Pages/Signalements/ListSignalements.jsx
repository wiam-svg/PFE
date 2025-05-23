





// import React, { useState, useEffect } from 'react';
// import { Search, Filter, X, MapPin } from 'lucide-react';
// import SignalementItem from './SignalementItem'; 
// import AppLayout from '@/Layouts/AppLayout';
// import { usePage } from '@inertiajs/react';

// export default function SignalementList({ signalements, Usere_id }) {
    
//   const [filteredSignalements, setFilteredSignalements] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterParams, setFilterParams] = useState({
//     statut: '',
//     ville: '',
//     isUrgent: false,
//     showFilterMenu: false
//   });
//   // console.log(Usere_id);

//   const {auth} = usePage().props;
  


//   // Liste des statuts et villes pour les filtres
//   const statuts = ['en attente', 'en cours', 'resolu', 'rejtee'];
//   const villes = [...new Set(signalements.map(item => item.ville))];

//   // Effet pour filtrer les signalements au changement des filtres ou de la recherche
//   useEffect(() => {
//     filterSignalements();
//   }, [searchTerm, filterParams, signalements]);

//   // Fonction pour filtrer les signalements
//   const filterSignalements = () => {
//     let results = [...signalements];

//     // Filtre par terme de recherche (titre ou description)
//     if (searchTerm) {
//       const term = searchTerm.toLowerCase();
//       results = results.filter(item => 
//         item.titre.toLowerCase().includes(term) || 
//         item.description.toLowerCase().includes(term) ||
//         item.adresse.toLowerCase().includes(term)
//       );

//     }

//     // Filtre par statut
//     if (filterParams.statut) {
//       results = results.filter(item => item.statut === filterParams.statut);
//     }

//     // Filtre par ville
//     if (filterParams.ville) {
//       results = results.filter(item => item.ville === filterParams.ville);
//     }

//     // Filtre par urgence
//     if (filterParams.isUrgent) {
//       results = results.filter(item => item.votes && item.votes[0]?.type);
//     }

    

//     setFilteredSignalements(results);
//   };

//   // Réinitialiser les filtres
//   const resetFilters = () => {
//     setFilterParams({
//       statut: '',
//       ville: '',
//       isUrgent: false,
//       dateDu: '',
//       dateAu: '',
//       showFilterMenu: false
//     });
//     setSearchTerm('');
//   };

//   // Basculer l'affichage du menu des filtres
//   const toggleFilterMenu = () => {
//     setFilterParams(prev => ({
//       ...prev,
//       showFilterMenu: !prev.showFilterMenu
//     }));
//   };

//   return (
//     <AppLayout>
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//       {/* Barre de recherche et filtres */}
//       <div className="mb-6 bg-white rounded-xl shadow-md p-4">
//         <div className="flex flex-col md:flex-row gap-4">
//           {/* Barre de recherche */}
//           <div className="relative flex-1">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//               <Search className="w-5 h-5 text-gray-400" />
//             </div>
//             <input 
//               type="text" 
//               className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 border-none focus:ring-2 focus:ring-red-300 text-sm placeholder-gray-400"
//               placeholder="Rechercher par titre, description ou adresse..." 
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>

//           {/* Bouton pour afficher/masquer les filtres */}
//           <button
//             onClick={toggleFilterMenu}
//             className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//               filterParams.showFilterMenu 
//                 ? 'bg-red-100 text-red-600' 
//                 : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//             }`}
//           >
//             <Filter className="w-4 h-4 mr-2" />
//             Filtres
//             {(filterParams.statut || filterParams.ville || filterParams.isUrgent ) && (
//               <span className="ml-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                 {Object.values(filterParams).filter(value => value && typeof value !== 'boolean' && value !== 'showFilterMenu').length +
//                  (filterParams.isUrgent ? 1 : 0)}
//               </span>
//             )}
//           </button>

//           {/* Bouton pour réinitialiser les filtres */}
//           {(searchTerm || filterParams.statut || filterParams.ville || filterParams.isUrgent ) && (
//             <button
//               onClick={resetFilters}
//               className="flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
//             >
//               <X className="w-4 h-4 mr-2" />
//               Réinitialiser
//             </button>
//           )}
//         </div>

//         {/* Menu de filtres avancés */}
//         {filterParams.showFilterMenu && (
//           <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-fadeIn pt-4 border-t border-gray-100">
//             {/* Filtre par statut */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
//               <select
//                 value={filterParams.statut}
//                 onChange={(e) => setFilterParams({...filterParams, statut: e.target.value})}
//                 className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
//               >
//                 <option value="">Tous</option>
//                 {statuts.map(statut => (
//                   <option key={statut} value={statut}>{statut}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Filtre par ville */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
//               <select
//                 value={filterParams.ville}
//                 onChange={(e) => setFilterParams({...filterParams, ville: e.target.value})}
//                 className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
//               >
//                 <option value="">Toutes</option>
//                 {villes.map(ville => (
//                   <option key={ville} value={ville}>{ville}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Filtre par urgence */}
//             <div>
             
//               <div className="relative inline-block w-10 mr-2 align-middle select-none mt-1">
//                 <input 
//                   type="checkbox" 
//                   id="toggle-urgent" 
//                   className="sr-only"
//                   checked={filterParams.isUrgent}
//                   onChange={() => setFilterParams({...filterParams, isUrgent: !filterParams.isUrgent})}
//                 />
//                 <span className="ml-19 text-sm">les Urgents</span>
//                 <label 
//                   htmlFor="toggle-urgent" 
//                   className={`block overflow-hidden h-6 rounded-full cursor-pointer ${filterParams.isUrgent ? 'bg-red-500' : 'bg-gray-300'}`}
//                 >
//                   <span className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-300 ease-in-out ${filterParams.isUrgent ? 'translate-x-4' : 'translate-x-0'}`}></span>
//                 </label>
//                 {/* <span className="ml-12 text-sm">les Urgents</span> */}
//               </div>
//             </div>

            
//           </div>
//         )}
//       </div>

//       {/* Résultats de la recherche */}
//       <div className="mb-4 flex justify-between items-center">
//         <h2 className="text-xl font-bold text-gray-800">
//           {filteredSignalements.length} signalement{filteredSignalements.length !== 1 ? 's' : ''} trouvé{filteredSignalements.length !== 1 ? 's' : ''}
//         </h2>
        
//         {(searchTerm || filterParams.statut || filterParams.ville || filterParams.isUrgent || filterParams.dateDu || filterParams.dateAu) && (
//           <div className="flex gap-2 flex-wrap">
//             {/* Badges des filtres actifs */}
//             {searchTerm && (
//               <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
//                 Recherche: {searchTerm}
//                 <button 
//                   onClick={() => setSearchTerm('')}
//                   className="ml-1 text-gray-500 hover:text-gray-700"
//                 >
//                   <X className="w-3 h-3" />
//                 </button>
//               </span>
//             )}
            
//             {filterParams.statut && (
//               <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
//                 Statut: {filterParams.statut}
//                 <button 
//                   onClick={() => setFilterParams({...filterParams, statut: ''})}
//                   className="ml-1 text-gray-500 hover:text-gray-700"
//                 >
//                   <X className="w-3 h-3" />
//                 </button>
//               </span>
//             )}
            
//             {filterParams.ville && (
//               <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
//                 <MapPin className="w-3 h-3 mr-1" /> {filterParams.ville}
//                 <button 
//                   onClick={() => setFilterParams({...filterParams, ville: ''})}
//                   className="ml-1 text-gray-500 hover:text-gray-700"
//                 >
//                   <X className="w-3 h-3" />
//                 </button>
//               </span>
//             )}
            
//             {filterParams.isUrgent && (
//               <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
//                 Urgents uniquement
//                 <button 
//                   onClick={() => setFilterParams({...filterParams, isUrgent: false})}
//                   className="ml-1 text-red-600 hover:text-red-800"
//                 >
//                   <X className="w-3 h-3" />
//                 </button>
//               </span>
//             )}
            
//             {(filterParams.dateDu || filterParams.dateAu) && (
//               <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
//                 Date: {filterParams.dateDu && new Date(filterParams.dateDu).toLocaleDateString()}
//                 {filterParams.dateDu && filterParams.dateAu && ' - '}
//                 {filterParams.dateAu && new Date(filterParams.dateAu).toLocaleDateString()}
//                 <button 
//                   onClick={() => setFilterParams({...filterParams, dateDu: '', dateAu: ''})}
//                   className="ml-1 text-gray-500 hover:text-gray-700"
//                 >
//                   <X className="w-3 h-3" />
//                 </button>
//               </span>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Liste des signalements filtrés */}
//       <div className="space-y-4">
//         {filteredSignalements.length > 0 ? (
//           filteredSignalements.map(signalement => (
//             <SignalementItem
//               key={signalement.id}
//               signalement={signalement}
//               currentUser={Usere_id}
//             />
//           ))
//         ) : (
//           <div className="text-center py-10 bg-white rounded-xl shadow-md">
//             <div className="mx-auto h-20 w-20 text-gray-400 mb-4">
//               <Filter className="w-full h-full" />
//             </div>
//             <h3 className="text-lg font-medium text-gray-900">Aucun signalement trouvé</h3>
//             <p className="mt-1 text-gray-500">
//               Essayez de modifier vos critères de recherche ou de filtrage.
//             </p>
//             <button
//               onClick={resetFilters}
//               className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-red-500 to-indigo-600 hover:from-red-600 hover:to-indigo-700"
//             >
//               Réinitialiser tous les filtres
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//     </AppLayout>
//   );
// }


import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Filter, X, MapPin } from 'lucide-react';
import SignalementItem from './SignalementItem'; 
import AppLayout from '@/Layouts/AppLayout';
import { usePage } from '@inertiajs/react';

export default function SignalementList({ signalements, Usere_id }) {
  const { t } = useTranslation();
  const [filteredSignalements, setFilteredSignalements] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterParams, setFilterParams] = useState({
    statut: '',
    ville: '',
    isUrgent: false,
    showFilterMenu: false
  });

  const { auth } = usePage().props;
  
  const statuts = ['en attente', 'en cours', 'resolu', 'rejtee'];
  const villes = [...new Set(signalements.map(item => item.ville))];

  useEffect(() => {
    filterSignalements();
  }, [searchTerm, filterParams, signalements]);

  const filterSignalements = () => {
    let results = [...signalements];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(item => 
        item.titre.toLowerCase().includes(term) || 
        item.description.toLowerCase().includes(term) ||
        item.adresse.toLowerCase().includes(term)
      );
    }

    if (filterParams.statut) {
      results = results.filter(item => item.statut === filterParams.statut);
    }

    if (filterParams.ville) {
      results = results.filter(item => item.ville === filterParams.ville);
    }

    if (filterParams.isUrgent) {
      results = results.filter(item => item.votes && item.votes[0]?.type);
    }

    setFilteredSignalements(results);
  };

  const resetFilters = () => {
    setFilterParams({
      statut: '',
      ville: '',
      isUrgent: false,
      dateDu: '',
      dateAu: '',
      showFilterMenu: false
    });
    setSearchTerm('');
  };

  const toggleFilterMenu = () => {
    setFilterParams(prev => ({
      ...prev,
      showFilterMenu: !prev.showFilterMenu
    }));
  };

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Barre de recherche et filtres */}
        <div className="mb-6 bg-white rounded-xl shadow-md p-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Barre de recherche */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input 
                type="text" 
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 border-none focus:ring-2 focus:ring-red-300 text-sm placeholder-gray-400"
                placeholder={t('signalementlist.search.placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Bouton pour afficher/masquer les filtres */}
            <button
              onClick={toggleFilterMenu}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filterParams.showFilterMenu 
                  ? 'bg-red-100 text-red-600' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {t('signalementlist.filters.button')}
              {(filterParams.statut || filterParams.ville || filterParams.isUrgent) && (
                <span className="ml-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {Object.values(filterParams).filter(value => value && typeof value !== 'boolean' && value !== 'showFilterMenu').length +
                   (filterParams.isUrgent ? 1 : 0)}
                </span>
              )}
            </button>

            {/* Bouton pour réinitialiser les filtres */}
            {(searchTerm || filterParams.statut || filterParams.ville || filterParams.isUrgent) && (
              <button
                onClick={resetFilters}
                className="flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                <X className="w-4 h-4 mr-2" />
                {t('signalementlist.filters.reset')}
              </button>
            )}
          </div>

          {/* Menu de filtres avancés */}
          {filterParams.showFilterMenu && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-fadeIn pt-4 border-t border-gray-100">
              {/* Filtre par statut */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('signalementlist.filters.status.label')}
                </label>
                <select
                  value={filterParams.statut}
                  onChange={(e) => setFilterParams({...filterParams, statut: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
                >
                  <option value="">{t('signalementlist.filters.status.all')}</option>
                  {statuts.map(statut => (
                    <option key={statut} value={statut}>
                      {t(`signalementlist.status.${statut.replace(' ', '_')}`)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filtre par ville */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('signalementlist.filters.city.label')}
                </label>
                <select
                  value={filterParams.ville}
                  onChange={(e) => setFilterParams({...filterParams, ville: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
                >
                  <option value="">{t('signalementlist.filters.city.all')}</option>
                  {villes.map(ville => (
                    <option key={ville} value={ville}>{ville}</option>
                  ))}
                </select>
              </div>

              {/* Filtre par urgence */}
              <div>
                <div className="relative inline-block w-10 mr-2 align-middle select-none mt-1">
                  <input 
                    type="checkbox" 
                    id="toggle-urgent" 
                    className="sr-only"
                    checked={filterParams.isUrgent}
                    onChange={() => setFilterParams({...filterParams, isUrgent: !filterParams.isUrgent})}
                  />
                  <span className="ml-19 text-sm">{t('signalementlist.filters.urgent.label')}</span>
                  <label 
                    htmlFor="toggle-urgent" 
                    className={`block overflow-hidden h-6 rounded-full cursor-pointer ${filterParams.isUrgent ? 'bg-red-500' : 'bg-gray-300'}`}
                  >
                    <span className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-300 ease-in-out ${filterParams.isUrgent ? 'translate-x-4' : 'translate-x-0'}`}></span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Résultats de la recherche */}
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">
            {t('signalementlist.results.count', { count: filteredSignalements.length })}
          </h2>
          
          {(searchTerm || filterParams.statut || filterParams.ville || filterParams.isUrgent || filterParams.dateDu || filterParams.dateAu) && (
            <div className="flex gap-2 flex-wrap">
              {searchTerm && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  {t('signalementlist.results.search')}: {searchTerm}
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="ml-1 text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              
              {filterParams.statut && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  {t('signalementlist.results.status')}: {t(`signalementlist.status.${filterParams.statut.replace(' ', '_')}`)}
                  <button 
                    onClick={() => setFilterParams({...filterParams, statut: ''})}
                    className="ml-1 text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              
              {filterParams.ville && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  <MapPin className="w-3 h-3 mr-1" /> {filterParams.ville}
                  <button 
                    onClick={() => setFilterParams({...filterParams, ville: ''})}
                    className="ml-1 text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              
              {filterParams.isUrgent && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                  {t('signalementlist.results.urgent')}
                  <button 
                    onClick={() => setFilterParams({...filterParams, isUrgent: false})}
                    className="ml-1 text-red-600 hover:text-red-800"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              
              {(filterParams.dateDu || filterParams.dateAu) && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  {t('signalementlist.results.date')}: {filterParams.dateDu && new Date(filterParams.dateDu).toLocaleDateString()}
                  {filterParams.dateDu && filterParams.dateAu && ' - '}
                  {filterParams.dateAu && new Date(filterParams.dateAu).toLocaleDateString()}
                  <button 
                    onClick={() => setFilterParams({...filterParams, dateDu: '', dateAu: ''})}
                    className="ml-1 text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Liste des signalements filtrés */}
        <div className="space-y-4">
          {filteredSignalements.length > 0 ? (
            filteredSignalements.map(signalement => (
              <SignalementItem
                key={signalement.id}
                signalement={signalement}
                currentUser={Usere_id}
              />
            ))
          ) : (
            <div className="text-center py-10 bg-white rounded-xl shadow-md">
              <div className="mx-auto h-20 w-20 text-gray-400 mb-4">
                <Filter className="w-full h-full" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                {t('signalementlist.empty.title')}
              </h3>
              <p className="mt-1 text-gray-500">
                {t('signalementlist.empty.message')}
              </p>
              <button
                onClick={resetFilters}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-red-500 to-indigo-600 hover:from-red-600 hover:to-indigo-700"
              >
                {t('signalementlist.empty.reset_button')}
              </button>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}