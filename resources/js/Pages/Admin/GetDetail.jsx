import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import AdminSidebar from '@/Components/AdminSidebar';
import { ArrowLeft, MessageSquare, ThumbsUp, Calendar, MapPin, User, AlertCircle } from 'lucide-react';

export default function GetDetail({ signalement }) {
    const handleBack = () => {
        window.history.back();
    };

    const statusColors = {
        "En attente": "bg-yellow-100 text-yellow-800",
        "En cours": "bg-blue-100 text-blue-800",
        "Résolu": "bg-green-100 text-green-800",
        "Rejeté": "bg-red-100 text-red-800"
    };

    return (
        <AppLayout>
            <div className="flex min-h-screen bg-gray-50">
                <AdminSidebar />
                <div className="flex-1 w-full max-w-5xl mx-auto px-4 py-6">
                    {/* Header */}
                    <div className="flex items-center mb-6">
                        <button
                            onClick={handleBack}
                            className="mr-4 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <h1 className="text-2xl font-bold">Détails du Signalement</h1>
                    </div>

                    {/* Main content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Main info */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white shadow rounded-lg overflow-hidden">
                                {signalement.image && (
                                    <div className="w-full h-64 bg-gray-200">
                                        <img
                                            src={`/storage/${signalement.image}`}
                                            alt="Signalement"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${statusColors[signalement.statut] || "bg-gray-100"}`}>
                                                {signalement.statut}
                                            </span>
                                            <h2 className="text-xl font-bold mt-2">{signalement.titre}</h2>
                                        </div>
                                        <div className="flex items-center text-blue-600 font-medium">
                                            <ThumbsUp size={18} className="mr-1" />
                                            {signalement.votes.length}
                                        </div>
                                    </div>

                                    <p className="text-gray-700 mb-6">{signalement.description}</p>

                                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                                        <div className="flex items-center">
                                            <Calendar size={16} className="mr-2" />
                                            <span>{signalement.created_at}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin size={16} className="mr-2" />
                                            <span>{signalement.adresse || 'Non précisé'}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <AlertCircle size={16} className="mr-2" />
                                            <span>Catégorie: {signalement.categorie?.nom}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <User size={16} className="mr-2" />
                                            <span>{signalement.user?.prenom} {signalement.user?.nom}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Comments */}
                            <div className="bg-white shadow rounded-lg p-6">
                                <h3 className="text-lg font-semibold mb-4 flex items-center">
                                    <MessageSquare size={20} className="mr-2" />
                                    Commentaires ({signalement.commentaire.length})
                                </h3>

                                {signalement.commentaire.length > 0 ? (
                                    <div className="space-y-4">
                                        {signalement.commentaire.map(comment => (
                                            <div key={comment.id} className="pb-4 border-b border-gray-100 last:border-0">
                                                <div className="flex items-center mb-2">
                                                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-2">
                                                        {comment.user.prenom.charAt(0)}{comment.user.nom.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <p className="font-medium">{comment.user.prenom} {comment.user.nom}</p>
                                                        <p className="text-xs text-gray-500">Il y a X jours</p>
                                                    </div>
                                                </div>
                                                <p className="text-gray-700 pl-10">{comment.contenu}</p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-8 text-gray-500">
                                        <MessageSquare size={24} className="mx-auto mb-2 opacity-50" />
                                        <p>Aucun commentaire pour ce signalement.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Sidebar placeholder (you can add more info here later) */}
                        <div className="space-y-6">
                            <div className="bg-white shadow rounded-lg p-6">
                                <h3 className="text-lg font-semibold mb-4">Informations supplémentaires</h3>
                                <p>Nom : {signalement.user.nom}</p>
                                <p>Numéro : {signalement.user.telephone}</p>
                                <p>Âge : {signalement.user.age}</p>
                                <p>Email : {signalement.user.email}</p>
                                <p>Ville : {signalement.user.ville}</p>

                                <p className="text-gray-500 text-sm">Ajoute ici des détails comme les étapes de suivi, les intervenants, etc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
