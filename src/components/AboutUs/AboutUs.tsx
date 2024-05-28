import React from 'react'
import CopyEmail from '../CopyEmail/CopyEmail'
import Link from 'next/link'
import { GeistSans } from 'geist/font/sans'

export default function AboutUs() {
  return (
    <div
      className={`${GeistSans.className} font-light text-[1.375rem] pt-[10vw] pb-[12vw] max-w-[760px] mx-auto flex flex-col max-md:max-w-full max-md:mx-5 max-md:py-[20vh]`}
    >
      <div className='flex flex-col'>
        <p>
          Nós somos a Luma, uma equipe de desenvolvedores e designers
          apaixonados por tecnologia e inovação. Nosso objetivo é ajudar
          empresas a alcançar seus objetivos digitais através de soluções
          personalizadas e eficientes.
        </p>
        <Link
          href='/about'
          className='font-semibold pt-[30px] w-fit hover:underline hover:decoration-solid'
        >
          Mais sobre nós
        </Link>
      </div>
      <CopyEmail email='contato@luma.dev' />
    </div>
  )
}
