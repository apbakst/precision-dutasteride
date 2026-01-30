import {
  HeaderV3,
  HeroV3,
  ScienceV3,
  TestimonialsV3,
  PricingV3,
  FAQV3,
  FooterV3,
} from '../components/v3';

export const metadata = {
  title: 'V3 - Editorial Warm | Precision Dutasteride',
};

export default function V3Page() {
  return (
    <div className="min-h-screen">
      <HeaderV3 />
      <main>
        <HeroV3 />
        <ScienceV3 />
        <TestimonialsV3 />
        <PricingV3 />
        <FAQV3 />
      </main>
      <FooterV3 />
    </div>
  );
}
