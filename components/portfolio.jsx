'use client'

import Link from 'next/link'
import React from 'react'
import Header from './header'

const slides = [
  { title: 'سایت فروشگاهی', image: '/images/example.png', url: "https://www.digistyle.com/" },
  { title: 'سایت نوبت‌دهی', image: '/images/nobatdehi-online.jpg', url: "https://arameshlab.ir/" },
  { title: 'سایت شرکتی', image: '/images/company.jpg', url: "https://decobam.com/" },
  { title: 'سایت شخصی', image: '/images/personal.jpg', url: "https://decobam.com/" },
  { title: 'سایت آموزشی', image: '/images/amoozeshi.jpg', url: "https://tamdars.com/courses/complete-package-1/" },
  { title: 'سایت خبری', image: '/images/news-site-1.jpg', url: "https://www.khabarfoori.com/" },
  { title: 'سایت خدماتی', image: '/images/company.jpg', url: "https://www.digistyle.com/" },
  { title: 'سایت پزشکی', image: '/images/medical-website-design.webp', url: "https://arameshlab.ir/" },
  { title: 'سایت رزومه', image: '/images/resume.jpg', url: "https://decobam.com/" },
]

const PortfolioGrid = () => {
  return (
    <div className=' bg-linear-to-t from-cyan-950 to-black'>
      <Header />
      <div className="w-full max-w-7xl mx-auto p-4 pb-10 pt-24">
        <h2 className="text-center text-3xl font-bold mb-10 text-white">نمونه کارهای ما</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {slides.map((slide, index) => (
            <Link href={slide.url} key={index}>
              <div
                className="border border-gray-300 rounded-xl overflow-hidden shadow-md bg-white/90 hover:shadow-xl transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-black">{slide.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PortfolioGrid
