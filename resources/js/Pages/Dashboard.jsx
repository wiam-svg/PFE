// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { Head } from '@inertiajs/react';

// export default function Dashboard() {
//     return (
//         <AuthenticatedLayout
//             header={
//                 <h2 className="text-xl font-semibold leading-tight text-gray-800">
//                     Dashboard
//                 </h2>
//             }
//         >
//             <Head title="Dashboard" />

//             <div className="py-12">
//                 <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
//                     <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
//                         <div className="p-6 text-gray-900">
//                             You're logged in!
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </AuthenticatedLayout>
//     );
// }



// import { useEffect, useState } from 'react';
// import { Link } from '@inertiajs/react';

// const Dashboard = () => {
//     const [incidents, setIncidents] = useState([]);

//     useEffect(() => {
//         // Charger les incidents depuis l'API
//         fetch('/api/incidents')
//             .then(response => response.json())
//             .then(data => setIncidents(data));
//     }, []);

//     return (
//         <div className="min-h-screen bg-gray-100 p-6">
//             <h1 className="text-3xl font-semibold text-gray-800">Tableau de bord</h1>

//             <div className="mt-4">
//                 <Link href="/report" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//                     ➕ Signaler un incident
//                 </Link>
//             </div>

//             <div className="mt-6 bg-white p-6 rounded-lg shadow">
//                 <h2 className="text-xl font-semibold">📍 Incidents signalés</h2>
//                 <ul>
//                     {incidents.map((incident) => (
//                         <li key={incident.id} className="mt-2 p-3 border rounded">
//                             <strong>{incident.titre}</strong> - {incident.status}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;




// const HomePage = () => {
//     return (
//         <div className="min-h-screen bg-gray-100">
//             {/* Header */}
//             <header className="flex justify-between items-center p-4 bg-white shadow-md">
//                 <div className="text-lg font-bold flex items-center space-x-2">
//                     <span className="text-blue-600">⚠️</span>
//                     <span>UrbanFix</span>
//                 </div>
//                 <nav className="flex space-x-6">
//                     <a href="#" className="text-blue-600 font-medium">🏠 Accueil</a>
//                     <a href="#" className="text-gray-700 hover:text-blue-600">📋 Problèmes</a>
//                     <a href="#" className="text-gray-700 hover:text-blue-600">🗺️ Carte</a>
//                     <a href="#" className="text-gray-700 hover:text-blue-600">➕ Signaler</a>
//                 </nav>
//             </header>

//             {/* Contenu Principal */}
//             <main className="flex flex-col items-center justify-center text-center mt-16 px-4">
//                 <h1 className="text-4xl font-bold text-gray-900">Ensemble, améliorons notre ville</h1>
//                 <p className="text-gray-600 mt-4 max-w-2xl">
//                     Signalez facilement les problèmes urbains, suivez leur résolution et contribuez à 
//                     l'amélioration de votre environnement quotidien.
//                 </p>
                
//                 {/* Boutons */}
//                 <div className="mt-6 flex space-x-4">
//                     <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
//                         Signaler un problème
//                     </a>
//                     <a href="#" className="text-gray-700 hover:underline">
//                         Voir les signalements
//                     </a>
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default HomePage;


// import React from 'react';

// export default function Welcome() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold text-gray-800 mb-4">
//           Ensemble, améliorons notre ville
//         </h1>
//         <p className="text-lg text-gray-600 mb-8">
//           Signalez facilement les problèmes urbains, suivez leur résolution et contribuez à l'amélioration de votre environnement quotidien.
//         </p>
//         <div className="flex space-x-4">
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Signaler un problème
//           </button>
//           <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
//             Voir les signalements
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { Link } from '@inertiajs/react';

// export default function HomePage() {
//     return (
//         <div className="min-h-screen bg-gray-100">
//             {/* Header */}
//             <header className="flex justify-between items-center p-4 bg-white shadow-md">
//                 <div className="text-lg font-bold flex items-center space-x-2">
//                     <span className="text-blue-600">⚠️</span>
//                     <span>reparebladi</span>
//                 </div>
//                 <nav className="flex space-x-6">
//                     <Link href="/" className="text-blue-600 font-medium">🏠 Accueil</Link>
//                     <Link href="/problemes" className="text-gray-700 hover:text-blue-600">📋 Problèmes</Link>
//                     <Link href="/carte" className="text-gray-700 hover:text-blue-600">🗺️ Carte</Link>
//                     <Link href="/signaler" className="text-gray-700 hover:text-blue-600">➕ Signaler</Link>
//                 </nav>
//             </header>

//             {/* Contenu Principal */}
//             <main className="flex flex-col items-center justify-center text-center mt-16 px-4">
//                 <h1 className="text-4xl font-bold text-gray-900">Ensemble, améliorons notre ville</h1>
//                 <p className="text-gray-600 mt-4 max-w-2xl">
//                     Signalez facilement les problèmes urbains, suivez leur résolution et contribuez à 
//                     l'amélioration de votre environnement quotidien.
//                 </p>
                
//                 {/* Boutons */}
//                 <div className="mt-6 flex space-x-4">
//                     <Link href="/signaler" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
//                         Signaler un problème
//                     </Link>
//                     <Link href="/signalements" className="text-gray-700 hover:underline">
//                         Voir les signalements
//                     </Link>
//                 </div>
//             </main>
//         </div>
//     );
// }

// import React from 'react';
// import { Link } from '@inertiajs/react';

// const Home = () => {
//     return (
//         <div className="min-h-screen bg-gray-50">
//             {/* Navigation */}
//             <nav className="bg-white shadow-sm fixed w-full top-0">
//                 <div className="max-w-7xl mx-auto px-4 py-3">
//                     <div className="flex justify-between items-center">
//                         <div className="text-xl font-bold text-blue-600">UrbanFix</div>
//                         <div className="space-x-6">
//                             <Link href="/" className="text-gray-600 hover:text-blue-600">
//                                 Accueil
//                             </Link>
//                             <Link href="#" className="text-gray-600 hover:text-blue-600">
//                                 Problèmes
//                             </Link>
//                             <Link href="#" className="text-gray-600 hover:text-blue-600">
//                                 Carte
//                             </Link>
//                             <Link href="#" className="text-gray-600 hover:text-blue-600">
//                                 Signaler
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             {/* Contenu principal */}
//             <main className="pt-20 pb-12">
//                 <div className="max-w-7xl mx-auto px-4 py-12">
//                     <div className="text-center mb-12">
//                         <h1 className="text-4xl font-bold text-gray-900 mb-4">
//                             Ensemble, améliorons notre ville
//                         </h1>
//                         <p className="text-xl text-gray-600 mb-8">
//                             Signalez facilement les problèmes urbains, suivez leur résolution et contribuez à l'amélioration de votre environnement quotidien.
//                         </p>
                        
//                         <div className="flex justify-center space-x-4">
//                             <Link 
//                                 href="#"
//                                 className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
//                             >
//                                 Signaler un problème
//                             </Link>
//                             <Link 
//                                 href="#"
//                                 className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
//                             >
//                                 Voir les signalements
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default Home;



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