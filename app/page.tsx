import { HeroSection } from '@/components/landing/hero';
import { FeaturesSection } from '@/components/landing/features';
import { HowItWorksSection } from '@/components/landing/how-it-works';
import { TestimonialsSection } from '@/components/landing/testimonials';
import { FaqSection } from '@/components/landing/faq';
import { Footer } from '@/components/landing/footer';
import Header from '@/components/landing/header';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header/>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </div>
  );
}