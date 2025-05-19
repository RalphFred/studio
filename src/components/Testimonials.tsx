"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import type { Swiper as SwiperClass } from "swiper/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Copy from "./Copy";

export default function Testimonials() {
  // Static testimonial data
  const testimonials = [
    {
      name: "David L.",
      role: "Customer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Bayt has streamlined our property management operations. The tenant management and financial reporting tools are top-notch.",
    },
    {
      name: "James K.",
      role: "Customer",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "The customer support from Bayt is phenomenal. They're always ready to assist and provide quick solutions to any issues we face.",
    },
    {
      name: "Robert S.",
      role: "Customer",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      text: "Bayt has transformed how we manage our properties. The platform is easy to use and keeps everything organized.",
    },
    {
      name: "James K.",
      role: "Customer",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "The customer support from Bayt is phenomenal. They're always ready to assist and provide quick solutions to any issues we face.",
    },
    {
      name: "Robert S.",
      role: "Customer",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      text: "Bayt has transformed how we manage our properties. The platform is easy to use and keeps everything organized.",
    },
    {
      name: "James K.",
      role: "Customer",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "The customer support from Bayt is phenomenal. They're always ready to assist and provide quick solutions to any issues we face.",
    },
    {
      name: "Robert S.",
      role: "Customer",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      text: "Bayt has transformed how we manage our properties. The platform is easy to use and keeps everything organized.",
    },
  ];

  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="wrapper py-24">
      <Copy>
        <h2 className="text-3xl lg:text-4xl font-semibold mb-8 text-center">
          What Clients Say
        </h2>
      </Copy>

      <div className="flex items-center justify-end gap-4 mb-8">
        <button
          className="w-14 h-14 rounded-full bg-primary-300 flex items-center justify-center text-2xl"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ArrowLeft size={24} />
        </button>
        <button
          className="w-14 h-14 rounded-full bg-primary-300 flex items-center justify-center text-2xl"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ArrowRight size={24} />
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        centeredSlides={true}
        spaceBetween={32}
        loop={true}
        speed={600}
        className="pb-8"
        style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
        breakpoints={{
          0: { slidesPerView: 1 }, // mobile: only one in view
          768: { slidesPerView: "auto" }, // tablet and up: peek effect
        }}
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx} className="md:!w-[500px]">
            <div className="bg-neutral-100 rounded-xl p-8 flex flex-col justify-between h-full">
              <div>
                <div className="text-neutral-800 text-sm mb-2">STORIES</div>
                <div className="font-medium mb-6">{t.text}</div>
              </div>
              <div className="flex items-center mt-8">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />

                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-neutral-700 text-sm">{t.role}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
