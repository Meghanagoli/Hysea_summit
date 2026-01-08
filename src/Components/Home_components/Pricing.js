import React from "react";
import venueImg from "../../assets/venue.png";
import pricingbg from "../../assets/pricing_bg.png";

const Pricing = () => {
  return (
    <section
      className="w-full py-16 sm:py-18 md:py-20"
      style={{
        backgroundImage: `url(${pricingbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 md:px-10">

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-12 gap-x-6 lg:gap-x-10">
          {/* Event Signup */}
          <div className="flex items-center">
            <div
              className="
                bg-white  w-full
                px-5 py-5
                sm:px-6 sm:py-6
                md:px-8 md:py-6 rounded-xl
              "
              style={{ boxShadow: "0px 8px 24px rgba(5,48,168,0.12)" }}
            >
              <h3
                className="
                  text-[#0530A8] font-semibold mb-2
                  text-xl sm:text-2xl
                "
              >
                EVENT SIGNUP
              </h3>

              <div className="flex justify-end mb-1">
                <span
                  style={{
                    fontWeight: 200,
                    fontStyle: "italic",
                    fontSize: "16px",
                    lineHeight: "160%",
                    color: "#202020",
                  }}
                >
                  Early bird offer
                </span>
              </div>

              <div className="flex justify-between items-baseline mb-3">
                <span className="font-medium text-[#0530A8] text-sm sm:text-base">
                  Delegate Fee:
                </span>
                <div className="flex items-center gap-2">
                  <span className="line-through text-[#202020] text-xs sm:text-sm">
                    ₹8,499
                  </span>
                  <span className="font-medium text-lg sm:text-xl text-[#0530A8]">
                    ₹6,499
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 mb-5">
                Will have access to the Conference &amp; Expo
              </p>

             <a
              href="https://hyseaevents.zohobackstage.in/hyseaannualsummit2026#/tickets"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#1E60D9] text-white px-4 sm:px-6 py-2 rounded-md">
                Register Now
              </button>
            </a>
            </div>
          </div>

          <div
            className="
               w-full
                h-[240px]
                sm:h-[280px]
                md:h-[334px]
                lg:h-[360px] rounded-xl overflow-hidden border-2 border-[#53A8FF]
            "
            style={{
              boxShadow: "0px 4px 64px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            <iframe
              className="
               w-full h-full border-0 
              "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7611.463719863719!2d78.37104772412594!3d17.47254345034845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb922dedfac813%3A0xe3675c0e78567be0!2sHYDERABAD%20INTERNATIONAL%20CONVENTION%20CENTRE-HICC%2C%20Izzathnagar%2C%20Hyderabad%2C%20Kothaguda%2C%20Telangana%20500084%2C%20India!5e0!3m2!1sen!2sus!4v1765862010707!5m2!1sen!2sus"
              loading="lazy"
              allowFullScreen
              title="Map"
            />
          </div>
        </div>
     
  
        <div className="mt-8 sm:mt-10 md:mt-12" />

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-12 gap-x-6 lg:gap-x-10">
        
          
<div
  className="
    w-full rounded-xl overflow-hidden
    h-[220px] sm:h-[280px] md:h-[334px] lg:h-[360px]
    bg-cover bg-center bg-no-repeat
    bg-transparent border-0 ring-0 outline-none
    shadow-sm md:shadow-md lg:shadow-[0_0_0_1px_rgba(0,0,0,0.12)]
  "
  style={{ backgroundImage: `url(${venueImg})` }}
/>


          {/* Venue Card */}
          <div className="flex items-center">
            <div
              className="
                bg-white rounded-xl w-full
                px-6 py-6
                sm:px-8 sm:py-7
                md:px-10 md:py-8
              "
              style={{ boxShadow: "0px 4px 64px 0px rgba(0, 0, 0, 0.08)" }}
            >
              <h3 className="text-[#0530A8] font-semibold mb-2 text-xl sm:text-2xl">
                VENUE
              </h3>
              <p className="text-sm sm:text-base font-medium">HICC, Hyderabad</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Novotel &amp; HICC Complex, Near HITEC City, P.O Bag 1101,
                Cyberabad Post Office, Hyderabad - 500 081, India,
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;