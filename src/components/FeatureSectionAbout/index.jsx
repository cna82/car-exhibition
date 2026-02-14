"use client";

import { 
  FaCrown, 
  FaGem, 
  FaEye, 
  FaUsersCog, 
  FaShieldAlt, 
  FaHandshake 
} from "react-icons/fa";

export default function AboutSection() {
  const highlights = [
    {
      icon: <FaCrown />,
      title: "میراث لوکس",
      desc: "مدرن گالری فراتر از یک نمایشگاه است؛ جایی که هنر مهندسی و سبک زندگی در هم تنیده‌اند. ما تنها خودروهای استثنایی و منتخب را گرد می‌آوریم.",
    },
    {
      icon: <FaGem />,
      title: "انتخاب بی‌نقص",
      desc: "هر خودرو با دقت و وسواس بالا بررسی می‌شود؛ از نظر فنی، ظاهری، سابقه و اصالت. فقط بهترین‌ها شایسته حضور در گالری ما هستند.",
    },
    {
      icon: <FaEye />,
      title: "تجربه‌ای متفاوت",
      desc: "از لحظه ورود شما مهمان ویژه هستید. تست رانندگی اختصاصی، مشاوره شخصی و فضایی آرام برای تصمیم‌گیری بدون هیچ فشاری.",
    },
    {
      icon: <FaUsersCog />,
      title: "تیم حرفه‌ای و متعهد",
      desc: "کارشناسان ما با سال‌ها تجربه در بازار خودروهای لوکس، همواره در کنارتان هستند؛ از انتخاب اولیه تا خدمات پس از فروش.",
    },
    {
      icon: <FaShieldAlt />,
      title: "شفافیت کامل",
      desc: "همه چیز روشن و مشخص است: کارشناسی دقیق، گزارش فنی کامل، قیمت واقعی و ضمانت اصالت. اعتماد شما اولویت اول ماست.",
    },
    {
      icon: <FaHandshake />,
      title: "رابطه‌ای ماندگار",
      desc: "بسیاری از مشتریان عزیز ما پس از سال‌ها دوباره به ما بازمی‌گردند. ما نه فقط خودرو می‌فروشیم؛ رابطه‌ای بلندمدت می‌سازیم.",
    },
  ];

  return (
    <section 
      dir="rtl"
      className="relative w-full bg-linear-to-b from-gray-950 via-black to-gray-950 text-white py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,102,0,0.09)_0%,transparent_55%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,102,0,0.07)_0%,transparent_60%)]"></div>
      </div>

      <div className="container mx-auto px-5 sm:px-8 md:px-10 lg:px-12 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl   font-extrabold tracking-tight mb-5 md:mb-6 leading-tight">
            <span className="text-[#FF6600] block sm:inline">مدرن گالری</span> — جایی که لوکس، معنا می‌یابد
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed font-light max-w-4xl mx-auto">
            ما معتقدیم خودرو فقط یک وسیله نیست؛ بخشی از شخصیت، سلیقه و داستان زندگی شماست. 
            برای همین هر خودرو در گالری ما، یک اثر هنری و مهندسی خاص است.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-9 lg:gap-10">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className={`
                group relative 
                bg-linear-to-br from-gray-900/70 to-black/60 
                backdrop-blur-md border border-gray-800/40 
                rounded-2xl sm:rounded-3xl p-7 sm:p-8 md:p-9 lg:p-10 
                transition-all duration-500 ease-out
                hover:border-[#FF6600]/50 hover:shadow-xl hover:shadow-[#FF6600]/15
                hover:-translate-y-2 sm:hover:-translate-y-3
              `}
            >
              <div className="mb-5 sm:mb-6 text-[#FF6600] text-4xl sm:text-5xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                {item.icon}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#FF6600] transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {item.desc}
              </p>
              <div className="absolute bottom-0 left-6 right-6 sm:left-8 sm:right-8 h-0.5 bg-linear-to-r from-transparent via-[#FF6600]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center rounded-full"></div>
            </div>
          ))}
        </div>
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 text-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-200 max-w-4xl mx-auto leading-relaxed px-4">
            به مدرن گالری خوش آمدید — جایی که هر دیدار، آغاز یک داستان زیبا و ماندگار است.
          </p>
        </div>
      </div>
    </section>
  );
}