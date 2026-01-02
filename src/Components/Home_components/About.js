import React from "react";
import heroImg from "../../assets/about_img.webp";

const About = () => {
  return (
    <div className="w-full mx-auto max-w-9xl bg-white overflow-hidden">
      <div className="flex flex-col md:flex-col lg:flex-row items-stretch">
        {/* IMAGE BLOCK — taller on mobile/tablet, unchanged on desktop */}
        <div
          className="
            w-full md:w-full lg:w-[40%]
            bg-no-repeat bg-cover bg-center
            md:order-1 lg:order-1

            /* Increased height for mobile & tablet to ensure visibility */
            h-[360px] sm:h-[520px] md:h-[680px] lg:h-auto
          "
          style={{
            backgroundImage: `url(${heroImg})`,
            boxShadow: "-10px 4px 34px 20px rgba(0, 0, 0, 0.30) inset",
          }}
        />

        {/* TEXT BLOCK (unchanged) */}
        <div
          className="
            w-full md:w-full lg:w-3/5
            px-8 md:px-12 py-16 lg:py-20 text-[#222]
            border-[6px] border-[#0530A8]
            md:order-2 lg:order-2

            /* Ensure horizontal text flow on tablet just in case */
            md:[writing-mode:horizontal-tb] md:whitespace-normal md:break-normal md:text-left
          "
        >
          <h2
            className="
          text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0530A8]
          mb-3 md:mb-5

          "
          >
            ABOUT HYSEA
          </h2>

          <p className="text-sm md:text-base leading-relaxed mb-4">
            Founded in 1991, HYSEA (Hyderabad Software Enterprises Association) is the apex industry body representing Telangana's technology ecosystem. It accounts for over 90% of the region's IT export revenues and employees, spanning global enterprises, Global Capability Centers (GCCs), and a fast-growing startup community.
          </p>

          <p className="text-sm md:text-base leading-relaxed mb-4">
            HYSEA has been instrumental in shaping Hyderabad's evolution into a global technology hub, working closely with government, industry, and academia to strengthen the region's global competitiveness.
          </p>

          <p className="text-sm md:text-base leading-relaxed font-medium mb-2">
            Key Highlights
          </p>

          <ul className="list-disc pl-6 text-sm md:text-base leading-relaxed space-y-1">
            <li>
              Represents the majority of Telangana's IT industry, including enterprises, GCCs, and startups
            </li>
            <li>
              Plays a strategic role in industry advocacy and IT policy inputs through data-driven insights
            </li>
            <li>
              Acts as a bridge across the ecosystem, connecting industry leaders, startups, research institutions, and academia
            </li>
            <li>
              Drives leadership development through structured programs for mid-level and emerging leaders
            </li>
            <li>
              Builds future-ready talent via faculty development and emerging technology enablement
            </li>
            <li>
              Curates a year-round calendar of roundtables and thought leadership forums on critical and emerging technology themes
            </li>
          </ul>


          <p className="text-sm md:text-base leading-relaxed mt-3">
            Through these initiatives, HYSEA continues to foster innovation, leadership, and sustainable growth, reinforcing Telangana's position on the global technology map.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;