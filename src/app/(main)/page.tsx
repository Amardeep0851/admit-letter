import React from "react";
import Image from "next/image";
import TestimonialSection from "@/components/testimonial-section/testimonial-section";
import HowThisWork from "@/components/how-this-work/how-this-work";
import ContactForm from "@/components/contact-form/contact-form";
import WhatsappButton from "@/components/whatsapp/whatsapp-button";
import FaqSection from "@/components/faq/faq";
import HeroSection2 from "@/components/hero-section/hero-section2";
import UniversitySection2 from "@/components/Universities/universities2";
import FaqSection2 from "@/components/faq/faq2";
import Footer from "@/components/footer/footer";
import Footer2 from "@/components/footer/footer2";
import Test from "@/components/test/test";
import Test2 from "@/components/test/test2";
import CountriesSection3 from "@/components/countries/country3";

function page() {
  return (
    <>
      <div className="bg-zinc-950">
        <div className="pt-12 max-w-7xl mx-auto relative px-4 xl:px-0 ">
          <HeroSection2 />
        </div>
      <div className=" bg-white">
        <UniversitySection2 />
      </div>
      </div>
      <div className="bg-zinc-100 ">
        <CountriesSection3 />
      </div>
      <div className="relative">
        <Image
          src="/images/contact-us-agent3.png"
          fill
          alt="Agent"
          objectFit="cover"
          objectPosition="center"
          className="opacity-15"
        />
        <ContactForm />
      </div>
      <div className="bg-zinc-50">
        <HowThisWork />
      </div>
      <div className="w-full ">
        <div className="max-w-7xl mx-auto relative px-4 xl:px-0 ">
          <TestimonialSection />
        </div>

        <div className="bg-[#fafafc]">
          <FaqSection />
          <FaqSection2 />
        </div>
        <div>
          <WhatsappButton />
          <Test />
          <Test2 />
        </div>
        <div>
          <Footer2 />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default page;
