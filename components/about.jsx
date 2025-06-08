import React from 'react'
import Header from './header'

function AboutUs() {
  return (
    <div className=' bg-linear-to-t from-cyan-950 to-black'>
      <Header />
      <div className='w-full text-white text-center px-6 md:px-32 py-24'>
        <h2 className='text-5xl font-bold mb-10'>
          درباره <span className='text-cyan-400'>ما</span>
        </h2>
        <p className='text-xl leading-9 text-justify max-w-4xl mx-auto'>
          شرکت <span className='font-bold text-cyan-400'>وب آریایی</span> فعالیت خود را از سال ۱۳۹۷ آغاز کرده و با تلاش مستمر، امروز یکی از تیم‌های پیشرو در زمینه طراحی وب‌سایت، اپلیکیشن و نرم‌افزارهای اختصاصی به شمار می‌رود.
          <br /><br />
          این مجموعه با مدیریت <span className='font-semibold text-cyan-400'>سارا قبادی</span> و <span className='font-semibold text-cyan-400'>علی ملاح</span> پایه‌گذاری شده و تحت رهبری آن‌ها، موفق به اجرای ده‌ها پروژه موفق برای شرکت‌ها، فروشگاه‌ها، استارتاپ‌ها و کسب‌وکارهای شخصی در داخل و خارج از کشور شده است.
          <br /><br />
          ما در وب آریایی باور داریم که هر پروژه باید ترکیبی از طراحی زیبا، کدنویسی بهینه و تجربه کاربری دلنشین باشد. به همین دلیل، تیم ما از متخصصین با تجربه در حوزه‌های مختلف تشکیل شده که با دقت، خلاقیت و مسئولیت‌پذیری، پروژه‌ها را به بهترین شکل اجرا می‌کنند.
          <br /><br />
          خدمات ما شامل طراحی سایت با وردپرس و برنامه‌نویسی اختصاصی (فرانت‌اند با Next.js و React.js و بک‌اند با Node.js)، طراحی فروشگاه اینترنتی، وب‌سایت‌های شرکتی، شخصی، رزرو آنلاین و همچنین وب‌سایت‌های ویژه برای آزمایشگاه‌ها و مجموعه‌های خدماتی است.
          <br /><br />
          اعتماد شما برای ما بزرگ‌ترین افتخار است، و ما با تکیه بر تعهد، کیفیت بالا و پشتیبانی مداوم، تلاش می‌کنیم تا شریک قابل اعتماد دیجیتال شما باشیم.
          <br /><br />
          <span className='text-lg font-semibold text-cyan-400'>
            همراه شما در مسیر تحول دیجیتال: سارا قبادی و علی ملاح
          </span>
        </p>
      </div>
    </div>
  )
}

export default AboutUs
