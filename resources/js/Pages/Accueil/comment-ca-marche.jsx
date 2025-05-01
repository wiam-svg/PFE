import React from 'react';
import { Camera, MapPin, CheckCircle } from 'lucide-react';

const HowItWorksCard = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-2xl shadow-2xl border border-red-200">
      <h2 className="text-4xl font-bold text-red-600 mb-8 text-center">
        🛠️ Comment ça marche ?
      </h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Image exemple */}
        <div>
          <img 
          src='/storage/img_desing/photodechets.jpeg'
            alt="Exemple de signalement"
            className="rounded-xl w-full h-72 object-cover shadow-lg ring-2 ring-red-300"
          />
        </div>

        {/* Étapes avec icônes Lucide */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Camera className="w-6 h-6 text-red-500 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-red-600">1. Signalez un problème</h3>
              <p className="text-gray-700">Prenez une photo, ajoutez une description, et localisez le souci sur la carte.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-red-500 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-red-600">2. Suivi en temps réel</h3>
              <p className="text-gray-700">Les citoyens et les autorités peuvent suivre, voter, et commenter les signalements.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-red-500 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-red-600">3. Résolution & retour</h3>
              <p className="text-gray-700">Recevez des mises à jour et évaluez l'intervention après résolution.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Objectif */}
      <div className="mt-10 p-6 bg-red-50 border-l-4 border-red-500 rounded-lg shadow-inner">
        <p className="text-gray-800 text-lg">
          🎯 <strong>Objectif :</strong> Favoriser la participation citoyenne et améliorer notre cadre de vie ensemble.
        </p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
