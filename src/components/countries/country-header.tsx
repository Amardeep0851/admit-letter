import React from "react";
import Image from "next/image";
import Flag from "react-world-flags"

type CountryHeaderProps = {
  country:string;
  flag:string;
}

function CountryHeader({country, flag}:CountryHeaderProps) {
  return (
    <div className="flex gap-4">
      <div className="relative">
        <Flag code={flag} className="w-[60px] h-[66px] border-2 border-zinc-200 rounded-lg shadow-sm object-cover" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-zinc-800 leading-10">
          Study in {country}
        </h3>
        <p className=" text-zinc-500 text-md ">
          Everything you need to know before you apply.
        </p>
      </div>
    </div>
  );
}

export default CountryHeader;
