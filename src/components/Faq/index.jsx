"use client";

import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "آیا خرید خودرو بدون ضامن امکان‌پذیر است؟",
    answer:
      "بله، کاملاً بدون نیاز به ضامن یا ضمانت‌نامه. فقط با ارائه چک معتبر یا مدارک ساده، فرآیند خرید اقساطی شما انجام می‌شود.",
  },
  {
    question: "پیش‌پرداخت چقدر است و چگونه پرداخت می‌شود؟",
    answer:
      "پیش‌پرداخت تنها ۵۰٪ مبلغ خودرو است. پس از پرداخت این مبلغ، خودرو تحویل داده می‌شود و مابقی به صورت اقساط ماهانه تسویه خواهد شد.",
  },
  {
    question: "مدت زمان اقساط چند ماه است؟",
    answer:
      "اقساط کاملاً انعطاف‌پذیر از ۶ ماه تا حداکثر ۳۶ ماه قابل انتخاب است تا با شرایط مالی شما کاملاً هماهنگ باشد.",
  },
  {
    question: "آیا پرداخت اقساط بعد از تحویل خودرو شروع می‌شود؟",
    answer:
      "بله، دقیقاً همین‌طور! ابتدا خودرو را تحویل می‌گیرید و پس از آن اقساط شروع می‌شود. بدون هیچ فشار مالی قبل از استفاده.",
  },
  {
    question: "سند خودرو به نام کیست و وضعیت رهن چگونه است؟",
    answer:
      "سند بلافاصله به نام خریدار (شما) ثبت می‌شود و تنها تا زمان تسویه کامل اقساط در رهن بانک باقی می‌ماند. پس از تسویه، رهن به‌طور کامل برداشته می‌شود.",
  },
  {
    question: "فروش اقساطی از چه تاریخی شروع می‌شود؟",
    answer:
      "فروش اقساطی ویژه رادخودرو از ۲۰ فروردین آغاز می‌شود. تعداد خودروها محدود است، پس فرصت را از دست ندهید!",
  },
  {
    question: "مدارک لازم برای ثبت‌نام چیست؟",
    answer:
      "کارت ملی، شناسنامه، یک برگ چک صیادی معتبر و مدارک درآمد (مانند فیش حقوقی، جواز کسب یا گردش حساب). جزئیات دقیق در زمان مشاوره اعلام می‌شود.",
  },
  {
    question: "اگر یک قسط را دیر پرداخت کنم چه می‌شود؟",
    answer:
      "توصیه ما پرداخت به‌موقع است. در صورت تأخیر، طبق قرارداد جریمه دیرکرد اعمال می‌شود. برای راه‌حل‌های مساعدت‌آمیز با پشتیبانی تماس بگیرید.",
  },
  {
    question: "آیا می‌توانم خودرو را قبل از تسویه کامل بفروشم؟",
    answer:
      "خیر، تا زمان تسویه کامل اقساط و آزادسازی رهن، انتقال سند ممکن نیست. پس از تسویه نهایی، خودرو کاملاً متعلق به شما خواهد بود.",
  },
];

const Faq = () => {
  return (
    <section
      dir="rtl"
      className="text-right relative w-full py-16 md:py-24 bg-slate-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(245,158,11,0.07)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_70%,rgba(59,130,246,0.05)_0%,transparent_55%)]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-black text-center tracking-tight bg-linear-to-r from-amber-200 via-white to-amber-300 bg-clip-text text-transparent mb-12 md:mb-16">
          سوالات متداول - مدرن گالری
        </h2>

        <div className="space-y-5 md:space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group relative backdrop-blur-lg bg-[#0f172a]/35 border border-amber-900/30 rounded-2xl overflow-hidden shadow-[0_4px_12px_-2px_rgba(245,158,11,0.2),0_2px_6px_-2px_rgba(245,158,11,0.15)] hover:shadow-[0_6px_16px_-2px_rgba(245,158,11,0.35),0_4px_12px_-4px_rgba(245,158,11,0.2)] transition-all duration-500"
            >
              <summary className="flex justify-between items-center cursor-pointer px-6 py-5 md:px-8 md:py-6 text-lg md:text-xl font-semibold text-amber-100 hover:text-amber-300 transition-colors select-none">
                <span>{faq.question}</span>
                <FaChevronDown className="text-amber-400 text-xl transition-transform duration-400 group-open:rotate-180" />
              </summary>

              <div className="px-6 pb-6 md:px-8 md:pb-8 text-gray-300/90 text-base md:text-lg leading-relaxed border-t border-amber-900/20 pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-12 text-gray-400/80 text-lg">
          سوال دیگری دارید؟ با پشتیبانی ما در ارتباط باشید!
        </div>
      </div>
    </section>
  );
};

export default Faq;
