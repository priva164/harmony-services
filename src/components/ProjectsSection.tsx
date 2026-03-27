import { motion } from "framer-motion";
import pr3 from "@/assets/pr3.jpeg";
import pr4 from "@/assets/pr4.jpeg";
import od1 from "@/assets/od1.jpg";
import od2 from "@/assets/od2.jpg";
import od3 from "@/assets/od3.jpg";

const projects = [
  { img: od1, title: "Résidence Moderne", cat: "Construction R+4" },
  { img: od2, title: "Immeuble Résidentiel", cat: "Gros Œuvre & Finitions" },
  { img: od3, title: "Résidence 237", cat: "Construction & Aménagement" },
  { img: pr3, title: "Projet Littoral", cat: "Construction & Énergie" },
  { img: pr4, title: "Vue Panoramique", cat: "Réhabilitation" },
];

const ProjectsSection = () => {
  return (
    <section id="projets" className="section-padding" style={{ background: "var(--section-gradient)" }}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Portfolio</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-3">
            Nos Réalisations
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-accent text-xs font-semibold uppercase tracking-wider">{p.cat}</p>
                  <h3 className="text-primary-foreground font-heading font-bold text-xl">{p.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
