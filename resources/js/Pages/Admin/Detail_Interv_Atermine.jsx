
// import React, { useState } from 'react';
// import { router } from '@inertiajs/react';
// import AppLayout from '@/Layouts/AppLayout';
// import AdminSidebar from '@/Components/AdminSidebar';

// export default function DetailIntervention({ signalement, intervention }) {
//   const [zoomImage, setZoomImage] = useState(null);
//   // console.log(signalement);
//   console.log(intervention);

//   return (
//     <AppLayout>
//        <div className="flex">
//         <AdminSidebar/>
       
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6 text-center">Détail Intervention vs Signalement</h1>

//       {/* Grid en 2 colonnes */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Intervention */}
//         <div className="bg-white p-4 rounded shadow">
//           <h2 className="text-xl font-semibold mb-4">🛠️ Intervention</h2>
//           <p><strong>Agent :</strong> {intervention.user.nom}</p>
//           <p><strong>Description action :</strong> {intervention.description_action}</p>
//           <p><strong>Statut De Solution :</strong> {intervention.resolution_status}</p>
//           <p><strong>Date début :</strong> {intervention.dateDebut}</p>
//           <p><strong>Date fin :</strong> {intervention.dateFin}</p>
//           <div className="mt-3">
//             <img
//               src={`/storage/${intervention.solution_photo}`}
//               className="w-40 h-40 object-cover rounded cursor-pointer"
//               onClick={() => setZoomImage(`/storage/${intervention.solution_photo}`)}
//               alt="Preuve intervention"
//             />
//           </div>
//         </div>

//         {/* Signalement */}
//         <div className="bg-gray-100 p-4 rounded shadow">
//           <h2 className="text-xl font-semibold mb-4">📋 Signalement</h2>
//           <p><strong>Titre :</strong> {signalement.titre}</p>
//           <p><strong>Description :</strong> {signalement.description}</p>
//           <p><strong>Signalé par :</strong> {intervention.user.nom}</p>
//           <p><strong>Statut :</strong> {signalement.statut}</p>
//           <p><strong>Date :</strong> {signalement.created_at}</p>
//           <div className="mt-3">
//             <img
//               src={`/storage/${signalement.image}`}
//               className="w-40 h-40 object-cover rounded cursor-pointer"
//               onClick={() => setZoomImage(`/storage/${signalement.image}`)}
//               alt="Photo signalement"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Zoom Image */}
//       {zoomImage && (
//         <div
//           className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50"
//           onClick={() => setZoomImage(null)}
//         >
//           <img src={zoomImage} className="max-w-full max-h-full rounded shadow" alt="Zoom" />
//         </div>
//       )}

//       {/* Bouton Retour */}
//       <div className="mt-6 text-center">
//         <button
//           onClick={() => router.get('/admin/interventions/terminees')}
//           className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
//         >
//           ⬅ Annuler et revenir
//         </button>
//       </div>
//     </div>
//     </div>
//     </AppLayout>
//   );
// }

import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import AdminSidebar from '@/Components/AdminSidebar';
import { 
  Wrench , 
  ClipboardCheck, 
  User, 
  MessageSquare, 
  CheckCircle, 
  Calendar, 
  Camera, 
  AlertTriangle,
  MapPin,
  ChevronLeft,
  X,
  Tag,
  Clock,
  CalendarCheck,
  Image as ImageIcon
} from 'lucide-react';

