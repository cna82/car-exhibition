"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ClientProductDetail({
  product,
  similarProducts = [],
}) {
  const images = product.imgSrc || [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [product.id]);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section
      dir="rtl"
      className="min-h-screen bg-slate-900 text-white px-4 py-10 md:px-10 md:py-16"
    >
      <div className="max-w-7xl mx-auto">
        <Link
          href="/products"
          className="inline-flex items-center mb-10 text-orange-400 hover:text-orange-300 transition"
        >
          ← بازگشت به محصولات
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div className="space-y-6">
            <div className="relative aspect-5/4 rounded-3xl overflow-hidden bg-black border border-white/10 group">
              <Image
                src={images[index] || "/images/placeholder-car-large.jpg"}
                alt={product.title}
                fill
                priority
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-orange-600 hover:bg-orange-700 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg transition"
                  >
                    ❮
                  </button>

                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-orange-600 hover:bg-orange-700 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg transition"
                  >
                    ❯
                  </button>
                </>
              )}
            </div>
            <div className="flex gap-3 overflow-x-auto pb-1">
              {images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`relative w-24 h-20 shrink-0 rounded-xl overflow-hidden border cursor-pointer transition ${
                    index === i
                      ? "border-orange-500 scale-105"
                      : "border-white/10 hover:border-orange-400"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* info */}
          <div className="space-y-10">
            <div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">
                {product.title}
              </h1>

              <p className="text-3xl font-bold text-orange-400">
                {Number(product.price || 0).toLocaleString("fa-IR")} تومان
              </p>
            </div>

            {/* specs */}
            <div className="grid grid-cols-2 gap-5 bg-slate-800/60 p-7 rounded-3xl border border-white/10">
              <Spec label="برند" value={product.category} />
              <Spec label="مدل" value={product.model} />
              <Spec
                label="کارکرد"
                value={product.mileage?.toLocaleString("fa-IR")}
              />
              <Spec label="گیربکس" value={product.gearbox} />
              <Spec label="رنگ" value={product.color} />
              <Spec label="وضعیت بدنه" value={product.bodyStatus} />
            </div>

            {product.description && (
              <div className="bg-slate-800/60 p-7 rounded-3xl border border-white/10">
                <h3 className="text-xl font-bold mb-3">توضیحات</h3>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            )}
          </div>
        </div>
        {similarProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-6">
              محصولات مشابه
            </h2>

            <div className="flex gap-5 overflow-x-auto pb-2">
              {similarProducts.map((item) => (
                <Link
                  key={item.id}
                  href={`/products/${item.id}`}
                  className="min-w-65 bg-slate-800/60 rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500 transition"
                >
                  <div className="relative h-40">
                    <Image
                      src={
                        item.imgSrc?.[0] ||
                        "/images/placeholder-car-large.jpg"
                      }
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4 space-y-2">
                    <p className="font-bold">{item.title}</p>

                    <p className="text-orange-400 font-semibold">
                      {Number(item.price || 0).toLocaleString("fa-IR")} تومان
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Spec({ label, value }) {
  if (!value) return null;

  return (
    <div className="bg-slate-900/70 p-4 rounded-xl border border-white/5 hover:border-orange-500/40 transition">
      <p className="text-gray-400 text-sm mb-1">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}