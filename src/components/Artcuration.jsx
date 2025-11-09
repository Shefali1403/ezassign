import React from "react";

const Artcuration = () => {
  return (
    <div className="w-full flex flex-col items-center  py-10 px-4">
      <div className="flex flex-col  gap-3 justify-center items-center text-center sm:text-left">
        <p className="font-semibold text-center text-lg">
          V take art where it belongs, to the people.- Vernita Verma
        </p>
        <img
          src="/images/serviceline.svg"
          alt="line"
          className="w-32 sm:w-48"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8 w-full max-w-5xl">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/branding.png"
            alt="Film Production"
            className="w-[260px] sm:w-[320px] md:w-[380px] rounded-md"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-2 text-gray-800 text-center md:text-left">
          <p className="leading-6">
            Art isn't meant to sit on distant walls- it's meant to breathe , to
            travel , to belong. Through every festival, every performance. and
            every gathering, we help stories find their stage and their people.
            V curates:
          </p>

          <ul className="mt-2 space-y-1 font-medium">
            <li>Art Festivals </li>
            <li>Live Performance</li>
            <li> Community Events</li>
            <li> Cultural Storytelling</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Artcuration;
