


// import React, { useState } from 'react';
// import { useForm, Head } from '@inertiajs/react';
// import { FileText, MapPin, Camera, Tag, AlertCircle } from 'lucide-react';
// import AppLayout from '@/Layouts/AppLayout';

// export default function Edit({ signalement, categories }) {
//   // Initialisation du formulaire avec les données de signalement
//   const { data, setData, post, processing, errors } = useForm({
//     titre: signalement.titre || '',
//     description: signalement.description || '',
//     ville: signalement.ville || '',
//     adresse: signalement.adresse || '',
//     image: null, // Initialiser l'image à null (ou l'ancienne image)
//     categorie_id: signalement.categorie_id || '',
//   });

//   // État pour la prévisualisation de l'image
//   const [imagePreview, setImagePreview] = useState(signalement.image ? `/storage/${signalement.image}` : null);

//   // Handle submit pour la mise à jour du signalement
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     post(`/signalements/${signalement.id}`, {
//       forceFormData: true,
//       onSuccess: () => {
//         setData('image', null);
//       },
//     });
//   };

//   // Handle image change avec prévisualisation
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setData('image', file);
    
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <AppLayout>
//       <Head title="Modifier un signalement" />
      
//       {/* En-tête avec style rouge */}
//       <div className="bg-red-600 text-white p-4 rounded-lg mb-6">
//         <h1 className="text-xl font-bold">Modifier un signalement</h1>
//         <p className="text-sm text-red-100">Utilisez ce formulaire pour mettre à jour les informations du signalement</p>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md" encType="multipart/form-data">
//         {/* Titre avec icône */}
//         <div className="space-y-1">
//           <label htmlFor="titre" className="block text-sm font-medium text-gray-700">Titre</label>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <FileText className="h-5 w-5 text-gray-400" />
//             </div>
//             <input
//               id="titre"
//               type="text"
//               placeholder="Titre du signalement"
//               value={data.titre}
//               onChange={e => setData('titre', e.target.value)}
//               className="pl-10 border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-red-500 focus:border-red-500"
//             />
//           </div>
//           {errors.titre && (
//             <div className="flex items-center text-red-500 text-sm">
//               <AlertCircle className="h-4 w-4 mr-1" />
//               {errors.titre}
//             </div>
//           )}
//         </div>

//         {/* Description */}
//         <div className="space-y-1">
//           <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
//           <textarea
//             id="description"
//             placeholder="Description détaillée"
//             value={data.description}
//             onChange={e => setData('description', e.target.value)}
//             rows="4"
//             className="border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-red-500 focus:border-red-500"
//           />
//           {errors.description && (
//             <div className="flex items-center text-red-500 text-sm">
//               <AlertCircle className="h-4 w-4 mr-1" />
//               {errors.description}
//             </div>
//           )}
//         </div>

//         {/* Image avec prévisualisation */}
//         <div className="space-y-1">
//           <label htmlFor="image" className="block text-sm font-medium text-gray-700">Photo</label>
//           <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-red-400 bg-gray-50">
//             <input
//               id="image"
//               type="file"
//               onChange={handleImageChange}
//               className="hidden"
//             />
//             <label htmlFor="image" className="cursor-pointer">
//               {imagePreview ? (
//                 <div className="flex justify-center">
//                   <img 
//                     src={imagePreview} 
//                     alt="Aperçu" 
//                     className="h-40 object-contain"
//                   />
//                 </div>
//               ) : (
//                 <div className="flex flex-col items-center justify-center py-5">
//                   <Camera className="h-12 w-12 text-gray-400 mb-2" />
//                   <p className="text-gray-500">Cliquez pour ajouter une photo</p>
//                 </div>
//               )}
//             </label>
//           </div>
//           {errors.image && (
//             <div className="flex items-center text-red-500 text-sm">
//               <AlertCircle className="h-4 w-4 mr-1" />
//               {errors.image}
//             </div>
//           )}
//         </div>

//         {/* Localisation sur 2 colonnes */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* Ville */}
//           <div className="space-y-1">
//             <label htmlFor="ville" className="block text-sm font-medium text-gray-700">Ville</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <MapPin className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 id="ville"
//                 type="text"
//                 placeholder="Ville"
//                 value={data.ville}
//                 onChange={e => setData('ville', e.target.value)}
//                 className="pl-10 border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-red-500 focus:border-red-500"
//               />
//             </div>
//             {errors.ville && (
//               <div className="flex items-center text-red-500 text-sm">
//                 <AlertCircle className="h-4 w-4 mr-1" />
//                 {errors.ville}
//               </div>
//             )}
//           </div>

//           {/* Adresse */}
//           <div className="space-y-1">
//             <label htmlFor="adresse" className="block text-sm font-medium text-gray-700">Adresse</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <MapPin className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 id="adresse"
//                 type="text"
//                 placeholder="Adresse précise"
//                 value={data.adresse}
//                 onChange={e => setData('adresse', e.target.value)}
//                 className="pl-10 border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-red-500 focus:border-red-500"
//               />
//             </div>
//             {errors.adresse && (
//               <div className="flex items-center text-red-500 text-sm">
//                 <AlertCircle className="h-4 w-4 mr-1" />
//                 {errors.adresse}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Catégorie */}
//         <div className="space-y-1">
//           <label htmlFor="categorie_id" className="block text-sm font-medium text-gray-700">Catégorie</label>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <Tag className="h-5 w-5 text-gray-400" />
//             </div>
//             <select
//               id="categorie_id"
//               value={data.categorie_id}
//               onChange={e => setData('categorie_id', e.target.value)}
//               className="pl-10 border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white"
//             >
//               <option value="">-- Choisir une catégorie --</option>
//               {categories.map(cat => (
//                 <option key={cat.id} value={cat.id}>
//                   {cat.nom}
//                 </option>
//               ))}
//             </select>
//           </div>
//           {errors.categorie_id && (
//             <div className="flex items-center text-red-500 text-sm">
//               <AlertCircle className="h-4 w-4 mr-1" />
//               {errors.categorie_id}
//             </div>
//           )}
//         </div>

//         {/* Statut (en lecture seule) */}
//         <div className="space-y-1">
//           <label className="block text-sm font-medium text-gray-700">Statut</label>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <AlertCircle className="h-5 w-5 text-gray-400" />
//             </div>
//             <input
//               type="text"
//               value={signalement.statut}
//               readOnly
//               className="pl-10 border border-gray-300 rounded-md p-2 w-full bg-gray-50"
//             />
//           </div>
//         </div>

//         {/* Boutons d'action */}
//         <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-4">
//           <button
//             type="submit"
//             disabled={processing}
//             className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md shadow transition w-full md:w-auto"
//           >
//             {processing ? 'Enregistrement en cours...' : 'Enregistrer les modifications'}
//           </button>
//           <a
//             href={route('signalements.index')}
//             className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md shadow transition w-full md:w-auto text-center"
//           >
//             Annuler
//           </a>
//         </div>
//       </form>
//     </AppLayout>
//   );
// }


import React, { useState } from 'react';
import { useForm, Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import { FileText, MapPin, Camera, Tag, AlertCircle } from 'lucide-react';
import AppLayout from '@/Layouts/AppLayout';

export default function Edit({ signalement, categories }) {
  const { t } = useTranslation();
  const { data, setData, post, processing, errors } = useForm({
    titre: signalement.titre || '',
    description: signalement.description || '',
    ville: signalement.ville || '',
    adresse: signalement.adresse || '',
    image: null,
    categorie_id: signalement.categorie_id || '',
  });

  const [imagePreview, setImagePreview] = useState(signalement.image ? `/storage/${signalement.image}` : null);

  const handleSubmit = (e) => {
    e.preventDefault();
    post(`/signalements/${signalement.id}`, {
      forceFormData: true,
      onSuccess: () => {
        setData('image', null);
      },
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setData('image', file);
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <AppLayout>
      <Head title={t('editsignalement.head.title')} />
      
      <div className="bg-red-600 text-white p-4 rounded-lg mb-6">
        <h1 className="text-xl font-bold">{t('editsignalement.header.title')}</h1>
        <p className="text-sm text-red-100">{t('editsignalement.header.subtitle')}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md" encType="multipart/form-data">
        {/* Titre */}
        <div className="space-y-1">
          <label htmlFor="titre" className="block text-sm font-medium text-gray-700">
            {t('editsignalement.form.title.label')}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FileText className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="titre"
              type="text"
              placeholder={t('editsignalement.form.title.placeholder')}
              value={data.titre}
              onChange={e => setData('titre', e.target.value)}
              className="pl-10 border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          {errors.titre && (
            <div className="flex items-center text-red-500 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.titre}
            </div>
          )}
        </div>

        {/* Description */}
        <div className="space-y-1">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            {t('editsignalement.form.description.label')}
          </label>
          <textarea
            id="description"
            placeholder={t('editsignalement.form.description.placeholder')}
            value={data.description}
            onChange={e => setData('description', e.target.value)}
            rows="4"
            className="border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
          {errors.description && (
            <div className="flex items-center text-red-500 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.description}
            </div>
          )}
        </div>

        {/* Image */}
        <div className="space-y-1">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            {t('editsignalement.form.image.label')}
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
                    alt={t('editsignalement.form.image.preview_alt')} 
                    className="h-40 object-contain"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-5">
                  <Camera className="h-12 w-12 text-gray-400 mb-2" />
                  <p className="text-gray-500">{t('editsignalement.form.image.upload_text')}</p>
                </div>
              )}
            </label>
          </div>
          {errors.image && (
            <div className="flex items-center text-red-500 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.image}
            </div>
          )}
        </div>

        {/* Localisation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Ville */}
          <div className="space-y-1">
            <label htmlFor="ville" className="block text-sm font-medium text-gray-700">
              {t('editsignalement.form.city.label')}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="ville"
                type="text"
                placeholder={t('editsignalement.form.city.placeholder')}
                value={data.ville}
                onChange={e => setData('ville', e.target.value)}
                className="pl-10 border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            {errors.ville && (
              <div className="flex items-center text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.ville}
              </div>
            )}
          </div>

          {/* Adresse */}
          <div className="space-y-1">
            <label htmlFor="adresse" className="block text-sm font-medium text-gray-700">
              {t('editsignalement.form.address.label')}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="adresse"
                type="text"
                placeholder={t('editsignalement.form.address.placeholder')}
                value={data.adresse}
                onChange={e => setData('adresse', e.target.value)}
                className="pl-10 border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            {errors.adresse && (
              <div className="flex items-center text-red-500 text-sm">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.adresse}
              </div>
            )}
          </div>
        </div>

        {/* Catégorie */}
        <div className="space-y-1">
          <label htmlFor="categorie_id" className="block text-sm font-medium text-gray-700">
            {t('editsignalement.form.category.label')}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Tag className="h-5 w-5 text-gray-400" />
            </div>
            <select
              id="categorie_id"
              value={data.categorie_id}
              onChange={e => setData('categorie_id', e.target.value)}
              className="pl-10 border border-gray-300 rounded-md p-2 w-full focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white"
            >
              <option value="">{t('editsignalement.form.category.default_option')}</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.nom}
                </option>
              ))}
            </select>
          </div>
          {errors.categorie_id && (
            <div className="flex items-center text-red-500 text-sm">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.categorie_id}
            </div>
          )}
        </div>

        {/* Statut */}
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            {t('editsignalement.form.status.label')}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <AlertCircle className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={signalement.statut}
              readOnly
              className="pl-10 border border-gray-300 rounded-md p-2 w-full bg-gray-50"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-4">
          <button
            type="submit"
            disabled={processing}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md shadow transition w-full md:w-auto"
          >
            {processing ? t('editsignalement.actions.processing') : t('editsignalement.actions.save')}
          </button>
          <a
            href={route('signalements.index')}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md shadow transition w-full md:w-auto text-center"
          >
            {t('editsignalement.actions.cancel')}
          </a>
        </div>
      </form>
    </AppLayout>
  );
}