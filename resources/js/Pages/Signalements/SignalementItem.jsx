






// import React, { useEffect, useState } from 'react';
// import { router, usePage } from '@inertiajs/react';
// import { useForm } from '@inertiajs/react';
// import { MessageSquare, AlertTriangle, ChevronDown, ChevronUp, Edit, Trash2, Save, X } from 'lucide-react';

// export default function SignalementItem({ signalement, currentUser }) {
//   console.log('currentUser', currentUser); // vérifie ici
//   const [isUrgent, setIsUrgent] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [comments, setComments] = useState(signalement.commentaire || []);
//   const [openMenuId, setOpenMenuId] = useState(null);
//   const [editingCommentId, setEditingCommentId] = useState(null);
//   const [editedContent, setEditedContent] = useState('');
//   const [showLargeImage, setShowLargeImage] = useState(false);
//   // console.log(currentUsere);
//   console.log(signalement);

//   const {auth} = usePage().props;

//   const { data, setData, post, reset } = useForm({
//     signalement_id: signalement.id,
//     contenu: '',
//   });
//   // console.log("Current user ID:", signalement.user?.id);
//   useEffect(() => {
//     setIsUrgent(signalement.votes[0]?.type || false);
//     setComments(signalement.commentaire);
//   }, [signalement]);

//   const handleUrgent = async () => {
//     await post(`/signalements/${signalement.id}/urgent`);
//     setIsUrgent(!isUrgent);
//   };

//   const handleCommentSubmit = async (e) => {
//     e.preventDefault();
//     await post('/commentaires', {
//       data: {
//         signalement_id: signalement.id,
//         contenu: data.contenu,
//       },
//       preserveScroll: true,
//       onSuccess: () => {
//         setData('contenu', '');
//         reset('contenu');
//       },
//     });
//   };

//   const handleDeleteComment = (id) => {
//     if (confirm('Supprimer ce commentaire ?')) {
//       post(`/commentaires/${id}/delete`, {
//         method: 'post',
//         preserveScroll: true,
//         onSuccess: () => {
//           setComments(prev => prev.filter(c => c.id !== id));
//           setOpenMenuId(null);
//         },
//       });
//     }
//   };

//   const handleEditComment = (id) => {
//     router.post(`/commentaires/${id}/update`, {
//       contenu: editedContent,
//       edit: true,
//     }, {
//       preserveScroll: true,
//       onSuccess: () => {
//         setComments(prev =>
//           prev.map((c) =>
//             c.id === id ? { ...c, contenu: editedContent, edit: true } : c
//           )
//         );
//         setEditingCommentId(null);
//         setEditedContent('');
//       },
//     });
//   };

//   const getStatusBadge = (status) => {
//     switch (status) {
//       case 'En attente':
//         return <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">En attente</span>;
//       case 'En cours':
//         return <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">En cours</span>;
//       case 'Résolu':
//         return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Résolu</span>;
//       case 'Refusé':
//         return <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">Refusé</span>;
//       default:
//         return <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">{status}</span>;
//     }
//   };

//   return (
//     <div className="rounded-xl p-3 shadow-md bg-white hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500 mb-4 overflow-hidden">
//       {/* Modal pour afficher l'image en grand */}
//       {showLargeImage && signalement.image && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setShowLargeImage(false)}>
//           <div className="relative max-w-4xl max-h-screen p-4">
//             <button 
//               className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
//               onClick={() => setShowLargeImage(false)}
//             >
//               <X className="w-4 h-4" />
//             </button>
//             <img
//               src={`/storage/${signalement.image}`}
//               alt="Signalement"
//               className="max-h-screen max-w-full rounded-lg shadow-2xl"
//             />
//           </div>
//         </div>
//       )}

//       <div className="flex flex-col sm:flex-row gap-4">
//         {/* Première colonne: image (si existe) */}
//         {signalement.image && (
//           <div className="sm:w-1/4 flex-shrink-0">
//             <div 
//               className="cursor-pointer relative group rounded-lg overflow-hidden shadow-md" 
//               onClick={() => setShowLargeImage(true)}
//             >
//               <img
//                 src={`/storage/${signalement.image}`}
//                 alt="Signalement"
//                 className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
//                 <span className="text-white text-lg font-medium">
//                   🔍 Agrandir
//                 </span>
//               </div>
//             </div>
//           </div>
//         )}
        
