import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="px-4 py-2 fixed w-full top-0 bg-primary text-white z-30">
      <Navbar />
    </header>
  )
}

export default Header