import Image from "next/image";
import { Award, CheckCircle2 } from "lucide-react";

type slideProps = {
  slide:{
  alt:string;
  src:string;
  universityOrCollege:string;
  institute:string;
  FirstLetter:string;
  },
  index:number
}

export default function FloatingCard({slide, index}:slideProps) {
 

  return (
    <>
      <div className="relative w-[320px] h-[470px] min-[390px]:w-[370px] cursor-pointer group bg-white/95 rounded-lg mx-auto shadow-2xl/10 shadow-red-700 border-b-4 border-red-700 hover:scale-105 transition-all duration-300 " >
        
        <div className="absolute inset-0 rounded-xl p-6 shadow-2xl/30 shadow-red-700 flex flex-col justify-between overflow-hidden">
        <div className="bg-red-700 size-40 absolute -left-12 -top-12 opacity-10 rounded-full blur-2xl" />
          
          {/* Card Header */}
          <div className="flex items-center  justify-between h-[68px] border-b border-zinc-200 pb-4 pt-2 ">
            <div className="flex items-center gap-3 ">
              {/* University Logo Placeholder */}
              <div className="w-10 h-10 rounded-lg bg-red-700 flex items-center justify-center text-white font-serif font-bold text-xl">{slide.FirstLetter}</div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">{slide.universityOrCollege === "u" ? "University" : "College" }</p>
                <p className="text-slate-900 font-bold leading-tight text-sm">{slide.institute}</p>
              </div>
            </div>
            <div className="bg-green-100 border border-green-300 text-green-700 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide min-[390px]:flex justify-center items-center gap-1 hidden">
              <CheckCircle2 className="size-2.5 -p-0.5" />Approved
            </div>
          </div>

          {/* Card Body - The Letter Content */}
          <div className="relative h-[400px] w-full rounded-md mt-4 ">
              <Image 
                src={slide.src} 
                alt="" 
                fill 
                className="rounded-md opacity-90  "
                placeholder="blur"
                blurDataURL="/images/blur.jpg"
                priority={index === 0}
               />

              <div className="bg-red-100 border-2 border-red-300 text-amber-700 size-16 rounded-full flex flex-col items-center justify-center shadow-lg absolute bottom-1/3 right-1/3 -rotate-[20deg] opacity-60"
                  >
                    <Award className="size-5 mb-1" />
                    <span className="text-[9px] font-black uppercase text-center leading-none">Official<br/>Letter</span>
                  </div>
          </div>


          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform" />
        </div>

        

      </div>
      
    </>
  );
};
