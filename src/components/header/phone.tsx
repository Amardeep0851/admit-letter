import { PhoneCall } from "lucide-react"
import React from 'react'

function Phone() {
  return (
    <div className="pt-5 flex items-center gap-2 font-semibold">
      <PhoneCall className="size-4" />
      +91-9232322929
    </div>
  )
}

export default Phone