"use client";

import { motion } from "framer-motion";
import { expertisesIntro, expertiseHighlights, expertiseSkills } from "../data";
import CallToAction from "./CallToAction";

export default function ExpertisesSection() {
  return (
    <section id="expertises" className="py-24 sm:py-28 px-8 sm:px-12 bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            Expertises
          </motion.h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            {expertisesIntro}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center justify-items-center">
          {/* Colonne gauche : cartes descriptives + CTA */}
          <div className="w-full max-w-xl">
            <div className="space-y-4 mb-12 text-left max-w-lg mx-auto lg:mx-0 lg:mr-auto">
              {expertiseHighlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-4 p-5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Colonne droite : grille 3x3 de compétences */}
          <div className="w-full flex flex-col items-center">
            <div className="grid grid-cols-3 gap-4">
              {expertiseSkills.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-300"
                  >
                    <Icon className={`w-7 h-7 ${item.color} mb-3`} />
                    <h3 className="font-bold text-white text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <CallToAction
          title="Besoin de parler à un expert ?"
          buttons={[
            { label: "Nous contacter", href: "mailto:contact@santu-solutions.com", variant: "primary" },
          ]}
          layout="compact"
          showRoundButton={false}
        />
      </div>
    </section>
  );
}
