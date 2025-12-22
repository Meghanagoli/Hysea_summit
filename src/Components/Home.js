import React, { useEffect } from "react";
import { useSEO } from "./useSEO";
import Navbar from "./Navbar";
import HeroPage from "./Home_components/HeroPage";
import What_to_expect from "./Home_components/What_to_expect";
import About from "./Home_components/About";
import Attend from "./Home_components/Attend";
import WhyAttend from "./Home_components/Why_Attend";
import RegistrationSection from "./Home_components/Pricing";
import Footer from "./Footer";

const Home = () => {
  useSEO({
    title: "HYSEA Annual Summit & Awards 2026",
    description:
      "HYSEA’s 33rd Annual Summit brings 1,200+ leaders together for keynotes, masterclasses, innovation showcases, awards, and unmatched tech networking.",
  });
  return (
    <section>



      <Navbar />
      <HeroPage />
      <What_to_expect />
      <About />
      <WhyAttend />
      <Attend />
      <RegistrationSection />
      <Footer />
    </section>
  );
};

export default Home;
