import React from "react";

const Branding = () => {
  return (
    <div className="w-full flex flex-col items-center  py-10 px-4">
      <div className="flex flex-col  gap-3 justify-center items-center text-center sm:text-left">
        <p className="font-semibold text-center text-lg">
          A brand is a voice, and a product is a souvenir - Lisa Gransky
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
            A brand isn't just what you see- it's what you remember, what you
            carry home, and what you trust. We shape brands that people
            remember, return to, and fall in love with. V creates:
          </p>

          <ul className="mt-2 space-y-1 font-medium">
            <li>Branding & Communication</li>
            <li>Market Mapping</li>
            <li> Content Management</li>
            <li> Social Media Management</li>
            <li>Rebranding</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Branding;
