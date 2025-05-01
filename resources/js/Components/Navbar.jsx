// import { LogOut, Menu, User } from "lucide-react";
// import { Link } from "@inertiajs/react";
// import { usePage } from "@inertiajs/react";

// export default function Navbar() {
//   const { auth } = usePage().props;
//   const role = auth?.user?.role;  // Récupère le rôle de l'utilisateur
//   const username = auth?.user?.nom || "Utilisateur";  // Récupère le nom de l'utilisateur
//   const city = auth?.user?.ville || ""; // Récupère la ville pour l'agent (si applicable)

//   // Styles conditionnels pour la couleur
//   const headerClass = role === 'admin' ? 'bg-red-700' :
//                       role === 'agent_municipal' ? 'bg-green-700' : 
//                       'bg-white text-black';  // Style par défaut pour l'utilisateur

//   const profileLink = (
//     <Link href="/profile" className="flex items-center space-x-1 text-sm hover:underline">
//       <User className="w-4 h-4" />
//       <span>Profil</span>
//     </Link>
//   );

//   const logoutLink = (
//     <Link
//       method="post"
//       href="/logout"
//       as="button"
//       className="flex items-center space-x-1 text-sm hover:underline"
//     >
//       <LogOut className="w-4 h-4" />
//       <span>Déconnexion</span>
//     </Link>
//   );

//   return (
//     <header className={`${headerClass} text-white border-b w-full shadow-sm`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//         {/* Logo + Titre */}
//         <div className="flex items-center space-x-2">
//           <Link href="/" className="text-xl font-bold">
//             {role === 'admin' ? (
//               <>
//                 RepareBladi<span className="font-normal"> | Administration</span>
//               </>
//             ) : role === 'agent_municipal' ? (
//               <>
//                 RepareBladi<span className="font-normal"> | Agent Municipal</span>
//               </>
//             ) : (
//               'RepareBladi'
//             )}
//           </Link>
//         </div>

//         {/* Infos utilisateur + Role */}
//         <div className="flex items-center space-x-4">
//           {/* Afficher info selon le rôle */}
//           <span className="hidden md:inline-block text-sm">
//             {role === 'admin' ? (
//               `Administrateur: ${username}`
//             ) : role === 'agent_municipal' ? (
//               `Agent: ${username} | Zone: ${city}`
//             ) : (
//               `Utilisateur: ${username}`
//             )}
//           </span>

//           {/* Profil et Déconnexion */}
//           {profileLink}
//           {logoutLink}
//         </div>

//         {/* Conditional Links */}
//         {role != 'admin'&&'agent_municipal' && (
//           <div className="flex items-center gap-4">
//             {/* Liens spécifiques pour les utilisateurs */}
//             <Link href="/carte" className="text-sm text-black hover:underline">
//               Carte
//             </Link>
//             <Link href="/signalements" className="text-sm text-black hover:underline">
//               Signalements
//             </Link>
//             <Link href="/about" className="text-sm text-black hover:underline">
//               À propos
//             </Link>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

