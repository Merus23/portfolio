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
  member?: Member;
};

export default function Card({ cssMainDiv, member }: Props) {
  return (
    <div
      className={cssMainDiv + ` w-full max-w-72 bg-white rounded-lg shadow-xl`}
    >
      <div className="flex flex-col items-center pb-6 pt-4">
        <Image
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={`/images/team/main.jpg`}
          height={1000}
          width={1000}
          alt=""
        />
        <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
          Bonnie Green
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Visual Designer
        </span>
        <div className="flex mt-4 md:mt-6 gap-3">
          <Link
            target="_blank"
            href={`https://www.linkedin.com/in/mateus-silva-893a4322b/`}
            //className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-700 dark:hover:bg-gray-950 dark:focus:ring-blue-300"
            className="max-w-8 hover:scale-110"
          >
            <img src="/images/social_media_icons/linkedin.svg" alt="" />
          </Link>
          <Link
            target="_blank"
            href={`https://www.linkedin.com/in/mateus-silva-893a4322b/`}
            //className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-700 dark:hover:bg-gray-950 dark:focus:ring-blue-300"
            className="max-w-8 hover:scale-110"
          >
            <img src="/images/social_media_icons/github.svg" alt="" />
          </Link>
          <Link
            target="_blank"
            href={`https://www.linkedin.com/in/mateus-silva-893a4322b/`}
            //className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-700 dark:hover:bg-gray-950 dark:focus:ring-blue-300"
            className="max-w-8 hover:scale-110"
          >
            <img src="/images/social_media_icons/linkedin.svg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
