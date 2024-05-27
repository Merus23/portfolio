'use client';

import Link from 'next/link';
import { StaticImageData } from 'next/image';

import { usePathname } from 'next/navigation';

interface item {
  title: string;
  url: string;
}

type Props = {
  logo: StaticImageData | item;
  item: item;
  itemExtraClasses?: string;
};

/**
 * @description The Navbar component is a simple navigation bar that displays a logo and a item
 * @param logo - The website logo
 * @param items - The items to be displayed in the navbar
 * @param itemExtraClasses - Extra classes to be added to the each item
 * @returns The Navbar component
 */
export default function Navbar({ logo, item, itemExtraClasses }: Props) {
  const currentPath = usePathname();

  return (
    <nav className={`flex justify-between items-center font-medium text-xl`}>
      <ul className={`flex justify-between w-full`}>
        <li className={`hidden md:inline py-4 text-nowrap`}>
          <Link href="/">LUMA Dev</Link>s
        </li>

        <div className="flex justify-end w-full md:w-10/12">
          <li className={`py-4`}>
            <Link
              href={currentPath === '/' ? '/about' : '/'}
              className={
                (itemExtraClasses ? itemExtraClasses : '') +
                'hover:border-b-2 hover:border-black transition ease-in-out duration-300 '
              }
            >
              {currentPath === '/' ? 'About' : 'Work'}
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
