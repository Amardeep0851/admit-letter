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
      <div className="relative w-[320px] h-[470px] min-[390px]:w-[370px] cursor-pointer group bg-white rounded-lg mx-auto shadow-2xl/10 shadow-red-700 border-b-4 border-red-700  transition-all duration-300 " >
        
        <div className="absolute inset-0 rounded-xl px-2 py-3 shadow-2xl/30 shadow-red-700 flex flex-col justify-between overflow-hidden">
        <div className="bg-red-700 size-40 absolute -left-12 -top-12 opacity-10 rounded-full blur-2xl z-[9999]" />
          
          
          

          {/* Card Body - The Letter Content */}
          <div className="relative h-full w-full rounded-md  ">
            
            {/* <div className="bg-green-100  border-green-300 text-green-700 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide min-[390px]:flex justify-center items-center gap-1 hidden z-50 w-[100px] bottom-4 absolute right-0 ">
              <CheckCircle2 className="size-2.5 -p-0.5" />Approved
          </div> */}
              <Image 
                src={slide.src} 
                alt="" 
                fill 
                className="rounded-md opacity-90   "
                placeholder="blur"
                blurDataURL="/images/blur.jpg"
                priority={index === 0}
               />

              {/* <div className="bg-red-100 border-2 border-red-300 text-amber-700 size-16 rounded-full flex flex-col items-center justify-center shadow-lg absolute bottom-1/2 right-1/3 -rotate-[20deg] opacity-60"
                  >
                    <Award className="size-5 mb-1" />
                    <span className="text-[9px] font-black uppercase text-center leading-none">Official<br/>Letter</span>
                  </div> */}
          </div>


          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform" />
        </div>

        

      </div>
      
    </>
  );
};
