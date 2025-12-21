import React from "react";
import heroLeftBg from "../assets/hero-left-bg.webp";
import heroLeftBgMobile from "../assets/hero-left-bg-mobile.webp";
import rightImage from "../assets/speakers_img.png"
import s1 from "../assets/s1.png"
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import s6 from "../assets/s6.png";
import s7 from "../assets/s7.png";
import s8 from "../assets/s8.png";
import s9 from "../assets/s9.png";
import s10 from "../assets/s10.png";
import s11 from "../assets/s11.png";
import s12 from "../assets/s12.png";
import s13 from "../assets/s13.png";
import s14 from "../assets/s14.png";
import s15 from "../assets/s15.png";
import s16 from "../assets/s16.png";
import s17 from "../assets/s17.png";
import s18 from "../assets/s18.png";
import s19 from "../assets/s19.png";
import s20 from "../assets/s20.png";
import s21 from "../assets/s21.png";
import s22 from "../assets/s22.png";
import s23 from "../assets/s23.png";
import s24 from "../assets/s24.png";
import s25 from "../assets/s25.png";
import s26 from "../assets/s26.png";
import s27 from "../assets/s27.png";
import s28 from "../assets/s28.png";
import s29 from "../assets/s29.png";
import s30 from "../assets/s30.png";

import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.png";
import g4 from "../assets/g4.png";
import g5 from "../assets/g5.png";
import g6 from "../assets/g6.png";
import g7 from "../assets/g7.png";
import g8 from "../assets/g8.png";
import g9 from "../assets/g9.png";
import g10 from "../assets/g10.png";
import g11 from "../assets/g11.png";
import g12 from "../assets/g12.png";
import g13 from "../assets/g13.png";
import g14 from "../assets/g14.png";
import g15 from "../assets/g15.png";
import g16 from "../assets/g16.png";
import g17 from "../assets/g17.png";
import g18 from "../assets/g18.png";
import g19 from "../assets/g19.png";
import g20 from "../assets/g20.png";

import Navbar from "./Navbar";
import Footer from "./Footer";
const speakers = [
  { name: "Prof. Ashok Jhunjhunwala, IITM", img: s1 },
  { name: "Ayodhya Rami Reddy, Ramky Group", img: g11 },
  { name: "Dr. B.V.R. Mohan Reddy, Cyient", img: s2 },
  { name: "C.P. Gurnani, TechM", img: s3 },
  { name: "Chaitanya Peddi, DarwinBox", img: s4 },
  { name: "Dr. D. Nageshwar Reddy, AIG", img: s5 },
  { name: "Debashis Chatterjee, LTIMT", img: s6 },
  { name: "Late F. C. Kohli, TCS", img: s7 },
  { name: "G. V. Prasad, Dr. Reddy", img: s8 },
  { name: "Dr. Gullapalli N. Rao, LVPEI", img: s9 },
  { name: "Jan Baan, Baan Corporation, Vannenburg IT Park", img: s10 },
  { name: "KV Kamath, ICICI, Infosys", img: s11 },
  { name: "Kamlesh (Daaji) Patel, Heartfulness Institute", img: s12 },
  { name: "Dr. Krishna Ella, Bharat Biotech", img: s13 },
  { name: "Lalit Ahuja, ANSR", img: s14 },
  { name: "N. G. Subramaniam, TCS", img: s15 },
  { name: "N. Lakshmi Narayanan, CTS", img: s16 },
  { name: "Nag Ashwin Reddy, Film Director & Screenwriter", img: s17 },
  { name: "Pawan Kumar Chandana, Skyroot Aerospace", img: s18 },
  { name: "Phil Fersht, HFS", img: s19 },
  { name: "Rana Daggubati,  Actor & Film Producer", img: s20 },
  { name: "S. Ravi Kumar, Cognizant", img: s21 },
  { name: "Dr. Sangitha, Apollo Hospitals", img: s22 },
  { name: "Sanjay Nekkanti, Dhruva Space", img: s23 },
  { name: "Sridhar Vembu, Zoho", img: s24 },
  { name: "Subramanian Ramadorai, TCS", img: s25 },
  { name: "U. B. Pravin Rao, Infosys", img: s26 },
  { name: "Dr. Uday B. Desai, IITH", img: s27 },
  { name: "Vikram Vuppala, NephroPlus", img: s28 },
  { name: "Vineet Nayar, HCL", img: s30 },

];
const chief_guests = [
  { name: "M. Venkaiah Naidu", img: g1 },
  { name: "Jishnu Dev Varma", img: g2 },
  { name: "E. S. L. Narasimhan", img: g3 },
  { name: "Dr. C. Rangarajan", img: g4 },
  { name: "N. Chandrababu Naidu", img: g5 },
  { name: "Late Y. S. Rajasekhara Reddy", img: g6 },
  { name: "N. Kiran Kumar Reddy", img: g7 },
  { name: "Sachin Pilot", img: g8 },
  { name: "D. Sridhar Babu", img: g9 },
  { name: "K. T. Rama Rao", img: g10 },
  { name: "Ponnala Lakshmaiah", img: g12 },
  { name: "Pullela Gopichand", img: s29 },
  { name: "Katherine B. Hadda US", img: g13 },
  { name: "Dr. T Hanuman Chowdary", img: g14 },
  { name: "J. Satyanarayana, IAS", img: g15 },
  { name: "S. K. Joshi, IAS", img: g16 },
  { name: "Jayesh Ranjan, IAS", img: g17 },
  { name: "Sanjay Kumar, IAS", img: g18 },
  { name: "V.C. Sajjanar, IPS", img: g19 },
  { name: "Shikha Goel, IPS", img: g20 },


]

