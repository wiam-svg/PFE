



// import AgentSidebar from '@/Components/AgentSidebar';
// import AppLayout from '@/Layouts/AppLayout';
// import { ArrowLeft, MessageCircle, ThumbsUp, Calendar, Tag } from "lucide-react";
// import { useState, useEffect } from 'react';

// const SignalementDetails = ({ interventions, signalement, votesCount }) => {
//   // État pour suivre si l'affichage est mobile
//   const [isMobile, setIsMobile] = useState(false);
  
//   // Vérifier la taille de l'écran au chargement et lors des redimensionnements
//   useEffect(() => {
//     // Fonction pour mettre à jour l'état
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     // Vérifier au chargement
//     checkScreenSize();
    
//     // Ajouter l'écouteur d'événement
//     window.addEventListener('resize', checkScreenSize);
    
//     // Nettoyer l'écouteur d'événement
//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);
  
//   // Composant pour la vue Mobile
//   const MobileView = () => (
//     <div className="w-full px-4 py-4">
//       {/* Bouton de retour */}
//       <button
//         onClick={() => window.history.back()}
//         className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 hover:underline mb-4"
//       >
//         <ArrowLeft className="h-4 w-4 mr-2" />
//         Retour aux interventions
//       </button>
      
//       {/* Carte du signalement */}
//       <div className="border rounded-lg shadow-md bg-white overflow-hidden">
//         {/* En-tête du signalement */}
//         <div className="border-b p-4">
//           <h1 className="text-xl font-semibold text-gray-800 mb-2">
//             {signalement.titre}
//           </h1>
          
//           {/* Informations du signalement */}
//           <div className="flex flex-wrap gap-2 text-sm text-gray-500">
//             <div className="flex items-center">
//               <ThumbsUp className="h-4 w-4 mr-1" />
//               <span>{votesCount} votes</span>
//             </div>
//             <div className="flex items-center">
//               <Tag className="h-4 w-4 mr-1" />
//               <span>{signalement.categorie.nom}</span>
//             </div>
//             {signalement.created_at && (
//               <div className="flex items-center">
//                 <Calendar className="h-4 w-4 mr-1" />
//                 <span>{new Date(signalement.created_at).toLocaleDateString()}</span>
//               </div>
//             )}
//           </div>
//         </div>
        
//         <div className="p-4">
//           {/* Description du signalement */}
//           <p className="text-gray-700 mb-4">{signalement.description}</p>
          
//           {/* Image du signalement (si disponible) */}
//           {signalement.image && (
//             <div className="mb-6">
//               <img
//                 src={`/storage/${signalement.image}`}
//                 alt={signalement.titre}
//                 className="w-full h-auto rounded-lg object-cover"
//               />
//             </div>
//           )}
          
//           {/* Commentaires */}
//           <div>
//             <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
//               <MessageCircle className="h-5 w-5 mr-2" />
//               Commentaires
//             </h2>
            
//             <div className="space-y-4">
//               {signalement.commentaire && signalement.commentaire.length > 0 ? (
//                 signalement.commentaire.map((commentaire) => (
//                   <div key={commentaire.id} className="border-b pb-4">
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="font-medium text-gray-700 text-sm">
//                         {commentaire.user.nom} {commentaire.user.prenom}
//                       </span>
//                       <span className="text-xs text-gray-500">
//                         {new Date(commentaire.created_at).toLocaleDateString()}
//                       </span>
//                     </div>
//                     <p className="text-gray-600 text-sm">{commentaire.contenu}</p>
//                   </div>
//                 ))
//               ) : (
//                 <div className="text-center py-4 text-gray-500">
//                   <p>Aucun commentaire pour ce signalement.</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
  
//   // Composant pour la vue Desktop
//   const DesktopView = () => (
//     <div className="flex-1 px-6 py-8">
//       {/* Bouton de retour */}
//       <button
//         onClick={() => window.history.back()}
//         className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 hover:underline mb-6"
//       >
//         <ArrowLeft className="h-4 w-4 mr-2" />
//         Retour aux interventions
//       </button>
      
//       {/* Carte du signalement */}
//       <div className="border rounded-lg shadow-md bg-white overflow-hidden">
//         {/* En-tête du signalement */}
//         <div className="border-b p-6">
//           <h1 className="text-2xl font-semibold text-gray-800 mb-3">
//             {signalement.titre}
//           </h1>
          
//           {/* Informations du signalement */}
//           <div className="flex gap-6 text-sm text-gray-500">
//             <div className="flex items-center">
//               <ThumbsUp className="h-4 w-4 mr-1" />
//               <span>{votesCount} votes</span>
//             </div>
//             <div className="flex items-center">
//               <Tag className="h-4 w-4 mr-1" />
//               <span>{signalement.categorie.nom}</span>
//             </div>
//             {signalement.created_at && (
//               <div className="flex items-center">
//                 <Calendar className="h-4 w-4 mr-1" />
//                 <span>{new Date(signalement.created_at).toLocaleDateString()}</span>
//               </div>
//             )}
//           </div>
//         </div>
        
//         <div className="p-6">
//           {/* Description du signalement */}
//           <p className="text-gray-700 mb-6">{signalement.description}</p>
          
