
// import React, { useEffect, useState } from 'react';
// import { router } from '@inertiajs/react';
// import { useForm, usePage } from '@inertiajs/react';

// export default function SignalementItem({ signalement, currentUser }) {
//   const [isUrgent, setIsUrgent] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [comments, setComments] = useState(signalement.commentaire || []);
//   const [openMenuId, setOpenMenuId] = useState(null);
//   const [editingCommentId, setEditingCommentId] = useState(null);
//   const [editedContent, setEditedContent] = useState('');

//   const { data, setData, post, reset } = useForm({
//     signalement_id: signalement.id,
//     contenu: '',
//   });

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

//   return (
//     <div className="border rounded-xl p-4 shadow-md bg-white my-6">
//       <h2 className="text-xl font-semibold mb-2">{signalement.titre}</h2>

//       {signalement.image && (
//         <img
//           src={`/storage/${signalement.image}`}
//           alt="Signalement"
//           className="w-full max-w-md rounded mb-3"
//         />
//       )}

//       <p><strong>Description:</strong> {signalement.description}</p>
//       <p><strong>Statut:</strong> {signalement.statut}</p>
//       <p><strong>Ville:</strong> {signalement.ville}</p>
//       <p><strong>Adresse:</strong> {signalement.adresse}</p>

//       {/* Menu contextuel pour modifier, supprimer ou marquer comme urgent */}
//       {currentUser?.id === signalement.user_id && (
//         <div className="relative mt-4">
//           <button
//             onClick={() =>
//               setOpenMenuId(openMenuId === 'signalement' ? null : 'signalement')
//             }
//             className="text-gray-500 hover:text-black px-2"
//           >
//             ⋮
//           </button>

//           {openMenuId === 'signalement' && (
//             <div className="absolute right-0 mt-1 bg-white border rounded shadow z-10">
//               <button
//                 onClick={() =>
//                   window.location.href = `/signalements/${signalement.id}/edit`
//                 }
//                 className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//               >
//                 ✏️ Modifier
//               </button>
//               <button
//                 onClick={() => {
//                   if (confirm('Es-tu sûr de vouloir supprimer ce signalement ?')) {
//                     post(`/signalements/${signalement.id}/delete`, {
//                       method: 'delete',
//                       preserveScroll: true,
//                     });
//                   }
//                 }}
//                 className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
//               >
//                 🗑️ Supprimer
//               </button>
//               {/* Bouton Urgent dans le menu */}
//               <button
//                 onClick={handleUrgent}
//                 className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${isUrgent ? 'bg-red-600 text-white' : 'bg-orange-500 text-white'}`}
//               >
//                 {isUrgent ? 'Annuler Urgent' : 'Marquer comme Urgent'}
//               </button>
//             </div>
//           )}
//         </div>
//       )}

//       <div className="mt-4 flex gap-4">
//         <button
//           style={{
//             backgroundColor: isUrgent ? 'red' : 'orange',
//             color: 'white',
//             padding: '8px 15px',
//             borderRadius: '5px',
//           }}
//           onClick={handleUrgent}
//         >
//           {isUrgent ? 'Annuler Urgent' : 'Urgent'}
//         </button>

//         <button
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//           onClick={() => setShowComments(!showComments)}
//         >
//           {showComments ? 'Masquer commentaires' : `Afficher commentaires (${comments.length})`}
//         </button>
//       </div>

//       {showComments && (
//         <div className="mt-4 bg-gray-100 p-4 rounded">
//           <h3 className="text-lg font-bold mb-3">Commentaires</h3>
//           <div className="space-y-2">
//             {comments
//               .filter((comment) => comment.signalement_id === signalement.id)
//               .map((comment) => (
//                 <div key={comment.id} className="bg-white p-2 rounded shadow relative">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <strong>
//                         {comment.user
//                           ? comment.user.nom + ' ' + comment.user.prenom
//                           : 'Utilisateur inconnu'}{' '}
//                         {comment.edit ? '(Modifié)' : ''}
//                       </strong>

