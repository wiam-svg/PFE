

// import React, { useState, useEffect } from 'react';
// import { Link, usePage } from '@inertiajs/react';
// import { 
//   Home, 
//   Users, 
//   Archive, 
//   MapPin, 
//   Layers3, 
//   ClipboardList, 
//   FilePlus, 
//   ArrowLeftCircle, 
//   ChevronDown, 
//   ChevronRight,
//   Menu,
//   X,
//   User,
//   LogOut,
//   Bell
// } from 'lucide-react';

// export default function AdminSidebar({ children }) {
//   const { url } = usePage();
//   const { unreadCount } = usePage().props;
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
//     { label: 'Voir la carte', href: '/Carte', icon: <MapPin size={18} /> },
//     { label: 'Retour au site', href: '/', icon: <ArrowLeftCircle size={18} /> },
//     // {label: 'Notifications', href: '/notifications', icon: <Bell size={18} /> },
//     {
//       label: 'Notifications',
//       href: '/notifications',
//       icon: (
//         <div className="relative">
//           <Bell size={18} />
//           {unreadCount > 0 && (
//             <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
//               {unreadCount}
//             </span>
//           )}
//         </div>
//       ),
//     },
    
    
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
            
//             {/* Nouvelles options ajoutées */}
//             <Link
//               href="/profile"
//               className={`flex items-center p-3 rounded-lg hover:bg-gray-50 ${
//                 isActive('/profile') ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700'
//               }`}
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               <User size={20} className="mr-3 text-red-500" />
//               <span className="font-medium">Profile</span>
//             </Link>
//             <Link
//               href="/archives"
//               className="flex items-center p-3 rounded-lg hover:bg-gray-50 text-gray-700"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               <Archive size={20} className="mr-3 text-red-500" />
//               <span className="font-medium">Archives</span>
//             </Link>
//             <Link
//               href="/logout"
//               method="post"
//               as="button"
//               className="flex items-center p-3 rounded-lg hover:bg-gray-50 text-gray-700 w-full text-left"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               <LogOut size={20} className="mr-3 text-red-500" />
//               <span className="font-medium">Déconnexion</span>
//             </Link>
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
          
//           {/* Nouvelles options de navigation ajoutées */}
//           <div className="mt-auto border-t border-gray-100 pt-2">
//             <Link
//               href="/profile"
//               className={`flex items-center p-3 rounded-lg hover:bg-gray-50 ${
//                 isActive('/profile') ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700'
//               }`}
//             >
//               <User size={20} className="text-red-500" />
//               {isOpen && <span className="ml-3 font-medium">Profile</span>}
//             </Link>
//             <Link
//               href="/archives"
//               className="flex items-center p-3 rounded-lg hover:bg-gray-50 text-gray-700"
//             >
//               <Archive size={20} className="text-red-500" />
//               {isOpen && <span className="ml-3 font-medium">Archives</span>}
//             </Link>
//             <Link
//               href="/logout"
//               method="post"
//               as="button"
//               className="flex items-center p-3 rounded-lg hover:bg-gray-50 text-gray-700 w-full text-left"
//             >
//               <LogOut size={20} className="text-red-500" />
//               {isOpen && <span className="ml-3 font-medium">Déconnexion</span>}
//             </Link>
//           </div>
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
import { useTranslation } from 'react-i18next';
import { 
  Home, 
  Users, 
  Archive, 
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
  LogOut,
  Bell
} from 'lucide-react';

