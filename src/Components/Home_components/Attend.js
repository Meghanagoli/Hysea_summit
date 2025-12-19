import React from "react";
import attendBg from "../../assets/bg.webp"; 

const tags = [
  "CXOs",
  "Policy Makers",
  "Tech Leaders",
  "GCCs",
  "Academicians",
  "Startups",
 
  "Center Heads",
  "Decision Makers",
  "IT/ITES Professionals",
];

const Attend = () => {
  return (
    <section
      className="w-full max-w-9xl px-4 md:px-6 py-16 md:py-28 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${attendBg})` }}
    >
      <div className="max-w-[1100px] mx-auto text-center px-6 text-white">

        <h2 className="text-4xl md:text-6xl font-semibold tracking-wide mb-6">
          WHO SHOULD ATTEND
        </h2>

        <p className="text-sm md:text-[17px] leading-relaxed max-w-[900px] mx-auto opacity-95">
          Be part of the HYSEA Annual Summit, where Intelligence Everywhere shapes the future. The Summit attracts a broad cross-section of the technology ecosystem, enabling multi-faceted networking.
         Build and diversify
          your network by engaging with forward-thinking senior IT executives who are leading the
          new era of transformation.
        </p>

        <h3 className="text-3xl md:text-4xl font-semibold mt-2 mb-10">
          
        </h3>

        <div className="flex flex-wrap justify-center gap-4 md:gap-4 max-w-[900px] mx-auto">
          {tags.map((tag) => (
            <div
              key={tag}
              className="px-6 py-3 border border-white rounded-full text-sm md:text-base font-medium whitespace-nowrap"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attend;
