"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { StaticImageData } from "next/image";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { usePathname } from "next/navigation";

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
        " flex justify-between items-center font-medium text-xl"
      }
    >
      <ul>
        <li className=" py-4 px-12">
          <Link href="/">LUMA Dev</Link>
        </li>
      </ul>
      {/* 
      Follow the documentation:
      https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#link-component
       */}
      <ul className="flex justify-around">
        {items.map((item) => (
          <li className="py-4 px-12">
            <Link
              href={item.url}
              className={
                (itemExtraClasses ? itemExtraClasses : "") +
                " hover:border-b-2 hover:border-black transition ease-in-out duration-300"
              }
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
