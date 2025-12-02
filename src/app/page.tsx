import Navigation from '@/components/pet-care/Navigation';
import HeroSection from '@/components/pet-care/HeroSection';
import StatsSection from '@/components/pet-care/StatsSection';
import FeaturesSection from '@/components/pet-care/FeaturesSection';
import ServicesSection from '@/components/pet-care/ServicesSection';
import BookingCalendar from '@/components/pet-care/BookingCalendar';
import TestimonialsSection from '@/components/pet-care/TestimonialsSection';
import FAQSection from '@/components/pet-care/FAQSection';
import CTASection from '@/components/pet-care/CTASection';
import ContactSection from '@/components/pet-care/ContactSection';
import Footer from '@/components/pet-care/Footer';

export const dynamic = 'force-dynamic';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-6 py-8 max-w-7xl">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <ServicesSection />
        <BookingCalendar />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}