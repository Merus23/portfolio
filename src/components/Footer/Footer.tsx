import React from 'react'
import { GeistSans } from 'geist/font/sans'

export default function Footer() {
  return (
    <footer
      className={`${GeistSans.className} text-[#888888] text-sm max-w-[760px] mx-auto py-10 max-md:w-full max-md:px-5`}
    >
      &copy; Luma 2024
    </footer>
  )
}
