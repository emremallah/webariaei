"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "خانه", href: "/" },
  { label: "درباره‌ ما", href: "/about" },
  { label: "نمونه‌کارها", href: "/portfolio" },
  { label: "خدمات", href: "/services" },
  { label: "ارتباط با ما", href: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 border-b-1 border-[#FFFFFF40] backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

        {/* لوگو سمت راست */}
        <Link href="/" className="text-white font-bold text-xl md:order-1">
          وب <span className="text-cyan-400">آریایی</span>
        </Link>

        {/* آیتم‌ها وسط در دسکتاپ */}
        <nav className="hidden md:flex gap-8 text-white text-sm font-medium md:order-2 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item, idx) => (
            <div key={idx} className="relative group cursor-pointer">
              <Link href={item.href}>{item.label}</Link>
              <span className="absolute bottom-[-2px] right-0 h-[2px] w-0 bg-cyan-400 transition-all duration-700 group-hover:w-full"></span>
            </div>
          ))}
        </nav>

        {/* دکمه سمت چپ در دسکتاپ */}
        <div className="hidden md:block md:order-3">
          <button className="bg-cyan-600 text-white font-bold py-2 px-4 rounded-xl duration-700 hover:scale-105 transition-transform">
            درخواست مشاوره
          </button>
        </div>

        {/* منوی همبرگری در موبایل */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* منوی موبایل */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden backdrop-blur-3xl text-white px-4 py-4 space-y-4 text-center"
        >
          {navItems.map((item, idx) => (
            <Link
              href={item.href}
              key={idx}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/10 pb-2"
            >
              {item.label}
            </Link>
          ))}
          <button className="w-full bg-cyan-300 text-gray-800 duration-700 font-bold py-3 rounded-xl mt-4 hover:scale-105 transition-transform">
            درخواست مشاوره
          </button>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
