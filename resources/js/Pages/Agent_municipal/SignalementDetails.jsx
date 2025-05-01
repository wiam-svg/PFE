import React from 'react';
export default function SignalementDetails({ signalement }) {
  console.log(signalement);
  
  
  return (
    

    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">

        <h1 className="text-3xl font-semibold text-gray-800 border-b pb-4">📌 Détails du Signalement</h1>

        {/* Titre et description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-gray-700 font-medium">Titre</h3>
            <p className="text-gray-900">{signalement.titre}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Catégorie</h3>
            <p className="text-gray-900">{signalement.categorie?.nom || 'Non spécifiée'}</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-gray-700 font-medium">Description</h3>
            <p className="text-gray-900">{signalement.description}</p>
          </div>
        </div>

        {/* Adresse et statut */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-gray-700 font-medium">Adresse</h3>
            <p className="text-gray-900">{signalement.adresse}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">Statut</h3>
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {signalement.statut}
            </span>
          </div>
        </div>

        {/* Image du signalement */}
        {signalement.image && (
          <div>
            <h3 className="text-gray-700 font-medium mb-2">Photo du Signalement</h3>
            <img
              src={`/storage/${signalement.image}`}
              alt="Photo du signalement"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        )}
{/* 
        {/* Infos utilisateur */}
        <div className="border-t pt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">👤 Informations de l'utilisateur</h2>
          <p><strong>Nom:</strong> {signalement.user?.nom || 'N/A'}</p>
          <p><strong>Email:</strong> {signalement.user?.email || 'N/A'}</p>
          <p><strong>Téléphone:</strong> {signalement.user?.telephone || 'N/A'}</p>
        </div>

      

      </div>
    </div>
   
  );
}
