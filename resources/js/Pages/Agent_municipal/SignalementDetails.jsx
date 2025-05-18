// export default function SignalementDetails({ signalement }) {
//   console.log(signalement); // doit maintenant afficher aussi user, dateDebut, etc.

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">

//         <h1 className="text-3xl font-semibold text-gray-800 border-b pb-4">📌 Détails du Signalement</h1>

//         {/* Titre et description */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <h3 className="text-gray-700 font-medium">Titre</h3>
//             <p className="text-gray-900">{signalement.signalement.titre}</p>
//           </div>
//           <div>
//             <h3 className="text-gray-700 font-medium">Catégorie</h3>
//             <p className="text-gray-900">{signalement.signalement.categorie?.nom || 'Non spécifiée'}</p>
//           </div>
//           <div className="md:col-span-2">
//             <h3 className="text-gray-700 font-medium">Description</h3>
//             <p className="text-gray-900">{signalement.signalement.description}</p>
//           </div>
//         </div>

//         {/* Adresse et statut */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <h3 className="text-gray-700 font-medium">Adresse</h3>
//             <p className="text-gray-900">{signalement.signalement.adresse}</p>
//           </div>
//           <div>
//             <h3 className="text-gray-700 font-medium">Statut</h3>
//             <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
//               {signalement.signalement.statut}
//             </span>
//           </div>
//         </div>

//         {/* Image du signalement */}
//         {signalement.signalement.image && (
//           <div>
//             <h3 className="text-gray-700 font-medium mb-2">Photo du Signalement</h3>
//             <img
//               src={`/storage/${signalement.signalement.image}`}
//               alt="Photo du signalement"
//               className="w-full h-48 object-cover rounded-lg"
//             />
//           </div>
//         )}

//         {/* Infos utilisateur */}
//         <div className="border-t pt-4">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">👤 Informations de l'utilisateur</h2>
//           <p><strong>Nom:</strong> {signalement.user?.nom || 'N/A'}</p>
//           <p><strong>Email:</strong> {signalement.user?.email || 'N/A'}</p>
//           <p><strong>Téléphone:</strong> {signalement.user?.telephone || 'N/A'}</p>
//         </div>

//       </div>
//     </div>
//   );
// }


import { useTranslation } from 'react-i18next';

export default function SignalementDetails({ signalement }) {
  const { t } = useTranslation();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">

        <h1 className="text-3xl font-semibold text-gray-800 border-b pb-4">
          {t('signalement_details.title')}
        </h1>

        {/* Titre et description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-gray-700 font-medium">
              {t('signalement_details.fields.title')}
            </h3>
            <p className="text-gray-900">{signalement.signalement.titre}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">
              {t('signalement_details.fields.category')}
            </h3>
            <p className="text-gray-900">
              {signalement.signalement.categorie?.nom || t('signalement_details.fields.not_specified')}
            </p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-gray-700 font-medium">
              {t('signalement_details.fields.description')}
            </h3>
            <p className="text-gray-900">{signalement.signalement.description}</p>
          </div>
        </div>

        {/* Adresse et statut */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-gray-700 font-medium">
              {t('signalement_details.fields.address')}
            </h3>
            <p className="text-gray-900">{signalement.signalement.adresse}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium">
              {t('signalement_details.fields.status')}
            </h3>
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              {signalement.signalement.statut}
            </span>
          </div>
        </div>

        {/* Image du signalement */}
        {signalement.signalement.image && (
          <div>
            <h3 className="text-gray-700 font-medium mb-2">
              {t('signalement_details.fields.photo')}
            </h3>
            <img
              src={`/storage/${signalement.signalement.image}`}
              alt={t('signalement_details.fields.photo')}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        )}

        {/* Infos utilisateur */}
        <div className="border-t pt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {t('signalement_details.user_section.title')}
          </h2>
          <p>
            <strong>{t('signalement_details.user_section.name')}:</strong> 
            {signalement.user?.nom || t('signalement_details.user_section.not_available')}
          </p>
          <p>
            <strong>{t('signalement_details.user_section.email')}:</strong> 
            {signalement.user?.email || t('signalement_details.user_section.not_available')}
          </p>
          <p>
            <strong>{t('signalement_details.user_section.phone')}:</strong> 
            {signalement.user?.telephone || t('signalement_details.user_section.not_available')}
          </p>
        </div>

      </div>
    </div>
  );
}