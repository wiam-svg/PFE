
import { MapPin, CheckCircle, BarChart3, MessageSquare } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <MapPin className="h-10 w-10 text-moroccan-red" />,
      title: "Signalements géolocalisés",
      description: "Signalez précisément les problèmes avec leur emplacement exact sur la carte"
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-moroccan-green" />,
      title: "Suivi en temps réel",
      description: "Suivez l'évolution de vos signalements et recevez des notifications sur leur état"
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-moroccan-blue" />,
      title: "Statistiques communautaires",
      description: "Visualisez les données et l'impact collectif des signalements dans votre région"
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-moroccan-ochre" />,
      title: "Communication directe",
      description: "Échangez avec les autorités et autres citoyens pour résoudre les problèmes ensemble"
    }
  ];

  return (
    <section className="py-16 bg-moroccan-light">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment ça fonctionne</h2>
          <p className="text-muted-foreground">
            RepareBladi simplifie le processus de signalement et de résolution des problèmes locaux
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
