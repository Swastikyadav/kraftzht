function Hero() {
  return (
    <section className="relative h-[128vh] md:h-screen">
      <div className="relative h-full bg-[url(https://moonlit-nextjs.netlify.app/assets/images/pages/header__bg.webp)] bg-cover bg-top bg-no-repeat">
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-40"></div>
      </div>

      <div className="px-8 md:px-28 py-24 md:py-0 absolute top-0 left-0 text-white w-full h-full flex justify-center items-center">
        <h2 className="text-5xl md:text-7xl w-full md:w-7/12 text-center">
          Contact Us
        </h2>
      </div>
    </section>
  );
}

export default Hero;
