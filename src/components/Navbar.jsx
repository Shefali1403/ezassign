import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="w-full flex justify-end py-4">
      <ul className="flex items-center gap-6 px-6 text-[10px] sm:text-base font-medium">
        <li className="cursor-pointer hover:text-gray-500">Services</li>
        <li className="cursor-pointer hover:text-gray-500">Their Stories</li>
        <li className="cursor-pointer hover:text-gray-500">Our Story</li>
        <li className="cursor-pointer hover:text-gray-500">Varnan</li>
        <li className="cursor-pointer hover:text-gray-500">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
