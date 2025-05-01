// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import { Transition } from '@headlessui/react';
// import { Link, useForm, usePage } from '@inertiajs/react';

// export default function UpdateProfileInformation({
//     mustVerifyEmail,
//     status,
//     className = '',
// }) {
//     const user = usePage().props.auth.user;

//     const { data, setData, patch, errors, processing, recentlySuccessful } =
//         useForm({
//             name: user.name,
//             email: user.email,
//         });

//     const submit = (e) => {
//         e.preventDefault();

//         patch(route('profile.update'));
//     };

//     return (
//         <section className={className}>
//             <header>
//                 <h2 className="text-lg font-medium text-gray-900">
//                     Profile Information
//                 </h2>

//                 <p className="mt-1 text-sm text-gray-600">
//                     Update your account's profile information and email address.
//                 </p>
//             </header>

//             <form onSubmit={submit} className="mt-6 space-y-6">
//                 <div>
//                     <InputLabel htmlFor="name" value="Name" />

//                     <TextInput
//                         id="name"
//                         className="mt-1 block w-full"
//                         value={data.name}
//                         onChange={(e) => setData('name', e.target.value)}
//                         required
//                         isFocused
//                         autoComplete="name"
//                     />

//                     <InputError className="mt-2" message={errors.name} />
//                 </div>

//                 <div>
//                     <InputLabel htmlFor="email" value="Email" />

//                     <TextInput
//                         id="email"
//                         type="email"
//                         className="mt-1 block w-full"
//                         value={data.email}
//                         onChange={(e) => setData('email', e.target.value)}
//                         required
//                         autoComplete="username"
//                     />

//                     <InputError className="mt-2" message={errors.email} />
//                 </div>

//                 {mustVerifyEmail && user.email_verified_at === null && (
//                     <div>
//                         <p className="mt-2 text-sm text-gray-800">
//                             Your email address is unverified.
//                             <Link
//                                 href={route('verification.send')}
//                                 method="post"
//                                 as="button"
//                                 className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                             >
//                                 Click here to re-send the verification email.
//                             </Link>
//                         </p>

//                         {status === 'verification-link-sent' && (
//                             <div className="mt-2 text-sm font-medium text-green-600">
//                                 A new verification link has been sent to your
//                                 email address.
//                             </div>
//                         )}
//                     </div>
//                 )}

//                 <div className="flex items-center gap-4">
//                     <PrimaryButton disabled={processing}>Save</PrimaryButton>

//                     <Transition
//                         show={recentlySuccessful}
//                         enter="transition ease-in-out"
//                         enterFrom="opacity-0"
//                         leave="transition ease-in-out"
//                         leaveTo="opacity-0"
//                     >
//                         <p className="text-sm text-gray-600">
//                             Saved.
//                         </p>
//                     </Transition>
//                 </div>
//             </form>
//         </section>
//     );
// }


import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage,router } from '@inertiajs/react';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}) {
    const user = usePage().props.auth.user;

    // Gestion du formulaire via useForm
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        nom: user.nom || '',
        prenom: user.prenom || '',
        email: user.email || '',
        telephone: user.telephone || '',
        ville: user.ville || '',
    });
    console.log(data);

    // Fonction d'envoi du formulaire
    const submit = (e) => {
        e.preventDefault();
        // post(route('profile.update'));
         router.post('/profile', {
              ...data,
              _method: 'POST'
            });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Informations personnelles
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                    Mettez à jour vos informations personnelles et votre adresse email.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                {/* Champ pour le prénom */}
                <div>
                    <InputLabel htmlFor="prenom" value="prenom" />
                    <TextInput
                        id="prenom"
                        className="mt-1 block w-full"
                        value={data.prenom}
                        onChange={(e) => setData('prenom', e.target.value)}
                        required
                        autoComplete="prenom"
                        isFocused
                    />
                    <InputError className="mt-2" message={errors. prenom} />
                </div>

                {/* Champ pour le nom */}
                <div>
                    <InputLabel htmlFor="nom" value="Nom" />
                    <TextInput
                        id="nom"
                        className="mt-1 block w-full"
                        value={data.nom}
                        onChange={(e) => setData('nom', e.target.value)}
                        required
                        autoComplete="nom"
                    />
                    <InputError className="mt-2" message={errors.nom} />
                </div>

                {/* Champ pour l'email */}
                <div>
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />
                    <InputError className="mt-2" message={errors.email} />
                </div>

                {/* Champ pour le téléphone */}
                <div>
                    <InputLabel htmlFor="telephone" value="Téléphone" />
                    <TextInput
                        id="telephone"
                        type="tel"
                        className="mt-1 block w-full"
                        value={data.telephone}
                        onChange={(e) => setData('telephone', e.target.value)}
                        autoComplete="tel"
                    />
                    <InputError className="mt-2" message={errors.telephone} />
                </div>

                {/* Champ pour la ville */}
                <div>
                    <InputLabel htmlFor="ville" value="Ville" />
                    <TextInput
                        id="ville"
                        className="mt-1 block w-full"
                        value={data.ville}
                        onChange={(e) => setData('ville', e.target.value)}
                        autoComplete="address-level2"
                    />
                    <InputError className="mt-2" message={errors.ville} />
                </div>

                {/* Vérification de l'email si l'utilisateur doit le faire */}
                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            Votre adresse email n'est pas vérifiée.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="ml-2 text-sm text-gray-600 underline hover:text-gray-900"
                            >
                                Cliquez ici pour renvoyer l'email de vérification.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                Un nouveau lien de vérification a été envoyé.
                            </div>
                        )}
                    </div>
                )}

                {/* Bouton de soumission et message de succès */}
                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Enregistrer les modifications</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Modifications enregistrées.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
