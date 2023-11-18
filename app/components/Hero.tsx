import React from 'react'
import Image from 'next/image'
import headshot from '../../public/images/headshot.jpg'
import { FaHeart } from 'react-icons/fa'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className="mt-[60px]">
      <div className="max-w-[1400px] w-[90vw] mx-auto flex flex-row justify-between">
      <div className="flex flex-col justify-center">
        <h1 className="text-7xl font-semibold">Natasha Johnson</h1>
        <p className="text-3xl">Software Engineer @ Township</p>
        <p className="flex items-center gap-1 mt-4">I <FaHeart className="text-red-500"/> the front end.</p>
        <div className="mt-6 flex flex-row gap-4">
          <Link href="#projects" className="border bg-blue-500 text-white rounded px-3 py-2 hover:bg-blue-700">View Projects</Link>
          <Link href="#contact" className="border border-blue-500 text-blue-500 rounded px-3 py-2 hover:bg-blue-200">Contact</Link>
        </div>
      </div>
      <div>
        <Image src={headshot} alt="Natasha Johnson headshot"/>
      </div>
      </div>
    </section>
  )
}

export default Hero