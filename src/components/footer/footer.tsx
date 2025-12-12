import React from 'react'
import { Button } from "@/components/ui/button"

function Footer() {
  return (
    <footer className="bg-black text-white py-16 mt-20">
  <div className="max-w-7xl mx-auto px-6 text-center space-y-6">

    {/* Heading */}
    <h2 className="text-3xl font-bold">
      Ready to begin your admission journey?
    </h2>

    {/* Sub-text */}
    <p className="text-gray-300  mx-auto">
      Start today for just ₹1 and get your official admit letter without stress, delays, or confusion.
    </p>

    {/* CTA */}
    <div className="relative">
        <Button
         variant="red"
        className="px-5"
        >
        Apply Now →
        
      </Button>
    
    </div>

    {/* Trust badges */}
    <div className="flex justify-center space-x-6 text-gray-400 text-sm pt-6">
      <span>✔ 100% Verified admit letters</span>
      <span>✔ Transparent process</span>
      <span>✔ Student support</span>
    </div>

    {/* Bottom minimal line */}
    <p className="text-gray-500 text-xs pt-10">
      © 2025 AdmitLetter. All rights reserved.
    </p>

  </div>
</footer>

  )
}

export default Footer