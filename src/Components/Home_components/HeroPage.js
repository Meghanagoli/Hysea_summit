import React from "react";
import heroImg from "../../assets/hero-img.webp";
import rectBg from "../../assets/wavy-bg.webp";
import cognizant from "../../assets/cognizant.svg";

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
      />

      {/* Wavy panel (kept unchanged; overlay elements won’t shift this) */}
      <div
        className="
          relative z-30 sm:mt-[-60px] md:mt-[-80px] lg:mt-[0px] mt-[-240px]
          flex items-center w-full
          md:absolute md:bottom-0
        "
        style={{
          backgroundImage: `url(${rectBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // Keep the wave position; adjust only if you want to nudge the art
          backgroundPosition: "center 48px",
          minHeight: "260px",
        }}
      >
        <div className="absolute inset-0 -z-10 min-h-[220px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[320px]" />
        <div className="absolute inset-0 bg-black/8 md:bg-black/10 pointer-events-none" />

        <div className="max-w-9xl m-auto px-4 py-12 sm:px-6 md:px-12 md:py-16 lg:py-20">
          {/* Tablet stays single column */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-start text-white">

            {/* =========================
                LEFT COLUMN (responsive)
               ========================= */}
            <div
              className="
                relative max-w-[60ch] md:max-w-none self-end
                pt-18 sm:pt-20 md:pt-24 lg:pt-20 xl:pt-24 2xl:pt-28
              "
            >
              {/* Absolute overlay: logo (left) + bold 'presents' under it */}
              <div
                className="
                  absolute
                  /* Fine anchor per breakpoint; change these to move BOTH logo+label together */
                  top-2 sm:top-2 md:top-3 lg:top-3 xl:top-4
                  left-0
                  flex flex-col items-start gap-2
                "
              >
                {/* Logo size per breakpoint (safe to tweak) */}
                <img
                  src={cognizant}
                  alt="Cognizant Logo"
                  className="
                    w-56 h-auto          /* phones */
                    sm:w-64              /* large phones / small tablets */
                    md:w-72              /* tablets */
                    lg:w-64              /* laptops */
                    xl:w-72 2xl:w-80     /* large desktops */
                  "
                />

                {/* 'presents' — bold; use ml-* to line it under the logotype;
                    use -mt-* / mt-* to move the label up/down only */}
                <span
                  className="
                    uppercase text-white
                    leading-none
                    ml-0
                    mt-[0.2rem]
                  "
                  style={{
                    fontFamily: '"SF Pro Text", "SF Pro", "Segoe UI", system-ui, -apple-system, sans-serif',
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "110%",
                    letterSpacing: "-0.64px",
                    paddingLeft: "clamp(3.3rem, 13vw, 4.7rem)",
                  }}
                >
                  PRESENTS
                </span>
              </div>

              {/* Badge in normal flow; margin keeps it clear of the overlay */}
              <span className="inline-block bg-[#FFC400] text-[#1c2a4d] font-bold px-4 py-1 rounded-full text-xs md:text-sm  md:mt-0 mt-24 ">
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

            {/* =========================
                RIGHT COLUMN (unchanged)
               ========================= */}
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