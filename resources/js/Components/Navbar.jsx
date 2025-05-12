

// import { LogOut, User, Settings, Bell, Home } from "lucide-react";
// import { 
//   Menu, 
//   X, 
//   ChevronDown, 
//   MapPin, 
//   Plus, 
//   Info, 
//   Search
// } from 'lucide-react';
// import { Link } from "@inertiajs/react";
// import { usePage } from "@inertiajs/react";
// import { useState,useEffect } from "react";

// export default function Navbar() {
//   const { auth } = usePage().props;
//   const role = auth?.user?.role;
//   const nom = auth?.user?.nom || "";
//   const prenom = auth?.user?.prenom || "";
//   const ville = auth?.user?.ville || "";
//   const zone = auth?.user?.zone || "";
//   const email=auth?.user.email || "";

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);


//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   // Définir la couleur du header selon le rôle
//   const headerClass =
//     role === "admin"
//       ? "bg-red-800 text-white"
//       : role === "agent_municipal"
//       ? "bg-green-800 text-white"
//       : "bg-white text-gray-800";

//   // Obtenir les initiales pour l'avatar
//   const initials = `${nom.charAt(0)}${prenom.charAt(0)}`.toUpperCase();

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   // Construction du composant en fonction du rôle
//   if (role === "admin") {
//     return (
//       <header className={`${headerClass} border-b w-full shadow-sm`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//           {/* Logo pour Admin */}
//           <div className="flex items-center space-x-2">
//             <Link href="/admin/dashboard" className="text-xl font-bold">
//               RepareBladi <span className="font-normal">| Administration</span>
//             </Link>
//           </div>

//           {/* Infos Admin */}
//           <div className="flex items-center space-x-4">
//             <span className="hidden md:inline-block text-sm">
//               Administrateur: {prenom} {nom}
//             </span>

//             {/* Boutons Admin */}
//             <div className="flex items-center space-x-4">
//               <Link
//                 href="/profile"
//                 className="flex items-center space-x-1 text-sm hover:underline"
//               >
//                 <User className="w-4 h-4" />
//                 <span>Profil</span>
//               </Link>
//               <Link
//                 method="post"
//                 href="/logout"
//                 as="button"
//                 className="flex items-center space-x-1 text-sm hover:underline"
//               >
//                 <LogOut className="w-4 h-4" />
//                 <span>Déconnexion</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </header>
//     );
//   } else if (role === "agent_municipal") {
//     return (
//       <header className={`${headerClass} border-b w-full shadow-sm`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//           {/* Logo pour Agent Municipal */}
//           <div className="flex items-center space-x-2">
//             <Link href="/agent/dashboard" className="text-xl font-bold">
//               RepareBladi <span className="font-normal">| Agent Municipal</span>
//             </Link>
//           </div>

//           {/* Infos Agent Municipal */}
//           <div className="flex items-center space-x-4">
//             <span className="hidden md:inline-block text-sm">
//               Agent: {prenom} {nom} | Zone: {zone || ville}
//             </span>

//             {/* Boutons Agent Municipal */}
//             <div className="flex items-center space-x-4">
//               <Link
//                 href="/profile"
//                 className="flex items-center space-x-1 text-sm hover:underline"
//               >
//                 <User className="w-4 h-4" />
//                 <span>Profil</span>
//               </Link>
//               <Link
//                 method="post"
//                 href="/logout"
//                 as="button"
//                 className="flex items-center space-x-1 text-sm hover:underline"
//               >
//                 <LogOut className="w-4 h-4" />
//                 <span>Déconnexion</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </header>
//     );
//   } else {
//     // Citoyen, entreprise, étudiant, etc.
//     return (
//       <>
//         <header 
//           className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
//             scrolled 
//               ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
//               : 'bg-gradient-to-r from-red-50 to-indigo-50 py-4'
//           }`}
//         >
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
//             {/* Logo */}
//             <div className="flex items-center">
//               <Link 
//                 href="/dashboard" 
//                 className="flex items-center space-x-2 group"
//               >
//                 <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-red-500 to-indigo-600 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
//                   <MapPin className="h-5 w-5 text-white" />
//                 </div>
//                 <span className={`text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-indigo-700 transition-all duration-300 ${
//                   scrolled ? 'lg:text-lg' : 'lg:text-xl'
//                 }`}>
//                   RepareBladi
//                 </span>
//               </Link>
//             </div>

