import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="pt-30 px-4 md:px-14">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-8">
        <div className="w-full text-center px-5 lg:px-0 lg:text-left">
          <h1 className="font-semibold text-3xl md:text-4xl lg:text-[55px] leading-snug text-black">
            Building Scalable <br />
            <span className="text-[#06B8FF]">Mobile Apps</span>
          </h1>

          <h2 className="mt-4 text-2xl md:text-3xl lg:text-[45px] font-semibold text-black">
            for the Next Digital Generation
          </h2>

          <h3 className="mt-2 text-xl md:text-2xl lg:text-3xl font-semibold text-black">
            Android • iOS • Web • Cloud • AI
          </h3>
            <p className="mt-4 lg:w-125 text-lg text-black">
              We design, develop, and scale high-performance apps used by
              thousands of users worldwide.
            </p>
          <div className="flex gap-4 justify-center lg:justify-start mt-5 flex-wrap">
            <button className="bg-[#06B8FF] text-white text-sm font-medium px-5 py-2 rounded-lg">
              Start Your Project
            </button>
            <button className="border border-[#06B8FF] text-[#06B8FF] text-sm font-medium px-5 py-2 rounded-lg">
              View our Project
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[70%] flex justify-center lg:justify-end">
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
