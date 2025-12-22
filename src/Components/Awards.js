import React from "react";
import { useSEO } from "./useSEO";
import Footer from "./Footer.js";
import heroLeftBg from "../assets/hero-left-bg.webp";
import heroLeftBgMobile from "../assets/hero-left-bg-mobile.webp";
import rightImage from "../assets/awards_img.png";
import a1 from "../assets/a1.svg";
import a2 from "../assets/a2.svg";
import a3 from "../assets/a3.svg";
import a4 from "../assets/a4.svg";
import c1 from "../assets/c1.webp";
import c2 from "../assets/c2.webp";
import c3 from "../assets/c3.webp";
import c4 from "../assets/c4.webp";
import c5 from "../assets/c5.webp";
import c6 from "../assets/c6.webp";
import c7 from "../assets/c7.webp";
import c8 from "../assets/c8.webp";
import c9 from "../assets/c9.webp";
import c10 from "../assets/c10.webp";
import c11 from "../assets/c11.webp";
import awards1 from "../assets/aw1.png";
import awards2 from "../assets/aw2.png";
console.log("testing");
const Awards = () => {
  useSEO({
    title: "Awards | HYSEA Annual Summit & Awards 2026",
    description:
      "Gain industry recognition and spotlight your success at the 33rd HYSEA Annual Summit & Awards 2026. Whether you are a scale-ready startup or an established enterprise, the HYSEA Awards offer a platform to showcase your innovation and impact.",
  });
  return (
    <section className="w-full">
      <main className="relative w-full overflow-clip bg-transparent">
        {/* ====================== DESKTOP (lg+) ====================== */}
        <div
          className="
                       hidden lg:block
                       relative w-full
                     "
        >
          {/* Left desktop panel with background */}
          <div
            className="
                         w-[65%]
                         min-h-[544px]
                         lg:px-5
                         bg-no-repeat bg-cover bg-right-top
                       "
            style={{ backgroundImage: `url(${heroLeftBg})` }}
          >
            <div
              className="
                           relative z-10
                           lg:pt-[144px] lg:pb-[144px] lg:px-[80px] lg:pr-[200px]
                         "
            >
              <div className="inline-flex lg:mt-24 items-center justify-center gap-2 rounded-[30px] bg-[#FFBB00] px-4 py-[6px] mb-4 mr-auto">
                <h3 className="text-[#0A2A73] text-sm font-semibold">
                  33rd HYSEA Annual Summit &amp; Awards 2026
                </h3>
              </div>

              <h1 className="text-white text-[72px] font-medium leading-[0.92] tracking-[-0.72px] mb-3">
                Awards
              </h1>

              <p className="text-white mt-5 text-[17px] font-normal leading-[1.6] max-w-[640px] mb-6">
                The HYSEA Awards are a cornerstone of the HYSEA Annual Summit,
                celebrating excellence, innovation, leadership, and social
                impact across the IT/ITES and technology ecosystem. As one of
                Hyderabad's most prestigious industry recognitions, these awards
                honor Organizations and initiatives that have demonstrated
                exceptional contributions to business growth, technology
                innovation, sustainable development, and societal progress.
              </p>

              <a
                href="https://hysea.accubate.app/ext/form/12107/1/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="
                              w-[fit-content] h-[43px]
              border-[1.5px] border-white
              rounded-[4px]
              min-w-40
              bg-transparent
              text-white
              font-medium text-[16px] leading-[34.13px]
              flex items-center justify-center
              px-[20px] py-[4px]
                           "
              >
                Apply now
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE (desktop only) */}
          <div
            className="
    absolute right-0 top-4 md:top-10 -z-10
    w-1/2 h-full
    bg-no-repeat
   bg-[position:25%_center]
    bg-[length:120%_auto]
  "
            style={{ backgroundImage: `url(${rightImage})` }}
            aria-hidden="true"
          />
        </div>
        {/* =================== END DESKTOP =================== */}

        {/* ====================== MOBILE/TABLET (< lg) ====================== */}
        <div
          className="
                       block lg:hidden
                       relative w-full
                       overflow-hidden
                     "
        >
          {/* MOBILE TOP PHOTO */}
          <div className="relative w-full h-[300px] sm:h-[330px]">
            {" "}
            <img
              src={rightImage}
              alt="Speakers"
              className="h-full w-full object-cover object-right"
            />
          </div>

          {/* MOBILE BACKGROUND LAYER (under content) */}
          <div
            className="
                         absolute inset-0 z-0
                         bg-no-repeat bg-cover
                         bg-[position:center_220px]
                       "
            style={{ backgroundImage: `url(${heroLeftBgMobile})` }}
            aria-hidden="true"
          />

          {/* CONTENT (above backgrounds) */}
          <div
            className="
                         relative z-10
                         -mt-[100px] px-5 pt-8 pb-12
                       "
          >
            <div className="inline-flex mt-24 items-center justify-center gap-2 rounded-[30px] bg-[#FFBB00] px-4 py-[6px] mb-4 mr-auto">
              <h3 className="text-[#0A2A73] text-sm font-semibold">
                33rd HYSEA Annual Summit &amp; Awards 2026
              </h3>
            </div>

            <h1 className="text-white text-[40px] sm:text-[44px] font-medium leading-[1.06] tracking-[-0.72px] mb-3">
              Awards
            </h1>

            <p className="text-white mt-5 text-[15px] sm:text-[16px] font-normal leading-[1.6] max-w-[95%] sm:max-w-[92%] mb-6">
              The HYSEA Awards are a cornerstone of the HYSEA Annual Summit,
              celebrating excellence, innovation, leadership, and social impact
              across the IT/ITES and technology ecosystem. As one of Hyderabad's
              most prestigious industry recognitions, these awards honor
              Organizations and initiatives that have demonstrated exceptional
              contributions to business growth, technology innovation,
              sustainable development, and societal progress.
            </p>

            <a
              href="https://hysea.accubate.app/ext/form/12107/1/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="
                           border-[1.5px] border-white
                           rounded-md
                           bg-transparent
                           text-white
                          text-sm font-semibold
                            px-4 md:px-5 py-2
                         "
            >
              Apply now
            </a>
          </div>
        </div>
        {/* =================== END MOBILE/TABLET =================== */}
      </main>
      <div className="mx-auto max-w-9xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center">
          <div
            className="block md:block w-full h-full object-cover bg-no-repeat bg-[position:65%_center]  md:object-center"
            style={{ backgroundImage: `url(${awards1})` }}
          ></div>
          <div className=" border-[6px]  border-b-0  border-[#0530A8] bg-white max-w-3xl mx-auto px-6 sm:px-10 md:px-10 py-16 md:py-20 text-center">
            <h2 className="text-[#0530A8] text-3xl sm:text-5xl md:text-6xl font-semibold tracking-wide uppercase mb-6">
              About the Awards
            </h2>
            <p className="text-black text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-4">
              Designed to highlight outstanding achievements across diverse
              areas, the HYSEA Awards bring together established enterprises,
              dynamic startups, and purpose-led organizations. Winners are
              selected through a rigorous evaluation process, reflecting
              excellence, measurable impact, and future potential.
            </p>
            <p className="text-black text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              Presented during an evening awards ceremony at the Summit, these
              accolades not only recognize individual and organizational success
              but also spotlight the collective energy driving Hyderabad's
              transformation as a global technology and innovation hub. The
              awards have also honored lifetime contributions and scale-setting
              achievements that inspire the broader community year after year.
            </p>
          </div>
          <div
            className="block md:block w-full h-full object-cover bg-no-repeat bg-center md:object-center"
            style={{ backgroundImage: `url(${awards2})` }}
          ></div>
        </div>
      </div>

      <div className=" h-[4px] w-full  bg-[#0A3AA8]" />

      <section className="w-full max-w-9xl bg-white">
        <div className=" w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px]">
          <div className="bg-white px-6 sm:px-10 md:px-14 py-24 md:py-30">
            <h2 className="text-[#0530A8] text-4xl sm:text-5xl md:text-6xl mt-2 sm:mt-4 font-semibold uppercase tracking-wide">
              AWARD CATEGORIES
            </h2>
            <p className="text-black-700 text-base sm:text-lg max-w-3xl mt-10">
              In the past 10+ years, Organizations have found the opportunity to
              gain:
            </p>

            <div className="space-y-10 max-w-3xl mt-12 sm:mt-14">
              <div className="border border-gray-300 rounded-xl shadow-md w-full">
                <div className="flex items-stretch">
                  <img
                    src={a1}
                    alt=""
                    aria-hidden="true"
                    className="block h-full"
                  />

                  <div className="px-6 sm:px-8 flex flex-col justify-center">
                    <h3 className="text-[#0530A8] text-lg sm:text-xl font-semibold mb-2">
                      10x Startup Awards
                    </h3>

                    <p className="text-black-900 text-base sm:text-lg text-left">
                      The 10x Startup Awards serve as a trusted benchmark for
                      identifying and recognizing some of the most promising,
                      scale-ready startups emerging from Hyderabad and
                      Telangana. Startups incorporated in Telangana with a
                      Market-ready Product / Customer Traction are considered.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-300 rounded-xl shadow-md w-full">
                {" "}
                <div className="flex items-stretch">
                  <img
                    src={a2}
                    alt=""
                    aria-hidden="true"
                    className="block h-full"
                  />

                  <div className="px-6 sm:px-8 flex flex-col justify-center">
                    <h3 className="text-[#0530A8] text-lg sm:text-xl font-semibold mb-2">
                      Product Innovation Awards
                    </h3>

                    <p className="text-black-900 text-base sm:text-lg text-left">
                      The Product Innovation Awards recognize the most impactful
                      products and breakthrough innovations built in Telangana's
                      thriving tech ecosystem. Products or platforms that are
                      already in the market and built by established companies
                      are considered for this recognition.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-300 rounded-xl shadow-md w-full">
                <div className="flex items-stretch">
                  <img
                    src={a3}
                    alt=""
                    aria-hidden="true"
                    className="block h-full"
                  />

                  <div className="px-6 sm:px-8 flex flex-col justify-center">
                    <h3 className="text-[#0530A8] text-lg sm:text-xl font-semibold mb-2">
                      Industry Excellence Awards
                    </h3>

                    <p className="text-black-900 text-base sm:text-lg text-left">
                      The Industry Excellence Awards honor the performance and
                      contribution of IT companies operating out of Telangana.
                      These accolades recognize excellence in revenue growth,
                      employment generation, gender diversity, and impact from
                      Tier-2 cities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-300 rounded-xl shadow-md w-full">
                <div className="flex items-stretch">
                  <img
                    src={a4}
                    alt=""
                    aria-hidden="true"
                    className="block h-full"
                  />

                  <div className="px-6 sm:px-8 flex flex-col justify-center">
                    <h3 className="text-[#0530A8] text-lg sm:text-xl font-semibold mb-2">
                      Lifetime Achievement Awards
                    </h3>

                    <p className="text-black-900 text-base sm:text-lg text-left">
                      The Lifetime Achievement awards are a special honor
                      conferred on exceptional leaders in recognition of immense
                      and sustained contributions. This award celebrates
                      visionary leadership, long-term impact, and a legacy of
                      service to the industry and society.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white block max-w-[1600px] px-8 py-6 h-[600px] sm:h-[900px] md:h-[1000px] lg:h-[1300px] overflow-hidden">
            <div className="flex flex-col gap-4 animate-vertical-scroll hover:[animation-play-state:paused]">
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full ">
                <img
                  src={c1}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full ">
                <img
                  src={c2}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c3}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c4}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full ">
                <img
                  src={c5}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full ">
                <img
                  src={c6}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c7}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c8}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c9}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c10}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c11}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>

              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c1}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c2}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c3}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c4}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c5}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c6}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c7}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c8}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c9}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c10}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c11}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>

              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c1}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c2}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c3}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c4}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c5}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c6}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c7}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c8}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c9}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c10}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
              <div className="bg-[#d6d6d6] rounded-md h-48 w-full">
                <img
                  src={c11}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-9xl bg-[#002F76] text-white">
        <div className="mx-auto max-w-[1260px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
          <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide">
            AWARD NOMINATIONS
          </h2>
          {/* <div className="mt-8 max-w-9xl flex flex-col md:flex-row justify-between gap-6">
            <div className="flex-1 rounded-md border border-white/90 p-8 ">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center">10x STARTUP AWARDS</h3>
              <p className="text-sm sm:text-base mb-4">
                Is your startup building market confidence? <br />This is your moment to shine, scale, and stand out.
              </p>
              <h4 className="font-bold mb-2">Why Nominate Your Product?</h4>
              <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
                <li>High-value press visibility</li>
                <li>Access to top enterprise leaders and catalyst programs (T-Hub, IIIT-H, etc.)</li>
                <li>1 year HYSEA membership</li>
                <li>Referrals to VCs &amp; angel networks</li>
                <li>A free showcase slot for finalists at the HYSEA Annual Summit and so much more!</li>
              </ul>

              <h4 className="font-semibold mt-4 mb-2">Who Can Apply?</h4>
              <p className="text-sm sm:text-base">
                Startups incorporated in Telangana with a Market-ready Product / Customer Traction.
              </p>
            </div>

            <div className="flex-1 rounded-md border border-white/90 bg- p-8 ">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center">TECH PRODUCT AND INNOVATION AWARDS</h3>
              <p className="text-sm sm:text-base mb-4">
                It’s time to spotlight the most impactful products and breakthrough innovations built in Telangana’s thriving tech ecosystem.
              </p>

              <h4 className="font-bold mb-2">Why Nominate Your Product?</h4>
              <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
                <li>Visibility across the innovation ecosystem with researchers, corporates &amp; tech leaders</li>
                <li>Access to HYSEA programs in partnership with T-Hub, IIIT-H &amp; leading incubators</li>
                <li>A chance for finalists to showcase their product at the HYSEA Annual Summit completely free</li>
              </ul>

              <h4 className="font-semibold mt-4 mb-2">Who Can Apply?</h4>
              <p className="text-sm sm:text-base">
                Products/Platforms that are already in the market and built by established companies.<br /> (Idea-stage tech is eligible only with a granted patent.)
              </p>
            </div>
          </div>
 */}

          <p className="mt-8 text-center text-m sm:text-lg text-white/80">
            Nominate your company for the 10x Startup and Product Innovation
            Awards below.
          </p>

          <div className="mt-8 text-center">
            <a
              href="https://hysea.accubate.app/ext/form/12107/1/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="
      inline-flex items-center justify-center
      px-4 md:px-5 py-2
      border border-white/80
      text-white font-medium
      rounded-md
      hover:bg-white hover:text-[#0A2A73]
      transition-colors duration-300
    "
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default Awards;
