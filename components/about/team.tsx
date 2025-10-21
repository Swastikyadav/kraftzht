import { cn } from "@/lib/utils";

function Team() {
  return (
    <section className="relative px-8 md:px-28 xl:px-96 py-28 text-center bg-white">
      <h6
        className={cn(
          // before content
          "before:content-[url(https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-1.svg)]",
          // after content
          "after:content-[url(https://moonlit-nextjs.netlify.app/assets/images/shape/section__style__three-2.svg)]",
          // general
          "text-brand text-xl"
        )}
      >
        Who We Are?
      </h6>
      <h2 className="my-8 text-4xl md:text-6xl">Our Team</h2>
      <p className="text-gray-500 leading-[1.5] text-lg">
        The Kraftz Hospitality leadership and team brings together decades of
        experience across the hospitality and travel industry, each bringing a
        wealth of hands-on experience in revenue growth, OTA partnerships,
        distribution, digital marketing, business intelligence and commercial
        strategy.
        <br />
        <br />
        We’ve successfully led initiatives that built large hotel portfolios,
        improved market share, and transformed revenue performance across
        multiple geographies.
        <br />
        <br />
        What unites us is a shared philosophy that true success comes from a
        balance of strategic thinking, operational excellence, and human
        connection.
      </p>
    </section>
  );
}

export default Team;
