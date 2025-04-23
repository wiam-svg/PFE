
// import { useState } from 'react';
// import { router } from '@inertiajs/react';
// import { usePage } from '@inertiajs/react';
// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import TextInput from '@/Components/TextInput';
// import Checkbox from '@/Components/Checkbox';
// import PrimaryButton from '@/Components/PrimaryButton';

// export default function RegisterForm() {
//     const { errors } = usePage().props;
//     const [formData, setFormData] = useState({
//         nom: '',
//         prenom: '',
//         age: '',
//         email: '',
//         password: '',
//         password_confirmation: '',
//         adresse: '',
//         ville: '',
//         telephone: '',
//         type: '', // Valeur vide au début
//         nomEntreprise: '',
//         ice: '',
//         cin: '',
//         matricule: '',
//         cne: '',
//         accept_terms: false,
//         postal_code: '',
//     });

//     const [processing, setProcessing] = useState(false);

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'checkbox' ? checked : value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setProcessing(true);

//         router.post(route('register'), formData, {
//             onFinish: () => setProcessing(false),
//         });
//     };

//     const handleTypeChange = (e) => {
//         const type = e.target.value;
//         setFormData({
//             ...formData,
//             type,
//             entrepriseNom: '',
//             ice: '',
//             cin: '',
//             matricule: '',
//             cne: '',
//         });
//     };

//     return (
//         <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
//             <h1 className="text-2xl font-bold mb-6 text-center">Créer un compte</h1>
//             <form onSubmit={handleSubmit}>
//                 {/* Informations personnelles */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                     <div>
//                         <InputLabel htmlFor="nom" value="Nom" />
//                         <TextInput
//                             id="nom"
//                             name="nom"
//                             value={formData.nom}
//                             onChange={handleChange}
//                             className="mt-1 block w-full"
//                             required
//                         />
//                         <InputError message={errors.nom} className="mt-2" />
//                     </div>
//                     <div>
//                         <InputLabel htmlFor="prenom" value="Prénom" />
//                         <TextInput
//                             id="prenom"
//                             name="prenom"
//                             value={formData.prenom}
//                             onChange={handleChange}
//                             className="mt-1 block w-full"
//                             required
//                         />
//                         <InputError message={errors.prenom} className="mt-2" />
//                     </div>
//                 </div>

//                 <div className="mb-4">
//                     <InputLabel htmlFor="age" value="Age" />
//                     <TextInput
//                         id="age"
//                         type="number"
//                         name="age"
//                         value={formData.age}
//                         onChange={handleChange}
//                         className="mt-1 block w-full"
//                         required
//                     />
//                     <InputError message={errors.age} className="mt-2" />
//                 </div>

//                 {/* Email et mot de passe */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                     <div>
//                         <InputLabel htmlFor="email" value="Email" />
//                         <TextInput
//                             id="email"
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             className="mt-1 block w-full"
//                             required
//                         />
//                         <InputError message={errors.email} className="mt-2" />
//                     </div>
//                     <div>
//                         <InputLabel htmlFor="telephone" value="Téléphone" />
//                         <TextInput
//                             id="telephone"
//                             name="telephone"
//                             value={formData.telephone}
//                             onChange={handleChange}
//                             className="mt-1 block w-full"
//                             required
//                         />
//                         <InputError message={errors.telephone} className="mt-2" />
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                     <div>
//                         <InputLabel htmlFor="password" value="Mot de passe" />
//                         <TextInput
//                             id="password"
//                             type="password"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             className="mt-1 block w-full"
//                             required
//                         />
//                         <InputError message={errors.password} className="mt-2" />
//                     </div>
//                     <div>
//                         <InputLabel htmlFor="password_confirmation" value="Confirmer le mot de passe" />
//                         <TextInput
//                             id="password_confirmation"
//                             type="password"
//                             name="password_confirmation"
//                             value={formData.password_confirmation}
//                             onChange={handleChange}
//                             className="mt-1 block w-full"
//                             required
//                         />
//                     </div>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               <div>
//                  <InputLabel htmlFor="adresse" value="Adresse" />
//                  <TextInput
//                     id="adresse"
//                     name="adresse"
//                     value={formData.adresse}
//                     onChange={handleChange}
//                     className="mt-1 block w-full"
//                     required
//                  />
//                  <InputError message={errors.adresse} className="mt-2" />
//              </div>
//              <div>
//                 <InputLabel htmlFor="ville" value="Ville" />
//                 <TextInput
//                   id="ville"
//                   name="ville"
//                   value={formData.ville}
//                   onChange={handleChange}
//                   className="mt-1 block w-full"
//                   required
//                 />
//                 <InputError message={errors.ville} className="mt-2" />
//             </div>
//     </div>
//     <div>
//                          <InputLabel htmlFor="postal_code" value="Code postal" />
//                          <TextInput
//                              id="postal_code"
//                              name="postal_code"
//                              value={formData.postal_code}
//                              onChange={handleChange}
//                              className="mt-1 block w-full"
//                          />
//                          <InputError message={errors.postal_code} className="mt-2" />
//                     </div>


