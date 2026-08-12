import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MembershipSection } from './components/MembershipSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ExerciseTips } from './components/ExerciseTips';
import { TrainerSection } from './components/TrainerSection';
import { Testimonials } from './components/Testimonials';
import { GallerySection } from './components/GallerySection';
import { StatsCounter } from './components/StatsCounter';
import { MotivationalBanner } from './components/MotivationalBanner';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';

export default function App() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('MONTHLY MEMBERSHIP');

  const handleOpenJoinModal = (planName?: string) => {
    if (planName) {
      setSelectedPlan(planName);
    } else {
      setSelectedPlan('MONTHLY MEMBERSHIP');
    }
    setJoinModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased overflow-x-hidden selection:bg-amber-500 selection:text-zinc-950">
      
      {/* Navigation Bar */}
      <Navbar onOpenJoinModal={handleOpenJoinModal} />

      {/* Main Page Layout */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenJoinModal={handleOpenJoinModal} />

        {/* 2. Membership Plans (Pricing in ETB) */}
        <MembershipSection onOpenJoinModal={handleOpenJoinModal} />

        {/* 3. Why AK GYM */}
        <WhyChooseUs />

        {/* 4. Exercise Tips */}
        <ExerciseTips onOpenJoinModal={handleOpenJoinModal} />

        {/* 5. Trainer Section */}
        <TrainerSection onOpenJoinModal={handleOpenJoinModal} />

        {/* 6. Customer Reviews */}
        <Testimonials />

        {/* 7. Gallery */}
        <GallerySection />

        {/* 8. Fitness Statistics Counters */}
        <StatsCounter />

        {/* 9. Motivational Section */}
        <MotivationalBanner onOpenJoinModal={handleOpenJoinModal} />

        {/* 10. FAQ Section */}
        <FaqSection />

        {/* 11. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Join / Registration Modal */}
      <JoinModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
        defaultPlanName={selectedPlan}
      />

    </div>
  );
}
