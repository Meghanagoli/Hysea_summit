import React from "react";
import award_img from "../assets/award_img.png";

const Awards = () => {
  return (
    <div>
    <section
     className="
    w-full
    bg-no-repeat
    lg:bg-right
    bg-cover
    bg-center
    leading-none

    h-full
  "
      style={{ backgroundImage: `url(${award_img})`, marginTop:80 }}
    >
      {/* Content wrapper */}
      <div
        className="
          relative
          z-10
          h-full
          max-w-[1400px]
          mx-auto
          px-5
          sm:px-8
          md:px-12
          lg:px-16
          flex
          items-center
        "
      >
        {/* LEFT TEXT BLOCK */}
        <div
          className="
            w-1/2 
            text-white
            py-20
          "
        >
          {/* Yellow pill */}
          <span
            className="
              inline-block
              bg-[#FFC72C]
              text-[#0B2B6D]
              text-xs
              sm:text-sm
              font-semibold
              px-4
              py-1.5
              rounded-full
              mb-6
            "
          >
            HYSEA Annual Summit & Awards 2026
          </span>

          {/* Title */}
          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-semibold
              leading-tight
              mb-6
            "
          >
            Awards
          </h1>

          {/* Description */}
          <p
            className="
              text-sm
              sm:text-base
              md:text-lg
              leading-relaxed
              text-white/90
              mb-8
            "
          >
            Over the years, the HYSEA Awards have become a hallmark of
            excellence, spotlighting some of the most innovative ventures
            in the tech space. Products recognized through these awards
            have achieved remarkable success, gaining invaluable exposure
            to investors, industry leaders, and strategic partners.
          </p>

          {/* Button */}
          <button
            className="
              border
              border-white
              text-white
              px-6
              py-2.5
              rounded-md
              text-sm
              sm:text-base
              hover:bg-white
              hover:text-[#0B2B6D]
              transition
            "
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
    
</div>
  );
};

export default Awards;