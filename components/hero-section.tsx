import { Button } from "@/components/ui/button"
import { Home, Award, Users, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/20 to-secondary/5 text-foreground py-24 md:py-32 overflow-hidden min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/luxury-city-apartment.png')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/95 to-background/90" />

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl">
          <div className="mb-12">
            <h1 className="font-serif font-black text-5xl md:text-7xl lg:text-8xl mb-6 text-balance text-foreground leading-tight">
              Marta Vidal
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-primary font-light tracking-wide">
              Consultoria Imobiliária
            </p>
          </div>

          <p className="text-xl md:text-2xl lg:text-3xl mb-16 text-foreground leading-relaxed max-w-3xl font-normal">
            Conectando você ao <span className="text-primary font-semibold">imóvel perfeito</span> com expertise,
            confiança e atendimento personalizado de alto padrão.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-24">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-12 py-8 shadow-xl shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 group"
            >
              Agende uma Consultoria Exclusiva
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/60 text-foreground hover:bg-primary/10 hover:border-primary bg-background/80 backdrop-blur-sm text-lg px-12 py-8 transition-all duration-300 hover:scale-105"
            >
              Ver Portfólio
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="flex items-start gap-6 bg-card/80 backdrop-blur-md p-10 rounded-2xl border border-border/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-card/90">
              <Home className="h-10 w-10 text-primary flex-shrink-0 mt-2" />
              <div>
                <h3 className="font-serif font-bold text-xl mb-3 text-card-foreground">Imóveis Exclusivos</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Acesso aos melhores imóveis de alto padrão da região com localização privilegiada
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 bg-card/80 backdrop-blur-md p-10 rounded-2xl border border-border/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-card/90">
              <Award className="h-10 w-10 text-primary flex-shrink-0 mt-2" />
              <div>
                <h3 className="font-serif font-bold text-xl mb-3 text-card-foreground">Expertise Comprovada</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Anos de experiência no mercado imobiliário de luxo com resultados excepcionais
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 bg-card/80 backdrop-blur-md p-10 rounded-2xl border border-border/60 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-card/90">
              <Users className="h-10 w-10 text-primary flex-shrink-0 mt-2" />
              <div>
                <h3 className="font-serif font-bold text-xl mb-3 text-card-foreground">Atendimento VIP</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Consultoria personalizada e acompanhamento exclusivo em cada etapa do processo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