//             {/* Barre de recherche */}
//             <div className="hidden lg:flex max-w-xs w-full mx-8">
//               <div className="relative w-full">
//                 <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                   <Search className="w-4 h-4 text-gray-400" />
//                 </div>
//                 <input 
//                   type="search" 
//                   className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 border-none focus:ring-2 focus:ring-red-300 text-sm placeholder-gray-400"
//                   placeholder="Rechercher..." 
//                 />
//               </div>
//             </div>


//             {/* Navigation au centre - version desktop */}
//             <nav className="hidden md:flex items-center space-x-1">
//             <Link href="/"
//              className="px-4 py-2 text-gray-700 rounded-full hover:bg-red-50 hover:text-red-600 font-medium transition-colors flex items-center space-x-1">
//                   <Home className="w-4 h-4" />
//                   <span> Accueil</span>
//               </Link>
//               <Link 
//                 href="/signalements" 
//                 className="px-4 py-2 text-gray-700 rounded-full hover:bg-red-50 hover:text-red-600 font-medium transition-colors flex items-center space-x-1"
//               >
//                 <MapPin className="w-4 h-4" />
//                 <span>Signalements</span>
//               </Link>
//               <Link 
//                 href="/a-propos" 
//                 className="px-4 py-2 text-gray-700 rounded-full hover:bg--50 hover:text--600 font-medium transition-colors flex items-center space-x-1"
//               >
//                 <Info className="w-4 h-4" />
//                 <span>À propos</span>
//               </Link>
//               <Link 
//                 href="/Signalements/createSignalement" 
//                 className="px-4 py-2 text-white rounded-full bg-gradient-to-r from-red-500 to-indigo-600 hover:from--600 hover:to-indigo-700 font-medium transition-all hover:shadow-md flex items-center space-x-1"
//               >
//                 <Plus className="w-4 h-4" />
//                 <span>Nouveau</span>
//               </Link>
//             </nav>

//             {/* Partie droite */}
//             <div className="flex items-center space-x-4">
//               {/* Notifications */}
//               <button className="relative p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors">
//                 <Bell className="w-5 h-5" />
//                 <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
//                   2
//                 </span>
//               </button>

//               {/* Avatar et menu utilisateur */}
//               <div className="relative">
//                 <button
//                   onClick={toggleMenu}
//                   className="flex items-center space-x-2 p-1 pr-3 rounded-full hover:bg-red-90 transition-colors focus:outline-none"
//                 >
//                   <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-indigo-600 flex items-center justify-center text-white font-semibold shadow-md">
//                     {initials}
//                   </div>
//                   <span className="hidden md:inline-block text-sm font-medium text-gray-700">{prenom}</span>
//                   <ChevronDown className="w-4 h-4 text-gray-500" />
//                 </button>

//                 {/* Menu dropdown */}
//                 {menuOpen && (
//                   <div className="absolute right-0 mt-2 w-56 py-2 bg-white rounded-xl shadow-xl z-10 border border-gray-100 animate-fadeIn">
//                     <div className="px-4 py-2 border-b border-gray-100">
//                       <p className="text-sm font-medium text-gray-700">{prenom}</p>
//                       <p className="text-xs text-gray-500">{email}</p>
//                     </div>

//                     <div className="py-1">
//                       <Link
//                         href="/profile"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 flex items-center transition-colors"
//                         onClick={() => setMenuOpen(false)}
//                       >
//                         <User className="w-4 h-4 mr-2 text-red-500" />
//                         <span>Mon Profil</span>
//                       </Link>
//                       <Link
//                         href="/settings"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 flex items-center transition-colors"
//                         onClick={() => setMenuOpen(false)}
//                       >
//                         <Settings className="w-4 h-4 mr-2 text-red-500" />
//                         <span>Paramètres</span>
//                       </Link>
//                     </div>

