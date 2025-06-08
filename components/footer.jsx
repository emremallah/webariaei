'use client';

import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF15] text-white py-12 bg-linear-to-b from-cyan-950 to-black border-t-[1px] border-[#FFFFFF50]">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* بخش اول: اطلاعات تماس */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">تماس با ما</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <Link href="tel:+989126583961" className="flex items-center gap-2">
                <li className="flex items-center gap-2">
                  <span>📞</span> 0912-658-3961
                </li>
              </Link>
              <li className="flex items-center gap-2">
                <span>📍</span> تهران، فرمانیه
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <Link
                  href="mailto:saraghobadi.13681368@gmail.com"
                  className="text-[#38bdf8] hover:text-white transition-colors"
                >
                  saraghobadi.13681368@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/989126583961"
                  className="flex items-center gap-2 text-[#38bdf8] hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={20} /> واتساپ
                </Link>
              </li>
            </ul>
          </div>

          {/* بخش دوم: لینک‌های مهم */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">لینک‌های مهم</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">خانه</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">درباره ی ما</Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">نمونه‌کارها</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">خدمات</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">ارتباط با ما</Link>
              </li>
            </ul>
          </div>


          {/* بخش سوم: شبکه‌های اجتماعی */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">دنبال کنید</h3>
            <div className="flex gap-5">
              <Link
                href="https://www.instagram.com/webariaei"
                className="text-[#f472b6] hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com"
                className="text-[#60a5fa] hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                href="https://github.com"
                className="text-[#d4d4d4] hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* بخش پایین فوتر: کپی رایت */}
        <div className="text-center mt-12 text-sm text-gray-400">
          <p>&copy; 2025 وب آریایی. همه حقوق محفوظ است.</p>
          <p className="mt-2 text-xs text-gray-500">
            مدیریت: سارا قبادی و علی ملاح
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
