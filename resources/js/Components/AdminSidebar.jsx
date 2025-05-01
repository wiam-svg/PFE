
// // import React, { useState } from 'react';
// // import { Link, usePage } from '@inertiajs/react';
// // import { Home, Users, Settings, MapPin, Layers3, ClipboardList, FilePlus, ArrowLeftCircle, ChevronDown, ChevronRight } from 'lucide-react';

// // export default function AdminSidebar({ children }) {
  
// //   const { url } = usePage();
// //   const [openMenus, setOpenMenus] = useState({});

// //   const toggleMenu = (index) => {
// //     setOpenMenus(prev => ({
// //       ...prev,
// //       [index]: !prev[index]
// //     }));
// //   };

// //   const links = [
// //     { label: 'Tableau de bord', href: '/admin/dashboard', icon: <Home size={18} /> },
// //     {
// //       label: 'Catégories', children: [
// //         { label: 'Créer une catégorie', href: '/create_categories', icon: <FilePlus size={16} /> },
// //         { label: 'Liste des catégories', href: '/ListCategories', icon: <ClipboardList size={16} /> },
// //       ]
// //     },
// //     { label: 'Utilisateurs', href: '/admin/users', icon: <Users size={18} /> },
// //     {
// //       label: 'Signalements', children: [
// //         { label: 'Non assignés', href: '/admin/signalement_nonassigne', icon: <Layers3 size={16} /> },
// //         { label: 'Assignations', href: '/admin/assignements', icon: <ClipboardList size={16} /> },
// //         { label: 'Terminées', href: '/admin/interventions/terminees', icon: <ClipboardList size={16} /> },
// //       ]
// //     },
// //     { label: 'Voir la carte', href: '/carte', icon: <MapPin size={18} /> },
// //     { label: 'Retour au site', href: '/', icon: <ArrowLeftCircle size={18} /> },
// //   ];

// //   const isActive = (href) => url === href;

// //   return (
// //     <div className="flex min-h-screen">
// //       {/* Sidebar */}
// //       <aside className="w-64 bg-white border-r border-gray-100 shadow-sm flex flex-col">
// //         <div className="p-6 pb-2">
// //           <h2 className="text-lg font-semibold text-red-600">Administration</h2>
// //         </div>
        
// //         <nav className="flex-1 px-3 space-y-1 mt-4">
// //           {links.map((link, idx) =>
// //             link.children ? (
// //               <div key={idx} className="mb-1">
// //                 <button 
// //                   onClick={() => toggleMenu(idx)}
// //                   className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg transition-colors
// //                     ${openMenus[idx] ? 'bg-red-50 text-red-600' : 'text-gray-600 hover:bg-gray-50'}`}
// //                 >
// //                   <div className="flex items-center">
// //                     {link.icon && <span className="mr-2.5 text-red-500">{link.icon}</span>}
// //                     <span className="text-sm font-medium">{link.label}</span>
// //                   </div>
// //                   {openMenus[idx] ? 
// //                     <ChevronDown size={16} className="text-red-500" /> : 
// //                     <ChevronRight size={16} className="text-gray-400" />
// //                   }
// //                 </button>
                
// //                 {openMenus[idx] && (
// //                   <div className="ml-8 mt-1.5 space-y-1.5">
// //                     {link.children.map((sublink, subIdx) => (
// //                       <Link
// //                         key={subIdx}
// //                         href={sublink.href}
// //                         className={`flex items-center py-2 px-3 rounded-lg text-sm transition-colors
// //                           ${isActive(sublink.href) 
// //                             ? 'bg-red-50 text-red-600 font-medium' 
// //                             : 'text-gray-600 hover:bg-gray-50'}`}
// //                       >
// //                         {sublink.icon && <span className="mr-2.5 text-red-400">{sublink.icon}</span>}
// //                         {sublink.label}
// //                       </Link>
// //                     ))}
// //                   </div>
// //                 )}
// //               </div>
// //             ) : (
// //               <Link
// //                 key={idx}
// //                 href={link.href}
// //                 className={`flex items-center py-2.5 px-3 rounded-lg transition-colors
// //                   ${isActive(link.href) 
// //                     ? 'bg-red-50 text-red-600 font-medium' 
// //                     : 'text-gray-600 hover:bg-gray-50'}`}
// //               >
// //                 {link.icon && <span className="mr-2.5 text-red-500">{link.icon}</span>}
// //                 <span className="text-sm font-medium">{link.label}</span>
// //               </Link>
// //             )
// //           )}
// //         </nav>
// //       </aside>