//                     <div className="py-1 border-t border-gray-100">
//                       <Link
//                         method="post"
//                         href="/logout"
//                         as="button"
//                         className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center transition-colors"
//                         onClick={() => setMenuOpen(false)}
//                       >
//                         <LogOut className="w-4 h-4 mr-2" />
//                         <span>Déconnexion</span>
//                       </Link>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Bouton menu mobile */}
//               <button
//                 onClick={toggleMobileMenu}
//                 className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors"
//               >
//                 {mobileMenuOpen ? (
//                   <X className="w-6 h-6" />
//                 ) : (
//                   <Menu className="w-6 h-6" />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Menu mobile */}
//           {mobileMenuOpen && (
//             <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-slideDown">
//               <div className="py-3 px-4 space-y-3">
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                     <Search className="w-4 h-4 text-gray-400" />
//                   </div>
//                   <input 
//                     type="search" 
//                     className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-red-300 text-sm placeholder-gray-400"
//                     placeholder="Rechercher..." 
//                   />
//                 </div>
//                 <Link href="/" className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 font-medium transition-colors flex items-center"
//                   onClick={() => setMobileMenuOpen(false)}>
//                     <Home className="w-4 h-4 mr-2" />
//                     <span>Accueil </span>
//                 </Link>

//                 <Link 
//                   href="/signalements" 
//                   className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 font-medium transition-colors flex items-center"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   <MapPin className="w-4 h-4 mr-2" />
//                   <span>Signalements</span>
//                 </Link>

//                 <Link 
//                   href="/about" 
//                   className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 font-medium transition-colors flex items-center"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   <Info className="w-4 h-4 mr-2" />
//                   <span>À propos</span>
//                 </Link>
//                 <Link 
//                   href="/Signalements/createSignalement" 
//                   className="block px-4 py-2 text-white rounded-lg bg-gradient-to-r from-gray-500 to-gray-600 font-medium transition-all flex items-center"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   <Plus className="w-4 h-4 mr-2" />
//                   <span>Nouveau Signalement</span>
//                 </Link>
//               </div>
//             </div>
//           )}
//         </header>

//         {/* Élément d'espacement pour éviter que le contenu ne soit masqué par le header fixe */}
//         <div 
//           style={{ 
//             height: scrolled ? '64px' : '80px', 
//             transition: 'height 0.3s'
//           }} 
//           className="w-full"
//         />
//       </>
//     );
//   }
// }



