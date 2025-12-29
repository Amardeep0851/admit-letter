import React from "react";

import FaqSection from "@/components/faq/faq";
import Footer from "@/components/footer/footer";
import Featured from "@/components/featured/featured";
import CountriesSection3 from "@/components/countries/country3";
import ContactForm from "@/components/contact-form/contact-form";
import HowThisWork from "@/components/how-this-work/how-this-work";
import WhatsappButton from "@/components/whatsapp/whatsapp-button";
import HeroSection2 from "@/components/hero-section/hero-section2";
import UniversitySection2 from "@/components/Universities/universities2";
import RequirementsSection from "@/components/requirements/requirements";
import TestimonialSection from "@/components/testimonial-section/testimonial-section";
import Script from "next/script";
// import Test from "@/components/test/test"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Verified University Offer Letter for ₹1 | USA, UK, Canada",
  description:
    "Apply to top universities in USA, UK, Canada & Germany. Get a verified offer letter for just ₹1 with expert support.",
};


function page() {
  return (
    
    <div className="font-sans">
      <Script
        id="edu-org-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Admit Letter",
          url: "https://admit-letter.pages.dev",
          description:
            "Verified university offer letters with expert admission guidance.",
          areaServed: ["IN", "US", "UK", "CA", "DE"],
        })}
      </Script>
      
      <HeroSection2 />
      <div className=" bg-white">
        <UniversitySection2 />
      </div>
      <ContactForm />

      <div className="bg-zinc-100">
        <CountriesSection3 />
      </div>

      <HowThisWork />
      <TestimonialSection />
      <RequirementsSection />
      <Featured />
      <FaqSection />
      <Footer />
      <WhatsappButton />
      {/* <Test /> */}
    </div>
  );
}

export default page;
