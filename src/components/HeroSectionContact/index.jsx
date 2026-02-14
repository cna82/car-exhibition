//imports
import ClientMotionBox from "../ClientMotionBox";
//heroSection comp for contact-us
const HeroSectionContact = ({ container }) => {
  return (
    <section className="relative py-25 px-6 md:px-16 overflow-hidden  text-gray-800">
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-size-[20px_20px] opacity-10 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto z-10 text-center">
        <h1 className=" text-5xl md:text-7xl font-extrabold text-amber-400 mb-6 drop-shadow-sm">
          تماس با ما
        </h1>
        <p className="text-base md:text-lg text-lime-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          جهت دریافت مشاوره یا خرید محصولات، از طریق اطلاعات زیر با ما در ارتباط
          باشید.
        </p>
        <ClientMotionBox container={container} />
      </div>
    </section>
  );
};

export default HeroSectionContact;
