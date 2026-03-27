import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding" style={{ background: "var(--hero-gradient)" }}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Contact</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mt-3 mb-6">
              Parlons de votre projet
            </h2>
            <p className="text-primary-foreground/70 mb-10 leading-relaxed">
              Nous demeurons disponibles pour toute réunion de présentation, visite de chantier ou négociation de partenariat.
            </p>

            <div className="space-y-6">
              <a href="https://maps.google.com/?q=Akwa+Douala+Cameroun" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <div className="bg-primary-foreground/10 p-3 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">Siège Social</p>
                  <p className="text-sm">Akwa, Rue Sylvanie — BP 15591, Douala, Cameroun</p>
                </div>
              </a>
              <a href="tel:+237690670005" className="flex items-start gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <div className="bg-primary-foreground/10 p-3 rounded-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">Téléphone</p>
                  <p className="text-sm">690 67 00 05 / 678 40 25 61</p>
                </div>
              </a>
              <a href="mailto:Harmony_services@yahoo.com" className="flex items-start gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <div className="bg-primary-foreground/10 p-3 rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">Courriel</p>
                  <p className="text-sm">Harmony_services@yahoo.com</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              className="bg-card rounded-2xl p-8 shadow-2xl space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const data = new FormData(form);
                const subject = encodeURIComponent(data.get("subject") as string || "Demande de devis");
                const body = encodeURIComponent(
                  `Nom: ${data.get("name")}\nTéléphone: ${data.get("phone")}\n\n${data.get("message")}`
                );
                window.location.href = `mailto:Harmony_services@yahoo.com?subject=${subject}&body=${body}`;
              }}
            >
              <h3 className="font-heading font-bold text-xl text-foreground">Demande de devis</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="name" required placeholder="Votre nom" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                <input name="phone" placeholder="Téléphone" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <input name="subject" placeholder="Objet" className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <textarea name="message" rows={5} placeholder="Décrivez votre projet..." className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold hover:bg-primary-light transition-colors"
              >
                <Send className="w-4 h-4" />
                Envoyer
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
