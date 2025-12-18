import React from "react";
import Footer from "./Footer.js"
import heroLeftBg from "../assets/hero-left-bg.webp";
import heroLeftBgMobile from "../assets/hero-left-bg-mobile.webp";
import rightImage from "../assets/awards_img.webp"
import a1 from "../assets/a1.svg"
import a2 from "../assets/a2.svg"
import a3 from "../assets/a3.svg"
import c1 from "../assets/c1.webp"
import c2 from "../assets/c2.webp"
import c3 from "../assets/c3.webp"
import c4 from "../assets/c4.webp"
import c5 from "../assets/c5.webp"
import c6 from "../assets/c6.webp"
import c7 from "../assets/c7.webp"
import c8 from "../assets/c8.webp"
import c9 from "../assets/c9.webp"
import c10 from "../assets/c10.webp"
import c11 from "../assets/c11.webp"
import awards1 from "../assets/awards1.webp"
import awards2 from "../assets/awards2.webp"

const Awards = () => {
  return (
    <section className="w-full">
      
           <main className="relative w-full py-[px]  overflow-clip bg-transparent">
                  <div
                    className="
                w-[400px] lg:w-[65%]
                min-h-[440px] lg:min-h-[544px]
                px- lg:px-5          
                bg-no-repeat bg-cover bg-right-top
              "
                    style={{ backgroundImage: `url(${heroLeftBg})` }}
                  >
                    <div className="lg:hidden relative w-[600px] h-[300px] sm:h-[330px]">
                      <img
                        src={rightImage}
                        alt="Speakers"
                        className="h-full w-full object-cover object-right"  
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
                        Awards
                      </h1>
            
                      <p className="text-white mt-5 text-[15px] sm:text-[16px] lg:text-[18px] font-normal leading-[1.6] max-w-[95%] sm:max-w-[92%] lg:max-w-[640px] mb-6">
           Over the years, the HYSEA Awards have become a hallmark of excellence,
           spotlighting some of the most innovative ventures in the tech space. Products recognized through these awards have achieved remarkable success, gaining invaluable exposure to investors, industry leaders, and strategic partners.    
            </p>
            
    <a
  href="https://hysea.accubate.app/ext/form/12107/1/apply"
  target="_blank"
  rel="noopener noreferrer"
                  className="
                    w-[190px] h-[43px]
                    border-[1.5px] border-white
                    rounded-[4px]
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
            
                  <div
                    className="absolute right-0 top-0 -z-10 w-full lg:w-1/2 pb-6 h-full bg-no-repeat bg-cover bg-left"
                    style={{ backgroundImage: `url(${rightImage})` }}
                    aria-hidden="true"
                  />
            
                  <div className="block lg:hidden pb-[0%] pt-[0%]" aria-hidden="false" />
                </main>
  <div className="mx-auto max-w-7xl w-full">

    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center">
      <div className="block md:block w-full h-full object-cover bg-no-repeat  md:object-center" style={{ backgroundImage: `url(${awards1})` }}>
      </div>
      <div className="bg-white max-w-3xl mx-auto px-6 sm:px-10 md:px-16 py-12 md:py-16 text-center">
        <h2 className="text-[#0530A8] text-3xl sm:text-5xl md:text-6xl font-semibold tracking-wide uppercase mb-6">
          About the Awards
        </h2>
        <p className="text-black text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-4">
          The awards process involves several rounds of shortlisting based on key
          evaluation parameters that assess the strength of the product and its
          potential in the market.
        </p>
        <p className="text-black text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          The shortlisting process will be administered by industry experts such as
          technocrats, product leaders, business leaders, and investors. Evaluations
          also include product presentations and demos.
        </p>
      </div>
       <div className="block md:block w-full h-full object-cover bg-no-repeat md:object-center" style={{ backgroundImage: `url(${awards2})` }}>
      </div>
    </div>
  </div>
      
    <div className=" h-[4px] w-full  bg-[#0A3AA8]" />

    <section className="w-full bg-white">
  <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px]">

    <div className="bg-white px-6 sm:px-10 md:px-14 py-24 md:py-30">
      <h2 className="text-[#0530A8] text-4xl sm:text-5xl md:text-6xl mt-2 sm:mt-4 font-semibold uppercase tracking-wide">
        Why Nominate
      </h2>
      <p className="text-black-700 text-base sm:text-lg max-w-3xl mt-10">
        In the past ten-plus years, Product owners have found the opportunity to gain:
      </p>

      <div className="space-y-10 max-w-3xl mt-12 sm:mt-14">
       
      <div className="border border-gray-300 rounded-xl px-6 sm:px-8 py-6 sm:py-8 shadow-md">
  <div className="flex items-start gap-4">
    <img
      src={a1}         
      alt=""                      
      aria-hidden="true"
    />
    <p className="text-neutral-800 leading-relaxed text-left">
          Press coverage and exposure to innovation and tech ecosystem of researchers and corporations
    </p>
    </div>
  </div>

<div className="border border-gray-300 rounded-xl px-6 sm:px-8 py-6 sm:py-8 shadow-md">
  <div className="flex items-start gap-4">
    <img
      src={a2}         
      alt=""                      
      aria-hidden="true"
    />
    <p className="text-neutral-800 leading-relaxed text-left">
      Access to      Access to HYSEA programs at T-Hub, IIIT-H, and other incubators
    </p>
    </div>
  </div>

      
  <div className="border border-gray-300 rounded-xl px-6 sm:px-8 py-6 sm:py-8 shadow-md">
  <div className="flex items-start gap-4">
    <img
      src={a3}         
      alt=""                      
      aria-hidden="true"
    />

    <p className="text-neutral-800 leading-relaxed text-left">
            At the Annual Summit, an opportunity for the finalists to showcase their product/solution to a wider audience at no cost
    </p>
    </div>
  </div>
      </div>
    </div>
<div className="bg-white block px-14 py-6 h-[360px] sm:h-[420px] md:h-[520px] lg:h-[800px] overflow-hidden">
  <div className="flex flex-col gap-4 animate-vertical-scroll hover:[animation-play-state:paused]">
    <div className="bg-[#d6d6d6] rounded-md h-48 w-full"><img src={c1} className="h-full w-full object-cover rounded-md"/></div>
    <div className="bg-[#d6d6d6] rounded-md h-48 w-full"><img src={c2} className="h-full w-full object-cover rounded-md"/></div>
    <div className="bg-[#d6d6d6] rounded-md h-48 w-full"><img src={c3} className="h-full w-full object-cover rounded-md"/></div>
    <div className="bg-[#d6d6d6] rounded-md h-48 w-full"><img src={c4} className="h-full w-full object-cover rounded-md"/></div>
    <div className="bg-[#d6d6d6] rounded-md h-48 w-full"><img src={c5} className="h-full w-full object-cover rounded-md"/></div>
    <div className="bg-[#d6d6d6] rounded-md h-48 w-full"><img src={c6} className="h-full w-full object-cover rounded-md"/></div>
    <div className="bg-[#d6d6d6] rounded-md h-48 w-full"><img src={c7} className="h-full w-full object-cover rounded-md"/></div>
    <div className="bg-[#d6d6d6] rounded-md h-48 w-full"><img src={c8} className="h-full w-full object-cover rounded-md"/></div>
    <div className="bg-[#d6d6d6] rounded-md h-48 w-full"><img src={c9} className="h-full w-full object-cover rounded-md"/></div>
    <div className="bg-[#d6d6d6] rounded-md h-48 w-full"><img src={c10} className="h-full w-full object-cover rounded-md"/></div>
    <div className="bg-[#d6d6d6] rounded-md h-48 w-full"><img src={c11} className="h-full w-full object-cover rounded-md"/></div>

  </div>
</div>

  </div>
</section>


<section className="w-full bg-[#002F76] text-white">
  <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
    <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide">
      AWARD CATEGORIES
    </h2>
 <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="rounded-md border border-white/90 p-8 ">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center">10x STARTUP AWARDS</h3>
        <p className="text-sm sm:text-base mb-4">
          Is your startup building market confidence? <br/>This is your moment to shine, scale, and stand out.
        </p>

        <h4 className="font-bold mb-2">Why Nominate Your Product?</h4>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>High-value press visibility</li>
          <li>Access to top enterprise leaders and catalyst programs (T-Hub, IIIT-H, etc.)</li>
          <li>HYSEA &amp; TiE Hyderabad memberships</li>
          <li>Referrals to VCs &amp; angel networks</li>
          <li>A free showcase slot for finalists at the HYSEA Annual Summit and so much more!</li>
        </ul>

        <h4 className="font-semibold mt-4 mb-2">Who Can Apply?</h4>
        <p className="text-sm sm:text-base">
          Startups incorporated in Telangana with a market-ready product and customer traction.
        </p>
      </div>

      <div className="rounded-md border border-white/90 bg- p-8 ">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center">TECH PRODUCT AND INNOVATION AWARDS</h3>
        <p className="text-sm sm:text-base mb-4">
          It’s time to spotlight the most impactful products and breakthrough innovations built in Telangana’s thriving tech ecosystem.
        </p>

        <h4 className="font-semibold mb-2">Why Nominate Your Product?</h4>
        <ul className="list-disc list-inside text-sm sm:text-base space-y-1">
          <li>Visibility across the innovation ecosystem with researchers, corporates &amp; tech leaders</li>
          <li>Access to HYSEA programs in partnership with T-Hub, IIIT-H &amp; leading incubators</li>
          <li>A chance for finalists to showcase their product at the HYSEA Annual Summit completely free</li>
        </ul>

        <h4 className="font-semibold mt-4 mb-2">Who Can Apply?</h4>
        <p className="text-sm sm:text-base">
          Products/platforms that are already in the market and built by established companies.<br/> (Idea-stage tech is eligible only with a granted patent.)
        </p>
      </div>
    </div>

  
    

    <p className="mt-20 text-center text-m sm:text-lg text-white/80">
      Sign up for the 10x Startup and Tech Product &amp; Innovation Awards below.
       </p>
      
<div className="mt-8 text-center">

<a
  href="https://hysea.accubate.app/ext/form/12107/1/apply"
  target="_blank"
  rel="noopener noreferrer"
    className="
      inline-flex items-center justify-center
      px-8 py-3
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
    
<Footer/>
    </section>
  );
};

export default Awards;


   
