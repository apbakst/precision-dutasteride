import {
  HeroV2,
  HeaderV2,
  StatsV2,
  ComparisonChart,
  VideoSection,
  BeforeAfter,
  PricingV2,
  FinalCTA,
} from '../components/v2';
import { HowItWorks, Testimonials, FAQ, Footer, StickyCTA } from '../components/shared';

export const metadata = {
  title: 'V2 - Bold Visual | Precision Dutasteride',
};

export default function V2Page() {
  return (
    <div className="min-h-screen">
      <HeaderV2 />
      <main>
        <HeroV2 />
        <StatsV2 />
        <ComparisonChart />
        <VideoSection />
        <BeforeAfter />
        <HowItWorks />
        <Testimonials />
        <PricingV2 />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
