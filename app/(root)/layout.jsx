import Header from '@/components/header'
import React from 'react'
import '../globals.css'
import Footer from '@/components/footer';
import CallButton from '@/components/CallButton';

export const metadata = {
  title: "وب آریایی | طراحی سایت و توسعه وب",
  description: "وب آریایی: ارائه خدمات طراحی سایت فروشگاهی، شرکتی و شخصی با بهترین کیفیت و پشتیبانی حرفه‌ای.",
  keywords: "طراحی سایت, طراحی وب, وب آریایی, خدمات وب, طراحی سایت فروشگاهی, طراحی سایت شرکتی, طراحی سایت شخصی",
};

function Layout({ children }) {
  return (
    <html lang="fa">
      <body style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}>

        {children}
        <CallButton />
        <Footer />
      </body>
    </html>
  );
}

export default Layout;
