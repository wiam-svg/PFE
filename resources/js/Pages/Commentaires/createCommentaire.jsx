import React, { useState } from 'react';
import { Inertia } from '@inertiajs/react';
import Layout from '@/layouts/AuthenticatedLayout'; // Assurez-vous d'utiliser le layout approprié
import { useParams } from 'react-router-dom'; // Pour accéder au paramètre 'signalement'

export default function Create() {
    const { signalement } = useParams(); // Récupérer l'ID du signalement depuis l'URL
    const [values, setValues] = useState({
        contenu: '',
    });

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route('signalements.commentaires.store', { signalement: signalement }), values);
    };

    return (
        <Layout title="Ajouter un Commentaire">
            <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
                <h1>Ajouter un Commentaire</h1>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div>
                        <label htmlFor="contenu" className="block text-gray-700 text-sm font-bold mb-2">Contenu:</label>
                        <textarea
                            name="contenu"
                            id="contenu"
                            value={values.contenu}
                            onChange={handleChange}
                            rows="4"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Ajouter le Commentaire
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}