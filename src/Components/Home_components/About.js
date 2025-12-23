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
          style={{ backgroundImage: `url(${heroImg})` }}
        />

        {/* TEXT BLOCK (unchanged) */}
        <div
          className="
            w-full md:w-full lg:w-3/5
            px-8 md:px-12 py-10 text-[#222]
            border-[6px] border-[#0530A8]
            md:order-2 lg:order-2

            /* Ensure horizontal text flow on tablet just in case */
            md:[writing-mode:horizontal-tb] md:whitespace-normal md:break-normal md:text-left
          "
        >
          <h2
            className="
          text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0530A8]
          mb-3 md:mb-4

          "
          >
            ABOUT HYSEA
          </h2>

          <p className="text-sm md:text-base leading-relaxed mb-4">
            Established in 1991, HYSEA (Hyderabad Software Enterprises
            Association) is the premier industry association for Telangana’s IT
            sector, representing over 90% of the export revenues and workforce
            across the region’s IT/ITeS companies, Global Capability Centers
            (GCCs), and startups.
          </p>

          <p className="text-sm md:text-base leading-relaxed mb-4">
            As a driving force behind Hyderabad’s rise as a global technology
            hub, HYSEA works closely with the government to advocate for
            industry needs, provide impact metrics for IT policy, promote
            investment, and strengthen the industry’s position on the world
            stage. The association serves as a vital bridge, connecting
            corporations, research institutions, and startups, and fostering a
            culture of innovation and collaboration across the ecosystem.
          </p>

          <p className="text-sm md:text-base leading-relaxed ">
            HYSEA’s initiatives are focused on building a future-ready talent
            pipeline and fostering strong industry leadership. The association
            runs regular leadership development programs for mid-level managers,
            conducts faculty development workshops to equip educators and
            students with emerging technologies, and curates a year-round
            calendar of roundtables with emerging technologies, and curates a
            year-round calendar of roundtables and thought leadership seminars
            on key industry topics.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
