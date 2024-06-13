import dynamic from 'next/dynamic';
import 'react-multi-carousel/lib/styles.css';
import Card, { Member } from '../Card/Card';
import { ButtonGroupProps } from 'react-multi-carousel';

// Carrega o componente de forma dinâmica para evitar problemas de SSR (Server-Side Rendering)
const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: false });

type Props = {};

export default function Team({}: Props) {
  const members: Member[] = [
    {
      name: 'Mateus',
      role: 'Visual Designer',
      image: '/images/team/main.jpg',
      networks: [
        {
          link: 'https://www.linkedin.com/in/mateus-silva-893a4322b/',
          icon: '/images/social_media_icons/linkedin.svg',
        },
        {
          link: 'https://www.linkedin.com/in/mateus-silva-893a4322b/',
          icon: '/images/social_media_icons/github.svg',
        },
        {
          link: 'https://www.linkedin.com/in/mateus-silva-893a4322b/',
          icon: '/images/social_media_icons/linkedin.svg',
        },
      ],
    },
    {
      name: 'Maria Eduarda',
      role: 'Visual Designer',
      image: '/images/team/main.jpg',
      networks: [
        {
          link: 'https://www.linkedin.com/in/mateus-silva-893a4322b/',
          icon: '/images/social_media_icons/linkedin.svg',
        },
        {
          link: 'https://www.linkedin.com/in/mateus-silva-893a4322b/',
          icon: '/images/social_media_icons/github.svg',
        },
        {
          link: 'https://www.linkedin.com/in/mateus-silva-893a4322b/',
          icon: '/images/social_media_icons/linkedin.svg',
        },
      ],
    },
    {
      name: 'Marcio',
      role: 'Visual Designer',
      image: '/images/team/main.jpg',
      networks: [
        {
          link: 'https://www.linkedin.com/in/mateus-silva-893a4322b/',
          icon: '/images/social_media_icons/linkedin.svg',
        },
        {
          link: 'https://www.linkedin.com/in/mateus-silva-893a4322b/',
          icon: '/images/social_media_icons/github.svg',
        },
        {
          link: 'https://www.linkedin.com/in/mateus-silva-893a4322b/',
          icon: '/images/social_media_icons/linkedin.svg',
        },
      ],
    },
    {
      name: 'Lucas',
      role: 'Visual Designer',
      image: '/images/team/main.jpg',
      networks: [
        {
          link: 'https://www.linkedin.com/in/mateus-silva-893a4322b/',
          icon: '/images/social_media_icons/linkedin.svg',
        },
        {
          link: 'https://www.linkedin.com/in/mateus-silva-893a4322b/',
          icon: '/images/social_media_icons/github.svg',
        },
        {
          link: 'https://www.linkedin.com/in/mateus-silva-893a4322b/',
          icon: '/images/social_media_icons/linkedin.svg',
        },
      ],
    },
    {
      name: 'Marcos Paulo',
      role: 'Visual Designer',
      image: '/images/team/main.jpg',
      networks: [
        {
          link: 'https://www.linkedin.com/in/mateus-silva-893a4322b/',
          icon: '/images/social_media_icons/linkedin.svg',
        },
        {
          link: 'https://www.linkedin.com/in/mateus-silva-893a4322b/',
          icon: '/images/social_media_icons/github.svg',
        },
        {
          link: 'https://www.linkedin.com/in/mateus-silva-893a4322b/',
          icon: '/images/social_media_icons/linkedin.svg',
        },
      ],
    },
  ];

  const responsive = {
    tablet: {
      breakpoint: { max: 1024, min: 425 },
      items: 3, // Mostra 2 itens por vez em tablets
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1, // Mostra 1 item por vez em celulares
    },
  };

  return (
    <div className="mt-36 overflow-hidden">
      <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl leading-tight mt-14 mb-16">
        Our Team
      </h2>
      <div className="lg:hidden">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customButtonGroup={<CustomButtonGroup />}
          showDots={true}
          swipeable={true}
          draggable={true}
        >
          {members.map((member, index) => (
            <div key={index} className="p-2">
              <Card member={member} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-6">
        {members.map((member, index) => {
          if (index === members.length - 2 && members.length % 2 !== 0) {
            return (
              <div className="col-span-3 flex justify-center gap-5">
                <Card member={member} />
                <Card member={members[index + 1]} />
              </div>
            );
          } else if (index !== members.length - 1 || members.length % 2 === 0) {
            return <Card member={member} />;
          }
        })}
      </div>
    </div>
  );
}

export const CustomButtonGroup = ({ next, previous }: ButtonGroupProps) => {
  return (
    <div className="custom-button-group flex justify-between items-center">
      <button
        className="bg-blue-500 text-white p-2 rounded-full"
        onClick={previous}
      >
        Prev
      </button>
      <button
        className="bg-blue-500 text-white p-2 rounded-full"
        onClick={next}
      >
        Next
      </button>
    </div>
  );
};
