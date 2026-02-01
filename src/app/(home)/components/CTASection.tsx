"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type CTASectionProps = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonHref: string;
};

export default function CTASection({ title, subtitle, buttonLabel, buttonHref }: CTASectionProps) {
  return (
    <section id="contact" className="relative py-24 sm:py-32 px-8 sm:px-12 bg-neutral-950 border-t border-neutral-800 overflow-hidden">
      {/* Fond : grille subtile + dégradé */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl border border-neutral-800 bg-neutral-900/90 backdrop-blur-sm px-8 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-20 text-center overflow-hidden"
        >
          {/* Lueur discrète en haut au centre */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-violet-500/10 blur-3xl pointer-events-none" />

          <p className="text-xs font-medium text-neutral-500 uppercase tracking-[0.25em] mb-4">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 leading-tight max-w-2xl mx-auto">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-xl mx-auto mb-10">
            {subtitle}
          </p>
          <a
            href={buttonHref}
            className="group inline-flex items-center justify-center gap-2 bg-white text-neutral-900 px-8 py-4 rounded-xl font-semibold hover:bg-neutral-100 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            {buttonLabel}
            <ArrowRight className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
