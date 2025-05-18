

// import React, { useState, useEffect } from 'react';
// import AgentSidebar from '@/Components/AgentSidebar';
// import AppLayout from '@/Layouts/AppLayout';
// import { Link } from '@inertiajs/react';
// import { 
//   MapPin, 
//   ArrowLeft, 
//   Clock, 
//   User, 
//   Phone, 
//   Mail, 
//   MessageSquare, 
//   Camera,
//   Calendar,
//   AlertCircle,
//   CheckCircle
// } from "lucide-react";

// const InterventionDetailPage = ({ signalement, intervention, priority }) => {
//   // État pour détecter si l'écran est mobile
//   const [isMobile, setIsMobile] = useState(false);
  
//   // Détection du mode mobile au chargement et lors du redimensionnement
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

//   // Fonction pour obtenir les classes de priorité
//   const getPriorityClasses = (priority) => {
//     switch(priority) {
//       case 'Urgent':
//         return 'bg-red-100 text-red-700 border-red-300';
//       case 'Moyenne':
//         return 'bg-orange-100 text-orange-700 border-orange-300';
//       default:
//         return 'bg-blue-100 text-blue-700 border-blue-300';
//     }
//   };

//   // Fonction pour obtenir les classes de statut
//   const getStatusClasses = (status) => {
//     if (status === 'rejetee') {
//       return 'bg-red-100 text-red-700 border-red-300';
//     }
//     return 'bg-gray-100 text-gray-700 border-gray-300';
//   };

//   // Vue Mobile
//   const MobileView = () => (
//     <div className="flex flex-col p-4 bg-gray-50 min-h-screen">
//       {/* En-tête */}
//       <div className="mb-6">
//         <button
//           onClick={() => window.history.back()}
//           className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-3"
//         >
//           <ArrowLeft className="h-4 w-4 mr-1" />
//           <span className="text-sm">Retour</span>
//         </button>
        
//         <h1 className="text-xl font-bold text-gray-800 mt-2">Détail de l'intervention</h1>
//       </div>

//       {/* Section d'information de l'intervention */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4">
//         <div className="flex flex-wrap gap-2 mb-3">
//           <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getPriorityClasses(priority)}`}>
//             {priority}
//           </span>
//           <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusClasses(intervention.resolution_status)}`}>
//             {intervention.resolution_status}
//           </span>
//         </div>

//         <h2 className="font-semibold text-gray-800 mb-2">{intervention.description_action}</h2>
        
//         <div className="space-y-3 mt-4">
//           <div className="flex items-start text-sm text-gray-600">
//             <MapPin className="h-4 w-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
//             <span>{signalement.adresse}, {signalement.ville}</span>
//           </div>

//           <div className="flex items-start text-sm text-gray-600">
//             <Clock className="h-4 w-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
//             <div>
//               <div>Début: {intervention.dateDebut}</div>
//               <div>Fin: {intervention.dateFin}</div>
//             </div>
//           </div>

//           <div className="flex items-center text-sm text-gray-600">
//             <User className="h-4 w-4 mr-2 text-blue-500 flex-shrink-0" />
//             <span>{intervention.user.nom} {intervention.user.prenom}</span>
//           </div>
//         </div>
//       </div>

//       {/* Section du signalement */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4">
//         <h2 className="font-semibold text-gray-800 mb-3 flex items-center">
//           <AlertCircle className="h-4 w-4 mr-2 text-blue-500" />
//           Signalement
//         </h2>

//         <Link
//           href={`/signalement/${signalement.id}`}
//           className="block p-3 rounded border border-gray-200 bg-gray-50 hover:bg-gray-100 transition"
//         >
//           <h4 className="font-medium text-gray-800">{signalement.titre}</h4>
//           <p className="text-sm text-gray-600 mt-1 line-clamp-2">{signalement.description}</p>
          
//           {signalement.image && (
//             <div className="mt-2 flex justify-center">
//               <div className="relative w-full h-32 bg-gray-200 rounded overflow-hidden">
//                 <img
//                   src={`/storage/${signalement.image}`}
//                   alt={signalement.titre}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//             </div>
//           )}
//         </Link>
//       </div>

