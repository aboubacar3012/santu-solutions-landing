"use client";

import { useEffect, useRef } from "react";
import { X, Mail, Phone, Linkedin, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useContactModal } from "./ContactModalContext";

const SLOGAN = "Faites-vous accompagner par des experts";

const contacts = [
  {
    icon: Mail,
    label: "abousolutions@gmail.com",
    href: "mailto:abousolutions@gmail.com",
  },
  {
    icon: Phone,
    label: "+33 7 58 02 09 80",
    href: "tel:+33758020980",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adiallo3012/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/aboubacar3012",
  },
];

export default function ContactModal() {
  const { isOpen, close } = useContactModal();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/70 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === overlayRef.current) close();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-900/95 backdrop-blur-md shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-24 bg-violet-500/10 blur-3xl pointer-events-none" />

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer touch-manipulation"
              aria-label="Fermer"
            >
              <X className="w-5 h-5 pointer-events-none" />
            </button>

            <div className="relative px-8 pt-10 pb-8">
              <div className="mb-6">
                <div className="flex items-baseline gap-1.5 tracking-tight mb-2">
                  <span className="text-2xl font-bold text-white">Santu</span>
                  <span className="text-2xl font-bold text-neutral-400">Engineering</span>
                </div>
                <p className="text-sm text-neutral-500">{SLOGAN}</p>
              </div>

              <div className="h-px bg-neutral-800 mb-6" />

              <p className="text-sm text-neutral-400 mb-6">
                Un projet en tête ? Échangeons.
              </p>

              <div className="space-y-3">
                {contacts.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 px-4 py-3.5 rounded-xl border border-neutral-800 bg-neutral-800/40 hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center group-hover:border-neutral-600 transition-colors">
                      <Icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
