import ClientProductDetail from "@/components/ProductDetail";
import { notFound } from "next/navigation";

async function getAllProducts() {
 const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  try {
    const res = await fetch(
      `${apiUrl}/api/products`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) throw new Error("خطا در دریافت محصولات");

    const products = await res.json();

    return Array.isArray(products) ? products : [];
  } catch (error) {
    console.error("FETCH ERROR:", error);
    return [];
  }
}

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const id = Number(resolvedParams.id);
  const products = await getAllProducts();
  const product = products.find((p) => Number(p.id) === id);
  if (!product) {
    notFound();
  }
  const similarProducts = products.filter(
    (p) => p.category === product.category && Number(p.id) !== id,
  );

  return (
    <ClientProductDetail product={product} similarProducts={similarProducts} />
  );
}