//                       {editingCommentId === comment.id ? (
//                         <div className="mt-1">
//                           <input
//                             value={editedContent}
//                             onChange={(e) => setEditedContent(e.target.value)}
//                             className="border p-1 rounded w-full"
//                           />
//                           <div className="mt-1 flex gap-2">
//                             <button
//                               className="bg-green-600 text-white px-2 py-1 rounded"
//                               onClick={() => handleEditComment(comment.id)}
//                             >
//                               💾 Enregistrer
//                             </button>
//                             <button
//                               className="text-gray-500"
//                               onClick={() => setEditingCommentId(null)}
//                             >
//                               ❌ Annuler
//                             </button>
//                           </div>
//                         </div>
//                       ) : (
//                         <p>{comment.contenu}</p>
//                       )}

//                       <small className="text-gray-500">
//                         {new Date(comment.created_at).toLocaleString()}
//                       </small>
//                     </div>

//                     {currentUser?.id === comment.user_id && (
//                       <div className="relative">
//                         <button
//                           onClick={() =>
//                             setOpenMenuId(openMenuId === comment.id ? null : comment.id)
//                           }
//                           className="text-gray-500 hover:text-black px-2"
//                         >
//                           ⋮
//                         </button>

//                         {openMenuId === comment.id && (
//                           <div className="absolute right-0 mt-1 bg-white border rounded shadow z-10">
//                             <button
//                               onClick={() => {
//                                 setEditingCommentId(comment.id);
//                                 setEditedContent(comment.contenu);
//                                 setOpenMenuId(null);
//                               }}
//                               className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                             >
//                               ✏️ Modifier
//                             </button>
//                             <button
//                               onClick={() => handleDeleteComment(comment.id)}
//                               className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
//                             >
//                               🗑️ Supprimer
//                             </button>
//                           </div>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//           </div>

//           <form onSubmit={handleCommentSubmit} className="mt-4 flex gap-2">
//             <input
//               type="text"
//               value={data.contenu}
//               onChange={(e) => setData('contenu', e.target.value)}
//               placeholder="Ajouter un commentaire..."
//               className="flex-1 p-2 border rounded"
//               required
//               name="contenu"
//             />
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-4 py-2 rounded"
//             >
//               Commenter
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }













// import React, { useEffect, useState } from 'react';
// import { router } from '@inertiajs/react';
// import { useForm } from '@inertiajs/react';

// export default function SignalementItem({ signalement, currentUser }) {
//   const [isUrgent, setIsUrgent] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [comments, setComments] = useState(signalement.commentaire || []);
//   const [openMenuId, setOpenMenuId] = useState(null);
//   const [editingCommentId, setEditingCommentId] = useState(null);
//   const [editedContent, setEditedContent] = useState('');

//   const { data, setData, post, reset } = useForm({
//     signalement_id: signalement.id,
//     contenu: '',
//   });

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
//     <div className="border-l-4 border-red-800 rounded-lg p-5 shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
//       <div className="flex justify-between items-start">
//         <div>
//           <h2 className="text-xl font-semibold text-red-800 mb-2">{signalement.titre}</h2>
//           {isUrgent && (
//             <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium inline-flex items-center mb-2">
//               <span className="mr-1">🚨</span> URGENT
//             </span>
//           )}
//         </div>
        
//         {/* Menu contextuel */}
//         {currentUser?.id === signalement.user_id && (
//           <div className="relative">
//             <button
//               onClick={() => setOpenMenuId(openMenuId === 'signalement' ? null : 'signalement')}
//               className="text-gray-500 hover:text-red-800 p-2 rounded-full hover:bg-gray-100"
//             >
//               ⋮
//             </button>

