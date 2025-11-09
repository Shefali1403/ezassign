import React from "react";

const Portfolio = () => {
  return (
    <div className="w-full flex flex-col items-center py-10 px-4 ">
      <div className="text-center mb-6">
        <p className="text-xl font-semibold">The Highlight Reel</p>
        <p className="text-sm text-gray-700">Watch the magic we've captured</p>
      </div>

      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-6 px-2">
        <img
          src="/images/portfol.png"
          alt="Portfolio Image"
          className=" w-[100px] rounded-md p-4"
        />
        <img
          src="/images/Utube.png"
          alt="YouTube Thumbnail"
          className="sm:w-[400px] rounded-md px-4"
        />
      </div>

      <div className="w-full mt-10 flex justify-end pr-4">
        <img src="/images/portbord.png" alt="border" className="w-[100px]" />
      </div>
    </div>
  );
};

export default Portfolio;
