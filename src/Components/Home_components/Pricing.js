import React from "react";

const Pricing = () => {
  return (
    <section id="register" className="bg-white">
      <div className="mx-auto max-w-9xl px-4 sm:px-6 md:px-12 py-16 md:py-28">
        <h2 className="text-[#0530A8] text-[40px] sm:text-[48px] md:text-[52px] lg:text-[58px] font-semibold">
          EVENT SIGNUP
        </h2>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start px-2">
          <div className="order-1 lg:order-1">
            <div aria-hidden={true}>
              <div className="pb-3 sm:pb-4">
                <p className="text-[#0530A8] font-light italic text-[14px] sm:text-[15px] md:text-[16px]">
                  Early bird offer
                </p>
              </div>

              <div className="border-b border-gray-200 pb-5 mb-5">
                <div className="flex items-baseline justify-between gap-3 sm:gap-4">
                  <h3 className="text-[#0530A8] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px] font-semibold">
                    Delegate Fee:
                  </h3>
                  <div className="flex items-baseline gap-2 sm:gap-3">
                    <span className="line-through font-light text-[16px] sm:text-[18px] md:text-[20px] text-black">
                      ₹8,499
                    </span>
                    <span className="text-black text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold">
                      ₹6,499
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-[14px] sm:text-[15px] md:text-[16px] font-normal text-black leading-relaxed">
                  Will have access to the Conference and Expo.
                </p>
              </div>


              <div className="mt-6 md:flex md:justify-center lg:justify-start flex justify-center">
                <a
                  href="https://hyseaevents.zohobackstage.in/hyseaannualsummit2026#/tickets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-[#1E60D9] px-4 md:px-5 py-2 text-white text-[14px] sm:text-[15px] md:text-[16px] font-semibold hover:bg-[#154abd] transition"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>


          <div className="order-2 lg:order-2 -mt-6 md:mt-12 md:flex md:justify-center mt-5">
            <div className="border-2 border-[#0530A8] overflow-hidden w-full sm:w-[420px] md:w-[450px] h-[200px] sm:h-[280px] md:h-[320px] ml-auto md:ml-0 lg:max-w-none bg-gray-50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7611.463719863719!2d78.37104772412594!3d17.47254345034845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb922dedfac813%3A0xe3675c0e78567be0!2sHYDERABAD%20INTERNATIONAL%20CONVENTION%20CENTRE-HICC%2C%20Izzathnagar%2C%20Hyderabad%2C%20Kothaguda%2C%20Telangana%20500084%2C%20India!5e0!3m2!1sen!2sus!4v1765862010707!5m2!1sen!2sus"
                className="w-[460px] h-[420px] border-0 rounded-lg shadow-lg"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;