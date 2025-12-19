"use client"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
import React, { useEffect, useRef } from 'react';
import { 
  BookOpen,
  FileText, 
  GraduationCap, 
  Send, 
  UserCheck 
} from "lucide-react";

import { cn } from "@/lib/utils";
import LeftCoumn from "./left-column";
import { customScrollTo } from "@/lib/scroll-to";
import CustomButton from "@/components/ui/custom-button";

gsap.registerPlugin(ScrollTrigger);
function HowThisWork() {

  const divStep = useRef<(SVGSVGElement | null)[]>([]);
  const divLine = useRef<(HTMLDivElement | null)[]>([]);
  const divMainElement = useRef<(HTMLDivElement | null)[]>([]);
  const divElement = useRef<(HTMLHeadingElement | null)[]>(null);

  const steps = [
    {
      step:1,
      title:"Submit your details",
      content:"Fill out our secure form or call us directly. We just need your basic profile to get started.",
      icon:FileText,
    },
    {
      step:2,
      title:"Profile Verification",
      content:"Our experts review your documents and academic history to ensure 100% eligibility.",
      icon:UserCheck,
    },
    {
      step:3,
      title:"Application Submission",
      content:"We handle the complex paperwork and submit the official application on your behalf.",
      icon:Send,
    },
    {
      step:4,
      title:"Receive Admit Letter",
      content:"Get your official, fully-formatted admit letter delivered to your inbox for just ₹1.",
      icon:GraduationCap,
    },
  ]

  useEffect(() => {
    divStep.current.map((el) => {
      gsap.fromTo(el, {
        opacity:0,
        scale:0.8,
        duration:0.4
      },{
        opacity:1,
        scale:1, 
        ease: "power2.out",
        scrollTrigger:{
          trigger:el,
          scroller:"body",
          
          start: "top 55%", 
          end:"bottom 60%",
          scrub: true,
        }
      })
    });

    

    divMainElement.current.map((el) => {
      gsap.fromTo(el, {
        opacity:0.5,
        filter:"grayScale(100%)",
        duration:0.4
      },{
        opacity:1,
        filter:"grayScale(0%)",
        ease: "power2.out",
        scrollTrigger:{
          trigger:el,
          scroller:"body",
          
          start: "top 55%", 
          end:"bottom 60%",
          scrub: true,
        }
      })
    });
     divLine.current.map((el) => {
      gsap.fromTo(el, {
        height:0

      },{
        height:120,
        ease: "none",
        transformOrigin: "top",
        scrollTrigger:{
          trigger:el,
          scroller:"body",
          start: "top 55%", 
          end: "+=120 55%",
          scrub: true,
        }
      })
    });
    divElement?.current?.map(() => {
      gsap.fromTo(divElement.current, {
      opacity:0,
      y:-20
    },{
      opacity:1,
      y:0,
      scrollTrigger:{
          trigger:divElement.current,
          scroller:"body",
          start: "bottom 90%", 
          end: "bottom 85%",
          scrub: true,
          markers:true
        }
    })
    })
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  },[]);

  const addToRefs = (el: HTMLHeadingElement | null) => {
    if (el &&  !divElement?.current?.includes(el)) {
      divElement?.current?.push(el);
    }
  };

  return (
    <section className="bg-white py-20 px-4 xl:px-0">
      <div className="max-w-7xl mx-auto  lg:grid lg:grid-cols-5  flex flex-col ">

          <LeftCoumn />
        <div className="order-1 lg:order-2 col-span-3">
          <h2 
          ref={addToRefs}
          className="text-red-700 flex gap-2 items-center font-semibold">
            <GraduationCap className="size-4 " />
            We help you get into your dream college.
          </h2>
          <h3 
          ref={() => {divElement.current}}
          className="text-5xl font-bold pt-3 pb-8">
            How does it work?
          </h3>
          {
            steps.map((item, index) => 
              {
              return <div className="flex px-3 " key={index}>
                <div className="relative rounded-full z-50">
                  <span 
                  
                  className="w-11 h-14 bg-white text-zinc-300 p-1 rounded-full absolute top-0 border-6 border-zinc-200 text-2xl flex justify-center items-center font-bold" >
                    {item.step}
                  </span>
                  <item.icon 
                  ref={el => {divStep.current[index] = el}}
                  className="w-11 h-14 bg-red-700 text-white p-1 rounded-full absolute top-0 border-6 border-red-100 shadow-xl/30 shadow-red-600" />

                  
                </div>
                <div className={cn("flex pt-1 relative ", steps.length === index+1 ? "pl-6" : "visible")}>
                  <div className="flex ">
                    <div 
                      className={cn("h-[120px] w-1 bg-zinc-200 ml-5 z-0 ", steps.length === index+1 ? "hidden" : "visible" )} />
                    <div 
                      ref={el => {divLine.current[index] = el}}
                      className={cn(" h-[120px] w-1 bg-red-700 -ml-1 z-0 origin-top", steps.length === index+1 ? "hidden" : "visible" )} />
                  </div>

                  <div 
                  ref={el => {divMainElement.current[index] = el}}
                  className="pl-10">
                    <h4 className="text-xl font-bold pb-1 "> 
                    {item.title}
                  </h4>
                  <p className=" text-zinc-600 text-base">
                    {item.content}
                  </p>
                </div>
                  </div>
              </div>
            })
          }
          
          <div className="pt-8 md:pl-4 pl-0  pb-8">
            <CustomButton title="Start for just 1" onClick={() =>customScrollTo("ContactForm")} />
            <div 
              className="bg-zinc-200 py-2 px-3 mt-4 rounded-md flex items-center space-x-3"
            >
              <BookOpen className="w-5 h-5 text-red-700" />
              <p className="text-zinc-600 leading-relaxed ">
                It’s an official document issued by the university or college.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowThisWork