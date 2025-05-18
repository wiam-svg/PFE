
// import React, { useEffect, useState } from 'react';
// import { router } from '@inertiajs/react';
// import AppLayout from '@/Layouts/AppLayout';
// import AdminSidebar from '@/Components/AdminSidebar';
// import toast, { Toaster } from 'react-hot-toast';
// import { MoreVertical, CheckCircle, XCircle, Trash2, User } from 'lucide-react';

// export default function ListUsers({ users: initialUsers }) {
//   const [users, setUsers] = useState(initialUsers);
//   const [validatingId, setValidatingId] = useState(null);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [search, setSearch] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');
//   const [selectedRole, setSelectedRole] = useState('');

//   useEffect(() => {
//     if (openDropdown !== null) {
//       document.body.classList.add('no-scroll');
//     } else {
//       document.body.classList.remove('no-scroll');
//     }

//     return () => {
//       document.body.classList.remove('no-scroll');
//     };
//   }, [openDropdown]);

//   useEffect(() => {
//     setUsers(initialUsers);
//   }, [initialUsers]);

//   const filteredUsers = users.filter((user) => {
//     const matchCity = selectedCity ? user.ville === selectedCity : true;
//     const matchRole = selectedRole ? user.role === selectedRole : true;
//     const matchSearch =
//       user.nom.toLowerCase().includes(search.toLowerCase()) ||
//       user.email.toLowerCase().includes(search.toLowerCase());

//     return matchCity && matchRole && matchSearch;
//   });

//   const handleValidate = (id) => {
//     setValidatingId(id);
//     router.post(`/admin/validate-user/${id}`, {}, {
//       preserveScroll: true,
//       onSuccess: () => {
//         setValidatingId(null);
//         toast.success('Utilisateur validé/invalidé!');
//       },
//       onError: () => {
//         alert("Erreur lors de la validation.");
//         setValidatingId(null);
//       }
//     });
//   };

//   const handleDelete = (id) => {
//     if (confirm("Supprimer cet utilisateur ?")) {
//       router.post(`/admin/delete-user/${id}`, {
//         onSuccess: () => toast.success("Utilisateur supprimé"),
//         onError: () => toast.error("Erreur lors de la suppression")
//       });
//     }
//   };


//   const cities = [...new Set(users.map((user) => user.ville))];
//   const roles = [...new Set(users.map((user) => user.role))];

//   return (
//     <AppLayout>
//       <div className="flex">
//         <AdminSidebar />
//         <div className="flex-1 min-h-screen bg-gray-100">
//           <div className="p-8"> 
          
