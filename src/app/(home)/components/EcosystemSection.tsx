"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ecosystemIntro, ecosystemBrands } from "../data";

const iconColors = [
  "text-purple-400",
  "text-blue-400",
  "text-pink-400",
  "text-amber-400",
  "text-emerald-400",
  "text-violet-400",
];

export default function EcosystemSection() {
  return (
    <section id="ecosysteme" className="relative py-24 sm:py-28 px-8 sm:px-12 bg-neutral-950 border-t border-neutral-800 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,80,200,0.06),transparent)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12 lg:mb-14 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-medium text-neutral-500 uppercase tracking-[0.2em] mb-3"
          >
            Notre écosystème
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-base sm:text-lg text-neutral-400 leading-relaxed"
          >
            {ecosystemIntro}
          </motion.p>
        </div>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {ecosystemBrands.map((brand, i) => {
            const Icon = brand.icon;
            const color = iconColors[i % iconColors.length];
            return (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden hover:border-neutral-700 transition-all duration-300"
              >
                <div className="p-5 sm:p-6 text-left">
                  {/* Icône + nom sur la même ligne */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center group-hover:border-neutral-600 transition-colors duration-300">
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${color} transition-transform duration-300 group-hover:scale-110`} />
                    </div>
                    <h3 className="font-semibold text-white text-base sm:text-lg tracking-tight">
                      {brand.name}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-4 line-clamp-2">
                    {brand.description}
                  </p>
                  <a
                    href={`https://${brand.site}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-neutral-700 text-sm font-medium text-neutral-400 hover:text-white hover:border-neutral-600 transition-colors"
                  >
                    <span>{brand.site}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
