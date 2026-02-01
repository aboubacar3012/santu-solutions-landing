"use client";

import { footerSections, footerTagline, footerLinks } from "../data";

export default function Footer() {
  return (
    <footer className="py-20 px-8 sm:px-12 bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <p className="text-xl font-bold text-white mb-3">Santu Solutions</p>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
              {footerTagline}
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <p className="text-sm font-bold text-white mb-4">{section.title}</p>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-neutral-500 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-sm text-neutral-500">© 2026 Santu Solutions</p>
          <div className="flex gap-8">
            {footerLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
