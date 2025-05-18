

// import React, { useState } from 'react';
// import { router } from '@inertiajs/react';
// import AppLayout from '@/Layouts/AppLayout';
// import AgentSidebar from '@/Components/AgentSidebar';
// import { Wrench, AlertCircle, Calendar, Image, ArrowLeft, Edit } from 'lucide-react';

// export default function DetailIntervention({ signalement, intervention }) {
//   const [zoomImage, setZoomImage] = useState(null);
  
//   return (
//     <AppLayout>
//       <div className="flex bg-gray-50 min-h-screen">
//         <AgentSidebar />
        
//         <div className="flex-1 p-6 md:p-8">
//           <div className="max-w-6xl mx-auto">
//             <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">
//               Détail Intervention vs Signalement
//             </h1>
            
//             {/* Action button row */}
//             <div className="flex flex-wrap gap-4 mb-8">
//               <button
//                 onClick={() => router.get(`/agent/intervention/${intervention.id}/editStatut?source=termine`)}
//                 className="flex items-center bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-900 transition-colors shadow-md"
//               >
//                 <Edit size={18} className="mr-2" />
//                 Modifier Votre intervention
//               </button>
              
//               <button
//                 onClick={() => router.get('/agent/interventions/terminees')}
//                 className="flex items-center bg-gray-600 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition-colors shadow-md ml-auto"
//               >
//                 <ArrowLeft size={18} className="mr-2" />
//                 Retour aux interventions
//               </button>
//             </div>
            
//             {/* Grid en 2 colonnes */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {/* Intervention */}
//               <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600">
//                 <h2 className="text-2xl font-semibold mb-6 flex items-center text-green-900">
//                   <Wrench size={24} className="mr-3" />
//                   Intervention
//                 </h2>
                
//                 <div className="space-y-4">
//                   <div className="flex flex-col">
//                     <span className="text-gray-500 text-sm">Description action</span>
//                     <p className="text-gray-800 font-medium">{intervention.description_action}</p>
//                   </div>
                  
//                   <div className="flex flex-col">
//                     <span className="text-gray-500 text-sm">Statut De Solution</span>
//                     <div className="flex items-center">
//                       <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
//                         intervention.resolution_status === 'Résolu' ? 'bg-green-500' : 'bg-yellow-500'
//                       }`}></span>
//                       <p className="text-gray-800 font-medium">{intervention.resolution_status}</p>
//                     </div>
//                   </div>
                  
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="flex flex-col">
//                       <span className="text-gray-500 text-sm flex items-center">
//                         <Calendar size={14} className="mr-1" /> Date début
//                       </span>
//                       <p className="text-gray-800">{intervention.dateDebut}</p>
//                     </div>
                    
//                     <div className="flex flex-col">
//                       <span className="text-gray-500 text-sm flex items-center">
//                         <Calendar size={14} className="mr-1" /> Date fin
//                       </span>
//                       <p className="text-gray-800">{intervention.dateFin}</p>
//                     </div>
//                   </div>
                  
//                   <div className="mt-6">
//                     <span className="text-gray-500 text-sm flex items-center mb-2">
//                       <Image size={14} className="mr-1" /> Photo de l'intervention
//                     </span>
//                     <div className="relative">
//                       <img
//                         src={`/storage/${intervention.solution_photo}`}
//                         className="w-48 h-48 object-cover rounded-lg border border-gray-200 shadow-sm"
//                         onClick={() => setZoomImage(`/storage/${intervention.solution_photo}`)}
//                         alt="Preuve intervention"
//                       />
//                       {/* <div className="absolute bottom-2 right-2 bg-white bg-opacity-70 p-1 rounded-full">
//                         <Image size={16} className="text-gray-700" />
//                       </div> */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Signalement */}
//               <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
//                 <h2 className="text-2xl font-semibold mb-6 flex items-center text-red-700">
//                   <AlertCircle size={24} className="mr-3" />
//                   Signalement
//                 </h2>
                
//                 <div className="space-y-4">
//                   <div className="flex flex-col">
//                     <span className="text-gray-500 text-sm">Titre</span>
//                     <p className="text-gray-800 font-medium">{signalement.titre}</p>
//                   </div>
                  
//                   <div className="flex flex-col">
//                     <span className="text-gray-500 text-sm">Description</span>
//                     <p className="text-gray-800">{signalement.description}</p>
//                   </div>
                  
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="flex flex-col">
//                       <span className="text-gray-500 text-sm">Catégorie</span>
//                       <p className="text-gray-800">
//                         <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
//                           {signalement.categorie.nom}
//                         </span>
//                       </p>
//                     </div>
                    
//                     <div className="flex flex-col">
//                       <span className="text-gray-500 text-sm">Statut</span>
//                       <p className="text-gray-800">
//                         <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
//                           signalement.statut === 'Traité' ? 'bg-green-100 text-green-800' :
//                           signalement.statut === 'En cours' ? 'bg-yellow-100 text-yellow-800' :
//                           'bg-red-100 text-red-800'
//                         }`}>
//                           {signalement.statut}
//                         </span>
//                       </p>
//                     </div>
//                   </div>
                  
//                   <div className="flex flex-col">
//                     <span className="text-gray-500 text-sm flex items-center">
//                       <Calendar size={14} className="mr-1" /> Date
//                     </span>
//                     <p className="text-gray-800">{signalement.created_at}</p>
//                   </div>
                  
