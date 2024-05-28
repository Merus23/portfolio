import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GeistSans } from 'geist/font/sans';

type Props = {};

export default function Card({}: Props) {
  return (
    <div
      className={`w-full max-w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
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
        <div className="flex mt-4 md:mt-6">
          <Link
            target="_blank"
            href={`https://www.linkedin.com/in/mateus-silva-893a4322b/`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-700 dark:hover:bg-gray-950 dark:focus:ring-blue-300"
          >
            Linkedin
          </Link>
        </div>
      </div>
    </div>
  );
}
