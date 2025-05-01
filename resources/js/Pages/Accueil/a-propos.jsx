
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// // } from "@/components/ui/card";
// import { Link } from '@inertiajs/react';
// import { ArrowRight, CheckCircle, MapPin, Users, Building } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="bg-gradient-to-b from-moroccan-red to-moroccan-red/90 text-white py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                À propos de RepareBladi
              </h1>
              <p className="text-xl text-white/90 mb-8">
                RepareBladi est une plateforme citoyenne et collaborative conçue pour permettre aux habitants du Maroc 
                de signaler facilement les problèmes rencontrés dans leur environnement local.
              </p>
              {/* <Button className="bg-white text-moroccan-red hover:bg-white/90" asChild>
                <Link to="/register">
                  Rejoindre RepareBladi
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button> */}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Notre mission</h2>
                <p className="text-muted-foreground mb-6">
                  L'objectif principal de RepareBladi est de renforcer la communication entre les citoyens et les 
                  autorités locales en facilitant le signalement et le suivi des incidents, tout en favorisant 
                  l'engagement communautaire pour améliorer la qualité de vie dans les quartiers.
                </p>
                {/* <ul className="space-y-4">
                  {[
                    "Créer un pont direct entre les citoyens et les autorités",
                    "Faciliter le signalement des problèmes urbains",
                    "Améliorer la transparence des actions publiques",
                    "Encourager la participation citoyenne"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-moroccan-green mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul> */}
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80" 
                  alt="Paysage urbain au Maroc" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Comment ça fonctionne</h2>
              <p className="text-muted-foreground">
                RepareBladi connecte les citoyens, les autorités locales et les communautés pour résoudre efficacement 
                les problèmes signalés.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
              {/* <Card className="border-none shadow-md">
                <CardHeader className="pb-3">
                  <div className="bg-moroccan-red/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <MapPin className="h-6 w-6 text-moroccan-red" />
                  </div>
                  <CardTitle>1. Signaler un problème</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Les citoyens signalent les problèmes qu'ils rencontrent dans leur environnement, avec une description, 
                    une localisation précise et des photos.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardHeader className="pb-3">
                  <div className="bg-moroccan-green/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <Building className="h-6 w-6 text-moroccan-green" />
                  </div>
                  <CardTitle>2. Traitement par les autorités</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Les autorités locales reçoivent les signalements, les analysent et mettent en place des actions pour résoudre 
                    les problèmes signalés.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardHeader className="pb-3">
                  <div className="bg-moroccan-blue/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-moroccan-blue" />
                  </div>
                  <CardTitle>3. Collaboration communautaire</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Les citoyens peuvent suivre l'évolution des signalements, commenter, soutenir et s'engager collectivement 
                    pour améliorer leur environnement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}

        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Foire aux questions</h2>
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-medium mb-2">Qui peut utiliser RepareBladi ?</h3>
                  <p className="text-muted-foreground">
                    Tous les citoyens marocains peuvent utiliser RepareBladi gratuitement. L'inscription nécessite 
                    simplement une adresse e-mail ou un numéro de téléphone valide pour la vérification.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Comment les autorités sont-elles impliquées ?</h3>
                  <p className="text-muted-foreground">
                    RepareBladi travaille en partenariat avec les municipalités et autorités locales qui reçoivent des 
                    notifications lorsque des problèmes sont signalés dans leur juridiction. Les autorités peuvent 
                    s'inscrire sur la plateforme pour gérer les signalements.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Est-ce que RepareBladi garantit la résolution de tous les problèmes ?</h3>
                  <p className="text-muted-foreground">
                    RepareBladi facilite la communication et le suivi mais ne peut pas garantir que tous les problèmes 
                    seront résolus. La résolution dépend des autorités compétentes et des ressources disponibles.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Comment puis-je signaler un problème urgent ?</h3>
                  <p className="text-muted-foreground">
                    Pour les urgences réelles (dangers immédiats, situations mettant en danger des vies), nous recommandons 
                    toujours de contacter directement les services d'urgence appropriés. RepareBladi permet de signaler ces 
                    problèmes avec une priorité élevée, mais n'est pas un substitut aux numéros d'urgence.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Mes informations personnelles sont-elles protégées ?</h3>
                  <p className="text-muted-foreground">
                    Oui, RepareBladi prend la protection des données très au sérieux. Vos informations personnelles ne sont 
                    pas partagées publiquement et seules les autorités concernées y ont accès pour la résolution des problèmes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-moroccan-green text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Contribuez à l'amélioration de votre communauté
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Rejoignez des milliers de citoyens qui transforment positivement leur environnement 
                à travers le Maroc.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                {/* <Button
                  size="lg"
                  className="bg-white text-moroccan-green hover:bg-white/90"
                  asChild
                >
                  <Link to="/register">
                    Créer un compte
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10"
                  asChild
                >
                  <Link to="/reports">
                    Explorer les signalements
                  </Link>
                </Button> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default AboutPage;