export default function AdminSidebar({ children }) {
  const { url } = usePage();
  const { unreadCount } = usePage().props;
  const { t } = useTranslation();
  const [openMenus, setOpenMenus] = useState({});
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

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
    { 
      label: t('admin_sidebar.dashboard'), 
      href: '/admin/dashboard', 
      icon: <Home size={18} /> 
    },
    {
      label: t('admin_sidebar.categories'), 
      icon: <ClipboardList size={18} />,
      children: [
        { 
          label: t('admin_sidebar.create_category'), 
          href: '/create_categories', 
          icon: <FilePlus size={16} /> 
        },
        { 
          label: t('admin_sidebar.category_list'), 
          href: '/ListCategories', 
          icon: <ClipboardList size={16} /> 
        },
      ]
    },
    { 
      label: t('admin_sidebar.users'), 
      href: '/admin/users', 
      icon: <Users size={18} /> 
    },
    {
      label: t('admin_sidebar.reports'), 
      icon: <Layers3 size={18} />,
      children: [
        { 
          label: t('admin_sidebar.unassigned'), 
          href: '/admin/signalement_nonassigne', 
          icon: <Layers3 size={16} /> 
        },
        { 
          label: t('admin_sidebar.assignments'), 
          href: '/admin/assignements', 
          icon: <ClipboardList size={16} /> 
        },
        { 
          label: t('admin_sidebar.completed'), 
          href: '/admin/interventions/terminees', 
          icon: <ClipboardList size={16} /> 
        },
      ]
    },
    { 
      label: t('admin_sidebar.view_map'), 
      href: '/Carte', 
      icon: <MapPin size={18} /> 
    },
    { 
      label: t('admin_sidebar.back_to_site'), 
      href: '/', 
      icon: <ArrowLeftCircle size={18} /> 
    },
    {
      label: t('admin_sidebar.notifications'),
      href: '/notifications',
      icon: (
        <div className="relative">
          <Bell size={18} />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
              {unreadCount}
            </span>
          )}
        </div>
      ),
    },
  ];

  const MobileView = () => (
    <>
      <div className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-40 flex items-center justify-between px-4 py-3 shadow-md">
        <div className="flex items-center gap-2">
          <div className="bg-red-50 p-1 rounded-full">
            <Users size={20} className="text-red-600" />
          </div>
          <h2 className="text-lg font-semibold text-red-600">
            {t('admin_sidebar.admin_panel')}
          </h2>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-md hover:bg-gray-100 text-gray-600"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

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
            
            <Link
              href="/profile"
              className={`flex items-center p-3 rounded-lg hover:bg-gray-50 ${
                isActive('/profile') ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <User size={20} className="mr-3 text-red-500" />
              <span className="font-medium">{t('admin_sidebar.profile')}</span>
            </Link>
            <Link
              href="/archives"
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Archive size={20} className="mr-3 text-red-500" />
              <span className="font-medium">{t('admin_sidebar.archives')}</span>
            </Link>
            <Link
              href="/logout"
              method="post"
              as="button"
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 text-gray-700 w-full text-left"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LogOut size={20} className="mr-3 text-red-500" />
              <span className="font-medium">{t('admin_sidebar.logout')}</span>
            </Link>
          </nav>
        </div>
      )}

      <div className="h-14"></div>
      
      <main className="p-4">
        {children}
      </main>
    </>
  );

  const DesktopView = () => (
    <div className="flex min-h-screen">
      <div className={`${isOpen ? 'w-64' : 'w-20'} bg-white text-gray-700 border-r border-gray-100 shadow-sm flex flex-col transition-all duration-300 sticky top-0`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          {isOpen && (
            <div className="flex items-center gap-3">
              <div className="bg-red-50 p-1 rounded-full">
                <Users size={24} className="text-red-600" />
              </div>
              <h2 className="text-lg font-semibold text-red-600">
                {t('admin_sidebar.admin_panel')}
              </h2>
            </div>
          )}
          <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-100 text-gray-600">
            <Menu size={24} />
          </button>
        </div>

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
          
          <div className="mt-auto border-t border-gray-100 pt-2">
            <Link
              href="/profile"
              className={`flex items-center p-3 rounded-lg hover:bg-gray-50 ${
                isActive('/profile') ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700'
              }`}
            >
              <User size={20} className="text-red-500" />
              {isOpen && <span className="ml-3 font-medium">{t('admin_sidebar.profile')}</span>}
            </Link>
            <Link
              href="/archives"
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 text-gray-700"
            >
              <Archive size={20} className="text-red-500" />
              {isOpen && <span className="ml-3 font-medium">{t('admin_sidebar.archives')}</span>}
            </Link>
            <Link
              href="/logout"
              method="post"
              as="button"
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 text-gray-700 w-full text-left"
            >
              <LogOut size={20} className="text-red-500" />
              {isOpen && <span className="ml-3 font-medium">{t('admin_sidebar.logout')}</span>}
            </Link>
          </div>
        </nav>
      </div>

      <main className="flex-1 bg-gray-50 p-6">
        {children}
      </main>
    </div>
  );

  return isMobile ? <MobileView /> : <DesktopView />;
}