"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import ClientProductDetail from "@/components/ProductDetail";

export default function ProductDetailPage() {
  const params = useParams();
  const id = Number(params?.id);
  const router = useRouter();

  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      router.push("/products");
      return;
    }

    const fetchProducts = async () => {
      try {
        const res = await fetch(`/api/products`);
        if (!res.ok) throw new Error("خطا در دریافت محصولات");

        const products = await res.json();
        const found = products.find((p) => Number(p.id) === id);

        if (!found) {
          router.push("/products");
          return;
        }

        setProduct(found);
        setSimilarProducts(
          products.filter(
            (p) => p.category === found.category && Number(p.id) !== id,
          ),
        );
      } catch (error) {
        console.error("Error fetching products:", error);
        router.push("/products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id, router]);

  if (loading)
    return (
      <div className="w-full bg-slate-900 py-50 text-center text-gray-400">
        در حال بارگذاری...
      </div>
    );
  if (!product)
    return (
      <div className="py-20 text-center text-gray-400">محصول پیدا نشد</div>
    );

  return (
    <ClientProductDetail product={product} similarProducts={similarProducts} />
  );
}
