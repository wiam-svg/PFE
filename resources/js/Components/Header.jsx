import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Plus, Shield, User, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  // Mock user state - would be connected to authentication
  const [user, setUser] = useState<null | { role: 'user' | 'admin' | 'agent' | null }>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-200 ${
      isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
    }`}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-moroccan-red" />
            <span className="text-xl font-bold">Repare<span className="text-moroccan-green">Bladi</span></span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/map" className="text-foreground/80 hover:text-foreground transition">
            Carte
          </Link>
          <Link to="/reports" className="text-foreground/80 hover:text-foreground transition">
            Signalements
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-foreground transition">
            À propos
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    Mon compte
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link to="/profile">
                        <UserRound className="mr-2 h-4 w-4" />
                        <span>Profil</span>
                      </Link>
                    </DropdownMenuItem>
                    {user.role === 'admin' && (
                      <DropdownMenuItem asChild>
                        <Link to="/admin">
                          <Shield className="mr-2 h-4 w-4" />
                          <span>Administration</span>
                        </Link>
                      </DropdownMenuItem>
                    )}
                    {user.role === 'agent' && (
                      <DropdownMenuItem asChild>
                        <Link to="/agent">
                          <Shield className="mr-2 h-4 w-4" />
                          <span>Espace Agent</span>
                        </Link>
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    Déconnexion
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" className="bg-moroccan-red hover:bg-moroccan-red/90" asChild>
                <Link to="/report/new">
                  <Plus className="h-4 w-4 mr-2" />
                  Signaler
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" size="sm" asChild>
                <Link to="/login">
                  <User className="h-4 w-4 mr-2" />
                  Connexion
                </Link>
              </Button>
              <Button size="sm" className="bg-moroccan-red hover:bg-moroccan-red/90" asChild>
                <Link to="/report/new">
                  <Plus className="h-4 w-4 mr-2" />
                  Signaler
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
