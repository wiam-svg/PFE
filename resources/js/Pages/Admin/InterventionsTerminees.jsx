
// import React, { useState } from 'react';
// import { router } from '@inertiajs/react';
// import AppLayout from '@/Layouts/AppLayout';
// import AdminSidebar from '@/Components/AdminSidebar';

// export default function InterventionsTerminees({ interventions }) {
//   const [selected, setSelected] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [commentaire, setCommentaire] = useState('');
//   const [rejectionId, setRejectionId] = useState(null);
//    console.log(interventions);
//   const handleAction = (id, action) => {
//     if (action === 'valider') {
//       router.post(`/admin/intervention/${id}/valider`);
//     } else if (action === 'rejeter') {
//       setShowModal(true);
//       setRejectionId(id);
//     } else if (action === 'detail') {
//       router.get(`/admin/intervention/${id}/detail_I_Atermine`);
//     }
//   };

//   const handleRejectionSubmit = () => {
//     router.post(`/admin/intervention/${rejectionId}/rejeter`, { commentaire_admin: commentaire }, {
//       onSuccess: () => {
//         setShowModal(false);
//         setCommentaire('');
//         setRejectionId(null);
//       }
//     });
//   };

//   return (
//     <AppLayout>
//        <div className="flex">
//         <AdminSidebar/>
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Interventions Terminées à Valider</h1>

//       <table className="w-full border text-left">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="p-2">Titre</th>
//             <th>Agent</th>
//             <th>Description</th>
//             <th>Date Début</th>
//             <th>Date Fin</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {interventions.map((i) => (
//             <tr key={i.id} className="border-b">
//               <td className="p-2">{i.signalement?.titre}</td>
//               <td>{i.user?.nom}</td>
//               <td>{i.description_action}</td>
//               <td>{i.dateDebut}</td>
//               <td>{i.dateFin}</td>
//               <td>
//                 <div className="relative">
//                   <button
//                     onClick={() => setSelected(selected === i.id ? null : i.id)}
//                     className="text-gray-600 hover:text-black"
//                   >
//                     ⋮
//                   </button>

