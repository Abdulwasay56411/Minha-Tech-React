import React from "react";
import { motion } from "framer-motion";

const PartnesLoves = () => {
  return (
    <div className="mx-w-125">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center pt-5 px-5"
      >
        <h1 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#000000]">
          <span className="text-[#06B8FF]">Partners</span> who Loves us
        </h1>
        <p className="text-base md:text-xl  text-[#000000]">
          Proudly partnering with top-tier studios driving success in mobile
          entertainment globally.
        </p>
      </motion.div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-7 justify-items-center py-12 px-12 lg:px-20">
          {partnerBox.map((item) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                key={item.id}
                className="w-48 h-28 md:w-59 md:h-37 flex items-center justify-center bg-white shadow-sm rounded-xl mx-5"
              >
                <img
                  className="w-36 h-24 md:w-45 md:h-34"
                  src={item.image}
                  alt=""
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PartnesLoves;

const partnerBox = [
  {
    id: 1,
    image: "/box 1.png",
  },
  {
    id: 2,
    image: "/box 2.png",
  },
  {
    id: 3,
    image: "/box 3.png",
  },
  {
    id: 4,
    image: "/box 4.png",
  },
  {
    id: 5,
    image: "/box 5.png",
  },
  {
    id: 6,
    image: "/box 6.png",
  },
  {
    id: 7,
    image: "/box 7.png",
  },
  {
    id: 8,
    image: "/box 8.png",
  },
];
