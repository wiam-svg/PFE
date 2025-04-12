
// import { useForm } from '@inertiajs/react';
// import React, { useState } from 'react';

// export default function Create() {
//     const {post , errors}=useForm({})
//     const [values, setValues] = useState({
//         titre: '',
//         description: '',
//         image: null,
//         ville: '',
//         adresse: '',
//         categorie: '',
//         dateCreation: '',
//         categorie_id: '',
//     });

//     console.log(errors)

//     const handleChange = (e) => {
//         setValues({ ...values, [e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         for (const key in values) {
//             formData.append(key, values[key]);
//         }
//         post('signalements', formData);
//     };

//     return (
//         <div>
//             <h1>Créer un Signalement</h1>
//             <form onSubmit={handleSubmit}  encType="multipart/form-data">
//                 <div>
//                     <label htmlFor="titre">Titre:</label>
//                     <input type="text" name="titre" id="titre" value={values.titre} onChange={handleChange} required />
//                 </div>
//                 <div>
//                     <label htmlFor="description">Description:</label>
//                     <textarea name="description" id="description" value={values.description} onChange={handleChange} required />
//                 </div>
//                 <div>
//                     <label htmlFor="image">Image:</label>
//                     <input type="file" name="image" id="image" onChange={handleChange} required />
//                 </div>
//                 <div>
//                     <label htmlFor="ville">Ville:</label>
//                     <input type="text" name="ville" id="ville" value={values.ville} onChange={handleChange} required />
//                 </div>
//                 <div>
//                     <label htmlFor="adresse">Adresse:</label>
//                     <input type="text" name="adresse" id="adresse" value={values.adresse} onChange={handleChange} required />
//                 </div>
//                 <div>
//                     <label htmlFor="categorie">Catégorie:</label>
//                     <input type="text" name="categorie" id="categorie" value={values.categorie} onChange={handleChange} />
//                 </div>
//                 <div>
//                     <label htmlFor="dateCreation">Date de Création:</label>
//                     <input type="date" name="dateCreation" id="dateCreation" value={values.dateCreation} onChange={handleChange} required />
//                 </div>
//                 <div>
//                     <label htmlFor="categorie_id">Catégorie ID:</label>
//                     <input type="number" name="categorie_id" id="categorie_id" value={values.categorie_id} onChange={handleChange} required />
//                 </div>
//                 <button type="submit">Créer le Signalement</button>
//             </form>
//         </div>
//     );
// }





import React, { useState } from 'react';
import { useForm,usePage, Head } from '@inertiajs/react';

export default function Create() {

  const { categories = [] } = usePage().props;
  console.log(categories); 
  
  const { data, setData, post, processing, errors } = useForm({
    titre: '',
    description: '',
    image: null,
    ville: '',
    adresse: '',
    categorie_id: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées :", data);
    post(route('signalements.create'), {
      forceFormData: true,
    });
  };

  return (
    <>
      <Head title="Créer un signalement" />
      <h1 className="text-xl font-bold mb-4">Créer un signalement</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Titre"
          value={data.titre}
          onChange={e => setData('titre', e.target.value)}
          className="border p-2 w-full"
        />
        {errors.titre && <div className="text-red-500">{errors.titre}</div>}

        <textarea
          placeholder="Description"
          value={data.description}
          onChange={e => setData('description', e.target.value)}
          className="border p-2 w-full"
        />
        {errors.description && <div className="text-red-500">{errors.description}</div>}

        <input
          type="file"
          onChange={e => setData('image', e.target.files[0])}
          className="border p-2 w-full"
        />
        {errors.image && <div className="text-red-500">{errors.image}</div>}

        <input
          type="text"
          placeholder="Ville"
          value={data.ville}
          onChange={e => setData('ville', e.target.value)}
          className="border p-2 w-full"
        />
        {errors.ville && <div className="text-red-500">{errors.ville}</div>}

        <input
          type="text"
          placeholder="Adresse"
          value={data.adresse}
          onChange={e => setData('adresse', e.target.value)}
          className="border p-2 w-full"
        />
        {errors.adresse && <div className="text-red-500">{errors.adresse}</div>}

        <select
          value={data.categorie_id}
          onChange={e => setData('categorie_id', e.target.value)}
          className="border p-2 w-full"
        >
          <option value="">-- Choisir une catégorie --</option>
          {Array.isArray(categories) && categories.map(categorie => (
            <option key={categorie.id} value={categorie.id}>
              {categorie.nom}
            </option>
          ))}
        </select>
        {errors.categorie_id && <div className="text-red-500">{errors.categorie_id}</div>}

        <button
          type="submit"
          disabled={processing}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Créer le signalement
        </button>
      </form>
    </>
  );
}