//         {/* Deuxième colonne: informations du signalement */}
//         <div className={`${signalement.image ? 'sm:w-3/4' : 'w-full'}`}>
//           <div className="flex justify-between items-start">
//             <div>
//               <h2 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-indigo-700">{signalement.titre}</h2>
//               <div className="flex flex-wrap gap-1 mt-1">
//                 {getStatusBadge(signalement.statut)}
//                 {isUrgent && (
//                   <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium inline-flex items-center">
//                     <AlertTriangle className="w-3 h-3 mr-1" /> URGENT
//                   </span>
//                 )}
//               </div>
//             </div>
            
//             {/* Menu contextuel */}
//             {currentUser === signalement.user_id && (
//               <div className="relative">
//                 <button
//                   onClick={() => setOpenMenuId(openMenuId === 'signalement' ? null : 'signalement')}
//                   className="text-gray-500 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition-colors"
//                 >
//                   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <circle cx="12" cy="6" r="2" fill="currentColor" />
//                     <circle cx="12" cy="12" r="2" fill="currentColor" />
//                     <circle cx="12" cy="18" r="2" fill="currentColor" />
//                   </svg>
//                 </button>

//                 {openMenuId === 'signalement' && (
//                   <div className="absolute right-0 mt-1 bg-white border rounded-xl shadow-xl z-10 w-48 py-1 overflow-hidden animate-fadeIn">
//                     <button
//                       onClick={() => window.location.href = `/signalements/${signalement.id}/edit`}
//                       className="block w-full text-left px-4 py-2 hover:bg-red-50 transition-colors flex items-center"
//                     >
//                       <Edit className="w-4 h-4 mr-2 text-red-500" /> Modifier
//                     </button>
//                     <button
//                       onClick={() => {
//                         if (confirm('Es-tu sûr de vouloir supprimer ce signalement ?')) {
//                           post(`/signalements/${signalement.id}/delete`, {
//                             method: 'delete',
//                             preserveScroll: true,
//                           });
//                         }
//                       }}
//                       className="block w-full text-left px-4 py-2 hover:bg-red-50 transition-colors text-red-600 flex items-center"
//                     >
//                       <Trash2 className="w-4 h-4 mr-2" /> Supprimer
//                     </button>
//                     <button
//                       onClick={handleUrgent}
//                       className={`block w-full text-left px-4 py-2 hover:bg-red-50 transition-colors flex items-center ${
//                         isUrgent ? 'text-orange-600' : 'text-red-600'
//                       }`}
//                     >
//                       <AlertTriangle className="w-4 h-4 mr-2" /> {isUrgent ? 'Annuler Urgent' : 'Marquer comme Urgent'}
//                     </button>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>

//           <div className="mt-2 text-sm text-gray-700">
//             {signalement.description}
//           </div>
          
//           <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
//             <div className="flex items-center">
//               <span className="mr-1">🏙️</span> {signalement.ville}
//             </div>
//             <div className="flex items-center">
//               <span className="mr-1">📍</span> {signalement.adresse}
//             </div>
//           </div>

//           <div className="mt-4 flex gap-2 flex-wrap">
//             <button
//               disabled={auth.user.validated =='1' ? false : true}
//               onClick={handleUrgent}
//               className={`flex items-center px-3 py-1.5 rounded-full text-xs font-medium text-white transition-colors ${
//                 isUrgent 
//                   ? 'bg-red-600 hover:bg-red-700' 
//                   : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
//               }`}
//             >
//               <AlertTriangle className="w-3 h-3 mr-1" /> {isUrgent ? 'Annuler Urgent' : 'Urgent'}
//             </button>

//             <button
//               className="bg-gradient-to-r from-red-500 to-indigo-600 hover:from-red-600 hover:to-indigo-700 text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center transition-all shadow-sm hover:shadow"
//               onClick={() => setShowComments(!showComments)}
//             >
//               {showComments ? <ChevronUp className="w-3 h-3 mr-1" /> : <ChevronDown className="w-3 h-3 mr-1" />}
//               {showComments ? 'Masquer' : `Commentaires (${comments.length})`}
//             </button>
//           </div>
//         </div>
//       </div>

