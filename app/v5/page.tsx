import {
  HeaderV5,
  HeroV5,
  FeaturesV5,
  ProcessV5,
  ReviewsV5,
  CTAV5,
  FooterV5,
} from '../components/v5';

export const metadata = {
  title: 'V5 - Bright Lifestyle | Precision Dutasteride',
};

export default function V5Page() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderV5 />
      <main>
        <HeroV5 />
        <FeaturesV5 />
        <ProcessV5 />
        <ReviewsV5 />
        <CTAV5 />
      </main>
      <FooterV5 />
    </div>
  );
}
