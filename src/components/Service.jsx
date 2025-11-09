import React from "react";

const Service = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden items-center py-10">
      <div className="flex flex-col items-center mb-6">
        <p className="text-center text-lg font-medium">
          The storyboard reveals the breadth of our craft
        </p>
        <img
          src="/images/serviceline.svg"
          alt="line"
          className="w-40 md:w-60"
        />
      </div>

      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 px-4">
        <div className="relative w-fit">
          <img
            src="/images/tape1.png"
            alt="tape1"
            className="w-40 absolute -top-4 -left-4 rotate-[-10deg] opacity-90"
          />
          <img
            src="/images/servicepic1.png"
            alt="service1"
            className="w-[220px] sm:w-[260px] rounded-md"
          />
        </div>

        <div className="relative w-fit">
          <img
            src="/images/tape1.png"
            alt="tape2"
            className="w-40 absolute -top-5 left-1/2 -translate-x-1/2 rotate-[6deg] opacity-90"
          />
          <img
            src="/images/Servicepic2.png"
            alt="service2"
            className="w-[220px] sm:w-[260px] rounded-md"
          />
        </div>

        <div className="relative w-fit">
          <img
            src="/images/tape1.png"
            alt="tape3"
            className="w-40 absolute -top-4 -right-4 rotate-[12deg] opacity-90"
          />
          <img
            src="/images/Servicepic3.png"
            alt="service3"
            className="w-[220px] sm:w-[260px] rounded-md"
          />
        </div>
      </div>

      <div className="w-full flex justify-center mt-10">
        <img
          src="/images/serborder.svg"
          alt="not found"
          className="w-full max-w-none"
        />
      </div>
    </div>
  );
};

export default Service;