//             {openMenuId === 'signalement' && (
//               <div className="absolute right-0 mt-1 bg-white border rounded shadow z-10 w-48">
//                 <button
//                   onClick={() => window.location.href = `/signalements/${signalement.id}/edit`}
//                   className="block w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
//                 >
//                   <span className="mr-2">✏️</span> Modifier
//                 </button>
//                 <button
//                   onClick={() => {
//                     if (confirm('Es-tu sûr de vouloir supprimer ce signalement ?')) {
//                       post(`/signalements/${signalement.id}/delete`, {
//                         method: 'delete',
//                         preserveScroll: true,
//                       });
//                     }
//                   }}
//                   className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 flex items-center"
//                 >
//                   <span className="mr-2">🗑️</span> Supprimer
//                 </button>
//                 <button
//                   onClick={handleUrgent}
//                   className={`block w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center ${
//                     isUrgent ? 'text-orange-600' : 'text-red-600'
//                   }`}
//                 >
//                   <span className="mr-2">🚨</span> {isUrgent ? 'Annuler Urgent' : 'Marquer comme Urgent'}
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       {signalement.image && (
//         <div className="my-3 flex justify-center">
//           <img
//             src={`/storage/${signalement.image}`}
//             alt="Signalement"
//             className="rounded-lg shadow max-h-64 object-cover"
//           />
//         </div>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
//         <div className="bg-gray-50 p-3 rounded">
//           <p className="text-gray-500 text-sm mb-1">Description</p>
//           <p className="text-gray-800">{signalement.description}</p>
//         </div>
        
//         <div className="grid grid-cols-2 gap-2">
//           <div className="bg-gray-50 p-3 rounded">
//             <p className="text-gray-500 text-sm mb-1">Statut</p>
//             <div>{getStatusBadge(signalement.statut)}</div>
//           </div>
          
//           <div className="bg-gray-50 p-3 rounded">
//             <p className="text-gray-500 text-sm mb-1">Ville</p>
//             <p className="text-gray-800">{signalement.ville}</p>
//           </div>
          
//           <div className="bg-gray-50 p-3 rounded col-span-2">
//             <p className="text-gray-500 text-sm mb-1">Adresse</p>
//             <p className="text-gray-800 flex items-start">
//               <span className="mr-1">📍</span> {signalement.adresse}
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-4 flex gap-3 flex-wrap">
//         <button
//           onClick={handleUrgent}
//           className={`flex items-center px-4 py-2 rounded text-white ${
//             isUrgent ? 'bg-red-600 hover:bg-red-700' : 'bg-orange-500 hover:bg-orange-600'
//           }`}
//         >
//           <span className="mr-1">🚨</span> {isUrgent ? 'Annuler Urgent' : 'Urgent'}
//         </button>

//         <button
//           className="bg-red-800 hover:bg-red-900 text-white px-4 py-2 rounded flex items-center"
//           onClick={() => setShowComments(!showComments)}
//         >
//           <span className="mr-1">{showComments ? '🔼' : '🔽'}</span>
//           {showComments ? 'Masquer commentaires' : `Commentaires (${comments.length})`}
//         </button>
//       </div>

//       {showComments && (
//         <div className="mt-4 bg-gray-50 p-4 rounded border-t border-gray-200">
//           <h3 className="text-lg font-bold text-red-800 mb-3">Commentaires</h3>
          
//           {comments.length === 0 ? (
//             <p className="text-gray-500 italic text-center py-2">Aucun commentaire pour le moment</p>
//           ) : (
//             <div className="space-y-3">
//               {comments
//                 .filter((comment) => comment.signalement_id === signalement.id)
//                 .map((comment) => (
//                   <div key={comment.id} className="bg-white p-3 rounded shadow border-l-2 border-red-200 relative">
//                     <div className="flex justify-between items-start">
//                       <div className="w-full">
//                         <div className="flex items-center mb-2">
//                           <span className="font-medium text-red-800">
//                             {comment.user
//                               ? comment.user.nom + ' ' + comment.user.prenom
//                               : 'Utilisateur inconnu'}
//                           </span>
//                           {comment.edit && (
//                             <span className="ml-2 text-xs text-gray-500">(Modifié)</span>
//                           )}
//                         </div>

//                         {editingCommentId === comment.id ? (
//                           <div className="mt-1">
//                             <input
//                               value={editedContent}
//                               onChange={(e) => setEditedContent(e.target.value)}
//                               className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-red-800"
//                             />
//                             <div className="mt-2 flex gap-2">
//                               <button
//                                 className="bg-red-800 text-white px-3 py-1 rounded flex items-center"
//                                 onClick={() => handleEditComment(comment.id)}
//                               >
//                                 <span className="mr-1">💾</span> Enregistrer
//                               </button>
//                               <button
//                                 className="bg-gray-200 text-gray-700 px-3 py-1 rounded flex items-center"
//                                 onClick={() => setEditingCommentId(null)}
//                               >
//                                 <span className="mr-1">❌</span> Annuler
//                               </button>
//                             </div>
//                           </div>
//                         ) : (
//                           <p className="text-gray-700">{comment.contenu}</p>
//                         )}

//                         <small className="text-gray-500 block mt-2">
//                           {new Date(comment.created_at).toLocaleDateString()} à {new Date(comment.created_at).toLocaleTimeString()}
//                         </small>
//                       </div>

//                       {currentUser?.id === comment.user_id && (
//                         <div className="relative ml-2">
//                           <button
//                             onClick={() => setOpenMenuId(openMenuId === comment.id ? null : comment.id)}
//                             className="text-gray-500 hover:text-red-800 p-1 rounded-full hover:bg-gray-100"
//                           >
//                             ⋮
//                           </button>

//                           {openMenuId === comment.id && (
//                             <div className="absolute right-0 mt-1 bg-white border rounded shadow z-10 w-32">
//                               <button
//                                 onClick={() => {
//                                   setEditingCommentId(comment.id);
//                                   setEditedContent(comment.contenu);
//                                   setOpenMenuId(null);
//                                 }}
//                                 className="block w-full text-left px-3 py-2 hover:bg-gray-100 flex items-center"
//                               >
//                                 <span className="mr-2">✏️</span> Modifier
//                               </button>
//                               <button
//                                 onClick={() => handleDeleteComment(comment.id)}
//                                 className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-red-600 flex items-center"
//                               >
//                                 <span className="mr-2">🗑️</span> Supprimer
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

//           <form onSubmit={handleCommentSubmit} className="mt-4 flex gap-2">
//             <input
//               type="text"
//               value={data.contenu}
//               onChange={(e) => setData('contenu', e.target.value)}
//               placeholder="Ajouter un commentaire..."
//               className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-800"
//               required
//               name="contenu"
//             />
//             <button
//               type="submit"
//               className="bg-red-800 hover:bg-red-900 text-white px-4 py-2 rounded flex items-center"
//             >
//               <span className="mr-1">💬</span> Commenter
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }







// import React, { useEffect, useState } from 'react';
// import { router } from '@inertiajs/react';
// import { useForm } from '@inertiajs/react';

// export default function SignalementItem({ signalement, currentUser }) {
//   const [isUrgent, setIsUrgent] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [comments, setComments] = useState(signalement.commentaire || []);
//   const [openMenuId, setOpenMenuId] = useState(null);
//   const [editingCommentId, setEditingCommentId] = useState(null);
//   const [editedContent, setEditedContent] = useState('');
//   const [showLargeImage, setShowLargeImage] = useState(false);

//   const { data, setData, post, reset } = useForm({
//     signalement_id: signalement.id,
//     contenu: '',
//   });
//   console.log(signalement);

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
//     <div className="border-l-4 border-red-800 rounded-lg p-3 shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
//       {/* Modal pour afficher l'image en grand */}
//       {showLargeImage && signalement.image && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setShowLargeImage(false)}>
//           <div className="relative max-w-4xl max-h-screen p-4">
//             <button 
//               className="absolute top-4 right-4 bg-red-800 text-white rounded-full w-8 h-8 flex items-center justify-center"
//               onClick={() => setShowLargeImage(false)}
//             >
//               ✕
//             </button>
//             <img
//               src={`/storage/${signalement.image}`}
//               alt="Signalement"
//               className="max-h-screen max-w-full rounded"
//             />
//           </div>
//         </div>
//       )}

//       <div className="flex flex-col sm:flex-row gap-3">
//         {/* Première colonne: image (si existe) */}
//         {signalement.image && (
//           <div className="sm:w-1/4 flex-shrink-0">
//             <div 
//               className="cursor-pointer relative group" 
//               onClick={() => setShowLargeImage(true)}
//             >
//               <img
//                 src={`/storage/${signalement.image}`}
//                 alt="Signalement"
//                 className="rounded-lg shadow h-32 w-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-200">
//                 <span className="text-white opacity-0 group-hover:opacity-100 text-lg">
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
//               <h2 className="text-lg font-semibold text-red-800">{signalement.titre}</h2>
//               <div className="flex flex-wrap gap-1 mt-1">
//                 {getStatusBadge(signalement.statut)}
//                 {isUrgent && (
//                   <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium inline-flex items-center">
//                     <span className="mr-1">🚨</span> URGENT
//                   </span>
//                 )}
//               </div>
//             </div>
            
//             {/* Menu contextuel */}
//             {currentUser?.id === signalement.user_id && (
//               <div className="relative">
//                 <button
//                   onClick={() => setOpenMenuId(openMenuId === 'signalement' ? null : 'signalement')}
//                   className="text-gray-500 hover:text-red-800 p-1 rounded-full hover:bg-gray-100"
//                 >
//                   ⋮
//                 </button>

//                 {openMenuId === 'signalement' && (
//                   <div className="absolute right-0 mt-1 bg-white border rounded shadow z-10 w-48">
//                     <button
//                       onClick={() => window.location.href = `/signalements/${signalement.id}/edit`}
//                       className="block w-full text-left px-3 py-2 hover:bg-gray-100 flex items-center"
//                     >
//                       <span className="mr-2">✏️</span> Modifier
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
//                       className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-red-600 flex items-center"
//                     >
//                       <span className="mr-2">🗑️</span> Supprimer
//                     </button>
//                     <button
//                       onClick={handleUrgent}
//                       className={`block w-full text-left px-3 py-2 hover:bg-gray-100 flex items-center ${
//                         isUrgent ? 'text-orange-600' : 'text-red-600'
//                       }`}
//                     >
//                       <span className="mr-2">🚨</span> {isUrgent ? 'Annuler Urgent' : 'Marquer comme Urgent'}
//                     </button>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>

//           <div className="mt-2 text-sm text-gray-700 line-clamp-2">
//             {signalement.description}
//           </div>
          
//           <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
//             <div className="flex items-center">
//               <span className="mr-1">🏙️</span> {signalement.ville}
//             </div>
//             <div className="flex items-center">
//               <span className="mr-1">📍</span> {signalement.adresse}
//             </div>
//           </div>

//           <div className="mt-3 flex gap-2 flex-wrap">
//             <button
//               onClick={handleUrgent}
//               className={`flex items-center px-3 py-1 rounded text-xs font-medium text-white ${
//                 isUrgent ? 'bg-red-600 hover:bg-red-700' : 'bg-orange-500 hover:bg-orange-600'
//               }`}
//             >
//               <span className="mr-1">🚨</span> {isUrgent ? 'Annuler Urgent' : 'Urgent'}
//             </button>

//             <button
//               className="bg-red-800 hover:bg-red-900 text-white px-3 py-1 rounded text-xs font-medium flex items-center"
//               onClick={() => setShowComments(!showComments)}
//             >
//               <span className="mr-1">{showComments ? '🔼' : '🔽'}</span>
//               {showComments ? 'Masquer' : `Commentaires (${comments.length})`}
//             </button>
//           </div>
//         </div>
//       </div>

//       {showComments && (
//         <div className="mt-3 bg-gray-50 p-3 rounded border-t border-gray-200">
//           <h3 className="text-sm font-bold text-red-800 mb-2">Commentaires</h3>
          
//           {comments.length === 0 ? (
//             <p className="text-gray-500 italic text-center py-1 text-sm">Aucun commentaire</p>
//           ) : (
//             <div className="space-y-2">
//               {comments
//                 .filter((comment) => comment.signalement_id === signalement.id)
//                 .map((comment) => (
//                   <div key={comment.id} className="bg-white p-2 rounded shadow border-l-2 border-red-200 relative">
//                     <div className="flex justify-between items-start">
//                       <div className="w-full">
//                         <div className="flex items-center text-xs">
//                           <span className="font-medium text-red-800">
//                             {comment.user
//                               ? comment.user.nom + ' ' + comment.user.prenom
//                               : 'Utilisateur inconnu'}
//                           </span>
//                           {comment.created_at !== comment.updated_at&& (
//                             <span className="ml-2 text-xs text-gray-500">(Modifié)</span>
//                           )}
//                         </div>

//                         {editingCommentId === comment.id ? (
//                           <div className="mt-1">
//                             <input
//                               value={editedContent}
//                               onChange={(e) => setEditedContent(e.target.value)}
//                               className="border p-1 rounded w-full text-sm focus:outline-none focus:ring-1 focus:ring-red-800"
//                             />
//                             <div className="mt-1 flex gap-1">
//                               <button
//                                 className="bg-red-800 text-white px-2 py-1 rounded text-xs flex items-center"
//                                 onClick={() => handleEditComment(comment.id)}
//                               >
//                                 <span className="mr-1">💾</span> Enregistrer
//                               </button>
//                               <button
//                                 className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs flex items-center"
//                                 onClick={() => setEditingCommentId(null)}
//                               >
//                                 <span className="mr-1">❌</span> Annuler
//                               </button>
//                             </div>
//                           </div>
//                         ) : (
//                           <p className="text-sm text-gray-700 mt-1">{comment.contenu}</p>
//                         )}

//                         <small className="text-xs text-gray-500 block mt-1">
//                           {new Date(comment.created_at).toLocaleDateString()}
//                         </small>
//                       </div>

//                       {currentUser?.id === comment.user_id && (
//                         <div className="relative ml-2">
//                           <button
//                             onClick={() => setOpenMenuId(openMenuId === comment.id ? null : comment.id)}
//                             className="text-gray-500 hover:text-red-800 p-1 rounded-full hover:bg-gray-100 text-xs"
//                           >
//                             ⋮
//                           </button>

//                           {openMenuId === comment.id && (
//                             <div className="absolute right-0 mt-1 bg-white border rounded shadow z-10 w-24">
//                               <button
//                                 onClick={() => {
//                                   setEditingCommentId(comment.id);
//                                   setEditedContent(comment.contenu);
//                                   setOpenMenuId(null);
//                                 }}
//                                 className="block w-full text-left px-2 py-1 hover:bg-gray-100 flex items-center text-xs"
//                               >
//                                 <span className="mr-1">✏️</span> Modifier
//                               </button>
//                               <button
//                                 onClick={() => handleDeleteComment(comment.id)}
//                                 className="block w-full text-left px-2 py-1 hover:bg-gray-100 text-red-600 flex items-center text-xs"
//                               >
//                                 <span className="mr-1">🗑️</span> Supprimer
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

//           <form onSubmit={handleCommentSubmit} className="mt-2 flex gap-1">
//             <input
//               type="text"
//               value={data.contenu}
//               onChange={(e) => setData('contenu', e.target.value)}
//               placeholder="Ajouter un commentaire..."
//               className="flex-1 p-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-red-800"
//               required
//               name="contenu"
//             />
//             <button
//               type="submit"
//               className="bg-red-800 hover:bg-red-900 text-white px-2 py-1 rounded text-xs flex items-center"
//             >
//               <span className="mr-1">💬</span> Commenter
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }






