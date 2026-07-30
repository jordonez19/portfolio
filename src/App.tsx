import React, { useState } from 'react';
import { HeroCanvas } from './components/HeroCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ServicesCalculator } from './components/ServicesCalculator';
import { AiSimulator } from './components/AiSimulator';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { TechStack } from './components/TechStack';
import { EducationCertifications } from './components/EducationCertifications';
import { CvModal } from './components/CvModal';
import { GraphifyModal } from './components/GraphifyModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [graphifyModalOpen, setGraphifyModalOpen] = useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
      {/* Subtle Ambient Particle Background */}
      <HeroCanvas />

      {/* Navigation Header */}
      <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Main Content */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero onOpenCvModal={() => setCvModalOpen(true)} />
        <Projects />
        <AiSimulator />
        <ServicesCalculator />
        <ExperienceTimeline />
        <TechStack />
        <EducationCertifications />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenGraphifyModal={() => setGraphifyModalOpen(true)} />

      {/* Modals */}
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
      <GraphifyModal isOpen={graphifyModalOpen} onClose={() => setGraphifyModalOpen(false)} />

      {/* Persistent WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
};
