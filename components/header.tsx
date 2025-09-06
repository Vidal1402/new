import { Button } from "@/components/ui/button"
import { Scale, Phone, Mail } from "lucide-react"

export function Header() {
  return (
    <header className="bg-secondary text-secondary-foreground">
      {/* Top contact bar */}
      <div className="border-b border-border/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-end items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(11) 3456-7890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>contato@silvaadvocacia.com.br</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Scale className="h-8 w-8 text-primary" />
            <div>
              <h1 className="font-playfair font-bold text-xl text-secondary-foreground">Silva & Associados</h1>
              <p className="text-sm text-muted-foreground">Advocacia & Consultoria Jurídica</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="hover:text-primary transition-colors">
              Início
            </a>
            <a href="#sobre" className="hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#equipe" className="hover:text-primary transition-colors">
              Equipe
            </a>
            <a href="#contato" className="hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Agendar Consulta</Button>
        </div>
      </div>
    </header>
  )
}
