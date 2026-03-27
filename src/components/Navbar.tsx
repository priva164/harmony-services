import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoImg from "@/assets/logo.ico";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À Propos", href: "#apropos" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projets" },
  { label: "Processus", href: "#processus" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        <a href="#accueil" className="flex items-center gap-2">
          <img src={logoImg} alt="Harmony Services" className="h-10 w-10 object-contain" />
          <span className="font-heading font-bold text-lg text-primary">HARMONY SERVICES</span>
        </a>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+237690670005"
          className="hidden lg:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-light transition-colors"
        >
          <Phone className="w-4 h-4" />
          Appelez-nous
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground p-2">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-card border-t border-border">
          <ul className="flex flex-col py-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 text-foreground/80 hover:text-primary hover:bg-secondary transition-colors font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="px-6 pt-3">
              <a
                href="tel:+237690670005"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-semibold"
              >
                <Phone className="w-4 h-4" />
                690 67 00 05
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
