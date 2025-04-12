
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin, Users, Clock } from "lucide-react";

export function StatsSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre impact au Maroc</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Grâce à la collaboration entre citoyens et autorités, nous améliorons la qualité de vie de tous les Marocains
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            icon={<MapPin className="h-8 w-8 text-moroccan-red" />}
            value="12,456"
            label="Problèmes signalés"
          />
          <StatCard 
            icon={<CheckCircle className="h-8 w-8 text-moroccan-green" />}
            value="8,721"
            label="Problèmes résolus"
          />
          <StatCard 
            icon={<Users className="h-8 w-8 text-moroccan-blue" />}
            value="5,280"
            label="Utilisateurs actifs"
          />
          <StatCard 
            icon={<Clock className="h-8 w-8 text-moroccan-ochre" />}
            value="72h"
            label="Temps moyen de résolution"
          />
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center text-center p-6">
        <div className="rounded-full bg-muted p-3 mb-4">
          {icon}
        </div>
        <h3 className="text-3xl font-bold mb-1">{value}</h3>
        <p className="text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  );
}