export default function Speakers() {
  return (
    <section className="w-full">
      <Navbar />
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
                  HYSEA Annual Summit &amp; Awards 2026
                </h3>
              </div>

              <h1 className="text-white text-[72px] font-medium leading-[0.92] tracking-[-0.72px] mb-3">
                Speakers
              </h1>

              <p className="text-white mt-5 text-[18px] font-normal leading-[1.6] max-w-[640px] mb-6">
                Experience an exceptional lineup of distinguished experts and dignitaries as they explore the trends, breakthroughs, and bold ideas shaping the future.
              </p>


            </div>
          </div>

          {/* RIGHT IMAGE (desktop only) */}
          <div
            className="absolute right-0 top-0 -z-10 w-1/2 h-full bg-no-repeat bg-cover bg-center"
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
                HYSEA Annual Summit &amp; Awards 2026
              </h3>
            </div>

            <h1 className="text-white text-[40px] sm:text-[44px] font-medium leading-[1.06] tracking-[-0.72px] mb-3">
              Speakers
            </h1>

            <p className="text-white mt-5 text-[15px] sm:text-[16px] font-normal leading-[1.6] max-w-[95%] sm:max-w-[92%] mb-6">
              Experience an exceptional lineup of distinguished experts and dignitaries as they explore the trends, breakthroughs, and bold ideas shaping the future.
            </p>



          </div>
        </div>

      </main>


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 bg-white">
        <h2 className="text-center text-4xl md:text-6xl font-semibold text-[#0530A8] mb-16 max-w-[900px] mx-auto">
          CHIEF GUESTS & DIGNITARIES OVER THE YEARS
        </h2>

        <div className="grid justify-center gap-x-6 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(5,auto)]">
          {chief_guests.map((guest, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 bg-gradient-to-b from-blue-600 to-blue-800 rounded-md overflow-hidden ">
                <img
                  src={guest.img}
                  alt={guest.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <p className="mt-3 text-center text-sm md:text-base text-gray-700 font-medium">
                {guest.name}
              </p>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 bg-white">
          <h2 className="text-center text-4xl md:text-6xl font-semibold text-[#0530A8] mb-10  max-w-[900px] mx-auto">
            MARQUEE SPEAKERS FROM PAST EDITIONS
          </h2>

          <div className="grid justify-center gap-x-6 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(5,auto)]">
            {speakers.map((spk, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 bg-gradient-to-b from-blue-600 to-blue-800 rounded-md overflow-hidden ">
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


      </div>



      <Footer />
    </section>
  );
}