//       {/* Section du commentaire */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4">
//         <h2 className="font-semibold text-gray-800 mb-3 flex items-center">
//           <MessageSquare className="h-4 w-4 mr-2 text-blue-500" />
//           Commentaire admin
//         </h2>

//         {intervention.commentaire_admin ? (
//           <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700 text-sm">
//             {intervention.commentaire_admin}
//           </div>
//         ) : (
//           <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-500 text-sm italic">
//             Aucun commentaire pour cette intervention.
//           </div>
//         )}
//       </div>

//       {/* Section contact */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
//         <h2 className="font-semibold text-gray-800 mb-3 flex items-center">
//           <User className="h-4 w-4 mr-2 text-blue-500" />
//           Contact du signaleur
//         </h2>

//         <div className="space-y-3 text-sm">
//           <div className="flex items-center p-2 bg-gray-50 rounded">
//             <User className="h-4 w-4 mr-2 text-gray-500" />
//             <span>{signalement.user.nom} {signalement.user.prenom}</span>
//           </div>
          
//           <div className="flex items-center p-2 bg-gray-50 rounded">
//             <Phone className="h-4 w-4 mr-2 text-gray-500" />
//             <span>{signalement.user.telephone}</span>
//           </div>
          
//           <div className="flex items-center p-2 bg-gray-50 rounded">
//             <Mail className="h-4 w-4 mr-2 text-gray-500" />
//             <span className="truncate">{signalement.user.email}</span>
//           </div>
//         </div>
        
//         <button className="mt-4 w-full flex items-center justify-center px-4 py-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg text-sm font-medium hover:bg-blue-100 transition">
//           <MessageSquare className="h-4 w-4 mr-2" />
//           Contacter
//         </button>
//       </div>
//     </div>
//   );

//   // Vue Desktop
//   const DesktopView = () => (
//     <div className="flex bg-gray-50 min-h-screen">
    
      
//       <div className="flex-1 p-6">
//         <div className="max-w-7xl mx-auto">
//           {/* Entête avec bouton retour */}
//           <div className="mb-6 flex items-center justify-between">
//             <button
//               onClick={() => window.history.back()}
//               className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-3 py-1 rounded-lg transition-all"
//             >
//               <ArrowLeft className="h-4 w-4 mr-2" />
//               <span>Retour aux interventions</span>
//             </button>
            
//             <div className="flex space-x-2">
//               <span className={`px-3 py-1 text-sm font-medium rounded-full border ${getPriorityClasses(priority)}`}>
//                 {priority}
//               </span>
//               <span className={`px-3 py-1 text-sm font-medium rounded-full border ${getStatusClasses(intervention.resolution_status)}`}>
//                 {intervention.resolution_status}
//               </span>
//             </div>
//           </div>
          
//           <h1 className="text-2xl font-bold text-gray-800 mb-6">Détail de l'intervention</h1>

//           <div className="grid grid-cols-3 gap-6">
//             {/* Colonne principale (2/3) */}
//             <div className="col-span-2 space-y-6">
//               {/* Informations générales */}
//               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//                 <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//                   <CheckCircle className="h-5 w-5 mr-2 text-blue-500" />
//                   Informations générales
//                 </h2>

//                 <div className="space-y-4">
//                   <div>
//                     <h3 className="font-semibold text-gray-800">{intervention.description_action}</h3>
//                     <p className="text-gray-600 mt-1">{intervention.commentaire_admin}</p>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
//                     <div className="flex items-start p-3 bg-gray-50 rounded-lg border border-gray-100">
//                       <MapPin className="h-5 w-5 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
//                       <div>
//                         <span className="font-medium text-gray-700 block mb-1">Localisation</span>
//                         <span className="text-gray-600">{signalement.adresse}, {signalement.ville}</span>
//                       </div>
//                     </div>

