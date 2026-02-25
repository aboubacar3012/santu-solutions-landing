"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useContactModal } from "./ContactModalContext";

export type CTAButton = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type CallToActionProps = {
  title: string;
  subtitle?: string;
  buttons: CTAButton[];
  layout?: "compact" | "centered";
  showRoundButton?: boolean;
  embedded?: boolean;
  id?: string;
};

function isContactHref(href: string) {
  return href.startsWith("mailto:") || href === "#contact" || href === "#formulaire";
}

export default function CallToAction({
  title,
  subtitle,
  buttons,
  layout = "centered",
  showRoundButton = true,
  embedded = false,
  id,
}: CallToActionProps) {
  const { open } = useContactModal();
  if (buttons.length === 0) return null;

  const primaryClass =
    "inline-flex items-center justify-center bg-white text-neutral-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-neutral-100 transition-colors cursor-pointer";
  const secondaryClass =
    "inline-flex items-center justify-between px-4 py-3 rounded-xl border border-neutral-600 text-white font-medium text-sm hover:border-neutral-500 hover:bg-neutral-800/50 transition-colors cursor-pointer";

  function renderButton(btn: CTAButton, cls: string) {
    if (isContactHref(btn.href)) {
      return (
        <button key={btn.label} type="button" onClick={(e) => { e.preventDefault(); open(); }} className={cls}>
          {btn.label}
          <ArrowRight className="w-4 h-4 shrink-0 ml-2" />
        </button>
      );
    }
    return (
      <a key={btn.label} href={btn.href} className={cls}>
        {btn.label}
        <ArrowRight className="w-4 h-4 shrink-0 ml-2" />
      </a>
    );
  }

  if (layout === "compact") {
    const firstBtn = buttons[0];
    const roundIsContact = firstBtn && isContactHref(firstBtn.href);
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
            <button
              type="button"
              onClick={roundIsContact ? open : undefined}
              className="shrink-0 w-10 h-10 rounded-full border-2 border-white bg-white flex items-center justify-center text-neutral-900 hover:bg-neutral-100 hover:border-neutral-100 transition-colors"
              aria-label={firstBtn?.label ?? "Contact"}
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
          {buttons.map((btn) =>
            renderButton(btn, btn.variant === "primary" ? primaryClass : secondaryClass)
          )}
        </div>
      </motion.div>
    );
  }

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
        {buttons.map((btn) =>
          renderButton(
            btn,
            btn.variant === "primary"
              ? `${primaryClass} w-full sm:w-auto`
              : `${secondaryClass} w-full sm:w-auto justify-center`
          )
        )}
      </div>
    </motion.div>
  );
}
