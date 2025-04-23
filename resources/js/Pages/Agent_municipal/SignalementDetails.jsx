import React from 'react';

export default function SignalementDetails({ signalement }) {
    console.log(signalement);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Détails du Signalement</h1>

      <div className="mb-6">
        <h3 className="font-bold">Titre:</h3>
        <p>{signalement.titre}</p>
      </div>

      <div className="mb-6">
        <h3 className="font-bold">Description:</h3>
        <p>{signalement.description}</p>
      </div>

      <div className="mb-6">
        <h3 className="font-bold">Catégorie:</h3>
        <p>{signalement.categorie?.nom}</p>
      </div>

      <div className="mb-6">
        <h3 className="font-bold">Adresse:</h3>
        <p>{signalement.adresse}</p>
        
      </div>

      <div className="mb-6">
        <h3 className="font-bold">Statut:</h3>
        <p>{signalement.statut}</p>
      </div>

      {/* Affichage de la photo du signalement */}
      {signalement.image && (
        <div className="mb-6">
          <h3 className="font-bold">Photo du Signalement:</h3>
          <img
            src={signalement.image}
            alt="Photo du signalement"
            className="w-48 h-48 object-cover"
          />
        </div>
      )}

      {/* Informations sur l'utilisateur qui a fait le signalement */}
      <div className="mb-6">
        <h3 className="font-bold">Informations sur l'utilisateur:</h3>
        <p><strong>Nom:</strong> {signalement.user?.nom}</p>
        <p><strong>Email:</strong> {signalement.user?.email}</p>
        <p><strong>Téléphone:</strong> {signalement.user?.telephone}</p>

        
      </div>

      {/* Historique des interventions */}
      <div className="mb-6">
        <h3 className="font-bold">Historique des Interventions:</h3>
        {signalement.interventions && signalement.interventions.length > 0 ? (
          <ul>
            {signalement.interventions.map((intervention) => (
              <li key={intervention.id} className="mb-4">
                <p><strong>Description de l'intervention:</strong> {intervention.description_action}</p>
                <p><strong>Date Début:</strong> {intervention.dateDebut}</p>
                <p><strong>Date Fin:</strong> {intervention.dateFin}</p>

                {/* Affichage de la photo de la solution si elle existe */}
                {intervention.solution_photo && (
                  <div>
                    <h4 className="font-bold">Photo de la solution:</h4>
                    <img
                      src={intervention.solution_photo}
                      alt="Photo de la solution"
                      className="w-48 h-48 object-cover"
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucune intervention enregistrée pour ce signalement.</p>
        )}
      </div>
    </div>
  );
}