//                   {selected === i.id && (
//                     <div className="absolute right-0 mt-1 w-40 bg-white shadow border rounded z-10">
//                       <button
//                         onClick={() => handleAction(i.id, 'detail')}
//                         className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                       >
//                         Voir les détails
//                       </button>
//                       <button
//                         onClick={() => handleAction(i.id, 'valider')}
//                         className="block w-full text-left px-4 py-2 hover:bg-green-100"
//                       >
//                         Valider
//                       </button>
//                       <button
//                         onClick={() => handleAction(i.id, 'rejeter')}
//                         className="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
//                       >
//                         Rejeter
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* MODALE POUR REJET */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h2 className="text-lg font-semibold mb-4">Commentaire de rejet</h2>
//             <textarea
//               value={commentaire}
//               onChange={(e) => setCommentaire(e.target.value)}
//               className="w-full p-2 border rounded mb-4"
//               rows="4"
//               placeholder="Pourquoi cette intervention est rejetée ?"
//             />
//             <div className="flex justify-end gap-2">
//               <button
//                 onClick={() => {
//                   setShowModal(false);
//                   setCommentaire('');
//                 }}
//                 className="px-4 py-2 bg-gray-300 rounded"
//               >
//                 Annuler
//               </button>
//               <button
//                 onClick={handleRejectionSubmit}
//                 className="px-4 py-2 bg-red-600 text-white rounded"
//               >
//                 Rejeter
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//     </div>
//     </AppLayout>
//   );
// }
import React, { useState, useRef, useEffect } from 'react';
import { router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import AdminSidebar from '@/Components/AdminSidebar';
import { Search, MapPin, Tag, FileText, CheckCircle, XCircle, Menu, X } from 'lucide-react';

export default function InterventionsTerminees({ interventions }) {
  const [showModal, setShowModal] = useState(false);
  const [commentaire, setCommentaire] = useState('');
  const [rejectionId, setRejectionId] = useState(null);
  const [search, setSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategorie, setSelectedCategorie] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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

  const handleAction = (id, action) => {
    if (action === 'valider') {
      router.post(`/admin/intervention/${id}/valider`);
    } else if (action === 'rejeter') {
      setShowModal(true);
      setRejectionId(id);
    } else if (action === 'detail') {
      router.get(`/admin/intervention/${id}/detail_I_Atermine`);
    }
  };

  const handleRejectionSubmit = () => {
    router.post(`/admin/intervention/${rejectionId}/rejeter`, {
      commentaire_admin: commentaire,
    }, {
      onSuccess: () => {
        setShowModal(false);
        setCommentaire('');
        setRejectionId(null);
      }
    });
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
        .map(intervention => intervention.signalement)
        .filter(signalement => signalement)
        .map(signalement => signalement.ville)
    ),
  ];

  const categories = [
    ...new Set(
      interventions
        .map(intervention => intervention.signalement)
        .filter(signalement => signalement && signalement.categorie)
        .map(signalement => signalement.categorie.nom)
    ),
  ];

  return (
    <AppLayout>
      <div className="flex min-h-screen bg-gray-50">
        {/* Barre latérale - approche similaire à Assignments */}
        <div className={`${sidebarOpen ? 'fixed inset-0 z-50' : 'hidden'} md:relative md:block`}>
          <div className={`${sidebarOpen ? 'fixed w-64 h-full z-50' : ''} md:relative`}>
            <AdminSidebar />
            {/* Bouton de fermeture de la sidebar sur mobile uniquement */}
            {sidebarOpen && (
              <button
                className="absolute top-4 right-4 md:hidden bg-red-700 text-white p-1 rounded-full"
                onClick={toggleSidebar}
              >
                <X size={20} />
              </button>
            )}
          </div>
          {/* Overlay pour fermer la sidebar en cliquant à l'extérieur sur mobile */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={toggleSidebar}
            ></div>
          )}
        </div>

        {/* Contenu principal */}
        <div className="flex-1 overflow-hidden">
          {/* En-tête avec bouton de menu sur mobile */}
          <div className="bg-white border-b border-gray-200 p-4 md:p-6 flex justify-between items-center">
            <h1 className="text-xl md:text-3xl font-bold text-red-800 flex items-center">
              Interventions Terminées
              <span className="ml-2 text-red-700 text-sm md:text-xl bg-red-100 px-2 md:px-3 py-1 rounded-full">
                {interventions.length} à valider
              </span>
            </h1>

            {/* Bouton de menu sur mobile uniquement */}
            <button
              className="md:hidden text-gray-700 hover:text-red-700"
              onClick={toggleSidebar}
            >
              <Menu size={24} />
            </button>
          </div>

          <div className="p-4 md:p-8">
            {/* Recherche et filtres */}
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
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Vue tableau pour écrans md et plus */}
            <div className="hidden md:block">
              <div className="bg-white rounded-xl shadow-lg border border-red-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-red-700 text-white">
                      <tr>
                        <th className="p-4 text-left font-medium">Titre</th>
                        <th className="p-4 text-left font-medium">Agent</th>
                        <th className="p-4 text-left font-medium">Description</th>
                        <th className="p-4 text-left font-medium">Date Début</th>
                        <th className="p-4 text-left font-medium">Date Fin</th>
                        <th className="p-4 text-center font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-red-100">
                      {filteredSignalements.map((i) => (
                        <tr key={i.id} className="hover:bg-red-50 transition-colors">
                          <td className="p-4">
                            <div className="font-medium">{i.signalement?.titre}</div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center">
                                <span className="text-red-600 font-bold">
                                  {i.user?.nom ? i.user.nom[0] : "?"}
                                </span>
                              </div>
                              <div>
                                <p className="font-medium">{i.user?.nom}</p>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            {i.description_action && i.description_action.length > 60 
                              ? `${i.description_action.substring(0, 60)}...` 
                              : i.description_action}
                          </td>
                          <td className="p-4">{i.dateDebut}</td>
                          <td className="p-4">{i.dateFin}</td>
                          <td className="p-4">
                            <div className="flex items-center justify-center gap-2">
                              <button
                                onClick={() => handleAction(i.id, 'detail')}
                                className="px-3 py-2 bg-gray-100 text-gray-800 font-medium text-sm rounded-lg hover:bg-gray-200 transition flex items-center gap-1"
                              >
                                <FileText size={14} />
                                Détails
                              </button>
                              <button
                                onClick={() => handleAction(i.id, 'valider')}
                                className="px-3 py-2 bg-green-100 text-green-800 font-medium text-sm rounded-lg hover:bg-green-200 transition flex items-center gap-1"
                              >
                                <CheckCircle size={14} />
                                Valider
                              </button>
                              <button
                                onClick={() => handleAction(i.id, 'rejeter')}
                                className="px-3 py-2 bg-red-100 text-red-800 font-medium text-sm rounded-lg hover:bg-red-200 transition flex items-center gap-1"
                              >
                                <XCircle size={14} />
                                Rejeter
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Vue cartes pour écrans xs et sm */}
            <div className="md:hidden space-y-4">
              {filteredSignalements.map((i) => (
                <div key={i.id} className="bg-white rounded-lg shadow-md p-4 border-l-4 border-red-500">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{i.signalement?.titre}</h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-bold">
                        {i.user?.nom ? i.user.nom[0] : "?"}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold">{i.user?.nom}</p>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-sm text-gray-600">Début: {i.dateDebut}</p>
                    <p className="text-sm text-gray-600">Fin: {i.dateFin}</p>
                  </div>

                  <div className="flex flex-wrap justify-end gap-2 mt-2">
                    <button
                      onClick={() => handleAction(i.id, 'detail')}
                      className="px-3 py-1 bg-gray-100 text-gray-800 font-semibold text-sm rounded-lg flex items-center gap-1"
                    >
                      <FileText size={14} />
                      Détails
                    </button>
                    <button
                      onClick={() => handleAction(i.id, 'valider')}
                      className="px-3 py-1 bg-green-100 text-green-800 font-semibold text-sm rounded-lg flex items-center gap-1"
                    >
                      <CheckCircle size={14} />
                      Valider
                    </button>
                    <button
                      onClick={() => handleAction(i.id, 'rejeter')}
                      className="px-3 py-1 bg-red-100 text-red-800 font-semibold text-sm rounded-lg flex items-center gap-1"
                    >
                      <XCircle size={14} />
                      Rejeter
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Rejet */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-red-800 mb-4">Commentaire de rejet</h2>
            <textarea
              value={commentaire}
              onChange={(e) => setCommentaire(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-red-800"
              rows="4"
              placeholder="Pourquoi cette intervention est rejetée ?"
            />
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setShowModal(false);
                  setCommentaire('');
                }}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 flex items-center"
              >
                <XCircle size={16} className="mr-2" />
                Annuler
              </button>
              <button
                onClick={handleRejectionSubmit}
                className="px-4 py-2 bg-red-800 text-white rounded hover:bg-red-900 flex items-center"
              >
                <XCircle size={16} className="mr-2" />
                Rejeter
              </button>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
}