import { motion } from "framer-motion";
import { ClipboardCheck, CalendarClock, Hammer, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, num: "01", title: "Étude & Conseil", desc: "Visite de site, analyse des besoins, devis détaillé et documents contractuels." },
  { icon: CalendarClock, num: "02", title: "Planification", desc: "Planning Gantt, mobilisation des équipes, approvisionnement des matériaux." },
  { icon: Hammer, num: "03", title: "Exécution & Contrôle", desc: "Supervision quotidienne, rapports d'avancement, contrôle qualité à chaque étape." },
  { icon: CheckCircle2, num: "04", title: "Réception & Suivi", desc: "PV de réception, levée des réserves, garantie et suivi post-livraison." },
];

const ProcessSection = () => {
  return (
    <section id="processus" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Méthodologie</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-3">
            Notre Processus
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center"
            >
              <div className="relative mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <s.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">
                  {s.num}
                </span>
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

export default ProcessSection;
