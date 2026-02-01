"use client";

import { motion } from "framer-motion";
import { processIntro, processSteps } from "../data";
import { Headphones, PenLine, Code2, Rocket } from "lucide-react";

const stepIcons = [Headphones, PenLine, Code2, Rocket];

export default function ProcessSection() {
  return (
    <section id="processus" className="relative py-24 sm:py-28 px-8 sm:px-12 bg-neutral-950 border-t border-neutral-800 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(120,80,200,0.06),transparent)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Comment on travaille
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-base sm:text-lg text-neutral-400 leading-relaxed"
          >
            {processIntro}
          </motion.p>
        </div>

        {/* Grille 2x2 : cartes avec numéro, icône, titre, description */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {processSteps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.article
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-xl border border-neutral-800 bg-neutral-900 p-6 sm:p-7 hover:border-neutral-700 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center group-hover:border-neutral-600 transition-colors">
                    <Icon className="w-5 h-5 text-neutral-300" />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
