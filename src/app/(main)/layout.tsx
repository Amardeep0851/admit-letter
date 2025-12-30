import Header from "@/components/header/header";
import React from 'react';
import type { Metadata } from "next";
import Watermark from "@/components/watermark/watermark";

export const metadata: Metadata = {
  description:
    "Get a verified university offer letter for just ₹1. Trusted by students applying to USA, UK, Canada, Germany & more.",
  openGraph: {
    type: "website",
    title: "Get Verified University Offer Letter for ₹1",
    description:
      "Apply to top universities with expert counseling. No hidden charges.",
    images: [
      {
        url: "/og/landing-og.jpg",
        width: 1200,
        height: 630,
        alt: "Verified Admit Letter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

function layout({children}:{children:React.ReactNode}) {
  return (
    <div>
      <Watermark />

      <div className="bg-black">
        <Header />
      </div>
      <div className="pt-0">
        { children }
      </div>
      </div>
  )
}

export default layout