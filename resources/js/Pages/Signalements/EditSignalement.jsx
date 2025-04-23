import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';

export default function Edit({ signalement,categories }) {
    // console.log('signalement a edite ',signalement);
  // Initialisation du formulaire avec les données de signalement
  const { data, setData, post,errors } = useForm({
    titre: signalement.titre || '',
    description: signalement.description || '',
    ville: signalement.ville || '',
    adresse: signalement.adresse || '',
    image: null, // Initialiser l'image à null (ou l'ancienne image)
    categorie_id: signalement.categorie_id || '',
  });
   // Handle submit pour la mise à jour du signalement
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    await post(`/signalements/${signalement.id}`, {
      onSuccess: () => {
       
        setData('image', null);
       
      },
    });
  }; 
  

  // Handle image change
  const handleImageChange = (e) => { 
    const file = e.target.files[0];
    if (file) {
      setData('image', file);    }
  };

  console.log(data);

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Modifier Signalement</h1>

      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <div>
          <label className="block">Titre</label>
          <input
            type="text"
            value={data.titre}
            onChange={(e) => setData('titre', e.target.value)}
            className="w-full p-2 border rounded"
          />
          {errors.titre && <div className="text-red-500">{errors.titre}</div>}
        </div>

        <div>
          <label className="block">Description</label>
          <textarea
            value={data.description}
            onChange={(e) => setData('description', e.target.value)}
            className="w-full p-2 border rounded"
          />
          {errors.description && <div className="text-red-500">{errors.description}</div>}
        </div>

        <div>
          <label className="block">Ville</label>
          <input
            type="text"
            value={data.ville}
            onChange={(e) => setData('ville', e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block">Adresse</label>
          <input
            type="text"
            value={data.adresse}
            onChange={(e) => setData('adresse', e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
  <label className="block">Catégorie</label>
  <select
    value={data.categorie_id}
    onChange={(e) => setData('categorie_id', e.target.value)}
    className="w-full p-2 border rounded"
  >
    <option value="">-- Choisir une catégorie --</option>
    {categories.map((cat) => (
      <option key={cat.id} value={cat.id}>
        {cat.nom}
      </option>
    ))}
  </select>
  {errors.categorie_id && <div className="text-red-500">{errors.categorie_id}</div>}
</div>


        <div>
  <label className="block">Statut</label>
  <p className="w-full p-2 border rounded bg-gray-200">{signalement.statut}</p>
</div>


        <div>
          <label className="block">Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          />
          {signalement.image && (
            <div className="mt-2">
              <img
                src={`/storage/${signalement.image}`}
                alt="Image actuelle"
                className="w-32 h-32 object-cover rounded"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Enregistrer
        </button>
      </form>
    </div>
  );
}



