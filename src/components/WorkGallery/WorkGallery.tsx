import Link from 'next/link';
import Image from 'next/image';

function WorkGallery() {
  const works = [
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-4 gap-x-24">
      {works.map((work, index) => (
        <Link
          href={work.href}
          key={index}
          className={`block ${index % 2 === 1 ? 'md:mt-52' : ''}`}
        >
          <div className="relative w-full h-screen overflow-hidden transition-transform duration-500 transform hover:scale-95 rounded-3xl">
            <div className="absolute inset-0 transition-transform duration-500 transform hover:scale-110">
              <Image
                src={work.src}
                alt={work.company}
                height={1000}
                width={1000}
                className="rounded-3xl object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="p-4 flex flex-col items-center text-center">
            <div className="font-bold text-xl">{work.company}</div>
            <div className="text-gray-600">{work.description}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default WorkGallery;
