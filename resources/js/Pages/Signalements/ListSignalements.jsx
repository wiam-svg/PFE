
// import { usePage } from '@inertiajs/react';
// import SignalementItem from './SignalementItem';


// export default function Index({ signalements }) {
//     const { auth } = usePage().props;
//     console.log(signalements);

//     return (
//         <div className="p-6 space-y-4">
//             <h1 className="text-2xl font-bold">Tous les signalements</h1>

//             {signalements.length === 0 ? (
//                 <p>Aucun signalement trouvé.</p>
//             ) : (
//                 signalements.map((signalement) => (
//                     <SignalementItem
//                         key={signalement.id}
//                         signalement={signalement}
//                         currentUser={auth.user}
//                     />
//                 ))
//             )}
//         </div>
//     );
// }








import React, { useState } from 'react';
import { usePage } from '@inertiajs/react';
import SignalementItem from './SignalementItem';
import { router } from '@inertiajs/react';

export default function Signalements({ signalements: initialSignalements }) {
    const { auth } = usePage().props;
    const [signalements, setSignalements] = useState(initialSignalements);
    const [filtreStatut, setFiltreStatut] = useState('tous');
    const [filtreVille, setFiltreVille] = useState('');
    const [filtreUrgent, setFiltreUrgent] = useState(false);

    // Extraire la liste unique des villes pour le filtre
    const villes = [...new Set(initialSignalements.map(s => s.ville))];

    // Fonction pour appliquer les filtres
    const appliquerFiltres = () => {
        let resultats = initialSignalements;
        
        // Filtre par statut
        if (filtreStatut !== 'tous') {
            resultats = resultats.filter(s => s.statut === filtreStatut);
        }
        
        // Filtre par ville
        if (filtreVille) {
            resultats = resultats.filter(s => s.ville === filtreVille);
        }
        
        // Filtre par urgence
        if (filtreUrgent) {
            resultats = resultats.filter(s => s.votes && s.votes[0]?.type === true);
        }
        
        setSignalements(resultats);
    };

    // Fonction pour réinitialiser les filtres
    const reinitialiserFiltres = () => {
        setFiltreStatut('tous');
        setFiltreVille('');
        setFiltreUrgent(false);
        setSignalements(initialSignalements);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-red-800 mb-6">Signalements</h1>
            
            <div className="flex flex-col md:flex-row gap-6">
                {/* Colonne de gauche - Liste des signalements */}
                <div className="w-full md:w-2/3">
                    {signalements.length === 0 ? (
                        <div className="bg-white p-6 rounded-lg shadow text-center">
                            <p className="text-lg">Aucun signalement trouvé.</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {signalements.map((signalement) => (
                                <SignalementItem
                                    key={signalement.id}
                                    signalement={signalement}
                                    currentUser={auth.user}
                                />
                            ))}
                        </div>
                    )}
                </div>
                
                {/* Colonne de droite - Filtres */}
                <div className="w-full md:w-1/3">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold text-red-800 flex items-center mb-4">
                            <span className="mr-2">🔍</span> Filtres
                        </h2>
                        
                        <div className="space-y-4">
                            {/* Filtre par statut */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    <span className="mr-2">📋</span> Statut
                                </label>
                                <select
                                    value={filtreStatut}
                                    onChange={(e) => setFiltreStatut(e.target.value)}
                                    className="w-full border border-gray-300 rounded p-2"
                                >
                                    <option value="tous">Tous les statuts</option>
                                    <option value="En attente">En attente</option>
                                    <option value="En cours">En cours</option>
                                    <option value="Résolu">Résolu</option>
                                    <option value="Refusé">Refusé</option>
                                </select>
                            </div>
                            
                            {/* Filtre par ville */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    <span className="mr-2">🏙️</span> Ville
                                </label>
                                <select
                                    value={filtreVille}
                                    onChange={(e) => setFiltreVille(e.target.value)}
                                    className="w-full border border-gray-300 rounded p-2"
                                >
                                    <option value="">Toutes les villes</option>
                                    {villes.map((ville) => (
                                        <option key={ville} value={ville}>
                                            {ville}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            
                            {/* Filtre par urgence */}
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="urgentOnly"
                                    checked={filtreUrgent}
                                    onChange={(e) => setFiltreUrgent(e.target.checked)}
                                    className="h-4 w-4 text-red-800"
                                />
                                <label 
                                    htmlFor="urgentOnly" 
                                    className="ml-2 text-sm font-medium text-gray-700 flex items-center"
                                >
                                    <span className="mr-2">🚨</span> Uniquement les urgents
                                </label>
                            </div>
                            
                            {/* Boutons d'action */}
                            <div className="flex gap-2 pt-2">
                                <button
                                    onClick={appliquerFiltres}
                                    className="flex-1 bg-red-800 hover:bg-red-900 text-white py-2 px-4 rounded"
                                >
                                    Appliquer
                                </button>
                                <button
                                    onClick={reinitialiserFiltres}
                                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded"
                                >
                                    Réinitialiser
                                </button>
                            </div>
                            
                            {/* Ajouter un nouveau signalement */}
                            <div className="mt-6">
                                <button
                                    onClick={() => router.get('Signalements/createSignalement')}
                                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded flex items-center justify-center"
                                >
                                    <span className="mr-2">➕</span> Nouveau signalement
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Statistiques */}
                    <div className="bg-white p-4 rounded-lg shadow mt-4">
                        <h2 className="text-xl font-semibold text-red-800 flex items-center mb-4">
                            <span className="mr-2">📊</span> Statistiques
                        </h2>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="bg-gray-50 p-3 rounded text-center">
                                <p className="text-sm text-gray-600">Total</p>
                                <p className="text-xl font-bold text-red-800">{initialSignalements.length}</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded text-center">
                                <p className="text-sm text-gray-600">Urgents</p>
                                <p className="text-xl font-bold text-red-800">
                                    {initialSignalements.filter(s => s.votes && s.votes[0]?.type === true).length}
                                </p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded text-center">
                                <p className="text-sm text-gray-600">En attente</p>
                                <p className="text-xl font-bold text-red-800">
                                    {initialSignalements.filter(s => s.statut === 'En attente').length}
                                </p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded text-center">
                                <p className="text-sm text-gray-600">Résolus</p>
                                <p className="text-xl font-bold text-red-800">
                                    {initialSignalements.filter(s => s.statut === 'Résolu').length}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}







