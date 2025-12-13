import {motion} from "framer-motion"

type MarqueeRowProps = {
  items:string[];
  direction:string;
  speed:number
}
const MarqueeRow = ({ items, direction = "left", speed = 20 }:MarqueeRowProps) => {
  return (
    <div className="flex overflow-hidden relative w-full">
      <motion.div
        className="flex gap-4 flex-nowrap"
        animate={{
          x: direction === "left" ? "-50%" : "0%" 
        }}
        initial={{
          x: direction === "left" ? "0%" : "-50%"
        }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
      >
        
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 px-8 py-3 bg-white border border-slate-200 rounded-full shadow-sm text-slate-700 font-medium whitespace-nowrap hover:border-red-500 hover:text-red-600 hover:shadow-md transition-all cursor-default select-none"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeRow