


// import React, { useEffect, useState } from 'react';
// import { router } from '@inertiajs/react';
// import toast, { Toaster } from 'react-hot-toast';
// import { MoreVertical, CheckCircle, XCircle, Trash2, User } from 'lucide-react';

// export default function ListUsers({ users: initialUsers }) {
//   const [users, setUsers] = useState(initialUsers);
//   const [validatingId, setValidatingId] = useState(null);
//   const [openDropdown, setOpenDropdown] = useState(null);

//   useEffect(() => {
//     setUsers(initialUsers)
//   }, [initialUsers]);

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
//         setUsers((prevUsers) => [...prevUsers, initialUsers.find((u) => u.id === id)]);
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

//   const handleViewProfile = (id) => {
//     router.visit(`/admin/users/${id}`);
//   };

//   return (
//     <div className="p-6 bg-white min-h-screen">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Liste des utilisateurs</h1>
//       <div className="overflow-x-auto rounded-lg shadow">
//         <table className="w-full text-center border">
//           <thead className="bg-gray-100 text-gray-800">
//             <tr>
//               <th className="p-3 text-left">Utilisateur</th>
//               <th className="p-3">Type</th>
//               <th className="p-3">Rôle</th>
//               <th className="p-3">Action</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white">
//             {users.map((user, index) => (
//               <tr key={user.id} className={index % 2 === 0 ? "bg-gray-50" : ""}>
//                 <td className="p-3 border-b text-left">
//                   <div className="font-semibold text-gray-800">{user.nom}</div>
//                   <div className="text-sm text-gray-500">{user.email}</div>
//                 </td>
//                 <td className="p-3 border-b">{user.type}</td>
//                 <td className="p-3 border-b">
//                   <span className={`font-bold px-3 py-1 rounded-full ${user.validated === 1 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'}`}>
//                     {user.role}
//                   </span>
//                 </td>
//                 <td className="p-3 border-b relative">
//                   <button
//                     onClick={() => setOpenDropdown(openDropdown === user.id ? null : user.id)}
//                     className="p-2 rounded hover:bg-gray-200 transition"
//                   >
//                     <MoreVertical />
//                   </button>

//                   {openDropdown === user.id && (
//                     <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg border rounded z-10">
//                       <button
//                         onClick={() => { handleValidate(user.id); setOpenDropdown(null); }}
//                         className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-sm text-left"
//                       >
//                         {user.validated === 1 ? <XCircle size={16} className="mr-2" /> : <CheckCircle size={16} className="mr-2" />}
//                         {validatingId === user.id ? "En cours..." : user.validated === 1 ? "Invalider" : "Valider"}
//                       </button>
//                       <button
//                         onClick={() => { handleDelete(user.id); setOpenDropdown(null); }}
//                         className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-sm text-left text-red-600"
//                       >
//                         <Trash2 size={16} className="mr-2" />
//                         Supprimer
//                       </button>
//                       <button
//                         onClick={() => { handleViewProfile(user.id); setOpenDropdown(null); }}
//                         className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-sm text-left"
//                       >
//                         <User size={16} className="mr-2" />
//                         Voir profil
//                       </button>
//                     </div>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <Toaster position="bottom-right" />
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import { router } from '@inertiajs/react';

import toast, { Toaster } from 'react-hot-toast';
import { MoreVertical, CheckCircle, XCircle, Trash2, User } from 'lucide-react';

export default function ListUsers({ users: initialUsers }) {
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

  // Effect to update users when initialUsers changes
  useEffect(() => {
    setUsers(initialUsers);
  }, [initialUsers]);

  // Filtrage par ville et rôle
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
        toast.success('Utilisateur validé/invalidé!');
      },
      onError: () => {
        alert("Erreur lors de la validation.");
        setValidatingId(null);
      }
    });
  };

  const handleDelete = (id) => {
    if (confirm("Supprimer cet utilisateur ?")) {
      router.post(`/admin/delete-user/${id}`, {
        onSuccess: () => toast.success("Utilisateur supprimé"),
        onError: () => toast.error("Erreur lors de la suppression")
      });
    }
  };

  const handleViewProfile = (id) => {
    router.visit(`/admin/users/${id}`);
  };

  // Extraire les villes et rôles uniques
  const cities = [...new Set(users.map((user) => user.ville))];
  const roles = [...new Set(users.map((user) => user.role))];

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">Liste des utilisateurs</h1>

      {/* Filtres */}
      <div className="mb-4 flex gap-4">
        <input
          type="text"
          placeholder="Rechercher par nom ou email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded w-1/3"
        />
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="">Filtrer par ville</option>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="">Filtrer par rôle</option>
          {roles.map((role) => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="w-full text-center border">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="p-3 text-left">Utilisateur</th>
              <th className="p-3">Type</th>
              <th className="p-3">Rôle</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {filteredUsers.map((user, index) => (
              <tr key={user.id} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <td className="p-3 border-b text-left">
                  <div className="font-semibold text-gray-800">{user.nom}</div>
                  <div className="text-sm text-gray-500">{user.email}</div>
                </td>
                <td className="p-3 border-b">{user.type}</td>
                <td className="p-3 border-b">
                  <span className={`font-bold px-3 py-1 rounded-full ${user.validated === 1 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'}`}>
                    {user.role}
                  </span>
                </td>
                <td className="p-3 border-b relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === user.id ? null : user.id)}
                    className="p-2 rounded hover:bg-gray-200 transition"
                  >
                    <MoreVertical />
                  </button>

                  {openDropdown === user.id && (
                    <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg border rounded z-10">
                      <button
                        onClick={() => { handleValidate(user.id); setOpenDropdown(null); }}
                        className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-sm text-left"
                      >
                        {user.validated === 1 ? <XCircle size={16} className="mr-2" /> : <CheckCircle size={16} className="mr-2" />}
                        {validatingId === user.id ? "En cours..." : user.validated === 1 ? "Invalider" : "Valider"}
                      </button>
                      <button
                        onClick={() => { handleDelete(user.id); setOpenDropdown(null); }}
                        className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-sm text-left text-red-600"
                      >
                        <Trash2 size={16} className="mr-2" />
                        Supprimer
                      </button>
                      <button
                        onClick={() => { handleViewProfile(user.id); setOpenDropdown(null); }}
                        className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-sm text-left"
                      >
                        <User size={16} className="mr-2" />
                        Voir profil
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}


