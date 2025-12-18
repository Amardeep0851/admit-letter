import {motion, useMotionValue, useTransform} from "framer-motion"
import { Award, CheckCircle2 } from "lucide-react";
import Image from "next/image";

type slideProps = {
  alt:string;
  src:string;
  universityOrCollege:string;
  institute:string;
  FirstLetter:string;
}

export default function FloatingCard({slide}:{slide:slideProps}) {
 

  return (
    <div>
      <div className="relative w-[320px] h-[470px] min-[390px]:w-[370px] cursor-pointer group bg-white/95 rounded-lg mx-auto shadow-2xl/50 shadow-red-700 " >
        
        <div className="absolute inset-0 rounded-xl p-8 shadow-2xl/30 shadow-red-700 flex flex-col justify-between overflow-hidden">
          
          {/* Card Header */}
          <div className="flex items-center  justify-between h-[68px] border-b border-zinc-200 pb-4 pt-2">
            <div className="flex items-center gap-3 ">
              {/* University Logo Placeholder */}
              <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white font-serif font-bold text-xl">{slide.FirstLetter}</div>
              <div>
                <p className="text-xs text-slate-500 font-bold tracking-widest uppercase">{slide.universityOrCollege === "u" ? "University" : "College" }</p>
                <p className="text-slate-900 font-bold leading-tight">{slide.institute}.</p>
              </div>
            </div>
            <div className="bg-green-100 border border-green-300 text-green-700 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide min-[390px]:flex justify-center items-center gap-1 hidden">
              <CheckCircle2 className="size-2.5 -p-0.5" />Approved
            </div>
          </div>

          {/* Card Body - The Letter Content */}
          <div className="space-y-4 relative h-[400px] w-full rounded-md mt-4 shadow-2xl/20 ">
              <Image src={slide.src} alt="" fill className="rounded-md  " />

              <div className="bg-amber-100 border-2 border-amber-300 text-amber-700 size-16 rounded-full flex flex-col items-center justify-center shadow-lg absolute bottom-0 right-0 -rotate-[20deg]"
                  >
                    <Award className="size-5 mb-1" />
                    <span className="text-[7px] font-black uppercase text-center leading-none">Official<br/>Letter</span>
                  </div>
          </div>


          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform" />
        </div>

        

      </div>
      
    </div>
  );
};
