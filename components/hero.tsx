import ContactForm from "./contactform";

function Hero() {
  return (
    <section className="relative h-[128vh] md:h-screen">
      <div className="relative h-full bg-[url(https://moonlit-nextjs.netlify.app/assets/images/index-5/banner/banner-bg.webp)] object-cover bg-top bg-no-repeat">
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-40"></div>
      </div>

      <div className="px-12 md:px-28 py-24 md:py-0 absolute top-0 left-0 text-white w-full h-full flex flex-col md:flex-row justify-between items-center gap-12">
        <h2 className="text-5xl md:text-7xl w-full md:w-7/12">
          Krafting Growth Inteligently
        </h2>

        <ContactForm />
      </div>
    </section>
  );
}

export default Hero;
