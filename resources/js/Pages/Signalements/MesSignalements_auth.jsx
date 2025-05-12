// import React from 'react';
// import { usePage } from '@inertiajs/react';
// import AppLayout from '@/Layouts/AppLayout';

// const MesSignalements_auth = ({ signalements,User_id }) => {
//   // const { auth } = usePage().props; // Utilisateur authentifié
//   console.log(signalements);
//   console.log(User_id)

//   return (
//     <AppLayout>
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Mes Signalements</h1>

//       {signalements.length > 0 ? (
//         signalements.map(signalement => (
//           <div key={signalement.id} className="border p-4 rounded mb-4">
//             <h3 className="font-semibold text-lg">{signalement.titre}</h3>
//             <p>{signalement.description}</p>
//             <p><strong>Catégorie :</strong> {signalement.categorie.nom}</p>
//             <p><strong>Status :</strong> {signalement.statut}</p>

//             <div className="mt-2">
//               <p><strong>Votes :</strong> {signalement.votes.length}</p>
//             </div>

//             <div className="mt-2">
//               <h4 className="font-semibold">Commentaires :</h4>
//               {signalement.commentaire.length > 0 ? (
//                 signalement.commentaire.map(comentairee => (
//                   <div key={comentairee.id} className="pl-2 border-l ml-2">
//                     <p><strong>{comentairee.user.nom} :</strong> {comentairee.contenu}</p>
//                   </div>
//                 ))
//               ) : (
//                 <p>Aucun commentaire.</p>
//               )}
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>Aucun signalement trouvé.</p>
//       )}
//     </div>
//     </AppLayout>
//   );
// };

// export default MesSignalements_auth;




