import React from "react";
import Banner from "./Banner";
import About from "./About";
import Cards from "./Cards";
import Projects from "./Projects";
import Ready from "./Ready";
import Hire from "./Hire";
import Rescue from "./Rescue";
import Purpose from "./Purpose";
import Responsibilities from "./Responsibilities";
import Testimonials from "./Testimonials";
const Homepage = () => {
  return (
    <div>
      <Banner />
      <Cards />
      <About />
      <Ready />
      <Hire />
      <Purpose />
      <Responsibilities />
      <Testimonials />
      <Projects />
      <Rescue />
    </div>
  );
};

export default Homepage;
