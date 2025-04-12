
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/Components/ui/scroll-area";
import {
  BarChart3,
  FileWarning,
  Home,
  MapPin,
  Settings,
  ShieldAlert,
  UserRound,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const menuItems = [
    {
      title: "Tableau de bord",
      icon: BarChart3,
      path: "/admin",
    },
    {
      title: "Signalements",
      icon: FileWarning,
      path: "/admin/reports",
    },
    {
      title: "Utilisateurs",
      icon: Users,
      path: "/admin/users",
    },
    {
      title: "Agents municipaux",
      icon: ShieldAlert,
      path: "/admin/agents",
    },
    {
      title: "Paramètres",
      icon: Settings,
      path: "/admin/settings",
    },
  ];
  
  return (
    <div className="hidden md:block w-64 bg-muted/10 border-r h-full">
      <ScrollArea className="h-full py-4">
        <div className="space-y-2 px-3">
          <div className="mb-8">
            <h2 className="px-4 text-lg font-semibold">Administration</h2>
            <p className="px-4 text-sm text-muted-foreground">
              Gestion de RepareBladi
            </p>
          </div>
          
          {menuItems.map((item) => (
            <Button
              key={item.path}
              variant="ghost"
              className={cn(
                "w-full justify-start",
                isActive(item.path) && "bg-muted font-medium"
              )}
              asChild
            >
              <Link to={item.path}>
                <item.icon className="h-4 w-4 mr-3" />
                {item.title}
              </Link>
            </Button>
          ))}
          
          <div className="mt-8 pt-4 border-t">
            <Button
              variant="ghost"
              className="w-full justify-start"
              asChild
            >
              <Link to="/">
                <Home className="h-4 w-4 mr-3" />
                Retour au site
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              asChild
            >
              <Link to="/map">
                <MapPin className="h-4 w-4 mr-3" />
                Voir la carte
              </Link>
            </Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
