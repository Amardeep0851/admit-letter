"use client"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { 
  BookOpen,
  FileText, 
  GraduationCap, 
  Send, 
  UserCheck 
} from "lucide-react";

import { cn } from "@/lib/utils";
import LeftColumn from "./left-column";
import { customScrollTo } from "@/lib/scroll-to";
import CustomButton from "@/components/ui/custom-button";

gsap.registerPlugin(ScrollTrigger);
function HowThisWork() {

  const divStep = useRef<(SVGSVGElement | null)[]>([]);
  const divLine = useRef<(HTMLDivElement | null)[]>([]);
  const divMainElement = useRef<(HTMLDivElement | null)[]>([]);
  const divElement = useRef<(HTMLHeadingElement | null)[]>(null);
  const [currentImage,setCurrentImage] = useState(0)

  const steps = useMemo(() =>  [
  {
    step: 1,
    title: "Start for ₹1",
    content:
      "Create your profile and get a quick eligibility check. No commitment, just clarity.",
    icon: FileText,
    image:"/images/howthiswork/1.jpg"
  },
  {
    step: 2,
    title: "Shortlist & Strategy",
    content:
      "Get 3-6 matched courses or universities with clear requirements, fees, and deadlines.",
    icon: UserCheck,
    image:"/images/howthiswork/2.jpg"
  },
  {
    step: 3,
    title: "Documents & Application",
    content:
      "We help prepare SOPs, LORs, and financial checklists, then submit genuine applications.",
    icon: Send,
    image:"/images/howthiswork/3.jpg"
  },
  {
    step: 4,
    title: "Offer Letter & Next Steps",
    content:
      "Track decisions, book IELTS/DET if needed, and prepare for the visa stage.",
    icon: GraduationCap,
    image:"/images/howthiswork/4.jpg"
  },
],[]);

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

    

    divMainElement.current.map((el, index) => {
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
          onEnter:() => setCurrentImage(index),
          onEnterBack:() => setCurrentImage(index)

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
    <section className="bg-zinc-50 py-20 px-4 xl:px-0 ">
      <div className="max-w-7xl mx-auto  ">
        <div className="flex justify-center items-center flex-col">
          <h2 ref={addToRefs}
          className="text-red-700 flex gap-2 items-center font-semibold ">
            <GraduationCap className="size-4 " />
            We help you get into your dream college.
          </h2>
          <h3 
          ref={() => {divElement.current}}
          className="text-4xl md:text-5xl lg:text-6xl font-bold pt-3 pb-8 ">
            How does it <span className="text-red-700">work?</span>
          </h3>
        </div>
        <div className=" lg:grid lg:grid-cols-5  flex flex-col">
          <LeftColumn currentImage={currentImage} steps={steps} />
        <div className=" order-1 lg:order-2 col-span-3">
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
          
          <div className="pt-8 md:pl-4 pl-0 ">
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
      </div>
    </section>
  )
}

export default HowThisWork