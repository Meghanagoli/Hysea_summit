
import React from "react";
import heroImg from "../../assets/hero-img.webp";    
import rectBg from "../../assets/wavy-bg.webp"; 

const HeroPage = () => {
  return (
    <section className="w-full">
      <div className="relative w-full overflow-visible">
        <img
          src={heroImg}
          alt="HYSEA Summit"
          className="
            w-full
            h-[220px] sm:h-[260px] md:h-[340px] lg:h-[420px]
            object-cover object-top
            block
            relative
            z-30
          "
        />
      </div>

      <div
        className="
          relative z-30
          -mt-[56px] sm:-mt-[96px] md:-mt-[128px] lg:-mt-[160px]
          flex items-center w-full
        "
        style={{
          backgroundImage: `url(${rectBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "260px",
        }}
      >
        <div className="absolute inset-0 -z-10 min-h-[240px] sm:min-h-[300px] md:min-h-[380px] lg:min-h-[480px]" />
        <div className="absolute inset-0 bg-black/8 md:bg-black/10" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-start text-white">
            
            <div className="mt-8 sm:mt-12 md:mt-20 max-w-[60ch] md:max-w-none">
              <span className="inline-block bg-[#FFC400] text-[#1c2a4d] font-semibold px-4 py-1 rounded-full text-xs md:text-sm">
                33rd Edition | March, Hyderabad
              </span>

              <h1 className="font-semibold mt-4 sm:mt-5 text-2xl md:text-3xl lg:text-4xl leading-tight">
                HYSEA ANNUAL <br />
                SUMMIT &amp; AWARDS 2026
              </h1>

              <p className="mt-4 sm:mt-5 font-semibold text-base sm:text-xl md:text-3xl">
                Intelligence Everywhere: <br />
                Leading the New Era of Transformation
              </p>
            </div>
            <div className="text-sm sm:text-base leading-relaxed mt-4 md:mt-[96px] max-w-[70ch] md:max-w-none ml-0 md:ml-16">
              <p>
                HYSEA’s Annual Summit is India’s premier technology leadership
                event, bringing together over 1,200+ delegates and 75+ speakers
                from industry, government, academia, and startups. Now in its
                33rd edition, the Annual Summit &amp; Awards promises to be bigger,
                bolder, and more impactful than ever.
              </p>

              <p className="mt-3 sm:mt-4">
                Across two action-packed days, the Summit features masterclasses,
                keynote sessions, power talks, panel conversations, industry
                awards, product + tech showcases, an expo, and unmatched networking
                opportunities.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
