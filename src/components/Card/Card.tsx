import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface NetWork {
  link: string;
  icon: string;
}
export interface Member {
  name: string;
  role: string;
  image: string;
  networks: NetWork[];
}

type Props = {
  cssMainDiv?: string;
  member: Member;
};

export default function Card({ cssMainDiv, member }: Props) {
  return (
    <div
      className={
        cssMainDiv && '' + ` w-full max-w-72 bg-white rounded-lg shadow-xl`
      }
    >
      <div className="flex flex-col items-center pb-6 pt-4">
        <Image
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={member.image}
          height={1000}
          width={1000}
          alt=""
        />
        <h5 className="mb-1 text-lg font-medium text-gray-900">
          {member.name}
        </h5>
        <span className="text-sm text-gray-500">{member.role}</span>
        <div className="flex mt-4 md:mt-6 gap-3">
          {member.networks.map((network, index) => {
            return (
              <Link
                key={index}
                target="_blank"
                href={network.link}
                className="max-w-8 hover:scale-110"
              >
                <Image src={network.icon} width={500} height={500} alt="" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
