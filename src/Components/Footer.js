import React from "react";

import footerBg from "../assets/bg.webp";
import logo from "../assets/footer_logo.webp";
import iconFacebook from "../assets/fb.svg";
import iconInstagram from "../assets/instagram.svg";
import iconLinkedIn from "../assets/linkedin.svg";

const Footer = () => {
  return (
    <footer
      className="w-full bg-cover bg-center bg-no-repeat py-3 md:py-4"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="mx-auto max-w-9xl px-4 sm:px-6 md:px-12 ">

        <div className="flex items-center justify-between md:hidden">
          <img
            src={logo}
            alt="HYSEA"
            className="h-10 object-contain"
          />
          <div className="flex flex-col items-end gap-2">

            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/Official.HYSEA/" target="_blank" rel="noopener noreferrer">
                <img src={iconFacebook} className="w-6 h-6" alt="fb" />
              </a>
              <a href="https://www.instagram.com/official.hysea/" target="_blank" rel="noopener noreferrer">
                <img src={iconInstagram} className="w-6 h-6" alt="ig" />
              </a>
              <a href="https://www.linkedin.com/company/hysea/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <img src={iconLinkedIn} className="w-6 h-6" alt="li" />
              </a>
            </div>
            <a href="https://www.hysea.in" target="_blank" rel="noopener noreferrer" className="text-xs text-white/90 hover:text-white">
              www.hysea.in
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-between">
          <img
            src={logo}
            alt="HYSEA"
            className="h-14 object-contain"
          />

          <div className="flex flex-col items-end gap-2">
            <div className="flex gap-4">
              <a href="https://www.facebook.com/Official.HYSEA/" target="_blank" rel="noopener noreferrer">
                <img src={iconFacebook} className="w-6 h-6" alt="fb" />
              </a>
              <a href="https://www.instagram.com/official.hysea/" target="_blank" rel="noopener noreferrer">
                <img src={iconInstagram} className="w-6 h-6" alt="ig" />
              </a>
              <a href="https://www.linkedin.com/company/hysea/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <img src={iconLinkedIn} className="w-6 h-6" alt="li" />
              </a>
            </div>

            <a
              href="https://www.hysea.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/90 hover:text-white"
            >
              www.hysea.in
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer; 