// //       {/* Main Content */}
// //       <main className="flex-1 bg-gray-50">{children}</main>
// //     </div>
// //   );
// // }


// import React, { useState, useEffect } from 'react';
// import { Link, usePage } from '@inertiajs/react';
// import { 
//   Home, 
//   Users, 
//   Settings, 
//   MapPin, 
//   Layers3, 
//   ClipboardList, 
//   FilePlus, 
//   ArrowLeftCircle, 
//   ChevronDown, 
//   ChevronRight,
//   Menu,
//   X
// } from 'lucide-react';

// export default function AdminSidebar({ children }) {
//   const { url } = usePage();
//   const [openMenus, setOpenMenus] = useState({});
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // Check if screen is mobile on load and when resized
//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     // Initial check
//     checkIfMobile();
    
//     // Add event listener
//     window.addEventListener('resize', checkIfMobile);
    
//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', checkIfMobile);
//     };
//   }, []);

//   const toggleMenu = (index) => {
//     setOpenMenus(prev => ({
//       ...prev,
//       [index]: !prev[index]
//     }));
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(prev => !prev);
//   };

//   const links = [
//     { label: 'Tableau de bord', href: '/admin/dashboard', icon: <Home size={18} /> },
//     {
//       label: 'Catégories', 
//       icon: <ClipboardList size={18} />,
//       children: [
//         { label: 'Créer une catégorie', href: '/create_categories', icon: <FilePlus size={16} /> },
//         { label: 'Liste des catégories', href: '/ListCategories', icon: <ClipboardList size={16} /> },
//       ]
//     },
//     { label: 'Utilisateurs', href: '/admin/users', icon: <Users size={18} /> },
//     {
//       label: 'Signalements', 
//       icon: <Layers3 size={18} />,
//       children: [
//         { label: 'Non assignés', href: '/admin/signalement_nonassigne', icon: <Layers3 size={16} /> },
//         { label: 'Assignations', href: '/admin/assignements', icon: <ClipboardList size={16} /> },
//         { label: 'Terminées', href: '/admin/interventions/terminees', icon: <ClipboardList size={16} /> },
//       ]
//     },
//     { label: 'Voir la carte', href: '/carte', icon: <MapPin size={18} /> },
//     { label: 'Retour au site', href: '/', icon: <ArrowLeftCircle size={18} /> },
//   ];

//   const isActive = (href) => url === href;

//   // Sidebar content (shared between mobile and desktop)
//   const SidebarContent = () => (
//     <nav className="flex-1 px-3 space-y-1 mt-4 overflow-y-auto">
//       {links.map((link, idx) =>
//         link.children ? (
//           <div key={idx} className="mb-1">
//             <button 
//               onClick={() => toggleMenu(idx)}
//               className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg transition-colors
//                 ${openMenus[idx] ? 'bg-red-50 text-red-600' : 'text-gray-600 hover:bg-gray-50'}`}
//             >
//               <div className="flex items-center">
//                 {link.icon && <span className="mr-2.5 text-red-500">{link.icon}</span>}
//                 <span className="text-sm font-medium">{link.label}</span>
//               </div>
//               {openMenus[idx] ? 
//                 <ChevronDown size={16} className="text-red-500" /> : 
//                 <ChevronRight size={16} className="text-gray-400" />
//               }
//             </button>
            
