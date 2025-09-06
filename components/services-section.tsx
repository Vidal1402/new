import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, TrendingUp, Users, Search, FileText, Heart } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Compra e Venda de Imóveis",
    description: "Assessoria completa na compra e venda de imóveis de alto padrão com negociação especializada.",
    features: ["Avaliação de mercado", "Negociação estratégica", "Documentação completa", "Acompanhamento jurídico"],
  },
  {
    icon: Search,
    title: "Consultoria Personalizada",
    description: "Consultoria exclusiva para encontrar o imóvel ideal que atenda suas necessidades específicas.",
    features: ["Análise de perfil", "Busca direcionada", "Visitas acompanhadas", "Relatório detalhado"],
  },
  {
    icon: TrendingUp,
    title: "Investimentos Imobiliários",
    description: "Orientação especializada para investimentos imobiliários rentáveis e seguros.",
    features: ["Análise de rentabilidade", "Estudos de mercado", "Projeções financeiras", "Gestão de portfólio"],
  },
  {
    icon: Users,
    title: "Atendimento VIP",
    description: "Atendimento exclusivo e personalizado para clientes que buscam excelência.",
    features: ["Agenda flexível", "Atendimento 24/7", "Concierge imobiliário", "Suporte pós-venda"],
  },
  {
    icon: FileText,
    title: "Assessoria Jurídica",
    description: "Suporte jurídico completo para todas as etapas da transação imobiliária.",
    features: ["Análise documental", "Due diligence", "Contratos seguros", "Regularização"],
  },
  {
    icon: Heart,
    title: "Relacionamento Duradouro",
    description: "Construção de relacionamentos sólidos baseados na confiança e satisfação do cliente.",
    features: ["Follow-up contínuo", "Rede de contatos", "Indicações qualificadas", "Eventos exclusivos"],
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-black text-4xl md:text-5xl mb-6 text-foreground">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços imobiliários de alto padrão, com foco na excelência e satisfação
            total do cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-background group hover:scale-105"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif font-bold text-lg text-card-foreground">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