import { LogOut, User, Settings, Bell, Home, ChevronRight } from "lucide-react";
import {
  Menu,
  X,
  ChevronDown,
  MapPin,
  Plus,
  Info,
  Search,
  Map
} from 'lucide-react';
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { auth } = usePage().props;
  const { unreadCount } = usePage().props;
  const role = auth?.user?.role;
  const nom = auth?.user?.nom || "";
  const prenom = auth?.user?.prenom || "";
  const ville = auth?.user?.ville || "";
  const zone = auth?.user?.zone || "";
  const email = auth?.user.email || "";

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [signalementMenuOpen, setSignalementMenuOpen] = useState(false);
  const [mobileSignalementMenuOpen, setMobileSignalementMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Définir la couleur du header selon le rôle
  const headerClass =
    role === "admin"
      ? "bg-red-800 text-white"
      : role === "agent_municipal"
        ? "bg-green-800 text-white"
        : "bg-white text-gray-800";

  // Obtenir les initiales pour l'avatar
  const initials = `${nom.charAt(0)}${prenom.charAt(0)}`.toUpperCase();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSignalementMenu = () => {
    setSignalementMenuOpen(!signalementMenuOpen);
  };

  const toggleMobileSignalementMenu = () => {
    setMobileSignalementMenuOpen(!mobileSignalementMenuOpen);
  };

  // Construction du composant en fonction du rôle
  if (role === "admin") {
    return (
      <header className={`${headerClass} border-b w-full shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo pour Admin */}
          <div className="flex items-center space-x-2">
            <Link href="/admin/dashboard" className="text-xl font-bold">
              RepareBladi <span className="font-normal">| Administration</span>
            </Link>
          </div>

          {/* Infos Admin */}
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline-block text-sm">
              Administrateur: {prenom} {nom}
            </span>

            {/* Boutons Admin */}
            <div className="flex items-center space-x-4">
              <Link
                href="/profile"
                className="flex items-center space-x-1 text-sm hover:underline"
              >
                <User className="w-4 h-4" />
                <span>Profil</span>
              </Link>
              <Link
                method="post"
                href="/logout"
                as="button"
                className="flex items-center space-x-1 text-sm hover:underline"
              >
                <LogOut className="w-4 h-4" />
                <span>Déconnexion</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  } else if (role === "agent_municipal") {
    return (
      <header className={`${headerClass} border-b w-full shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo pour Agent Municipal */}
          <div className="flex items-center space-x-2">
            <Link href="/agent/dashboard" className="text-xl font-bold">
              RepareBladi <span className="font-normal">| Agent Municipal</span>
            </Link>
          </div>

          {/* Infos Agent Municipal */}
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline-block text-sm">
              Agent: {prenom} {nom} | Zone: {zone || ville}
            </span>

            {/* Boutons Agent Municipal */}
            <div className="flex items-center space-x-4">
              <Link
                href="/profile"
                className="flex items-center space-x-1 text-sm hover:underline"
              >
                <User className="w-4 h-4" />
                <span>Profil</span>
              </Link>
              <Link
                method="post"
                href="/logout"
                as="button"
                className="flex items-center space-x-1 text-sm hover:underline"
              >
                <LogOut className="w-4 h-4" />
                <span>Déconnexion</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  } else {
    // Citoyen, entreprise, étudiant, etc.
    return (
      <>
        <header
          className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled
              ? 'bg-white/90 backdrop-blur-md shadow-md py-2'
              : 'bg-gradient-to-r from-red-50 to-indigo-50 py-4'
            }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/dashboard"
                className="flex items-center space-x-2 group"
              >
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-red-500 to-indigo-600 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <span className={`text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-indigo-700 transition-all duration-300 ${scrolled ? 'lg:text-lg' : 'lg:text-xl'
                  }`}>
                  RepareBladi
                </span>
              </Link>
            </div>

            {/* Barre de recherche */}
            <div className="hidden lg:flex max-w-xs w-full mx-8">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-4 h-4 text-gray-400" />
                </div>
                <input
                  type="search"
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 border-none focus:ring-2 focus:ring-red-300 text-sm placeholder-gray-400"
                  placeholder="Rechercher..."
                />
              </div>
            </div>


            {/* Navigation au centre - version desktop */}
            <nav className="hidden md:flex items-center space-x-1">
            <Link
                href="/Carte"
                className="px-4 py-2 text-gray-700 rounded-full hover:bg-red-50 hover:text-red-600 font-medium transition-colors flex items-center space-x-1"
              >
                <Map className="w-4 h-4" />
                <span>Carte</span>
              </Link>
            

              <Link
                href="/"
                className="px-4 py-2 text-gray-700 rounded-full hover:bg-red-50 hover:text-red-600 font-medium transition-colors flex items-center space-x-1"
              >
                <Home className="w-4 h-4" />
                <span>Accueil</span>
              </Link>

              {/* Menu déroulant pour Signalements */}
              <div className="relative">
                <button
                  onClick={toggleSignalementMenu}
                  className="px-4 py-2 text-gray-700 rounded-full hover:bg-red-50 hover:text-red-600 font-medium transition-colors flex items-center space-x-1"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Signalements</span>
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${signalementMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {signalementMenuOpen && (
                  <div className="absolute left-0 mt-2 w-56 py-2 bg-white rounded-xl shadow-lg z-10 border border-gray-100 animate-fadeIn">
                    <Link
                      href="/mes-signalements"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 flex items-center justify-between transition-colors"
                      onClick={() => setSignalementMenuOpen(false)}
                    >
                      <span>Mes signalements</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/signalements"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 flex items-center justify-between transition-colors"
                      onClick={() => setSignalementMenuOpen(false)}
                    >
                      <span>Tous les signalements</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>


                  </div>
                )}
              </div>

              <Link
                href="/a-propos"
                className="px-4 py-2 text-gray-700 rounded-full hover:bg-red-50 hover:text-red-600 font-medium transition-colors flex items-center space-x-1"
              >
                <Info className="w-4 h-4" />
                <span>À propos</span>
              </Link>
              <Link
                href="/Signalements/createSignalement"
                className="px-4 py-2 text-white rounded-full bg-gradient-to-r from-red-500 to-indigo-600 hover:from-red-600 hover:to-indigo-700 font-medium transition-all hover:shadow-md flex items-center space-x-1"
              >
                <Plus className="w-4 h-4" />
                <span>Nouveau</span>
              </Link>
            </nav>

            {/* Partie droite */}
            <div className="flex items-center space-x-4">
             
              <Link href="/notifications"
               className="relative p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors">
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                    {unreadCount}
                  </span>
                )}
              </Link>

              {/* Avatar et menu utilisateur */}
              <div className="relative">
                <button
                  onClick={toggleMenu}
                  className="flex items-center space-x-2 p-1 pr-3 rounded-full hover:bg-red-50 transition-colors focus:outline-none"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-indigo-600 flex items-center justify-center text-white font-semibold shadow-md">
                    {initials}
                  </div>
                  <span className="hidden md:inline-block text-sm font-medium text-gray-700">{prenom}</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>

                {/* Menu dropdown */}
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-56 py-2 bg-white rounded-xl shadow-xl z-10 border border-gray-100 animate-fadeIn">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-700">{prenom}</p>
                      <p className="text-xs text-gray-500">{email}</p>
                    </div>

                    <div className="py-1">
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 flex items-center transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        <User className="w-4 h-4 mr-2 text-red-500" />
                        <span>Mon Profil</span>
                      </Link>
                      <Link
                        href="/settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 flex items-center transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        <Settings className="w-4 h-4 mr-2 text-red-500" />
                        <span>Paramètres</span>
                      </Link>
                    </div>

                    <div className="py-1 border-t border-gray-100">
                      <Link
                        method="post"
                        href="/logout"
                        as="button"
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        <span>Déconnexion</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Bouton menu mobile */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Menu mobile */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-slideDown">
              <div className="py-3 px-4 space-y-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="w-4 h-4 text-gray-400" />
                  </div>
                  <input
                    type="search"
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-red-300 text-sm placeholder-gray-400"
                    placeholder="Rechercher..."
                  />
                </div>
               
              <Link
                  href="/Carte"
                  className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 font-medium transition-colors flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Map className="w-4 h-4 mr-2" />
                  <span>Carte</span>
                </Link>

                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 font-medium transition-colors flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Home className="w-4 h-4 mr-2" />
                  <span>Accueil</span>
                </Link>

                {/* Menu déroulant signalements en version mobile */}
                <div className="block">
                  <button
                    onClick={toggleMobileSignalementMenu}
                    className="w-full px-4 py-2 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 font-medium transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Signalements</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSignalementMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileSignalementMenuOpen && (
                    <div className="pl-8 mt-1 space-y-1 bg-gray-50 rounded-lg">
                      <Link
                        href="/mes-signalements"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Mes signalements
                      </Link>
                      <Link
                        href="/signalements"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Tous les signalements
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/about"
                  className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 font-medium transition-colors flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Info className="w-4 h-4 mr-2" />
                  <span>À propos</span>
                </Link>
                <Link
                  href="/Signalements/createSignalement"
                  className="block px-4 py-2 text-white rounded-lg bg-gradient-to-r from-red-500 to-indigo-600 font-medium transition-all flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  <span>Nouveau Signalement</span>
                </Link>
              </div>
            </div>
          )}
        </header>

        {/* Élément d'espacement pour éviter que le contenu ne soit masqué par le header fixe */}
        <div
          style={{
            height: scrolled ? '64px' : '80px',
            transition: 'height 0.3s'
          }}
          className="w-full"
        />
      </>
    );
  }
}