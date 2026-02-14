import AboutFinalSection from "@/components/AboutFinalSection";
import FeaturesSection from "@/components/FeatureSectionAbout";
export const metadata = {
  title: " درباره ما | مدرن گالری",
  description: " درباره ما سایت نمایشگاه ماشین ",
};
const AboutPage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 dark:bg-black font-sans ">
        <FeaturesSection />
        <AboutFinalSection/>
      </div>
    </>
  );
};

export default AboutPage;