export default function Detail_Interv_Atermine({ signalement, intervention }) {
  const [zoomImage, setZoomImage] = useState(null);
  // console.log(signalement);
  console.log(intervention);

  // Fonction pour formater la date
  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <AppLayout>
      <div className="flex min-h-screen bg-gray-50">
        <AdminSidebar />
       
        <div className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <button 
                onClick={() => router.get('/admin/interventions/terminees')}
                className="flex items-center hover:text-blue-600 transition-colors"
              >
                <ChevronLeft size={16} className="mr-1" /> 
                Retour aux interventions
              </button>
              <span className="mx-2">/</span>
              <span className="font-medium text-gray-700">Détail de l'intervention</span>
            </div>
            
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Détail de l'Intervention</h1>
              <p className="mt-2 text-gray-600">Comparaison entre le signalement initial et l'intervention réalisée</p>
            </div>

            {/* Status Card */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="p-3 bg-blue-100 rounded-full">
                  <ClipboardCheck size={24} className="text-blue-600" />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-bold text-gray-800">
                    {signalement.titre}
                  </h2>
                  <p className="text-sm text-gray-500">
                    ID: {signalement.id} • {formatDate(signalement.created_at)}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  <Tag size={14} className="mr-1" /> 
                  {signalement.categorie?.nom || "Non catégorisé"}
                </div>
                
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  intervention.resolution_status === "Terminé" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-yellow-100 text-yellow-800"
                }`}>
                  <CheckCircle size={14} className="mr-1" /> 
                  {intervention.resolution_status}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Intervention Card */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-blue-600 text-white p-4">
                  <div className="flex items-center">
                    <Wrench size={20} className="mr-2" />
                    <h2 className="text-xl font-semibold">Intervention</h2>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <User size={18} className="text-gray-500 mr-2" />
                      <span className="text-sm text-gray-500">Agent assigné</span>
                    </div>
                    <div className="ml-6 bg-blue-50 rounded-lg p-3">
                      <p className="font-medium text-gray-800">{intervention.user.nom}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <MessageSquare size={18} className="text-gray-500 mr-2" />
                      <span className="text-sm text-gray-500">Description de l'action</span>
                    </div>
                    <div className="ml-6 bg-gray-50 rounded-lg p-3">
                      <p className="text-gray-700">{intervention.description_action}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <Calendar size={18} className="text-gray-500 mr-2" />
                        <span className="text-sm text-gray-500">Date de début</span>
                      </div>
                      <div className="ml-6">
                        <p className="font-medium text-gray-700">{formatDate(intervention.dateDebut)}</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <CalendarCheck size={18} className="text-gray-500 mr-2" />
                        <span className="text-sm text-gray-500">Date de fin</span>
                      </div>
                      <div className="ml-6">
                        <p className="font-medium text-gray-700">{formatDate(intervention.dateFin)}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-4">
                      <Camera size={18} className="text-gray-500 mr-2" />
                      <span className="text-sm text-gray-500">Photo solution</span>
                    </div>
                    {intervention.solution_photo ? (
                      <div className="mt-2 relative group">
                        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                          <img
                            src={`/storage/${intervention.solution_photo}`}
                            className="w-full h-48 object-cover rounded-lg cursor-pointer transition-transform group-hover:scale-105"
                            onClick={() => setZoomImage(`/storage/${intervention.solution_photo}`)}
                            alt="Preuve intervention"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" onClick={() => setZoomImage(`/storage/${intervention.solution_photo}`)}>
                            <ImageIcon size={24} className="text-white" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="ml-6 bg-gray-50 rounded-lg p-3 flex items-center justify-center h-32">
                        <p className="text-gray-500 italic">Aucune photo disponible</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Signalement Card */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-gray-700 text-white p-4">
                  <div className="flex items-center">
                    <AlertTriangle size={20} className="mr-2" />
                    <h2 className="text-xl font-semibold">Signalement</h2>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <User size={18} className="text-gray-500 mr-2" />
                      <span className="text-sm text-gray-500">Signalé par</span>
                    </div>
                    <div className="ml-6 bg-gray-50 rounded-lg p-3">
                      <p className="font-medium text-gray-800">{intervention.user.nom}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <MessageSquare size={18} className="text-gray-500 mr-2" />
                      <span className="text-sm text-gray-500">Description du problème</span>
                    </div>
                    <div className="ml-6 bg-gray-50 rounded-lg p-3">
                      <p className="text-gray-700">{signalement.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <CheckCircle size={18} className="text-gray-500 mr-2" />
                        <span className="text-sm text-gray-500">Statut</span>
                      </div>
                      <div className="ml-6">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          signalement.statut === 'Résolu' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {signalement.statut}
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <Calendar size={18} className="text-gray-500 mr-2" />
                        <span className="text-sm text-gray-500">Date de signalement</span>
                      </div>
                      <div className="ml-6">
                        <p className="font-medium text-gray-700">{formatDate(signalement.created_at)}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-4">
                      <MapPin size={18} className="text-gray-500 mr-2" />
                      <span className="text-sm text-gray-500">Localisation</span>
                    </div>
                    <div className="ml-6 bg-gray-50 rounded-lg p-3">
                      <p className="text-gray-700">{signalement.adresse || "Adresse non spécifiée"}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex items-center mb-4">
                      <Camera size={18} className="text-gray-500 mr-2" />
                      <span className="text-sm text-gray-500">Photo signalement</span>
                    </div>
                    {signalement.image ? (
                      <div className="mt-2 relative group">
                        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                          <img
                            src={`/storage/${signalement.image}`}
                            className="w-full h-48 object-cover rounded-lg cursor-pointer transition-transform group-hover:scale-105"
                            onClick={() => setZoomImage(`/storage/${signalement.image}`)}
                            alt="Photo signalement"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" onClick={() => setZoomImage(`/storage/${signalement.image}`)}>
                            <ImageIcon size={24} className="text-white" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="ml-6 bg-gray-50 rounded-lg p-3 flex items-center justify-center h-32">
                        <p className="text-gray-500 italic">Aucune photo disponible</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => router.get('/admin/interventions/terminees')}
                className="flex items-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-sm"
              >
                <ChevronLeft size={18} className="mr-2" />
                Retour aux interventions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Zoom Image Modal */}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setZoomImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <button 
              className="absolute -top-12 right-0 text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20"
              onClick={() => setZoomImage(null)}
            >
              <X size={24} />
            </button>
            <img 
              src={zoomImage} 
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain" 
              alt="Zoom" 
            />
          </div>
        </div>
      )}
    </AppLayout>
  );
}