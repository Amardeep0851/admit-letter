import React from 'react'
import Logo from "./logo"
import Navbar from "./navbar"
import Phone from "./phone"

function Header() {
  return (
    <div className="max-w-7xl mx-auto flex justify-between text-white px-4 xl:px-0 ">
      <Logo />
      {/* <Navbar /> */}
      <Phone />
    </div>
  )
}

export default Header