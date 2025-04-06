// import { useForm } from "@inertiajs/react";

// export default function Register() {
//   const { data, setData, post, processing, errors } = useForm({
//     nom: "",
//     prenom: "",
//     email: "",
//     password: "",
//     password_confirmation: "",
//     adresse: "",
//     telephone: "",
//   });
//   console.log(errors);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     post("/register");
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Inscription</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Nom</label>
//             <input
//               type="text"
//               value={data.nom}
//               onChange={(e) => setData("nom", e.target.value)}
//               className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
             
              
//             />
//             {errors.nom && <p className="text-red-500 text-sm">{errors.nom}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Prénom</label>
//             <input
//               type="text"
//               value={data.prenom}
//               onChange={(e) => setData("prenom", e.target.value)}
//               className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
             
//             />
//             {errors.prenom && <p className="text-red-500 text-sm">{errors.prenom}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               value={data.email}
//               onChange={(e) => setData("email", e.target.value)}
//               className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
//             <input
//               type="password"
//               value={data.password}
//               onChange={(e) => setData("password", e.target.value)}
//               className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
//             />
//             {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Confirmer le mot de passe</label>
//             <input
//               type="password"
//               value={data.password_confirmation}
//               onChange={(e) => setData("password_confirmation", e.target.value)}
//               className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Adresse</label>
//             <input
//               type="text"
//               value={data.adresse}
//               onChange={(e) => setData("adresse", e.target.value)}
//               className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Téléphone</label>
//             <input
//               type="text"
//               value={data.telephone}
//               onChange={(e) => setData("telephone", e.target.value)}
//               className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={processing}
//             className="w-full p-2 text-white bg-blue-600 rounded hover:bg-blue-700 disabled:bg-gray-400"
//           >
//             {processing ? "En cours..." : "S'inscrire"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



// SignUp.jsx - Composant d'inscription pour la plateforme de gestion des problèmes urbains
import React, { useState } from 'react';
import { useForm, Head, Link } from '@inertiajs/react';

const SignUp = () => {
  const { data, setData, errors, post, processing } = useForm({
    nom: '',
    prenom: '',
    email: '',
    password: '',
    password_confirmation: '',
    adresse: '',
    ville: '',
    telephone: '',
    postal_code: '',
    accept_terms: false
  });
  console.log(errors);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setData(key, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/register')
  };

  return (
    <>
      <Head title="Inscription - CityFix" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Rejoindre </h1>
            <p className="text-gray-600 mt-2">Créez un compte pour signaler des problèmes et suivre leur résolution.</p>
      ;    </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="prenom">Prénom *</label>
                <input
                  id="prenom"
                  name="prenom"
                  type="text"
                  value={data.prenom}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg ${errors.prenom ? 'border-red-500' : 'border-gray-300'}`}
                  required
                />
                {errors.prenom && <p className="text-red-500 text-sm mt-1">{errors.prenom}</p>}
              </div>

              <div>
                <label className="block text-gray-700 mb-1" htmlFor="nom">Nom *</label>
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  value={data.nom}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg ${errors.nom ? 'border-red-500' : 'border-gray-300'}`}
                  required
                />
                {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom}</p>}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">Telephone*</label>
              <input
                id="telephone"
                name="telephone"
                type="telephone"
                value={data.telephone}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg ${errors.telephone ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {errors.telephone && <p className="text-red-500 text-sm mt-1">{errors.telephone}</p>}
            </div>


            <div>
              <label className="block text-gray-700 mb-1" htmlFor="password">Mot de passe *</label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={passwordVisible ? 'text' : 'password'}
                  value={data.password}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                  required
                />
                <button 
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? '👁️' : '🙈'}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <div>
              <label className="block text-gray-700 mb-1" htmlFor="password_confirmation">Confirmer le mot de passe *</label>
              <input
                id="password_confirmation"
                name="password_confirmation"
                type={passwordVisible ? 'text' : 'password'}
                value={data.password_confirmation}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg ${errors.password_confirmation ? 'border-red-500' : 'border-gray-300'}`}
                required
              />
              {errors.password_confirmation && <p className="text-red-500 text-sm mt-1">{errors.password_confirmation}</p>}
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Informations de localisation</h3>
            </div>

            <div>
              <label className="block text-gray-700 mb-1" htmlFor="adresse">Adresse</label>
              <input
                id="adresse"
                name="adresse"
                type="text"
                value={data.adresse}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg border-gray-300"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="ville">Ville *</label>
                <input
                  id="ville"
                  name="ville"
                  type="text"
                  value={data.ville}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg border-gray-300"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="postal_code">Code postal *</label>
                <input
                  id="postal_code"
                  name="postal_code"
                  type="text"
                  value={data.postal_code}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg border-gray-300"
                  required
                />
              </div>
            </div>

            <div className="flex items-start mt-6">
              <input
                id="accept_terms"
                name="accept_terms"
                type="checkbox"
                checked={data.accept_terms}
                onChange={handleChange}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                required
              />
              <label htmlFor="accept_terms" className="ml-2 text-sm text-gray-600">
                J'accepte les <a href="/terms" className="text-blue-600 hover:underline">conditions</a>
              </label>
            </div>

            <button
              type="submit"
              disabled={processing}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
            >
              {processing ? 'Création...' : 'Créer mon compte'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;

