'use client';
import WorkGallery from '@/components/WorkGallery/WorkGallery';
import MainText from '@/components/MainText/MainText';

const worksData = [
  {
    href: 'work/days/',
    src: '/images/days.webp',
    company: 'Days',
    description: 'iOS Countdown App',
  },
  {
    href: 'work/tripscout/',
    src: '/images/tripscout.webp',
    company: 'Tripscout',
    description: 'Travel Planner',
  },
  {
    href: 'work/athotel/',
    src: '/images/athotel.webp',
    company: '@hotel',
    description: 'Travel booking platform',
  },
  {
    href: 'work/invision/',
    src: '/images/invision.webp',
    company: 'InVision',
    description: 'Digital product design platform',
  },
  {
    href: 'work/archive/',
    src: '/images/archive.webp',
    company: 'Archive',
    description: 'Past design adventures',
  },
];

export default function Home() {
  return (
    <>
      <main>
        <MainText text="Product Design. Interfaces. Systems. Strategy. UX. & More" />
        <WorkGallery works={worksData} />
      </main>
    </>
  );
}
