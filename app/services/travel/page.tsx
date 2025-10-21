import HospitalityServices from "@/components/services/hospitalityHero";
import ServiceOverview from "@/components/services/overview";

function DigitalMarketing() {
  return (
    <>
      <HospitalityServices title="Digital Marketing Solutions" />

      <ServiceOverview>
        <p className="text-gray-500 leading-[1.5] text-lg">
          Kraftz Travel Experiences curates journeys that transcend the
          ordinary. We cater to all age cohort discerning travelers — seeking
          authentic, sophisticated, and seamless travel experiences for
          personal, family, and business needs. Every itinerary is crafted with
          precision, privacy, and perfection.
        </p>
      </ServiceOverview>

      <ServiceOverview title="Philosophy">
        <p className="text-gray-500 leading-[1.5] text-lg">
          We believe travel should evoke emotion, create connection, and leave
          an imprint. Kraftz doesn’t sell packages — we design experiences. Each
          journey reflects the traveler’s individuality and aspirations, merging
          culture, comfort, and creativity into unforgettable moments.
        </p>
      </ServiceOverview>
      <ServiceOverview title="Personal & Family Travel">
        <p className="text-gray-500 leading-[1.5] text-lg">
          From hidden retreats to desert escapes, Kraftz designs meaningful
          journeys for individuals and families. We handle every detail — from
          private villas and personalized itineraries to Michelin-star dining
          and immersive cultural touchpoints — ensuring every journey feels like
          a once-in-a-lifetime story.
        </p>
      </ServiceOverview>
      <ServiceOverview title="Corporate & Business Travel">
        <p className="text-gray-500 leading-[1.5] text-lg">
          For enterprises and executives, Kraftz curates travel experiences that
          balance efficiency with elegance. We offer executive retreats,
          leadership off-sites, and corporate travel management designed for
          productivity, comfort, and prestige.
        </p>
      </ServiceOverview>
      <ServiceOverview title="Ultra-Luxury & Lifestyle Experiences">
        <p className="text-gray-500 leading-[1.5] text-lg">
          We open doors to the extraordinary — private jets, yacht charters,
          island buyouts, and world-class hospitality experiences. Kraftz
          partners with global luxury brands to provide bespoke lifestyle
          experiences that redefine exclusivity for HNIs and UHNWIs.
        </p>
      </ServiceOverview>

      <ServiceOverview title="Cultural & Experiential Journey">
        <p className="text-gray-500 leading-[1.5] text-lg">
          Travel is transformation. Our cultural journeys connect travelers with
          local traditions, gastronomy, art, and heritage. Whether it’s a tea
          ceremony in Kyoto, desert safari in Abu Dhabi, or vineyard retreat in
          Tuscany, Kraftz turns every destination into a living story.
        </p>
        <br />
        <br />
        <br />
        <br />
      </ServiceOverview>

      <hr />

      <ServiceOverview>
        <p className="text-gray-500 leading-[1.5] text-lg">
          We don’t just plan travel — we orchestrate experiences that define
          lifestyles. For those who expect the extraordinary, Kraftz is not just
          a service provider; we’re your silent partner in crafting journeys
          that speak the language of luxury.
        </p>

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
