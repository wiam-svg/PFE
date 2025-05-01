// import React from 'react';
// import { FileDown } from 'lucide-react';
// import AppLayout from '@/Layouts/AppLayout';
// import AgentSidebar from '@/Components/AgentSidebar';

// const Historique = ({ interventions }) => {
//   const handleDownloadPDF = (id) => {
//     window.open(`/intervention/${id}/pdf`, '_blank');
//   };

//   return (
//       <AppLayout>
//         <div className="flex">
//           <AgentSidebar />
  
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-green-900 mb-6">Historique des interventions</h1>
//       {interventions.length === 0 ? (
//         <p>Aucune intervention dans l’historique.</p>
//       ) : (
//         <ul className="space-y-6">
//           {interventions.map((intervention) => (
//             <li key={intervention.id} className="p-6 bg-white shadow-lg rounded-2xl border border-green-800">
//               <h2 className="text-xl font-semibold text-green-800 mb-2">{intervention.signalement.titre}</h2>
//               <img
//                 src={`/storage/${intervention.solution_photo}`}
//                 alt="Photo de la solution"
//                 className="w-full max-w-md rounded-lg mb-3"
//               />
//               <p className="text-gray-700 mb-1"><strong>Description :</strong> {intervention.signalement.description}</p>
//               <p className="text-gray-700 mb-1"><strong>Adresse :</strong> {intervention.signalement.adresse}</p>
//               <p className="text-gray-700 mb-1"><strong>Ville :</strong> {intervention.signalement.ville}</p>
//               <p className="text-sm text-gray-500 mb-1">🛠️ Date de début : {intervention.dateDebut}</p>
//               <p className="text-sm text-gray-500 mb-1">✅ Date de fin : {intervention.dateFin}</p>
//               <p className="text-sm text-gray-500 mb-1">📅 Date d’intervention : {new Date(intervention.updated_at).toLocaleDateString()}</p>
//               <p className="text-green-700 mt-2"><strong>Statut Intervention :</strong> {intervention.resolution_status}</p>
//               <p className="text-orange-600"><strong>Statut Signalement :</strong> {intervention.signalement.statut}</p>

//               <button
//                 onClick={() => handleDownloadPDF(intervention.id)}
//                 className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-900 text-white rounded-md hover:bg-green-700 transition"
//               >
//                 <FileDown className="w-4 h-4" /> Télécharger PDF
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//     </div>
//     </AppLayout>
//   );
// };

// export default Historique;



import React, { useState, useEffect } from 'react';
import { FileDown, Calendar, MapPin, Wrench, CheckCircle, Info, Clock } from 'lucide-react';
import AppLayout from '@/Layouts/AppLayout';
import AgentSidebar from '@/Components/AgentSidebar';

