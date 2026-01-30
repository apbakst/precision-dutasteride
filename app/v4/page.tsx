import {
  HeaderV4,
  HeroV4,
  ScienceV4,
  HowItWorksV4,
  ResultsV4,
  PricingV4,
  FooterV4,
} from '../components/v4';
import { FAQ } from '../components/shared';

export const metadata = {
  title: 'V4 - Dark Immersive | Precision Dutasteride',
};

export default function V4Page() {
  return (
    <div className="min-h-screen bg-black">
      <HeaderV4 />
      <main>
        <HeroV4 />
        <ScienceV4 />
        <HowItWorksV4 />
        <ResultsV4 />
        <PricingV4 />
        <FAQ />
      </main>
      <FooterV4 />
    </div>
  );
}