//                 {/* Type d'utilisateur */}
//                 <div className="mb-4">
//                     <InputLabel value="Type de compte" />
//                     <div className="mt-2">
//                         <label className="inline-flex items-center mr-6">
//                             <input
//                                 type="radio"
//                                 name="type"
//                                 value="entreprise"
//                                 checked={formData.type === 'entreprise'}
//                                 onChange={handleTypeChange}
//                                 className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                             />
//                             <span className="ml-2 text-sm text-gray-600">Entreprise</span>
//                         </label>
//                         <label className="inline-flex items-center mr-6">
//                             <input
//                                 type="radio"
//                                 name="type"
//                                 value="citoyen"
//                                 checked={formData.type === 'citoyen'}
//                                 onChange={handleTypeChange}
//                                 className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                             />
//                             <span className="ml-2 text-sm text-gray-600">Citoyen</span>
//                         </label>
//                         <label className="inline-flex items-center mr-6">
//                             <input
//                                 type="radio"
//                                 name="type"
//                                 value="agent_municipal"
//                                 checked={formData.type === 'agent_municipal'}
//                                 onChange={handleTypeChange}
//                                 className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                             />
//                             <span className="ml-2 text-sm text-gray-600">Agent Municipal</span>
//                         </label>
//                         <label className="inline-flex items-center">
//                             <input
//                                 type="radio"
//                                 name="type"
//                                 value="etudiant"
//                                 checked={formData.type === 'etudiant'}
//                                 onChange={handleTypeChange}
//                                 className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                             />
//                             <span className="ml-2 text-sm text-gray-600">Étudiant</span>
//                         </label>
//                     </div>
//                 </div>

//                 {/* Champs conditionnels */}
//                 {formData.type === 'entreprise' && (
//                     <>
//                         <div className="mb-4">
//                             <InputLabel htmlFor="nomEntreprise" value="Nom de l'entreprise" />
//                             <TextInput
//                                 id="nomEntreprise"
//                                 name="nomEntreprise"
//                                 value={formData.nomEntreprise}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full"
//                                 required
//                             />
//                             <InputError message={errors.nomEntreprise} className="mt-2" />
//                         </div>
//                         <div className="mb-4">
//                             <InputLabel htmlFor="ice" value="ICE" />
//                             <TextInput
//                                 id="ice"
//                                 name="ice"
//                                 value={formData.ice}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full"
//                                 required
//                             />
//                             <InputError message={errors.ice} className="mt-2" />
//                         </div>
//                     </>
//                 )}

//                 {formData.type === 'citoyen' && (
//                     <div className="mb-4">
//                         <InputLabel htmlFor="cin" value="CIN" />
//                         <TextInput
//                             id="cin"
//                             name="cin"
//                             value={formData.cin}
//                             onChange={handleChange}
//                             className="mt-1 block w-full"
//                             required
//                         />
//                         <InputError message={errors.cin} className="mt-2" />
//                     </div>
//                 )}

//                 {formData.type === 'agent_municipal' && (
//                     <div className="mb-4">
//                         <InputLabel htmlFor="matricule" value="Matricule" />
//                         <TextInput
//                             id="matricule"
//                             name="matricule"
//                             value={formData.matricule}
//                             onChange={handleChange}
//                             className="mt-1 block w-full"
//                             required
//                         />
//                         <InputError message={errors.matricule} className="mt-2" />
//                     </div>
//                 )}

//                 {formData.type === 'etudiant' && (
//                     <div className="mb-4">
//                         <InputLabel htmlFor="cne" value="CNE" />
//                         <TextInput
//                             id="cne"
//                             name="cne"
//                             value={formData.cne}
//                             onChange={handleChange}
//                             className="mt-1 block w-full"
//                             required
//                         />
//                         <InputError message={errors.cne} className="mt-2" />
//                     </div>
//                 )}

