"use client";

import Header from "@/app/(home)/components/Header";
import HeroSection from "@/app/(home)/components/HeroSection";
import PartnersSection from "@/app/(home)/components/PartnersSection";
import ExpertisesSection from "@/app/(home)/components/ExpertisesSection";
import ProcessSection from "@/app/(home)/components/ProcessSection";
import ApproachSection from "@/app/(home)/components/ApproachSection";
import EnterpriseSection from "@/app/(home)/components/EnterpriseSection";
import EcosystemSection from "@/app/(home)/components/EcosystemSection";
import CTASection from "@/app/(home)/components/CTASection";
import Footer from "@/app/(home)/components/Footer";
import { cta, ctaButtonPresets } from "./data";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* Expertises Section */}
      <ExpertisesSection />

      {/* Comment on travaille (processus) */}
      <ProcessSection />

      {/* Notre approche */}
      <ApproachSection />

      {/* Pour l'entreprise */}
      <EnterpriseSection />

      {/* Notre écosystème (marques) */}
      <EcosystemSection />

      <CTASection
        title={cta.title}
        subtitle={cta.text}
        buttonLabel={ctaButtonPresets.contactPrimary.label}
        buttonHref={ctaButtonPresets.contactPrimary.href}
      />

      <Footer />
    </div>
  );
}
