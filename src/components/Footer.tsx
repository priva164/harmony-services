import logoImg from "@/assets/logo.ico";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground/70 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImg} alt="Harmony Services" className="h-8 w-8" />
              <span className="font-heading font-bold text-primary-foreground">HARMONY SERVICES</span>
            </div>
            <p className="text-sm leading-relaxed">
              Entreprise multi-sectorielle spécialisée en BTP, second œuvre, énergie renouvelable et services digitaux.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#accueil" className="hover:text-primary-foreground transition-colors">Accueil</a></li>
              <li><a href="#apropos" className="hover:text-primary-foreground transition-colors">À Propos</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Services</a></li>
              <li><a href="#projets" className="hover:text-primary-foreground transition-colors">Projets</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Identité</h4>
            <ul className="space-y-2 text-sm">
              <li>RCCM : CM-DLA-01-2025-B12-00083</li>
              <li>NIU : M022517592725W</li>
              <li>CNPS : 352-0126240-000R</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+237690670005" className="hover:text-primary-foreground transition-colors">690 67 00 05</a></li>
              <li><a href="tel:+237678402561" className="hover:text-primary-foreground transition-colors">678 40 25 61</a></li>
              <li><a href="mailto:Harmony_services@yahoo.com" className="hover:text-primary-foreground transition-colors">Harmony_services@yahoo.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs">
          © {new Date().getFullYear()} HARMONY SERVICES SARL — Tous droits réservés
        </div>
      </div>
    </footer>
  );
};

export default Footer;
