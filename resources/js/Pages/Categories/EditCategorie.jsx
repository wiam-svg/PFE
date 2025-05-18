// import React, { useState } from 'react';
// import { router, useForm } from '@inertiajs/react';

// const Edit = ({ categorie }) => {
//     const { data, setData, post, processing, errors } = useForm({
//         nom: categorie?.nom || '',
//         description: categorie?.description || '',
//     });
//     // console.log(errors);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         post(route('categories.update',categorie.id),{
//             onSuccess:()=>{
//                 router.get(route('listcategories'));
//             }
//         });
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-4">Modifier la catégorie</h1>

//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                     <label htmlFor="nom" className="block text-sm font-medium">Nom de la catégorie</label>
//                     <input
//                         id="nom"
//                         type="text"
//                         value={data.nom}
//                         onChange={(e) => setData('nom', e.target.value)}
//                         className="border rounded p-2 w-full"
//                     />
//                     {errors.nom && <div className="text-red-600">{errors.nom}</div>}
//                 </div>
//                 <div>
//                 <label htmlFor="description" className="block text-sm font-medium">Description</label>
//                 <textarea
//                   id="description"
//                   value={data.description}
//                   onChange={(e) => setData('description', e.target.value)}
//                   className="border rounded p-2 w-full"
//                   rows={4}
//                />
//                 {errors.description && <div className="text-red-600">{errors.description}</div>}
//                </div>

//                 <button
//                     type="submit"
//                     disabled={processing}
//                     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                 >
//                     Enregistrer
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Edit;



import React from 'react';
import { router, useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

const Edit = ({ categorie }) => {
    const { t } = useTranslation();

    const { data, setData, post, processing, errors } = useForm({
        nom: categorie?.nom || '',
        description: categorie?.description || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('categories.update', categorie.id), {
            onSuccess: () => {
                router.get(route('listcategories'));
            }
        });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{t('categorie_edit.title')}</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="nom" className="block text-sm font-medium">
                        {t('categorie_edit.fields.name')}
                    </label>
                    <input
                        id="nom"
                        type="text"
                        value={data.nom}
                        onChange={(e) => setData('nom', e.target.value)}
                        className="border rounded p-2 w-full"
                    />
                    {errors.nom && <div className="text-red-600">{errors.nom}</div>}
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium">
                        {t('categorie_edit.fields.description')}
                    </label>
                    <textarea
                        id="description"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        className="border rounded p-2 w-full"
                        rows={4}
                    />
                    {errors.description && <div className="text-red-600">{errors.description}</div>}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    {t('categorie_edit.save_button')}
                </button>
            </form>
        </div>
    );
};

export default Edit;
