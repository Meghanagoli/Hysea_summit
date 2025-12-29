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
   gap-y-10 md:gap-y-12 lg:gap-y-18
   gap-x-4 sm:gap-x-6 md:gap-x-6 lg:gap-x-10

      place-items-center
    `}
        >
            {logos.map((logo, i) => {
                const isLast = centerLastOnMobile && i === logos.length - 1;

                return (
                    <div
                        className={`
    w-40 sm:w-44 md:w-48 lg:w-44
    aspect-square
    flex items-center justify-center
    logo-shadow
    ${isLast ? "col-span-2 sm:col-span-1 justify-self-center" : ""}
  `}
                    >
                        <img
                            src={logo}
                            alt="partner logo"
                            className="w-full h-full object-contain"
                        />
                    </div>

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
                                    33rd Edition | March 5, 2026 | Hyderabad                                </h3>
                            </div>

                            <h1 className="text-white text-[72px] font-medium leading-[0.92] tracking-[-0.72px] mb-3">
                                Partners
                            </h1>
                            <p className="text-white mt-5 text-[18px] font-normal leading-[1.6] max-w-[640px]">
                                <span className="block mb-4">
                                    HYSEA's Annual Summit is India's premier technology leadership event,
                                    attracting over 1,000 delegates and 100+ speakers from industry,
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
                                33rd Edition | March 5, 2026 | Hyderabad                            </h3>
                        </div>

                        <h1 className="text-white text-[40px] sm:text-[44px] font-medium mb-3">
                            Partners
                        </h1>

                        <p className="text-white text-[15px] sm:text-[16px] leading-[1.6]">
                            <span className="block mb-4">
                                HYSEA's Annual Summit is India's premier technology leadership event,
                                attracting over 1,000 delegates and 100+ speakers from industry,
                            </span>

                        </p>
                    </div>
                </div>



            </main>
            <section className="bg-white ">
                <div className="max-w-6xl mx-auto  px-4 sm:px-6 lg:px-8 py-16">



                    <section className="py-20 lg:py-24">
                        <h2 className="text-center text-4xl md:text-6xl font-semibold text-[#0530A8] mb-16">
                            INDUSTRY PATRONS
                        </h2>

                        <LogoGridPlain
                            logos={industryPatrons}
                            cols="grid-cols-2 lg:grid-cols-4"
                        />

                    </section>


                    <section className="py-20 lg:py-24">
                        <h2 className="text-center text-4xl md:text-6xl font-semibold text-[#0530A8] mb-16">
                            ECOSYSTEM PATRONS
                        </h2>

                        <LogoGridPlain logos={ecosystemPatrons} cols="grid-cols-2 sm:grid-cols-3" centerLastOnMobile />
                    </section>

                    <section className="py-20 lg:py-24">
                        <h2 className="text-center text-4xl md:text-6xl font-semibold text-[#0530A8] mb-16">
                            OUTREACH PARTNERS
                        </h2>


                        <div className="block md:hidden">
                            <LogoGridPlain
                                logos={[...outreachRow1, ...outreachRow2]}
                                cols="grid-cols-2"
                                centerLastOnMobile
                            />
                        </div>
                        {/* DESKTOP */}
                        <div className="hidden md:grid grid-cols-10 gap-x-16 gap-y-16 place-items-center">

                            <img src={tHub} className="col-span-2 col-start-1 w-56 md:w-64 lg:w-44

 object-contain logo-shadow" />
                            <img src={tie} className="col-span-2 col-start-3 w-40 sm:w-44 md:w-56 lg:w-44
 object-contain logo-shadow" />
                            <img src={ce} className="col-span-2 col-start-5 w-40 sm:w-44 md:w-56 lg:w-44
 object-contain logo-shadow" />
                            <img src={tgic} className="col-span-2 col-start-7 w-40 sm:w-44 md:w-56 lg:w-44
 object-contain logo-shadow" />
                            <img src={t10x} className="col-span-2 col-start-9 w-40 sm:w-44 md:w-48 lg:w-44
 object-contain logo-shadow" />
                            <img src={math} className="col-span-2 col-start-2 w-40 sm:w-44 md:w-48 lg:w-44
 object-contain logo-shadow" />
                            <img src={haa} className="col-span-2 col-start-4 w-40 sm:w-44 md:w-48 lg:w-44
 object-contain logo-shadow" />
                            <img src={succeed} className="col-span-2 col-start-6 w-40 sm:w-44 md:w-48 lg:w-44
 object-contain logo-shadow" />
                            <img src={silverneedle} className="col-span-2 col-start-8 w-40 sm:w-44 md:w-48 lg:w-44
 object-contain logo-shadow" />

                        </div>


                    </section>

                    <span className="block text-[#0530A8] text-center font-semibold text-lg">
                        For all summit partnership/sponsorship queries, write to coo@hysea.in
                    </span>

                </div>
            </section>

            <Footer />
        </section>
    )

}
export default Partners;