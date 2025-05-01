

// import React, { useState, useEffect } from 'react';
// import { usePage } from '@inertiajs/react';
// import { router } from '@inertiajs/react';

// const CategoryTable = () => {
//     const { categories } = usePage().props;
//     const categoryList = categories?.data || [];
    
//     // Utilisation de useState pour gérer l'état du menu ouvert
//     const [openMenuId, setOpenMenuId] = useState(null);

//     // Utilisation de useState pour gérer l'état des catégories (optionnel si tu veux faire une gestion manuelle des données)
//     const [categoriesState, setCategoriesState] = useState(categoryList);

//     // Effet pour mettre à jour les catégories quand elles changent
//     useEffect(() => {
//         setCategoriesState(categoryList);
//     }, [categoryList]); // Ce useEffect se déclenche chaque fois que `categoryList` change

//     // Fonction de suppression d'une catégorie
//     const handleDelete = (id) => {
//         if (window.confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?')) {
//             router.delete(route('categories.destroy', id));
//         }
//     };

//     // Fonction de modification d'une catégorie
//     const handleEdit = (id) => {
//         router.get(route('categories.edit', id)); // Utilisation de router.get pour modifier la catégorie
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-semibold mb-4">Liste des catégories</h1>
//             <table className="table-auto w-full border-collapse">
//                 <thead>
//                     <tr>
//                         <th className="border px-4 py-2">Nom</th>
//                         <th className="border px-4 py-2">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {categoriesState.map((category) => (
//                         <tr key={category.id}>
//                             <td className="border px-4 py-2">{category.nom}</td>
//                             <td className="border px-4 py-2">{category.description}</td>
//                             <td className="border px-4 py-2 relative">
//                                 <button
//                                     className="px-2 py-1 text-sm text-gray-500 hover:text-gray-700"
//                                     onClick={() => 
//                                         setOpenMenuId(openMenuId === category.id ? null : category.id)
//                                     }
//                                 >
//                                     ⋮
//                                 </button>

//                                 {openMenuId === category.id && (
//                                     <div className="absolute right-0 bg-white shadow-md rounded-md w-32 mt-2 z-10">
//                                         <button
//                                             onClick={() => handleEdit(category.id)}
//                                             className="block w-full px-4 py-2 text-left text-blue-600 hover:bg-gray-100"
//                                         >
//                                             Modifier
//                                         </button>
//                                         <button
//                                             onClick={() => handleDelete(category.id)}
//                                             className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
//                                         >
//                                             Supprimer
//                                         </button>
//                                     </div>
//                                 )}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };


// export default CategoryTable;





















import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { Edit, Trash2, Save, X, Plus } from 'lucide-react';
import AppLayout from '@/Layouts/AppLayout';
import AdminSidebar from '@/Components/AdminSidebar';

const CategoryTable = () => {
    const { categories } = usePage().props;
    const categoryList = categories?.data || [];
    
    const [categoriesState, setCategoriesState] = useState(categoryList);
    const [editingCategory, setEditingCategory] = useState(null);
    const [formData, setFormData] = useState({ nom: '', description: '' });
    
    useEffect(() => {
        setCategoriesState(categoryList);
    }, [categoryList]);

    const handleDelete = (id) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?')) {
            router.delete(route('categories.destroy', id));
        }
    };

    const handleEdit = (category) => {
        setEditingCategory(category.id);
        setFormData({
            nom: category.nom,
            description: category.description
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route('categories.update', editingCategory), formData, {
            onSuccess: () => {
                setEditingCategory(null);
                setFormData({ nom: '', description: '' });
            }
        });
    };

    const cancelEdit = () => {
        setEditingCategory(null);
        setFormData({ nom: '', description: '' });
    };

    return (
        <AppLayout>
             <div className="flex">
                <AdminSidebar/>
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-red-800">Gestion des catégories</h1>
            </div>
            
            <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-red-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-red-800 uppercase tracking-wider">
                                Nom
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-red-800 uppercase tracking-wider">
                                Description
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-red-800 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {categoriesState.length === 0 ? (
                            <tr>
                                <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
                                    Aucune catégorie trouvée
                                </td>
                            </tr>
                        ) : (
                            categoriesState.map((category) => (
                                <React.Fragment key={category.id}>
                                    <tr className="hover:bg-red-50 transition-all duration-300">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="font-medium text-gray-900">{category.nom}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-gray-500 truncate max-w-xs">{category.description}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            <div className="flex justify-center space-x-2">
                                                <button
                                                    onClick={() => handleEdit(category)}
                                                    className="p-2 text-red-600 hover:bg-blue-100 rounded-full transition-colors"
                                                    title="Modifier"
                                                >
                                                    <Edit size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(category.id)}
                                                    className="p-2 text-red-600 hover:bg-red-100 rounded-full transition-colors"
                                                    title="Supprimer"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    
                                    {editingCategory === category.id && (
                                        <tr className="bg-blue-50">
                                            <td colSpan="3" className="p-4">
                                                <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md border border-red-200">
                                                    <h3 className="text-lg font-semibold text-red-800 mb-4">Modifier la catégorie</h3>
                                                    
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                Nom
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="nom"
                                                                value={formData.nom}
                                                                onChange={handleChange}
                                                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                                                required
                                                            />
                                                        </div>
                                                        
                                                        <div>
                                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                                Description
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="description"
                                                                value={formData.description}
                                                                onChange={handleChange}
                                                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                                            />
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="flex justify-end space-x-2">
                                                        <button
                                                            type="button"
                                                            onClick={cancelEdit}
                                                            className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                                                        >
                                                            <X size={16} className="mr-1" />
                                                            Annuler
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="flex items-center px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-700 transition-colors"
                                                        >
                                                            <Save size={16} className="mr-1" />
                                                            Enregistrer
                                                        </button>
                                                    </div>
                                                </form>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            
            <div className="flex justify-center mt-6">
                {/* <button 
                    className="flex items-center px-6 py-3 bg-red-800 text-white rounded-lg shadow hover:bg-red-900 transition-all duration-300"
                    onClick={() => router.get('create_categories')}
                > */}
                <button 
                                    className="flex items-center px-6 py-3 bg-gradient-to-r from-red-800 to-red-700 text-white rounded-lg shadow-lg hover:shadow-xl hover:from-red-700 hover:to-red-600 transition-all duration-300 transform hover:-translate-y-1"
                                    onClick={() =>  router.get('create_categories')}
                >
                    <Plus size={18} className="mr-2" />
                    Ajouter une catégorie
                </button>
            </div>
        </div>
        </div>
        </AppLayout>
    );
};

export default CategoryTable;