// import React, { useState } from 'react';
// import { router, useForm } from '@inertiajs/react';
// import AppLayout from '@/Layouts/AppLayout';
// import AgentSidebar from '@/Components/AgentSidebar';
// import { Camera, AlertCircle } from 'lucide-react';

// export default function EditIntervention({ intervention }) {
//   const { data, setData, post, processing, errors } = useForm({
//     description_action: intervention.description_action || '',
//     dateDebut: intervention.dateDebut || '',
//     dateFin: intervention.dateFin || '',
//     solution_photo: null,
//     resolution_status: intervention.resolution_status || 'terminé',
//   });
//   const [preview, setPreview] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     router.post(`/agent/intervention/${intervention.id}`, {
//       ...data,
//       _method: 'POST'
//     });
//   };
//   const ImageUpload = ({ intervention, errors }) => {
//     const [imagePreview, setImagePreview] = useState(
//       intervention.solution_photo ? `/storage/${intervention.solution_photo}` : null
//     );
//   const handleImageChange = (e) => { 
//     const file = e.target.files[0];
//     if (file) {
//       // setData('solution_photo', file); 
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <AppLayout>
//     <div className="flex">
//       <AgentSidebar/>
//     <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
//       <h1 className="text-2xl font-bold mb-4">Marquer comme terminé</h1>
//       <form onSubmit={handleSubmit}>

//         <div className="mb-4">
//           <label>Description de l'action :</label>
//           <textarea
//             value={data.description_action}
//             onChange={e => setData('description_action', e.target.value)}
//             className="w-full border p-2"
//           />
//           {errors.description_action && <div className="text-red-500">{errors.description_action}</div>}
//         </div>

//         <div className="mb-4">
//           <label>Date de début :</label>
//           <input
//             type="date"
//             value={data.dateDebut}
//             onChange={e => setData('dateDebut', e.target.value)}
//             className="w-full border p-2"
//           />
//           {errors.dateDebut && <div className="text-red-500">{errors.dateDebut}</div>}
//         </div>

//         <div className="mb-4">
//           <label>Date de fin :</label>
//           <input
//             type="date"
//             value={data.dateFin}
//             onChange={e => setData('dateFin', e.target.value)}
//             className="w-full border p-2"
//           />
//           {errors.dateFin && <div className="text-red-500">{errors.dateFin}</div>}
//         </div>

//         {/* <div className="mb-4">
//           <label>Photo de la solution :</label>
//           <input
//             type="file"

//             onChange={e => setData('solution_photo', e.target.files[0])}
//             className="w-full border p-2"
//           />
//           {errors.solution_photo && <div className="text-red-500">{errors.solution_photo}</div>}
//         </div> */}

//         <div className="space-y-1">
//       <label htmlFor="image" className="block text-sm font-medium text-gray-700">Photo</label>

//       <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-red-400 bg-gray-50">
//         <input
//           id="image"
//           type="file"
//           onChange={handleImageChange}
//           className="hidden"
//         />

//         <label htmlFor="image" className="cursor-pointer">
//           {imagePreview ? (
//             <div className="flex justify-center">
//               <img 
//                 src={imagePreview} 
//                 alt="Aperçu"
//                 className="h-40 object-contain"
//               />
//             </div>
//           ) : (
//             <div className="flex flex-col items-center justify-center py-5">
//               <Camera className="h-12 w-12 text-gray-400 mb-2" />
//               <p className="text-gray-500">Cliquez pour ajouter une photo</p>
//             </div>
//           )}
//         </label>
//       </div>

//       {errors?.image && (
//         <div className="flex items-center text-red-500 text-sm mt-1">
//           <AlertCircle className="h-4 w-4 mr-1" />
//           {errors.image}
//         </div>
//       )}
//     </div>

//         <button
//           type="submit"
//           disabled={processing}
//           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//         >
//           Enregistrer
//         </button>
//       </form>
//     </div>
//     </div>
//     </AppLayout>
//   );
// }
import React, { useState } from 'react';
import { router, useForm } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import AgentSidebar from '@/Components/AgentSidebar';
import { Camera, AlertCircle } from 'lucide-react';

