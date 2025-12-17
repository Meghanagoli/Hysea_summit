import React from "react";
import heroLeftBg from "../assets/hero-left-bg.webp";
import heroLeftBgMobile from "../assets/hero-left-bg-mobile.webp";
import rightImage from "../assets/speakers_img.webp"
import s1 from "../assets/s1.png"
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import s6 from "../assets/s6.png";
import s7 from "../assets/s7.png";
import s8 from "../assets/s8.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
const speakers = [
  { name: "M. Venkaiah Naidu", img: s1 },
  { name: "Jishnu Dev Varma", img: s2 },
  { name: "E. S. L. Narasimhan", img: s3 },
  { name: "C. Rangarajan", img: s4 },
  { name: "N. Chandrababu Naidu", img: s5 },
  { name: "Dr. Y. S. Rajasekhara Reddy", img: s6 },
  { name: "N. Kiran Kumar Reddy", img: s7 },
  { name: "Sachin Pilot", img: s8 },
];

export default function Speakers() {
  return (
    <section className="w-full">
        <Navbar/>
        <main className="relative w-full py-[px]  overflow-clip bg-transparent">
      <div
        className="
    w-[400px] lg:w-[65%]
    min-h-[440px] lg:min-h-[544px]
    px-0 lg:px-5          
    bg-no-repeat bg-cover bg-right-top
  "
        style={{ backgroundImage: `url(${heroLeftBg})` }}
      >


        <div className="lg:hidden relative w-[600px] h-[300px] sm:h-[330px]">
          <img
            src={rightImage}
            alt="Speakers"
            className="h-full w-full object-cover object-left"  
          />
        </div>



        <div
          className="
    lg:hidden absolute inset-0 z-0
    bg-no-repeat bg-cover
    bg-[position:center_220px]  
  "
          style={{ backgroundImage: `url(${heroLeftBgMobile})` }}
          aria-hidden="true"
        />


        <div
          className="
            relative z-10
            /* Mobile placement adjustments to sit under curve */
            -mt-[100px] px-5 pt-8 pb-12 
            /* Keep your desktop paddings untouched */
            lg:mt-22 lg:pt-[144px] lg:pb-[144px] lg:px-[80px] lg:pr-[200px]
          "
        >
          <div className="inline-flex mt-24   lg:mt-24 items-center justify-center gap-2 rounded-[30px] bg-[#FFBB00] px-4 py-[6px] mb-4 mr-auto">
            <h3 className="text-[#0A2A73] text-sm font-semibold">
              HYSEA Annual Summit &amp; Awards 2026
            </h3>
          </div>

          <h1 className="text-white text-[40px] sm:text-[44px] lg:text-[72px] font-medium leading-[1.06] lg:leading-[0.92] tracking-[-0.72px] mb-3">
            Speakers
          </h1>

          <p className="text-white mt-5 text-[15px] sm:text-[16px] lg:text-[18px] font-normal leading-[1.6] max-w-[95%] sm:max-w-[92%] lg:max-w-[640px] mb-6">
            Join an exceptional lineup of distinguished experts and dignitaries as they explore the trends, breakthroughs, and bold ideas shaping the future.
          </p>

          
        </div>
      </div>

      <div
        className="absolute right-0 top-0 -z-10 w-full lg:w-1/2 pb-6 h-full bg-no-repeat bg-cover bg-left"
        style={{ backgroundImage: `url(${rightImage})` }}
        aria-hidden="true"
      />

      <div className="block lg:hidden pb-[0%] pt-[0%]" aria-hidden="false" />
    </main>

      <div className="max-w-6xl mx-auto px-4 py-12 bg-white">
        <h2 className="text-center text-4xl md:text-6xl font-semibold text-[#0530A8] mb-10">
          PAST SPEAKERS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {speakers.map((spk, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 bg-gradient-to-b from-blue-600 to-blue-800 rounded-2xl overflow-hidden ">
                <img
                  src={spk.img}
                  alt={spk.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <p className="mt-3 text-center text-sm md:text-base text-gray-700 font-medium">
                {spk.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </section>
  );
}