"use client";

// import Link from 'next/link'
// import React from 'react'

import Header from "./header";

// function Hero() {
//   return (
//     <div className='w-full text-white text-center py-24'>
//       <span className='text-6xl font-bold'>وب </span>
//       <span className='text-6xl font-bold text-[#00FFC2]'>آریایی</span>
//       <p className='text-2xl mt-5'>طراحی و توسعه وب سایت</p>
//       <p className='text-2xl mt-3 px-4'>
//         ما بهترین خدمات طراحی و توسعه وب سایت را ارائه می‌دهیم تا کسب و کار شما را به سطح بالاتری برسانیم.
//         <br />
//         با ما همراه باشید تا حضور آنلاین خود را تقویت کنید و به موفقیت‌های بیشتری دست یابید.
//       </p>
//       <div className='mt-12 flex justify-center gap-6 flex-wrap'>
//         <Link href={'tel:+989126583961'}>
//           <button className='bg-violet-600 hover:bg-violet-800 text-white font-bold py-3 px-6 rounded transition duration-300 text-2xl shadow-[10px_10px_20px_black] hover:shadow-[10px_10px_25px_black]'>
//             تماس بگیرید
//           </button>
//         </Link>
//         <Link href='/services'>
//           <button className='bg-white text-black font-bold py-3 px-6 rounded transition duration-300 text-2xl shadow-[10px_10px_20px_black] hover:bg-gray-300'>
//             خدمات ما
//           </button>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Hero







// components/Hero.jsx
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Hero() {
  const title = "طراحی وب‌سایت حرفه‌ای برای کسب‌وکار شما";
  const subtitle = "با جدیدترین تکنولوژی‌های روز مثل Next.js، Tailwind و Node.js";
  const buttonText = "شروع همکاری";

  const [typedTitle, setTypedTitle] = useState("");
  const [typedSubtitle, setTypedSubtitle] = useState("");

  const controls = useAnimation();

  useEffect(() => {
    async function typeText(text, setter, delay = 100) {
      for (let i = 0; i <= text.length; i++) {
        setter(text.slice(0, i));
        await new Promise((r) => setTimeout(r, delay));
      }
    }

    async function sequence() {
      await controls.start({ opacity: 1, y: 0 }); // شروع انیمیشن
      await typeText(title, setTypedTitle, 100);
      await new Promise((r) => setTimeout(r, 500));
      await typeText(subtitle, setTypedSubtitle, 50);
    }

    sequence();
  }, [controls]);

  return (
    <div>
      <Header />
      <section
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            {typedTitle}
            <span className="blinking-cursor">|</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="text-lg md:text-xl max-w-2xl"
          >
            {typedSubtitle}
          </motion.p>

          <button className="bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition duration-300">
            {buttonText}
          </button>
        </div>
      </section>

      <style jsx>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 24px;
          color: white;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
