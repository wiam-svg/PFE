

import React, { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import {
  Menu, Home, Bell, Settings, LogOut, User, Wrench, ChevronDown, ChevronRight,
  History, AlertCircle, X, Database,
} from 'lucide-react';

const AgentSidebar = () => {
  const { auth } = usePage().props;
  const { unreadCount } = usePage().props;
  const url = window.location.pathname;
  const [isOpen, setIsOpen] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
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

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const isActive = (path) => url.includes(path) ? 'bg-green-700 text-white' : '';

  // Vue mobile
  const MobileView = () => (
    <>
      {/* Barre supérieure pour mobile */}
      <div className="fixed top-0 left-0 w-full bg-green-900 text-white z-40 flex items-center justify-between px-4 py-3 shadow-md">
        <div className="flex items-center gap-2">
          <div className="bg-white p-1 rounded-full">
            <User size={20} className="text-green-800" />
          </div>
          <h2 className="text-lg font-semibold">Agent Municipal</h2>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-md hover:bg-green-700"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile qui s'ouvre depuis le haut */}
      {mobileMenuOpen && (
        <div className="fixed top-14 left-0 right-0 bottom-0 bg-green-800 z-30 overflow-y-auto">
          <nav className="flex flex-col p-4 gap-3">
            {/* Tableau de bord */}
            <Link
              href={route('agent.dashboard')}
              className={`flex items-center p-3 rounded-lg hover:bg-green-700 ${isActive('/agent/dashboard')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Database size={22} />
              <span className="ml-3">Tableau de bord</span>
            </Link>

            {/* Intervention (avec submenu) */}
            <div>
              <button
                onClick={() => toggleSubmenu('interventions')}
                className={`flex justify-between w-full items-center p-3 rounded-lg hover:bg-green-700 ${isActive('/agent/interventions') ? 'bg-green-700' : ''}`}
              >
                <div className="flex items-center">
                  <Wrench size={22} />
                  <span className="ml-3">Interventions</span>
                </div>
                {activeSubmenu === 'interventions' ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
              </button>

              {activeSubmenu === 'interventions' && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-green-600 pl-3">
                  <Link
                    href={route('signalements.mes')}
                    className={`block p-3 rounded-md hover:bg-green-700 ${isActive('/interventions/en-cours')}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    En cours
                  </Link>
                  <Link
                    href={route('interventions.terminees')}
                    className={`block p-3 rounded-md hover:bg-green-700 ${isActive('/interventions/terminee')}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Terminée
                  </Link>
                  <Link
                    href={route('interventions.rejetes')}
                    className={`block p-3 rounded-md hover:bg-green-700 ${isActive('/interventions/rejetee')}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Rejetée
                  </Link>
                </div>
              )}
            </div>

            {/* Historique */}
            <Link
              href={route('mon.historique')}
              className={`flex items-center p-3 rounded-lg hover:bg-green-700 ${isActive('/agent/historique')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <History size={22} />
              <span className="ml-3">Historique</span>
            </Link>

            {/* Notifications */}
            <Link
              href='/notifications'
              className={`flex items-center p-3 rounded-lg hover:bg-green-700 ${isActive('/agent/notifications')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Bell size={22} />
              {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                    {unreadCount}
                  </span>
                )}
              <span className="ml-3">Notifications</span>
            </Link>

            <div className="mt-auto pt-6 border-t border-green-700">
              <Link
                href="/profile"
                className="flex items-center p-3 rounded-lg hover:bg-green-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User size={20} />
                
                <span className="ml-3">Profile</span>
              </Link>
              <Link
                href='#'
                className="flex items-center p-3 rounded-lg hover:bg-green-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Settings size={22} />
                <span className="ml-3">Paramètres</span>
              </Link>
              <Link
                href="/logout"
                method="post"
                as="button"
                className="flex items-center p-3 rounded-lg hover:bg-green-700 w-full text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LogOut size={22} />
                <span className="ml-3">Déconnexion</span>
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Espace pour compenser la hauteur de la barre supérieure */}
      <div className="h-14"></div>
    </>
  );

  // Vue desktop
  const DesktopView = () => (
    <div className={`flex flex-col ${isOpen ? 'w-64' : 'w-20'} bg-green-800 text-white min-h-screen transition-all duration-300 sticky top-0`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-green-900 border-b border-green-700">
        {isOpen && (
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-full">
              <User size={24} className="text-green-800" />
            </div>
            <h2 className="text-xl font-semibold">Agent Municipal</h2>
          </div>
        )}
        <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-green-700">
          <Menu size={24} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col p-3 gap-2 flex-grow overflow-y-auto">
        {/* Tableau de bord */}
        <Link
          href={route('agent.dashboard')}
          className={`flex items-center p-3 rounded-lg hover:bg-green-700 ${isActive('/agent/dashboard')}`}
        >
          <Database size={20} />
          {isOpen && <span className="ml-3">Tableau de bord</span>}
        </Link>

        {/* Intervention (avec submenu) */}
        <div>
          <button
            onClick={() => toggleSubmenu('interventions')}
            className={`flex justify-between w-full items-center p-3 rounded-lg hover:bg-green-700 ${isActive('/agent/interventions') ? 'bg-green-700' : ''}`}
          >
            <div className="flex items-center">
              <Wrench size={20} />
              {isOpen && <span className="ml-3">Interventions</span>}
            </div>
            {isOpen && (activeSubmenu === 'interventions' ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
          </button>

          {activeSubmenu === 'interventions' && isOpen && (
            <div className="ml-8 mt-1 space-y-1 bg-green-900 rounded-md p-2">
              <Link
                href={route('signalements.mes')}
                className={`block p-2 rounded-md hover:bg-green-700 ${isActive('/interventions/en-cours')}`}
              >
                En cours
              </Link>
              <Link
                href={route('interventions.terminees')}
                className={`block p-2 rounded-md hover:bg-green-700 ${isActive('/interventions/terminee')}`}
              >
                Terminée
              </Link>
              <Link
                href={route('interventions.rejetes')}
                className={`block p-2 rounded-md hover:bg-green-700 ${isActive('/interventions/rejetee')}`}
              >
                Rejetée
              </Link>
            </div>
          )}
        </div>

        {/* Historique */}
        <Link
          href={route('mon.historique')}
          className={`flex items-center p-3 rounded-lg hover:bg-green-700 ${isActive('/agent/historique')}`}
        >
          <History size={20} />
          {isOpen && <span className="ml-3">Historique</span>}
        </Link>

        {/* Notifications */}
        <Link
          href='/notifications'
          className={`flex items-center p-3 rounded-lg hover:bg-green-700 ${isActive('/agent/notifications')}`}
        >
          <Bell size={20} />
          {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                    {unreadCount}
                  </span>
                )}
          {isOpen && <span className="ml-3">Notifications</span>}
        </Link>
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-green-700 space-y-2">
        <Link
          href="/profile"
          className={`flex items-center p-3 rounded-lg hover:bg-green-700 ${isActive('/agent/historique')}`}
        >
          <User size={20} />
          {isOpen && <span className="ml-3">Profile</span>}
        </Link>

        <Link
          href="#"
          className="flex items-center p-3 rounded-lg hover:bg-green-700"
        >
          <Settings size={20} />
          {isOpen && <span className="ml-3">Paramètres</span>}
        </Link>
        <Link
          href="/logout"
          method="post"
          as="button"
          className="flex items-center p-3 rounded-lg hover:bg-green-700 w-full text-left"
        >
          <LogOut size={20} />
          {isOpen && <span className="ml-3">Déconnexion</span>}
        </Link>
      </div>
    </div>
  );

  // Rendu conditionnel en fonction de la taille de l'écran
  return isMobile ? <MobileView /> : <DesktopView />;
};

export default AgentSidebar;