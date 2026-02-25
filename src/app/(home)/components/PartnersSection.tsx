"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Adverco" },
  { name: "Nojyk" },
  { name: "13UP Media Group" },
  { name: "TeedUp" },
  { name: "Les Determinés" },
  { name: "Adverco" },
  { name: "Nojyk" },
  { name: "13UP Media Group" },
  { name: "TeedUp" },
  { name: "Les Determinés" },
  { name: "Adverco" },
  { name: "Nojyk" },
  { name: "13UP Media Group" },
  { name: "TeedUp" },
  { name: "Les Determinés" },
];

export default function PartnersSection() {
  return (
    <section className="py-16 px-8 sm:px-12 bg-neutral-950 border-y border-neutral-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm text-neutral-400 mb-12"
        >
          Ils nous font confiance
        </motion.p>

        {/* Logos défilants avec effet spotlight */}
        <div className="relative">
          {/* Gradient masks pour effet de fade sur les bords */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10" />

          <div className="relative overflow-hidden">
            <div className="flex gap-12 animate-scroll items-center">
              {/* Premier set */}
              {partners.map((partner, i) => (
                <span
                  key={`1-${i}`}
                  className="text-base font-medium text-neutral-400 whitespace-nowrap"
                >
                  {partner.name}
                </span>
              ))}
              {/* Deuxième set pour la continuité */}
              {partners.map((partner, i) => (
                <span
                  key={`2-${i}`}
                  className="text-base font-medium text-neutral-400 whitespace-nowrap"
                >
                  {partner.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