//             {openMenus[idx] && (
//               <div className="ml-8 mt-1.5 space-y-1.5">
//                 {link.children.map((sublink, subIdx) => (
//                   <Link
//                     key={subIdx}
//                     href={sublink.href}
//                     className={`flex items-center py-2 px-3 rounded-lg text-sm transition-colors
//                       ${isActive(sublink.href) 
//                         ? 'bg-red-50 text-red-600 font-medium' 
//                         : 'text-gray-600 hover:bg-gray-50'}`}
//                     onClick={() => isMobile && setMobileMenuOpen(false)}
//                   >
//                     {sublink.icon && <span className="mr-2.5 text-red-400">{sublink.icon}</span>}
//                     {sublink.label}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         ) : (
//           <Link
//             key={idx}
//             href={link.href}
//             className={`flex items-center py-2.5 px-3 rounded-lg transition-colors
//               ${isActive(link.href) 
//                 ? 'bg-red-50 text-red-600 font-medium' 
//                 : 'text-gray-600 hover:bg-gray-50'}`}
//             onClick={() => isMobile && setMobileMenuOpen(false)}
//           >
//             {link.icon && <span className="mr-2.5 text-red-500">{link.icon}</span>}
//             <span className="text-sm font-medium">{link.label}</span>
//           </Link>
//         )
//       )}
//     </nav>
//   );

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Mobile Header with Menu Toggle */}
//       <div className="md:hidden fixed top-0 left-0 right-0 z-20 bg-white border-b border-gray-100 shadow-sm">
//         <div className="flex items-center justify-between p-4">
//           <h2 className="text-lg font-semibold text-red-600">Administration</h2>
//           <button 
//             onClick={toggleMobileMenu} 
//             className="p-1 rounded-lg text-gray-500 hover:bg-gray-100"
//           >
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Sidebar (Overlay) */}
//       {isMobile && (
//         <div 
//           className={`fixed inset-0 z-10 transition-opacity duration-300 ${
//             mobileMenuOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
//           } bg-black`}
//           onClick={() => setMobileMenuOpen(false)}
//         />
//       )}

//       {/* Sidebar - Different styles for mobile vs desktop */}
//       <aside 
//         className={`${
//           isMobile 
//             ? `fixed z-20 top-0 bottom-0 left-0 w-64 mt-16 transform transition-transform duration-300 ease-in-out ${
//                 mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
//               }`
//             : 'w-64 sticky top-0 h-screen'
//         } bg-white border-r border-gray-100 shadow-sm flex flex-col`}
//       >
//         {/* Desktop Header (hidden on mobile) */}
//         <div className="p-6 pb-2 hidden md:block">
//           <h2 className="text-lg font-semibold text-red-600">Administration</h2>
//         </div>
        
//         {/* Sidebar Content - same for both views */}
//         <SidebarContent />
//       </aside>

//       {/* Main Content - with padding-top on mobile */}
//       <main className={`flex-1 ${isMobile ? 'pt-16' : ''}`}>
//         <div className="p-6">
//           {children}
//         </div>
//       </main>
//     </div>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import { Link, usePage } from '@inertiajs/react';
// import { 
//   Home, 
//   Users, 
//   Settings, 
//   MapPin, 
//   Layers3, 
//   ClipboardList, 
//   FilePlus, 
//   ArrowLeftCircle, 
//   ChevronDown, 
//   ChevronRight,
//   Menu,
//   X
// } from 'lucide-react';

// export default function AdminSidebar({ children }) {
//   const { url } = usePage();
//   const [openMenus, setOpenMenus] = useState({});
//   const [isOpen, setIsOpen] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // Détection de l'écran mobile
//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//       if (window.innerWidth < 768) {
//         setIsOpen(false);
//       } else {
//         setIsOpen(true);
//       }
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

//   const toggleSidebar = () => setIsOpen(!isOpen);
//   const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