import React, { useEffect, useState } from 'react';
import { router } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import { MessageSquare, AlertTriangle, ChevronDown, ChevronUp, Edit, Trash2, Save, X } from 'lucide-react';

export default function SignalementItem({ signalement, currentUser }) {
  console.log('currentUser', currentUser); // vérifie ici
  const [isUrgent, setIsUrgent] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(signalement.commentaire || []);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedContent, setEditedContent] = useState('');
  const [showLargeImage, setShowLargeImage] = useState(false);
  // console.log(currentUsere);
  console.log(signalement.user.id);

  const { data, setData, post, reset } = useForm({
    signalement_id: signalement.id,
    contenu: '',
  });
  // console.log("Current user ID:", signalement.user?.id);
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
    if (confirm('Supprimer ce commentaire ?')) {
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
    switch (status) {
      case 'En attente':
        return <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">En attente</span>;
      case 'En cours':
        return <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">En cours</span>;
      case 'Résolu':
        return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Résolu</span>;
      case 'Refusé':
        return <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">Refusé</span>;
      default:
        return <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">{status}</span>;
    }
  };

  return (
    <div className="rounded-xl p-3 shadow-md bg-white hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500 mb-4 overflow-hidden">
      {/* Modal pour afficher l'image en grand */}
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
              alt="Signalement"
              className="max-h-screen max-w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Première colonne: image (si existe) */}
        {signalement.image && (
          <div className="sm:w-1/4 flex-shrink-0">
            <div 
              className="cursor-pointer relative group rounded-lg overflow-hidden shadow-md" 
              onClick={() => setShowLargeImage(true)}
            >
              <img
                src={`/storage/${signalement.image}`}
                alt="Signalement"
                className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                <span className="text-white text-lg font-medium">
                  🔍 Agrandir
                </span>
              </div>
            </div>
          </div>
        )}
        
        {/* Deuxième colonne: informations du signalement */}
        <div className={`${signalement.image ? 'sm:w-3/4' : 'w-full'}`}>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-indigo-700">{signalement.titre}</h2>
              <div className="flex flex-wrap gap-1 mt-1">
                {getStatusBadge(signalement.statut)}
                {isUrgent && (
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium inline-flex items-center">
                    <AlertTriangle className="w-3 h-3 mr-1" /> URGENT
                  </span>
                )}
              </div>
            </div>
            
            {/* Menu contextuel */}
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
                      <Edit className="w-4 h-4 mr-2 text-red-500" /> Modifier
                    </button>
                    <button
                      onClick={() => {
                        if (confirm('Es-tu sûr de vouloir supprimer ce signalement ?')) {
                          post(`/signalements/${signalement.id}/delete`, {
                            method: 'delete',
                            preserveScroll: true,
                          });
                        }
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-red-50 transition-colors text-red-600 flex items-center"
                    >
                      <Trash2 className="w-4 h-4 mr-2" /> Supprimer
                    </button>
                    <button
                      onClick={handleUrgent}
                      className={`block w-full text-left px-4 py-2 hover:bg-red-50 transition-colors flex items-center ${
                        isUrgent ? 'text-orange-600' : 'text-red-600'
                      }`}
                    >
                      <AlertTriangle className="w-4 h-4 mr-2" /> {isUrgent ? 'Annuler Urgent' : 'Marquer comme Urgent'}
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
              onClick={handleUrgent}
              className={`flex items-center px-3 py-1.5 rounded-full text-xs font-medium text-white transition-colors ${
                isUrgent 
                  ? 'bg-red-600 hover:bg-red-700' 
                  : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
              }`}
            >
              <AlertTriangle className="w-3 h-3 mr-1" /> {isUrgent ? 'Annuler Urgent' : 'Urgent'}
            </button>

            <button
              className="bg-gradient-to-r from-red-500 to-indigo-600 hover:from-red-600 hover:to-indigo-700 text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center transition-all shadow-sm hover:shadow"
              onClick={() => setShowComments(!showComments)}
            >
              {showComments ? <ChevronUp className="w-3 h-3 mr-1" /> : <ChevronDown className="w-3 h-3 mr-1" />}
              {showComments ? 'Masquer' : `Commentaires (${comments.length})`}
            </button>
          </div>
        </div>
      </div>

      {showComments && (
        <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-100 animate-fadeIn">
          <h3 className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-indigo-700 mb-3">Commentaires</h3>
          
          {comments.length === 0 ? (
            <p className="text-gray-500 italic text-center py-2 text-sm">Aucun commentaire</p>
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
                              : 'Utilisateur inconnu'}
                          </span>
                          {comment.created_at !== comment.updated_at && (
                            <span className="ml-2 text-xs text-gray-500">(Modifié)</span>
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
                                <Save className="w-3 h-3 mr-1" /> Enregistrer
                              </button>
                              <button
                                className="bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full text-xs flex items-center"
                                onClick={() => setEditingCommentId(null)}
                              >
                                <X className="w-3 h-3 mr-1" /> Annuler
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
                                <Edit className="w-3 h-3 mr-2 text-red-500" /> Modifier
                              </button>
                              <button
                                onClick={() => handleDeleteComment(comment.id)}
                                className="block w-full text-left px-3 py-1.5 hover:bg-red-50 transition-colors text-red-600 flex items-center text-xs"
                              >
                                <Trash2 className="w-3 h-3 mr-2" /> Supprimer
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
              onChange={(e) => setData('contenu', e.target.value)}
              placeholder="Ajouter un commentaire..."
              className="flex-1 p-2 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
              required
              name="contenu"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-red-500 to-indigo-600 hover:from-red-600 hover:to-indigo-700 text-white px-4 py-2 rounded-full text-sm flex items-center transition-all shadow-sm hover:shadow"
            >
              <MessageSquare className="w-4 h-4 mr-2" /> Commenter
            </button>
          </form>
        </div>
      )}
    </div>
  );
}