const Historique = ({ interventions }) => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Vérifier la taille de l'écran au chargement et lors des redimensionnements
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Vérifier au chargement
    checkScreenSize();
    
    // Ajouter l'écouteur d'événement
    window.addEventListener('resize', checkScreenSize);
    
    // Nettoyer l'écouteur d'événement
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleDownloadPDF = (id) => {
    window.open(`/intervention/${id}/pdf`, '_blank');
  };

  // Composant pour la vue Mobile
  const MobileView = () => (
    <div className="p-4 w-full">
      <h1 className="text-2xl font-bold text-green-900 mb-4">Historique des interventions</h1>
      
      {interventions.length === 0 ? (
        <div className="p-8 bg-white rounded-lg shadow text-center">
          <p className="text-gray-600">Aucune intervention dans l'historique.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {interventions.map((intervention) => (
            <div key={intervention.id} className="p-4 bg-white shadow rounded-xl border-l-4 border-green-800">
              <h2 className="text-lg font-semibold text-green-800 mb-2">
                {intervention.signalement.titre}
              </h2>
              
              {intervention.solution_photo && (
                <img
                  src={`/storage/${intervention.solution_photo}`}
                  alt="Photo de la solution"
                  className="w-full rounded-lg mb-3 object-cover h-48"
                />
              )}
              
              {/* Description et emplacement */}
              <div className="mb-3">
                <p className="text-gray-700 text-sm mb-1">
                  <span className="font-medium">Description :</span> {intervention.signalement.description}
                </p>
                <div className="flex items-center text-sm text-gray-700 mb-1">
                  <MapPin className="w-4 h-4 mr-1 text-gray-500" />
                  <span>{intervention.signalement.adresse}, {intervention.signalement.ville}</span>
                </div>
              </div>
              
              {/* Dates */}
              <div className="space-y-1 mb-3 text-xs text-gray-500">
                <div className="flex items-center">
                  <Wrench className="w-3 h-3 mr-1" />
                  <span>Début : {intervention.dateDebut}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  <span>Fin : {intervention.dateFin}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>Date d'intervention : {new Date(intervention.updated_at).toLocaleDateString()}</span>
                </div>
              </div>
              
              {/* Statuts */}
              <div className="flex flex-col gap-1 mb-3">
                <p className="text-sm">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    Intervention : {intervention.resolution_status}
                  </span>
                </p>
                <p className="text-sm">
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                    Signalement : {intervention.signalement.statut}
                  </span>
                </p>
              </div>
              
              {/* Bouton PDF */}
              <button
                onClick={() => handleDownloadPDF(intervention.id)}
                className="w-full mt-2 flex items-center justify-center gap-2 py-2 bg-green-800 text-white text-sm rounded-md hover:bg-green-700 transition"
              >
                <FileDown className="w-4 h-4" /> PDF
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  // Composant pour la vue Desktop
  const DesktopView = () => (
    <div className="p-6 w-full">
      <h1 className="text-3xl font-bold text-green-900 mb-6">Historique des interventions</h1>
      
      {interventions.length === 0 ? (
        <div className="p-12 bg-white rounded-lg shadow-md text-center">
          <p className="text-gray-600 text-lg">Aucune intervention dans l'historique.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {interventions.map((intervention) => (
            <div key={intervention.id} className="bg-white shadow-lg rounded-xl overflow-hidden border border-green-100">
              {/* En-tête avec titre */}
              <div className="bg-green-50 p-4 border-b border-green-100">
                <h2 className="text-xl font-semibold text-green-800">
                  {intervention.signalement.titre}
                </h2>
              </div>
              
              <div className="p-6">
                {/* Image de la solution */}
                {intervention.solution_photo && (
                  <div className="mb-4">
                    <img
                      src={`/storage/${intervention.solution_photo}`}
                      alt="Photo de la solution"
                      className="w-full rounded-lg object-cover h-64"
                    />
                  </div>
                )}
                
                {/* Contenu principal */}
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Informations de base */}
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-green-800 mb-2 flex items-center">
                      <Info className="w-5 h-5 mr-2" />
                      Informations
                    </h3>
                    
                    <div className="space-y-2">
                      <p className="text-gray-700">
                        <span className="font-medium">Description :</span> {intervention.signalement.description}
                      </p>
                      <div className="flex items-center text-gray-700">
                        <MapPin className="w-4 h-4 mr-2 text-green-700" />
                        <div>
                          <p>{intervention.signalement.adresse}</p>
                          <p className="text-sm text-gray-500">{intervention.signalement.ville}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Dates et statuts */}
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-green-800 mb-2 flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Détails et statut
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Wrench className="w-4 h-4 mr-2 text-gray-500" />
                          <span>Début : {intervention.dateDebut}</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-gray-500" />
                          <span>Fin : {intervention.dateFin}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-gray-500" />
                          <span>Date d'intervention : {new Date(intervention.updated_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                            Intervention : {intervention.resolution_status}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                            Signalement : {intervention.signalement.statut}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bouton PDF */}
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => handleDownloadPDF(intervention.id)}
                    className="inline-flex items-center gap-2 px-6 py-2 bg-green-800 text-white rounded-md hover:bg-green-700 transition"
                  >
                    <FileDown className="w-4 h-4" /> Télécharger PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
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

export default Historique;