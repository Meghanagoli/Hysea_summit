import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import footerBg from "../assets/bg.webp"
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md"
      style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="w-full ">

        <div className="mx-auto max-w-9xl px-4 sm:px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" aria-label="Home">
              <img src={logo} alt="HYSEA" className="h-8 md:h-10 object-contain" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center w-full">
            <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6 text-white text-sm md:text-base">
              <Link to="/" className="hover:underline">Overview</Link>
              <Link to="/2026/sessions" className="hover:underline">Sessions</Link>
              <Link to="/2026/speakers" className="hover:underline">Speakers</Link>
              <Link to="/2026/exhibition" className="hover:underline">Exhibition</Link>
              <Link to="/2026/awards" className="hover:underline">Awards</Link>
              <Link to="/2026/partners" className="hover:underline">Partners</Link>
            </nav>
            <div className="ml-auto">
              <a
                href="https://hyseaevents.zohobackstage.in/hyseaannualsummit2026#/tickets"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-white px-4 md:px-5 py-2 text-sm font-semibold text-[#002F76] shadow-sm hover:bg-gray-100">
                Register Now
              </a>
            </div>
          </div>

          <button
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white"
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-[#14328D] w-full px-4 pb-4">
            <nav className="flex flex-col gap-3 text-white text-base">
              <Link to="/" onClick={() => setOpen(false)} className="py-2 hover:underline">
                Overview
              </Link>
              <Link to="/2026/sessions" onClick={() => setOpen(false)} className="py-2 hover:underline">
                Sessions
              </Link>
              <Link to="/2026/speakers" onClick={() => setOpen(false)} className="py-2 hover:underline">
                Speakers
              </Link>
              <Link to="/2026/exhibition" onClick={() => setOpen(false)} className="py-2 hover:underline">
                Exhibition
              </Link>
              <Link to="/2026/awards" onClick={() => setOpen(false)} className="py-2 hover:underline">
                Awards
              </Link>
              <Link to="/2026/partners" onClick={() => setOpen(false)} className="py-2 hover:underline">
                Partners
              </Link>


              <div className="pt-2">
                <a
                  href="https://hyseaevents.zohobackstage.in/hyseaannualsummit2026#/tickets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-md bg-white px-4 md:px-5 py-2 text-sm font-semibold text-[#002F76] shadow-sm hover:bg-gray-100"
                >
                  Register Now
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;