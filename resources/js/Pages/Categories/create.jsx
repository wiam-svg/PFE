
import React from 'react';
import { useForm } from '@inertiajs/react';
import { FileEdit, StickyNote, PlusCircle } from 'lucide-react';
import AppLayout from '@/Layouts/AppLayout';
import AdminSidebar from '@/Components/AdminSidebar';

export default function Create() {
    const { data, setData, post, errors } = useForm({
        nom: '',
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/categories');
    };

    return (
        <AppLayout title="Créer une Catégorie">
            <div className="flex">
                <AdminSidebar />
                <div className="flex-1 p-8">
                    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
                        <h1 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <FileEdit className="text-red-600" size={24} />
                            Créer une Catégorie
                        </h1>

                        <form onSubmit={handleSubmit} className="mt-4">
                            <div>
                                <label htmlFor="nom" className="block text-gray-700 text-sm font-bold mb-2">
                                    Nom:
                                </label>
                                <div className="flex items-center gap-2">
                                    <FileEdit className="text-gray-500" size={20} />
                                    <input
                                        type="text"
                                        name="nom"
                                        id="nom"
                                        value={data.nom}
                                        onChange={(e) => setData('nom', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                                {errors.nom && (
                                    <p className="text-red-500 text-sm mt-1">{errors.nom}</p>
                                )}
                            </div>

                            <div className="mt-4">
                                <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                                    Description:
                                </label>
                                <div className="flex items-start gap-2">
                                    <StickyNote className="mt-2 text-gray-500" size={20} />
                                    <textarea
                                        name="description"
                                        id="description"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                                {errors.description && (
                                    <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                                )}
                            </div>

                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="flex items-center gap-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    <PlusCircle size={18} />
                                    Créer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
