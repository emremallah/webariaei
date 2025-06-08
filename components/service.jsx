"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

const economicServices = [
  {
    title: "سایت فروشگاهی",
    features: [
      "درگاه پرداخت آنلاین",
      "مدیریت محصولات و سفارشات",
      "سبد خرید حرفه‌ای",
      "گزارش‌گیری فروش",
      "امکان تعریف کد تخفیف",
      "اتصال به سیستم ارسال پیامک",
      "پنل مدیریتی پیشرفته",
      "سئو پایه و سرعت بارگذاری مناسب",
    ],
    price: "از 12 تا 24 میلیون تومان",
  },
  {
    title: "سایت شرکتی",
    features: [
      "معرفی خدمات و اعضای تیم",
      "درباره ما حرفه‌ای",
      "فرم تماس و پشتیبانی",
      "گالری تصاویر",
      "وبلاگ برای تولید محتوا",
      "چند زبانه (در صورت نیاز)",
      "سئو پایه و سرعت بالا",
    ],
    price: "از 10 تا 22 میلیون تومان",
  },
  {
    title: "سایت شخصی",
    features: [
      "رزومه و نمونه کار",
      "بلاگ شخصی",
      "فرم تماس",
      "اتصال به شبکه‌های اجتماعی",
      "پشتیبانی ساده و سریع",
    ],
    price: "از 8 تا 18 میلیون تومان",
  },
  {
    title: "سایت نوبت‌دهی",
    features: [
      "رزرو نوبت آنلاین",
      "ارسال پیامک یادآور",
      "تقویم هوشمند",
      "پنل مدیریت نوبت‌ها",
      "نمایش سوابق نوبت",
    ],
    price: "از 9 تا 20 میلیون تومان",
  },
];

const customServices = [
  {
    title: "سایت فروشگاهی",
    features: [
      "طراحی اختصاصی رابط کاربری",
      "پنل مدیریت سفارشی",
      "امکان افزودن ویژگی‌های خاص",
      "کدنویسی با Next.js و Node.js",
      "سرعت بارگذاری بهینه و سئو فنی",
    ],
    price: "70 میلیون تومان",
  },
  {
    title: "سایت شرکتی",
    features: [
      "طراحی سفارشی متناسب با برند",
      "قابلیت توسعه اختصاصی",
      "داشبورد مدیریت محتوای ویژه",
      "کدنویسی تمیز و توسعه‌پذیر",
    ],
    price: "60 میلیون تومان",
  },
  {
    title: "سایت شخصی",
    features: [
      "طراحی واکنش‌گرا",
      "امکانات سفارشی شده برای شخص",
      "امنیت بالا",
      "اتصال به API دلخواه",
    ],
    price: "40 میلیون تومان",
  },
  {
    title: "سایت نوبت‌دهی",
    features: [
      "طراحی اختصاصی برای کلینیک یا مشاغل خاص",
      "پنل مدیریت پیشرفته",
      "اتصال به سیستم پیامک و ایمیل",
      "تقویم سفارشی با قابلیت فیلتر",
    ],
    price: "50 میلیون تومان",
  },
];

const ServicesSection = () => {
  const [selected, setSelected] = useState("economic");
  const services = selected === "economic" ? economicServices : customServices;

  return (
    <div className=" bg-linear-to-t from-cyan-950 to-black">
      <section className="w-full max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          انواع پلن‌های طراحی سایت
        </h2>

        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setSelected("economic")}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition ${selected === "economic" ? "bg-cyan-600 text-white" : "bg-white text-black"
              }`}
          >
            اقتصادی
          </button>
          <button
            onClick={() => setSelected("custom")}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition ${selected === "custom" ? "bg-cyan-600 text-white" : "bg-white text-black"
              }`}
          >
            اختصاصی
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between h-[400px] w-[280px] border border-gray-300 bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-white"
            >
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-semibold mb-5">{service.title}</h3>
                <ul className="space-y-3 text-sm">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 text-center">
                <p className="text-lg font-bold mb-2">{service.price}</p>
                <Link href={"tel:+989126583961"}>
                  <button
                    className="inline-block text-sm text-white bg-black px-5 py-2 rounded-md hover:bg-gray-800 transition"
                  >
                    مشاوره رایگان
                  </button>
                </Link>
              </div>
            </div>
          ))}
          <div className="mt-12 flex justify-center">
            <Link href={"portfolio"}>
              <button className="bg-cyan-950 hover:bg-cyan-900 text-white font-bold py-3 px-6 rounded transition duration-300 text-2xl shadow-[10px_10px_20px_black] hover:shadow-[10px_10px_25px_black]">مشاهده ی نمونه کارها</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
