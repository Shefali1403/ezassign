import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Service from "./components/Service";
import FilmProd from "./components/FilmProd";
import Branding from "./components/Branding";
import Artcuration from "./components/Artcuration";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="flex w-full min-h-screen flex-col border-2 border-black bg-[#fff3ef] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <FilmProd />
      <Branding />
      <Artcuration />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
