import React from "react";

const FilmProd = () => {
  return (
    <div className="w-full flex flex-col items-center py-10 px-4">
      <div className="flex flex-col  gap-3 justify-center items-center text-center sm:text-left">
        <p className="font-semibold text-center text-lg">
          "Filmmaking is a chance to live many lifetimes"
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
            src="/images/filmprod.png"
            alt="Film Production"
            className="w-[260px] sm:w-[320px] md:w-[380px] rounded-md"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-2 text-gray-800 text-center md:text-left">
          <p className="leading-6">
            Who says films are just an escape? We see them as a way to live many
            lives — to feel, to explore, and to tell stories. With each film, we
            carry new memories and new reasons to keep creating. V crafts:
          </p>

          <ul className="mt-2 space-y-1 font-medium">
            <li>Documentaries</li>
            <li>Corporate Videos</li>
            <li> 2D Animation Videos</li>
            <li> 3D Animation Videos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilmProd;
