"use client";

import { motion } from "framer-motion";
import { enterpriseIntro, enterpriseFeatures } from "../data";

const accentColors: { border: string; icon: string }[] = [
  { border: "border-l-amber-500", icon: "text-amber-400" },
  { border: "border-l-blue-500", icon: "text-blue-400" },
  { border: "border-l-emerald-500", icon: "text-emerald-400" },
  { border: "border-l-violet-500", icon: "text-violet-400" },
];

export default function EnterpriseSection() {
  return (
    <section id="entreprise" className="relative py-24 sm:py-28 px-8 sm:px-12 bg-neutral-950 border-t border-neutral-800 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_10%,rgba(120,80,200,0.05),transparent)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12 lg:mb-14 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-medium text-neutral-500 uppercase tracking-[0.2em] mb-3"
          >
            Pour l&apos;entreprise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.04 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-4"
          >
            Réponses structurées pour les organisations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="text-base sm:text-lg text-neutral-400 leading-relaxed"
          >
            {enterpriseIntro}
          </motion.p>
        </div>

        {/* Grille 2x2 : cartes avec barre d'accent à gauche */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {enterpriseFeatures.map((item, i) => {
            const Icon = item.icon;
            const accent = accentColors[i % accentColors.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`group rounded-xl border border-neutral-800 bg-neutral-900 pl-5 sm:pl-6 pr-5 sm:pr-6 py-5 sm:py-6 border-l-4 ${accent.border} hover:border-neutral-700 transition-all duration-300`}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center group-hover:border-neutral-600 transition-colors">
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${accent.icon}`} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
