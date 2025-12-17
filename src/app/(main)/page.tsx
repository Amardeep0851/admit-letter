import React from "react";
import Image from "next/image";

import TestimonialSection from "@/components/testimonial-section/testimonial-section";
import HowThisWork from "@/components/how-this-work/how-this-work";
import ContactForm from "@/components/contact-form/contact-form";
import WhatsappButton from "@/components/whatsapp/whatsapp-button";
import FaqSection from "@/components/faq/faq";
import HeroSection2 from "@/components/hero-section/hero-section2";
import UniversitySection2 from "@/components/Universities/universities2";
import Footer from "@/components/footer/footer";
import CountriesSection3 from "@/components/countries/country3";
import RequirementsSection from "@/components/requirements/requirements";

function page() {
  return (
    <div className="font-sans">
      
      <HeroSection2 />
      <div className=" bg-white">
        <UniversitySection2 />
      </div>
      
      <div className="relative">
        <Image src="/images/contact-us-agent3.png" fill alt="Agent" objectFit="cover" objectPosition="center" className="opacity-15" />
        <ContactForm />
      </div> 
      <div className="bg-zinc-100 ">
        <CountriesSection3 />
      </div>
      <div className="bg-zinc-50">
          <HowThisWork />
      </div>
          <div >
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
