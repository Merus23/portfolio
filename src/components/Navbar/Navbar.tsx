import Link from "next/link";
import styles from "./Navbar.module.css";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className={GeistSans.className}>
      <ul className="flex justify-between font-medium text-xl">
        <li className="px-8 py-4 ">
          <Link
            href="/"
            className="hover:border-b-2 hover:border-black transition ease-in-out duration-300 "
          >
            LUMA Dev
          </Link>
        </li>
        <li className="px-8 py-4">
          <Link
            href="/about"
            className="hover:border-b-2 hover:border-black transition ease-in-out duration-300"
          >
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
}
