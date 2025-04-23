import React, { useState } from 'react';
import { router, useForm } from '@inertiajs/react';

export default function EditIntervention({ intervention }) {
  const { data, setData, post, processing, errors } = useForm({
    description_action: intervention.description_action || '',
    dateDebut: intervention.dateDebut || '',
    dateFin: intervention.dateFin || '',
    solution_photo: null,
    resolution_status: intervention.resolution_status || 'terminé',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    router.post(`/agent/intervention/${intervention.id}`, {
      ...data,
      _method: 'POST'
    });
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Marquer comme terminé</h1>
      <form onSubmit={handleSubmit}>

        <div className="mb-4">
          <label>Description de l'action :</label>
          <textarea
            value={data.description_action}
            onChange={e => setData('description_action', e.target.value)}
            className="w-full border p-2"
          />
          {errors.description_action && <div className="text-red-500">{errors.description_action}</div>}
        </div>

        <div className="mb-4">
          <label>Date de début :</label>
          <input
            type="date"
            value={data.dateDebut}
            onChange={e => setData('dateDebut', e.target.value)}
            className="w-full border p-2"
          />
          {errors.dateDebut && <div className="text-red-500">{errors.dateDebut}</div>}
        </div>

        <div className="mb-4">
          <label>Date de fin :</label>
          <input
            type="date"
            value={data.dateFin}
            onChange={e => setData('dateFin', e.target.value)}
            className="w-full border p-2"
          />
          {errors.dateFin && <div className="text-red-500">{errors.dateFin}</div>}
        </div>

        <div className="mb-4">
          <label>Photo de la solution :</label>
          <input
            type="file"
            onChange={e => setData('solution_photo', e.target.files[0])}
            className="w-full border p-2"
          />
          {errors.solution_photo && <div className="text-red-500">{errors.solution_photo}</div>}
        </div>

        <button
          type="submit"
          disabled={processing}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Enregistrer
        </button>
      </form>
    </div>
  );
}
