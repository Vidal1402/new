import { Button } from "@/components/ui/button"
import { Home, Award, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-secondary/10 text-foreground py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/luxury-city-apartment.png')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="font-serif font-black text-6xl md:text-8xl mb-4 text-balance text-foreground">
              Marta Vidal
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">Consultoria Imobiliária</p>
          </div>

          <p className="text-xl md:text-2xl mb-12 text-foreground leading-relaxed max-w-2xl font-medium">
            Conectando você ao imóvel perfeito com expertise, confiança e atendimento personalizado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105"
            >
              Agende uma Consultoria Exclusiva
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary bg-transparent text-lg px-10 py-6 backdrop-blur-sm transition-all duration-300"
            >
              Ver Portfólio
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 bg-card/60 backdrop-blur-md p-8 rounded-lg border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <Home className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif font-bold text-lg mb-2 text-card-foreground">Imóveis Exclusivos</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Acesso aos melhores imóveis de alto padrão da região
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-card/60 backdrop-blur-md p-8 rounded-lg border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif font-bold text-lg mb-2 text-card-foreground">Expertise Comprovada</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Anos de experiência no mercado imobiliário de luxo
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-card/60 backdrop-blur-md p-8 rounded-lg border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif font-bold text-lg mb-2 text-card-foreground">Atendimento VIP</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Consultoria personalizada e acompanhamento exclusivo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
