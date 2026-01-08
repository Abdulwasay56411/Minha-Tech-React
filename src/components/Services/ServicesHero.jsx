import React from "react";
import offerCard from "../../offerCard";
import { motion } from "framer-motion";

const ServicesHero = () => {

  return (
    <div className="pt-20 sm:pt-30 pb-20 overflow-hidden">
      <div className="relative flex flex-col items-center max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="font-bold pb-10 text-[#000000] px-4 text-2xl sm:text-4xl text-center md:text-[46px]"
        >
          Your App, Your Custom Solution
        </motion.h1>

        <div className="relative w-full max-w-136 py-4 flex justify-center px-4">
          <motion.img
            animate={{ y: ["0%", "-8%", "0%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-70 sm:w-full h-auto object-contain z-10"
            src="/mobileServices.png"
            alt="Mobile App Display"
          />

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="absolute -left-2.5 sm:-left-30 top-[10%] z-20 mx-3 sm:mx-0"
          >
            <img
              className="w-16 sm:w-24 h-auto"
              src="/services 1.png"
              alt="Service 1"
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="absolute -right-2.5 sm:-right-24 top-[25%] mx-3 sm:mx-0 z-20"
          >
            <img
              className="w-16 sm:w-24 h-auto"
              src="/services 2.png"
              alt="Service 2"
            />
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute left-0 sm:-left-15 bottom-[15%] mx-3 sm:mx-0 z-20"
          >
            <img
              className="w-16 sm:w-24 h-auto"
              src="/services 3.png"
              alt="Service 3"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <p className="mt-10 font-semibold text-[#06B8FF] text-[26px] ">
            We can help you!
          </p>
          <p className="font-bold text-xl px-3  sm:text-3xl">
            We offer stand alone services as follows:
          </p>
        </motion.div>
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 max-w-300 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 px-10">
          {offerCard.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="w-56.5 h-54 border flex flex-col justify-center items-center py-5 px-4 rounded-[11px] border-[#DADADA]"
            >
              <img
                className="w-22 h-22 mb-4 object-cover"
                src={item.image}
                alt=""
              />
              <h1 className="text-sm font-bold mb-3">{item.title}</h1>
              <p className="text-[11px] text-center font-medium">{item.para}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[#E3E3E333] w-full h-auto px-5 py-12"
      >
        <div className="flex flex-col items-center mx-5 lg:mx-20">
          <div className="flex justify-center flex-wrap lg:flex-nowrap items-center">
            <div className="px-5 flex flex-col items-center lg:items-start ">
              <img
                className="w-18.75 h-18.75 mb-3 object-cover"
                src="/phone.png"
              />
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
                  className="border w-80 sm:w-117.5 my-4 h-16 outline-none p-6 rounded-lg text-[#494949] bg-[#FFFFFF] border-[#06B8FF]"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  className="border w-80  sm:w-117.5 h-16 outline-none p-6 rounded-lg text-[#494949] bg-[#FFFFFF] border-[#06B8FF]"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  className="border w-80  sm:w-117.5 my-4 h-16 outline-none p-6 rounded-lg text-[#494949] bg-[#FFFFFF] border-[#06B8FF]"
                  type="text"
                  placeholder="Please Select"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  className="resize-none outline-none border bg-white text-[#494949] border-[#06B8FF] py-2 rounded-lg w-80 sm:w-117.5 h-36.5 px-6 "
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

export default ServicesHero;
