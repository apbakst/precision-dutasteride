import {
  Header,
  Hero,
  Stats,
  ComparisonChart,
  VideoSection,
  BeforeAfter,
  HowItWorks,
  Testimonials,
  Pricing,
  FAQ,
  FinalCTA,
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
        <ComparisonChart />
        <VideoSection />
        <BeforeAfter />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}
