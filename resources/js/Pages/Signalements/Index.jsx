import React, { useState, useEffect } from 'react';
import MapComponent from './MapComponent';
import AppLayout from '@/Layouts/AppLayout';
import AgentSidebar from '@/Components/AgentSidebar';
import AdminSidebar from '@/Components/AdminSidebar';
const SignalementIndex = ({ signalements = [], categories = [] ,user}) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [filteredSignalements, setFilteredSignalements] = useState(signalements);
  console.log(user);
  const role = user.role;
  const renderSidebar = () => {
    if (role === 'admin') {
        return <AdminSidebar />;
    } else if (role === 'agent_municipal') {
        return <AgentSidebar />;
    }
    return null; 
};
 
  const cities = [...new Set(signalements.map(s => s.ville))];
  
  
  useEffect(() => {
    const filtered = signalements.filter(s => {
      const categoryMatch = !selectedCategory || s.categorie_id.toString() === selectedCategory;
      const cityMatch = !selectedCity || s.ville === selectedCity;
      return categoryMatch && cityMatch;
    });
    
    setFilteredSignalements(filtered);
  }, [signalements, selectedCategory, selectedCity]);
  
  // Réinitialiser les filtres
  const resetFilters = () => {
    setSelectedCategory('');
    setSelectedCity('');
  };

  return (
    <AppLayout>
         <div className="flex min-h-screen bg-gray-50">
         {renderSidebar()}
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Signalements</h1>
      
      {/* Section des filtres */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Filtres</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Filtre par catégorie */}
          <div>
            <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Catégorie
            </label>
            <select
              id="category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Toutes les catégories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id.toString()}>
                  {category.nom}
                </option>
              ))}
            </select>
          </div>
          
          {/* Filtre par ville */}
          <div>
            <label htmlFor="city-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Ville
            </label>
            <select
              id="city-filter"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Toutes les villes</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          
          {/* Bouton pour réinitialiser les filtres */}
          <div className="flex items-end">
            <button
              onClick={resetFilters}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-md"
            >
              Réinitialiser les filtres
            </button>
          </div>
        </div>
      </div>
      
      {/* Affichage du nombre de résultats */}
      <div className="mb-4 text-sm">
        <span className="font-medium">{filteredSignalements.length}</span> signalement(s) trouvé(s)
      </div>
      
      {/* La carte avec les signalements filtrés */}
      <div className="mb-8">
        <MapComponent 
          signalements={signalements} 
          selectedCategory={selectedCategory}
          selectedCity={selectedCity}
        />
      </div>
      
      {/* Liste des signalements */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Liste des signalements</h2>
        
        {filteredSignalements.length === 0 ? (
          <div className="bg-gray-50 p-4 rounded-md text-center text-gray-500">
            Aucun signalement ne correspond à vos critères.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSignalements.map((signalement) => (
              <div key={signalement.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{signalement.titre}</h3>
                  <p className="text-gray-600 mb-2 line-clamp-2">{signalement.description}</p>
                  <div className="flex justify-between text-sm">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {signalement.ville}
                    </span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                      {signalement.categorie.nom || 'Non catégorisé'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </div>
    </AppLayout>
  );
};

export default SignalementIndex;