import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="pt-30 flex flex-col items-center pb-20 px-4 md:px-14">
      <div className="flex max-w-350 w-full flex-wrap justify-center lg:flex-nowrap px-10 2xl:px-0 items-center">
        <div className=" text-center order-2 lg:order-1 px-5 lg:px-0 lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="font-semibold pt-6 lg:pt-0 text-2xl sm:text-3xl md:text-4xl leading-16 text-black"
          >
            Building Scalable <br />
            <span className="text-[#06B8FF] text-5xl sm:text-6xl md:text-[64px]">Mobile Apps</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl lg:text-nowrap leading-15 font-semibold text-black"
          >
            For The Next Digital Generation
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-2 text-lg md:text-xl lg:text-2xl leading-5 font-semibold text-black"
          >
            Android • iOS • Web • Cloud • AI
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-4 lg:w-125 text-base text-gray-500"
          >
            We design, develop, and scale high-performance apps used by
            thousands of users worldwide.
          </motion.p>
          <div className="flex gap-4 justify-center lg:justify-start mt-5 flex-wrap">
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-[#06B8FF] text-white text-sm font-medium px-5 py-2 rounded-lg"
            >
              Start Your Project
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="border border-[#06B8FF] text-[#06B8FF] text-sm font-medium px-5 py-2 rounded-lg"
            >
              View our Project
            </motion.button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full  order-1 lg:order-2 lg:w-[70%] flex justify-center lg:justify-end">
          <motion.img
            animate={{ y: ["0%", "-8%", "0%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-149.25 h-auto object-cover"
            src="/mobile.png"
            alt="Mobile App Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
