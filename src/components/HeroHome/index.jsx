
"use client";
import Image from "next/image";
import Link from "next/link"; 
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="-mt-15 relative w-full h-screen min-h-170 flex items-center justify-center overflow-hidden bg-[#0a0f2a]">
      <Image
        src="/images/hero/hero0.jpg"
        alt="نمایشگاه لوکس خودرو"
        fill
        className="object-cover brightness-[0.48] contrast-[1.08] saturate-[0.9] scale-105 transition-transform duration-[28s]"
        priority
      />

      <div className="absolute inset-0 bg-linear-to-t from-[#0a0f2a]/75 via-[#0a0f2a]/50 to-[#0a0f2a]/25" />

      <div className="absolute inset-0 opacity-12 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(255,215,0,0.10)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(59,130,246,0.08)_0%,transparent_55%)]" />
      </div>

      <div
        className={`
          relative z-10 w-[88%] max-w-2xl 
          backdrop-blur-md bg-[#0f172a]/35 border border-blue-950/40 
          rounded-2xl md:rounded-3xl 
          shadow-[0_0px_22px_-2px_rgba(245,158,11,0.35),0_2px_8px_-2px_rgba(245,158,11,0.2)]
          hover:shadow-[0_6px_16px_-2px_rgba(245,158,11,0.5),0_4px_12px_-4px_rgba(245,158,11,0.3)]
          p-6 md:p-8 text-center text-white
          animate-fadeInUp
          before:content-[''] before:absolute before:inset-0 
          before:bg-linear-to-br before:from-amber-900/8 before:via-transparent before:to-blue-950/5
          before:rounded-3xl before:pointer-events-none
          transition-all duration-700 ease-out
        `}
      >
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-amber-500/12 rounded-full blur-3xl opacity-70" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/8 rounded-full blur-3xl opacity-50" />

        <h1
          className={`
            text-3xl sm:text-4xl  
            font-black tracking-tight 
            bg-linear-to-r from-amber-200 via-white to-amber-300 
            bg-clip-text text-transparent
            mb-4 md:mb-6
          `}
        >
          مدرن گالری{" "}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300/90 mb-8 leading-relaxed">
          جایی که طراحی، قدرت و اصالت در اوج قرار می‌گیرند تجربه‌ای خاص برای
          عاشقان واقعی خودرو
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
          <Button
            size="default"
            asChild
            className={`
              relative overflow-hidden 
              bg-linear-to-r from-amber-600 to-orange-500 
              hover:from-amber-700 hover:to-orange-600
              text-white font-semibold text-base md:text-lg px-8 py-5 rounded-xl
              shadow-lg shadow-amber-900/40 
              transition-all duration-500
              hover:scale-105 hover:shadow-xl hover:shadow-amber-700/50
              active:scale-95 group
            `}
          >
            <Link href="/products" className="relative z-10">
              {" "}
              مشاهده خودرو ها 
            </Link>
          </Button>

          <Button
            size="default"
            variant="outline"
            asChild
            className={`
              border border-amber-800/50 text-amber-100 font-semibold text-base md:text-lg px-8 py-5 rounded-xl
              bg-[#0f172a]/25 backdrop-blur-md
              hover:bg-amber-950/30 hover:border-amber-600/60 hover:scale-105 hover:text-white
              transition-all duration-500
              active:scale-95
            `}
          >
            <Link href="/about">درباره نمایشگاه</Link>
          </Button>
        </div>

        <div className="mt-8 text-sm md:text-base text-gray-400/85 flex justify-center gap-6 flex-wrap">
          <span>بیش از ۱۵۰ مدل خاص</span>
          <span className="text-amber-300/80">•</span>
          <span>تست درایو VIP</span>
          <span className="text-amber-300/80">•</span>
          <span>مشاوره اختصاصی</span>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-slowBounce">
        <div className="w-8 h-12 border-2 border-amber-800/40 rounded-full flex items-center justify-center p-1.5">
          <div className="w-1.5 h-4 bg-amber-300/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}