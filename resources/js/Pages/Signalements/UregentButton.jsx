import React from 'react';

export default function UrgentButton({ isUrgent, onClick }) {
    return (
        <button
            style={{
                backgroundColor: isUrgent ? 'red' : 'orange',
                color: 'white',
                padding: '8px 15px',
                borderRadius: '5px',
                cursor: 'pointer',
            }}
            onClick={onClick}
        >
            {isUrgent ? 'Annuler Urgent' : 'Urgent'}
        </button>
    );
}