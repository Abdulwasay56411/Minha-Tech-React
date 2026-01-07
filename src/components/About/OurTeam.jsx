import React from "react";
import { motion } from "framer-motion";
import offerCard from "../../offerCard";

const teamBox = [
  {
    id: 1,
    image: "/Founder.png",
    width: "w-[412px]",
  },
  {
    id: 2,
    image: "/UIUX Lead.png",
    width: "w-[210px]",
  },
  {
    id: 3,
    image: "/HR.png",
    width: "w-[210px]",
  },
  {
    id: 4,
    image: "/TeamLead.png",
    width: "w-[210px]",
  },
];

const OurTeam = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-center px-10 py-1">
        <h1 className="text-[40px] text-[#06B8FF] font-bold">Meet our Team</h1>
        <p className=" w-full lg:w-225 py-2 text-xl text-[#09182B]">
          Meet our passionate and talented team, committed to delivering
          exceptional results, driving innovation, and transforming your vision
          into reality.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-5 m-5">
        {teamBox.map((item) => {
          return (
            <div key={item.id} className="">
              <img
                className={`bg-cover sm:h-102.5 h-90 w-auto sm:${item.width}`}
                src={item.image}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full h-auto px-5 py-12 mt-10"
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
      <div className="flex bg-[#E3E3E333] w-full h-auto py-5 px-4 flex-col items-center my-5">
        <h1 className="text-2xl font-bold text-[#06B8FF]">
          What you will get?
        </h1>
        <h2 className="text-[43px] font-bold">All in One Support!</h2>
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

export default OurTeam;
