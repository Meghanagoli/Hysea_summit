import { useSEO } from "./useSEO";
import Footer from "../Components/Footer";

import heroLeftBg from "../assets/hero-left-bg.webp";
import heroLeftBgMobile from "../assets/hero-left-bg-mobile.webp";
import rightImage from "../assets/sessions_img.png";
import sessionsBg from "../assets/sessions_bg.png";
import session1 from "../assets/conf_img.png";
import agendaImg from "../assets/agenda.png"

const Sessions = () => {
    useSEO({
        title: "Sessions | HYSEA Annual Summit & Awards 2026",
        description:
            "Explore insightful sessions at the HYSEA Annual Summit & Awards 2026 featuring industry leaders, innovators, and visionaries.",
    });

    return (
        <section className="w-full">
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
                                    33rd Edition | March 5, 2026 | Hyderabad                </h3>
                            </div>

                            <h1 className="text-white text-[72px] font-medium leading-[0.92] tracking-[-0.72px] mb-3">
                                Sessions
                            </h1>

                            <p className="text-white mt-5 text-[17px] font-normal leading-[1.6] max-w-[640px] mb-6">
                                HYSEA’s Annual Summit is India’s premier technology leadership event, attracting over 1,000 delegates and 100+ speakers from industry,
                                government, academia, and startups. Now in its 33rd year, the Summit & Awards will be bigger, better and bolder.
                            </p>


                        </div>
                    </div>

                    {/* RIGHT IMAGE (desktop only) */}
                    <div
                        className="
    absolute right-0 top-4 md:top-10 -z-10
    w-1/2 h-full
    bg-no-repeat
    bg-[length:120%_auto]
  "
                        style={{ backgroundImage: `url(${rightImage})` }}
                        aria-hidden="true"
                    />
                </div>
                {/* =================== END DESKTOP =================== */}

                {/* ====================== MOBILE/TABLET (< lg) ====================== */}
                <div
                    className="
                       block lg:hidden
                       relative w-full
                       overflow-hidden
                     "
                >
                    {/* MOBILE TOP PHOTO */}
                    <div className="relative w-full h-[300px] sm:h-[330px]">
                        {" "}
                        <img
                            src={rightImage}
                            alt="Speakers"
                            className="h-full w-full object-cover object-right"
                        />
                    </div>

                    {/* MOBILE BACKGROUND LAYER (under content) */}
                    <div
                        className="
                         absolute inset-0 z-0
                         bg-no-repeat bg-cover
                         bg-[position:center_220px]
                       "
                        style={{ backgroundImage: `url(${heroLeftBgMobile})` }}
                        aria-hidden="true"
                    />

                    {/* CONTENT (above backgrounds) */}
                    <div
                        className="
                         relative z-10
                         -mt-[100px] px-5 pt-8 pb-12
                       "
                    >
                        <div className="inline-flex mt-24 items-center justify-center gap-2 rounded-[30px] bg-[#FFBB00] px-4 py-[6px] mb-4 mr-auto">
                            <h3 className="text-[#0A2A73] text-sm font-semibold">
                                33rd Edition | March 5, 2026 | Hyderabad              </h3>
                        </div>

                        <h1 className="text-white text-[40px] sm:text-[44px] font-medium leading-[1.06] tracking-[-0.72px] mb-3">
                            Sessions
                        </h1>

                        <p className="text-white mt-5 text-[15px] sm:text-[16px] font-normal leading-[1.6] max-w-[95%] sm:max-w-[92%] mb-6">
                            HYSEA’s Annual Summit is India’s premier technology leadership event, attracting over 1,000 delegates and 100+ speakers from industry,
                            government, academia, and startups.
                            Now in its 33rd year, the Summit & Awards will be bigger, better and bolder.
                        </p>


                    </div>
                </div>
                {/* =================== END MOBILE/TABLET =================== */}
            </main>
            {/* ====================== SESSIONS CONTINUATION ====================== */}
            <section
                className="
    relative w-full
    py-16 sm:py-20 lg:py-24
    overflow-hidden
    bg-no-repeat bg-cover
    bg-[center_-60px]
    lg:bg-[center_-90px]
  "
                style={{ backgroundImage: `url(${sessionsBg})` }}
            >
                {/* MAX WIDTH CONTAINER */}
                <div className="relative max-w-9xl mx-auto px-5 sm:px-8 lg:px-12 space-y-24 lg:space-y-32">

                    {/* ================= CARD 1 ================= */}
                    <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] items-center gap-12">

                        {/* CARD */}
                        <div className="flex justify-center lg:justify-end relative z-10 lg:pr-0">
                            <div className="max-w-[700px] w-full lg:pl-24">
                                <div
                                    className="
              bg-white rounded-xl
              shadow-[0_10px_40px_rgba(0,0,0,0.08)]
              p-8 sm:p-10 lg:p-12
             
              lg:-mr-28
            "
                                >
                                    <p className="text-sm font-semibold text-black mb-2">
                                        7:00 AM – 10:00 AM
                                    </p>

                                    <h3 className="text-[#155BE8] text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                                        THE CONFERENCE
                                    </h3>

                                    <p className="text-black/70 text-base leading-relaxed">
                                        Technology is at a pivotal inflection point. Artificial Intelligence
                                        is no longer evolving in isolation — it is co-advancing with
                                        quantum computing, advanced robotics, edge computing, synthetic data,
                                        autonomous systems, and next-generation cloud architectures.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* IMAGE */}
                        <div className="relative">
                            <img
                                src={session1}
                                alt=""
                                className="
            w-full
            h-[240px] sm:h-[320px] lg:h-[420px]
            object-cover
            rounded-lg
            lg:ml-8
          "
                            />
                        </div>
                    </div>

                    {/* ================= CARD 2 (FLIPPED) ================= */}
                    <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-center gap-12">

                        {/* IMAGE */}
                        <div className="relative order-1 lg:order-none">
                            <img
                                src={session1}
                                alt=""
                                className="
            w-full
            h-[240px] sm:h-[320px] lg:h-[420px]
            object-cover
            rounded-lg
            lg:mr-8
          "
                            />
                        </div>

                        {/* CARD */}
                        <div className="flex justify-center lg:justify-start relative z-10">
                            <div className="max-w-[700px] w-full lg:pr-24">
                                <div
                                    className="
              bg-white rounded-xl
              shadow-[0_10px_40px_rgba(0,0,0,0.08)]
              p-8 sm:p-10 lg:p-12
              lg:-ml-20
            "
                                >
                                    <p className="text-sm font-semibold text-black mb-2">
                                        1:00 PM – 4:00 PM
                                    </p>

                                    <h3 className="text-[#155BE8] text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                                        MASTERCLASSES
                                    </h3>

                                    <p className="text-black/70 text-base leading-relaxed">
                                        Technology is at a pivotal inflection point. Artificial Intelligence
                                        is no longer evolving in isolation — it is co-advancing with
                                        quantum computing, advanced robotics, edge computing, synthetic data,
                                        autonomous systems, and next-generation cloud architectures.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ================= CARD 3 ================= */}
                    <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] items-center gap-12">

                        {/* CARD */}
                        <div className="flex justify-center lg:justify-end relative z-10 lg:pr-0">
                            <div className="max-w-[700px] w-full lg:pl-24">
                                <div
                                    className="
              bg-white rounded-xl
              shadow-[0_10px_40px_rgba(0,0,0,0.08)]
              p-8 sm:p-10 lg:p-12
              lg:-mr-28
            "
                                >
                                    <p className="text-sm font-semibold text-black mb-2">
                                        4:00 PM – 10:00 PM
                                    </p>

                                    <h3 className="text-[#155BE8] text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                                        AWARDS CEREMONY
                                    </h3>

                                    <p className="text-black/70 text-base leading-relaxed">
                                        Technology is at a pivotal inflection point. Artificial Intelligence
                                        is no longer evolving in isolation — it is co-advancing with
                                        quantum computing, advanced robotics, edge computing, synthetic data,
                                        autonomous systems, and next-generation cloud architectures.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src={session1}
                                alt=""
                                className="
            w-full
            h-[240px] sm:h-[320px] lg:h-[420px]
            object-cover
            rounded-lg
            lg:ml-8
          "
                            />
                        </div>
                    </div>

                </div>
            </section>

            <section className="w-full bg-[#002F76] py-16 sm:py-20 lg:py-24">
                <div className="max-w-9xl mx-auto px-16 sm:px-20 lg:px-24">
                    <div className="bg-white rounded-2xl border border-blue-500 p-6 sm:p-10 lg:p-14">
                        <h2 className="text-center text-[#0530A8] text-2xl md:text-3xl lg:text-4xl font-semibold mb-8">
                            Event Agenda
                        </h2>
                        <div className="w-full">
                            <img
                                src={agendaImg}
                                alt="Event Agenda"
                                className="w-full h-auto object-contain"
                            />
                        </div>

                    </div>
                    <div className="flex justify-center items-center ">
                        <a
                            href="#"
                            className="text-white underline text-md  translate-y-10"
                        >
                            View detailed agenda here
                        </a>
                    </div>


                </div>
            </section>



            <Footer />
        </section>
    );
};

export default Sessions;