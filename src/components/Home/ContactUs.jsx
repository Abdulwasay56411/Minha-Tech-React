import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const btnRef = useRef(null);
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
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
            <h1 className="font-medium text-center text-4xl sm:text-5xl md:text-[58px]">
              Contact Us
            </h1>
            <p className="text-xl text-center my-2 lg:text-left text-[#494949] w-75 sm:w-117.5 mx-2">
              We are committed to processing the information in order to contact
              you and talk about your project.
            </p>
            <div className="flex flex-wrap gap-10 my-5 px-4">
              <div className="flex items-center gap-4 ">
                <img className="w-8.5 h-8.5" src="/contact.png" alt="" />
                <div>
                  <h1 className="font-bold text-base text-[#000000]">PHONE</h1>
                  <p className="font-medium text-base text-[#000000]">
                    03440460091
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img className="w-8.5 h-8.5" src="/email.png" alt="" />
                <div>
                  <h1 className="font-bold text-base text-[#000000]">EMAIL</h1>
                  <p className="text-base font-medium text-[#000000]">
                    contact@minhatech.org
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center lg:text-right">
            <div>
              <input
                className="border w-80 sm:w-117.5 my-4 h-16 outline-none p-6 rounded-lg text-[#494949] bg-[#FFFFFF] border-[#D8D8D8]"
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                className="border w-80  sm:w-117.5 h-16 outline-none p-6 rounded-lg text-[#494949] bg-[#FFFFFF] border-[#D8D8D8]"
                type="email"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                className="border w-80  sm:w-117.5 my-4 h-16 outline-none p-6 rounded-lg text-[#494949] bg-[#FFFFFF] border-[#D8D8D8]"
                type="text"
                placeholder="Please Select"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                className="resize-none outline-none border bg-white text-[#494949] border-[#D8D8D8] py-2 rounded-lg w-80 sm:w-117.5 h-36.5 px-6 "
              ></textarea>
            </div>
            <div>
              <button
                ref={btnRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="bg-[#06B8FF] relative my-3 text-white font-medium rounded-lg cursor-pointer w-90 sm:w-117.5 h-16 overflow-hidden"
              >
                <motion.span
                  className="absolute rounded-full w-full bg-[#0A1A2C]"
                  style={{
                    width: 40,
                    height: 20,
                    left: pos.x,
                    top: pos.y,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: hover ? 25 : 0,
                    opacity: hover ? 1 : 0,
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
                <span className="relative z-10">Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
