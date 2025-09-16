"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function slider() {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={{ delay: 3000 }}
      loop
      pagination
      navigation={{
        nextEl: ".nextBtn",
        prevEl: ".prevBtn",
      }}
      className="relative  "
    >
      <SwiperSlide>
        <div className="lg:flex lg:flex-row lg:gap-1">
          <video
            src="/ZTTW.mp4"
            className="lg:w-1/2 w-full object-cover lg:h-[780px] h-[500px]"
            autoPlay
            muted
            loop
            playsInline
          ></video>

          <img
            className="lg:w-1/2  object-cover lg:h-[780px] hidden lg:block"
            src="https://www.zttw.store/cdn/shop/files/20250723-0008101-R1-31-32.jpg?v=1754338053&width=960"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="lg:flex lg:flex-row lg:gap-1 h-[500px]">
          <img
            className="w-full lg:w-1/2  lg:object-cover lg:h-[780px]"
            src="https://www.zttw.store/cdn/shop/files/20250723-0008100-R1-16-17.jpg"
          />
          <img
            className="w-full lg:w-1/2  lg:object-cover lg:h-[780px] hidden md:block"
            src="https://www.zttw.store/cdn/shop/files/20250723-0008101-R1-01-2.jpg"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="lg:flex lg:flex-row lg:gap-1 h-[500px]">
          <img
            className="w-full lg:w-1/2  lg:object-cover lg:h-[780px] "
            src="https://www.zttw.store/cdn/shop/files/IMG_6263.jpg?v=1733756260&width=960"
          />
          <img
            className="w-full lg:w-1/2  lg:object-cover lg:h-[780px]"
            src="https://www.zttw.store/cdn/shop/files/lo-03-1733586108-67546cbca6919.jpg?v=1733586114&width=1440"
          />
        </div>
      </SwiperSlide>

      <div className="text-2xl justify-between inset-0 flex items-center p-4 absolute z-50  rounded-full  bottom-8 ">
        <button className="prevBtn bg-white text-red-500 px-4.5 pb-2 rounded">
          -
        </button>
        <button className="nextBtn bg-white text-green-500 px-4 pb-2 rounded">
          +
        </button>
      </div>
    </Swiper>
  );
}