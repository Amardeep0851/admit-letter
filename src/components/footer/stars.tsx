import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Stars() {
  return (
    <div>

      <motion.div
        animate={{ x: [0, -200, 0] }}
        transition={{ duration: 200 }}
        className="absolute bottom-80 right-10 w-[200px] h-[134px] "
      >
        <Image
          src="/images/cloud1.png"
          fill
          alt="Cloud"
          className="opacity-20"
        />
      </motion.div>

      <motion.div
        animate={{ x: [0, 200, 0] }}
        transition={{ duration: 200 }}
        className="absolute bottom-80 left-10 w-[200px] h-[134px] "
      >
        <Image
          src="/images/cloud2.png"
          fill
          alt="Cloud"
          className="opacity-20"
        />
      </motion.div>
    </div>
  );
}

export default Stars;
