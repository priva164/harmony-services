import { motion } from "framer-motion";
import { HardHat, Paintbrush, Armchair, Zap, Sun, TreePine, ShoppingCart, Brain } from "lucide-react";

const services = [
  {
    icon: HardHat,
    title: "Construction & Génie Civil",
    desc: "Terrassement, fondations, gros œuvre, bâtiments R+N, réhabilitation, VRD et ouvrages d'art.",
  },
  {
    icon: Paintbrush,
    title: "Second Œuvre & Finitions",
    desc: "Plâtrerie, faux plafonds, revêtements, menuiserie, étanchéité, peinture et vitrerie.",
  },
  {
    icon: Armchair,
    title: "Équipements Bureau & Sanitaires",
    desc: "Mobilier sur mesure, cuisines, plomberie, climatisation et appareils électroménagers.",
  },
  {
    icon: Zap,
    title: "Installations Électriques",
    desc: "Câblage, tableaux électriques, éclairage LED, domotique, vidéosurveillance.",
  },
  {
    icon: Sun,
    title: "Énergie Renouvelable",
    desc: "Systèmes solaires photovoltaïques et thermiques, batteries, audit et maintenance.",
  },
  {
    icon: TreePine,
    title: "Aménagement Paysager",
    desc: "Espaces verts, terrassement, portails, allées et éclairage paysager.",
  },
  {
    icon: ShoppingCart,
    title: "Commerce Général",
    desc: "Matériaux de construction, équipements BTP, import/export et sourcing pour chantiers.",
  },
  {
    icon: Brain,
    title: "Services Digitaux & IA",
    desc: "Automatisation IA, marketing numérique, sites web, applications, domotique intelligente.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Nos Domaines</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-3">
            8 Domaines d'Intervention
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            De la fondation à la finition, du commerce à l'intelligence artificielle — une offre complète pour tous vos besoins.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-primary/10 text-primary p-3 rounded-xl w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