//                     <div className="flex items-start p-3 bg-gray-50 rounded-lg border border-gray-100">
//                       <Calendar className="h-5 w-5 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
//                       <div>
//                         <span className="font-medium text-gray-700 block mb-1">Période</span>
//                         <div className="text-gray-600">
//                           <div>Début: {intervention.dateDebut}</div>
//                           <div>Fin: {intervention.dateFin}</div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex items-start p-3 bg-gray-50 rounded-lg border border-gray-100">
//                       <User className="h-5 w-5 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
//                       <div>
//                         <span className="font-medium text-gray-700 block mb-1">Agent assigné</span>
//                         <span className="text-gray-600">{intervention.user.nom} {intervention.user.prenom}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Signalement associé */}
//               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//                 <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//                   <AlertCircle className="h-5 w-5 mr-2 text-blue-500" />
//                   Signalement associé
//                 </h2>

//                 <Link
//                   href={`/signalement/${signalement.id}`}
//                   className="block p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
//                 >
//                   <h4 className="font-medium text-gray-800">{signalement.titre}</h4>
//                   <p className="text-sm text-gray-600 mt-2">{signalement.description}</p>
                  
//                   {signalement.image && (
//                     <div className="mt-4">
//                       <div className="relative h-40 bg-gray-100 rounded-lg overflow-hidden">
//                         <img
//                           src={`/storage/${signalement.image}`}
//                           alt={signalement.titre}
//                           className="object-cover w-full h-full"
//                         />
//                       </div>
//                     </div>
//                   )}
//                 </Link>
//               </div>

//               {/* Commentaire Admin */}
//               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//                 <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//                   <MessageSquare className="h-5 w-5 mr-2 text-blue-500" />
//                   Commentaire de l'admin
//                 </h2>

//                 {intervention.commentaire_admin ? (
//                   <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
//                     {intervention.commentaire_admin}
//                   </div>
//                 ) : (
//                   <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-gray-500 italic">
//                     Aucun commentaire pour cette intervention.
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Colonne latérale (1/3) */}
//             <div className="space-y-6">
//               {/* Contact du signaleur */}
//               <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
//                 <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//                   <User className="h-5 w-5 mr-2 text-blue-500" />
//                   Contact du signaleur
//                 </h2>
                
//                 <div className="space-y-4">
//                   <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
//                     <div className="flex items-center mb-2">
//                       <User className="h-4 w-4 mr-2 text-gray-500" />
//                       <span className="font-medium text-gray-700">Identité</span>
//                     </div>
//                     <p className="text-gray-600 pl-6">{signalement.user.nom} {signalement.user.prenom}</p>
//                   </div>
                  
//                   <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
//                     <div className="flex items-center mb-2">
//                       <Phone className="h-4 w-4 mr-2 text-gray-500" />
//                       <span className="font-medium text-gray-700">Téléphone</span>
//                     </div>
//                     <p className="text-gray-600 pl-6">{signalement.user.telephone}</p>
//                   </div>
                  
//                   <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
//                     <div className="flex items-center mb-2">
//                       <Mail className="h-4 w-4 mr-2 text-gray-500" />
//                       <span className="font-medium text-gray-700">Email</span>
//                     </div>
//                     <p className="text-gray-600 pl-6 break-words">{signalement.user.email}</p>
//                   </div>
//                 </div>
                
//                 <button className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition flex items-center justify-center">
//                   <MessageSquare className="h-4 w-4 mr-2" />
//                   Contacter
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <AppLayout title="Détail de l'intervention">
//       <div className="flex min-h-screen bg-gray-50">
//       <AgentSidebar />

//       {isMobile ? <MobileView /> : <DesktopView />}  
//       </div>
//     </AppLayout>
//   );
// };

// export default InterventionDetailPage;

import React, { useState, useEffect } from 'react';
import AgentSidebar from '@/Components/AgentSidebar';
import AppLayout from '@/Layouts/AppLayout';
import { Link } from '@inertiajs/react';
import { 
  MapPin, 
  ArrowLeft, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MessageSquare, 
  Camera,
  Calendar,
  AlertCircle,
  CheckCircle
} from "lucide-react";
import { useTranslation } from 'react-i18next';

