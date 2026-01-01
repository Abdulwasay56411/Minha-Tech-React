import React, { useRef } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const OurApp = () => {
  const swiperRef = useRef(null);

  return (
    <div className="py-5">
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-4">
        <div className="w-full px-8  lg:w-1/2 lg:px-6 text-center lg:text-left">
          <h2 className="text-[#06B8FF] text-[26px] font-medium">Our App</h2>
          <h1 className="font-bold text-[56px] leading-15">
            Some of Our Hit Apps
          </h1>
          <p className="py-4 text-lg text-[#000000]">
            Explore our portfolio of successful apps that have captivated
            millions of users. Each app reflects our commitment to quality,
            innovation, and intuitive user experiences.
          </p>
          <button className="w-44 mt-3 mb-7 lg:my-0 h-12 bg-[#009FDE] rounded-[11px] font-medium text-[17px] text-white cursor-pointer hover:bg-[#008bc2] transition-all">
            View More App
          </button>
        </div>

        <div className="w-full lg:w-2/3">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={3.3}
            slidesPerGroup={1}
            loop={true}
            className="mySwiper"
          >
            {imageSlide.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="rounded-[20px] overflow-hidden shadow-sm border border-gray-100">
                  <img
                    src={item.image}
                    alt="app"
                    className="w-66.25 h-auto object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center gap-20 lg:justify-between lg:px-14 lg:gap-2 select-none mt-10">
            <div
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <GrLinkPrevious className="text-3xl cursor-pointer" />
            </div>
            <div
              onClick={() => swiperRef.current?.slideNext()}
            >
              <GrLinkNext className="text-3xl cursor-pointer mr-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApp;

const imageSlide = [
  { id: 1, image: "/App 1.png" },
  { id: 2, image: "/App 2.png" },
  { id: 3, image: "/App 3.png" },
  { id: 4, image: "/App 2.png" },
  { id: 5, image: "/App 3.png" },
];