//   const toggleMenu = (index) => {
//     setOpenMenus(prev => ({
//       ...prev,
//       [index]: !prev[index]
//     }));
//   };

//   const isActive = (href) => url === href;

//   const links = [
//     { label: 'Tableau de bord', href: '/admin/dashboard', icon: <Home size={18} /> },
//     {
//       label: 'Catégories', 
//       icon: <ClipboardList size={18} />,
//       children: [
//         { label: 'Créer une catégorie', href: '/create_categories', icon: <FilePlus size={16} /> },
//         { label: 'Liste des catégories', href: '/ListCategories', icon: <ClipboardList size={16} /> },
//       ]
//     },
//     { label: 'Utilisateurs', href: '/admin/users', icon: <Users size={18} /> },
//     {
//       label: 'Signalements', 
//       icon: <Layers3 size={18} />,
//       children: [
//         { label: 'Non assignés', href: '/admin/signalement_nonassigne', icon: <Layers3 size={16} /> },
//         { label: 'Assignations', href: '/admin/assignements', icon: <ClipboardList size={16} /> },
//         { label: 'Terminées', href: '/admin/interventions/terminees', icon: <ClipboardList size={16} /> },
//       ]
//     },
//     { label: 'Voir la carte', href: '/carte', icon: <MapPin size={18} /> },
//     { label: 'Retour au site', href: '/', icon: <ArrowLeftCircle size={18} /> },
//   ];

//   // Vue mobile
//   const MobileView = () => (
//     <>
//       {/* Barre supérieure pour mobile */}
//       <div className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-40 flex items-center justify-between px-4 py-3 shadow-md">
//         <div className="flex items-center gap-2">
//           <div className="bg-red-50 p-1 rounded-full">
//             <Users size={20} className="text-red-600" />
//           </div>
//           <h2 className="text-lg font-semibold text-red-600">Administration</h2>
//         </div>
//         <button
//           onClick={toggleMobileMenu}
//           className="p-2 rounded-md hover:bg-gray-100 text-gray-600"
//         >
//           {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Menu mobile qui s'ouvre depuis le haut */}
//       {mobileMenuOpen && (
//         <div className="fixed top-14 left-0 right-0 bottom-0 bg-white z-30 overflow-y-auto">
//           <nav className="flex flex-col p-4 gap-3">
//             {links.map((link, idx) =>
//               link.children ? (
//                 <div key={idx}>
//                   <button
//                     onClick={() => toggleMenu(idx)}
//                     className={`flex justify-between w-full items-center p-3 rounded-lg hover:bg-gray-50 ${
//                       openMenus[idx] ? 'bg-red-50 text-red-600' : 'text-gray-700'
//                     }`}
//                   >
//                     <div className="flex items-center">
//                       {link.icon && <span className="mr-3 text-red-500">{link.icon}</span>}
//                       <span className="font-medium">{link.label}</span>
//                     </div>
//                     {openMenus[idx] ? <ChevronDown size={18} className="text-red-500" /> : <ChevronRight size={18} />}
//                   </button>

//                   {openMenus[idx] && (
//                     <div className="ml-4 mt-1 space-y-1 border-l-2 border-red-200 pl-3">
//                       {link.children.map((sublink, subIdx) => (
//                         <Link
//                           key={subIdx}
//                           href={sublink.href}
//                           className={`block p-3 rounded-md hover:bg-gray-50 ${
//                             isActive(sublink.href) ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700'
//                           }`}
//                           onClick={() => setMobileMenuOpen(false)}
//                         >
//                           {sublink.icon && <span className="mr-2.5 text-red-400 inline-block">{sublink.icon}</span>}
//                           {sublink.label}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <Link
//                   key={idx}
//                   href={link.href}
//                   className={`flex items-center p-3 rounded-lg hover:bg-gray-50 ${
//                     isActive(link.href) ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700'
//                   }`}
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {link.icon && <span className="mr-3 text-red-500">{link.icon}</span>}
//                   <span className="font-medium">{link.label}</span>
//                 </Link>
//               )
//             )}
//           </nav>
//         </div>
//       )}

