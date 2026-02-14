import HeroSectionContact from "@/components/HeroSectionContact";
import container from "@/lib/heroSectionContact";
export const metadata = {
  title: " تماس با ما | مدرن گالری",
  description: " تماس با ما سایت نمایشگاه ماشین ",
};
const ContactUsPage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-center bg-slate-900 font-sans ">
       <HeroSectionContact container={container}/>
      </div>
    </>
  );
};

export default ContactUsPage;
