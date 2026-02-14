"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const navLinks = [
    { title: "خانه", href: "/" },
    { title: "محصولات", href: "/products" },
    { title: "درباره ما", href: "/about" },
    { title: "تماس با ما", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-800 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-4 text-right md:w-1/3">
          <div className="flex flex-row-reverse items-center gap-3">
            <div className="h-9 w-9 rounded-full overflow-hidden border-2 border-amber-400 shadow-lg animate-pulse">
              <Image
                src="/images/favicon/icon.png"
                alt="نمایشگاه لوکس خودرو"
                width={200}
                height={200}
                className="object-cover"
                priority
              />
            </div>
            <span className="font-bold text-2xl tracking-wider text-amber-400">
              مدرن گالری
            </span>
          </div>
          <div>
            <hr />
          </div>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            بهترین نمایشگاه ماشین با تجربه‌ای لوکس و صنعتی، همراه با آخرین
            مدل‌ها و استانداردهای حرفه‌ای.
          </p>
          <div className="flex gap-3 mt-2">
            <a
              href="#"
              className="text-gray-400 hover:text-amber-400 transition-colors text-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-amber-400 transition-colors text-lg"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-amber-400 transition-colors text-lg"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-right md:w-1/3">
          <h4 className="font-semibold mb-3 text-xl text-amber-400">منو</h4>
          <div>
            <hr />
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 text-sm md:text-base hover:text-amber-400 transition-colors hover:translate-x-1"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3 text-right md:w-1/3">
          <h4 className="font-semibold mb-3 text-xl text-amber-400">
            تماس با ما
          </h4>
          <div>
            <hr />
          </div>
          <p className="text-gray-300 text-sm md:text-base">📞 023-34221010</p>
          <p className="text-gray-300 text-sm md:text-base">📍 گرمسار</p>
          <p className="text-gray-300 text-sm md:text-base">
            ✉ info@exhibition.ir
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700 text-gray-400 text-center text-sm py-4">
        © 2026 تمامی حقوق محفوظ است
      </div>
    </footer>
  );
}
