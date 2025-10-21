import { cn } from "@/lib/utils";
import {
  AirplayIcon,
  BrainCircuitIcon,
  CircleDollarSignIcon,
  ForkliftIcon,
  PlaneTakeoffIcon,
  SquareUserIcon,
} from "lucide-react";
import Link from "next/link";

function WhatWeDo() {
  return (
    <div>
      <section className="relative px-8 md:px-28 xl:px-96 py-28 pb-8 text-center bg-white mt-0 xl:mt-40">
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
          Services
        </h6>
        <h2 className="my-8 text-4xl md:text-6xl">What We Do?</h2>
        <p className="text-gray-500 leading-[1.5] text-lg">
          At Kraftz, we provides end-to-end hospitality and travel solutions,
          all designed to elevate performance and accelerate growth. We Kraft
          precision strategies that empower property onwer to maximize revenue
          and create exceptional experiences for travelers.
        </p>
      </section>

      <div className="px-8 md:px-28 pb-12 flex flex-wrap gap-y-12 gap-x-24 justify-center items-center flex-col md:flex-row">
        <article className="text-start w-full md:w-2/4 lg:w-1/4">
          <CircleDollarSignIcon size={48} className="text-brand" />
          <h4 className="my-6 text-xl">Revenue Management</h4>
          <p className="text-gray-500 leading-[1.5] text-lg">
            We create rate architecture, demand modeling, channel mix
            optimization that results stronger RevPAR, higher ADR, and
            sustainable profitability.
          </p>
        </article>
        <article className="text-start w-full md:w-2/4 lg:w-1/4">
          <ForkliftIcon size={48} className="text-brand" />
          <h4 className="my-6 text-xl">Distribution Management</h4>
          <p className="text-gray-500 leading-[1.5] text-lg">
            Maximize your hotels reach with seamless multi-platform
            distribution. KRAFTz connects your inventory across leading
            channels, ensuring real-time updates across all platforms.
          </p>
        </article>
        <article className="text-start w-full md:w-2/4 lg:w-1/4">
          <BrainCircuitIcon size={48} className="text-brand" />
          <h4 className="my-6 text-xl">
            Business Intelligence & Data Solutions
          </h4>
          <p className="text-gray-500 leading-[1.5] text-lg">
            We turn hotel data into a competitive advantage with power of data
            to uncover revenue opportunities, leverage right tech ecosystem -
            RMS, PMS, AI, automation, and analytics to enhance efficiency.
          </p>
        </article>
        <article className="text-start w-full md:w-2/4 lg:w-1/4">
          <AirplayIcon size={48} className="text-brand" />
          <h4 className="my-6 text-xl">Digital Marketing & Brand Experience</h4>
          <p className="text-gray-500 leading-[1.5] text-lg">
            Your digital presence should work as hard as your front line. We
            beland storytelling, design, and analytics to make your brand
            visible, desirable, and discoverable across search, social, and web.
          </p>
        </article>
        <article className="text-start w-full md:w-2/4 lg:w-1/4">
          <SquareUserIcon size={48} className="text-brand" />
          <h4 className="my-6 text-xl">Online Reputation & Guest Insights</h4>
          <p className="text-gray-500 leading-[1.5] text-lg">
            We help you manage guest sentiments and elevate your online
            credibility with precision turning feedback into loyalty and
            performance. Every review shapes your revenue.
          </p>
        </article>
        <article className="text-start w-full md:w-2/4 lg:w-1/4">
          <PlaneTakeoffIcon size={48} className="text-brand" />
          <h4 className="my-6 text-xl">Travel Experiences</h4>
          <p className="text-gray-500 leading-[1.5] text-lg">
            Travel, tailored to excellence. For all age travellers personal or
            business, we curate global stays, journeys, and partnerships that
            define modern luxury.
          </p>
        </article>
      </div>

      <section className="px-8 md:px-28 xl:px-96 pb-28 text-center bg-white mt-0">
        <p className="text-gray-500 leading-[1.5] text-lg">
          {
            "Every hotel has untapped potential. Let's unlock yours - with strategy, precision, and imagination."
          }
        </p>
        <Link href="/contacts">
          <button className="bg-brand text-white rounded cursor-pointer p-3 my-4">
            Connect With KRAFTz
          </button>
        </Link>
      </section>
    </div>
  );
}

export default WhatWeDo;
