import { Home, Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/10 text-foreground border-t border-border/20">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <Home className="h-10 w-10 text-primary" />
              <div>
                <h3 className="font-serif font-bold text-2xl text-foreground">Marta Vidal</h3>
                <p className="text-primary font-medium">Consultoria Imobiliária</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-8 max-w-md text-lg leading-relaxed">
              Especialista em imóveis de alto padrão, conectando você ao lar perfeito com atendimento personalizado e
              expertise comprovada no mercado de luxo.
            </p>
            <div className="flex gap-6">
              <Facebook className="h-7 w-7 text-primary hover:text-primary/80 cursor-pointer transition-colors" />
              <Instagram className="h-7 w-7 text-primary hover:text-primary/80 cursor-pointer transition-colors" />
              <Linkedin className="h-7 w-7 text-primary hover:text-primary/80 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-xl mb-6 text-foreground">Navegação</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#inicio" className="hover:text-primary transition-colors text-lg">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-primary transition-colors text-lg">
                  Sobre Marta
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-primary transition-colors text-lg">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary transition-colors text-lg">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-primary transition-colors text-lg">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-xl mb-6 text-foreground">Contato</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg">(11) 3045-7890</p>
                  <p className="text-sm">(11) 99876-5432</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg">contato@martavidal.com.br</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg">Av. Faria Lima, 3144</p>
                  <p className="text-sm">Itaim Bibi - São Paulo/SP</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 mt-12 pt-8 text-center text-muted-foreground">
          <p className="text-lg">&copy; 2024 Marta Vidal Consultoria Imobiliária. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">CRECI/SP 123.456-F | CNPJ: 12.345.678/0001-90</p>
        </div>
      </div>
    </footer>
  )
}