//           {/* Contenu flexible avec image et commentaires côte à côte */}
//           <div className="flex gap-8">
//             {/* Colonne de gauche: Image */}
//             {signalement.image && (
//               <div className="w-1/2">
//                 <img
//                   src={`/storage/${signalement.image}`}
//                   alt={signalement.titre}
//                   className="w-full h-auto rounded-lg object-cover max-h-96"
//                 />
//               </div>
//             )}
            
//             {/* Colonne de droite: Commentaires */}
//             <div className={signalement.image ? "w-1/2" : "w-full"}>
//               <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                 <MessageCircle className="h-5 w-5 mr-2" />
//                 Commentaires
//               </h2>
              
//               <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
//                 {signalement.commentaire && signalement.commentaire.length > 0 ? (
//                   signalement.commentaire.map((commentaire) => (
//                     <div key={commentaire.id} className="border-b pb-4">
//                       <div className="flex items-center justify-between mb-2">
//                         <span className="font-medium text-gray-700">
//                           {commentaire.user.nom} {commentaire.user.prenom}
//                         </span>
//                         <span className="text-xs text-gray-500">
//                           {new Date(commentaire.created_at).toLocaleDateString()}
//                         </span>
//                       </div>
//                       <p className="text-gray-600">{commentaire.contenu}</p>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="text-center py-6 text-gray-500">
//                     <p>Aucun commentaire pour ce signalement.</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
  
//   // Rendu principal avec condition pour afficher la vue mobile ou desktop
//   return (
//     <AppLayout title="Détails du Signalement">
//       <div className="flex min-h-screen bg-gray-50">
//         <AgentSidebar />
        
//         {isMobile ? <MobileView /> : <DesktopView />}
//       </div>
//     </AppLayout>
//   );
// };

// export default SignalementDetails;




import AgentSidebar from '@/Components/AgentSidebar';
import AppLayout from '@/Layouts/AppLayout';
import { ArrowLeft, MessageCircle, ThumbsUp, Calendar, Tag } from "lucide-react";
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SignalementDetails = ({ interventions, signalement, votesCount }) => {
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
  
  const MobileView = () => (
    <div className="w-full px-4 py-4">
      <button
        onClick={() => window.history.back()}
        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 hover:underline mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        {t('signalement.back_to_interventions')}
      </button>
      
      <div className="border rounded-lg shadow-md bg-white overflow-hidden">
        <div className="border-b p-4">
          <h1 className="text-xl font-semibold text-gray-800 mb-2">
            {signalement.titre}
          </h1>
          
          <div className="flex flex-wrap gap-2 text-sm text-gray-500">
            <div className="flex items-center">
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span>{votesCount} {t('signalement.votes')}</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-1" />
              <span>{signalement.categorie.nom}</span>
            </div>
            {signalement.created_at && (
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{new Date(signalement.created_at).toLocaleDateString()}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="p-4">
          <p className="text-gray-700 mb-4">{signalement.description}</p>
          
          {signalement.image && (
            <div className="mb-6">
              <img
                src={`/storage/${signalement.image}`}
                alt={signalement.titre}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          )}
          
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <MessageCircle className="h-5 w-5 mr-2" />
              {t('signalement.comments')}
            </h2>
            
            <div className="space-y-4">
              {signalement.commentaire && signalement.commentaire.length > 0 ? (
                signalement.commentaire.map((commentaire) => (
                  <div key={commentaire.id} className="border-b pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-700 text-sm">
                        {commentaire.user.nom} {commentaire.user.prenom}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(commentaire.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{commentaire.contenu}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-4 text-gray-500">
                  <p>{t('signalement.no_comments')}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  const DesktopView = () => (
    <div className="flex-1 px-6 py-8">
      <button
        onClick={() => window.history.back()}
        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 hover:underline mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        {t('signalement.back_to_interventions')}
      </button>
      
      <div className="border rounded-lg shadow-md bg-white overflow-hidden">
        <div className="border-b p-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-3">
            {signalement.titre}
          </h1>
          
          <div className="flex gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span>{votesCount} {t('signalement.votes')}</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-1" />
              <span>{signalement.categorie.nom}</span>
            </div>
            {signalement.created_at && (
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{new Date(signalement.created_at).toLocaleDateString()}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-gray-700 mb-6">{signalement.description}</p>
          
          <div className="flex gap-8">
            {signalement.image && (
              <div className="w-1/2">
                <img
                  src={`/storage/${signalement.image}`}
                  alt={signalement.titre}
                  className="w-full h-auto rounded-lg object-cover max-h-96"
                />
              </div>
            )}
            
            <div className={signalement.image ? "w-1/2" : "w-full"}>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                {t('signalement.comments')}
              </h2>
              
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {signalement.commentaire && signalement.commentaire.length > 0 ? (
                  signalement.commentaire.map((commentaire) => (
                    <div key={commentaire.id} className="border-b pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-700">
                          {commentaire.user.nom} {commentaire.user.prenom}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(commentaire.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-600">{commentaire.contenu}</p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-6 text-gray-500">
                    <p>{t('signalement.no_comments')}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  return (
    <AppLayout title={t('signalement.report_details')}>
      <div className="flex min-h-screen bg-gray-50">
        <AgentSidebar />
        {isMobile ? <MobileView /> : <DesktopView />}
      </div>
    </AppLayout>
  );
};

export default SignalementDetails;