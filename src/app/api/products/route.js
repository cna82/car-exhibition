import { PRODUCTS } from "../../../lib/products";
// app/api/products/route.js
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(PRODUCTS);
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "خطا در دریافت محصولات" },
      { status: 500 },
    );
  }
}
