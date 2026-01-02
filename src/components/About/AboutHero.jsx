import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="pt-20"
      >
        <div
          className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center 
                max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 justify-between"
        >
          <div className="max-w-125 text-center lg:text-left w-full order-2 lg:order-1 px-2">
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
          <div className="order-1 lg:order-2">
            <motion.img
              animate={{ y: ["0%", "-8%", "0"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-72 sm:w-105.25 object-contain h-auto sm:h-150 mx-5"
              src="/AboutHero.png"
              alt=""
            />
          </div>
        </div>
      </motion.div>
      <div className="max-w-200 mx-auto text-center pb-10 px-2">
        <h1 className="font-medium text-[#06B8FF] text-xl">Build. Share. Grow.</h1>
        <h2 className="font-bold text-2xl pt-2 sm:text-3xl md:text-4xl lg:text-[43px] text-[#000000] md:leading-10 lg:leading-14">Building Powerful Apps That People Use, Trust, and Love</h2>
        <p className="pt-3">
          MinhaTech specializes in designing, developing, and publishing apps
          that users love. From idea to reality, we make every app journey
          seamless, innovative, and impactful.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;

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
