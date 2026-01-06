import React from "react";
import venueImg from "../../assets/venue.png";
import pricingbg from "../../assets/pricing_bg.png";

const Pricing = () => {
  return (
    <section
      className="w-full py-20 blue-frame-container blue-frame-bg"
      style={{
        backgroundImage: `url(${pricingbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          {/* Event */}
          <div className="flex justify-center items-center">
            <div className="bg-white rounded-xl shadow-md px-8 py-6 max-w-[420px] w-full">
              <h3 className="text-[#0530A8] text-2xl font-semibold mb-3">
                EVENT SIGNUP
              </h3>
              <p className="text-[13px] italic text-gray-400 mb-3"> Early bird offer</p>

              <div className="flex justify-between mb-3">
                <span className="font-medium text-[#0530A8]">Delegate Fee:</span>
                <div>
                  <span className="line-through text-gray-400 mr-2">₹8,499</span>
                  <span className="font-bold text-lg text-[#0530A8]">₹6,499</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                Will have access to the Conference & Expo
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

          {/* Map - blue outlined card */}
          <div className="bg-white rounded-xl p-4 blue-outline-card">
            <div className="rounded-lg overflow-hidden border-2 border-[#0530A8] rounded-lg">
              <iframe
                className="w-full h-[260px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7611.463719863719!2d78.37104772412594!3d17.47254345034845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb922dedfac813%3A0xe3675c0e78567be0!2sHYDERABAD%20INTERNATIONAL%20CONVENTION%20CENTRE-HICC%2C%20Izzathnagar%2C%20Hyderabad%2C%20Kothaguda%2C%20Telangana%20500084%2C%20India!5e0!3m2!1sen!2sus!4v1765862010707!5m2!1sen!2sus"
                loading="lazy"
                allowFullScreen
                title="Map"
              />
            </div>
          </div>

          {/* Image */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={venueImg} className="w-full object-cover" alt="Venue" />
          </div>

          {/* Venue */}
          <div className="flex justify-center items-center">
            <div className="bg-white rounded-xl shadow-md px-8 py-6 max-w-[420px] w-full">
              <h3 className="text-[#0530A8] font-semibold mb-2 text-2xl">VENUE</h3>
              <p className="font-medium  text-[#0530A8]">HICC, Hyderabad</p>
              <p className="text-sm text-gray-600 py-2">
                Novotel & HICC Complex, Near HITEC City, P.O Bag 1101, Cyberabad Post Office,
                Hyderabad – 500081, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;