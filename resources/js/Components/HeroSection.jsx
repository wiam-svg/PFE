
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background to-moroccan-light/30">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Améliorons 
              <span className="text-moroccan-red block">notre Maroc</span>
              ensemble
            </h1>
            <p className="text-lg text-muted-foreground md:max-w-md">
              Signalez facilement les problèmes locaux dans votre quartier et participez à 
              l'amélioration de votre communauté au Maroc
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button size="lg" className="bg-moroccan-red hover:bg-moroccan-red/90" asChild>
                <Link to="/report/new">
                  Signaler un problème 
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/map">
                  <MapPin className="mr-2 h-5 w-5" />
                  Explorer la carte
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&w=800&q=80"
              alt="Maroc"
              className="rounded-lg shadow-2xl object-cover h-96 w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 z-20">
              <div className="flex items-center gap-3">
                <div className="bg-green-500/20 rounded-full p-2">
                  <MapPin className="h-5 w-5 text-moroccan-green" />
                </div>
                <div>
                  <p className="font-medium text-sm">542 signalements</p>
                  <p className="text-xs text-muted-foreground">ont été résolus ce mois-ci</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-25"></div>
    </div>
  );
}
