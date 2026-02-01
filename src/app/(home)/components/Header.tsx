"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "../data";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/95 backdrop-blur-sm border-b border-neutral-800">
      <nav className="max-w-7xl mx-auto px-8 sm:px-12 h-20 flex items-center justify-between">
        <Link href="#" className="text-lg font-bold text-white tracking-tight">
          Santu
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:contact@santu-solutions.com"
            className="text-sm text-white font-medium px-5 py-2.5 rounded-lg border border-neutral-700 hover:border-neutral-600 transition-colors"
          >
            Contact
          </a>
        </div>
        <button
          type="button"
          className="md:hidden p-2 text-neutral-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950 px-8 py-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-sm text-neutral-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:contact@santu-solutions.com"
            onClick={() => setMobileMenuOpen(false)}
            className="block mt-4 text-sm text-white font-medium px-5 py-3 rounded-lg border border-neutral-700 text-center"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
