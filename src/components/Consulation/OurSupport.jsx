import React from "react";
import { motion } from "framer-motion";
import offerCard from "../../offerCard";

const OurSupport = () => {
  return (
    <div>
      <div className="flex  bg-[#E3E3E333] w-full h-auto py-5 px-4 flex-col items-center my-5">
        <h1 className="text-2xl font-bold text-[#06B8FF]">
          What you will get?
        </h1>
        <h2 className="text-3xl sm:text-[43px] font-bold">All in One Support!</h2>
        <div className="grid grid-cols-1 max-w-300 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 px-10">
          {offerCard.map((item) => {
            return (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                className="w-56.5 h-54 border flex flex-col justify-center items-center py-5 px-4 rounded-[11px] bg-white border-[#DADADA]"
              >
                <img
                  className="w-22 h-22 mb-4 object-cover"
                  src={item.image}
                  alt=""
                />
                <h1 className="text-sm font-bold mb-3">{item.title}</h1>
                <p className="text-[11px] text-center font-medium">
                  {item.para}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurSupport;
