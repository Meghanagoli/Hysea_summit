import React from "react";
import heroImg from "../../assets/hero-img.webp";
import rectBg from "../../assets/wavy-bg.webp";
import cognizant from "../../assets/cognizant.webp";

const HeroPage = () => {
  return (
    <section
      className="w-full min-h-[100vh] relative"
    >
      {/* Hero Background Image */}
      <div
        className="
          w-full
          h-[90vh]
          sm:h-[70vh]
          lg:h-[100vh]
          bg-cover bg-center bg-no-repeat
        "
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      />

      {/* Blue Wavy Section */}
      <div
        className="
          relative z-30
          -mt-20 sm:-mt-24 lg:-mt-40
          w-full flex items-center
        "
        style={{
          backgroundImage: `url(${rectBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-16 md:pb-20 lg:pb-24">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 text-white">

 
            <div className="max-w-[60ch]">

              <img
                src={cognizant}
                alt="Cognizant Logo"
                className="
                  w-28 sm:w-36 md:w-44 lg:w-52
                  mb-6
                  rounded-full
                  border-4
                "
                style={{ borderColor: "#115df5" }}
              />

              {/* 33rd Badge */}
              <span className="inline-block bg-[#FFC400] text-[#1c2a4d] font-bold px-4 py-1 rounded-full text-xs md:text-sm">
                33rd Edition | March 5, 2026 | Hyderabad
              </span>

              {/* Heading */}
              <h1 className="font-semibold mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight">
                HYSEA ANNUAL <br />
                SUMMIT &amp; AWARDS 2026
              </h1>

              {/* Tagline */}
              <p className="mt-4 sm:mt-5 font-semibold text-xl sm:text-2xl md:text-3xl">
                Intelligence Everywhere: <br />
                Leading the New Era of Transformation
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="text-base sm:text-lg leading-relaxed max-w-[70ch] self-end">
              <p>
                HYSEA’s Annual Summit is India’s premier technology leadership
                event, bringing together over 1,200+ delegates and 75+ speakers
                from industry, government, academia, and startups. Now in its
                33rd edition, the Annual Summit &amp; Awards promises to be
                bigger, bolder, and more impactful than ever.
              </p>

              <p className="mt-4">
                The Summit features masterclasses, keynote sessions, power
                talks, panel conversations, industry awards, product + tech
                showcases, an expo, and unmatched networking opportunities.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;