import React, { useEffect, useState } from "react";
import { IoMenu, IoArrowUpCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  
    <nav className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 ${
      isScroll ? "bg-white/20 backdrop-blur-2xl shadow-md" : "bg-transparent"
    }`}>
      <div className="flex flex-col items-center w-full">
      
        <div className="hidden lg:flex max-w-350 w-full h-20 py-4 items-center px-16 justify-between">
          <NavLink to="/" className="text-3xl font-bold text-[#0A1A2C]">
            Minha Tech
          </NavLink>
          
          <ul className="flex gap-6">
            {navLinks.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className={({isActive}) =>`cursor-pointer text-xl transition transform duration-300 hover:text-[#06B8FF] ${isActive ? "text-[#06B8FF] font-semibold" : "text-[#404040]"}`}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <button className="bg-[#06B8FF] flex items-center gap-1 text-white text-sm font-semibold w-52 h-11 px-3 rounded-[9px] cursor-pointer">
          <IoArrowUpCircleOutline size={25}/> Get Free Consultation
          </button>
        </div>

        <div className="lg:hidden w-full flex items-center justify-between py-4 px-6">
          <NavLink to="/" className="font-bold text-3xl text-[#0A1A2C]">
            Minha Tech
          </NavLink>
          
          <div className="relative">
            <IoMenu
              onClick={handleMenu}
              className="text-5xl select-none cursor-pointer"
            />
            
            <div
              className={`fixed top-20 right-0 bg-green-200 w-64 shadow-md h-screen transform transition-transform duration-300 ${
                !isOpen ? "translate-x-full" : "translate-x-0"
              }`}
            >
              <div className="flex flex-col gap-6 p-10">
                {navLinks.map((item) => (
                  <NavLink 
                    key={item.id} 
                    to={item.path} 
                    onClick={() => setIsOpen(false)}
                    className={({isActive}) =>`cursor-pointer text-xl transition transform duration-300 hover:text-[#06B8FF] ${isActive ? "text-[#06B8FF] font-semibold" : "text-[#404040]"}`}
                  >
                    {item.title}
                  </NavLink>
                ))}
                <button className="bg-[#06B8FF] text-white text-sm font-semibold w-full h-14 px-2 py-3 rounded-[9px]">
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const navLinks = [
  { id: 1, title: "Services", path: "/services" },
  { id: 2, title: "Portfolio", path: "/portfolio" },
  { id: 3, title: "About", path: "/about" },
  { id: 4, title: "Contact", path: "/contact" },
];