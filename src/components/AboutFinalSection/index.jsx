"use client";
import {
  FaStar,
} from "react-icons/fa";

export default function AboutFinal() {
  return (
    <section
      dir="rtl"
      className="relative w-full bg-linear-to-b from-gray-950 via-black to-gray-950 text-white"
    >
      <div className="relative z-10 container mx-auto px-5 sm:px-6 md:px-10 lg:px-12 xl:px-16 py-16 md:py-20 lg:py-10">
        <div className="text-center max-w-5xl mx-auto mb-16 md:mb-20 lg:mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl  font-extrabold tracking-tight leading-tight md:leading-snug">
            <span className="text-[#FF6600] "> اتومبیل مدرن </span>
            <br className="sm:hidden" />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/90">
              نمایشگاه لوکس با سابقه درخشان
            </span>
          </h1>

          <p className="mt-6 md:mt-8 text-xl sm:text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed">
            بیش از <span className="text-[#FF6600] font-medium">۲۰ سال</span>{" "}
            تجربه تخصصی در خرید و فروش خودروهای لوکس و لاکچری
          </p>
        </div>
        <div className="prose prose-invert prose-lg md:prose-xl max-w-none mb-16 md:mb-20 lg:mb-24 leading-relaxed text-gray-200">
          <p>
            نمایشگاه <strong>اتومبیل مدرن</strong> با بیش از دو دهه سابقه
            ارزشمند، یکی از شناخته‌شده‌ترین و معتبرترین مراکز خرید و فروش
            خودروهای لوکس و لاکچری در <strong>شرق کشور</strong> است.
          </p>

          <p>
            ما با افتخار مجموعه‌ای کامل از{" "}
            <strong>بهترین و لوکس‌ترین خودروهای روز دنیا</strong> را در اختیار
            شما قرار داده‌ایم؛ از محبوب‌ترین مدل‌ها گرفته تا{" "}
            <strong>کم‌یاب‌ترین و خاص‌ترین</strong> خودروهای خارجی که در ایران
            یافت می‌شوند.
          </p>

          <p className="text-[#FF6600] font-medium text-2xl mt-10! mb-6!">
            در مدرن فقط خودرو نمی‌فروشیم؛ تجربهٔ لوکس بودن را به شما هدیه
            می‌کنیم
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 my-10 md:my-14">
            {[
              "مشاوره تخصصی و حرفه‌ای بر اساس بودجه و سلیقه شما",
              "تنوع بسیار بالا از برندهای مطرح جهان",
              "کارشناسی دقیق و شفاف تمامی خودروها",
              "قیمت‌های رقابتی و منصفانه",
              "تیم فنی بسیار مجرب و متخصص",
              "عاملیت رسمی فروش محصولات BMW",
              "خدمات آنلاین کامل از طریق وب‌سایت",
              "تضمین اصالت و کیفیت در تمامی خودروها",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 text-lg">
                <div className="mt-1.5 text-[#FF6600] text-xl shrink-0">
                  <FaStar />
                </div>
                <p className="text-gray-200">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 md:mt-12">
            چه به دنبال یک <strong>BMW</strong> خاص و کمیاب باشید، چه بخواهید
            یکی از <strong>بهترین مدل‌های روز دنیا</strong> از برندهای مرسدس،
            پورشه، لندروور، تویوتا لکسوس، بنتلی، رولز رویس یا … را داشته باشید؛
            <br className="hidden sm:block" />
            <strong>مدرن گالری</strong> با اطمینان و افتخار در کنارتان است.
          </p>

          <p className="mt-8 text-xl md:text-2xl font-medium text-center text-gray-100">
            ما نه فقط خودرو می‌فروشیم،
            <br className="sm:hidden" />
            <span className="text-[#FF6600]">
              ما رابطه اعتماد و رضایت می‌سازیم
            </span>
          </p>
        </div>

        <div className="text-center">
          <div className="inline-block p-0.5 rounded-full bg-linear-to-r from-[#FF6600] via-[#ffb266] to-[#FF6600]">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 sm:gap-4 px-10 sm:px-14 md:px-16 lg:px-20 py-5 sm:py-6 md:py-7 bg-black hover:bg-black/90 text-white hover:text-[#FF6600] font-bold text-lg sm:text-xl md:text-2xl rounded-full transition-all duration-300 border-2 border-transparent hover:border-[#FF6600]/40 shadow-xl shadow-black/70 hover:shadow-2xl hover:shadow-[#FF6600]/30 hover:scale-[1.03]"
            >
              همین حالا با کارشناسان مدرن تماس بگیرید
              <span className="text-2xl sm:text-3xl">→</span>
            </a>
          </div>

          <p className="mt-6 text-gray-400 text-lg">
            منتظر دیدار حضوری یا گفتگوی آنلاین شما هستیم
          </p>
        </div>
      </div>
    </section>
  );
}
