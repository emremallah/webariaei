import Header from '@/components/header'
import React from 'react'

function ContactUs() {
  return (
    <div className=' bg-linear-to-t from-cyan-950 to-black'>
      <Header />
      <div className='w-full text-white text-center px-6 md:px-32 py-24 bg-black/20'>
        <h2 className='text-5xl font-bold mb-10'>
          ارتباط با <span className='text-cyan-400'>ما</span>
        </h2>
        <p className='text-xl leading-9 text-justify max-w-3xl mx-auto'>
          اگر سوالی دارید، نیاز به مشاوره دارید یا آماده‌اید پروژه‌تان را با تیم <span className='text-cyan-400 font-semibold'>وب آریایی</span> شروع کنید، ما همیشه آماده پاسخگویی هستیم. ما باور داریم که ارتباط مؤثر، پایه‌گذار همکاری‌های موفق و بلندمدت است.
          <br /><br />
          برای ارتباط مستقیم می‌توانید از طریق شماره تماس یا پیام در واتساپ و تلگرام با ما در ارتباط باشید. همچنین از طریق صفحه اینستاگرام ما، می‌توانید نمونه‌کارها، اخبار و نکات آموزشی روز را دنبال کنید.
          <br /><br />
          <span className='font-semibold text-cyan-400'>پاسخگویی:</span> شنبه تا پنج‌شنبه، ساعت ۹ صبح تا ۲۰
          <br />
          <span className='font-semibold text-cyan-400'>شماره تماس، واتساپ و تلگرام:</span> 09126583961
          <br />
          <span className='font-semibold text-cyan-400'>اینستاگرام:</span> <a href='https://instagram.com/webariaei' target='_blank' className='underline hover:text-[#00FFC2]'>@webariaei</a>
          <br />
          <span className='font-semibold text-cyan-400'>آدرس:</span> تهران، فرمانیه
          <br /><br />
          <span className='text-lg font-semibold'>
            برای دریافت مشاوره رایگان همین حالا با ما تماس بگیرید.
          </span>
          <br />
          <span className='text-md opacity-80'>
            اعتماد شما سرمایه ماست. ما اینجاییم تا حضور دیجیتال برند شما را قوی‌تر از همیشه بسازیم.
          </span>
          <br /><br />
          <span className='text-sm text-gray-300'>
            مدیریت: سارا قبادی و علی ملاح
          </span>
        </p>
      </div>
    </div>
  )
}

export default ContactUs