export default function EditIntervention({ intervention }) {
  const { data, setData, post, processing, errors } = useForm({
    description_action: intervention.description_action || '',
    dateDebut: intervention.dateDebut || '',
    dateFin: intervention.dateFin || '',
    solution_photo: intervention.solution_photo || null, // Assure que l'URL de l'image est déjà dans les données
    resolution_status: intervention.resolution_status || 'terminé',
  });

  const [imagePreview, setImagePreview] = useState(
    intervention.solution_photo ? `/storage/${intervention.solution_photo}` : null
  );
  const searchParams = new URLSearchParams(window.location.search);
  const source = searchParams.get('source'); 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file)); // Affiche l'aperçu de l'image
      setData('solution_photo', file); // Ajoute le fichier à l'état des données
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   router.post(`/agent/intervention/${intervention.id}`, {
  //     ...data,
  //     _method: 'POST',
  //   });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Soumettre les données du formulaire avec la méthode POST
    router.post(`/agent/intervention/${intervention.id}`, {
      ...data,
      _method: 'POST',  // Laravel va comprendre qu'il s'agit d'une mise à jour
      source: source,   // Inclure le paramètre `source` dans les données envoyées
    });
  };
  
  
  

  return (
    <AppLayout>
      <div className="flex">
        <AgentSidebar />
        <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
          <h1 className="text-2xl font-bold mb-4">Marquer comme terminé</h1>
          <form onSubmit={handleSubmit}>
            {/* Champ Description Action */}
            <div className="mb-4">
              <label>Description de l'action :</label>
              <textarea
                value={data.description_action}
                onChange={(e) => setData('description_action', e.target.value)}
                className="w-full border p-2"
              />
              {errors.description_action && (
                <div className="text-red-500">{errors.description_action}</div>
              )}
            </div>

            {/* Champ Date de début */}
            <div className="mb-4">
              <label>Date de début :</label>
              <input
                type="date"
                value={data.dateDebut}
                onChange={(e) => setData('dateDebut', e.target.value)}
                className="w-full border p-2"
              />
              {errors.dateDebut && <div className="text-red-500">{errors.dateDebut}</div>}
            </div>

            {/* Champ Date de fin */}
            <div className="mb-4">
              <label>Date de fin :</label>
              <input
                type="date"
                value={data.dateFin}
                onChange={(e) => setData('dateFin', e.target.value)}
                className="w-full border p-2"
              />
              {errors.dateFin && <div className="text-red-500">{errors.dateFin}</div>}
            </div>

            {/* Champ Upload Photo */}
            <div className="space-y-1">
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Photo
              </label>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-red-400 bg-gray-50">
                <input
                  id="image"
                  type="file"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <label htmlFor="image" className="cursor-pointer">
                  {imagePreview ? (
                    <div className="flex justify-center">
                      <img
                        src={imagePreview}
                        alt="Aperçu"
                        className="h-40 object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-5">
                      <Camera className="h-12 w-12 text-gray-400 mb-2" />
                      <p className="text-gray-500">Cliquez pour ajouter une photo</p>
                    </div>
                  )}
                </label>
              </div>

              {errors?.image && (
                <div className="flex items-center text-red-500 text-sm mt-1">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.image}
                </div>
              )}
            </div>

            {/* Bouton de soumission */}
            <button
              type="submit"
              disabled={processing}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Enregistrer
            </button>
            <button
        type="button"
        onClick={() => {
          if (source === 'termine') {
            router.get('/agent/interventions/terminees');
           } else if (source === 'encours') {
              router.get('/agent_municipal/MesSignalements');
          } else if (source === 'rejete') {
            router.get('/agent/interventions/rejetes');
          } else {
            router.get('/agent/intervention');
          }
        }}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 ml-2"
      >
        ⬅ Annuler et revenir
      </button>
  
          </form>
        </div>
      </div>
    </AppLayout>
  );
}
