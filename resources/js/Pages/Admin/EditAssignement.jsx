import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function EditAssignement({ intervention, agents, signalements }) {
  const [userId, setUserId] = useState(intervention.user_id || '');
  const [signalementId, setSignalementId] = useState(intervention.signalement_id || '');
  // console.log("Agents:", agents);


  const handleSubmit = (e) => {
    e.preventDefault(); // important !

    router.post(`/admin/assignements/${intervention.id}`, {
      user_id: userId,
      signalement_id: signalementId,
    }, {
      onSuccess: () => {
        alert('Assignement mis à jour avec succès');
      },
      onError: (errors) => {
        console.error(errors);
        alert('Erreur lors de la mise à jour');
      }
    });
  };

  return (
    <div>
      <h2>Modifier l'assignement</h2>
      <form onSubmit={handleSubmit}>
        <label>Agent :</label>
        <select value={userId} onChange={e => setUserId(e.target.value)}
          className="border p-2 rounded w-full">
          <option value="">-- Choisir un agent --</option>
          {agents.map(agent => (
            <option key={agent.id} value={agent.id}>{agent.name}
            {agent.prenom} {agent.email}</option>
          ))}
        </select>

        <label>Signalement :</label>
        <select value={signalementId} onChange={e => setSignalementId(e.target.value)}>
          <option value="">Choisir un signalement</option>
          {signalements.map(sig => (
            <option key={sig.id} value={sig.id}>{sig.description}</option>
          ))}
        </select>

        <button type="submit"
        onClick={handleSubmit}>Mettre à jour</button>
      </form>
    </div>
  );
}
