import { useSEO } from "./useSEO";
import Footer from "../Components/Footer";

import heroLeftBg from "../assets/hero-left-bg.webp";
import heroLeftBgMobile from "../assets/hero-left-bg-mobile.webp";
import rightImage from "../assets/sessions_img.webp";
import sessionsBg from "../assets/sessions_bg.webp";
import session1 from "../assets/session1.webp";
import session2 from "../assets/session2.webp";
import session3 from "../assets/c12.webp";
import agendaImg from "../assets/agenda.webp"
import agendaPdf from "../assets/agenda.pdf";

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
                                Discover how AI and emerging technologies are transforming industries through responsible innovation, secure digital transformation, and human–AI collaboration,
                                equipping leaders with insights to stay competitive and future-ready.
                            </p>


                        </div>
                    </div>

                    {/* RIGHT IMAGE (desktop only) */}
                    <div
                        className="
    absolute right-0 top-4 md:top-20 -z-10
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
                            Discover how AI and emerging technologies are transforming industries through responsible innovation,
                            secure digital transformation, and human–AI collaboration, equipping leaders with insights to stay competitive and future-ready.
                        </p>


                    </div>
                </div>
                {/* =================== END MOBILE/TABLET =================== */}
            </main>
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
                <div className="relative max-w-9xl mx-auto px-5 sm:px-8 lg:px-12 space-y-24 lg:space-y-32">

                    <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] items-center gap-12">

                        <div className="flex justify-center lg:justify-end relative z-10 lg:pr-0">
                            <div className="max-w-[550px] w-full lg:pl-24">
                                <div
                                    className="bg-white/50 rounded-xl shadow-[0_4px_65px_8px_rgba(0,0,0,0.1) backdrop-blur-[54px] p-8 sm:p-10 lg:p-12 lg:-mr-28"
                                >
                                    <h3 className="text-[#155BE8] text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                                        THE CONFERENCE
                                    </h3>

                                    <p className="text-black/70 text-base leading-relaxed">
                                        Insightful keynotes and panel discussions exploring AI, emerging technologies, leadership, security, and transformation,
                                        offering strategic perspectives, real-world experiences, and future-ready thinking from industry leaders.
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
            lg:ml-2
          "
                            />
                        </div>
                    </div>

                    <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-center gap-12">

                        <div className="relative order-1 lg:order-none">
                            <img
                                src={session2}
                                alt=""
                                className="
            w-full
            h-[240px] sm:h-[320px] lg:h-[420px]
            object-cover
            rounded-lg
            lg:mr-22
            lg:-ml-2"
                            />
                        </div>

                        <div className="flex justify-center lg:justify-start relative z-10">
                            <div className="max-w-[700px] lg:max-w-[550px] w-full lg:pr-24">
                                <div className="bg-white/50 rounded-xl
              shadow-[0_4px_65px_8px_rgba(0,0,0,0.1)] backdrop-blur-[54px] p-8 sm:p-10 lg:p-12 lg:-ml-28"
                                >

                                    <h3 className="text-[#155BE8] text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                                        MASTERCLASSES
                                    </h3>

                                    <p className="text-black/70 text-base leading-relaxed">
                                        Deep-dive, hands-on sessions led by experts, focusing on practical applications, tools,
                                        and frameworks across AI, cloud, security, and innovation to build skills and drive real-world impact.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] items-center gap-12">

                        <div className="flex justify-center lg:justify-end relative z-10 lg:pr-0">
                            <div className="max-w-[700px] lg:max-w-[550px] w-full lg:pl-24">
                                <div
                                    className="
              bg-white/50 rounded-xl
              shadow-[0_4px_65px_8px_rgba(0,0,0,0.1)]
    backdrop-blur-[54px]
              p-8 sm:p-10 lg:p-12
              lg:-mr-28
            "
                                >

                                    <h3 className="text-[#155BE8] text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                                        AWARDS CEREMONY
                                    </h3>

                                    <p className="text-black/70 text-base leading-relaxed">
                                        An evening celebrating excellence and innovation, honoring outstanding organizations and leaders whose impact, vision,
                                        and achievements are shaping Hyderabad’s growth as a global technology and innovation hub.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src={session3}
                                alt=""
                                className="
            w-full
            h-[240px] sm:h-[320px] lg:h-[420px]
            object-cover
            rounded-lg
            lg:ml-2
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
                            HIGH LEVEL AGENDA
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
                            href={agendaPdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white underline text-md translate-y-10"
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