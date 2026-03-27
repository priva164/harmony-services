import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import pr1 from "@/assets/pr1.jpeg";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={pr1} alt="Projet Harmony Services" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--hero-gradient)", opacity: 0.88 }} />
      </div>

      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="inline-block h-px w-10 bg-accent" />
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Depuis 2017
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-primary-foreground mb-6"
          >
            Bâtir l'excellence,
            <br />
            <span className="text-accent">du sol au digital.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          >
            BTP · Second Œuvre · Énergie Renouvelable · Services Digitaux & IA · Commerce Général
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-lg font-semibold text-base hover:brightness-110 transition-all"
            >
              Nos Services
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded-lg font-semibold text-base hover:bg-primary-foreground/10 transition-all"
            >
              Demander un devis
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-6 mt-14 text-primary-foreground/70 text-sm"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Douala, Cameroun
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              +8 ans d'expérience
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
