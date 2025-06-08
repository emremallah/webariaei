'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './sliderStyles.css';
import Link from 'next/link';

const slides = [
  { title: 'سایت فروشگاهی', image: '/images/example.png' },
  { title: 'سایت نوبت‌دهی', image: '/images/nobatdehi-online.jpg' },
  { title: 'سایت شرکتی', image: '/images/company.jpg' },
  { title: 'سایت شخصی', image: '/images/personal.jpg' },
  { title: 'سایت آموزشی', image: '/images/amoozeshi.jpg' },
  { title: 'سایت خبری', image: '/images/news-site-1.jpg' },
  { title: 'سایت خدماتی', image: '/images/company.jpg' },
  { title: 'سایت پزشکی', image: '/images/medical-website-design.webp' },
  { title: 'سایت رزومه', image: '/images/resume.jpg' },
];

const WebsiteSlider = () => {
  return (
    <div className="w-full mx-auto p-4 pb-10 bg-linear-to-t from-cyan-950 to-black border-b-[1px] border-[#FFFFFF50]">
      <h2 className="text-center text-3xl font-bold mb-7 text-white">نمونه کارهای ما</h2>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={700}
        breakpoints={{
          0: {
            slidesPerView: 1.1,
            centeredSlides: false,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            centeredSlides: true,
            spaceBetween: 30,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="transition-transform duration-500">
            <div className="card-wrapper border border-gray-300 rounded-xl overflow-hidden shadow-md bg-white p-3">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-36 object-cover rounded-lg"
              />
              <div className="pt-3 flex flex-col items-start gap-2">
                <h3 className="text-sm font-semibold text-black">{slide.title}</h3>
                <Link href={"portfolio"} className="w-full">
                  <button className="mt-auto bg-black text-white px-4 py-1 text-xs rounded-md hover:bg-gray-800 transition">
                    مشاهده نمونه
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WebsiteSlider;