//       {showComments && (
//         <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-100 animate-fadeIn">
//           <h3 className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-indigo-700 mb-3">Commentaires</h3>
          
//           {comments.length === 0 ? (
//             <p className="text-gray-500 italic text-center py-2 text-sm">Aucun commentaire</p>
//           ) : (
//             <div className="space-y-3">
//               {comments
//                 .filter((comment) => comment.signalement_id === signalement.id)
//                 .map((comment) => (
//                   <div key={comment.id} className="bg-white p-3 rounded-lg shadow-sm border-l-2 border-l-indigo-300 relative">
//                     <div className="flex justify-between items-start">
//                       <div className="w-full">
//                         <div className="flex items-center text-xs">
//                           <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-indigo-600 flex items-center justify-center text-white font-semibold text-xs mr-2 shadow-sm">
//                             {comment.user 
//                               ? `${comment.user.nom.charAt(0)}${comment.user.prenom.charAt(0)}`.toUpperCase()
//                               : '??'}
//                           </div>
//                           <span className="font-medium text-gray-800">
//                             {comment.user
//                               ? comment.user.nom + ' ' + comment.user.prenom
//                               : 'Utilisateur inconnu'}
//                           </span>
//                           {comment.created_at !== comment.updated_at && (
//                             <span className="ml-2 text-xs text-gray-500">(Modifié)</span>
//                           )}
//                         </div>

//                         {editingCommentId === comment.id ? (
//                           <div className="mt-2">
//                             <input
//                               value={editedContent}
//                               onChange={(e) => setEditedContent(e.target.value)}
//                               className="border p-2 rounded-lg w-full text-sm focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
//                             />
//                             <div className="mt-2 flex gap-2">
//                               <button
//                                 className="bg-gradient-to-r from-red-500 to-indigo-600 text-white px-3 py-1.5 rounded-full text-xs flex items-center shadow-sm"
//                                 onClick={() => handleEditComment(comment.id)}
//                               >
//                                 <Save className="w-3 h-3 mr-1" /> Enregistrer
//                               </button>
//                               <button
//                                 className="bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full text-xs flex items-center"
//                                 onClick={() => setEditingCommentId(null)}
//                               >
//                                 <X className="w-3 h-3 mr-1" /> Annuler
//                               </button>
//                             </div>
//                           </div>
//                         ) : (
//                           <p className="text-sm text-gray-700 mt-2">{comment.contenu}</p>
//                         )}

//                         <small className="text-xs text-gray-400 block mt-2">
//                           {new Date(comment.created_at).toLocaleDateString()}
//                         </small>
//                       </div>

//                       {currentUser === comment.user_id && (
//                         <div className="relative ml-2">
//                           <button
//                             onClick={() => setOpenMenuId(openMenuId === comment.id ? null : comment.id)}
//                             className="text-gray-400 hover:text-red-600 p-1 rounded-full hover:bg-red-50 transition-colors"
//                           >
//                             <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                               <circle cx="12" cy="6" r="2" fill="currentColor" />
//                               <circle cx="12" cy="12" r="2" fill="currentColor" />
//                               <circle cx="12" cy="18" r="2" fill="currentColor" />
//                             </svg>
//                           </button>

//                           {openMenuId === comment.id && (
//                             <div className="absolute right-0 mt-1 bg-white border rounded-lg shadow-lg z-10 w-32 py-1">
//                               <button
//                                 onClick={() => {
//                                   setEditingCommentId(comment.id);
//                                   setEditedContent(comment.contenu);
//                                   setOpenMenuId(null);
//                                 }}
//                                 className="block w-full text-left px-3 py-1.5 hover:bg-red-50 transition-colors flex items-center text-xs"
//                               >
//                                 <Edit className="w-3 h-3 mr-2 text-red-500" /> Modifier
//                               </button>
//                               <button
//                                 onClick={() => handleDeleteComment(comment.id)}
//                                 className="block w-full text-left px-3 py-1.5 hover:bg-red-50 transition-colors text-red-600 flex items-center text-xs"
//                               >
//                                 <Trash2 className="w-3 h-3 mr-2" /> Supprimer
//                               </button>
//                             </div>
//                           )}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           )}

