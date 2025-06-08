import Header from '@/components/header'
import React from 'react'
import { FaLaptopCode, FaWordpressSimple, FaShoppingCart, FaBuilding, FaUser, FaCalendarAlt, FaVial, FaSearch, FaHeadset, FaChartLine, FaMobileAlt, FaRedo, FaCloud } from 'react-icons/fa'

const services = [
  {
    icon: <FaLaptopCode size={40} className='text-cyan-400' />,
    title: 'طراحی سایت اختصاصی',
    description: 'طراحی کاملاً اختصاصی با استفاده از تکنولوژی‌های روز مانند Next.js، React.js و Node.js برای ساخت سایت‌هایی سریع، امن و قابل توسعه.',
  },
  {
    icon: <FaWordpressSimple size={40} className='text-cyan-400' />,
    title: 'طراحی سایت با وردپرس',
    description: 'طراحی سریع و مقرون‌به‌صرفه با استفاده از وردپرس برای سایت‌های شرکتی، فروشگاهی، شخصی و... با قابلیت مدیریت آسان.',
  },
  {
    icon: <FaShoppingCart size={40} className='text-cyan-400' />,
    title: 'طراحی فروشگاه اینترنتی',
    description: 'ساخت فروشگاه حرفه‌ای با امکانات سبد خرید، درگاه پرداخت، پنل مدیریت محصولات و سئوی عالی برای افزایش فروش.',
  },
  {
    icon: <FaBuilding size={40} className='text-cyan-400' />,
    title: 'سایت شرکتی',
    description: 'طراحی سایت‌های رسمی برای شرکت‌ها و برندها جهت معرفی خدمات، نمونه‌کارها و جلب اعتماد مشتری.',
  },
  {
    icon: <FaUser size={40} className='text-cyan-400' />,
    title: 'سایت شخصی و رزومه',
    description: 'مناسب برای معرفی افراد، رزومه کاری، نمونه کار و برندینگ شخصی در فضای آنلاین.',
  },
  {
    icon: <FaCalendarAlt size={40} className='text-cyan-400' />,
    title: 'سایت نوبت‌دهی آنلاین',
    description: 'ویژه کلینیک‌ها، سالن‌ها و مشاغل خدماتی با سیستم رزرو نوبت، پنل مدیریت و اعلان‌های پیامکی.',
  },
  {
    icon: <FaVial size={40} className='text-cyan-400' />,
    title: 'سایت آزمایشگاه و درمانی',
    description: 'ارائه خدمات آنلاین برای مراکز درمانی شامل معرفی خدمات، دریافت جواب آزمایش، و مدیریت مراجعین.',
  },
  {
    icon: <FaSearch size={40} className='text-cyan-400' />,
    title: 'سئو و بهینه‌سازی',
    description: 'افزایش رتبه در نتایج گوگل با آنالیز رقبا، تحقیق کلمات کلیدی، سئو داخلی و خارجی و بهبود سرعت سایت.',
  },
  {
    icon: <FaHeadset size={40} className='text-cyan-400' />,
    title: 'پشتیبانی فنی و نگهداری',
    description: 'خدمات نگهداری ماهانه، رفع خطا، بک‌آپ‌گیری، مانیتورینگ و به‌روزرسانی مداوم سایت.',
  },
  {
    icon: <FaChartLine size={40} className='text-cyan-400' />,
    title: 'مشاوره دیجیتال مارکتینگ',
    description: 'راهنمایی در مسیر بازاریابی آنلاین، جذب مشتری هدف، تبلیغات و بهینه‌سازی مسیر فروش دیجیتال.',
  },
  {
    icon: <FaMobileAlt size={40} className='text-cyan-400' />,
    title: 'طراحی اپلیکیشن موبایل',
    description: 'توسعه اپلیکیشن‌های حرفه‌ای اندروید و iOS با رابط کاربری زیبا و تجربه کاربری عالی برای کسب‌وکارها.',
  },
  {
    icon: <FaRedo size={40} className='text-cyan-400' />,
    title: 'ری‌دیزاین و بازطراحی سایت',
    description: 'بازطراحی کامل سایت‌های قدیمی برای بهبود ظاهر، سرعت و تجربه کاربری مطابق با استانداردهای روز.',
  },
  {
    icon: <FaCloud size={40} className='text-cyan-400' />,
    title: 'راه‌اندازی و انتقال سایت',
    description: 'انتقال ایمن وب‌سایت، راه‌اندازی دامنه و هاست، اتصال CDN، ایمیل سازمانی و پیکربندی اولیه.',
  },
]

function Services() {
  return (
    <div className=' bg-linear-to-t from-cyan-950 to-black'>
      <Header />
      <div className='w-full text-white px-6 md:px-20 py-24 bg-black/20'>
        <h2 className='text-5xl font-bold text-center mb-14'>
          خدمات <span className='text-cyan-400'>ما</span>
        </h2>
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-white/5 border border-white/10 rounded-2xl p-6 shadow-[0_0_20px_rgba(255,255,255,0.05)] transition duration-300 hover:scale-[1.03] flex flex-col justify-between h-full'
            >
              <div>
                <div className='mb-4'>{service.icon}</div>
                <h3 className='text-2xl font-bold mb-4 text-cyan-400'>{service.title}</h3>
                <p className='text-lg leading-7 text-gray-300'>{service.description}</p>
              </div>
              <div className='mt-6 text-center'>
                <p className='text-white text-sm mt-4 border-t border-white/10 pt-4'>برای دریافت مشاوره تماس بگیرید</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
