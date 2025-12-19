import React from "react";

import FaqSection from "@/components/faq/faq";
import Footer from "@/components/footer/footer";
import CountriesSection3 from "@/components/countries/country3";
import ContactForm from "@/components/contact-form/contact-form";
import HowThisWork from "@/components/how-this-work/how-this-work";
import WhatsappButton from "@/components/whatsapp/whatsapp-button";
import HeroSection2 from "@/components/hero-section/hero-section2";
import UniversitySection2 from "@/components/Universities/universities2";
import RequirementsSection from "@/components/requirements/requirements";
import TestimonialSection from "@/components/testimonial-section/testimonial-section";

function page() {
  return (
    <div className="font-sans">
        <HeroSection2 />
    <div className=" bg-white">
      <UniversitySection2 />
    </div>

    <ContactForm />
    <div className="bg-zinc-100 ">
      <CountriesSection3 />
    </div>
    <div className="bg-zinc-50">
      <HowThisWork />
    </div>
    <div>
      <TestimonialSection />
    </div>
    <div className="w-full ">
      <RequirementsSection />
    </div>

    <FaqSection />
    <WhatsappButton /> 
    <Footer />
  </div>
  );
}

export default page;
