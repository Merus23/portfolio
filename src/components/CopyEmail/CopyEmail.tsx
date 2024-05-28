'use client'

import { useState } from 'react'
import { GeistSans } from 'geist/font/sans'

type Props = {
  email: string
}

export default function CopyEmail({ email }: Props) {
  const [text, setText] = useState(email)

  const handleClick = () => {
    navigator.clipboard.writeText(email)
    setText('Email Copiado!')
    setTimeout(() => {
      setText(email)
    }, 2000)
  }

  return (
    <div
      className={`${GeistSans.className} text-base/tight flex flex-col w-fit justify-self-center mt-[12vw]`}
    >
      <p className='font-light text-[1.375rem]'>
        {'Fale conosco '}
        <span className='text-[#666666]'>(Clique para copiar):</span>
      </p>
      <span
        onClick={handleClick}
        className={`font-semibold text-[3.7vw] cursor-pointer w-fit ${
          text === email ? 'hover:underline hover:decoration-solid' : ''
        }`}
      >
        {text}
      </span>
    </div>
  )
}
