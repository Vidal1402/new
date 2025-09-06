import { Scale, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-playfair font-bold text-xl">Silva & Associados</h3>
                <p className="text-sm text-muted-foreground">Advocacia & Consultoria Jurídica</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Há mais de 15 anos defendendo os direitos dos nossos clientes com excelência, dedicação e resultados
              efetivos.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-6 w-6 text-primary hover:text-primary/80 cursor-pointer" />
              <Instagram className="h-6 w-6 text-primary hover:text-primary/80 cursor-pointer" />
              <Linkedin className="h-6 w-6 text-primary hover:text-primary/80 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#inicio" className="hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#equipe" className="hover:text-primary transition-colors">
                  Equipe
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Direito Trabalhista
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Direito Civil
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Direito Empresarial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Direito de Família
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Direito Previdenciário
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Silva & Associados. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">OAB/SP 123.456 | CNPJ: 12.345.678/0001-90</p>
        </div>
      </div>
    </footer>
  )
}
