



import React from 'react';
import { Link } from '@inertiajs/react';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-sm fixed w-full top-0">
                <div className="max-w-7xl mx-auto px-4 py-3">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <img 
                                src="/images/logo.png"
                                alt="UrbanFix Logo" 
                                className="h-8 w-auto mr-2 hover:opacity-80 transition-opacity"
                            />
                        </Link>

                        <div className="flex items-center space-x-6">
                            {/* Liens de navigation */}
                            <Link href="/" className="text-gray-600 hover:text-blue-600">
                                Accueil
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-blue-600">
                                Problèmes
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-blue-600">
                                Carte
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-blue-600">
                                Signaler
                            </Link>

                            {/* Bouton de déconnexion */}
                            <Link 
                                href={route('logout')} 
                                method="post"
                                as="button"
                                className="text-red-600 hover:text-red-700 ml-4 transition-colors"
                            >
                                Déconnexion
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* ... (le reste du code reste inchangé) ... */}
        </div>
    );
};

export default Home;