import React from "react";
import { motion } from "framer-motion";

const ConsulationHero = () => {
  return (
    <div className="pt-30">
      <h1 className="font-bold text-2xl sm:text-4xl text-center px-4">
        Building <span className="text-[#06B8FF]">Apps</span>That Rise From{" "}
        <span className="text-[#06B8FF]">Code To Top</span>
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full h-auto px-5 py-12 mt-2"
      >
        <div className="flex flex-col items-center mx-5 lg:mx-20">
          <div className="flex justify-center flex-wrap lg:flex-nowrap items-center">
            <div className="px-5 flex flex-col items-center lg:items-start ">
              <img
                className="w-18.75 h-18.75 mb-3 object-cover"
                src="/phone.png"
              />
              <h2 className="text-[#06B8FF] font-bold text-2xl">
                Got a Great Idea
              </h2>
              <h1 className="font-medium text-center lg:text-left text-2xl  md:text-3xl sm:text-5xl md:text-[58px]">
                Turning App Ideas Into Reality
              </h1>
              <p className="text-xl text-center my-2 lg:text-left text-[#494949] w-75 sm:w-117.5 mx-2">
                Partner with Minha Tech to design, publish, and scale
                high-performing mobile applications. Our expert team supports
                you at every step from concept to launch and growth.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <div>
                <input
                  className="border w-90 sm:w-117.5 my-4 h-16 outline-none p-6 rounded-lg text-[#494949] bg-[#FFFFFF] border-[#06B8FF]"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  className="border w-90  sm:w-117.5 h-16 outline-none p-6 rounded-lg text-[#494949] bg-[#FFFFFF] border-[#06B8FF]"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  className="border w-90  sm:w-117.5 my-4 h-16 outline-none p-6 rounded-lg text-[#494949] bg-[#FFFFFF] border-[#06B8FF]"
                  type="text"
                  placeholder="Please Select"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  className="resize-none outline-none border bg-white text-[#494949] border-[#06B8FF] py-2 rounded-lg w-90 sm:w-117.5 h-36.5 px-6 "
                ></textarea>
              </div>
              <div>
                <button className="bg-[#06B8FF] my-3 text-white font-medium rounded-lg cursor-pointer w-90 sm:w-117.5 h-16">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
     
    </div>
  );
};

export default ConsulationHero;
