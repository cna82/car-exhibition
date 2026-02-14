"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-right bg-black">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero0.jpg"
          alt="مدرن گالری - ماشین لوکس"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-end md:items-center justify-between gap-10">
        <div className="flex flex-col gap-6 md:w-2/3">
          <h1 className="text-4xl md:text-6xl font-extrabold text-orange-500 drop-shadow-lg">
            مدرن گالری
          </h1>
          <p className="text-gray-200 md:text-lg leading-relaxed">
            بهترین نمایشگاه ماشین‌های لوکس و مدرن با تجربه‌ای منحصر به فرد، جایی
            که هر خودرو داستانی برای گفتن دارد. ما با آخرین مدل‌ها و
            استانداردهای حرفه‌ای، رویای شما را به واقعیت تبدیل می‌کنیم.
          </p>

          <div className="flex gap-4 mt-4">
            <Link
              href="/products"
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors shadow-lg"
            >
              بازدید محصولات
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-orange-500 text-orange-500 font-semibold rounded-md hover:bg-orange-500 hover:text-white transition-colors"
            >
              تماس با ما
            </Link>
          </div>
        </div>

        <div className="hidden md:block md:w-1/3">
          <Image
            src="/images/foreigner/MercedesBenz/benz-gla-1.jpg"
            alt="ماشین لوکس"
            width={500}
            height={300}
            className="rounded-xl shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
