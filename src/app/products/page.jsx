"use client";
import { useEffect, useMemo, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [gearbox, setGearbox] = useState("all");
  const [color, setColor] = useState("all");
  const [guarantee, setGuarantee] = useState("all");
  const [sort, setSort] = useState("price-desc"); // تغییر: پیش‌فرض → گران‌ترین
  const [page, setPage] = useState(1);
  const perPage = 12;
  useEffect(() => {
    fetch("/api/products")
      .then((r) => r.json())
      .then((data) => {
        const safe = Array.isArray(data) ? data : [];
        setProducts(safe);
      })
      .catch(() => setProducts([]));
  }, []);

  useEffect(() => {
    setPage(1);
  }, [search, category, gearbox, color, guarantee, sort]);

  const resetFilters = () => {
    setSearch("");
    setCategory("all");
    setGearbox("all");
    setColor("all");
    setGuarantee("all");
    setSort("price-desc"); // تغییر: بعد از ریست هم گران‌ترین بمونه
    setPage(1);
  };

  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category ?? "").filter(Boolean))],
    [products],
  );
  const gearboxes = useMemo(
    () => [...new Set(products.map((p) => p.gearbox ?? "").filter(Boolean))],
    [products],
  );
  const colors = useMemo(
    () => [...new Set(products.map((p) => p.color ?? "").filter(Boolean))],
    [products],
  );

  const filtered = useMemo(() => {
    let list = [...products];

    if (search.trim()) {
      const s = search.toLowerCase().trim();
      list = list.filter(
        (p) =>
          (p.title || "").toLowerCase().includes(s) ||
          (p.description || "").toLowerCase().includes(s),
      );
    }

    if (category !== "all") list = list.filter((p) => p.category === category);
    if (gearbox !== "all") list = list.filter((p) => p.gearbox === gearbox);
    if (color !== "all") list = list.filter((p) => p.color === color);
    if (guarantee !== "all")
      list = list.filter((p) => (p.hasGuarantee ? "yes" : "no") === guarantee);

    // مرتب‌سازی
    if (sort === "price-asc")
      list.sort((a, b) => (a.price || 0) - (b.price || 0));
    if (sort === "price-desc")
      list.sort((a, b) => (b.price || 0) - (a.price || 0));
    if (sort === "model-desc")
      list.sort((a, b) => Number(b.model || 0) - Number(a.model || 0));

    return list;
  }, [products, search, category, gearbox, color, guarantee, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage,
  );

  const CustomSelect = ({ value, onChange, options, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target)
        ) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen]);

    const selectedOption = options.find((opt) => opt.value === value);
    const displayText = selectedOption ? selectedOption.label : placeholder;

    return (
      <div className="relative w-full" ref={containerRef}>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`
            w-full flex items-center justify-between px-4 py-3.5 sm:py-4
            text-base rounded-xl bg-[#0b1220] border border-white/20 text-gray-100
            focus:outline-none focus:ring-2 focus:ring-orange-500/50
            transition-all duration-200
          `}
        >
          <span className={value === "all" ? "text-gray-400" : ""}>
            {displayText}
          </span>
          <ChevronDown
            className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div
            className={`
              absolute z-999 right-0 mt-1.5 w-full
              bg-[#0b1220] border border-white/20 rounded-xl
              shadow-2xl max-h-80 overflow-y-auto
              divide-y divide-white/10 pointer-events-auto
            `}
          >
            {options.map((option) => (
              <div
                key={option.value}
                className={`
                  px-4 py-3.5 cursor-pointer text-right text-gray-100
                  hover:bg-white/10 active:bg-white/20 transition-colors duration-150
                  ${value === option.value ? "bg-orange-600/30 font-medium" : ""}
                `}
                onClick={() => {
                  onChange({ target: { value: option.value } });
                  setIsOpen(false);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // گزینه‌ها
  const categoryOptions = [
    { value: "all", label: "همه دسته‌ها" },
    ...categories.map((cat) => ({ value: cat, label: cat })),
  ];

  const gearboxOptions = [
    { value: "all", label: "همه گیربکس‌ها" },
    ...gearboxes.map((gb) => ({ value: gb, label: gb })),
  ];

  const colorOptions = [
    { value: "all", label: "همه رنگ‌ها" },
    ...colors.map((c) => ({ value: c, label: c })),
  ];

  const guaranteeOptions = [
    { value: "all", label: "وضعیت گارانتی" },
    { value: "yes", label: "دارد" },
    { value: "no", label: "ندارد" },
  ];

  const sortOptions = [
    { value: "price-desc", label: "گران‌ترین" }, // اول قرار دادیم
    { value: "price-asc", label: "ارزان‌ترین" },
    { value: "model-desc", label: "جدیدترین مدل" },
  ];

  return (
    <section
      dir="rtl"
      className="min-h-screen bg-linear-to-b from-[#020617] via-[#020617] to-[#0f172a] text-white px-4 py-6 md:px-10 md:py-12"
    >
      <h1 className="text-3xl sm:text-4xl  font-black text-center mb-8 md:mb-12 text-gray-300">
        محصولات مدرن گالری
      </h1>

      <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 md:p-7 shadow-2xl relative z-10 overflow-visible">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-5">
          <div className="relative lg:col-span-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="نام خودرو یا توضیحات..."
              className="w-full px-4 py-4 text-base rounded-xl bg-[#0b1220] border border-white/15 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 hover:text-white"
                aria-label="پاک کردن"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          <CustomSelect
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            options={categoryOptions}
            placeholder="همه دسته‌ها"
          />

          <CustomSelect
            value={gearbox}
            onChange={(e) => setGearbox(e.target.value)}
            options={gearboxOptions}
            placeholder="همه گیربکس‌ها"
          />

          <CustomSelect
            value={color}
            onChange={(e) => setColor(e.target.value)}
            options={colorOptions}
            placeholder="همه رنگ‌ها"
          />

          <CustomSelect
            value={guarantee}
            onChange={(e) => setGuarantee(e.target.value)}
            options={guaranteeOptions}
            placeholder="وضعیت گارانتی"
          />

          <CustomSelect
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            options={sortOptions}
            placeholder="مرتب‌سازی"
          />

          <div className="col-span-1 sm:col-span-2 lg:col-span-6 flex justify-center mt-2 md:mt-0">
            <button
              onClick={resetFilters}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-red-600/30 hover:bg-red-600/50 active:bg-red-700/60 transition-colors font-medium text-base"
            >
              حذف همه فیلترها
            </button>
          </div>
        </div>
      </div>

      {paginated.length === 0 ? (
        <div className="text-center py-20 text-gray-400 text-lg md:text-xl">
          هیچ محصولی با فیلترهای انتخاب شده یافت نشد
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {paginated.map((p) => (
            <Link
              key={p.id ?? p.slug}
              href={`/products/${p.slug || p.id}`}
              className="group rounded-2xl overflow-hidden bg-[#0a0f1c] border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl relative"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={p.imgSrc?.[0] || "/images/placeholder-car.jpg"}
                  alt={p.title || "تصویر خودرو"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* اضافه کردن بج گارانتی */}
                {p.hasGuarantee === true ||
                p.hasGuarantee === "yes" ||
                p.hasGuarantee === "دارد" ? (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-bold bg-linear-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-900/40 border border-green-400/30">
                      دارای گارانتی
                      {/* می‌تونی آیکون هم بذاری اگر خواستی */}
                    </span>
                  </div>
                ) : null}
              </div>

              <div className="p-4 text-right">
                <h3 className="font-bold text-base sm:text-lg line-clamp-1 mb-1">
                  {p.title}
                </h3>
                <p className="text-orange-400 text-lg sm:text-xl font-medium">
                  {Number(p.price || 0).toLocaleString("fa-IR")} تومان
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div
          dir="ltr"
          className="flex justify-center items-center flex-wrap gap-2 mt-10 sm:mt-12"
        >
          <button
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed transition min-w-15"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`px-4 py-2.5 rounded-xl min-w-11 transition ${
                currentPage === num
                  ? "bg-orange-600 text-white font-semibold"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {num}
            </button>
          ))}

          <button
            onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed transition min-w-15"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
