import React from "react";
import { CheckCircle } from "lucide-react";

import { customScrollTo } from "@/lib/scroll-to";
import CustomButton from "@/components/ui/custom-button";

type RightTabProps = {
  country:string
}


function RightTab({country}:RightTabProps) {
  const optionsProvided = [
    "Shortlist Universities",
    "Review SOP & LORs",
    "Review SOP & LORs"
  ]
  return (
    <div className="lg:col-span-3 bg-red-100 rounded-md lg:ml-8 p-8 ">
      <div className="rounded-md bg-white text-sm px-4 py-1 text-red-700 font-semibold flex gap-2 items-center w-36 shadow-md border-zinc-200">
          <div className="relative flex items-center" >
            <div className="size-2 bg-red-700 animate-ping rounded-full absolute" />
            <div className="size-2 bg-red-700 rounded-full absolute" />
          </div>
          <div className="pl-2">Limited Offer</div>
      </div>
      <h3 className="pt-1 font-bold text-xl text-red-800">Ready to apply to {country}?</h3>
      <ul className="pt-4 pb-6">
        {
          optionsProvided.map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-zinc-700 text-sm pb-2"> <CheckCircle className="size-4 text-red-700" /> {item} </li> 
        ))
        }
      </ul>
      <CustomButton title="Start for just ₹999" onClick={() =>customScrollTo("ContactForm")} />
      <div className="text-sm text-left pt-2 text-zinc-500">
        Offer valid for first consultation.
      </div>
    </div>
  );
}

export default RightTab;
