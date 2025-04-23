// import { Head, Link } from '@inertiajs/react';

// export default function Welcome({ auth, laravelVersion, phpVersion }) {
//     const handleImageError = () => {
//         document.getElementById('screenshot-container')?.classList.add('!hidden');
//         document.getElementById('docs-card')?.classList.add('!row-span-1');
//         document.getElementById('docs-card-content')?.classList.add('!flex-row');
//         document.getElementById('background')?.classList.add('!hidden');
//     };

//     return (
//         <>
//             <Head title="RepareBladi - Ensemble, améliorons notre Maroc" />
//             <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
//                 <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-green-600 selection:text-white">
//                     <div className="relative w-full max-w-7xl px-6">
//                         {/* En-tête */}
//                         <header className="flex items-center justify-between py-6">
//                             <div className="flex items-center gap-4">
//                                 <img 
//                                     src="/logo-reparebladi.png" 
//                                     alt="Logo RepareBladi"
//                                     className="h-16 w-auto"
//                                 />
//                                 <span className="text-2xl font-bold text-green-600">RepareBladi</span>
//                             </div>
//                             <nav className="flex gap-4">
//                                 {auth.user ? (
//                                     <Link
//                                         href={route('dashboard')}
//                                         className="rounded-lg bg-green-600 px-6 py-2 text-white transition hover:bg-green-700"
//                                     >
//                                         Tableau de bord
//                                     </Link>
//                                 ) : (
//                                     <>
//                                         <Link
//                                             href={route('login')}
//                                             className="rounded-lg px-6 py-2 text-green-600 ring-1 ring-green-600 transition hover:bg-green-50"
//                                         >
//                                             Connexion
//                                         </Link>
//                                         <Link
//                                             href={route('register')}
//                                             className="rounded-lg bg-green-600 px-6 py-2 text-white transition hover:bg-green-700"
//                                         >
//                                             Inscription
//                                         </Link>
//                                     </>
//                                 )}
//                             </nav>
//                         </header>

//                         {/* Section Hero */}
//                         <section className="my-20 grid grid-cols-2 gap-12 py-12">
//                             <div className="flex flex-col justify-center">
//                                 <h1 className="mb-8 text-5xl font-bold leading-tight">
//                                     Transformons notre environnement ensemble !
//                                 </h1>
//                                 <p className="mb-8 text-xl text-gray-600">
//                                     RepareBladi est la plateforme citoyenne qui redonne vie à nos quartiers.
//                                     Signalez les problèmes, suivez les résolutions et contribuez à un Maroc plus propre.
//                                 </p>
//                                 <Link
//                                     href="/signaler"
//                                     className="self-start rounded-lg bg-green-600 px-8 py-3 text-lg text-white transition hover:bg-green-700"
//                                 >
//                                     Signaler un problème →
//                                 </Link>
//                             </div>
//                             <div className="relative">
//                                 <img 
//                                     src="/hero-illustration.png" 
//                                     alt="Citoyens engagés"
//                                     className="rounded-xl shadow-xl"
//                                 />
//                             </div>
//                         </section>

//                         {/* Comment ça marche */}
//                         <section className="my-20 py-12">
//                             <h2 className="mb-16 text-center text-4xl font-bold">Comment ça marche ?</h2>
//                             <div className="grid grid-cols-3 gap-8">
//                                 {[
//                                     {title: '1. Signalez', text: 'Décrivez le problème avec photos et localisation'},
//                                     {title: '2. Suivez', text: 'Recevez des updates sur la résolution'},
//                                     {title: '3. Célébrez', text: 'Voyez votre impact sur la communauté'}
//                                 ].map((item, index) => (
//                                     <div key={index} className="rounded-xl bg-white p-8 shadow-lg">
//                                         <div className="mb-4 h-12 w-12 rounded-full bg-green-100 text-2xl font-bold text-green-600 flex items-center justify-center">
//                                             {index + 1}
//                                         </div>
//                                         <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>
//                                         <p className="text-gray-600">{item.text}</p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </section>