//       {/* Espace pour compenser la hauteur de la barre supérieure */}
//       <div className="h-14"></div>
      
//       {/* Contenu principal */}
//       <main className="p-4">
//         {children}
//       </main>
//     </>
//   );

//   // Vue desktop
//   const DesktopView = () => (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <div className={`${isOpen ? 'w-64' : 'w-20'} bg-white text-gray-700 border-r border-gray-100 shadow-sm flex flex-col transition-all duration-300 sticky top-0`}>
//         {/* Header */}
//         <div className="flex items-center justify-between p-4 border-b border-gray-100">
//           {isOpen && (
//             <div className="flex items-center gap-3">
//               <div className="bg-red-50 p-1 rounded-full">
//                 <Users size={24} className="text-red-600" />
//               </div>
//               <h2 className="text-lg font-semibold text-red-600">Administration</h2>
//             </div>
//           )}
//           <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-100 text-gray-600">
//             <Menu size={24} />
//           </button>
//         </div>

//         {/* Navigation */}
//         <nav className="flex flex-col p-3 gap-2 flex-grow overflow-y-auto">
//           {links.map((link, idx) =>
//             link.children ? (
//               <div key={idx}>
//                 <button
//                   onClick={() => toggleMenu(idx)}
//                   className={`flex justify-between w-full items-center p-3 rounded-lg hover:bg-gray-50 ${
//                     openMenus[idx] ? 'bg-red-50 text-red-600' : 'text-gray-700'
//                   }`}
//                 >
//                   <div className="flex items-center">
//                     {link.icon && <span className="mr-3 text-red-500">{link.icon}</span>}
//                     {isOpen && <span className="font-medium">{link.label}</span>}
//                   </div>
//                   {isOpen && (openMenus[idx] ? <ChevronDown size={16} className="text-red-500" /> : <ChevronRight size={16} />)}
//                 </button>

//                 {openMenus[idx] && isOpen && (
//                   <div className="ml-8 mt-1 space-y-1 bg-gray-50 rounded-md p-2">
//                     {link.children.map((sublink, subIdx) => (
//                       <Link
//                         key={subIdx}
//                         href={sublink.href}
//                         className={`block p-2 rounded-md hover:bg-gray-100 ${
//                           isActive(sublink.href) ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700'
//                         }`}
//                       >
//                         {sublink.icon && <span className="mr-2 text-red-400">{sublink.icon}</span>}
//                         {sublink.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <Link
//                 key={idx}
//                 href={link.href}
//                 className={`flex items-center p-3 rounded-lg hover:bg-gray-50 ${
//                   isActive(link.href) ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700'
//                 }`}
//               >
//                 {link.icon && <span className="mr-3 text-red-500">{link.icon}</span>}
//                 {isOpen && <span className="font-medium">{link.label}</span>}
//               </Link>
              
//             )
//           )}
//         </nav>
//       </div>

//       {/* Contenu principal */}
//       <main className="flex-1 bg-gray-50 p-6">
//         {children}
//       </main>
//     </div>
//   );

//   // Rendu conditionnel en fonction de la taille de l'écran
//   return isMobile ? <MobileView /> : <DesktopView />;
// }

