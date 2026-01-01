import React from "react";
import {
  FaAngleUp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  const footerData = [
    {
      title: "Minha Tech",
      links: [{ text: "Contact@minhatech.org" }, { text: "03440460091" }],
    },
    {
      title: "Company",
      links: [{ text: "Portfolio" }, { text: "Career" }, { text: "Mobile" }],
    },
    {
      title: "Quick Links",
      links: [
        { text: "Contact" },
        { text: "Publishing" },
        { text: "Sell App" },
        { text: "Services" },
      ],
    },
    {
      title: "Download App",
      links: [
        { text: "Google Play", icon: "/playstore.png" },
        { text: "Apple store", icon: "/appstore.png" },
        { text: "Desktop", icon: "/desktop.png" },
      ],
    },
  ];

  return (
    <footer className="w-full px-10 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-10 pb-6">
        {footerData.map((section, index) => (
          <div key={index} className="flex flex-col space-y-4">
            <h1 className="text-[#000000] font-bold text-lg">
              {section.title}
            </h1>
            <ul className="text-[#494949] space-y-3">
              {section.links.map((link, linkIndex) => (
                <li
                  key={linkIndex}
                  className="flex items-center gap-4"
                >
                  {link.icon && (
                    <img
                      src={link.icon}
                      alt={link.text}
                      className="w-6 h-6 object-contain"
                    />
                  )}
                  <span className="hover:text-[#06B8FF] transform translate duration-300 cursor-pointer">{link.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto flex gap-5 pb-8">
        <FaInstagram className="text-[#135AC6] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaLinkedinIn className="text-[#135AC6] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaFacebookF className="text-[#135AC6] text-2xl cursor-pointer hover:scale-110 transition-transform" />
      </div>
      <div className="w-full h-px bg-[#D0D0D0]"></div>
      <div className="max-w-7xl mx-auto py-6 flex justify-between items-center text-sm text-[#494949]">
        <p>© {new Date().getFullYear()} Minha Tech. All rights reserved.</p>
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-[#009FDE] p-3 rounded-xl text-white cursor-pointer hover:bg-blue-600 transition-colors"
        >
          <FaAngleUp size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
