import React from "react";
import { motion } from "framer-motion";

const Planning = () => {
  return (
    <div className="bg-[#E3E3E333] w-full h-auto p-10 my-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 justify-items-center  lg:grid-cols-4 gap-12"
      >
        {boxes.map((item) => {
          return (
            <div
              key={item.id}
              className={`relative w-56 h-60 bg-white flex flex-col my-3 items-center justify-center shadow-lg  rounded-[10px] overflow-hidden transition-all duration-300 ${item.rotate}`}
            >
              <div className="relative z-10 mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />
              </div>

              <div className="relative z-10 text-center px-4">
                <h2 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h2>
                <p className="text-gray-500 text-xs mt-2 leading-tight">
                  {item.para}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Planning;

const boxes = [
  {
    id: 1,
    image: "/Icon.png",
    title: "Planning",
    para: "Building future-ready apps that help businesses grow.",
    rotate: "-rotate-[13deg]",
  },
  {
    id: 2,
    image: "/Icon 1.png",
    title: "Design",
    para: "Building future-ready apps that help businesses grow.",
    rotate: "rotate-[13deg]",
  },
  {
    id: 3,
    image: "/Icon 2.png",
    title: "Development",
    para: "Building future-ready apps that help businesses grow.",
    rotate: "-rotate-[17deg]",
  },
  {
    id: 4,
    image: "/Icon 3.png",
    title: "Launch",
    para: "Building future-ready apps that help businesses grow.",
    rotate: "rotate-[10deg]",
  },
];