//           <form onSubmit={handleCommentSubmit} className="mt-3 flex gap-2">
//             <input
//               type="text"
//               value={data.contenu}
//               disabled={auth.user.validated ==='0'? true : false }
//               onChange={(e) => setData('contenu', e.target.value)}
//               placeholder="Ajouter un commentaire..."
//               className="flex-1 p-2 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
//               required
//               name="contenu"
//             />
//             <button
//               type="submit"
//               disabled={auth.user.validated =='1' ? false : true}

//               className="bg-gradient-to-r from-red-500 to-indigo-600 hover:from-red-600 hover:to-indigo-700 text-white px-4 py-2 rounded-full text-sm flex items-center transition-all shadow-sm hover:shadow"
//             >
//               <MessageSquare className="w-4 h-4 mr-2" /> Commenter
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import { MessageSquare, AlertTriangle, ChevronDown, ChevronUp, Edit, Trash2, Save, X } from 'lucide-react';

export default function SignalementItem({ signalement, currentUser }) {
  const { t } = useTranslation();
  const [isUrgent, setIsUrgent] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(signalement.commentaire || []);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedContent, setEditedContent] = useState('');
  const [showLargeImage, setShowLargeImage] = useState(false);
  
  const { auth } = usePage().props;

  const { data, setData, post, reset } = useForm({
    signalement_id: signalement.id,
    contenu: '',
  });

  useEffect(() => {
    setIsUrgent(signalement.votes[0]?.type || false);
    setComments(signalement.commentaire);
  }, [signalement]);

  const handleUrgent = async () => {
    await post(`/signalements/${signalement.id}/urgent`);
    setIsUrgent(!isUrgent);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    await post('/commentaires', {
      data: {
        signalement_id: signalement.id,
        contenu: data.contenu,
      },
      preserveScroll: true,
      onSuccess: () => {
        setData('contenu', '');
        reset('contenu');
      },
    });
  };

  const handleDeleteComment = (id) => {
    if (confirm(t('signalementitem.comments.delete_confirm'))) {
      post(`/commentaires/${id}/delete`, {
        method: 'post',
        preserveScroll: true,
        onSuccess: () => {
          setComments(prev => prev.filter(c => c.id !== id));
          setOpenMenuId(null);
        },
      });
    }
  };

  const handleEditComment = (id) => {
    router.post(`/commentaires/${id}/update`, {
      contenu: editedContent,
      edit: true,
    }, {
      preserveScroll: true,
      onSuccess: () => {
        setComments(prev =>
          prev.map((c) =>
            c.id === id ? { ...c, contenu: editedContent, edit: true } : c
          )
        );
        setEditingCommentId(null);
        setEditedContent('');
      },
    });
  };

  const getStatusBadge = (status) => {
    const statusKey = status.toLowerCase().replace(' ', '_');
    const statusText = t(`signalementitem.status.${statusKey}`);
    
    switch (status) {
      case 'En attente':
        return <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">{statusText}</span>;
      case 'En cours':
        return <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">{statusText}</span>;
      case 'Résolu':
        return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">{statusText}</span>;
      case 'Refusé':
        return <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">{statusText}</span>;
      default:
        return <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">{statusText}</span>;
    }
  };

  return (
    <div className="rounded-xl p-3 shadow-md bg-white hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500 mb-4 overflow-hidden">
      {/* Modal for large image */}
      {showLargeImage && signalement.image && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setShowLargeImage(false)}>
          <div className="relative max-w-4xl max-h-screen p-4">
            <button 
              className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
              onClick={() => setShowLargeImage(false)}
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={`/storage/${signalement.image}`}
              alt={t('signalementitem.image_alt')}
              className="max-h-screen max-w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Image column */}
        {signalement.image && (
          <div className="sm:w-1/4 flex-shrink-0">
            <div 
              className="cursor-pointer relative group rounded-lg overflow-hidden shadow-md" 
              onClick={() => setShowLargeImage(true)}
            >
              <img
                src={`/storage/${signalement.image}`}
                alt={t('signalementitem.image_alt')}
                className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                <span className="text-white text-lg font-medium">
                  🔍 {t('signalementitem.zoom')}
                </span>
              </div>
            </div>
          </div>
        )}
        
        {/* Main content column */}
        <div className={`${signalement.image ? 'sm:w-3/4' : 'w-full'}`}>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-indigo-700">{signalement.titre}</h2>
              <div className="flex flex-wrap gap-1 mt-1">
                {getStatusBadge(signalement.statut)}
                {isUrgent && (
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium inline-flex items-center">
                    <AlertTriangle className="w-3 h-3 mr-1" /> {t('signalementitem.urgent')}
                  </span>
                )}
              </div>
            </div>
            
            {/* Context menu */}
            {currentUser === signalement.user_id && (
              <div className="relative">
                <button
                  onClick={() => setOpenMenuId(openMenuId === 'signalement' ? null : 'signalement')}
                  className="text-gray-500 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="6" r="2" fill="currentColor" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                    <circle cx="12" cy="18" r="2" fill="currentColor" />
                  </svg>
                </button>

                {openMenuId === 'signalement' && (
                  <div className="absolute right-0 mt-1 bg-white border rounded-xl shadow-xl z-10 w-48 py-1 overflow-hidden animate-fadeIn">
                    <button
                      onClick={() => window.location.href = `/signalements/${signalement.id}/edit`}
                      className="block w-full text-left px-4 py-2 hover:bg-red-50 transition-colors flex items-center"
                    >
                      <Edit className="w-4 h-4 mr-2 text-red-500" /> {t('signalementitem.actions.edit')}
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(t('signalementitem.delete_confirm'))) {
                          post(`/signalements/${signalement.id}/delete`, {
                            method: 'delete',
                            preserveScroll: true,
                          });
                        }
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-red-50 transition-colors text-red-600 flex items-center"
                    >
                      <Trash2 className="w-4 h-4 mr-2" /> {t('signalementitem.actions.delete')}
                    </button>
                    <button
                      onClick={handleUrgent}
                      className={`block w-full text-left px-4 py-2 hover:bg-red-50 transition-colors flex items-center ${
                        isUrgent ? 'text-orange-600' : 'text-red-600'
                      }`}
                    >
                      <AlertTriangle className="w-4 h-4 mr-2" /> {isUrgent ? t('signalementitem.actions.cancel_urgent') : t('signalementitem.actions.mark_urgent')}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="mt-2 text-sm text-gray-700">
            {signalement.description}
          </div>
          
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="mr-1">🏙️</span> {signalement.ville}
            </div>
            <div className="flex items-center">
              <span className="mr-1">📍</span> {signalement.adresse}
            </div>
          </div>

          <div className="mt-4 flex gap-2 flex-wrap">
            <button
              // disabled={auth.user.validated === '1' ? false : true}
              onClick={handleUrgent}
              className={`flex items-center px-3 py-1.5 rounded-full text-xs font-medium text-white transition-colors ${
                isUrgent 
                  ? 'bg-red-600 hover:bg-red-700' 
                  : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
              }`}
            >
              <AlertTriangle className="w-3 h-3 mr-1" /> {isUrgent ? t('signalementitem.actions.cancel_urgent') : t('signalementitem.actions.urgent')}
            </button>

            <button
              className="bg-gradient-to-r from-red-500 to-indigo-600 hover:from-red-600 hover:to-indigo-700 text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center transition-all shadow-sm hover:shadow"
              onClick={() => setShowComments(!showComments)}
            >
              {showComments ? <ChevronUp className="w-3 h-3 mr-1" /> : <ChevronDown className="w-3 h-3 mr-1" />}
              {showComments ? t('signalementitem.comments.hide') : t('signalementitem.comments.show', { count: comments.length })}
            </button>
          </div>
        </div>
      </div>

      {showComments && (
        <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-100 animate-fadeIn">
          <h3 className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-indigo-700 mb-3">
            {t('signalementitem.comments.title')}
          </h3>
          
          {comments.length === 0 ? (
            <p className="text-gray-500 italic text-center py-2 text-sm">
              {t('signalementitem.comments.empty')}
            </p>
          ) : (
            <div className="space-y-3">
              {comments
                .filter((comment) => comment.signalement_id === signalement.id)
                .map((comment) => (
                  <div key={comment.id} className="bg-white p-3 rounded-lg shadow-sm border-l-2 border-l-indigo-300 relative">
                    <div className="flex justify-between items-start">
                      <div className="w-full">
                        <div className="flex items-center text-xs">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-indigo-600 flex items-center justify-center text-white font-semibold text-xs mr-2 shadow-sm">
                            {comment.user 
                              ? `${comment.user.nom.charAt(0)}${comment.user.prenom.charAt(0)}`.toUpperCase()
                              : '??'}
                          </div>
                          <span className="font-medium text-gray-800">
                            {comment.user
                              ? comment.user.nom + ' ' + comment.user.prenom
                              : t('signalementitem.comments.unknown_user')}
                          </span>
                          {comment.created_at !== comment.updated_at && (
                            <span className="ml-2 text-xs text-gray-500">
                              ({t('signalementitem.comments.edited')})
                            </span>
                          )}
                        </div>

                        {editingCommentId === comment.id ? (
                          <div className="mt-2">
                            <input
                              value={editedContent}
                              onChange={(e) => setEditedContent(e.target.value)}
                              className="border p-2 rounded-lg w-full text-sm focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
                            />
                            <div className="mt-2 flex gap-2">
                              <button
                                className="bg-gradient-to-r from-red-500 to-indigo-600 text-white px-3 py-1.5 rounded-full text-xs flex items-center shadow-sm"
                                onClick={() => handleEditComment(comment.id)}
                              >
                                <Save className="w-3 h-3 mr-1" /> {t('signalementitem.comments.save')}
                              </button>
                              <button
                                className="bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full text-xs flex items-center"
                                onClick={() => setEditingCommentId(null)}
                              >
                                <X className="w-3 h-3 mr-1" /> {t('signalementitem.comments.cancel')}
                              </button>
                            </div>
                          </div>
                        ) : (
                          <p className="text-sm text-gray-700 mt-2">{comment.contenu}</p>
                        )}

                        <small className="text-xs text-gray-400 block mt-2">
                          {new Date(comment.created_at).toLocaleDateString()}
                        </small>
                      </div>

                      {currentUser === comment.user_id && (
                        <div className="relative ml-2">
                          <button
                            onClick={() => setOpenMenuId(openMenuId === comment.id ? null : comment.id)}
                            className="text-gray-400 hover:text-red-600 p-1 rounded-full hover:bg-red-50 transition-colors"
                          >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12" cy="6" r="2" fill="currentColor" />
                              <circle cx="12" cy="12" r="2" fill="currentColor" />
                              <circle cx="12" cy="18" r="2" fill="currentColor" />
                            </svg>
                          </button>

                          {openMenuId === comment.id && (
                            <div className="absolute right-0 mt-1 bg-white border rounded-lg shadow-lg z-10 w-32 py-1">
                              <button
                                onClick={() => {
                                  setEditingCommentId(comment.id);
                                  setEditedContent(comment.contenu);
                                  setOpenMenuId(null);
                                }}
                                className="block w-full text-left px-3 py-1.5 hover:bg-red-50 transition-colors flex items-center text-xs"
                              >
                                <Edit className="w-3 h-3 mr-2 text-red-500" /> {t('signalementitem.comments.edit')}
                              </button>
                              <button
                                onClick={() => handleDeleteComment(comment.id)}
                                className="block w-full text-left px-3 py-1.5 hover:bg-red-50 transition-colors text-red-600 flex items-center text-xs"
                              >
                                <Trash2 className="w-3 h-3 mr-2" /> {t('signalementitem.comments.delete')}
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          )}

          <form onSubmit={handleCommentSubmit} className="mt-3 flex gap-2">
            <input
              type="text"
              value={data.contenu}
              disabled={auth.user.validated === '0'}
              onChange={(e) => setData('contenu', e.target.value)}
              placeholder={t('signalementitem.comments.add_placeholder')}
              className="flex-1 p-2 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
              required
              name="contenu"
            />
            <button
              type="submit"
              // disabled={auth.user.validated === '1' ? false : true}
              className="bg-gradient-to-r from-red-500 to-indigo-600 hover:from-red-600 hover:to-indigo-700 text-white px-4 py-2 rounded-full text-sm flex items-center transition-all shadow-sm hover:shadow"
            >
              <MessageSquare className="w-4 h-4 mr-2" /> {t('signalementitem.comments.comment')}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}