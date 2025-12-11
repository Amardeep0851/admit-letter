import React from 'react'

function Footer() {
  return (
    <footer className="bg-black text-white py-16 mt-20">
  <div className="max-w-5xl mx-auto px-6 text-center space-y-6">

    {/* Heading */}
    <h2 className="text-3xl font-bold">
      Ready to begin your admission journey?
    </h2>

    {/* Sub-text */}
    <p className="text-gray-300 max-w-xl mx-auto">
      Start today for just ₹1 and get your official admit letter without stress, delays, or confusion.
    </p>

    {/* CTA */}
    <a
      href="#"
      className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors duration-300"
    >
      Apply Now →
    </a>

    {/* Trust badges */}
    <div className="flex justify-center space-x-6 text-gray-400 text-sm pt-6">
      <span>✔ 100% Verified admit letters</span>
      <span>✔ Transparent process</span>
      <span>✔ Student support</span>
    </div>

    {/* Bottom minimal line */}
    <p className="text-gray-500 text-xs pt-10">
      © 2025 AdmitEase. All rights reserved.
    </p>

  </div>
</footer>

  )
}

export default Footer