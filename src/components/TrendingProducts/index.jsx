// components/FeaturedProducts.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";



export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`/api/products`);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();

        // رندوم ۸ تا
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setProducts(shuffled.slice(0, 8));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 text-center bg-slate-900 w-full text-gray-400">
        در حال بارگذاری محصولات...
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="py-16 text-center text-gray-400">
        در حال حاضر محصولی برای نمایش وجود ندارد
      </section>
    );
  }

  return (
    <section className="relative w-full py-16 md:py-20 bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-8 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,158,11,0.06)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.04)_0%,transparent_55%)]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row-reverse justify-between items-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-white to-amber-300 mb-4 sm:mb-0">
            محصولات پر فروش مدرن گالری
          </h2>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-amber-900/40 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-amber-700/50 active:scale-95"
          >
            مشاهده همه محصولات
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative backdrop-blur-md bg-[#0f172a]/40 border border-amber-900/30 rounded-2xl overflow-hidden shadow-[0_6px_16px_-4px_rgba(0,0,0,0.5),0_2px_8px_-2px_rgba(245,158,11,0.15)] hover:shadow-[0_10px_25px_-5px_rgba(245,158,11,0.35),0_4px_12px_-4px_rgba(245,158,11,0.2)] transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={product.imgSrc[0] || "/images/placeholder-car.jpg"}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {product.hasGuarantee === "yes" && (
                  <span className="absolute top-3 right-3 bg-amber-600/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    دارای گارانتی
                  </span>
                )}
              </div>

              <div className="p-5 text-right">
                <h3 className="text-lg md:text-xl font-bold text-amber-100 mb-2 line-clamp-1">
                  {product.title}
                </h3>
                <div className="text-sm text-gray-300/90 space-y-1.5 mb-4">
                  <p>مدل: {product.model}</p>
                  <p>کارکرد: {product.mileage.toLocaleString()} کیلومتر</p>
                  <p>گیربکس: {product.gearbox}</p>
                  <p className="font-semibold text-amber-300 text-base mt-3">
                    {product.price.toLocaleString()} تومان
                  </p>
                </div>
                <Link
                  href={`/products/${product.id}`}
                  className="block text-center text-amber-400 hover:text-amber-300 font-medium transition-colors"
                >
                  مشاهده جزئیات →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}