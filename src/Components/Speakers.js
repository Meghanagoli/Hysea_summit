import React from "react";
import { useSEO } from "./useSEO";
import heroLeftBg from "../assets/hero-left-bg.webp";
import heroLeftBgMobile from "../assets/hero-left-bg-mobile.webp";
import rightImage from "../assets/speakers_img.webp";
import s1 from "../assets/s1.png";
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
import cognizant from "../assets/cognizant.webp";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import p9 from "../assets/p9.png";
import p10 from "../assets/p10.png";
import p11 from "../assets/p11.png";
import p12 from "../assets/p12.png";
import p13 from "../assets/p13.png";
import p14 from "../assets/p14.png";
import p15 from "../assets/p15.png";
import p16 from "../assets/p16.png";
import p17 from "../assets/p17.png";
import p18 from "../assets/p18.png";
import p19 from "../assets/p19.png";
import p20 from "../assets/p20.png";
import p21 from "../assets/p21.png";
import p22 from "../assets/p22.png";
import p23 from "../assets/p23.png";

import Footer from "./Footer";
const speakers = [
  { name: "Prof. Ashok Jhunjhunwala, IITM", img: s1 },
  { name: "Ayodhya Rami Reddy, Ramky Group", img: g11 },
  { name: "Dr. B. V. R. Mohan Reddy, Cyient", img: s2 },
  { name: "C. P. Gurnani, TechM", img: s3 },
  { name: "Chaitanya Peddi, DarwinBox", img: s4 },
  { name: "Dr. D. Nageshwar Reddy, AIG", img: s5 },
  { name: "Debashis Chatterjee, LTIMT", img: s6 },
  { name: "Late F. C. Kohli, TCS", img: s7 },
  { name: "G. V. Prasad, Dr. Reddy's", img: s8 },
  { name: "Dr. Gullapalli N. Rao, LVPEI", img: s9 },
  { name: "Jan Baan, Baan Corporation, Vannenburg IT Park", img: s10 },
  { name: "K. V. Kamath, ICICI Bank", img: s11 },
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
  { name: "Katherine B. Hadda, USCG", img: g13 },
  { name: "Dr. T. Hanuman Chowdary", img: g14 },
  { name: "J. Satyanarayana, IAS", img: g15 },
  { name: "S. K. Joshi, IAS", img: g16 },
  { name: "Jayesh Ranjan, IAS", img: g17 },
  { name: "Sanjay Kumar, IAS", img: g18 },
  { name: "V.C. Sajjanar, IPS", img: g19 },
  { name: "Shikha Goel, IPS", img: g20 },
];
const distinguished_guests = [
  { name: "Akshay Khanna, Avasant", img: p1 },
  { name: "Ashutosh Sharma, Forrester", img: p2 },
  { name: "Ganesh Ramamoorthy, Gartner", img: p3 },
  { name: "Harita Gupta, Sutherland", img: p4 },
  { name: "Kashyap Kompella, RPA2AI Research", img: p5 },
  { name: "Krishna Sastry Pendyala, EY", img: p6 },
  { name: "Laura Williams, U S Consulate General", img: p7 },
  { name: "Lekshmi Nair, NTT Data", img: p8 },
  { name: "Narsimha Rao Mannepalli, Ex-Infosys", img: p9 },
  { name: "Prashanth Nandella, President, HYSEA", img: p10 },
  { name: "Rajanna V., TCS Ltd", img: p11 },
  { name: "Rajesh Dhuddu, PwC", img: p12 },
  { name: "Ramesh Loganathan, IIIT-H", img: p13 },
  { name: "Sailaja Josyula, Cognizant", img: p14 },
  { name: "Sandhya Ramesh, Mastech Digital", img: p15 },
  { name: "Sanjeev Jain, Wipro", img: p16 },
  { name: "Sravan Kumar Desikan,  AI", img: p17 },
  { name: "Somnath Chatterjee, Prismforce", img: p18 },
  { name: "Sridhar Sidhu, AT&T", img: p19 },
  { name: "Dr. Subbarao Pavuluri, Ananth Technologies", img: p20 },
  { name: "Valli Bollavaram, Swiss Re", img: p21 },
  { name: "Vekatesh Natarajan, Vanguard India", img: p22 },
  { name: "Vishal Salvi, Cognizant", img: p23 },
];
export default function Speakers() {
  useSEO({
    title: "Speakers | HYSEA Annual Summit & Awards 2026",
    description:
      "Meet the visionaries at the 33rd HYSEA Annual Summit 2026. Featuring an elite lineup of chief guests, dignitaries, and marquee speakers. Join the conversation shaping the future of global technology.",
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
  {/* Wrapper */}
  <div className="flex flex-col items-start">

    {/* Logo */}
    <img
      src={cognizant}
      alt="Cognizant Logo"
      className="w-32 h-auto mb-6 sm:w-40 md:w-48 lg:w-56 "
      
    />

    {/* 33rd Edition */}
    <div className="inline-flex items-center gap-2 rounded-[30px] bg-[#FFBB00] px-4 py-[6px] mb-4">
      <h3 className="text-[#0A2A73] text-sm font-semibold">
        33rd Edition | March 5, 2026 | Hyderabad
      </h3>
    </div>

    {/* Heading */}
    <h1 className="text-white text-[72px] font-medium leading-[0.92] tracking-[-0.72px] mb-3">
      Speakers
    </h1>

    {/* Description */}
    <p className="text-white mt-5 text-[18px] font-normal leading-[1.6] max-w-[640px] mb-6">
      Experience an exceptional lineup of distinguished experts and
      dignitaries as they explore the trends, breakthroughs, and bold
      ideas shaping the future.
    </p>

  </div>
</div>
          </div>

          {/* RIGHT IMAGE (desktop only) */}
          <div
            className="absolute -right-12 top-10 -z-10 w-1/2 h-full bg-no-repeat bg-[length:100%_auto] bg-center" 
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
          <div className="relative w-full h-[300px] sm:h-[630px]">
            <img
              src={rightImage}
              alt="Speakers"
              className="h-full w-full object-cover object-top"
            />
          </div>

          {/* MOBILE BACKGROUND LAYER (under content) */}
          <div
            className="
              absolute inset-0 z-0
              bg-no-repeat bg-cover
              bg-[position:center_220px] sm:bg-[position:center_430px] 
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
  {/* Wrapper */}
  <div className="flex flex-col items-start mt-24">

    {/* Logo */}
    <img
      src={cognizant}
      alt="Cognizant Logo"
      className="w-28 h-auto mb-4 sm:w-36 md:w-44"
  
    />

    {/* 33rd Edition */}
    <div className="inline-flex items-center gap-2 rounded-[30px] bg-[#FFBB00] px-4 py-[6px] mb-4">
      <h3 className="text-[#0A2A73] text-sm font-semibold">
        33rd Edition | March 5, 2026 | Hyderabad
      </h3>
    </div>

    {/* Heading */}
    <h1 className="text-white text-[40px] sm:text-[44px] font-medium leading-[1.06] tracking-[-0.72px] mb-3">
      Speakers
    </h1>

    {/* Description */}
    <p className="text-white mt-5 text-[15px] sm:text-[16px] font-normal leading-[1.6] max-w-[95%] sm:max-w-[92%] mb-6">
      Experience an exceptional lineup of distinguished experts and
      dignitaries as they explore the trends, breakthroughs, and bold
      ideas shaping the future.
    </p>

  </div>
</div>
        </div>
      </main>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 bg-white mt-2">
        <h2 className="text-center text-4xl md:text-6xl font-semibold text-[#0530A8] mb-10 sm:mb-10 md:mb-14 max-w-[900px] mx-auto">
          DISTINGUISHED GUESTS
        </h2>
         <div className="grid place-items-center justify-center gap-x-6 gap-y-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(5,auto)]">
          {distinguished_guests.map((guest, idx) => (
            <div key={idx} className="flex flex-col items-center self-start">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-lg  overflow-hidden shadow-sm">
  
                <img
                  src={guest.img}
                  alt={guest.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <p className="
  mt-3
  text-center
  text-sm md:text-base
  text-gray-700 font-medium
  min-h-[2.5rem]   
  leading-snug
">
                {guest.name}
              </p>
            </div>
          ))}
          </div>
       </div> 
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 bg-white ">
        <h2 className="text-center text-4xl md:text-6xl font-semibold text-[#0530A8] mb-10 sm:mb-10 md:mb-14 max-w-[900px] mx-auto">
          CHIEF GUESTS & DIGNITARIES OVER THE YEARS
        </h2>

        <div className="grid place-items-center justify-center gap-x-6 gap-y-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(5,auto)]">
          {chief_guests.map((guest, idx) => (
            <div key={idx} className="flex flex-col items-center self-start">
              <div className="w-38 h-38 sm:w-48 sm:h-48 md:w-52 md:h-52   overflow-hidden ">
                <img
                  src={guest.img}
                  alt={guest.name}
                  className="w-full h-full object-cover rounded-sm"
                  loading="lazy"
                />
              </div>

              <p className="
  mt-3
  text-center
  text-sm md:text-base
  text-gray-700 font-medium
  min-h-[2.5rem]   
  leading-snug
">
                {guest.name}
                {guest.organization}
              </p>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 bg-white">
          <h2 className="text-center text-4xl md:text-6xl font-semibold text-[#0530A8] mb-10 sm:mb-10 md:mb-14 max-w-[900px] mx-auto">
            MARQUEE SPEAKERS FROM PAST EDITIONS
          </h2>

          <div className="grid place-items-center justify-center gap-x-6 gap-y-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(5,auto)]">
            {speakers.map((spk, idx) => (
              <div key={idx} className="flex flex-col items-center self-start">
                <div className="w-38 h-38 sm:w-48 sm:h-48 md:w-52 md:h-52   overflow-hidden ">
                  <img
                    src={spk.img}
                    alt={spk.name}
                    className="w-full h-full object-cover rounded-sm"
                    loading="lazy"
                  />
                </div>

                <p className="
  mt-3
  text-center
  text-sm md:text-base
  text-gray-700 font-medium
  min-h-[2.5rem]   
  leading-snug
">
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