//                 <div className="mb-4">
//                     <Checkbox
//                         id="accept_terms"
//                         name="accept_terms"
//                         value={formData.accept_terms}
//                         onChange={handleChange}
//                     />
//                     <label htmlFor="accept_terms" className="ml-2 text-sm text-gray-600">
//                         J'accepte les termes et conditions
//                     </label>
//                     <InputError message={errors.accept_terms} className="mt-2" />
//                 </div>

//                 <div className="flex items-center justify-center">
//                     <PrimaryButton type="submit" disabled={processing}>
//                         Créer un compte
//                     </PrimaryButton>
//                 </div>
//             </form>
//         </div>
//     );
// }

import { useState } from 'react';
import { router } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import Checkbox from '@/Components/Checkbox';
import PrimaryButton from '@/Components/PrimaryButton';

export default function RegisterForm() {
    const { errors } = usePage().props;
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        age: '',
        email: '',
        password: '',
        password_confirmation: '',
        adresse: '',
        ville: '',
        telephone: '',
        type: '',
        nomEntreprise: '',
        ice: '',
        cin: '',
        matricule: '',
        cne: '',
        accept_terms: false,
        postal_code: '',
    });

    const [processing, setProcessing] = useState(false);
    const [step, setStep] = useState(1); // Added for multi-step form

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProcessing(true);

        router.post(route('register'), formData, {
            onFinish: () => setProcessing(false),
        });
    };

    const handleTypeChange = (e) => {
        const type = e.target.value;
        setFormData({
            ...formData,
            type,
            entrepriseNom: '',
            ice: '',
            cin: '',
            matricule: '',
            cne: '',
        });
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    // Progress indicator
    const renderProgress = () => {
        return (
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    {[1, 2, 3].map((stepNumber) => (
                        <div key={stepNumber} className="flex flex-col items-center">
                            <div className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold text-lg mb-2 ${
                                step >= stepNumber 
                                    ? 'bg-red-700 text-white' 
                                    : 'bg-gray-200 text-gray-500'
                            }`}>
                                {stepNumber}
                            </div>
                            <div className="text-xs text-gray-500">
                                {stepNumber === 1 && 'Informations'}
                                {stepNumber === 2 && 'Profil'}
                                {stepNumber === 3 && 'Finalisation'}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-2 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-red-700 transition-all duration-300" 
                        style={{ width: `${(step / 3) * 100}%` }}
                    ></div>
                </div>
            </div>
        );
    };

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg">
            <h1 className="text-3xl font-extrabold mb-2 text-center text-gray-800">Créer un compte</h1>
            <p className="text-gray-600 text-center mb-8">Rejoignez notre communauté en quelques étapes simples</p>
            
            {renderProgress()}
            
            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Informations personnelles</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <InputLabel htmlFor="nom" value="Nom" className="text-gray-700 font-medium" />
                                <TextInput
                                    id="nom"
                                    name="nom"
                                    value={formData.nom}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-600 focus:ring-2 focus:ring-red-200"
                                    required
                                />
                                <InputError message={errors.nom} className="mt-2 text-sm" />
                            </div>
                            <div>
                                <InputLabel htmlFor="prenom" value="Prénom" className="text-gray-700 font-medium" />
                                <TextInput
                                    id="prenom"
                                    name="prenom"
                                    value={formData.prenom}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-600 focus:ring-2 focus:ring-red-200"
                                    required
                                />
                                <InputError message={errors.prenom} className="mt-2 text-sm" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <InputLabel htmlFor="age" value="Age" className="text-gray-700 font-medium" />
                                <TextInput
                                    id="age"
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-600 focus:ring-2 focus:ring-red-200"
                                    required
                                />
                                <InputError message={errors.age} className="mt-2 text-sm" />
                            </div>
                            <div>
                                <InputLabel htmlFor="telephone" value="Téléphone" className="text-gray-700 font-medium" />
                                <TextInput
                                    id="telephone"
                                    name="telephone"
                                    value={formData.telephone}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-600 focus:ring-2 focus:ring-red-200"
                                    required
                                />
                                <InputError message={errors.telephone} className="mt-2 text-sm" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <InputLabel htmlFor="email" value="Email" className="text-gray-700 font-medium" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-600 focus:ring-2 focus:ring-red-200"
                                    required
                                />
                                <InputError message={errors.email} className="mt-2 text-sm" />
                            </div>
                            <div>
                                <InputLabel htmlFor="adresse" value="Adresse" className="text-gray-700 font-medium" />
                                <TextInput
                                    id="adresse"
                                    name="adresse"
                                    value={formData.adresse}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-2 focus:ring-red-200"
                                    required
                                />
                                <InputError message={errors.adresse} className="mt-2 text-sm" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <InputLabel htmlFor="ville" value="Ville" className="text-gray-700 font-medium" />
                                <TextInput
                                    id="ville"
                                    name="ville"
                                    value={formData.ville}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-2 focus:ring-red-200"
                                    required
                                />
                                <InputError message={errors.ville} className="mt-2 text-sm" />
                            </div>
                            <div>
                                <InputLabel htmlFor="postal_code" value="Code postal" className="text-gray-700 font-medium" />
                                <TextInput
                                    id="postal_code"
                                    name="postal_code"
                                    value={formData.postal_code}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-2 focus:ring-red-200"
                                />
                                <InputError message={errors.postal_code} className="mt-2 text-sm" />
                            </div>
                        </div>

                        <div className="flex justify-end pt-4">
                            <button
                                type="button"
                                onClick={nextStep}
                                className="px-6 py-2 bg-red-700 text-white rounded-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200"
                            >
                                Continuer
                            </button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Type de profil</h2>
                        
                        <div className="mb-6">
                            <InputLabel value="Type de compte" className="text-gray-700 font-medium mb-3" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { value: 'entreprise', label: 'Entreprise', icon: '🏢' },
                                    { value: 'citoyen', label: 'Citoyen', icon: '👤' },
                                    { value: 'agent_municipal', label: 'Agent Municipal', icon: '🏛️' },
                                    { value: 'etudiant', label: 'Étudiant', icon: '🎓' }
                                ].map(type => (
                                    <label 
                                        key={type.value}
                                        className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                                            formData.type === type.value 
                                                ? 'border-red-500 bg-red-50' 
                                                : 'border-gray-200 hover:border-red-300'
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name="type"
                                            value={type.value}
                                            checked={formData.type === type.value}
                                            onChange={handleTypeChange}
                                            className="sr-only"
                                        />
                                        <div className="flex items-center">
                                            <span className="text-2xl mr-3">{type.icon}</span>
                                            <span className="font-medium text-gray-800">{type.label}</span>
                                        </div>
                                        {formData.type === type.value && (
                                            <div className="ml-auto">
                                                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        )}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Champs conditionnels basés sur le type */}
                        {formData.type === 'entreprise' && (
                            <div className="space-y-4 p-5 border border-red-200 rounded-lg bg-red-50">
                                <h3 className="font-medium text-red-800">Informations d'entreprise</h3>
                                <div>
                                    <InputLabel htmlFor="nomEntreprise" value="Nom de l'entreprise" className="text-gray-700 font-medium" />
                                    <TextInput
                                        id="nomEntreprise"
                                        name="nomEntreprise"
                                        value={formData.nomEntreprise}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-2 focus:ring-red-200"
                                        required
                                    />
                                    <InputError message={errors.nomEntreprise} className="mt-2 text-sm" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="ice" value="ICE" className="text-gray-700 font-medium" />
                                    <TextInput
                                        id="ice"
                                        name="ice"
                                        value={formData.ice}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-2 focus:ring-red-200"
                                        required
                                    />
                                    <InputError message={errors.ice} className="mt-2 text-sm" />
                                </div>
                            </div>
                        )}

                        {formData.type === 'citoyen' && (
                            <div className="space-y-4 p-5 border border-red-100 rounded-lg bg-red-50">
                                <h3 className="font-medium text-red-800">Informations de citoyen</h3>
                                <div>
                                    <InputLabel htmlFor="cin" value="CIN" className="text-gray-700 font-medium" />
                                    <TextInput
                                        id="cin"
                                        name="cin"
                                        value={formData.cin}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-2 focus:ring-red-200"
                                        required
                                    />
                                    <InputError message={errors.cin} className="mt-2 text-sm" />
                                </div>
                            </div>
                        )}

                        {formData.type === 'agent_municipal' && (
                            <div className="space-y-4 p-5 border border-red-100 rounded-lg bg-red-50">
                                <h3 className="font-medium text-red-800">Informations d'agent municipal</h3>
                                <div>
                                    <InputLabel htmlFor="matricule" value="Matricule" className="text-gray-700 font-medium" />
                                    <TextInput
                                        id="matricule"
                                        name="matricule"
                                        value={formData.matricule}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-2 focus:ring-red-200"
                                        required
                                    />
                                    <InputError message={errors.matricule} className="mt-2 text-sm" />
                                </div>
                            </div>
                        )}

                        {formData.type === 'etudiant' && (
                            <div className="space-y-4 p-5 border border-red-100 rounded-lg bg-red-50">
                                <h3 className="font-medium text-red-800">Informations d'étudiant</h3>
                                <div>
                                    <InputLabel htmlFor="cne" value="CNE" className="text-gray-700 font-medium" />
                                    <TextInput
                                        id="cne"
                                        name="cne"
                                        value={formData.cne}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-2 focus:ring-red-200"
                                        required
                                    />
                                    <InputError message={errors.cne} className="mt-2 text-sm" />
                                </div>
                            </div>
                        )}

                        <div className="flex justify-between pt-4">
                            <button
                                type="button"
                                onClick={prevStep}
                                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-200"
                            >
                                Retour
                            </button>
                            <button
                                type="button"
                                onClick={nextStep}
                                className="px-6 py-2 bg-red-700 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200"
                            >
                                Continuer
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Finalisation</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <InputLabel htmlFor="password" value="Mot de passe" className="text-gray-700 font-medium" />
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-2 focus:ring-red-200"
                                    required
                                />
                                <InputError message={errors.password} className="mt-2 text-sm" />
                            </div>
                            <div>
                                <InputLabel htmlFor="password_confirmation" value="Confirmer le mot de passe" className="text-gray-700 font-medium" />
                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={formData.password_confirmation}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-2 focus:ring-red-200"
                                    required
                                />
                            </div>
                        </div>

                        <div className="p-5 bg-gray-50 rounded-lg border border-gray-200">
                            <h3 className="font-medium text-gray-700 mb-3">Récapitulatif de votre profil</h3>
                            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                                <div className="flex">
                                    <dt className="w-1/3 font-medium text-gray-500">Nom:</dt>
                                    <dd className="w-2/3 text-gray-800">{formData.nom || '-'}</dd>
                                </div>
                                <div className="flex">
                                    <dt className="w-1/3 font-medium text-gray-500">Prénom:</dt>
                                    <dd className="w-2/3 text-gray-800">{formData.prenom || '-'}</dd>
                                </div>
                                <div className="flex">
                                    <dt className="w-1/3 font-medium text-gray-500">Email:</dt>
                                    <dd className="w-2/3 text-gray-800">{formData.email || '-'}</dd>
                                </div>
                                <div className="flex">
                                    <dt className="w-1/3 font-medium text-gray-500">Téléphone:</dt>
                                    <dd className="w-2/3 text-gray-800">{formData.telephone || '-'}</dd>
                                </div>
                                <div className="flex">
                                    <dt className="w-1/3 font-medium text-gray-500">Type:</dt>
                                    <dd className="w-2/3 text-gray-800 capitalize">{formData.type ? formData.type.replace('_', ' ') : '-'}</dd>
                                </div>
                                {formData.type === 'entreprise' && (
                                    <>
                                        <div className="flex">
                                            <dt className="w-1/3 font-medium text-gray-500">Entreprise:</dt>
                                            <dd className="w-2/3 text-gray-800">{formData.nomEntreprise || '-'}</dd>
                                        </div>
                                        <div className="flex">
                                            <dt className="w-1/3 font-medium text-gray-500">ICE:</dt>
                                            <dd className="w-2/3 text-gray-800">{formData.ice || '-'}</dd>
                                        </div>
                                    </>
                                )}
                                {/* Ajoutez d'autres champs récapitulatifs conditionnels selon le type */}
                            </dl>
                        </div>

                        <div className="flex items-center mb-4">
                            <Checkbox
                                id="accept_terms"
                                name="accept_terms"
                                checked={formData.accept_terms}
                                onChange={handleChange}
                                className="rounded border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                            />
                            <label htmlFor="accept_terms" className="ml-2 text-sm text-gray-600">
                                J'accepte les <a href="#" className="text-red-700 hover:underline">termes et conditions</a>
                            </label>
                        </div>
                        <InputError message={errors.accept_terms} className="mt-2 text-sm" />

                        <div className="flex justify-between pt-4">
                            <button
                                type="button"
                                onClick={prevStep}
                                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-200"
                            >
                                Retour
                            </button>
                            <PrimaryButton 
                                type="submit" 
                                disabled={processing || !formData.accept_terms}
                                className={`px-6 py-2 bg-red-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 ${
                                    !formData.accept_terms ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-800 focus:ring-red-800'
                                }`}
                            >
                                {processing ? (
                                    <div className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Traitement...
                                    </div>
                                ) : (
                                    'Créer mon compte'
                                )}
                            </PrimaryButton>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
}