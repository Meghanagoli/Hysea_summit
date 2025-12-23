import React from "react";
import network from "../../assets/network.webp";
import leaders from "../../assets/leaders.webp";
import innovation from "../../assets/innovation.webp";
import bottomWave from "../../assets/bottom-wave.png";
import topWave from "../../assets/top-wave.png";
import attendBg from "../../assets/attend_bg.webp";
const Why_Attend = () => {
  return (
    <section className="relative">
      <section
        className="relative  px-4 md:px-6 py-16 lg:py-32 bg-cover bg-center"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(8px)",
        }}
      >
        <h1 className=" text-center text-[#0530A8] text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0530A8] mb-8">
          WHY ATTEND
        </h1>
        <div
          className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center
          items-stretch md:items-start
          justify-center
          gap-x-6 gap-y-10
          max-w-[1200px] mx-auto
        "
        >
          <Card
            ribbonSrc={network}
            title={"Expand Your\nNetwork"}
            subtitle="Connect with decision-makers, entrepreneurs, and technologists."
            statValue="1200+"
            statLabel="Delegates"
          />
          <Card
            ribbonSrc={leaders}
            title={"Engage with\nLeaders"}
            subtitle="Hear from industry stalwarts and global visionaries."
            statValue="200+"
            statLabel="Industry Leaders"
          />

          <Card
            ribbonSrc={innovation}
            title={"Explore\nInnovations"}
            subtitle="Witness the latest in AI, quantum computing, and digital transformation."
            statValue="200+"
            statLabel="Startups"
            className="col-span-1 md:col-span-2 lg:col-span-1"
          />
        </div>
      </section>
      <img
        src={bottomWave}
        className="
        absolute z-[-1]
        bottom-[-200px] left-[0px]
        w-[100%]
      "
      />

      <img
        src={topWave}
        className="
        absolute z-[-1]
        top-[0px] right-[-0px]
        w-[30%]
      "
      />
    </section>
  );
};

const Card = ({
  ribbonSrc,
  title,
  subtitle,
  statValue,
  statLabel,
  className,
}) => {
  return (
    <article
      className={`relative w-full min-w-[340px] w-[60vw] md:w-[340px] h-[450px] rounded-[12px] bg-white shadow-[0_8px_30px_rgba(15,23,42,0.10)] overflow-hidden ${className}`}
    >
      <img
        src={ribbonSrc}
        alt="Card ribbon"
        className="w-full"
        loading="lazy"
      />

      <h3
        className=" text-[#0f4fb3] px-6 mt-6 text-left text-4xl font-medium"
        style={{
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        }}
      >
        {title}
      </h3>

      <p
        className="text-left px-6 mt-6 text-lg font-regular"
        style={{
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        }}
      >
        {subtitle}
      </p>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[215px] h-[137px] overflow-hidden">
        <div className="absolute left-0 bottom-[-78px] w-[215px] h-[215px]  flex flex-col items-center justify-center shadow-[0_6px_18px_rgba(16,24,40,0.06)]">
          <div className="text-[#155BE8]  text-[40px] font-bold leading-[1] -translate-y-[20px]">
            {statValue}
          </div>
          <div className="text-[#155BE8] text-[24px] mt-[3px] leading-[1] -translate-x-[2px] -translate-y-[12px] pb-14 text-align-center">
            {statLabel}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Why_Attend;
