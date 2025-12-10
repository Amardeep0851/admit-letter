import Header from "@/components/header/header"
import React from 'react'

function layout({children}:{children:React.ReactNode}) {
  return (
    <div>
      <div className="bg-black">
        <Header />
      <div className="pt-0">
        { children }
      </div>
      </div>
    </div>
  )
}

export default layout