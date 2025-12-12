import React from "react";
import Image from "next/image";
import Footer from "@/components/footer/footer";
import { FaqSection } from "@/components/faq/faq";
import TestimonialSection from "@/components/testimonial-section/testimonial-section";
import HeroSection2 from "@/components/hero-section/hero-section2";
import HowThisWork from "@/components/how-this-work/how-this-work";
import ContactForm from "@/components/contact-form/contact-form";
import WhatsappButton from "@/components/whatsapp/whatsapp-button";
import UniversitySection from "@/components/Universities/universities";
import CountriesSection from "@/components/countries/countries";

function page() {
  return (
    <>
      <div className="bg-zinc-950">
        <div className="pt-12 max-w-7xl mx-auto relative px-4 xl:px-0 ">
          <HeroSection2 />
        </div>
      <div className=" bg-white">
        <UniversitySection />
      </div>
      </div>
      <div className="bg-zinc-100 ">
        <CountriesSection />
      </div>
      <div className="bg-zinc-50">
        <HowThisWork />
      </div>
      <div className="relative">
        <Image
          src="/images/contact-us-agent3.png"
          fill
          alt="Agent"
          objectFit="cover"
          objectPosition="center"
          className="opacity-5"
        />
        <ContactForm />
      </div>
      <div className="w-full ">
        <div className="max-w-7xl mx-auto relative px-4 xl:px-0 ">
          <TestimonialSection />
        </div>

        <div className="bg-[#fafafc]">
          <FaqSection />
        </div>
        <div>
          <Footer />
        </div>
        <div>
          <WhatsappButton />
        </div>
      </div>
    </>
  );
}

export default page;
