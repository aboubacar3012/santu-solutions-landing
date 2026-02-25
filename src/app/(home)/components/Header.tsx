"use client";

import Link from "next/link";

const SLOGAN = "Faites-vous accompagner par des experts";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/95 backdrop-blur-sm border-b border-neutral-800">
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-4 min-w-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 rounded-md"
          aria-label="Santu Engineering - Accueil"
        >
          <span className="flex items-baseline gap-1 shrink-0">
            <span className="text-2xl font-bold text-white tracking-tight">
              Santu
            </span>
            <span className="text-2xl font-bold text-neutral-400 tracking-tight">
              Engineering
            </span>
          </span>
          <p className="hidden sm:block text-sm text-neutral-500 truncate">
            {SLOGAN}
          </p>
        </Link>
      </nav>
    </header>
  );
}
