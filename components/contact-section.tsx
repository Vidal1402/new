import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageSquare, Shield } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-muted/30 relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
        <img src="/casino-skeleton-delay.png" alt="BM Métodos" className="w-64 h-auto" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-4xl mb-4">
            Solicite uma <span className="text-primary">Auditoria</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proteja seu cassino contra vulnerabilidades. Entre em contato conosco e solicite uma análise completa dos
            seus sistemas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-primary" />
                <CardTitle className="font-sans text-2xl">Solicitar Consultoria</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Nome do responsável" />
                <Input placeholder="Email corporativo" type="email" />
              </div>
              <Input placeholder="Telefone" />
              <Input placeholder="Nome do cassino/empresa" />
              <Textarea placeholder="Descreva seu sistema e necessidades de segurança..." rows={5} />
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-3">
                <Shield className="h-5 w-5 mr-2" />
                Solicitar Auditoria
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Localização</h3>
                    <p className="text-muted-foreground">
                      Av. Paulista, 1000 - Conjunto 2001
                      <br />
                      Bela Vista - São Paulo/SP
                      <br />
                      CEP: 01310-100
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Contato Direto</h3>
                    <p className="text-muted-foreground">
                      (11) 3000-1234 (Comercial)
                      <br />
                      (11) 99999-8888 (Emergências 24h)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      contato@bmmetodos.com.br
                      <br />
                      <span className="text-accent font-medium">emergencia@bmmetodos.com.br</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Atendimento</h3>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 8h às 20h
                      <br />
                      <span className="text-accent font-medium">Suporte 24/7 para emergências</span>
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
