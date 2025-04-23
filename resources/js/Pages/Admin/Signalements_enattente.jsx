import React, { useState } from 'react';
import { router } from '@inertiajs/react';

export default function ListSignalements({ signalements, agents }) {
  const [selectedSignalementId, setSelectedSignalementId] = useState(null);

  const handleAssign = (agentId, signalementId) => {
    router.post(`/admin/assign-agent-to-signalement`, {
      agent_id: agentId,
      signalement_id: signalementId,
    }, {
      preserveScroll: true,
      onSuccess: () => {
        alert("Agent assigné avec succès !");
        setSelectedSignalementId(null); // Masquer le tableau des agents après assignation
      },
      onError: () => {
        alert("Erreur lors de l’assignation.");
      }
    });
  };
  console.log(signalements);

  return (
    
    <div className="p-6">
      <button
  onClick={() => router.get('/admin/assignements')}
  className="mb-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
>
  Voir les Assignements
</button>
      <h1 className="text-2xl font-bold mb-4">Signalements en Attente</h1>

      <table className="w-full text-center border mb-6">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Titre</th>
            <th className="border p-2">Catégorie</th>
            <th className="border p-2">Statut</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {signalements.map(s => (
            <tr key={s.id} className="border">
              <td className="p-2">{s.id}</td>
              <td className="p-2">{s.titre}</td>
              <td className="p-2">{s.categorie.nom}</td>
              <td className="p-2">{s.statut}</td>
              <td className="p-2">
                <button
                  onClick={() => setSelectedSignalementId(s.id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Assigner un agent
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedSignalementId && (
        <div className="mt-4 border p-4 rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">
            Choisir un agent pour le signalement #{selectedSignalementId}
          </h2>

          <table className="w-full text-center border">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Nom</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Nb. de signalements</th>
                <th className="border p-2">Choisir</th>
              </tr>
            </thead>
            <tbody>
              {agents.map(agent => (
                <tr key={agent.id} className="border">
                  <td className="p-2">{agent.nom}</td>
                  <td className="p-2">{agent.email}</td>
                  <td className="p-2">{agent.signalements_count}</td>
                  <td className="p-2">
                    <input
                      type="checkbox"
                      onChange={() => handleAssign(agent.id, selectedSignalementId)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
