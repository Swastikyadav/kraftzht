import HospitalityServices from "@/components/services/hero";
import ServiceOverview from "@/components/services/overview";
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";

function DigitalMarketing() {
  return (
    <>
      <HospitalityServices title="Digital Marketing Solutions" />
      <ServiceOverview>
        <p className="text-gray-500 leading-[1.5] text-lg">
          Kraftz{" "}
          <span className="font-semibold text-brand">Digital Marketing</span>{" "}
          Solutions transforms how brands are seen, searched, and remembered. We
          blend strategy, storytelling, and smart technology to help mid-size,
          large, and new-age businesses dominate the digital landscape. Every
          campaign we create aligns with the client’s vision, mission, and OKRs
          — ensuring marketing delivers measurable business impact, not just
          impressions.
        </p>
      </ServiceOverview>

      <ServiceOverview>
        <div className="flex flex-wrap justify-between gap-4">
          <p className="flex items-center gap-2 w-full md:w-1/3">
            <CheckCircleIcon className="text-brand" /> Digital Strategy &
            Consulting
          </p>
          <p className="flex items-center gap-2 w-full md:w-1/3">
            <CheckCircleIcon className="text-brand" /> Search Engine
            Optimization (SEO)
          </p>
          <p className="flex items-center gap-2 w-full md:w-1/3">
            <CheckCircleIcon className="text-brand" /> Performance Marketing
          </p>
          <p className="flex items-center gap-2 w-full md:w-1/3">
            {" "}
            <CheckCircleIcon className="text-brand" /> Social Media Strategy &
            Management
          </p>
          <p className="flex items-center gap-2 w-full md:w-1/3">
            <CheckCircleIcon className="text-brand" /> Content Strategy &
            Creation
          </p>
          <p className="flex items-center gap-2 w-full md:w-1/3">
            <CheckCircleIcon className="text-brand" /> Website & Experience
            Design
          </p>
          <p className="flex items-center gap-2 w-full md:w-1/3">
            <CheckCircleIcon className="text-brand" /> AI Marketing &
            Performance Insights
          </p>
          <p className="flex items-center gap-2 w-full md:w-1/3">
            <CheckCircleIcon className="text-brand" /> Brand Reputation &
            Communication
          </p>
          <p className="flex items-center gap-2 w-full md:w-1/3">
            <CheckCircleIcon className="text-brand" /> Influencer Marketing
          </p>
        </div>
      </ServiceOverview>

      <ServiceOverview title="Digital Strategy & Consulting">
        <p className="text-gray-500 leading-[1.5] text-lg">
          Kraftz We start by decoding your business DNA — understanding your
          market, goals, and audience. Kraftz builds tailored{" "}
          <span className="font-semibold text-brand">digital strategies</span>
          that connect every dot between brand, content, and conversion. From
          marketing roadmaps to{" "}
          <span className="font-semibold text-brand">
            digital transformation blueprints
          </span>
          , our consulting ensures every rupee and dirham invested drives
          tangible ROI.
        </p>
      </ServiceOverview>
      <ServiceOverview title="Search Engine Optimization (SEO)">
        <p className="text-gray-500 leading-[1.5] text-lg">
          Visibility begins with discoverability. Kraftz develops{" "}
          <span className="font-semibold text-brand">SEO</span> ecosystems that
          go beyond keywords — we focus on intent, authority, and experience.
          Our team ensures your brand ranks high across Google, Bing, and
          <span className="font-semibold text-brand">
            AI-driven platforms like ChatGPT and Copilot
          </span>{" "}
          by optimizing{" "}
          <span className="font-semibold text-brand">
            on-page, off-page, and technical SEO
          </span>{" "}
          with precision.
        </p>
      </ServiceOverview>
      <ServiceOverview title="Performance Marketing (PPC & Media Buying)">
        <p className="text-gray-500 leading-[1.5] text-lg">
          We deliver measurable growth through targeted paid campaigns across
          <span className="font-semibold text-brand">
            Google Ads, Meta, LinkedIn, and programmatic platforms
          </span>
          . Kraftz’s
          <span className="font-semibold text-brand">
            performance marketing
          </span>{" "}
          team designs campaigns rooted in audience insights, creative
          excellence, and continuous optimization — ensuring maximum visibility
          and ROI.
        </p>
      </ServiceOverview>
      <ServiceOverview title="Social Media Strategy & Management">
        <p className="text-gray-500 leading-[1.5] text-lg">
          We turn brands into communities. Kraftz creates and manages
          high-impact social media ecosystems that drive engagement, advocacy,
          and loyalty. Our approach blends trend intelligence with brand
          <span className="font-semibold text-brand">storytelling</span>,
          ensuring every post adds measurable value.
        </p>
      </ServiceOverview>
      <ServiceOverview title="Content Strategy & Creation">
        <p className="text-gray-500 leading-[1.5] text-lg">
          Great brands tell better stories. Kraftz creates compelling digital
          content — from brand films, blogs, and influencer collaborations to
          thought leadership and interactive campaigns. Each piece is optimized
          for storytelling, search, and shareability.
        </p>
      </ServiceOverview>
      <ServiceOverview title="Website & Experience Design">
        <p className="text-gray-500 leading-[1.5] text-lg">
          Your website is your digital first impression — we make it
          unforgettable.{" "}
          <span className="font-semibold text-brand">
            Kraftz designs and develops sleek, fast, and conversion-optimized
            websites
          </span>{" "}
          that balance creativity with clarity. Every design reflects your brand
          ethos while driving measurable action.
        </p>
      </ServiceOverview>
      <ServiceOverview title="AI Marketing & Automation">
        <p className="text-gray-500 leading-[1.5] text-lg">
          Kraftz leverages AI to deliver marketing that thinks ahead. From
          <span className="font-semibold text-brand">
            predictive analytics
          </span>{" "}
          and chatbots to personalized campaigns and automation flows, we
          integrate intelligent systems that amplify performance and efficiency.
        </p>
      </ServiceOverview>
      <ServiceOverview title="Analytics & Performance Insights">
        <p className="text-gray-500 leading-[1.5] text-lg">
          We measure what matters. Kraftz deploys advanced analytics frameworks
          to track campaign performance, user behavior, and conversion patterns.
          Every insight fuels smarter decisions and stronger outcomes.
        </p>
      </ServiceOverview>
      <ServiceOverview title="Brand Reputation & Communication">
        <p className="text-gray-500 leading-[1.5] text-lg">
          Beyond metrics, Kraftz builds perception. Our{" "}
          <span className="font-semibold text-brand">
            communication strategies
          </span>
          align brand voice with customer emotion, ensuring consistency across
          touchpoints — from social posts to{" "}
          <span className="font-semibold text-brand">
            PR releases and leadership positioning
          </span>
          .
        </p>
      </ServiceOverview>
      <ServiceOverview title="Influencer Marketing">
        <p className="text-gray-500 leading-[1.5] text-lg">
          At Kraftz Hospitality, we help brands to expand their reach and
          engagement through{" "}
          <span className="font-semibold text-brand">
            strategic influencer partnerships
          </span>
          . From our extensive network of influencers we select the right
          influencers, creating compelling content, and tracking performance, we
          drive brand awareness, trust, and conversions — ensuring measurable
          results and meaningful audience connections
        </p>
        <br />
        <br />
        <br />
        <br />
      </ServiceOverview>

      <hr />

      <ServiceOverview>
        <p className="text-gray-500 leading-[1.5] text-lg">
          Digital transformation is no longer optional — it’s essential. Kraftz
          empowers brands to not only adapt but to lead in the age of AI and
          experience-driven marketing. Whether you’re a startup or a global
          enterprise, we’ll craft your digital story with precision and purpose.
        </p>

        <Link href="/contacts">
          <button className="bg-brand text-white rounded cursor-pointer p-3 my-4">
            Connect With KRAFTz
          </button>
        </Link>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </ServiceOverview>
    </>
  );
}

export default DigitalMarketing;
