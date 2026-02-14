"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { title: "خانه", href: "/" },
    { title: "محصولات", href: "/products" },
    { title: "درباره ما", href: "/about" },
    { title: "تماس با ما", href: "/contact" },
  ];

  return (
    <header className="w-full bg-gray-800 border-b border-gray-500 sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-900 font-bold">
            <Image
              src="/images/favicon/icon.png"
              alt="نمایشگاه لوکس خودرو"
              width={200}
              height={200}
              className="rounded-full object-cover brightness-[0.48] contrast-[1.08] saturate-[0.9] scale-105 transition-transform duration-[28s]"
              priority
            />
          </div>
          <span className="text-white text-lg font-bold tracking-wide">
            مدرن گالری
          </span>
        </Link>
        <nav className="hidden md:flex md:flex-row-reverse items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-sm font-medium transition-colors hover:text-red-500"
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
            <Menu className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 z-50 bg-gray-900 transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X className="h-6 w-6 text-white" />
          </Button>
        </div>
        <nav className="flex flex-col gap-6 p-6 text-right">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-lg font-semibold hover:text-red-500"
              onClick={() => setOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
      {open && (
        <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
      )}
    </header>
  );
}