//                   <div className="mt-6">
//                     <span className="text-gray-500 text-sm flex items-center mb-2">
//                       <Image size={14} className="mr-1" /> Photo du signalement
//                     </span>
//                     <div className="relative group">
//                       <img
//                         src={`/storage/${signalement.image}`}
//                         className="w-48 h-48 object-cover rounded-lg border border-gray-200 shadow-sm transition-transform group-hover:scale-105"
//                         onClick={() => setZoomImage(`/storage/${signalement.image}`)}
//                         alt="Photo signalement"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Zoom Image Modal */}
//       {zoomImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 cursor-pointer transition-opacity"
//           onClick={() => setZoomImage(null)}
//         >
//           <div className="relative max-w-4xl max-h-full">
//             <img 
//               src={zoomImage} 
//               className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" 
//               alt="Image agrandie" 
//             />
//             <button 
//               className="absolute top-4 right-4 bg-white bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition-all"
//               onClick={() => setZoomImage(null)}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <line x1="18" y1="6" x2="6" y2="18"></line>
//                 <line x1="6" y1="6" x2="18" y2="18"></line>
//               </svg>
//             </button>
//           </div>
//         </div>
//       )}
//     </AppLayout>
//   );
// }


import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import AgentSidebar from '@/Components/AgentSidebar';
import { Wrench, AlertCircle, Calendar, Image, ArrowLeft, Edit } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function DetailIntervention({ signalement, intervention }) {
  const { t } = useTranslation();
  const [zoomImage, setZoomImage] = useState(null);
  
  return (
    <AppLayout>
      <div className="flex bg-gray-50 min-h-screen">
        <AgentSidebar />
        
        <div className="flex-1 p-6 md:p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">
              {t('DetailIntervention.title')}
            </h1>
            
            {/* Action button row */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => router.get(`/agent/intervention/${intervention.id}/editStatut?source=termine`)}
                className="flex items-center bg-green-800 text-white px-5 py-2 rounded-lg hover:bg-green-900 transition-colors shadow-md"
              >
                <Edit size={18} className="mr-2" />
                {t('DetailIntervention.editButton')}
              </button>
              
              <button
                onClick={() => router.get('/agent/interventions/terminees')}
                className="flex items-center bg-gray-600 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition-colors shadow-md ml-auto"
              >
                <ArrowLeft size={18} className="mr-2" />
                {t('DetailIntervention.backButton')}
              </button>
            </div>
            
            {/* Grid en 2 colonnes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Intervention */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600">
                <h2 className="text-2xl font-semibold mb-6 flex items-center text-green-900">
                  <Wrench size={24} className="mr-3" />
                  {t('DetailIntervention.interventionTitle')}
                </h2>
                
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">{t('DetailIntervention.actionDescription')}</span>
                    <p className="text-gray-800 font-medium">{intervention.description_action}</p>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">{t('DetailIntervention.solutionStatus')}</span>
                    <div className="flex items-center">
                      <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                        intervention.resolution_status === 'Résolu' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}></span>
                      <p className="text-gray-800 font-medium">{intervention.resolution_status}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-sm flex items-center">
                        <Calendar size={14} className="mr-1" /> {t('DetailIntervention.startDate')}
                      </span>
                      <p className="text-gray-800">{intervention.dateDebut}</p>
                    </div>
                    
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-sm flex items-center">
                        <Calendar size={14} className="mr-1" /> {t('DetailIntervention.endDate')}
                      </span>
                      <p className="text-gray-800">{intervention.dateFin}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <span className="text-gray-500 text-sm flex items-center mb-2">
                      <Image size={14} className="mr-1" /> {t('DetailIntervention.interventionPhoto')}
                    </span>
                    <div className="relative">
                      <img
                        src={`/storage/${intervention.solution_photo}`}
                        className="w-48 h-48 object-cover rounded-lg border border-gray-200 shadow-sm"
                        onClick={() => setZoomImage(`/storage/${intervention.solution_photo}`)}
                        alt={t('DetailIntervention.interventionPhotoAlt')}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Signalement */}
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
                <h2 className="text-2xl font-semibold mb-6 flex items-center text-red-700">
                  <AlertCircle size={24} className="mr-3" />
                  {t('DetailIntervention.reportTitle')}
                </h2>
                
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">{t('DetailIntervention.reportTitleLabel')}</span>
                    <p className="text-gray-800 font-medium">{signalement.titre}</p>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm">{t('DetailIntervention.description')}</span>
                    <p className="text-gray-800">{signalement.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-sm">{t('DetailIntervention.category')}</span>
                      <p className="text-gray-800">
                        <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
                          {signalement.categorie.nom}
                        </span>
                      </p>
                    </div>
                    
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-sm">{t('DetailIntervention.status')}</span>
                      <p className="text-gray-800">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          signalement.statut === 'Traité' ? 'bg-green-100 text-green-800' :
                          signalement.statut === 'En cours' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {signalement.statut}
                        </span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-sm flex items-center">
                      <Calendar size={14} className="mr-1" /> {t('DetailIntervention.date')}
                    </span>
                    <p className="text-gray-800">{signalement.created_at}</p>
                  </div>
                  
                  <div className="mt-6">
                    <span className="text-gray-500 text-sm flex items-center mb-2">
                      <Image size={14} className="mr-1" /> {t('DetailIntervention.reportPhoto')}
                    </span>
                    <div className="relative group">
                      <img
                        src={`/storage/${signalement.image}`}
                        className="w-48 h-48 object-cover rounded-lg border border-gray-200 shadow-sm transition-transform group-hover:scale-105"
                        onClick={() => setZoomImage(`/storage/${signalement.image}`)}
                        alt={t('DetailIntervention.reportPhotoAlt')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Zoom Image Modal */}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 cursor-pointer transition-opacity"
          onClick={() => setZoomImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={zoomImage} 
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" 
              alt={t('DetailIntervention.zoomedImageAlt')} 
            />
            <button 
              className="absolute top-4 right-4 bg-white bg-opacity-75 rounded-full p-2 hover:bg-opacity-100 transition-all"
              onClick={() => setZoomImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </AppLayout>
  );
}