import React, { useState } from 'react';
// import { Inertia } from '@inertiajs/react';
// import Layout from '@/layouts/AuthenticatedLayout';
import Layout from '@/layouts/GuestLayout';
import { useForm } from '@inertiajs/react';
export default function Create() {
   

    const {data,setData,post,errors}=useForm({
        nom: '',
        description: '',
    });

    console.log(errors);

    const handleSubmit = (e) => {
        e.preventDefault();
       post('/categories');
    };

    return (
        <Layout title="Créer une Catégorie">
            <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
                <h1>Créer une Catégorie</h1>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div>
                        <label htmlFor="nom" className="block text-gray-700 text-sm font-bold mb-2">Nom:</label>
                        <input
                            type="text"
                            name="nom"
                            id="nom"
                            value={data.nom}
                            onChange={(e)=>setData('nom',e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
                        <textarea
                            name="description"
                            id="description"
                            value={data.description}
                            onChange={(e)=>setData('description',e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Créer
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}