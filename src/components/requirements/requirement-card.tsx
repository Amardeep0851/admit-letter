import {motion} from "framer-motion";
import React from "react";

type RequirementCardProps = {
  item:{
    icon:React.ReactNode;
    title:string;
    desc:string;
    badge:string;
  };
  delay:number;

}

const RequirementCard = ({ item, delay }:RequirementCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group bg-white p-5 rounded-xl border border-zinc-100 shadow-sm hover:shadow-lg hover:shadow-slate-200/50 hover:border-red-100 transition-all cursor-default relative overflow-hidden"
    >
      {/* Hover Gradient Effect */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-50 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

      <div className="flex items-start gap-4 relative z-10">
        {/* Icon Box */}
        <div className="w-12 h-12 flex-shrink-0 bg-slate-50 rounded-lg flex items-center justify-center text-slate-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 duration-200">
          {item.icon}
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start">
             <h4 className="font-bold text-slate-900 text-base leading-tight group-hover:text-red-700 transition-colors">
               {item.title}
             </h4>
             {/* Badge */}
             {item.badge && (
               <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide border 
                 ${item.badge === 'Mandatory' ? 'bg-red-50 text-red-600 border-red-100' : 
                   item.badge === 'Highly Critical' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                   'bg-slate-50 text-slate-500 border-slate-100'}`}>
                 {item.badge}
               </span>
             )}
          </div>
          <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default RequirementCard;