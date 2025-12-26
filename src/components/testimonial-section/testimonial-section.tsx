"use client";

import React from "react";

import LeftTestimonial from "./left-testimonial";
import RightTestimonial from "./right-testimonial";

function TestimonialSection(){
  return (
    <section className=" py-20 overflow-hidden max-w-7xl mx-auto relative px-4 xl:px-0 ">
      <div className="grid grid-cols-1 lg:grid-cols-11 items-center gap-8">
        <LeftTestimonial />
        <RightTestimonial />
    </div>
    </section>
  );
};

export default TestimonialSection;