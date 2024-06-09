import React from 'react';
import Card, { Member } from '../Card/Card';

type Props = {};

export default function Team({}: Props) {
  const members: Member[] = [
    {
      name: 'Bonnie Green',
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
          icon: '/images/social_media_icons/twitter.svg',
        },
      ],
    },
    {
      name: 'Bonnie Green',
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
          icon: '/images/social_media_icons/twitter.svg',
        },
      ],
    },
    {
      name: 'Bonnie Green',
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
          icon: '/images/social_media_icons/twitter.svg',
        },
      ],
    },
    {
      name: 'Bonnie Green',
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
          icon: '/images/social_media_icons/twitter.svg',
        },
      ],
    },
    {
      name: 'Bonnie Green',
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
          icon: '/images/social_media_icons/twitter.svg',
        },
      ],
    },
  ];

  return (
    <div className="mt-36">
      <h2 className="font-medium text-3xl md:text-4xl lg:text-5xl leading-tight mt-14 mb-16">
        {`Our Team`}
      </h2>
      <div className="grid grid-cols-3 grid-rows-2 gap-5">
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