import React, { useState, useEffect } from 'react';
import { usePage, router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import {
  Clock,
  MessageCircle,
  ThumbsUp,
  AlertTriangle,
  Check,
  Clock3,
  Loader,
  Eye,
  Edit,
  ChevronDown,
  ChevronUp,
  Trash2,
  Filter
} from 'lucide-react';

const MesSignalements_auth = ({ signalements, User_id }) => {
  // État pour gérer les signalements développés
  const [expandedSignalements, setExpandedSignalements] = useState({});
  // États pour les filtres
  const [statusFilter, setStatusFilter] = useState('tous');
  const [categoryFilter, setCategoryFilter] = useState('toutes');
  // État pour les signalements filtrés
  const [filteredSignalements, setFilteredSignalements] = useState(signalements);

  // Extraire les catégories uniques à partir des signalements existants
  const uniqueCategories = [...new Set(signalements.map(s => JSON.stringify({ id: s.categorie.id, nom: s.categorie.nom })))]
    .map(category => JSON.parse(category))
    .sort((a, b) => a.nom.localeCompare(b.nom));

  // Appliquer les filtres lorsque les critères changent
  useEffect(() => {
    let filtered = [...signalements];

    // Filtrer par statut
    if (statusFilter !== 'tous') {
      filtered = filtered.filter(s => s.statut.toLowerCase() === statusFilter.toLowerCase());
    }

    // Filtrer par catégorie
    if (categoryFilter !== 'toutes') {
      filtered = filtered.filter(s => s.categorie.id.toString() === categoryFilter);
    }

    setFilteredSignalements(filtered);
  }, [statusFilter, categoryFilter, signalements]);

  // Fonction pour basculer l'état d'expansion d'un signalement
  const toggleExpand = (id) => {
    setExpandedSignalements(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Fonction pour obtenir l'icône et la couleur du statut
  const getStatusInfo = (statut) => {
    switch (statut.toLowerCase()) {
      case 'en attente':
        return { icon: <Clock className="h-5 w-5" />, color: 'bg-yellow-100 text-yellow-800', borderColor: 'border-yellow-300' };
      case 'validé':
        return { icon: <Check className="h-5 w-5" />, color: 'bg-green-100 text-green-800', borderColor: 'border-green-300' };
      case 'en cours':
        return { icon: <Loader className="h-5 w-5" />, color: 'bg-blue-100 text-blue-800', borderColor: 'border-blue-300' };
      case 'rejeté':
        return { icon: <AlertTriangle className="h-5 w-5" />, color: 'bg-red-100 text-red-800', borderColor: 'border-red-300' };
      case 'résolu':
        return { icon: <Check className="h-5 w-5" />, color: 'bg-green-100 text-green-800', borderColor: 'border-green-300' };
      default:
        return { icon: <Clock3 className="h-5 w-5" />, color: 'bg-gray-100 text-gray-800', borderColor: 'border-gray-300' };
    }
  };

  // Formatage de la date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Récupérer tous les statuts uniques des signalements
  const uniqueStatuses = ['tous', ...new Set(signalements.map(s => s.statut.toLowerCase()))];

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* En-tête avec dégradé */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Mes Signalements</h1>
          <p className="text-blue-100">Suivez l'état de vos signalements et leur progression</p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Total de signalements</p>
                <p className="text-2xl font-semibold">{signalements.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <Check className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Signalements résolus</p>
                <p className="text-2xl font-semibold">
                  {signalements.filter(s => s.statut.toLowerCase() === 'résolu' || s.statut.toLowerCase() === 'validé').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                <Clock className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">En attente/en cours</p>
                <p className="text-2xl font-semibold">
                  {signalements.filter(s => s.statut.toLowerCase() === 'en attente' || s.statut.toLowerCase() === 'en cours').length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filtres */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex items-center mb-3">
            <Filter className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-medium text-gray-800">Filtrer les signalements</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Filtre par statut */}
            <div>
              <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
              <select
                id="status-filter"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="tous">Tous les statuts</option>
                {uniqueStatuses.filter(status => status !== 'tous').map(status => (
                  <option key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Filtre par catégorie */}
            <div>
              <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
              <select
                id="category-filter"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="toutes">Toutes les catégories</option>
                {uniqueCategories.map(category => (
                  <option key={category.id} value={category.id.toString()}>
                    {category.nom}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Liste des signalements */}
        {filteredSignalements.length > 0 ? (
          <div className="space-y-4">
            {filteredSignalements.map(signalement => {
              const statusInfo = getStatusInfo(signalement.statut);
              const isExpanded = expandedSignalements[signalement.id] || false;

              return (
                <div
                  key={signalement.id}
                  className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${isExpanded ? 'border-2 border-blue-300' : 'border border-gray-200'}`}
                >
                  {/* En-tête du signalement (toujours visible) */}
                  <div
                    className="flex justify-between items-center p-5 cursor-pointer hover:bg-gray-50"
                    onClick={() => toggleExpand(signalement.id)}
                  >
                    <div className="flex items-center space-x-4">
                      {signalement.image && (
                        <img
                          src={`/storage/${signalement.image}`}
                          alt={signalement.titre}
                          className="h-12 w-12 object-cover rounded-md"
                        />
                      )}
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">{signalement.titre}</h3>
                        <p className="text-sm text-gray-500">
                          {signalement.ville && `${signalement.ville}${signalement.adresse ? `, ${signalement.adresse}` : ''}`}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className={`flex items-center space-x-1 text-sm px-3 py-1 rounded-full ${statusInfo.color}`}>
                        {statusInfo.icon}
                        <span>{signalement.statut}</span>
                      </span>
                      <div className="text-gray-500">
                        {isExpanded ?
                          <ChevronUp className="h-5 w-5" /> :
                          <ChevronDown className="h-5 w-5" />
                        }
                      </div>
                    </div>
                  </div>

                  {/* Contenu détaillé (visible seulement si développé) */}
                  {isExpanded && (
                    <div className="p-5 border-t border-gray-200 bg-gray-50">
                      {/* Description */}
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-500 mb-2">Description</h4>
                        <p className="text-gray-700 bg-white p-3 rounded-md border border-gray-200">{signalement.description}</p>
                      </div>

                      {/* Détails et Métadonnées */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-2">Détails</h4>
                          <div className="bg-white p-3 rounded-md border border-gray-200">
                            <p className="flex items-center text-sm mb-1">
                              <span className="font-medium w-28">Catégorie:</span>
                              <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                                {signalement.categorie.nom}
                              </span>
                            </p>
                            {signalement.created_at && (
                              <p className="flex items-center text-sm">
                                <span className="font-medium w-28">Créé le:</span>
                                <span className="text-gray-600">{formatDate(signalement.created_at)}</span>
                              </p>
                            )}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-2">Engagement</h4>
                          <div className="bg-white p-3 rounded-md border border-gray-200">
                            <p className="flex items-center text-sm mb-2">
                              <ThumbsUp className="h-4 w-4 text-blue-500 mr-2" />
                              <span className="font-medium">Votes:</span>
                              <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded-full">{signalement.votes.length}</span>
                            </p>
                            <p className="flex items-center text-sm">
                              <MessageCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span className="font-medium">Commentaires:</span>
                              <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded-full">{signalement.commentaire.length}</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Commentaires */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Commentaires
                        </h4>

                        {signalement.commentaire.length > 0 ? (
                          <div className="bg-white rounded-md border border-gray-200 divide-y divide-gray-200">
                            {signalement.commentaire.map(commentaire => (
                              <div key={commentaire.id} className="p-3">
                                <div className="flex items-center mb-1">
                                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                                    {commentaire.user.nom.charAt(0).toUpperCase()}
                                  </div>
                                  <div className="ml-2">
                                    <p className="font-medium text-sm">{commentaire.user.nom}</p>
                                    {commentaire.created_at && (
                                      <p className="text-xs text-gray-500">{formatDate(commentaire.created_at)}</p>
                                    )}
                                  </div>
                                </div>
                                <p className="text-gray-700 text-sm ml-10">{commentaire.contenu}</p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="bg-white p-4 rounded-md border border-gray-200 text-center text-gray-500">
                            Aucun commentaire pour le moment.
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="mt-6 flex flex-wrap justify-end gap-2">
                        <button
                          onClick={() => window.location.href = `/signalements/${signalement.id}/edit`}
                          className="flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition"
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Modifier
                        </button>
                        {(signalement.statut.toLowerCase() === 'en attente') && (
                          <button
                            onClick={() => handleDelete(signalement.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            Supprimer
                          </button>
                        )}

                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="h-16 w-16 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Aucun signalement trouvé</h3>
            <p className="text-gray-600 mb-4">
              {statusFilter !== 'tous' || categoryFilter !== 'toutes'
                ? "Aucun signalement ne correspond aux filtres sélectionnés."
                : "Vous n'avez pas encore créé de signalement."}
            </p>
            {statusFilter !== 'tous' || categoryFilter !== 'toutes' ? (
              <button
                onClick={() => {
                  setStatusFilter('tous');
                  setCategoryFilter('toutes');
                }}
                className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition mr-2"
              >
                Réinitialiser les filtres
              </button>
            ) : null}
            <a
              href="/signalements/create"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Créer un signalement
            </a>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default MesSignalements_auth;