
// import { useState } from 'react';
// import { useForm, usePage, router } from '@inertiajs/react';
// import { User, Mail, Phone, MapPin, Save, CheckCircle, AlertCircle } from 'lucide-react';

// export default function UpdateProfileInformation({
//     mustVerifyEmail,
//     status,
//     className = '',
// }) {
//     const user = usePage().props.auth.user;
//     const [showSuccess, setShowSuccess] = useState(false);

//     // Gestion du formulaire via useForm
//     const { data, setData, errors, processing, recentlySuccessful } = useForm({
//         nom: user.nom || '',
//         prenom: user.prenom || '',
//         email: user.email || '',
//         telephone: user.telephone || '',
//         ville: user.ville || '',
//     });

//     // Fonction d'envoi du formulaire
//     const submit = (e) => {
//         e.preventDefault();
//         router.post('/profile', {
//             ...data,
//             _method: 'POST'
//         });
        
//         // Afficher le message de succès temporairement
//         if (!processing) {
//             setShowSuccess(true);
//             setTimeout(() => setShowSuccess(false), 3000);
//         }
//     };
   
//     return (
//         <section className={`max-w-2xl mx-auto ${className}`}>
//             <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
//                 <header className="mb-6 border-b pb-4">
//                     <h2 className="text-xl font-semibold text-gray-800">
//                         Informations personnelles
//                     </h2>
//                     <p className="mt-1 text-sm text-gray-500">
//                         Mettez à jour vos informations personnelles et votre adresse email.
//                     </p>
//                 </header>

//                 <form onSubmit={submit} className="space-y-5">
//                     <div className="grid md:grid-cols-2 gap-4">
//                         {/* Champ pour le prénom */}
//                         <div className="space-y-2">
//                             <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">
//                                 Prénom
//                             </label>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <User size={16} className="text-gray-400" />
//                                 </div>
//                                 <input
//                                     id="prenom"
//                                     type="text"
//                                     className="py-2 pl-10 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//                                     value={data.prenom}
//                                     onChange={(e) => setData('prenom', e.target.value)}
//                                     required
//                                     autoComplete="given-name"
//                                 />
//                             </div>
//                             {errors.prenom && (
//                                 <p className="mt-1 text-sm text-red-600 flex items-center">
//                                     <AlertCircle size={14} className="mr-1" />
//                                     {errors.prenom}
//                                 </p>
//                             )}
//                         </div>

//                         {/* Champ pour le nom */}
//                         <div className="space-y-2">
//                             <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
//                                 Nom
//                             </label>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <User size={16} className="text-gray-400" />
//                                 </div>
//                                 <input
//                                     id="nom"
//                                     type="text"
//                                     className="py-2 pl-10 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//                                     value={data.nom}
//                                     onChange={(e) => setData('nom', e.target.value)}
//                                     required
//                                     autoComplete="family-name"
//                                 />
//                             </div>
//                             {errors.nom && (
//                                 <p className="mt-1 text-sm text-red-600 flex items-center">
//                                     <AlertCircle size={14} className="mr-1" />
//                                     {errors.nom}
//                                 </p>
//                             )}
//                         </div>
//                     </div>

//                     {/* Champ pour l'email */}
//                     <div className="space-y-2">
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                             Email
//                         </label>
//                         <div className="relative">
//                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                 <Mail size={16} className="text-gray-400" />
//                             </div>
//                             <input
//                                 id="email"
//                                 type="email"
//                                 className="py-2 pl-10 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//                                 value={data.email}
//                                 onChange={(e) => setData('email', e.target.value)}
//                                 required
//                                 autoComplete="email"
//                             />
//                         </div>
//                         {errors.email && (
//                             <p className="mt-1 text-sm text-red-600 flex items-center">
//                                 <AlertCircle size={14} className="mr-1" />
//                                 {errors.email}
//                             </p>
//                         )}
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-4">
//                         {/* Champ pour le téléphone */}
//                         <div className="space-y-2">
//                             <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
//                                 Téléphone
//                             </label>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <Phone size={16} className="text-gray-400" />
//                                 </div>
//                                 <input
//                                     id="telephone"
//                                     type="tel"
//                                     className="py-2 pl-10 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//                                     value={data.telephone}
//                                     onChange={(e) => setData('telephone', e.target.value)}
//                                     autoComplete="tel"
//                                 />
//                             </div>
//                             {errors.telephone && (
//                                 <p className="mt-1 text-sm text-red-600 flex items-center">
//                                     <AlertCircle size={14} className="mr-1" />
//                                     {errors.telephone}
//                                 </p>
//                             )}
//                         </div>

