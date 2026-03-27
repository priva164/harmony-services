import { motion } from "framer-motion";
import { Building2, Globe, Award, Users } from "lucide-react";
import pr2 from "@/assets/pr2.jpeg";

const stats = [
  { icon: Building2, value: "2017", label: "Année de création" },
  { icon: Globe, value: "10+", label: "Régions couvertes" },
  { icon: Award, value: "8+", label: "Domaines d'expertise" },
  { icon: Users, value: "100%", label: "Engagement qualité" },
];

const AboutSection = () => {
  return (
    <section id="apropos" className="section-padding" style={{ background: "var(--section-gradient)" }}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <img src={pr2} alt="Réalisation Harmony" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-xl px-6 py-4 shadow-lg">
                <p className="font-heading font-bold text-2xl">SARL</p>
                <p className="text-primary-foreground/80 text-sm">Société enregistrée</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Qui sommes-nous</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-3 mb-6">
              Un partenaire fiable pour vos projets
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Fondée en 2017 et établie à Akwa, Douala, <strong>HARMONY SERVICES SARL</strong> est une entreprise multi-sectorielle couvrant les travaux de BTP, le second œuvre, l'énergie renouvelable, le commerce général et les services digitaux & IA.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Grâce à des équipes qualifiées et mobiles, nous intervenons dans toutes les régions du Cameroun et au-delà des frontières nationales pour des projets régionaux ou internationaux.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="glass-card p-4 flex items-center gap-3">
                  <div className="bg-primary/10 text-primary p-2.5 rounded-lg">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-lg text-foreground">{s.value}</p>
                    <p className="text-muted-foreground text-xs">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
