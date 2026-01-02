import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const OurSucess = () => {
  const countRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (countRef.current) {
        const top = countRef.current.getBoundingClientRect().top;
        const height = window.innerHeight;
        if (top < height) {
          setStartCount(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex gap-10 mt-5 mb-8 flex-wrap justify-center"
    >
      <div
        ref={countRef}
        className="grid grid-cols-1 sm:grid-cols-2 mx-5 gap-4"
      >
        {count.map((item) => {
          return (
            <div
              key={item.id}
              className=" px-3 flex flex-col justify-center py-4 w-58 h-34 border rounded-[9px] border-[#06B8FF40]"
            >
              <h1 className={`flex justify-center items-center font-bold text-4xl ${item.color}`}>
                {startCount ? <CountUp end={item.count} duration={6} /> : ""}
                {item.suffix}
              </h1>

              <h2 className="font-medium text-xl text-center text-[#000000]">
                {item.title}
              </h2>
            </div>
          );
        })}
      </div>
      <div className="max-w-122.75 px-4 text-center lg:text-left">
        <h1 className="text-lg font-bold text-[#06B8FF] ">Our Sucess</h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold text-[#000000]">
          Trusted by Millions of <span className="text-[#06B8FF]">App</span>{" "}
          Users Worldwide
        </h1>
        <p className="text-sm pt-2 sm:text-base w-full text-[#6B7280]">
          With a mix of creativity and effective design and development
          techniques, we have delivered 150+ mobile applications that have
          reached millions of users worldwide.
        </p>
      </div>
    </motion.div>
  );
};

export default OurSucess;

const count = [
  { id: 1, count: 5, suffix: "B+", title: "Downloads", color: "text-red-500", },
  { id: 2, count: 900, suffix: "+", title: "Published App", color: "text-blue-500", },
  { id: 3, count: 30, suffix: "+", title: "Partners", color: "text-green-500", },
  { id: 4, count: 25, suffix: "+", title: "Employees", color: "text-[#06B8FF]", },
];