//                         {/* Champ pour la ville */}
//                         <div className="space-y-2">
//                             <label htmlFor="ville" className="block text-sm font-medium text-gray-700">
//                                 Ville
//                             </label>
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <MapPin size={16} className="text-gray-400" />
//                                 </div>
//                                 <input
//                                     id="ville"
//                                     type="text"
//                                     className="py-2 pl-10 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//                                     value={data.ville}
//                                     onChange={(e) => setData('ville', e.target.value)}
//                                     autoComplete="address-level2"
//                                 />
//                             </div>
//                             {errors.ville && (
//                                 <p className="mt-1 text-sm text-red-600 flex items-center">
//                                     <AlertCircle size={14} className="mr-1" />
//                                     {errors.ville}
//                                 </p>
//                             )}
//                         </div>
//                     </div>

//                     {/* Vérification de l'email si nécessaire */}
//                     {mustVerifyEmail && user.email_verified_at === null && (
//                         <div className="p-3 bg-yellow-50 rounded-md border border-yellow-200">
//                             <p className="text-sm text-yellow-700 flex items-start">
//                                 <AlertCircle size={16} className="mr-2 mt-0.5 flex-shrink-0" />
//                                 <span>
//                                     Votre adresse email n'est pas vérifiée.
//                                     <button
//                                         type="button"
//                                         onClick={() => router.post(route('verification.send'))}
//                                         className="ml-1 font-medium text-blue-600 hover:text-blue-500 hover:underline"
//                                     >
//                                         Cliquez ici pour renvoyer l'email de vérification.
//                                     </button>
//                                 </span>
//                             </p>
                            
//                             {status === 'verification-link-sent' && (
//                                 <div className="mt-2 text-sm font-medium text-green-600 flex items-center">
//                                     <CheckCircle size={14} className="mr-1" />
//                                     Un nouveau lien de vérification a été envoyé.
//                                 </div>
//                             )}
//                         </div>
//                     )}

//                     {/* Bouton de soumission et message de succès */}
//                     <div className="flex items-center justify-between mt-8 pt-4 border-t">
//                         <button
//                             type="submit"
//                             disabled={processing}
//                             className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-sm text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                         >
//                             <Save size={16} className="mr-2" />
//                             Enregistrer les modifications
//                             {processing && (
//                                 <svg className="ml-2 animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                 </svg>
//                             )}
//                         </button>

