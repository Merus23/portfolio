'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';
import { StaticImageData } from 'next/image';

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import { usePathname } from 'next/navigation';

interface item {
  title: string;
  url: string;
}

type Props = {
  logo: StaticImageData | item;
  items: item[];
  itemExtraClasses?: string;
};

/**
 *
 * @param param0
 * @returns
 */
export default function Navbar({ logo, items, itemExtraClasses }: Props) {
  const currentPath = usePathname();

  return (
    <nav
      className={
        GeistSans.className +
        `flex justify-between items-center font-medium text-xl`
      }
    >
      <ul></ul>

      <ul className={`flex justify-between`}>
        <li className={`py-4 px-12`}>
          <Link href="/">LUMA Dev</Link>s
        </li>

        <div className="flex">
          {items.map((item, key) => (
            <li key={key} className={`py-4 px-12`}>
              <Link
                href={item.url}
                className={
                  (itemExtraClasses ? itemExtraClasses : '') +
                  'hover:border-b-2 hover:border-black transition ease-in-out duration-300'
                }
              >
                {item.title}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
}
