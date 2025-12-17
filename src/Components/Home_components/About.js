import React from 'react'
import heroImg from "../../assets/about_img.webp";

const About = () => {
  return (
    <div className="w-full mx-auto  bg-white overflow-hidden">

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src={heroImg}
              alt="About HYSEA"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-3/4 px-8 md:px-12 py-10 text-[#222] border-[6px] border-[#0530A8]">

            <h2 className="text-3xl md:text-6xl font-semibold text-[#0530A8] tracking-wide mb-6">
              ABOUT HYSEA
            </h2>

            <p className="text-sm md:text-base leading-relaxed mb-4">
              Established in 1991, HYSEA (Hyderabad Software Enterprises Association) is the premier 
              industry association for Telangana’s IT sector, representing over 90% of the export 
              revenues and workforce across the region’s IT/ITeS companies, Global Capability Centers 
              (GCCs), and startups.
            </p>

            <p className="text-sm md:text-base leading-relaxed mb-4">
              As a driving force behind Hyderabad’s rise as a global technology hub, HYSEA works closely 
              with the government to advocate for industry needs, provide impact metrics for IT policy, 
              promote investment, and strengthen the industry’s position on the world stage. The association 
              serves as a vital bridge, connecting corporations, research institutions, and startups, and 
              fostering a culture of innovation and collaboration across the ecosystem.
            </p>

            <p className="text-sm md:text-base leading-relaxed">
              HYSEA’s initiatives are focused on building a future-ready talent pipeline and fostering 
              strong industry leadership. The association runs regular leadership development programs for 
              mid-level managers, conducts faculty development workshops to equip educators and students 
              with emerging technologies, and curates a year-round calendar of roundtables and thought 
              leadership seminars on key industry topics.
            </p>

          </div>
        </div>

      </div>
  )
}

export default About