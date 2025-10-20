import { cn } from "@/lib/utils";
import Image from "next/image";

function Overview() {
  return (
    <section className="relative px-8 md:px-28 xl:px-96 py-28 text-center bg-[#f1f1f1]">
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
        About Us
      </h6>
      <h2 className="my-8 text-4xl md:text-6xl">
        Welcome To KRAFTz Hotel & Travel Services
      </h2>
      <p className="text-gray-500 leading-[1.5] text-lg">
        At Kraftz we redefine hospitality through Revenue Management,
        distribution channel, Artificial InteIligence, Data & Analytics,
        Business intelligence and digital marketing to create intelligent growth
        systems for hotels. In today’s dynamic market where demand shifts
        rapidly and competition intensifies, we help hotels not just fill rooms
        but to maximize every opportunity. Kraftz empowers hotels with smart,
        data-driven strategies that drive occupancy, optimize pricing and
        distribution, and elevate guest experiences. By combining deep
        hospitality expertise, strategic revenue management, data-driven
        insights, and innovative technology, we help hotels and travel
        businesses achieve sustainable, measurable growth and long-term
        commercial success.
      </p>

      {/* Absolute images */}
      <Image
        src="https://moonlit-nextjs.netlify.app/assets/images/index-5/about/1.webp"
        width="595"
        height="825"
        alt="img-1"
        className="hidden xl:block absolute xl:top-140 2xl:top-100 left-0 clip-path-top-right"
      />
      <Image
        src="https://moonlit-nextjs.netlify.app/assets/images/index-5/about/2.webp"
        width="360"
        height="530"
        alt="img-1"
        className="absolute top-80 right-0 hidden xl:block"
      />
    </section>
  );
}

export default Overview;
