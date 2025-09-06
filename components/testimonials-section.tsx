import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Diretor de TI - Casino Royal",
    content:
      "O BM Métodos descobriu vulnerabilidades críticas que passaram despercebidas por anos. Sua expertise salvou milhões em possíveis perdas.",
    rating: 5,
  },
  {
    name: "Ana Rodriguez",
    role: "CEO - Golden Palace Gaming",
    content:
      "Trabalho impecável! Identificaram falhas no nosso sistema de slots que poderiam ter causado sérios problemas. Equipe altamente qualificada.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    role: "CTO - Vegas Online",
    content:
      "A auditoria completa do BM Métodos nos deu total confiança na segurança dos nossos jogos. Relatórios detalhados e soluções eficazes.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-4xl mb-4">
            O que Nossos <span className="text-primary">Clientes</span> Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A confiança dos maiores cassinos do mercado é nossa maior conquista. Veja depoimentos de quem protege seus
            sistemas conosco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div className="border-t border-primary/20 pt-4">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