const InterventionDetailPage = ({ signalement, intervention, priority }) => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const getPriorityClasses = (priority) => {
    switch(priority) {
      case t('InterventionDetailPage.urgent'):
        return 'bg-red-100 text-red-700 border-red-300';
      case t('InterventionDetailPage.medium'):
        return 'bg-orange-100 text-orange-700 border-orange-300';
      default:
        return 'bg-blue-100 text-blue-700 border-blue-300';
    }
  };

  const getStatusClasses = (status) => {
    if (status === 'rejetee') {
      return 'bg-red-100 text-red-700 border-red-300';
    }
    return 'bg-gray-100 text-gray-700 border-gray-300';
  };

  // Vue Mobile
  const MobileView = () => (
    <div className="flex flex-col p-4 bg-gray-50 min-h-screen">
      {/* En-tête */}
      <div className="mb-6">
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-3"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          <span className="text-sm">{t('InterventionDetailPage.back')}</span>
        </button>
        
        <h1 className="text-xl font-bold text-gray-800 mt-2">{t('InterventionDetailPage.title')}</h1>
      </div>

      {/* Section d'information de l'intervention */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getPriorityClasses(priority)}`}>
            {priority}
          </span>
          <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusClasses(intervention.resolution_status)}`}>
            {intervention.resolution_status}
          </span>
        </div>

        <h2 className="font-semibold text-gray-800 mb-2">{intervention.description_action}</h2>
        
        <div className="space-y-3 mt-4">
          <div className="flex items-start text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
            <span>{signalement.adresse}, {signalement.ville}</span>
          </div>

          <div className="flex items-start text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
            <div>
              <div>{t('InterventionDetailPage.start')}: {intervention.dateDebut}</div>
              <div>{t('InterventionDetailPage.end')}: {intervention.dateFin}</div>
            </div>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <User className="h-4 w-4 mr-2 text-blue-500 flex-shrink-0" />
            <span>{intervention.user.nom} {intervention.user.prenom}</span>
          </div>
        </div>
      </div>

      {/* Section du signalement */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4">
        <h2 className="font-semibold text-gray-800 mb-3 flex items-center">
          <AlertCircle className="h-4 w-4 mr-2 text-blue-500" />
          {t('InterventionDetailPage.report')}
        </h2>

        <Link
          href={`/signalement/${signalement.id}`}
          className="block p-3 rounded border border-gray-200 bg-gray-50 hover:bg-gray-100 transition"
        >
          <h4 className="font-medium text-gray-800">{signalement.titre}</h4>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{signalement.description}</p>
          
          {signalement.image && (
            <div className="mt-2 flex justify-center">
              <div className="relative w-full h-32 bg-gray-200 rounded overflow-hidden">
                <img
                  src={`/storage/${signalement.image}`}
                  alt={signalement.titre}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          )}
        </Link>
      </div>

      {/* Section du commentaire */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4">
        <h2 className="font-semibold text-gray-800 mb-3 flex items-center">
          <MessageSquare className="h-4 w-4 mr-2 text-blue-500" />
          {t('InterventionDetailPage.adminComment')}
        </h2>

        {intervention.commentaire_admin ? (
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-700 text-sm">
            {intervention.commentaire_admin}
          </div>
        ) : (
          <div className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-500 text-sm italic">
            {t('InterventionDetailPage.noComment')}
          </div>
        )}
      </div>

      {/* Section contact */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <h2 className="font-semibold text-gray-800 mb-3 flex items-center">
          <User className="h-4 w-4 mr-2 text-blue-500" />
          {t('InterventionDetailPage.reporterContact')}
        </h2>

        <div className="space-y-3 text-sm">
          <div className="flex items-center p-2 bg-gray-50 rounded">
            <User className="h-4 w-4 mr-2 text-gray-500" />
            <span>{signalement.user.nom} {signalement.user.prenom}</span>
          </div>
          
          <div className="flex items-center p-2 bg-gray-50 rounded">
            <Phone className="h-4 w-4 mr-2 text-gray-500" />
            <span>{signalement.user.telephone}</span>
          </div>
          
          <div className="flex items-center p-2 bg-gray-50 rounded">
            <Mail className="h-4 w-4 mr-2 text-gray-500" />
            <span className="truncate">{signalement.user.email}</span>
          </div>
        </div>
        
        <button className="mt-4 w-full flex items-center justify-center px-4 py-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg text-sm font-medium hover:bg-blue-100 transition">
          <MessageSquare className="h-4 w-4 mr-2" />
          {t('InterventionDetailPage.contact')}
        </button>
      </div>
    </div>
  );

  // Vue Desktop
  const DesktopView = () => (
    <div className="flex bg-gray-50 min-h-screen">
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Entête avec bouton retour */}
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-3 py-1 rounded-lg transition-all"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>{t('InterventionDetailPage.backToInterventions')}</span>
            </button>
            
            <div className="flex space-x-2">
              <span className={`px-3 py-1 text-sm font-medium rounded-full border ${getPriorityClasses(priority)}`}>
                {priority}
              </span>
              <span className={`px-3 py-1 text-sm font-medium rounded-full border ${getStatusClasses(intervention.resolution_status)}`}>
                {intervention.resolution_status}
              </span>
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-800 mb-6">{t('InterventionDetailPage.title')}</h1>

          <div className="grid grid-cols-3 gap-6">
            {/* Colonne principale (2/3) */}
            <div className="col-span-2 space-y-6">
              {/* Informations générales */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-blue-500" />
                  {t('InterventionDetailPage.generalInfo')}
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800">{intervention.description_action}</h3>
                    <p className="text-gray-600 mt-1">{intervention.commentaire_admin}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-start p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <MapPin className="h-5 w-5 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-700 block mb-1">{t('InterventionDetailPage.location')}</span>
                        <span className="text-gray-600">{signalement.adresse}, {signalement.ville}</span>
                      </div>
                    </div>

                    <div className="flex items-start p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <Calendar className="h-5 w-5 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-700 block mb-1">{t('InterventionDetailPage.period')}</span>
                        <div className="text-gray-600">
                          <div>{t('InterventionDetailPage.start')}: {intervention.dateDebut}</div>
                          <div>{t('InterventionDetailPage.end')}: {intervention.dateFin}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <User className="h-5 w-5 mr-2 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-700 block mb-1">{t('InterventionDetailPage.assignedAgent')}</span>
                        <span className="text-gray-600">{intervention.user.nom} {intervention.user.prenom}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Signalement associé */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-blue-500" />
                  {t('InterventionDetailPage.relatedReport')}
                </h2>

                <Link
                  href={`/signalement/${signalement.id}`}
                  className="block p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
                >
                  <h4 className="font-medium text-gray-800">{signalement.titre}</h4>
                  <p className="text-sm text-gray-600 mt-2">{signalement.description}</p>
                  
                  {signalement.image && (
                    <div className="mt-4">
                      <div className="relative h-40 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={`/storage/${signalement.image}`}
                          alt={signalement.titre}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  )}
                </Link>
              </div>

              {/* Commentaire Admin */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-blue-500" />
                  {t('InterventionDetailPage.adminComment')}
                </h2>

                {intervention.commentaire_admin ? (
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
                    {intervention.commentaire_admin}
                  </div>
                ) : (
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-gray-500 italic">
                    {t('InterventionDetailPage.noComment')}
                  </div>
                )}
              </div>
            </div>

            {/* Colonne latérale (1/3) */}
            <div className="space-y-6">
              {/* Contact du signaleur */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <User className="h-5 w-5 mr-2 text-blue-500" />
                  {t('InterventionDetailPage.reporterContact')}
                </h2>
                
                <div className="space-y-4">
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-2">
                      <User className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="font-medium text-gray-700">{t('InterventionDetailPage.identity')}</span>
                    </div>
                    <p className="text-gray-600 pl-6">{signalement.user.nom} {signalement.user.prenom}</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-2">
                      <Phone className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="font-medium text-gray-700">{t('InterventionDetailPage.phone')}</span>
                    </div>
                    <p className="text-gray-600 pl-6">{signalement.user.telephone}</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-2">
                      <Mail className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="font-medium text-gray-700">{t('InterventionDetailPage.email')}</span>
                    </div>
                    <p className="text-gray-600 pl-6 break-words">{signalement.user.email}</p>
                  </div>
                </div>
                
                <button className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition flex items-center justify-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  {t('InterventionDetailPage.contact')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <AppLayout title={t('InterventionDetailPage.title')}>
      <div className="flex min-h-screen bg-gray-50">
        <AgentSidebar />
        {isMobile ? <MobileView /> : <DesktopView />}  
      </div>
    </AppLayout>
  );
};

export default InterventionDetailPage;