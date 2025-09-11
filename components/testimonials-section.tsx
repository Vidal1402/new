import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Eduardo Martins",
    role: "Empresário - Apartamento Cobertura",
    content:
      "Marta encontrou exatamente o que eu procurava. Sua dedicação e conhecimento do mercado de luxo são impressionantes. Processo impecável do início ao fim.",
    rating: 5,
  },
  {
    name: "Patricia Oliveira",
    role: "Médica - Casa de Alto Padrão",
    content:
      "Profissionalismo excepcional! Marta me guiou em cada etapa da compra da minha casa dos sonhos. Atendimento personalizado e resultados que superam expectativas.",
    rating: 5,
  },
  {
    name: "Ricardo Santos",
    role: "Investidor - Portfólio Imobiliário",
    content:
      "Consultoria de altíssimo nível. Marta identificou as melhores oportunidades de investimento e me ajudou a construir um portfólio sólido e rentável.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-secondary/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6">
            O que Nossos <span className="text-primary">Clientes</span> Dizem
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A confiança e satisfação dos nossos clientes são nossa maior conquista. Veja depoimentos de quem encontrou o
            imóvel perfeito conosco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative border-primary/30 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:scale-105 bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-8 lg:p-10">
                <Quote className="h-10 w-10 text-primary mb-6" />

                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">"{testimonial.content}"</p>

                <div className="border-t border-primary/30 pt-6">
                  <p className="font-serif font-semibold text-primary text-lg">{testimonial.name}</p>
                  <p className="text-muted-foreground mt-1">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
