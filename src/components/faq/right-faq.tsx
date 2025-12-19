import React from 'react';
import Image from "next/image";
import {motion} from "framer-motion"

function RightFaq() {
  return (
    <div className=" flex justify-center items-start w-full col-span-3 order-1 lg:order-2 ">
        <div className="w-[400px] aspect-square relative">
          <Image
            src="/images/faq.png"
            alt="Frequntly Ask Demo Image."
            className="absolute"
            placeholder="blur"
            blurDataURL="/images/blur.jpg"
            priority={false}
            fill
          />
          <motion.div
            className="h-[90px] aspect-square absolute right-20 -top-5"
            animate={{ x: [0, 5, 0, -5, 0], y: [0, 5, 0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, times: [0.5, 0.9, 1] }}
          >
            <Image
              src="/images/questionmark1.png"
              alt="Frequntly Ask Demo Image."
              className="absolute"
              placeholder="blur"
            blurDataURL="/images/blur.jpg"
            priority={false}
              fill
            />
          </motion.div>

          <motion.div
            className="h-[130px] aspect-square absolute left-25 top-5"
            animate={{ x: [5, 0, -5, 0, 0], y: [0, 5, 0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, times: [0.5, 0.9, 1] }}
          >
            <Image
              src="/images/questionmark2.png"
              alt="Frequntly Ask Demo Image."
              className="absolute"
              placeholder="blur"
              blurDataURL="/images/blur.jpg"
              priority={false}
              fill
            />
          </motion.div>
        </div>
      </div>
  )
}

export default RightFaq