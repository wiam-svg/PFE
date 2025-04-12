
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LogOut, Menu, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./Sidebar";

export function Header() {
  return (
    <header className="bg-moroccan-red text-white border-b w-full">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/admin" className="flex items-center gap-2">
            <span className="text-xl font-bold">
              RepareBladi<span className="font-normal"> | Administration</span>
            </span>
          </Link>
        </div>
        
        {/* Mobile sidebar */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <Sidebar />
          </SheetContent>
        </Sheet>
        
        <div className="flex items-center gap-4">
          <span className="hidden md:inline-block text-sm">
            Administrateur: Ahmed Mourad
          </span>
          <Button variant="ghost" className="text-white" size="sm" asChild>
            <Link to="/profile">
              <User className="h-4 w-4 mr-2" />
              Profil
            </Link>
          </Button>
          <Button variant="ghost" className="text-white" size="sm">
            <LogOut className="h-4 w-4 mr-2" />
            Déconnexion
          </Button>
        </div>
      </div>
    </header>
  );
}
