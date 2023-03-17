import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import useMobileScreen from "./hooks/useMobileScreen";
import { useDispatch } from "react-redux";
import { isMobile } from "./features/mobile-screen/mobileScreenSlice";
import Hero from "./components/Hero";
import Located from "./components/Located";
import Blogs from "./components/Blogs";
import Highlight from "./components/Highlight";
import Tables from "./components/Tables";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";
import Testomonials from "./components/Testomonials";

const App = () => {
  const dispatch = useDispatch();
  const width = useMobileScreen();
  console.log();
  useEffect(() => {
    dispatch(isMobile(width));
  }, [width]);
  return (
    <>
      <Navbar />
      <Hero />
      <Located />
      <Highlight />
      <CallToAction title={"Call Us Today"} />
      <Tables />
      <Gallery />
      <Blogs />
      {/* <Testomonials /> */}
      <Footer />
    </>
  );
};

export default App;
