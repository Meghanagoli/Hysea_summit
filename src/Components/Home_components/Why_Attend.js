import React from 'react';
import network from '../../assets/network.webp';
import leaders from '../../assets/leaders.webp';
import innovation from '../../assets/innovation.webp';
import attendBg from "../../assets/attend_bg.webp"
const Why_Attend = () => {
  return (

    <section
      className="relative  px-4 md:px-6 py-16 md:py-28 bg-cover bg-center"
      style={{ backgroundImage: `url(${attendBg})` }}
    >

      <h1 className="relative z-10 text-center text-[#0530A8] text-[48px] md:text-[52px] font-semibold tracking-wide mb-8">
        WHY ATTEND
      </h1>


      <div className="relative z-10
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  items-stretch md:items-start
  justify-center
  gap-6 md:gap-[24px]
  max-w-[1200px] mx-auto"
      >
        <Card
          ribbonSrc={network}
          title={`Expand Your\nNetwork`}
          subtitle="Connect with decision-makers, entrepreneurs, and technologists."
          statValue="1200+"
          statLabel="Delegates"
        />
        <Card
          ribbonSrc={leaders}
          title={`Engage with\nLeaders`}
          subtitle="Hear from industry stalwarts and global visionaries."
          statValue="200+"
          statLabel="Industry Leaders"
        />
        <Card
          ribbonSrc={innovation}
          title={`Explore\nInnovations`}
          subtitle="Witness the latest in AI, quantum computing, and digital transformation."
          statValue="200+"
          statLabel="Startups"
        />
      </div>

    </section>
  );
};

const Card = ({ ribbonSrc, title, subtitle, statValue, statLabel }) => {
  return (
    <article className="relative w-full md:w-[340px] h-[448px] rounded-[12px] bg-white shadow-[0_8px_30px_rgba(15,23,42,0.10)] overflow-hidden">
      <div className="absolute left-0 right-0 top-0 h-[96px] rounded-t-[12px] overflow-hidden">
        <img src={ribbonSrc} alt="Card ribbon" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <h3
        className="whitespace-pre-line"
        style={{
          position: 'absolute',
          top: '124px',
          left: '24px',
          width: '321px',
          height: '96px',
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          fontWeight: 500,
          fontStyle: 'normal',
          fontSize: '40px',
          lineHeight: '120%',
          letterSpacing: '0',
          verticalAlign: 'middle',
          opacity: 1,
          color: '#0f4fb3',
        }}
      >
        {title}
      </h3>

      <p
        style={{
          position: 'absolute',
          top: '238px',
          left: '24px',
          width: '321px',
          height: '54px',
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          fontWeight: 300,
          fontStyle: 'normal',
          fontSize: '18px',
          lineHeight: '150%',
          letterSpacing: '0',
          verticalAlign: 'middle',
          opacity: 1,
          color: '#475569',
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