//             <div className="bg-white rounded-xl p-6 mb-8 shadow-md"> 
//               <h1 className="text-2xl font-semibold text-gray-800 mb-4">Gestion des Utilisateurs</h1> 
//               <div className="flex gap-4">
//                 <input
//                   type="text"
//                   placeholder="Rechercher par nom ou email..." 
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   className="px-4 py-2 border rounded-md w-1/3 text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300" 
//                 />
//                 <select
//                   value={selectedCity}
//                   onChange={(e) => setSelectedCity(e.target.value)}
//                   className="px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
//                 >
//                   <option value="">Filtrer par ville</option>
//                   {cities.map((city) => (
//                     <option key={city} value={city}>{city}</option>
//                   ))}
//                 </select>
//                 <select
//                   value={selectedRole}
//                   onChange={(e) => setSelectedRole(e.target.value)}
//                   className="px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300" 
//                 >
//                   <option value="">Filtrer par rôle</option>
//                   {roles.map((role) => (
//                     <option key={role} value={role}>{role}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>

           
//             <div className="bg-white rounded-xl shadow-md overflow-hidden"> 
//             {/* <div className="bg-white rounded-xl shadow-md ">  */}
//               <table className="w-full table-auto"> 
//                 <thead className="bg-gray-50 text-gray-700 border-b"> 
//                   <tr>
//                     <th className="p-4 text-left font-semibold">Utilisateur</th> 
//                     <th className="p-4 font-semibold">Type</th>
//                     <th className="p-4 font-semibold">Rôle</th>
//                     <th className="p-4 font-semibold text-right">Actions</th> 
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredUsers.map((user, index) => (
//                     <tr
//                       key={user.id}
//                       className={`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`} 
//                     >
//                       <td className="p-4 border-b border-gray-100">
//                         <div className="flex items-center">
//                           <User className="w-5 h-5 mr-2 text-gray-400" /> 
//                           <div className="font-medium text-gray-800">{user.nom}</div>
//                         </div>
//                         <div className="text-sm text-gray-500">{user.email}</div>
//                       </td>
//                       <td className="p-4 border-b border-gray-100 text-gray-700">{user.type}</td>
//                       <td className="p-4 border-b border-gray-100">
//                         <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
//                           ${user.validated === 1 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
//                           {user.role}
//                         </span>
//                       </td>
//                       <td className="p-4 border-b border-gray-100 text-right relative">
//                         <button
//                           onClick={() => setOpenDropdown(openDropdown === user.id ? null : user.id)}
//                           className="p-2 rounded-md hover:bg-gray-100 text-gray-500 transition" 
//                         >
//                           <MoreVertical className="w-4 h-4" />
//                         </button>

//                         {openDropdown === user.id && (
//                           // <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl border border-gray-100 rounded-md z-10"> {/* Refined dropdown styling */}
//                           <div className="right-0 mt-2 w-48 bg-white shadow-xl border border-gray-100 rounded-md z-10"> {/* Refined dropdown styling */}
//                             <button
//                               onClick={() => { handleValidate(user.id); setOpenDropdown(null); }}
//                               className="flex items-center w-full px-4 py-3 hover:bg-gray-50 text-gray-800 text-sm"
//                             >
//                               {user.validated === 1 ?
//                                 <XCircle size={16} className="mr-3 text-red-500" /> :
//                                 <CheckCircle size={16} className="mr-3 text-green-500" />}
//                               {validatingId === user.id ? "En cours..." : user.validated === 1 ? "Invalider" : "Valider"}
//                             </button>
//                             <button
//                               onClick={() => { handleDelete(user.id); setOpenDropdown(null); }}
//                               className="flex items-center w-full px-4 py-3 hover:bg-gray-50 text-red-600 text-sm"
//                             >
//                               <Trash2 size={16} className="mr-3" />
//                               Supprimer
//                             </button>
                           
//                           </div>
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           <Toaster position="bottom-right" />
//         </div>
//       </div>
//     </AppLayout>
//   );
// }




import React, { useEffect, useState } from 'react';
import { router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import AdminSidebar from '@/Components/AdminSidebar';
import toast, { Toaster } from 'react-hot-toast';
import { MoreVertical, CheckCircle, XCircle, Trash2, User } from 'lucide-react';
import { useTranslation }  from 'react-i18next';

export default function ListUsers({ users: initialUsers }) {
  const { t } = useTranslation();

  const [users, setUsers] = useState(initialUsers);
  const [validatingId, setValidatingId] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [search, setSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  useEffect(() => {
    if (openDropdown !== null) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [openDropdown]);

  useEffect(() => {
    setUsers(initialUsers);
  }, [initialUsers]);

  const filteredUsers = users.filter((user) => {
    const matchCity = selectedCity ? user.ville === selectedCity : true;
    const matchRole = selectedRole ? user.role === selectedRole : true;
    const matchSearch =
      user.nom.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    return matchCity && matchRole && matchSearch;
  });

  const handleValidate = (id) => {
    setValidatingId(id);
    router.post(`/admin/validate-user/${id}`, {}, {
      preserveScroll: true,
      onSuccess: () => {
        setValidatingId(null);
        toast.success(t('listuser.userValidated'));
      },
      onError: () => {
        alert(t('listuser.validationError'));
        setValidatingId(null);
      }
    });
  };

  const handleDelete = (id) => {
    if (confirm(t('listuser.deleteConfirm'))) {
      router.post(`/admin/delete-user/${id}`, {
        onSuccess: () => toast.success(t('listuser.userDeleted')),
        onError: () => toast.error(t('listuser.deletionError'))
      });
    }
  };

  const cities = [...new Set(users.map((user) => user.ville))];
  const roles = [...new Set(users.map((user) => user.role))];

  return (
    <AppLayout>
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 min-h-screen bg-gray-100">
          <div className="p-8">
            <div className="bg-white rounded-xl p-6 mb-8 shadow-md">
              <h1 className="text-2xl font-semibold text-gray-800 mb-4">{t('listuser.title')}</h1>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder={t('listuser.searchPlaceholder')}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="px-4 py-2 border rounded-md w-1/3 text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
                />
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
                >
                  <option value="">{t('listuser.filterCity')}</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="px-4 py-2 border rounded-md text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
                >
                  <option value="">{t('listuser.filterRole')}</option>
                  {roles.map((role) => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <table className="w-full table-auto">
                <thead className="bg-gray-50 text-gray-700 border-b">
                  <tr>
                    <th className="p-4 text-left font-semibold">{t('listuser.user')}</th>
                    <th className="p-4 font-semibold">{t('listuser.type')}</th>
                    <th className="p-4 font-semibold">{t('listuser.role')}</th>
                    <th className="p-4 font-semibold text-right">{t('listuser.actions')}</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user, index) => (
                    <tr
                      key={user.id}
                      className={`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                    >
                      <td className="p-4 border-b border-gray-100">
                        <div className="flex items-center">
                          <User className="w-5 h-5 mr-2 text-gray-400" />
                          <div className="font-medium text-gray-800">{user.nom}</div>
                        </div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </td>
                      <td className="p-4 border-b border-gray-100 text-gray-700">{user.type}</td>
                      <td className="p-4 border-b border-gray-100">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                          ${user.validated === 1 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="p-4 border-b border-gray-100 text-right relative">
                        <button
                          onClick={() => setOpenDropdown(openDropdown === user.id ? null : user.id)}
                          className="p-2 rounded-md hover:bg-gray-100 text-gray-500 transition"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>

                        {openDropdown === user.id && (
                          <div className="right-0 mt-2 w-48 bg-white shadow-xl border border-gray-100 rounded-md z-10">
                            <button
                              onClick={() => { handleValidate(user.id); setOpenDropdown(null); }}
                              className="flex items-center w-full px-4 py-3 hover:bg-gray-50 text-gray-800 text-sm"
                            >
                              {user.validated === 1 ?
                                <XCircle size={16} className="mr-3 text-red-500" /> :
                                <CheckCircle size={16} className="mr-3 text-green-500" />}
                              {validatingId === user.id ? t('listuser.validating') : user.validated === 1 ? t('listuser.invalidate') : t('listuser.validate')}
                            </button>
                            <button
                              onClick={() => { handleDelete(user.id); setOpenDropdown(null); }}
                              className="flex items-center w-full px-4 py-3 hover:bg-gray-50 text-red-600 text-sm"
                            >
                              <Trash2 size={16} className="mr-3" />
                              {t('listuser.delete')}
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Toaster position="bottom-right" />
        </div>
      </div>
    </AppLayout>
  );
}
