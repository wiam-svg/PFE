

import React from 'react';

const Comptes = ({ users }) => {

    const handleValidation = async (userId, status) => {
        try {
          await axios.post('/admin/validate-account', { userId, status });
        } catch (error) {
          console.error('Erreur lors de la mise à jour du statut : ', error);
        }
      };
      

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestion des Comptes</h1>

      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Nom</th>
            <th className="px-4 py-2 border-b">Email</th>
            <th className="px-4 py-2 border-b">Statut</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-2 border-b">{user.name}</td>
              <td className="px-4 py-2 border-b">{user.email}</td>
              <td className="px-4 py-2 border-b">
                {user.is_valid ? (
                  <span className="text-green-500">Validé</span>
                ) : (
                  <span className="text-red-500">Non Validé</span>
                )}
              </td>
              <td className="px-4 py-2 border-b">
                {user.is_valid ? (
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => handleValidation(user.id, false)}
                  >
                    Invalider
                  </button>
                ) : (
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={() => handleValidation(user.id, true)}
                  >
                    Valider
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Comptes;
