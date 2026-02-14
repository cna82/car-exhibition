import HeroSection from "@/components/HeroHome";
import FeaturesSection from "@/components/Features";
import Faq from "@/components/Faq";
import FeaturedProducts from "@/components/TrendingProducts";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 dark:bg-black font-sans ">
      <HeroSection />
      <FeaturedProducts />
      <FeaturesSection />
      <Faq />
    </div>
  );
}
