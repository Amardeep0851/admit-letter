"use client";

import React, from "react";

import LeftTestimonial from "./left-testimonial";
import RightTestimonial from "./right-testimonial";

function TestimonialSection(){
  return (
    <section className=" py-24 overflow-hidden relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
        <LeftTestimonial />
        <RightTestimonial />
    </div>
    </section>
  );
};

export default TestimonialSection;