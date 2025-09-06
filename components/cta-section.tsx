import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary/20 via-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(212,198,154,0.1)_0%,transparent_50%)]" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif font-black text-4xl md:text-6xl mb-6 text-foreground text-balance">
            Seu próximo imóvel está mais perto do que você imagina
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
            Transforme seu sonho em realidade com a consultoria especializada que conecta você ao imóvel perfeito.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 group"
            >
              Entre em Contato Agora
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(21) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>contato@martavidal.com.br</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-background/60 backdrop-blur-sm p-8 rounded-lg border border-border/50 shadow-lg">
              <div className="text-3xl font-serif font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </div>

            <div className="bg-background/60 backdrop-blur-sm p-8 rounded-lg border border-border/50 shadow-lg">
              <div className="text-3xl font-serif font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Imóveis Vendidos</div>
            </div>

            <div className="bg-background/60 backdrop-blur-sm p-8 rounded-lg border border-border/50 shadow-lg">
              <div className="text-3xl font-serif font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
