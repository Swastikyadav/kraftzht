import HospitalityServices from "@/components/services/hero";
import ServiceOverview from "@/components/services/overview";
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";

function Hospitality() {
  return (
    <>
      <HospitalityServices title="Hospitality Services" />
      <ServiceOverview>
        <p className="text-gray-500 leading-[1.5] text-lg">
          <span className="font-semibold text-brand">
            Kraftz Hospitality Consulting
          </span>{" "}
          delivers comprehensive, end-to-end consulting services designed to
          help hotels, resorts, villas, serviced apartments and accomodation
          providers to unlock peak performance.
          <br />
          <br />
          Our expertise spans{" "}
          <span className="font-semibold text-brand">revenue optimization</span>
          , <span className="font-semibold text-brand">brand positioning</span>,{" "}
          <span className="font-semibold text-brand">
            technology integration
          </span>
          , and{" "}
          <span className="font-semibold text-brand">
            guest experience transformation
          </span>
          . We combine{" "}
          <span className="font-semibold text-brand">market intelligence</span>,{" "}
          <span className="font-semibold text-brand">data-driven insights</span>
          , and{" "}
          <span className="font-semibold text-brand">
            operational experience
          </span>{" "}
          to deliver measurable results that elevate occupancy, profitability,
          and brand reputation.
          <br />
          <br />
          Whether you are looking to{" "}
          <span className="font-semibold text-brand">
            increase direct bookings
          </span>
          ,{" "}
          <span className="font-semibold text-brand">
            implement data analytics systems
          </span>
          , or{" "}
          <span className="font-semibold text-brand">
            elevate your digital reputation
          </span>
          , Kraftz is your strategic partner for measurable hotel
          transformation.
        </p>
      </ServiceOverview>
      <ServiceOverview title="Revenue Management">
        <p className="text-gray-500 leading-[1.5] text-lg">
          At Kraftz Hospitality, we see Revenue Management as the commercial
          heartbeat of every hotel. With years of experience across leading
          hospitality brands, we deliver strategies that optimize pricing,
          performance, and profitability for long-term success. We start with a
          detailed audit of your hotel’s revenue ecosystem, analyzing pricing
          structures, demand patterns, and market positioning to identify
          revenue opportunities and enhance competitive advantage.
          <br />
          <br />
          Our team develops dynamic, data-driven pricing strategies tailored to
          seasonal trends, day-of-week variations, and special events, while
          optimizing rate hierarchies, rate fences, and market segmentation to
          maximize yield. Using advanced forecasting and scenario modeling, we
          anticipate demand shifts and guide proactive decisions on rates,
          inventory, and promotions.
          <br />
          <br />
          Custom revenue dashboards and benchmarking against competitors provide
          actionable insights to stay ahead of the market curve. To elevate
          operational efficiency, we implement and optimize Revenue Management
          Systems (RMS), integrating AI-based forecasting, dynamic pricing
          automation, and competitor rate intelligence.
          <br />
          <br />
          We help hotels select and fine-tune RMS tools to align with brand
          standards, scale, and commercial objectives, ensuring technology
          enhances human expertise and delivers measurable ROI.
        </p>
      </ServiceOverview>
      <ServiceOverview title="Distribution Channel Management">
        <p className="text-gray-500 leading-[1.5] text-lg">
          At Kraftz Hospitality, we help hotels maximize reach, visibility, and
          revenue by strategically managing distribution across OTAs, GDS
          platforms, and direct booking channels.
          <br />
          <br />
          We evaluate your current channel mix, performance metrics, and market
          opportunities to design a tailored distribution strategy that balances
          demand, cost, and yield.
          <br />
          <br />
          Through continuous monitoring of channel performance, rate parity, and
          booking trends, we ensure your property captures the right guests at
          the right rates.
          <br />
          <br />
          By leveraging data-driven insights and best practices, Kraftz enables
          hotels to maintain optimized channel allocation, consistent pricing,
          and improved profitability — strengthening market presence and driving
          sustainable growth.
        </p>
        <br />
        <p className="text-gray-500 leading-[1.5] text-lg">
          At Kraftz, our{" "}
          <span className="font-semibold text-brand">
            Revenue Management experts
          </span>{" "}
          unlock new income streams and boost profitability through{" "}
          <span className="font-semibold text-brand">
            strategic rate planning
          </span>
          ,{" "}
          <span className="font-semibold text-brand">
            dynamic pricing models
          </span>
          , and{" "}
          <span className="font-semibold text-brand">
            optimized channel distribution
          </span>
          .
          <br />
          <br />
          We assess your property’s market position, segment demand patterns,
          and develop tailor-made revenue systems that ensure maximum yield
          across OTAs, GDS, and direct channels. Our expert teams blend
          real-time analytics, competitor benchmarking, and inventory
          forecasting to achieve sustainable ADR growth and RevPAR improvement.
          <br />
          <br />
          <span className="font-semibold text-brand">Key Deliverables</span>:
          Dynamic pricing algorithms customized for seasonalityRate parity and
          channel mix optimizationYield strategies backed by live market data
          Revenue reporting dashboards with BI integration
        </p>
      </ServiceOverview>
      <ServiceOverview>
        <div className="flex flex-wrap justify-between gap-4">
          <p className="flex items-center gap-2 w-full md:w-1/3">
            <CheckCircleIcon className="text-brand" /> Revenue Management System
            (RMS)
          </p>
          <p className="flex items-center gap-2 w-full md:w-1/3">
            <CheckCircleIcon className="text-brand" /> Business Intelligence
          </p>
          <p className="flex items-center gap-2 w-full md:w-1/3">
            <CheckCircleIcon className="text-brand" /> Data & Analytics
          </p>
          <p className="flex items-center gap-2 w-full md:w-1/3">
            {" "}
            <CheckCircleIcon className="text-brand" /> OTA Management
          </p>
          <p className="flex items-center gap-2 w-full md:w-1/3">
            <CheckCircleIcon className="text-brand" /> Reputation Management /
            ORM
          </p>
          <p className="flex items-center gap-2 w-full md:w-1/3">
            <CheckCircleIcon className="text-brand" /> Content Management
          </p>
        </div>
      </ServiceOverview>
      <ServiceOverview title="Revenue Management System (RMS)">
        <p className="text-gray-500 leading-[1.5] text-lg">
          Kraftz offers{" "}
          <span className="font-semibold text-brand">
            Revenue Management System (RMS)
          </span>{" "}
          implementation and optimization for hotels seeking automation and
          intelligence in pricing.
          <br />
          <br />
          Our RMS framework integrates{" "}
          <span className="font-semibold text-brand">
            AI-based forecasting, occupancy trend analysis, and competitor rate
            mapping
          </span>
          , enabling real-time decisions that maximize yield. We help hotels
          select, customize, and deploy RMS tools that align with their market
          segment — from luxury resorts to mid-scale chains — ensuring
          transparency, scalability, and measurable ROI.
          <br />
          <br />
          <span className="font-semibold text-brand">Core Features</span>:
          AI-driven rate optimizationChannel performance analyticsAutomated
          forecasting & demand segmentationSeamless PMS / CRS integration.
        </p>
      </ServiceOverview>
      <ServiceOverview title="Business Intelligence">
        <p className="text-gray-500 leading-[1.5] text-lg">
          In the age of data,{" "}
          <span className="font-semibold text-brand">
            Business Intelligence (BI)
          </span>{" "}
          drives hospitality success. Kraftz enables hoteliers to leverage data
          through custom BI dashboards that consolidate performance metrics
          across bookings, occupancy, revenue, and guest behavior.
          <br />
          <br />
          Our BI framework transforms raw hotel data into actionable insights —
          empowering strategic decisions, identifying revenue leaks, and
          uncovering cross-selling opportunities. <br />
          <br />
          <span className="font-semibold text-brand">What We Offer</span>:
          Interactive hotel performance dashboardsReal-time revenue & occupancy
          trackingForecasting with market trend overlaysCustomized KPI alerts
          for management teams
        </p>
      </ServiceOverview>
      <ServiceOverview title="Data & Analytics">
        <p className="text-gray-500 leading-[1.5] text-lg">
          Data is the foundation of modern hotel performance. At Kraftz, we help
          hotels harness{" "}
          <span className="font-semibold text-brand">
            big data, AI insights, and predictive analytics
          </span>{" "}
          to enhance guest experiences, forecast demand, and improve operational
          efficiency.
          <br />
          <br />
          Our consultants specialize in data mapping, segmentation, and
          reporting automation — ensuring that decision-makers have the right
          insights at the right time.
          <br />
          <br />
          <span className="font-semibold text-brand">Highlights</span>:
          Predictive demand forecastingGuest segmentation and loyalty
          analyticsData visualization dashboardsAI-driven reporting and
          automation
        </p>
      </ServiceOverview>
      <ServiceOverview title="OTA Management">
        <p className="text-gray-500 leading-[1.5] text-lg">
          Kraftz optimizes{" "}
          <span className="font-semibold text-brand">
            Online Travel Agency (OTA) performance
          </span>{" "}
          through smart distribution and visibility strategies. We manage OTA
          listings, rate parity, and content accuracy to maximize conversions.
          <br />
          <br />
          By aligning your OTA strategy with revenue and branding goals, we
          ensure your property maintains{" "}
          <span className="font-semibold text-brand">
            top visibility, consistent pricing, and high conversion ratios
          </span>
          .
          <br />
          <br />
          <span className="font-semibold text-brand">Services Include</span>:
          OTA channel setup & auditRate and content parity managementPerformance
          tracking & market insightsCommission optimization & yield strategy
        </p>
      </ServiceOverview>
      <ServiceOverview title="Reputation Management / ORM">
        <p className="text-gray-500 leading-[1.5] text-lg">
          Reputation defines your brand’s success. Kraftz helps hotels{" "}
          <span className="font-semibold text-brand">
            monitor, manage, and elevate their online presence
          </span>{" "}
          across platforms — from Google and TripAdvisor to OTA review channels.
          <br />
          <br />
          We deploy{" "}
          <span className="font-semibold text-brand">
            sentiment analysis, automated response systems
          </span>
          , and{" "}
          <span className="font-semibold text-brand">
            review tracking tools
          </span>{" "}
          that ensure brand perception aligns with guest experience.
          <br />
          <br />
          Our Approach: Comprehensive review monitoringResponse management and
          escalationSentiment trend reportingGuest feedback integration into CRM
        </p>
      </ServiceOverview>
      <ServiceOverview title="Content Management">
        <p className="text-gray-500 leading-[1.5] text-lg">
          Great content sells experiences before the booking happens. Kraftz
          offers{" "}
          <span className="font-semibold text-brand">
            end-to-end content management
          </span>{" "}
          for hotels, resorts, villas, serviced apartments and accomodation
          providers — including{" "}
          <span className="font-semibold text-brand">
            copywriting, photography, room descriptions, and OTA content
            curation
          </span>
          .
          <br />
          <br />
          We ensure every property’s digital presence is{" "}
          <span className="font-semibold text-brand">
            accurate, appealing, and conversion-oriented
          </span>
          , aligned with brand tone and SEO best practices.
          <br />
          <br />
          <span className="font-semibold text-brand">Services Include</span>:
          Website & OTA content audit Property listing descriptions & keyword
          optimizationVisual asset curation (photos/videos)Localization for
          regional markets
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

export default Hospitality;
