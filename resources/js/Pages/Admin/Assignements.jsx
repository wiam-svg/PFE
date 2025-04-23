import React, { useState } from 'react';
import { router } from '@inertiajs/react';

export default function Assignements({ interventions }) {
  const [openMenuId, setOpenMenuId] = useState(null);

  const handleDelete = (id) => {
    if (confirm("Supprimer cet assignement ?")) {
      router.delete(`/admin/assignements/${id}`);
    }
  };

  const handleEdit = (id) => {
    router.get(`/admin/assignements/${id}/edit`)
    alert(`Redirection vers la page de modification pour l'intervention ID: ${id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Liste des Assignements</h1>
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Signalement</th>
            <th className="border p-2">Agent</th>
            <th className="border p-2">Statut</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {interventions.map(intervention => (
            <tr key={intervention.id} className="border hover:bg-gray-50">
              <td className="p-2">{intervention.id}</td>
              <td className="p-2">{intervention.signalement?.titre}</td>
              <td className="p-2">{intervention.user?.nom} ({intervention.user?.email})</td>
              <td className="p-2">
                <span className={`px-2 py-1 rounded text-white text-sm
                  ${intervention.resolution_status === 'terminé' ? 'bg-green-600' : 'bg-orange-500'}`}>
                  {intervention.resolution_status}
                </span>
              </td>
              <td className="p-2 relative">
                <button
                  onClick={() => setOpenMenuId(openMenuId === intervention.id ? null : intervention.id)}
                  className="text-xl font-bold text-gray-600 hover:text-black"
                >
                  ⋮
                </button>
                {openMenuId === intervention.id && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border shadow-lg rounded z-10">
                    <button
                      onClick={() => handleEdit(intervention.id)}
                      className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDelete(intervention.id)}
                      className="block px-4 py-2 w-full text-left text-red-600 hover:bg-red-100"
                    >
                      Supprimer
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

