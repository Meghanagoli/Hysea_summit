import React from "react";
import heroImg from "../../assets/hero-img.png";
import rectBg from "../../assets/wavy-bg.png";

const HeroPage = () => {
  return (
    <section
      className="
      w-full min-h-[100vh]
      sm:min-h-[100vh]

      "
      style={{
        height: "auto",
        position: "relative",
      }}
    >
      {/* Hero Background Image */}
      <div
        className="
          w-full
          backgrou
          h-[90vh]
          sm:h-[70vh]
          lg:h-[100vh]

        "
        style={{
          position: "relative",
          backgroundImage: `url(${heroImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>
      <div
        className="
          relative z-30 sm:mt-[-60px] md:mt-[-80px] lg:mt-[0px] mt-[-240px]
          flex items-center w-full
          lg:absolute lg:bottom-0
        "
        style={{
          backgroundImage: `url(${rectBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "260px",
        }}
      >
        <div className="absolute inset-0 -z-10 min-h-[220px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[320px]" />
        <div className="absolute inset-0 bg-black/8 md:bg-black/10" />

        <div className="max-w-9xl m-auto px-4 py-12 sm:px-6 md:px-12   md:py-16 lg:py-20 ">
          {/* ⬇️ Only change here: tablet stays single column */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-start text-white">
            <div className=" max-w-[60ch] md:max-w-none self-end">
              <span className="inline-block bg-[#FFC400] text-[#1c2a4d] font-bold px-4 py-1 rounded-full text-xs md:text-sm">
                33rd Edition | March 5, 2026 | Hyderabad
              </span>

              <h1 className="font-semibold mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight">
                HYSEA ANNUAL <br />
                SUMMIT &amp; AWARDS 2026
              </h1>

              <p className="mt-4 sm:mt-5 font-semibold sm:font-medium text-xl sm:text-3xl md:text-3xl">
                Intelligence Everywhere: <br />
                Leading the New Era of Transformation
              </p>
            </div>
            <div className="text-base leading-relaxed sm:text-lg md:mt-1 lg:mt-auto max-w-[70ch] md:max-w-none ml-0 self-end">
              <p>
                HYSEA’s Annual Summit is India’s premier technology leadership
                event, bringing together over 1,200+ delegates and 75+ speakers
                from industry, government, academia, and startups. Now in its
                33rd edition, the Annual Summit &amp; Awards promises to be
                bigger, bolder, and more impactful than ever.
              </p>

              <p className="mt-3 sm:mt-4">
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
