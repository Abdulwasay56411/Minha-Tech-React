import React from "react";
import { motion } from "framer-motion";

const OurAbout = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#E3E3E333] w-full  h-auto pt-10 pb-5"
    >
      <div className="flex gap-12 flex-wrap items-center justify-center">
        <div className="max-w-125 text-center lg:text-left w-full px-2">
          <h1 className=" text-[#06B8FF] text-xl font-medium">Our About</h1>
          <h1 className="font-bold leading-12 text-2xl sm:text-3xl md:text-4xl lg:text-[46px] text-[#000000]">
            We Design, Develop, and Launch Apps
          </h1>
          <p className="text-sm text-[#000000] py-4">
            At MinhaTech, we build mobile and web applications that turn ideas
            into reliable digital products, designed for performance,
            scalability, and real user impact.
          </p>
          <div className="flex justify-center lg:justify-start items-center gap-6">
            {box.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-46.5 relative shadow-sm rounded-[10px] h-21.25 bg-white"
                >
                  <img
                    className="absolute w-11.25 h-12.25"
                    src="/Rectangle.png"
                    alt=""
                  />
                  <h1 className="font-bold text-[13px] pt-3 px-5">
                    {item.title}
                  </h1>
                  <p className="font-medium text-[10px] pt-2 px-5">
                    {item.para}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 mb-4 text-center lg:text-left">
            <button className="bg-[#06B8FF] w-29 h-9.5 rounded-[9px] cursor-pointer text-white">
              Read More
            </button>
          </div>
        </div>
        <div className="">
          <img
            className="w-72 sm:w-99 object-contain h-auto sm:h-150 mx-5"
            src="/Mobile Screen 2.png"
            alt=""
          />
        </div>
      </div>
    </motion.div>
  );
};

export default OurAbout;

const box = [
  {
    id: 1,
    title: "Vision",
    para: "Building future-ready apps that help businesses grow.",
  },
  {
    id: 2,
    title: "Focus",
    para: "Simple design, strong technology, real results.",
  },
];
