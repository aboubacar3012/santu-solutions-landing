"use client";

import { motion } from "framer-motion";
import { approachIntro, approachItems, trustReasons } from "../data";
import CallToAction from "./CallToAction";

const iconColors = [
  "text-amber-400",
  "text-blue-400",
  "text-emerald-400",
  "text-violet-400",
  "text-rose-400",
  "text-cyan-400",
];

export default function ApproachSection() {
  return (
    <section id="approche" className="py-24 sm:py-28 px-8 sm:px-12 bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 leading-tight"
            >
              Notre approche
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.04 }}
              className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-6 max-w-lg"
            >
              {approachIntro}
            </motion.p>

            <ul className="space-y-3">
              {approachItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.06 + i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Icon className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" strokeWidth={2} />
                    <div>
                      <p className="text-white font-medium text-sm sm:text-base">{item.title}</p>
                      <p className="text-xs sm:text-sm text-neutral-400 mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {trustReasons.map((item, i) => {
              const Icon = item.icon;
              const color = iconColors[i % iconColors.length];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="relative rounded-xl border border-neutral-800 bg-neutral-900 p-4 sm:p-5 overflow-hidden hover:border-neutral-700 transition-all duration-300"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "12px 12px",
                  }}
                >
                  <div
                    className="absolute top-0 right-0 w-14 h-14 opacity-80"
                    style={{
                      background: "linear-gradient(135deg, rgba(38,38,38,0.9) 0%, rgba(38,38,38,0.3) 50%, transparent 70%)",
                      clipPath: "polygon(100% 0, 100% 100%, 0 0)",
                    }}
                  />
                  <div className="relative flex flex-col items-center justify-center text-center min-h-[96px] sm:min-h-[104px]">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-2">
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${color}`} />
                    </div>
                    <p className="font-semibold text-white text-xs sm:text-sm leading-tight">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <CallToAction
          title="Un projet ? Discutons-en."
          buttons={[
            { label: "Nous contacter", href: "mailto:contact@santu-solutions.com", variant: "secondary" },
            { label: "Voir nos expertises", href: "#expertises", variant: "secondary" },
          ]}
          layout="compact"
          showRoundButton
        />
      </div>
    </section>
  );
}
