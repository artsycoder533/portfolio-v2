import React from 'react'
import Image from 'next/image'
import headshot from '../../public/images/headshot.jpg'
import { FaHeart } from 'react-icons/fa'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className="pt-28 h-[600px] border" id="home">
      <div className="max-w-[1400px] w-[90vw] mx-auto flex flex-row justify-between">
      <div className="flex flex-col">
        <h1 className="text-7xl font-semibold text-primary">Natasha Johnson</h1>
        <p className="text-3xl text-primary">Software Engineer @ Township</p>
        <p className="flex items-center gap-1 mt-4">I <FaHeart className="text-red-500"/> the front end.</p>
        <div className="mt-6 flex flex-row gap-4">
          <Link href="#projects" className="border bg-accent text-white rounded px-3 py-2 hover:bg-secondary">View Projects</Link>
          <Link href="#contact" className="border border-accent text-accent rounded px-3 py-2 hover:text-secondary hover:border-secondary">Contact</Link>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Hero