//                         {/* Notre impact */}
//                         <section className="my-20 bg-green-600 py-16 text-white">
//                             <div className="text-center">
//                                 <h2 className="mb-12 text-4xl font-bold">Notre impact au Maroc</h2>
//                                 <div className="grid grid-cols-4 gap-8">
//                                     {[
//                                         {number: '15K+', label: 'Signalements traités'},
//                                         {number: '120+', label: 'Villes couvertes'},
//                                         {number: '95%', label: 'Satisfaction utilisateurs'},
//                                         {number: '2K+', label: 'Partenaires engagés'}
//                                     ].map((stat, index) => (
//                                         <div key={index}>
//                                             <div className="text-5xl font-bold">{stat.number}</div>
//                                             <div className="text-lg">{stat.label}</div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </section>

//                         {/* Témoignages */}
//                         <section className="my-20 py-12">
//                             <h2 className="mb-16 text-center text-4xl font-bold">Ce que disent nos utilisateurs</h2>
//                             <div className="grid grid-cols-2 gap-8">
//                                 {[
//                                     {
//                                         text: "Grâce à RepareBladi, notre rue a été refaite en 2 semaines !",
//                                         author: "Fatima E., Casablanca"
//                                     },
//                                     {
//                                         text: "Enfin une app qui nous permet d'agir concrètement !",
//                                         author: "Karim T., Marrakech"
//                                     }
//                                 ].map((testimonial, index) => (
//                                     <div key={index} className="rounded-xl bg-white p-8 shadow-lg">
//                                         <p className="mb-4 text-xl italic">"{testimonial.text}"</p>
//                                         <div className="font-semibold text-green-600">{testimonial.author}</div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </section>

//                         {/* Footer */}
//                         <footer className="border-t py-12">
//                             <div className="grid grid-cols-4 gap-8">
//                                 <div>
//                                     <h3 className="mb-4 text-lg font-bold">RepareBladi</h3>
//                                     <p className="text-gray-600">Ensemble, améliorons notre Maroc</p>
//                                 </div>
//                                 <div>
//                                     <h4 className="mb-4 font-semibold">Navigation</h4>
//                                     <ul className="space-y-2">
//                                         <li><a href="#" className="text-gray-600 hover:text-green-600">Accueil</a></li>
//                                         <li><a href="#" className="text-gray-600 hover:text-green-600">Blog</a></li>
//                                         <li><a href="#" className="text-gray-600 hover:text-green-600">Contact</a></li>
//                                     </ul>
//                                 </div>
//                                 <div>
//                                     <h4 className="mb-4 font-semibold">Légal</h4>
//                                     <ul className="space-y-2">
//                                         <li><a href="#" className="text-gray-600 hover:text-green-600">CGU</a></li>
//                                         <li><a href="#" className="text-gray-600 hover:text-green-600">Vie privée</a></li>
//                                     </ul>
//                                 </div>
//                                 <div>
//                                     <h4 className="mb-4 font-semibold">Réseaux</h4>
//                                     <div className="flex gap-4">
//                                         <a href="#" className="text-gray-600 hover:text-green-600">Facebook</a>
//                                         <a href="#" className="text-gray-600 hover:text-green-600">Twitter</a>
//                                         <a href="#" className="text-gray-600 hover:text-green-600">LinkedIn</a>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="mt-8 text-center text-gray-600">
//                                 © 2024 RepareBladi - Tous droits réservés
//                             </div>
//                         </footer>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { MapPin, Bell, Clock, Users, Check, AlertTriangle, ChevronRight, Mail, Phone, Home, Info, Map, Star } from 'lucide-react';

