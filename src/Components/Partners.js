import { useSEO } from "./useSEO";
import heroLeftBg from "../assets/hero-left-bg.webp";
import heroLeftBgMobile from "../assets/hero-left-bg-mobile.webp";
import rightImage from "../assets/partners_img.png"
import broadbridge from "../assets/broadridge.png";
import servicenow from "../assets/servicenow.png";
import dbs from "../assets/DBS.png";
import realpage from "../assets/realpage.png";
import mindspace from "../assets/mindspace.png";
import icici from "../assets/icici.png";
import cyient from "../assets/Qcity.png";
import tHub from "../assets/thub.png";
import tie from "../assets/tie.png";
import ce from "../assets/ce.png";
import tgic from "../assets/tgic.png";
import t10x from "../assets/tg10x.png";
import math from "../assets/math.png";
import haa from "../assets/ha.png";
import succeed from "../assets/sucseed.png";
import silverneedle from "../assets/silverneedle.png";

import Navbar from "./Navbar";
import Footer from "./Footer";
const Partners = () => {
    useSEO({
        title: "Partners | HYSEA Annual Summit & Awards 2026",
        description:
            "As a HYSEA partner, you'll engage with a high-caliber audience of CEOs, tech founders, and government dignitaries. With over 1,000 delegates in attendance, the 33rd Annual Summit is your platform to build meaningful connections and showcase leadership in the tech space.",
    });
    const industryPatrons = [broadbridge, servicenow, dbs, realpage];

    const ecosystemPatrons = [mindspace, icici, cyient];

    const outreachRow1 = [tHub, tie, ce, tgic, t10x];
    const outreachRow2 = [math, haa, succeed, silverneedle];


    const LogoGridPlain = ({ logos, cols, centerLastOnMobile = false }) => (
        <div
            className={`
      grid ${cols}
      gap-y-12 gap-x-16
      place-items-center
    `}
        >
            {logos.map((logo, i) => {
                const isLast = centerLastOnMobile && i === logos.length - 1;

                return (
                    <img
                        key={i}
                        src={logo}
                        alt="partner logo"
                        className={`
            object-contain
            w-[160px] h-[80px]
            sm:w-[180px] sm:h-[80px]
            md:w-[300px] md:h-[180px]
            ${isLast ? "col-span-2 sm:col-span-1 justify-self-center" : ""}
          `}
                    />
                );
            })}
        </div>
    );



    return (
        <section className="w-full">
            <Navbar />
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
                            <div className="inline-flex lg:mt-24 items-center justify-center gap-2 rounded-[30px] bg-[#FFBB00] px-4 py-[6px] mb-4 mr-auto">
                                <h3 className="text-[#0A2A73] text-sm font-semibold">
                                    33rd HYSEA Annual Summit &amp; Awards 2026
                                </h3>
                            </div>

                            <h1 className="text-white text-[72px] font-medium leading-[0.92] tracking-[-0.72px] mb-3">
                                Partners
                            </h1>
                            <p className="text-white mt-5 text-[18px] font-normal leading-[1.6] max-w-[640px]">
                                <span className="block mb-4">
                                    HYSEA's Annual Summit is India's premier technology leadership event,
                                    attracting over 1,000 delegates and 100+ speakers from industry,
                                </span>

                                <span className="block">
                                    For all summit partnership/sponsorship queries, write to coo@hysea.in
                                </span>
                            </p>


                        </div>
                    </div>

                    {/* RIGHT IMAGE (desktop only) */}
                    <div
                        className="absolute -right-12 top-0 -z-10 w-1/2 h-full bg-no-repeat bg-cover bg-top "
                        style={{ backgroundImage: `url(${rightImage})` }}
                        aria-hidden="true"
                    />
                </div>
                {/* =================== END DESKTOP =================== */}

                <div className="block lg:hidden relative w-full overflow-hidden">

                    {/* TOP IMAGE */}
                    <div className="relative w-full h-[300px] sm:h-[330px] md:h-[360px]">
                        <img
                            src={rightImage}
                            alt="Partners"
                            className="h-full w-full object-cover object-top"
                        />
                    </div>

                    {/* CURVED BACKGROUND */}
                    <div
                        className="
      absolute left-0 right-0 bottom-0
   top-[120px] sm:top-[160px] md:top-[180px]
  min-h-[520px] sm:min-h-[560px]      z-0
      bg-no-repeat bg-cover bg-top
    "
                        style={{ backgroundImage: `url(${heroLeftBgMobile})` }}
                    />

                    {/* CONTENT */}
                    <div
                        className="
      relative z-10
      -mt-[140px] sm:-mt-[180px] md:-mt-[80px]
      px-5 pt-8 pb-12
      max-w-[720px] md:max-w-[860px] 
    "
                    >
                        <div className="inline-flex mt-16 sm:mt-20 md:mt-12 items-center rounded-[30px] bg-[#FFBB00] px-4 py-[6px] mb-4">
                            <h3 className="text-[#0A2A73] text-sm font-semibold">
                                33rd HYSEA Annual Summit &amp; Awards 2026
                            </h3>
                        </div>

                        <h1 className="text-white text-[40px] sm:text-[44px] font-medium mb-3">
                            Partners
                        </h1>

                        <p className="text-white text-[15px] sm:text-[16px] leading-[1.6]">
                            <span className="block mb-4">
                                HYSEA's Annual Summit is India's premier technology leadership event,
                                attracting over 1,000 delegates and 100+ speakers from industry,
                            </span>
                            <span className="block">
                                For all summit partnership/sponsorship queries, write to coo@hysea.in
                            </span>
                        </p>
                    </div>
                </div>



            </main>
            <section className="bg-white py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-5">

                    <h2 className="text-center text-[#0A2A73] font-semibold text-2xl md:text-5xl mb-10">
                        INDUSTRY PATRONS
                    </h2>

                    <LogoGridPlain
                        logos={industryPatrons}
                        cols="grid-cols-2 sm:grid-cols-4"
                    />


                    <h2 className="text-center text-[#0A2A73] font-semibold text-2xl md:text-5xl mt-20 mb-10">
                        ECOSYSTEM PATRONS
                    </h2>

                    <LogoGridPlain
                        logos={ecosystemPatrons}
                        cols="grid-cols-2 sm:grid-cols-3"
                        centerLastOnMobile
                    />


                    <h2 className="text-center text-[#0A2A73] font-semibold text-2xl md:text-5xl mt-20 mb-10">
                        OUTREACH PARTNERS
                    </h2>
                    {/*MOBILE */}

                    <div className="block md:hidden">
                        <LogoGridPlain
                            logos={[...outreachRow1, ...outreachRow2]}
                            cols="grid-cols-2"
                            centerLastOnMobile
                        />
                    </div>
                    {/* DESKTOP */}
                    <div className="hidden md:grid grid-cols-10 gap-x-16 gap-y-16 place-items-center">

                        <img src={tHub} className="col-span-2 col-start-1 object-contain w-[300px] h-[180px]" />
                        <img src={tie} className="col-span-2 col-start-3 object-contain w-[300px] h-[180px]" />
                        <img src={ce} className="col-span-2 col-start-5 object-contain w-[300px] h-[180px]" />
                        <img src={tgic} className="col-span-2 col-start-7 object-contain w-[300px] h-[180px]" />
                        <img src={t10x} className="col-span-2 col-start-9 object-contain w-[300px] h-[180px]" />

                        <img src={math} className="col-span-2 col-start-2 object-contain w-[300px] h-[180px]" />
                        <img src={haa} className="col-span-2 col-start-4 object-contain w-[300px] h-[180px]" />
                        <img src={succeed} className="col-span-2 col-start-6 object-contain w-[300px] h-[180px]" />
                        <img src={silverneedle} className="col-span-2 col-start-8 object-contain w-[300px] h-[180px]" />

                    </div>


                </div>
            </section>

            <Footer />
        </section>
    )

}
export default Partners;