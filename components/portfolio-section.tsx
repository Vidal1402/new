import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export function PortfolioSection() {
  const properties = [
    {
      id: 1,
      image: "/luxury-apartment-1.jpg",
      title: "Cobertura Duplex Premium",
      location: "Leblon, Rio de Janeiro",
      price: "R$ 4.500.000",
      area: "280m²",
      bedrooms: 4,
      bathrooms: 5,
    },
    {
      id: 2,
      image: "/luxury-apartment-2.jpg",
      title: "Penthouse Vista Mar",
      location: "Barra da Tijuca, RJ",
      price: "R$ 3.200.000",
      area: "320m²",
      bedrooms: 3,
      bathrooms: 4,
    },
    {
      id: 3,
      image: "/luxury-apartment-3.jpg",
      title: "Apartamento de Luxo",
      location: "Ipanema, Rio de Janeiro",
      price: "R$ 2.800.000",
      area: "180m²",
      bedrooms: 3,
      bathrooms: 3,
    },
    {
      id: 4,
      image: "/luxury-apartment-4.jpg",
      title: "Casa Moderna Premium",
      location: "São Conrado, RJ",
      price: "R$ 5.500.000",
      area: "450m²",
      bedrooms: 5,
      bathrooms: 6,
    },
    {
      id: 5,
      image: "/luxury-apartment-5.jpg",
      title: "Loft Contemporâneo",
      location: "Copacabana, RJ",
      price: "R$ 1.900.000",
      area: "120m²",
      bedrooms: 2,
      bathrooms: 2,
    },
    {
      id: 6,
      image: "/luxury-apartment-6.jpg",
      title: "Mansão Exclusiva",
      location: "Joá, Rio de Janeiro",
      price: "R$ 8.200.000",
      area: "600m²",
      bedrooms: 6,
      bathrooms: 8,
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif font-black text-4xl md:text-5xl mb-6 text-foreground">Imóveis em Destaque</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Conheça nossa seleção exclusiva de imóveis de alto padrão, cuidadosamente escolhidos para clientes
            exigentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-background"
            >
              <div className="relative overflow-hidden">
                <div
                  className="h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url('${property.image}')` }}
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {property.price}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-serif font-bold text-xl mb-2 text-foreground">{property.title}</h3>

                <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                  <span>{property.area}</span>
                  <span>{property.bedrooms} quartos</span>
                  <span>{property.bathrooms} banheiros</span>
                </div>

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

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
          >
            Ver Todos os Imóveis
          </Button>
        </div>
      </div>
    </section>
  )
}
