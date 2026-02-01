"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export type CTAButton = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type CallToActionProps = {
  /** Titre principal (ex. "Un projet ? Discutons-en.") */
  title: string;
  /** Sous-titre ou description optionnelle */
  subtitle?: string;
  /** Liste des boutons à afficher (ordre conservé) */
  buttons: CTAButton[];
  /** Mise en page : compact = titre + bouton rond à gauche, boutons à droite ; centered = tout centré */
  layout?: "compact" | "centered";
  /** Afficher le bouton rond (flèche) à côté du titre (uniquement en layout compact) */
  showRoundButton?: boolean;
  /** Intégré dans un bloc (ex. Hero) : pas de bordure ni marge au-dessus */
  embedded?: boolean;
  /** Id du conteneur pour ancres */
  id?: string;
};

const defaultRoundHref = "mailto:contact@santu-solutions.com";

export default function CallToAction({
  title,
  subtitle,
  buttons,
  layout = "centered",
  showRoundButton = true,
  embedded = false,
  id,
}: CallToActionProps) {
  if (buttons.length === 0) return null;

  const primaryClass =
    "inline-flex items-center justify-center bg-white text-neutral-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-neutral-100 transition-colors";
  const secondaryClass =
    "inline-flex items-center justify-between px-4 py-3 rounded-xl border border-neutral-600 text-white font-medium text-sm hover:border-neutral-500 hover:bg-neutral-800/50 transition-colors";

  if (layout === "compact") {
    const firstHref = buttons[0]?.href ?? defaultRoundHref;
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 ${embedded ? "" : "mt-12 pt-8 border-t border-neutral-800"}`}
        id={id}
      >
        <div className="flex items-center gap-3">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {title}
          </h3>
          {showRoundButton && (
            <a
              href={firstHref}
              className="shrink-0 w-10 h-10 rounded-full border-2 border-white bg-white flex items-center justify-center text-neutral-900 hover:bg-neutral-100 hover:border-neutral-100 transition-colors"
              aria-label={buttons[0]?.label ?? "Contact"}
            >
              <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
          {buttons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              className={
                btn.variant === "primary" ? primaryClass : secondaryClass
              }
            >
              {btn.label}
              <ArrowRight className="w-4 h-4 shrink-0 ml-2" />
            </a>
          ))}
        </div>
      </motion.div>
    );
  }

  // layout === "centered"
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
      id={id}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-neutral-400 mb-10 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        {buttons.map((btn) => (
          <a
            key={btn.label}
            href={btn.href}
            className={
              btn.variant === "primary"
                ? `${primaryClass} w-full sm:w-auto`
                : `${secondaryClass} w-full sm:w-auto justify-center`
            }
          >
            {btn.label}
            <ArrowRight className="w-5 h-5 ml-2 shrink-0" />
          </a>
        ))}
      </div>
    </motion.div>
  );
}
