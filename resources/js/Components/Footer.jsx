import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-moroccan-dark text-white py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-moroccan-red" />
              <span className="text-xl font-bold">Repare<span className="text-moroccan-green">Bladi</span></span>
            </div>
            <p className="text-white/70 mb-4 max-w-md">
              Une plateforme citoyenne pour signaler et résoudre les problèmes locaux au Maroc, renforçant la collaboration entre citoyens et autorités.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/map" className="text-white/70 hover:text-white transition">
                  Carte
                </Link>
              </li>
              <li>
                <Link to="/reports" className="text-white/70 hover:text-white transition">
                  Signalements
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition">
                  À propos
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Compte</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-white/70 hover:text-white transition">
                  Connexion
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-white/70 hover:text-white transition">
                  Inscription
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-white/70 hover:text-white transition">
                  Mon profil
                </Link>
              </li>
              <li>
                <Link to="/report/new" className="text-white/70 hover:text-white transition">
                  Créer un signalement
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} RepareBladi. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
