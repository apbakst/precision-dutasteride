import {
  Header,
  Hero,
  Stats,
  Science,
  HowItWorks,
  Testimonials,
  FAQ,
  Pricing,
  Footer,
} from './components';
import { StickyCTA } from './components/StickyCTA';

export default function Home() {
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
