"use client";

import {
  ShieldCheck,
  FileText,
  Calendar,
  CreditCard,
  Percent,
  Handshake,
} from "lucide-react"; 

export default function FeaturesSection() {
  const features = [
    {
      icon: <CreditCard className="w-10 h-10 text-amber-400" />,
      title: "پرداخت ۵۰٪ مبلغ",
      description:
        "فقط نصف قیمت رو اول کار پرداخت کنید و بقیه رو راحت قسطی بدید",
    },
    {
      icon: <Percent className="w-10 h-10 text-amber-400" />,
      title: "اقساط انعطاف‌پذیر ۶ تا ۳۶ ماه",
      description:
        "مدت زمان اقساط رو خودتون انتخاب کنید — از کوتاه‌مدت تا بلندمدت",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-amber-400" />,
      title: "خرید بدون ضامن",
      description: "بدون نیاز به ضامن یا چک اضافی — فرآیند ساده و سریع",
    },
    {
      icon: <FileText className="w-10 h-10 text-amber-400" />,
      title: "سند در رهن بانک",
      description:
        "سند به نام خریدار هست و فقط در رهن بانک قرار می‌گیره — خیالتون راحت",
    },
    {
      icon: <Handshake className="w-10 h-10 text-amber-400" />,
      title: "پرداخت بعد از تحویل",
      description: "ماشین رو تحویل بگیرید، سوار بشید و بعد اقساط رو شروع کنید",
    },
    {
      icon: <Calendar className="w-10 h-10 text-amber-400" />,
      title: "شروع فروش از ۲۰ فروردین",
      description: "فرصت محدود — همین حالا آماده بشید و از مزایا استفاده کنید!",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,158,11,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.06)_0%,transparent_55%)]" />
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-black tracking-tight bg-linear-to-r from-amber-200 via-white to-amber-300 bg-clip-text text-transparent mb-4">
            فروش اقساطی بدون دردسر در مدرن گالری
          </h2>
          <p className="text-lg md:text-xl text-gray-300/90 max-w-3xl mx-auto">
            به ما اعتماد کنید — از ۶ الی ۳۶ ماه اقساط راحت، بدون ضامن و با شرایط
            طلایی
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                group relative 
                backdrop-blur-md bg-[#0f172a]/35 border border-amber-900/30 
                rounded-2xl overflow-hidden 
                shadow-[0_4px_12px_-2px_rgba(245,158,11,0.25),0_2px_6px_-2px_rgba(245,158,11,0.15)]
                hover:shadow-[0_6px_16px_-2px_rgba(245,158,11,0.45),0_4px_12px_-4px_rgba(245,158,11,0.25)]
                p-6 md:p-8 transition-all duration-500 ease-out
                hover:scale-[1.03] hover:-translate-y-1
              `}
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />

              <div className="flex flex-col items-center text-center">
                <div className="mb-5 p-4 rounded-full bg-amber-900/20 border border-amber-800/40">
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-amber-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300/85 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 md:mt-16">
          <p className="text-xl md:text-2xl font-semibold text-amber-300/90 mb-6">
            فرصت محدود — فروش اقساطی از ۲۰ فروردین شروع می‌شه!
          </p>
        </div>
      </div>
    </section>
  );
}
