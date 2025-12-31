import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const handleMenu = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav>
        <div
          className={`hidden w-full h-20 py-4 lg:flex z-50  md:fixed items-center px-14 justify-between ${
            isScroll
              ? "bg-white/20 backdrop-blur-2xl shadow-md"
              : "bg-transparent"
          }`}
        >
          <h1 className="text-3xl font-bold text-[#0A1A2C]">Minha Tech</h1>
          <div>
            <ul className="flex gap-6">
              {navLinks.map((item) => {
                return (
                  <div key={item.id}>
                    <li className="cursor-pointer text-[18px] text-[#404040] transition transform duration-300 hover:text-[#06B8FF]">
                      {item.title}
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div>
            <button className="bg-[#06B8FF] text-white text-[12px] font-semibold w-35.5 h-8.75 rounded-[9px] cursor-pointer ">
              Publish Your App
            </button>
          </div>
        </div>
        {/* Mobile responsive menu */}
        <div
          className={`lg:hidden w-full z-50 fixed flex items-center justify-between py-4 px-2 ${
            isScroll
              ? "bg-white/20 backdrop-blur-2xl shadow-md"
              : "bg-transparent"
          }`}
        >
          <h1 className="font-bold text-3xl text-[#0A1A2C]">Minha Tech</h1>
          <div className="relative">
            <IoMenu
              onClick={handleMenu}
              className="text-5xl select-none cursor-pointer"
            />
            <div
              className={`fixed top-14 right-0 bg-green-200 w-52 shadow-md h-full transform transition duration-300 ${
                !isOpen ? "translate-x-full" : "translate-x-0"
              }`}
            >
              {navLinks.map((item) => {
                return (
                  <div key={item.id} className="flex flex-col items-center">
                    <ul>
                      <li>{item.title}</li>
                    </ul>
                  </div>
                );
              })}
              <div className="flex justify-center">
                <button className="bg-[#06B8FF] text-white text-[12px] font-semibold w-35.5 h-8.75 rounded-[9px] cursor-pointer ">
                  Publish Your App
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const navLinks = [
  {
    id: 1,
    title: "Services",
  },
  {
    id: 2,
    title: "Portfolio",
  },
  {
    id: 3,
    title: "About",
  },
  {
    id: 4,
    title: "Contact",
  },
];
