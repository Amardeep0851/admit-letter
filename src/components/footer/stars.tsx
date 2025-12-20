import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Stars() {
  return (
    <div>

      <motion.div
        animate={{ x: [0, -200, 0] }}
        transition={{ duration: 200, repeat:Infinity }}
        className="absolute md:bottom-80 right-10 bottom-60  w-[200px] h-[134px] "
      >
        <Image
          src="/images/cloud1.png"
          fill
          alt="Cloud"
          className="opacity-20"
        />
      </motion.div>

      <motion.div
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 100, repeat:Infinity }}
        className="absolute md:bottom-80 md:left-0 bottom-[450px]  -left-10  w-[200px] h-[134px]  "
      >
        <Image
          src="/images/cloud2.png"
          fill
          alt="Cloud"
          className="opacity-20"
        />
      </motion.div>
      <motion.div
        animate={{ x: [-200, 200, -200] }}
        transition={{ duration: 400, repeat:Infinity }}
        className="absolute md:bottom-64 md:left-1/2 left-0   bottom-60  w-[200px] h-[134px] "
      >
        <Image
          src="/images/cloud3.png"
          fill
          alt="Cloud"
          className="opacity-20"
        />
      </motion.div>
    </div>
  );
}

export default Stars;
