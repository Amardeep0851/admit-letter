import Image from "next/image"
import React from 'react'

function RightColumn() {
  return (
    <div className="relative h-full col-span-2 ">
            {/* REPLACE '/images/student-cartoon.png' with your generated image file.
               The styling ensures it sits at the bottom nicely like the reference.
            */}
            <div className="relative w-full max-w-lg  h-[400px] lg:h-[500px] overflow-hidden flex justify-center items-center ">
              <Image
                src="/images/offer-letter-with-person.png"
                alt="Student holding offer letter"
                fill
                className="object-contain object-bottom z-40"
                priority
              />
              <div className="rounded-full bg-red-600 opacity-40 blur-3xl w-[330px] aspect-square  border-red-700 -z-40" />
            </div>

            {/* Optional: Floating decorative element like the lime curve in reference */}
            <div className="absolute right-0 top-1/4 w-24 h-48 border-[#cbe346] rounded-l-full opacity-90 hidden lg:block" />
          </div>
  )
}

export default RightColumn