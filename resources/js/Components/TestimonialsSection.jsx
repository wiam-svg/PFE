
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Grâce à RepareBladi, j'ai pu signaler un problème d'éclairage dans ma rue et il a été résolu en moins d'une semaine!",
      author: "Sara Alaoui",
      role: "Citoyenne à Casablanca",
      avatar: "SA"
    },
    {
      quote: "En tant que responsable municipal, cette plateforme nous aide à identifier rapidement les problèmes prioritaires dans notre ville.",
      author: "Karim Benani",
      role: "Responsable municipal à Rabat",
      avatar: "KB"
    },
    {
      quote: "RepareBladi a changé la façon dont nous interagissons avec nos autorités locales. C'est un vrai pont entre citoyens et administration.",
      author: "Nadia Tazi",
      role: "Enseignante à Marrakech",
      avatar: "NT"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-moroccan-light/50 to-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que disent nos utilisateurs</h2>
          <p className="text-muted-foreground">
            RepareBladi aide les citoyens et les autorités à collaborer efficacement pour améliorer le quotidien
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="mb-6">
                  <svg
                    className="h-8 w-8 text-moroccan-red opacity-30"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="mb-6 italic text-muted-foreground">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src="" alt={testimonial.author} />
                    <AvatarFallback className="bg-moroccan-green text-white">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
