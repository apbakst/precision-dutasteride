import { Header, Hero, Stats, Pricing } from '../components';
import { HowItWorks, FAQ, Testimonials, Science, Footer, StickyCTA } from '../components/shared';

export const metadata = {
  title: 'V1 - Clean Medical | Precision Dutasteride',
};

export default function V1Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Science />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
