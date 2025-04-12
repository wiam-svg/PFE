
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 bg-moroccan-red text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rejoignez le mouvement citoyen
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Participez à la construction d'un Maroc meilleur en signalant les problèmes
            de votre communauté et en suivant leur résolution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-moroccan-red hover:bg-white/90"
              asChild
            >
              <Link to="/register">
                Créer un compte gratuitement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10"
              asChild
            >
              <Link to="/about">
                En savoir plus
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