import React, { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { 
  Home, 
  Users, 
  Settings, 
  MapPin, 
  Layers3, 
  ClipboardList, 
  FilePlus, 
  ArrowLeftCircle, 
  ChevronDown, 
  ChevronRight,
  Menu,
  X,
  User,
  LogOut
} from 'lucide-react';

export default function AdminSidebar({ children }) {
  const { url } = usePage();
  const [openMenus, setOpenMenus] = useState({});
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Détection de l'écran mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    // Vérifier au chargement
    checkIfMobile();

    // Ajouter un écouteur d'événement pour le redimensionnement
    window.addEventListener('resize', checkIfMobile);

    // Nettoyer l'écouteur d'événement lors du démontage
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const toggleMenu = (index) => {
    setOpenMenus(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const isActive = (href) => url === href;

  const links = [
    { label: 'Tableau de bord', href: '/admin/dashboard', icon: <Home size={18} /> },
    {
      label: 'Catégories', 
      icon: <ClipboardList size={18} />,
      children: [
        { label: 'Créer une catégorie', href: '/create_categories', icon: <FilePlus size={16} /> },
        { label: 'Liste des catégories', href: '/ListCategories', icon: <ClipboardList size={16} /> },
      ]
    },
    { label: 'Utilisateurs', href: '/admin/users', icon: <Users size={18} /> },
    {
      label: 'Signalements', 
      icon: <Layers3 size={18} />,
      children: [
        { label: 'Non assignés', href: '/admin/signalement_nonassigne', icon: <Layers3 size={16} /> },
        { label: 'Assignations', href: '/admin/assignements', icon: <ClipboardList size={16} /> },
        { label: 'Terminées', href: '/admin/interventions/terminees', icon: <ClipboardList size={16} /> },
      ]
    },
    { label: 'Voir la carte', href: '/carte', icon: <MapPin size={18} /> },
    { label: 'Retour au site', href: '/', icon: <ArrowLeftCircle size={18} /> },
  ];

  // Vue mobile
  const MobileView = () => (
    <>
      {/* Barre supérieure pour mobile */}
      <div className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-40 flex items-center justify-between px-4 py-3 shadow-md">
        <div className="flex items-center gap-2">
          <div className="bg-red-50 p-1 rounded-full">
            <Users size={20} className="text-red-600" />
          </div>
          <h2 className="text-lg font-semibold text-red-600">Administration</h2>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-md hover:bg-gray-100 text-gray-600"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile qui s'ouvre depuis le haut */}
      {mobileMenuOpen && (
        <div className="fixed top-14 left-0 right-0 bottom-0 bg-white z-30 overflow-y-auto">
          <nav className="flex flex-col p-4 gap-3">
            {links.map((link, idx) =>
              link.children ? (
                <div key={idx}>
                  <button
                    onClick={() => toggleMenu(idx)}
                    className={`flex justify-between w-full items-center p-3 rounded-lg hover:bg-gray-50 ${
                      openMenus[idx] ? 'bg-red-50 text-red-600' : 'text-gray-700'
                    }`}
                  >
                    <div className="flex items-center">
                      {link.icon && <span className="mr-3 text-red-500">{link.icon}</span>}
                      <span className="font-medium">{link.label}</span>
                    </div>
                    {openMenus[idx] ? <ChevronDown size={18} className="text-red-500" /> : <ChevronRight size={18} />}
                  </button>

                  {openMenus[idx] && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-red-200 pl-3">
                      {link.children.map((sublink, subIdx) => (
                        <Link
                          key={subIdx}
                          href={sublink.href}
                          className={`block p-3 rounded-md hover:bg-gray-50 ${
                            isActive(sublink.href) ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sublink.icon && <span className="mr-2.5 text-red-400 inline-block">{sublink.icon}</span>}
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={idx}
                  href={link.href}
                  className={`flex items-center p-3 rounded-lg hover:bg-gray-50 ${
                    isActive(link.href) ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.icon && <span className="mr-3 text-red-500">{link.icon}</span>}
                  <span className="font-medium">{link.label}</span>
                </Link>
              )
            )}
            
            {/* Nouvelles options ajoutées */}
            <Link
              href="/profile"
              className={`flex items-center p-3 rounded-lg hover:bg-gray-50 ${
                isActive('/profile') ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <User size={20} className="mr-3 text-red-500" />
              <span className="font-medium">Profile</span>
            </Link>
            <Link
              href="#"
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Settings size={20} className="mr-3 text-red-500" />
              <span className="font-medium">Paramètres</span>
            </Link>
            <Link
              href="/logout"
              method="post"
              as="button"
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 text-gray-700 w-full text-left"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LogOut size={20} className="mr-3 text-red-500" />
              <span className="font-medium">Déconnexion</span>
            </Link>
          </nav>
        </div>
      )}

      {/* Espace pour compenser la hauteur de la barre supérieure */}
      <div className="h-14"></div>
      
      {/* Contenu principal */}
      <main className="p-4">
        {children}
      </main>
    </>
  );

  // Vue desktop
  const DesktopView = () => (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className={`${isOpen ? 'w-64' : 'w-20'} bg-white text-gray-700 border-r border-gray-100 shadow-sm flex flex-col transition-all duration-300 sticky top-0`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          {isOpen && (
            <div className="flex items-center gap-3">
              <div className="bg-red-50 p-1 rounded-full">
                <Users size={24} className="text-red-600" />
              </div>
              <h2 className="text-lg font-semibold text-red-600">Administration</h2>
            </div>
          )}
          <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-100 text-gray-600">
            <Menu size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col p-3 gap-2 flex-grow overflow-y-auto">
          {links.map((link, idx) =>
            link.children ? (
              <div key={idx}>
                <button
                  onClick={() => toggleMenu(idx)}
                  className={`flex justify-between w-full items-center p-3 rounded-lg hover:bg-gray-50 ${
                    openMenus[idx] ? 'bg-red-50 text-red-600' : 'text-gray-700'
                  }`}
                >
                  <div className="flex items-center">
                    {link.icon && <span className="mr-3 text-red-500">{link.icon}</span>}
                    {isOpen && <span className="font-medium">{link.label}</span>}
                  </div>
                  {isOpen && (openMenus[idx] ? <ChevronDown size={16} className="text-red-500" /> : <ChevronRight size={16} />)}
                </button>

                {openMenus[idx] && isOpen && (
                  <div className="ml-8 mt-1 space-y-1 bg-gray-50 rounded-md p-2">
                    {link.children.map((sublink, subIdx) => (
                      <Link
                        key={subIdx}
                        href={sublink.href}
                        className={`block p-2 rounded-md hover:bg-gray-100 ${
                          isActive(sublink.href) ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700'
                        }`}
                      >
                        {sublink.icon && <span className="mr-2 text-red-400">{sublink.icon}</span>}
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={idx}
                href={link.href}
                className={`flex items-center p-3 rounded-lg hover:bg-gray-50 ${
                  isActive(link.href) ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700'
                }`}
              >
                {link.icon && <span className="mr-3 text-red-500">{link.icon}</span>}
                {isOpen && <span className="font-medium">{link.label}</span>}
              </Link>
            )
          )}
          
          {/* Nouvelles options de navigation ajoutées */}
          <div className="mt-auto border-t border-gray-100 pt-2">
            <Link
              href="/profile"
              className={`flex items-center p-3 rounded-lg hover:bg-gray-50 ${
                isActive('/profile') ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700'
              }`}
            >
              <User size={20} className="text-red-500" />
              {isOpen && <span className="ml-3 font-medium">Profile</span>}
            </Link>
            <Link
              href="#"
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 text-gray-700"
            >
              <Settings size={20} className="text-red-500" />
              {isOpen && <span className="ml-3 font-medium">Paramètres</span>}
            </Link>
            <Link
              href="/logout"
              method="post"
              as="button"
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 text-gray-700 w-full text-left"
            >
              <LogOut size={20} className="text-red-500" />
              {isOpen && <span className="ml-3 font-medium">Déconnexion</span>}
            </Link>
          </div>
        </nav>
      </div>

      {/* Contenu principal */}
      <main className="flex-1 bg-gray-50 p-6">
        {children}
      </main>
    </div>
  );

  // Rendu conditionnel en fonction de la taille de l'écran
  return isMobile ? <MobileView /> : <DesktopView />;
}