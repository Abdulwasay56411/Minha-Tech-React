import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

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
    <div className="flex gap-10 mt-12 mb-8 flex-wrap justify-center">
      <div
        ref={countRef}
        className="grid grid-cols-1 sm:grid-cols-2 mx-5 gap-4"
      >
        {count.map((item) => {
          return (
            <div
              key={item.id}
              className=" px-3 py-6 w-58 h-34 border rounded-[9px] border-[#06B8FF40]"
            >
              <h1 className="bg-[#06B8FF] shadow-2xl flex justify-center items-center rounded-[7px] text-white w-21 h-15">
                {startCount ? <CountUp end={item.count} duration={6} /> : 0}
                {item.suffix}
              </h1>

              <h2 className="font-medium text-lg pt-4 pb-2 text-[#000000]">
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
    </div>
  );
};

export default OurSucess;

const count = [
    { id: 1, count: 5, suffix: "B+", title: "Downloads" },
    { id: 2, count: 900, suffix: "+", title: "Published App" },
    { id: 3, count: 30, suffix: "+", title: "Partners" },
    { id: 4, count: 25, suffix: "+", title: "Employees" },
  ];