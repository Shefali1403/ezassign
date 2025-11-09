import React from "react";

const About = () => {
  return (
    <div className="w-full flex overflow-x-hidden flex-col md:flex-row justify-center items-center gap-10 py-14 px-4">
      <div className="flex flex-col items-center w-full md:w-1/2">
        <div className="relative w-fit">
          <img
            src="/images/aboutyellow.png"
            alt="yellow bg"
            className="w-[350px] sm:w-[400px] md:w-[480px]"
          />

          <img
            src="/images/pin.png"
            alt="pin"
            className="w-8 md:w-10 absolute top-[-12px] right-[-12px]"
          />

          <p className="absolute top-1/2 left-1/2 w-[80%] -translate-x-1/2 -translate-y-1/2 text-center text-xs sm:text-sm md:text-base leading-6 font-medium text-black">
            Some craft films. Some build brands. Some curate art. We bring it
            all together — a collective of storytellers driven by one belief:
            every project deserves to be more than just a message; it should
            become a masterpiece.
            <br />
            From first spark to final frame, from raw ideas to timeless visuals
            — we shape stories that stay with you.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <img src="/images/igate.png" alt="icon" className="w-10" />
          <div className="flex flex-col items-center">
            <img src="/images/abtarrow1.svg" alt="arrow" className="w-5" />
            <p className="font-medium text-gray-900 text-sm sm:text-base">
              Branding Experts
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start w-full md:w-1/2 gap-8">
        <div className="flex w-full justify-between gap-3">
          <div>
            <p className="font-medium text-gray-900 text-lg">Film Makers</p>
            <img src="/images/abtarrow2.svg" alt="arrow2" className="w-6" />
          </div>
          <div className="flex flex-col items-start">
            <p className="font-medium text-gray-900 text-lg">Art Curators</p>
            <img src="/images/abtarrow3.svg" alt="arrow3" className="w-5" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img src="/images/group.svg" alt="group icon" className="w-full" />
        </div>

        <div className="flex flex-col text-center md:text-left gap-3">
          <h1 className="text-gray-900 text-lg sm:text-xl font-semibold">
            Take a closer look at the stories we bring to life.
          </h1>
          <button className="px-6 py-2 bg-[#f15d2b] text-white font-medium rounded-2xl hover:bg-gray-800 transition-all">
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
