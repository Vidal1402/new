import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageSquare, Home } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contato" className="py-24 bg-muted/20 relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 hidden lg:block">
        <Home className="w-64 h-64 text-primary" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pronto para encontrar o imóvel dos seus sonhos? Entre em contato conosco e agende uma consultoria
            personalizada e exclusiva.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <Card className="border-primary/30 shadow-xl bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-8">
              <div className="flex items-center gap-4">
                <MessageSquare className="h-8 w-8 text-primary" />
                <CardTitle className="font-serif text-2xl md:text-3xl">Agende sua Consultoria</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Seu nome completo" className="h-12" />
                <Input placeholder="Seu melhor email" type="email" className="h-12" />
              </div>
              <Input placeholder="Telefone/WhatsApp" className="h-12" />
              <Input placeholder="Tipo de imóvel desejado" className="h-12" />
              <Textarea
                placeholder="Conte-nos sobre suas preferências: localização, tamanho, orçamento, características especiais..."
                rows={5}
                className="resize-none"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Home className="h-5 w-5 mr-2" />
                Solicitar Consultoria Gratuita
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-primary/30 shadow-lg bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <MapPin className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-semibold text-xl mb-3">Escritório</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Av. Brigadeiro Faria Lima, 3144 - Conjunto 1201
                      <br />
                      Itaim Bibi - São Paulo/SP
                      <br />
                      CEP: 01451-000
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/30 shadow-lg bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <Phone className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-semibold text-xl mb-3">Telefones</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      (11) 3045-7890 (Escritório)
                      <br />
                      (11) 99876-5432 (WhatsApp)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/30 shadow-lg bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <Mail className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-semibold text-xl mb-3">Email</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      contato@martavidal.com.br
                      <br />
                      <span className="text-primary font-medium">marta@martavidal.com.br</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/30 shadow-lg bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <Clock className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-semibold text-xl mb-3">Atendimento</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Segunda a Sexta: 9h às 19h
                      <br />
                      Sábados: 9h às 14h
                      <br />
                      <span className="text-primary font-medium">Visitas agendadas aos finais de semana</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
