import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonialsCards = [
    {
      id: 1,
      image: "/user.png",
      name: "john Doe",
      title: "Talha App",
      para: "Working with MinhaTech Pub has been a game changer for us. Their expertise in app design and ideation helped us bring our vision to life.",
    },
    {
      id: 2,
      image: "/user.png",
      name: "Abdul Wasay",
      title: "Abdul Website",
      para: "Working with MinhaTech Pub has been a game changer for us. Their expertise in app design and ideation helped us bring our vision to life.",
    },
    {
      id: 3,
      image: "/user.png",
      name: "Doe",
      title: "MinhaTech",
      para: "Working with MinhaTech Pub has been a game changer for us. Their expertise in app design and ideation helped us bring our vision to life.",
    },
    {
      id: 4,
      image: "/user.png",
      name: "Ali",
      title: "Dev Team",
      para: "Working with MinhaTech Pub has been a game changer for us. Their expertise in app design and ideation helped us bring our vision to life.",
    },
    {
      id: 5,
      image: "/user.png",
      name: "Ali",
      title: "Dev Team",
      para: "Working with MinhaTech Pub has been a game changer for us. Their expertise in app design and ideation helped us bring our vision to life.",
    },
    {
      id: 6,
      image: "/user.png",
      name: "Ali",
      title: "Dev Team",
      para: "Working with MinhaTech Pub has been a game changer for us. Their expertise in app design and ideation helped us bring our vision to life..",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-10 overflow-hidden"
    >
      <div className="text-center px-5 lg:px-2">
        <h1 className="text-lg sm:text-[26px] font-semibold text-[#06B8FF]">
          Testimonials
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#000000]">
          What Our Development Partners Say About Us
        </h2>
      </div>

      <div className="my-16 px-10 relative">
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          centeredSlides={true}
          centeredSlidesBounds={true}
          loop={true}
          pagination={{
            clickable: true,
            el: ".custom-dots",
          }}
          className="testimonial-swiper"
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1280: { slidesPerView: 3 },
          }}
        >
          {testimonialsCards.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-card bg-[#EDF6FF] px-8 py-10 w-full h-auto rounded-[40px] flex flex-col justify-between gap-4 shadow-sm">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <img
                      className="w-20 h-20 object-cover rounded-full"
                      src={item.image}
                      alt=""
                    />
                    <div>
                      <h1 className="text-base font-bold text-[#3C3C3C]">
                        {item.name}
                      </h1>
                      <h2 className="text-[12px] text-[#686868]">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                  <img className="w-6 h-auto" src="/color.png" alt="quote" />
                </div>
                <p className="text-[#3C3C3C] text-[14px] mt-6 leading-relaxed">
                  {item.para}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-dots flex justify-center items-center gap-2 mt-16"></div>
      </div>

      <style jsx global>{`
        /* MOBILE: hide next/prev slides */
        @media (max-width: 767px) {
          .testimonial-swiper {
            overflow: hidden;
          }
        }

        /* DESKTOP: allow rotation overlap */
        @media (min-width: 768px) {
          .testimonial-swiper {
            overflow: visible;
          }
        }

        /* Right slides rotate */
        .swiper-slide .testimonial-card {
          transition: all 0.5s ease;
          transform: rotate(10deg);
        }

        /* Active slide */
        .swiper-slide-active .testimonial-card {
          transform: rotate(0deg) scale(1.05) !important;
        }

        /* Left slide */
        .swiper-slide-prev .testimonial-card {
          transform: rotate(-10deg) !important;
        }

        /* Pagination Dots */
        .custom-dots .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d1d1;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .custom-dots .swiper-pagination-bullet-active {
          width: 35px;
          border-radius: 20px;
          background: #06b8ff !important;
        }
      `}</style>
    </motion.div>
  );
};

export default Testimonials;
