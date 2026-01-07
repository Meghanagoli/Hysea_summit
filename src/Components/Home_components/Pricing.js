import React from "react";
import venueImg from "../../assets/venue.png";
import pricingbg from "../../assets/pricing_bg.png";

const Pricing = () => {
  return (
    <section
      className="w-full py-20"
      style={{
        backgroundImage: `url(${pricingbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-9xl px-4 sm:px-6 md:px-10 mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">

          {/* Event Signup — vertically centered with map */}
          <div className="flex items-center">
            <div
              className="bg-white rounded-xl px-8 py-6 w-full max-w-[420px]"
              style={{ boxShadow: "0px 8px 24px rgba(5,48,168,0.12)" }}
            >
              <h3 className="text-[#0530A8] text-2xl font-semibold mb-2">
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

              <div className="flex justify-between mb-2">
                <span className="font-medium text-[#0530A8] text-base">
                  Delegate Fee:
                </span>
                <div>
                  <span className="line-through text-#202020 text-sm mr-2">₹8,499</span>
                  <span className="font-medium text-xl text-[#0530A8]">₹6,499</span>
                </div>
              </div>

              <p className="text-sm text-black-400 mb-6">
                Will have access to the Conference & Expo
              </p>

              <button className="bg-[#0530A8] text-white px-6 py-2 rounded-md">
                Register Now
              </button>
            </div>
          </div>

          {/* Map */}
          <div
            className="rounded-xl overflow-hidden"
            style={{
              border: "3px solid white",
              boxShadow: " 0px 4px 64px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            <iframe
              className="w-full h-[334px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7611.463719863719!2d78.37104772412594!3d17.47254345034845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb922dedfac813%3A0xe3675c0e78567be0!2sHYDERABAD%20INTERNATIONAL%20CONVENTION%20CENTRE-HICC%2C%20Izzathnagar%2C%20Hyderabad%2C%20Kothaguda%2C%20Telangana%20500084%2C%20India!5e0!3m2!1sen!2sus!4v1765862010707!5m2!1sen!2sus"
              loading="lazy"
              allowFullScreen
              title="Map"
            />
          </div>

           


<div
  className="w-full rounded-xl overflow-hidden h-[334px]"
  style={{
    boxShadow: "0px 2px 64px 0px rgba(0, 0, 0, 0.08)",
    backgroundImage: `url(${venueImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
/>




          <div className="flex items-center justify-end">
            <div
              className="bg-white rounded-xl px-10 py-8 w-full max-w-[571px]"
              style={{ boxShadow: "0px 4px 64px 0px rgba(0, 0, 0, 0.08)" }}
            >
              <h3 className="text-[#0530A8] font-semibold mb-2 text-2xl">
                VENUE
              </h3>
              <p className="font-sm">HICC, Hyderabad</p>
              <p className="text-sm text-black-400 mt-2">
                Novotel & HICC Complex, Near HITEC City, P.O Bag 1101, Cyberabad Post Office, Hyderabad - 500 081, India,
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;