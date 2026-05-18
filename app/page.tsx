import { HeroSection } from '@/components/HeroSection';
import { ServiceSection } from '@/components/ServiceSection';
import { WhyUsSection } from '@/components/WhyUsSection';
import { ProcessSection } from '@/components/ProcessSection';
import { TestimonialSection } from '@/components/TestimonialSection';
import { PricingSection } from '@/components/PricingSection';
import { FAQSection } from '@/components/FAQSection';
import { FinalCTASection } from '@/components/FinalCTASection';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ServiceSection />
      <WhyUsSection />
      <ProcessSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
