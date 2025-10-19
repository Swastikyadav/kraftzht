function Hero() {
  return (
    <section className="relative">
      <div className="relative h-screen bg-[url(https://moonlit-nextjs.netlify.app/assets/images/index-5/banner/banner-bg.webp)] object-cover bg-top">
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-40"></div>
      </div>

      <div className="px-12 md:px-28 py-24 md:py-0  absolute top-0 left-0 text-white w-full h-full flex flex-col md:flex-row justify-between items-center gap-12">
        <h2 className="text-5xl md:text-7xl w-full md:w-7/12">
          Krafting Growth Inteligently
        </h2>
        {/* Move the below contact form into a separate component */}
        <div className="h-[555px] w-full md:w-5/12 bg-white rounded-lg"></div>
      </div>
    </section>
  );
}

export default Hero;
