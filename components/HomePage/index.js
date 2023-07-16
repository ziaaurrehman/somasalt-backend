import About from "./About/About";
import Footer from "./Footer/Footer";
import HeroSection from "./HeroSection/HeroSection";
import JoinUs from "./JoinUs/JoinUs";
import HomeCard from "./WhatWeDo/HomeCard";

export default function index() {
  return (
    <>
      <HeroSection />
      <About />
      <JoinUs />
      <HomeCard />
      <Footer />
    </>
  );
}
