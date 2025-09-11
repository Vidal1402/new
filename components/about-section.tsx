import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Heart, Shield } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif font-black text-4xl md:text-5xl mb-6 text-balance text-foreground">
              Conheça <span className="text-primary">Guilherme Vidal</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Especialista em imóveis de alto padrão com mais de 15 anos de experiência no mercado imobiliário. Meu
              objetivo é conectar pessoas aos seus lares dos sonhos através de um atendimento personalizado e
              consultoria exclusiva.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="text-foreground">Credibilidade comprovada no mercado de luxo</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="text-foreground">Experiência em negociações de alto valor</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="text-foreground">Atendimento personalizado e exclusivo</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Imóveis Vendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="/guilherme-vidal-professional.png"
                alt="Guilherme Vidal - Consultor Imobiliário"
                className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent rounded-lg" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
          <Card className="text-center border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-card/60">
            <CardContent className="p-8">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif font-semibold mb-2 text-card-foreground">Expertise Comprovada</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Reconhecido no mercado de imóveis de luxo</p>
            </CardContent>
          </Card>

          <Card className="text-center border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-card/60">
            <CardContent className="p-8">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif font-semibold mb-2 text-card-foreground">Atendimento Humanizado</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Cuidado pessoal em cada negociação</p>
            </CardContent>
          </Card>

          <Card className="text-center border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-card/60">
            <CardContent className="p-8">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif font-semibold mb-2 text-card-foreground">Confiança Total</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Transparência em todos os processos</p>
            </CardContent>
          </Card>

          <Card className="text-center border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-card/60">
            <CardContent className="p-8">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif font-semibold mb-2 text-card-foreground">Resultados Garantidos</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Sucesso comprovado em cada projeto</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