import { LogOut, User, Settings, Bell } from "lucide-react";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Navbar() {
  const { auth } = usePage().props;
  const role = auth?.user?.role;
  const nom = auth?.user?.nom || "";
  const prenom = auth?.user?.prenom || "";
  const ville = auth?.user?.ville || "";
  const zone = auth?.user?.zone || "";
  const [menuOpen, setMenuOpen] = useState(false);

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
      <header className={`${headerClass} border-b w-full shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              RepareBladi
            </Link>
          </div>

          {/* Navigation au centre */}
          <nav className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/carte" className="text-sm hover:underline">
              Carte
            </Link>
            <Link href="/reports" className="text-sm hover:underline">
              Signalements
            </Link>
            <Link href="/about" className="text-sm hover:underline">
              À propos
            </Link>
          </nav>

          {/* Partie droite */}
          <div className="flex items-center space-x-3">
            {/* Initiales et prénom */}
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold">
                {initials}
              </div>
              <span className="ml-2 hidden md:inline-block">{prenom}</span>
            </div>

            {/* Bouton Signaler */}
            <Link
              href="/signaler"
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
            >
              Signaler
            </Link>

            {/* Menu déroulant */}
            <div className="relative">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    onClick={() => setMenuOpen(false)}
                  >
                    <User className="w-4 h-4 mr-2" />
                    <span>Profil</span>
                  </Link>
                  <Link
                    href="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    <span>Paramètres</span>
                  </Link>
                  <Link
                    method="post"
                    href="/logout"
                    as="button"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    onClick={() => setMenuOpen(false)}
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    <span>Déconnexion</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    );
  }
}



// import { LogOut, User, Settings, Bell, Menu, X } from "lucide-react";
// import { Link } from "@inertiajs/react";
// import { usePage } from "@inertiajs/react";
// import { useState, useEffect } from "react";

// export default function Navbar() {
//   const { auth } = usePage().props;
//   const role = auth?.user?.role;
//   const nom = auth?.user?.nom || "";
//   const prenom = auth?.user?.prenom || "";
//   const ville = auth?.user?.ville || "";
//   const zone = auth?.user?.zone || "";
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // Détection de l'écran mobile
//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     // Vérifier au chargement
//     checkIfMobile();
    
//     // Ajouter un écouteur d'événement pour le redimensionnement
//     window.addEventListener('resize', checkIfMobile);
    
//     // Nettoyer l'écouteur d'événement lors du démontage
//     return () => {
//       window.removeEventListener('resize', checkIfMobile);
//     };
//   }, []);

//   // Obtenir les initiales pour l'avatar
//   const initials = `${nom.charAt(0)}${prenom.charAt(0)}`.toUpperCase();

//   // Définir la couleur du header selon le rôle
//   const headerClass =
//     role === "admin"
//       ? "bg-red-800 text-white"
//       : role === "agent_municipal"
//       ? "bg-green-800 text-white"
//       : "bg-white text-gray-800";

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   // Composant Vue Desktop pour Admin
//   const AdminDesktopView = () => (
//     <div className="hidden md:flex w-full h-16 items-center justify-between">
//       {/* Logo pour Admin */}
//       <div className="flex items-center space-x-2">
//         <Link href="/admin/dashboard" className="text-xl font-bold">
//           RepareBladi <span className="font-normal">| Administration</span>
//         </Link>
//       </div>

//       {/* Infos Admin */}
//       <div className="flex items-center space-x-4">
//         <span className="text-sm">
//           Administrateur: {prenom} {nom}
//         </span>

//         {/* Boutons Admin */}
//         <div className="flex items-center space-x-4">
//           <Link
//             href="/profile"
//             className="flex items-center space-x-1 text-sm hover:underline"
//           >
//             <User className="w-4 h-4" />
//             <span>Profil</span>
//           </Link>
//           <Link
//             method="post"
//             href="/logout"
//             as="button"
//             className="flex items-center space-x-1 text-sm hover:underline"
//           >
//             <LogOut className="w-4 h-4" />
//             <span>Déconnexion</span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );

//   // Composant Vue Mobile pour Admin
//   const AdminMobileView = () => (
//     <div className="md:hidden w-full">
//       <div className="flex items-center justify-between h-16">
//         <Link href="/admin/dashboard" className="text-lg font-bold">
//           RepareBladi
//         </Link>
//         <button
//           onClick={toggleMobileMenu}
//           className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
//         >
//           {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Menu mobile */}
//       {mobileMenuOpen && (
//         <div className="absolute left-0 right-0 bg-red-800 shadow-lg z-50 border-t border-red-700 py-3 px-4 space-y-3">
//           <div className="flex items-center space-x-2 pb-2 border-b border-red-700">
//             <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-red-800 font-semibold">
//               {initials}
//             </div>
//             <div className="flex flex-col">
//               <span className="font-semibold">{prenom} {nom}</span>
//               <span className="text-xs text-red-200">Administrateur</span>
//             </div>
//           </div>
//           <Link
//             href="/profile"
//             className="flex items-center space-x-3 py-2 hover:bg-red-700 rounded-md px-2"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             <User className="w-5 h-5" />
//             <span>Profil</span>
//           </Link>
//           <Link
//             method="post"
//             href="/logout"
//             as="button"
//             className="flex items-center space-x-3 py-2 hover:bg-red-700 rounded-md px-2 w-full text-left"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             <LogOut className="w-5 h-5" />
//             <span>Déconnexion</span>
//           </Link>
//         </div>
//       )}
//     </div>
//   );

//   // Composant Vue Desktop pour Agent Municipal
//   const AgentDesktopView = () => (
//     <div className="hidden md:flex w-full h-16 items-center justify-between">
//       {/* Logo pour Agent Municipal */}
//       <div className="flex items-center space-x-2">
//         <Link href="/agent/dashboard" className="text-xl font-bold">
//           RepareBladi <span className="font-normal">| Agent Municipal</span>
//         </Link>
//       </div>

//       {/* Infos Agent Municipal */}
//       <div className="flex items-center space-x-4">
//         <span className="text-sm">
//           Agent: {prenom} {nom} | Zone: {zone || ville}
//         </span>

//         {/* Boutons Agent Municipal */}
//         <div className="flex items-center space-x-4">
//           <Link
//             href="/profile"
//             className="flex items-center space-x-1 text-sm hover:underline"
//           >
//             <User className="w-4 h-4" />
//             <span>Profil</span>
//           </Link>
//           <Link
//             method="post"
//             href="/logout"
//             as="button"
//             className="flex items-center space-x-1 text-sm hover:underline"
//           >
//             <LogOut className="w-4 h-4" />
//             <span>Déconnexion</span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );

//   // Composant Vue Mobile pour Agent Municipal
//   const AgentMobileView = () => (
//     <div className="md:hidden w-full">
//       <div className="flex items-center justify-between h-16">
//         <Link href="/agent/dashboard" className="text-lg font-bold">
//           RepareBladi
//         </Link>
//         <button
//           onClick={toggleMobileMenu}
//           className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
//         >
//           {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Menu mobile */}
//       {mobileMenuOpen && (
//         <div className="absolute left-0 right-0 bg-green-800 shadow-lg z-50 border-t border-green-700 py-3 px-4 space-y-3">
//           <div className="flex items-center space-x-2 pb-2 border-b border-green-700">
//             <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-green-800 font-semibold">
//               {initials}
//             </div>
//             <div className="flex flex-col">
//               <span className="font-semibold">{prenom} {nom}</span>
//               <span className="text-xs text-green-200">Agent Municipal | {zone || ville}</span>
//             </div>
//           </div>
//           <Link
//             href="/profile"
//             className="flex items-center space-x-3 py-2 hover:bg-green-700 rounded-md px-2"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             <User className="w-5 h-5" />
//             <span>Profil</span>
//           </Link>
//           <Link
//             method="post"
//             href="/logout"
//             as="button"
//             className="flex items-center space-x-3 py-2 hover:bg-green-700 rounded-md px-2 w-full text-left"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             <LogOut className="w-5 h-5" />
//             <span>Déconnexion</span>
//           </Link>
//         </div>
//       )}
//     </div>
//   );

//   // Composant Vue Desktop pour Citoyen
//   const CitoyenDesktopView = () => (
//     <div className="hidden md:flex w-full h-16 items-center justify-between">
//       {/* Logo */}
//       <div className="flex items-center">
//         <Link href="/" className="text-xl font-bold">
//           RepareBladi
//         </Link>
//       </div>

//       {/* Navigation au centre */}
//       <nav className="flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
//         <Link href="/carte" className="text-sm hover:underline">
//           Carte
//         </Link>
//         <Link href="/reports" className="text-sm hover:underline">
//           Signalements
//         </Link>
//         <Link href="/about" className="text-sm hover:underline">
//           À propos
//         </Link>
//       </nav>

//       {/* Partie droite */}
//       <div className="flex items-center space-x-3">
//         {/* Initiales et prénom */}
//         <div className="flex items-center">
//           <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold">
//             {initials}
//           </div>
//           <span className="ml-2">{prenom}</span>
//         </div>

//         {/* Bouton Signaler */}
//         <Link
//           href="/signaler"
//           className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
//         >
//           Signaler
//         </Link>

//         {/* Menu déroulant */}
//         <div className="relative">
//           <button
//             onClick={toggleMenu}
//             className="text-gray-700 hover:text-gray-900 focus:outline-none"
//           >
//             <svg
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M19 9l-7 7-7-7"
//               ></path>
//             </svg>
//           </button>

//           {menuOpen && (
//             <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-md shadow-lg z-10 border border-gray-200">
//               <Link
//                 href="/profile"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 <User className="w-4 h-4 mr-2" />
//                 <span>Profil</span>
//               </Link>
//               <Link
//                 href="/settings"
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 <Settings className="w-4 h-4 mr-2" />
//                 <span>Paramètres</span>
//               </Link>
//               <Link
//                 method="post"
//                 href="/logout"
//                 as="button"
//                 className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 <LogOut className="w-4 h-4 mr-2" />
//                 <span>Déconnexion</span>
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );

//   // Composant Vue Mobile pour Citoyen
//   const CitoyenMobileView = () => (
//     <div className="md:hidden w-full">
//       <div className="flex items-center justify-between h-16">
//         <Link href="/" className="text-lg font-bold">
//           RepareBladi
//         </Link>
//         <div className="flex items-center space-x-2">
//           <Link
//             href="/signaler"
//             className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-xs"
//           >
//             Signaler
//           </Link>
//           <button
//             onClick={toggleMobileMenu}
//             className="p-2 rounded-md focus:outline-none"
//           >
//             {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>
//       </div>

//       {/* Menu mobile */}
//       {mobileMenuOpen && (
//         <div className="absolute left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200 py-3 px-4 space-y-1">
//           <div className="flex items-center space-x-2 pb-2 border-b border-gray-200">
//             <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold">
//               {initials}
//             </div>
//             <span className="font-semibold">{prenom} {nom}</span>
//           </div>
          
//           <Link
//             href="/carte"
//             className="block py-2 text-gray-700 hover:bg-gray-100 rounded-md px-2"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             Carte
//           </Link>
//           <Link
//             href="/reports"
//             className="block py-2 text-gray-700 hover:bg-gray-100 rounded-md px-2"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             Signalements
//           </Link>
//           <Link
//             href="/about"
//             className="block py-2 text-gray-700 hover:bg-gray-100 rounded-md px-2"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             À propos
//           </Link>
          
//           <div className="border-t border-gray-200 pt-2 mt-2">
//             <Link
//               href="/profile"
//               className="flex items-center space-x-2 py-2 text-gray-700 hover:bg-gray-100 rounded-md px-2"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               <User className="w-4 h-4" />
//               <span>Profil</span>
//             </Link>
//             <Link
//               href="/settings"
//               className="flex items-center space-x-2 py-2 text-gray-700 hover:bg-gray-100 rounded-md px-2"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               <Settings className="w-4 h-4" />
//               <span>Paramètres</span>
//             </Link>
//             <Link
//               method="post"
//               href="/logout"
//               as="button"
//               className="flex items-center space-x-2 py-2 text-gray-700 hover:bg-gray-100 rounded-md px-2 w-full text-left"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               <LogOut className="w-4 h-4" />
//               <span>Déconnexion</span>
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <header className={`${headerClass} border-b w-full shadow-sm`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Rendu différent selon le rôle */}
//         {role === "admin" && (
//           <>
//             <AdminDesktopView />
//             <AdminMobileView />
//           </>
//         )}
        
//         {role === "agent_municipal" && (
//           <>
//             <AgentDesktopView />
//             <AgentMobileView />
//           </>
//         )}
        
//         {!["admin", "agent_municipal"].includes(role) && (
//           <>
//             <CitoyenDesktopView />
//             <CitoyenMobileView />
//           </>
//         )}
//       </div>
//     </header>
//   );
// }