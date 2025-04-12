import React, { useEffect, useState } from 'react';

import UrgentButton from './UregentButton';
import { useForm } from '@inertiajs/react';

export default function SignalementItem({ signalement }) {

    const {post}=useForm({
        id:signalement.id
    })

    const [isUrgent,setisUrgent]=useState(false);

    useEffect(()=>{
        setisUrgent(signalement.votes[0]?signalement.votes[0].type:false)
    },[signalement])


    const handleurgent = async()=>{
        await post(`signalements/${signalement.id}/urgent`);
    }

    return (
        <div className="border rounded-xl p-4 shadow-md bg-white flex items-center justify-between">
            <div>
                <h2 className="text-xl font-semibold mb-2">{signalement.titre}</h2>
                {signalement.image && (
                    <img
                        src={`/storage/${signalement.image}`}
                        alt="Signalement"
                        className="w-full max-w-md rounded mb-3"
                    />
                )}
                <p><strong>Description:</strong> {signalement.description}</p>
                <p><strong>Statut:</strong> {signalement.statut}</p>
                <p><strong>Ville:</strong> {signalement.ville}</p>
                <p><strong>Adresse:</strong> {signalement.adresse}</p>
            </div>
            <button
                style={{
                    backgroundColor: isUrgent  ? 'red' : 'orange',
                    color: 'white',
                    padding: '8px 15px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}

                onClick={handleurgent}
            >
                {isUrgent ? 'Annuler Urgent' : 'Urgent'}
            </button>
        </div>
    );
}