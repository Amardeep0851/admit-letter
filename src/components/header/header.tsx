import React from 'react'

import Logo from "./logo"
import Phone from "./phone"

function Header() {
  return (
    <div className="max-w-7xl mx-auto flex justify-between  h-16 text-white px-4 xl:px-0 ">
      <Logo />
      {/* <Navbar /> */}
      <Phone />
    </div>
  )
}

export default Header