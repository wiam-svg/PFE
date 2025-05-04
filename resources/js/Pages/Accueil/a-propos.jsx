import AppLayout from "@/Layouts/AppLayout";
import { MapPin, MessageSquare, Clock, Users, Award, ChevronRight } from "lucide-react";
import { Link } from "@inertiajs/react";

const AboutPage = () => {
  return (
    <AppLayout>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          {/* Hero Section avec style marocain */}
          <section className="bg-gradient-to-br from-red-600 to-indigo-700 text-white py-20 md:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-12 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center p-2 bg-red-500 rounded-full mb-6">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  À propos de <span className="text-yellow-300">RepareBladi</span>
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  Une plateforme citoyenne et collaborative conçue pour permettre aux habitants du Maroc 
                  de signaler facilement les problèmes rencontrés dans leur environnement local.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/signalements" 
                    className="px-6 py-3 rounded-full bg-white text-red-600 font-medium hover:bg-red-50 transition-all shadow-lg hover:shadow-xl flex items-center"
                  >
                    Voir les signalements
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link 
                    href="/Signalements/createSignalement" 
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 font-medium hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg hover:shadow-xl"
                  >
                    Nouveau signalement
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Comment ça fonctionne</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  RepareBladi simplifie le processus de signalement des problèmes urbains et facilite leur résolution
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Localisez</h3>
                  <p className="text-gray-600">Indiquez l'emplacement précis du problème sur la carte interactive</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Signalez</h3>
                  <p className="text-gray-600">Décrivez le problème et ajoutez des photos pour le documenter</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                    <Clock className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Suivez</h3>
                  <p className="text-gray-600">Recevez des mises à jour en temps réel sur l'état de votre signalement</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Collaborez</h3>
                  <p className="text-gray-600">Rejoignez d'autres citoyens pour renforcer l'impact communautaire</p>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center justify-center p-2 bg-red-100 rounded-full mb-6">
                    <Award className="h-6 w-6 text-red-600" />
                  </div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Notre mission</h2>
                  <p className="text-gray-600 mb-6">
                    L'objectif principal de RepareBladi est de renforcer la communication entre les citoyens et les 
                    autorités locales en facilitant le signalement et le suivi des incidents, tout en favorisant 
                    l'engagement communautaire pour améliorer la qualité de vie dans les quartiers.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Nous croyons qu'un environnement urbain bien entretenu contribue au bien-être de tous les citoyens
                    et renforce le sentiment d'appartenance à la communauté.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <div className="h-2 w-2 rounded-full bg-green-600"></div>
                      </div>
                      <p className="text-gray-700 font-medium">Transparence dans le suivi des signalements</p>
                    </div>
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <div className="h-2 w-2 rounded-full bg-green-600"></div>
                      </div>
                      <p className="text-gray-700 font-medium">Collaboration entre citoyens et autorités</p>
                    </div>
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <div className="h-2 w-2 rounded-full bg-green-600"></div>
                      </div>
                      <p className="text-gray-700 font-medium">Amélioration continue de notre cadre de vie</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-lg z-0"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-100 rounded-lg z-0"></div>
                  <img 
                    src="/api/placeholder/800/600" 
                    alt="Paysage urbain au Maroc" 
                    className="rounded-lg shadow-xl relative z-10 w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Foire aux questions</h2>
                  <p className="text-gray-600">Tout ce que vous devez savoir sur RepareBladi</p>
                </div>
                
                <div className="space-y-6 mt-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow transition-shadow duration-300">
                    <h3 className="text-xl font-medium mb-2 text-gray-900">Qui peut utiliser RepareBladi ?</h3>
                    <p className="text-gray-600">
                      Tous les citoyens marocains peuvent utiliser RepareBladi gratuitement. L'inscription nécessite 
                      simplement une adresse e-mail ou un numéro de téléphone valide pour la vérification.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow transition-shadow duration-300">
                    <h3 className="text-xl font-medium mb-2 text-gray-900">Comment les autorités sont-elles impliquées ?</h3>
                    <p className="text-gray-600">
                      RepareBladi travaille en partenariat avec les municipalités et autorités locales qui reçoivent des 
                      notifications lorsque des problèmes sont signalés dans leur juridiction. Les autorités peuvent 
                      s'inscrire sur la plateforme pour gérer les signalements.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow transition-shadow duration-300">
                    <h3 className="text-xl font-medium mb-2 text-gray-900">Est-ce que RepareBladi garantit la résolution de tous les problèmes ?</h3>
                    <p className="text-gray-600">
                      RepareBladi facilite la communication et le suivi mais ne peut pas garantir que tous les problèmes 
                      seront résolus. La résolution dépend des autorités compétentes et des ressources disponibles.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow transition-shadow duration-300">
                    <h3 className="text-xl font-medium mb-2 text-gray-900">Comment puis-je signaler un problème urgent ?</h3>
                    <p className="text-gray-600">
                      Pour les urgences réelles (dangers immédiats, situations mettant en danger des vies), nous recommandons 
                      toujours de contacter directement les services d'urgence appropriés. RepareBladi permet de signaler ces 
                      problèmes avec une priorité élevée, mais n'est pas un substitut aux numéros d'urgence.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow transition-shadow duration-300">
                    <h3 className="text-xl font-medium mb-2 text-gray-900">Mes informations personnelles sont-elles protégées ?</h3>
                    <p className="text-gray-600">
                      Oui, RepareBladi prend la protection des données très au sérieux. Vos informations personnelles ne sont 
                      pas partagées publiquement et seules les autorités concernées y ont accès pour la résolution des problèmes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-br from-red-600 to-indigo-700 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern opacity-10"></div>
            <div className="absolute top-0 left-0 w-full h-12 bg-gray-50" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Contribuez à l'amélioration de votre communauté
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Rejoignez des milliers de citoyens qui transforment positivement leur environnement 
                  à travers le Maroc.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    href="/register" 
                    className="px-8 py-3 rounded-full bg-yellow-400 text-red-900 font-medium hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl"
                  >
                    Créer un compte
                  </Link>
                  <Link 
                    href="/Signalements/createSignalement" 
                    className="px-8 py-3 rounded-full bg-white text-red-600 font-medium hover:bg-red-50 transition-all shadow-lg hover:shadow-xl"
                  >
                    Signaler un problème
                  </Link>
                </div>
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">1500+</div>
                    <div className="text-white/80">Problèmes signalés</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">850+</div>
                    <div className="text-white/80">Problèmes résolus</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">30+</div>
                    <div className="text-white/80">Municipalités</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">5000+</div>
                    <div className="text-white/80">Utilisateurs actifs</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Testimonials Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ce que disent nos utilisateurs</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Des témoignages de citoyens et d'agents municipaux qui utilisent RepareBladi
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4 text-lg font-bold text-red-600">
                      MA
                    </div>
                    <div>
                      <h4 className="font-medium">Mohamed A.</h4>
                      <p className="text-sm text-gray-500">Citoyen, Casablanca</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "J'ai signalé un nid-de-poule dangereux près de l'école de mes enfants. En moins d'une semaine, 
                    il a été réparé! C'est formidable de voir que nos signalements sont pris au sérieux."
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4 text-lg font-bold text-red-600">
                      LB
                    </div>
                    <div>
                      <h4 className="font-medium">Laila B.</h4>
                      <p className="text-sm text-gray-500">Agent Municipal, Rabat</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "RepareBladi nous aide à mieux organiser nos interventions et à prioriser les problèmes les plus urgents. 
                    La communication avec les citoyens est désormais beaucoup plus fluide."
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4 text-lg font-bold text-red-600">
                      YE
                    </div>
                    <div>
                      <h4 className="font-medium">Youssef E.</h4>
                      <p className="text-sm text-gray-500">Entrepreneur, Marrakech</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Cette plateforme a vraiment révolutionné la façon dont nous interagissons avec notre ville. 
                    Plus besoin de procédures administratives compliquées pour signaler un problème!"
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      
      {/* Styles CSS intégrés pour les motifs marocains */}
      <style jsx>{`
        .bg-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </AppLayout>
  );
};

export default AboutPage;
