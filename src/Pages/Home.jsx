import React from "react";
import Hero from "../Component/Home/Hero";
import Help from "../Component/Home/Help";
import Journey from "../Component/Home/Journey";
import ProjectCarousel from "../Component/Home/ProjectCarousel";
import Technology from "../Component/Home/Technology";
import Touch from "../Component/Home/Touch";
import Para from "../Component/Home/Para";

function Home() {
  return (
    <>
      <Hero />
      <Help />
      <Journey />
      <ProjectCarousel />
      <Technology />
      <Touch />
      <Para />
    </>
  );
}

export default Home;
