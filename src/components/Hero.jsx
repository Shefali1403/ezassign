import React from "react";

const Hero = () => {
  return (
    <div className="w-full overflow-x-hidden flex flex-col md:flex-row justify-between items-center px-6 py-10 relative">
      <div className="relative w-fit img-cont">
        <img src="/images/HeroMandala.png" className="w-1/2" alt="Mandala" />
        <img
          src="/images/logo1.png"
          alt="Logo"
          className="w-20 absolute top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="flex flex-col justify-center max-w-xl content-cont text-gray-800 mt-6 md:mt-0">
        <div>
          <h1 className="text-xl font-semibold py-2 island text-center">
            Yarnam is where stories find
          </h1>
          <h1 className="text-xl font-semibold island py-2 text-center">
            their voice and form
          </h1>
        </div>

        <h2 className="text-lg font-medium mt-2 py-4 text-center text-[#f15d2b]">
          Films · Brands · Art
        </h2>

        <p className="text-sm leading-6 mt-3 text-center">
          Since 2009, we've been telling stories—stories of people, their
          journeys, and the places that shape them. Some begin in polished
          boardrooms, others in humble village squares. But every story starts
          the same way—by listening with intention. We believe it takes trust,
          patience, and an eye for the unseen to capture what truly matters. We
          don’t just tell stories — we honor them.
        </p>
      </div>
    </div>
  );
};

export default Hero;
