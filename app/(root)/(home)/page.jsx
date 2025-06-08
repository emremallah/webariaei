import Hero from '@/components/hero'
import ServicesSection from '@/components/service'
import WebsiteSlider from '@/components/slider'
import WhyWebAryaei from '@/components/whyus'
import React from 'react'
import Head from 'next/head'

function page() {
    return (
        <>
            <Head>
                <title>وب آریایی | طراحی سایت حرفه‌ای</title>
                <meta name="description" content="وب آریایی ارائه‌دهنده خدمات حرفه‌ای طراحی و توسعه وب‌سایت برای انواع کسب‌وکارها. با ما حضورتان در دنیای آنلاین را تقویت کنید." />
                <meta name="keywords" content="وب آریایی, طراحی سایت, سایت فروشگاهی, سایت شرکتی, سایت شخصی, طراحی وب اختصاصی" />
                <meta property="og:title" content="وب آریایی | طراحی سایت حرفه‌ای" />
                <meta property="og:description" content="طراحی و توسعه وب‌سایت با بهترین کیفیت. وب آریایی همراه کسب‌وکار شما." />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="fa_IR" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="وب آریایی" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>
                <Hero />
                <WebsiteSlider />
                <WhyWebAryaei />
                <ServicesSection />
            </div>
        </>
    )
}

export default page
