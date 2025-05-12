import React, { useEffect, useRef, useMemo } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Correction du problème d'icône Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Définir l'icône par défaut pour les marqueurs Leaflet
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapComponent = ({ signalements, selectedCategory, selectedCity, categories = [] }) => {
  // Fonction pour obtenir le nom de la catégorie par ID
  // const getCategoryName = (categoryId) => {
  //   const category = categories.find(c => c.id === categoryId);
   
    
  //   return category ? category.nom : 'Non catégorisé';
  // };
  console.log(signalements);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersLayerRef = useRef(null);

  // Filtrer les signalements en fonction des catégories et villes sélectionnées
  const filteredSignalements = signalements.filter(signalement => {
    const categoryMatch = !selectedCategory || signalement.categorie_id.toString() === selectedCategory;
    const cityMatch = !selectedCity || signalement.ville === selectedCity;
    return categoryMatch && cityMatch;
  });

  useEffect(() => {
    // Initialisation de la carte si elle n'existe pas encore
    if (!mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current).setView([31.7917, -7.0926], 6); // Vue centrée sur le Maroc
      
      // Ajout du fond de carte OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstanceRef.current);
      
      // Création d'un groupe de marqueurs (pour faciliter la gestion)
      markersLayerRef.current = L.layerGroup().addTo(mapInstanceRef.current);
    }

    // Nettoyer les marqueurs existants
    if (markersLayerRef.current) {
      markersLayerRef.current.clearLayers();
    }

    // Ajouter les marqueurs filtrés
    const validSignalements = filteredSignalements.filter(s => s.latitude && s.longitude);
    
    validSignalements.forEach(signalement => {
      const marker = L.marker([signalement.latitude, signalement.longitude], { icon: DefaultIcon })
        .bindPopup(`
          <div class="popup-content">
            <h3>${signalement.titre}</h3>
            <p>${signalement.description}</p>
            <div><strong>Ville:</strong> ${signalement.ville}</div>
            <div><strong>Catégorie:</strong> ${signalement.categorie.nom}</div>
          </div>
        `);
      
      marker.addTo(markersLayerRef.current);
    });

    // Ajuster la vue si on a des signalements
    if (validSignalements.length > 0) {
      const group = new L.featureGroup(
        validSignalements.map(s => L.marker([s.latitude, s.longitude]))
      );
      mapInstanceRef.current.fitBounds(group.getBounds(), { padding: [50, 50] });
    }

    return () => {
      // Nettoyage lors du démontage du composant
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [filteredSignalements, selectedCategory, selectedCity]);

  return (
    <div className="map-container">
      <div 
        ref={mapRef} 
        className="map-element"
        style={{ height: "500px", width: "100%", borderRadius: "8px" }}
      />
      <div className="map-info mt-2 text-sm text-gray-600">
        {filteredSignalements.length} signalement(s) affiché(s) sur la carte
      </div>
    </div>
  );
};

export default MapComponent;