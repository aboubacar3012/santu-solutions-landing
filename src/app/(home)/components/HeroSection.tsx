"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2, Cloud, Smartphone } from "lucide-react";
import CallToAction from "./CallToAction";

export default function HeroSection() {
  return (
    <section className="pt-32 sm:pt-40 pb-20 sm:pb-24 px-8 sm:px-12 bg-neutral-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-[1rem] sm:text-[1.5rem] lg:text-[2rem] font-bold tracking-tight leading-[1.05] mb-6">
              Votre partenaire technique
                <span className="block text-white">pour vos projets d'apps web et mobile</span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-10 max-w-xl">
                Nous accompagnons les entreprises et les startups dans la conception, le développement et l’évolution de leurs projets numériques : développement d'applications web et mobile, cloud, conseil et formation.              
              </p>

              <div className="mb-12">
                <CallToAction
                  title="Discutons de votre projet"
                  buttons={[
                    { label: "Décrire mon projet", href: "#formulaire", variant: "primary" },
                  ]}
                  layout="compact"
                  showRoundButton={false}
                  embedded
                />
              </div>

              {/* Key benefits */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-neutral-400">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-sm">Plusieurs domaines d'expertise technique</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-400">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">Accompagnement sur mesure et personnalisé</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-400">
                  <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0" />
                  <span className="text-sm">Méthodologies modernes (Agile, Cloud, DevOps)</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Visual mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            {/* Terminal-like mockup */}
            <div className="relative bg-neutral-900 rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-950">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-neutral-600" />
                  <div className="w-3 h-3 rounded-full bg-neutral-600" />
                  <div className="w-3 h-3 rounded-full bg-neutral-600" />
                </div>
                <span className="text-xs text-neutral-500 ml-2">santu.io</span>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                {/* Feature cards */}
                <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-800/50 border border-neutral-700">
                    <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Web & Mobile</h3>
                      <p className="text-sm text-neutral-400">Applications modernes et performantes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-800/50 border border-neutral-700">
                    <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0">
                      <Cloud className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Cloud & DevOps</h3>
                      <p className="text-sm text-neutral-400">Infrastructure scalable et automatisée</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-800/50 border border-neutral-700">
                    <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0">
                      <Code2 className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Conseil technique</h3>
                      <p className="text-sm text-neutral-400">Architecture et choix stratégiques</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                {/* <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-800">
                  <div>
                    <p className="text-2xl font-bold text-white">5+</p>
                    <p className="text-xs text-neutral-500">Expertises</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">100%</p>
                    <p className="text-xs text-neutral-500">Sur mesure</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">Agile</p>
                    <p className="text-xs text-neutral-500">Méthodo</p>
                  </div>
                </div> */}
              </div>
            </div>

          

            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
