import React from "react";
import { useSEO } from "./useSEO";
import smallPod from "../assets/small_pod.svg"
import largeStall from "../assets/large-stall.svg"
import medBooth from "../assets/medium-booth.svg"
import Footer from "../Components/Footer"
import img1 from "../assets/expo1.webp";
import img2 from "../assets/expo2.webp";
import img3 from "../assets/expo3.png";
import waveImg from "../assets/wave-blue.webp";
import heroLeftBg from "../assets/hero-left-bg.webp";
import heroLeftBgMobile from "../assets/hero-left-bg-mobile.webp";
import rightImage from "../assets/expo-img.png";

const cards = [
  { title: "Engage with Decision Makers", img: img1 },
  { title: "Connect with Key Stakeholders", img: img2 },
  { title: "Tell Your Unique Success Story", img: img3 },
];


const Expo = () => {
  useSEO({
    title: "Exhibition | HYSEA Annual Summit & Awards 2026",
    description:
      "Showcase your innovation at the 33rd HYSEA Annual Summit 2026. Engage with industry leaders, founders, and tech experts. Reserve your exhibition stall today.",
  });


  return (
    <div className="w-full ">
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
              <div className="inline-flex mt-10 sm:mt-14 md:mt-16 lg:mt-24 items-center justify-center gap-2 rounded-[30px] bg-[#FFBB00] px-4 py-[6px] mb-4 mr-auto">
                <h3 className="text-[#0A2A73] text-sm font-semibold">
                  33rd Edition | March 5, 2026 | Hyderabad                </h3>
              </div>

              <h1 className="text-white text-[72px] font-medium leading-[0.92] tracking-[-0.72px] mb-3">
                Exhibition
              </h1>

              <p className="text-white mt-5 text-[18px] font-normal leading-[1.6] max-w-[640px] mb-6">
                Generate leads, progress your pipeline and build brand awareness. Become an exhibitor at HYSEA Annual Summit and get in front of industry leaders.
              </p>
              <a
                href="https://hyseaevents.zohobackstage.in/hyseaannualsummit2026#/tickets"
                target="_blank"
                rel="noopener noreferrer"
                className="
              w-[fit-content] h-[43px]
              border-[1.5px] border-white
              rounded-[4px]
              bg-transparent
              text-white
              font-medium text-[16px] leading-[34.13px]
              flex items-center justify-center
              px-[20px] py-[4px]
            "
              >
                Reserve your Space
              </a>

            </div>
          </div>

          {/* RIGHT IMAGE (desktop only) */}
          <div
            className="absolute right-0 top-0 -z-10 w-1/2 h-full bg-no-repeat bg-cover bg-left"
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
          <div className="relative w-full h-[300px] sm:h-[350px] md:h-[380px]">
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
                           -mt-[60px] sm:-mt-[80px] md:-mt-[40px] px-5 pt-8 pb-12
                         "
          >
            <div className="inline-flex mt-24 items-center justify-center gap-2 rounded-[30px] bg-[#FFBB00] px-4 py-[6px] mb-4 mr-auto">
              <h3 className="text-[#0A2A73] text-sm font-semibold">
                33rd Edition | March 5, 2026 | Hyderabad              </h3>
            </div>

            <h1 className="text-white text-[36px] sm:text-[40px] md:text-[48px] font-medium leading-[1.1] tracking-[-0.5px] mb-3">
              Exhibition
            </h1>

            <p className="text-white mt-5 text-[15px] sm:text-[16px] font-normal leading-[1.6] max-w-[95%] sm:max-w-[92%] mb-6">
              Generate leads, progress your pipeline and build brand awareness. Become an exhibitor at HYSEA Annual Summit and get in front of industry leaders.
            </p>

            <a
              href="https://hyseaevents.zohobackstage.in/hyseaannualsummit2026#/tickets"
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-flex
              max-w-[220px]
              border-[1.5px] border-white
              rounded-[4px]
              bg-transparent
              text-white
              text-sm font-semibold
              px-4 md:px-5 py-2
            "
            >
              Reserve your Space
            </a>

          </div>
        </div>
        {/* =================== END MOBILE/TABLET =================== */}

      </main>




      <div className="block lg:hidden " />
      <section className="w-full bg-white px-4 sm:px-6 md:px-12 py-16 lg:py-32">
        <div className="mx-auto max-w-9xl flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-[#0530A8] ">
            EXHIBITION OPPORTUNITIES
          </h2>

          <p className="mt-8 text-center max-w-3xl mx-auto text-black text-lg md:text-lg">
            Showcase your innovative solutions directly to the leaders, founders,
            and technical experts who are actively shaping the future landscape of
            global business and technology.
          </p>

          <div className="mt-12 max-w-[1200px] mx-auto flex flex-col md:flex-row flex-wrap items-start justify-center gap-12 md:gap-10">
            {cards.map((c, idx) => (
              <Card
                key={idx}
                title={c.title}
                image={c.img}
                waveImg={waveImg}
              />
            ))}
          </div>

        </div>
      </section>
      <div className="w-full bg-[#002F76] px-4 sm:px-6 lg:px-12 py-16 lg:py-32">
        <div className="max-w-9xl mx-auto text-center relative -mt-12 lg:-mt-10">

          <p className="text-3xl md:text-5xl font-semibold text-white uppercase tracking-wide text-center mb-2">
            Stall Options
          </p>

          <div className="max-w-9xl">


            <div className="bg-white rounded-3xl mt-8 lg:mt-12 px-6 md:px-10 lg:px-14 py-16 lg:py-24 shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-10">
                <div className="flex flex-col items-center text-center sm:last:col-span-2 sm:last:flex sm:last:justify-center lg:last:col-span-1">
                  <h3 className="text-[21px] md:text-[33px] font-semibold text-[#0050c9] mb-4">
                    Large Stall
                  </h3>
                  <div className="w-60 h-60 mb-4 flex items-center justify-center">
                    <img src={largeStall} alt="Small pod" />                  </div>
                  <p className="text-sm md:text-base font-semibold mb-2">3M x 3M</p>
                  <p className="text-xl md:text-2xl font-semibold">₹50,000</p>
                </div>


                <div className="flex flex-col items-center text-center sm:last:col-span-2 sm:last:flex sm:last:justify-center lg:last:col-span-1">
                  <h3 className="text-[21px] md:text-[33px] font-semibold text-[#0050c9] mb-4">
                    Small Stall
                  </h3>
                  <div className="w-60 h-60 mb-4 flex items-center justify-center">
                    <img src={medBooth} alt="Small pod" />                  </div>
                  <p className="text-sm md:text-base font-semibold mb-2">2M x 2M</p>
                  <p className="text-xl md:text-2xl font-semibold">₹30,000</p>
                </div>
                <div className="flex flex-col items-center text-center sm:last:col-span-2 sm:last:flex sm:last:justify-center lg:last:col-span-1">
                  <h3 className="text-[21px] md:text-[33px] font-semibold text-[#0050c9] mb-4">
                    Demo Pod
                  </h3>
                  <div className="w-60 h-60 mb-4 flex items-center justify-center">
                    <img src={smallPod} alt="Small pod" />

                  </div>
                  <p className="text-sm md:text-base font-semibold mb-2">1M x 1M</p>
                  <p className="text-xl md:text-2xl font-semibold">₹10,000</p>
                </div>

              </div>

              <a href="https://hyseaevents.zohobackstage.in/hyseaannualsummit2026#/tickets" target="_blank" rel="noopener noreferrer" className="bg-[#0530A8]  text-white px-4 md:px-5 py-2 rounded-md text-sm md:text-base font-semibold">Reserve Your Space</a>

            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
const Card = ({ title, image, waveImg }) => {
  return (
    <article className="relative w-full max-w-[300px] flex-shrink-0 rounded-xl overflow-hidden bg-white shadow-xl">

      {/* IMAGE */}
      <div className="relative w-full h-[220px] md:h-[260px] lg:h-[360px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="block w-full h-full object-cover"
        />

        {/* WAVY BLUE OVERLAY */}
        <div className="absolute bottom-0 left-0 w-full h-[70px] sm:h-[80px] md:h-[90px] lg:h-[100px]">
          <img
            src={waveImg}
            alt="wave"
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXT ON WAVE */}
        <div className="absolute bottom-0 left-0 w-full h-[70px] sm:h-[80px] md:h-[90px] lg:h-[100px] flex items-center px-4">
          <h3 className="text-white text-lg sm:text-xl md:text-[22px] font-semibold loading-tight">
            {title}
          </h3>
        </div>
      </div>

    </article>
  );
};
export default Expo;