export default function Welcome() {
  return (
    <>
      <Head title="RepareBladi - Plateforme de signalement citoyenne au Maroc" />
      
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4 px-6">
          <div className="flex justify-between items-center">
            {/* Logo et nom du site */}
            <div className="flex items-center">
              <img src='/storage/img_desing/reparebladi-logo.svg' alt="Logo RepareBladi" className="h-12 w-12 mr-3" />
              <h1 className="text-2xl font-bold text-red-600">RepareBladi</h1>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link className="text-gray-700 hover:text-red-500 flex items-center" href="/">
                <Home className="mr-1 h-4 w-4" /> Accueil
              </Link>
              <Link className="text-gray-700 hover:text-red-500 flex items-center" href="/signalements">
                <AlertTriangle className="mr-1 h-4 w-4" /> Signalements
              </Link>
              <Link className="text-gray-700 hover:text-red-500 flex items-center" href="/carte">
                <Map className="mr-1 h-4 w-4" /> Carte
              </Link>
              <Link className="text-gray-700 hover:text-red-500 flex items-center" href="/a-propos">
                <Info className="mr-1 h-4 w-4" /> À propos
              </Link>
            </nav>
            
            {/* Boutons de connexion et ajout de signalement */}
            <div className="flex space-x-3">
              <Link
                href={route('login')}
                className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50"
              >
                Se connecter
              </Link>
              <Link
                href={route('signalements.create')}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center"
              >
                <AlertTriangle className="mr-2 h-4 w-4" /> Signaler un problème
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Améliorons ensemble notre Maroc</h2>
            <p className="text-xl mb-6 text-gray-600">
              RepareBladi est une plateforme qui permet aux citoyens de signaler des problèmes
              d'infrastructure et de services publics pour accélérer leur résolution.
            </p>
            <div className="flex space-x-4">
              <Link
                href={route('register')}
                className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600"
              >
                Créer un compte
              </Link>
              <Link
                href="/comment-ca-marche"
                className="px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 flex items-center"
              >
                Comment ça marche <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src='/storage/img_desing/istockphoto-464269213-1024x1024.jpg'
              alt="Citoyens engagés pour le Maroc"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Comment ça marche</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Étape 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-red-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="text-red-500 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Signaler</h3>
              <p className="text-gray-600">
                Prenez une photo du problème (nid-de-poule, lampadaire en panne, etc.) et soumettez-la via l'application.
              </p>
            </div>
            
            {/* Étape 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-red-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-red-500 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Localiser</h3>
              <p className="text-gray-600">
                Notre système géolocalise automatiquement le problème et le catégorise pour les services concernés.
              </p>
            </div>
            
            {/* Étape 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-red-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Bell className="text-red-500 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Traiter</h3>
              <p className="text-gray-600">
                Les autorités compétentes reçoivent le signalement et planifient les interventions nécessaires.
              </p>
            </div>
            
            {/* Étape 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-red-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Check className="text-red-500 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Résoudre</h3>
              <p className="text-gray-600">
                Suivez l'avancement de la résolution et recevez une notification une fois le problème résolu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 bg-red-500 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">Notre impact au Maroc</h2>
          <p className="text-xl text-center mb-12">
            Grâce à la collaboration entre citoyens et autorités, nous améliorons la qualité de vie de tous les Marocains
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="text-center bg-white text-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <AlertTriangle className="text-red-500 h-8 w-8" />
              </div>
              <p className="text-4xl font-bold mb-2">12,456</p>
              <p className="text-lg">Problèmes signalés</p>
            </div>
            
            {/* Stat 2 */}
            <div className="text-center bg-white text-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Check className="text-red-500 h-8 w-8" />
              </div>
              <p className="text-4xl font-bold mb-2">8,721</p>
              <p className="text-lg">Problèmes résolus</p>
            </div>
            
            {/* Stat 3 */}
            <div className="text-center bg-white text-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Users className="text-red-500 h-8 w-8" />
              </div>
              <p className="text-4xl font-bold mb-2">5,280</p>
              <p className="text-lg">Utilisateurs actifs</p>
            </div>
            
            {/* Stat 4 */}
            <div className="text-center bg-white text-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Clock className="text-red-500 h-8 w-8" />
              </div>
              <p className="text-4xl font-bold mb-2">72h</p>
              <p className="text-lg">Temps moyen de résolution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Ce que disent nos utilisateurs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Avis 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-red-50 w-10 h-10 rounded-full flex items-center justify-center">
                  <img src="/api/placeholder/40/40" alt="Photo utilisateur" className="w-10 h-10 rounded-full" />
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Hassan Berrada</h4>
                  <p className="text-sm text-gray-600">Casablanca</p>
                </div>
              </div>
              <p className="text-gray-700">
                "J'ai signalé une fuite d'eau près de mon quartier et elle a été réparée en moins de 48h. 
                RepareBladi a vraiment changé notre façon d'interagir avec les services publics!"
              </p>
              <div className="mt-4 flex text-yellow-500">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
            </div>
            
            {/* Avis 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-red-50 w-10 h-10 rounded-full flex items-center justify-center">
                  <img src="/api/placeholder/40/40" alt="Photo utilisateur" className="w-10 h-10 rounded-full" />
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Fatima Zahra</h4>
                  <p className="text-sm text-gray-600">Rabat</p>
                </div>
              </div>
              <p className="text-gray-700">
                "En tant qu'enseignante, j'ai mobilisé mes élèves pour signaler les problèmes autour de notre école.
                Nous avons vu des améliorations significatives en seulement quelques semaines!"
              </p>
              <div className="mt-4 flex text-yellow-500">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
            </div>
            
            {/* Avis 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-red-50 w-10 h-10 rounded-full flex items-center justify-center">
                  <img src="/api/placeholder/40/40" alt="Photo utilisateur" className="w-10 h-10 rounded-full" />
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">Karim Alaoui</h4>
                  <p className="text-sm text-gray-600">Marrakech</p>
                </div>
              </div>
              <p className="text-gray-700">
                "La transparence du processus est ce que j'apprécie le plus. On peut suivre l'évolution des signalements
                et voir que nos contributions font réellement une différence."
              </p>
              <div className="mt-4 flex text-yellow-500">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phrase significative et CTA */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ensemble, construisons un Maroc meilleur pour tous</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
            Rejoignez notre communauté de citoyens engagés et participez activement à l'amélioration de notre pays.
          </p>
          <Link
            href={route('register')}
            className="px-8 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center mx-auto w-fit"
          >
            Créer un compte gratuitement <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo et description */}
            <div>
              <div className="flex items-center mb-4">
                <img src="/api/placeholder/40/40" alt="Logo RepareBladi" className="h-10 w-10 mr-2" />
                <h3 className="text-xl font-bold text-red-500">RepareBladi</h3>
              </div>
              <p className="text-gray-600">
                Une initiative citoyenne pour améliorer notre environnement urbain et la qualité de vie au Maroc.
              </p>
            </div>
            
            {/* Liens */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Liens rapides</h4>
              <ul className="space-y-2">
                <li><Link className="text-gray-600 hover:text-red-500 transition-colors duration-300 flex items-center" href="/"><Home className="mr-2 h-4 w-4" /> Accueil</Link></li>
                <li><Link className="text-gray-600 hover:text-red-500 transition-colors duration-300 flex items-center" href="/signalements"><AlertTriangle className="mr-2 h-4 w-4" /> Signalements</Link></li>
                <li><Link className="text-gray-600 hover:text-red-500 transition-colors duration-300 flex items-center" href="/carte"><Map className="mr-2 h-4 w-4" /> Carte</Link></li>
                <li><Link className="text-gray-600 hover:text-red-500 transition-colors duration-300 flex items-center" href="/a-propos"><Info className="mr-2 h-4 w-4" /> À propos</Link></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Contact</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <Mail className="mr-2 h-4 w-4 text-red-500" />
                  contact@reparebladi.ma
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-red-500" />
                  +212 5XX-XXXXXX
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-red-500" />
                  123 Avenue Hassan II, Casablanca
                </li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Restez informé</h4>
              <p className="text-gray-600 mb-4">Inscrivez-vous à notre newsletter pour suivre nos actualités</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-l-lg focus:outline-none focus:border-red-500"
                />
                <button className="px-4 py-2 bg-red-500 text-white rounded-r-lg hover:bg-red-600 transition-colors duration-300">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} RepareBladi. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </>
  );
}