//                         {(recentlySuccessful || showSuccess) && (
//                             <div className="flex items-center text-sm text-green-600 animate-pulse">
//                                 <CheckCircle size={16} className="mr-2" />
//                                 <span>Modifications enregistrées</span>
//                             </div>
//                         )}
//                     </div>
//                 </form>
//             </div>
//         </section>
//     );
// }
import { useState } from 'react';
import { useForm, usePage, router } from '@inertiajs/react';
import { User, Mail, Phone, MapPin, Save, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}) {
    const { t } = useTranslation();
    const user = usePage().props.auth.user;
    const [showSuccess, setShowSuccess] = useState(false);

    const { data, setData, errors, processing, recentlySuccessful } = useForm({
        nom: user.nom || '',
        prenom: user.prenom || '',
        email: user.email || '',
        telephone: user.telephone || '',
        ville: user.ville || '',
    });

    const submit = (e) => {
        e.preventDefault();
        router.post('/profile', {
            ...data,
            _method: 'POST'
        });
        
        if (!processing) {
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        }
    };
   
    return (
        <section className={`max-w-2xl mx-auto ${className}`}>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <header className="mb-6 border-b pb-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {t('profile.title')}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                        {t('profile.description')}
                    </p>
                </header>

                <form onSubmit={submit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                        {/* First Name */}
                        <div className="space-y-2">
                            <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">
                                {t('profile.fields.first_name')}
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User size={16} className="text-gray-400" />
                                </div>
                                <input
                                    id="prenom"
                                    type="text"
                                    className="py-2 pl-10 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    value={data.prenom}
                                    onChange={(e) => setData('prenom', e.target.value)}
                                    required
                                    autoComplete="given-name"
                                />
                            </div>
                            {errors.prenom && (
                                <p className="mt-1 text-sm text-red-600 flex items-center">
                                    <AlertCircle size={14} className="mr-1" />
                                    {errors.prenom}
                                </p>
                            )}
                        </div>

                        {/* Last Name */}
                        <div className="space-y-2">
                            <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                                {t('profile.fields.last_name')}
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User size={16} className="text-gray-400" />
                                </div>
                                <input
                                    id="nom"
                                    type="text"
                                    className="py-2 pl-10 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    value={data.nom}
                                    onChange={(e) => setData('nom', e.target.value)}
                                    required
                                    autoComplete="family-name"
                                />
                            </div>
                            {errors.nom && (
                                <p className="mt-1 text-sm text-red-600 flex items-center">
                                    <AlertCircle size={14} className="mr-1" />
                                    {errors.nom}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            {t('profile.fields.email')}
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail size={16} className="text-gray-400" />
                            </div>
                            <input
                                id="email"
                                type="email"
                                className="py-2 pl-10 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                                autoComplete="email"
                            />
                        </div>
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-600 flex items-center">
                                <AlertCircle size={14} className="mr-1" />
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {/* Phone */}
                        <div className="space-y-2">
                            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
                                {t('profile.fields.phone')}
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Phone size={16} className="text-gray-400" />
                                </div>
                                <input
                                    id="telephone"
                                    type="tel"
                                    className="py-2 pl-10 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    value={data.telephone}
                                    onChange={(e) => setData('telephone', e.target.value)}
                                    autoComplete="tel"
                                />
                            </div>
                            {errors.telephone && (
                                <p className="mt-1 text-sm text-red-600 flex items-center">
                                    <AlertCircle size={14} className="mr-1" />
                                    {errors.telephone}
                                </p>
                            )}
                        </div>

                        {/* City */}
                        <div className="space-y-2">
                            <label htmlFor="ville" className="block text-sm font-medium text-gray-700">
                                {t('profile.fields.city')}
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MapPin size={16} className="text-gray-400" />
                                </div>
                                <input
                                    id="ville"
                                    type="text"
                                    className="py-2 pl-10 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    value={data.ville}
                                    onChange={(e) => setData('ville', e.target.value)}
                                    autoComplete="address-level2"
                                />
                            </div>
                            {errors.ville && (
                                <p className="mt-1 text-sm text-red-600 flex items-center">
                                    <AlertCircle size={14} className="mr-1" />
                                    {errors.ville}
                                </p>
                            )}
                        </div>
                    </div>

                    {mustVerifyEmail && user.email_verified_at === null && (
                        <div className="p-3 bg-yellow-50 rounded-md border border-yellow-200">
                            <p className="text-sm text-yellow-700 flex items-start">
                                <AlertCircle size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                                <span>
                                    {t('profile.email_not_verified.message')}
                                    <button
                                        type="button"
                                        onClick={() => router.post(route('verification.send'))}
                                        className="ml-1 font-medium text-blue-600 hover:text-blue-500 hover:underline"
                                    >
                                        {t('profile.email_not_verified.resend_link')}
                                    </button>
                                </span>
                            </p>
                            
                            {status === 'verification-link-sent' && (
                                <div className="mt-2 text-sm font-medium text-green-600 flex items-center">
                                    <CheckCircle size={14} className="mr-1" />
                                    {t('profile.verification_link_sent')}
                                </div>
                            )}
                        </div>
                    )}

                    <div className="flex items-center justify-between mt-8 pt-4 border-t">
                        <button
                            type="submit"
                            disabled={processing}
                            className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-sm text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <Save size={16} className="mr-2" />
                            {t('profile.save_changes')}
                            {processing && (
                                <svg className="ml-2 animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            )}
                        </button>

                        {(recentlySuccessful || showSuccess) && (
                            <div className="flex items-center text-sm text-green-600 animate-pulse">
                                <CheckCircle size={16} className="mr-2" />
                                <span>{t('profile.changes_saved')}</span>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
}
