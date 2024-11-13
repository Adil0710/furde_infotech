import React from "react";
import { BsBank2 } from "react-icons/bs";
import { FaLandmarkDome } from "react-icons/fa6";
import { FaHospital } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

function Industries() {
  return (
    <div className="bg-white md:pl-20 md:pr-20 px-5 py-10">
      <div>
        <h1 className=" text-4xl font-semibold leading-tight  text-black">
          INDUSTRIES WE SERVE
        </h1>
        <p className="mt-5 text-md text-[#9CA3AF] ">
          We proudly serve a wide range of industries, offering tailored IT,
          KPO, and BPO solutions designed to meet their unique needs and drive
          success.
        </p>
      </div>

      <div className=" flex flex-row mt-10">
        {/* Leftside */}
        <div className=" w-1/2 text-black">
          <ul className="flex flex-col gap-5 font-medium">
            <li className="flex items-center gap-2">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-glyphs/30/tesla-model-x.png"
                alt="tesla-model-x"
              />
              Automotive
            </li>
            <li className="flex items-center gap-2">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/book-and-pencil.png"
                alt="book-and-pencil"
              />
              Education
            </li>
            <li className="flex items-center gap-2">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/flash-on.png"
                alt="flash-on"
              />
              Energy and Utilities
            </li>
            <li className="flex items-center gap-2">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/financial-analytics.png"
                alt="financial-analytics"
              />
              Finance and Banking
            </li>
            <li className="flex items-center gap-2">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/parliament.png"
                alt="parliament"
              />
              Government and Public Sector
            </li>
            <li className="flex items-center gap-2">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/hospital-bed-with-iv-machine.png"
                alt="hospital-bed-with-iv-machine"
              />
              Healthcare
            </li>
            <li className="flex items-center gap-2">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/security-checked.png"
                alt="security-checked"
              />
              Insurance
            </li>
          </ul>
        </div>

        {/* Rightside */}

        <div className=" w-1/2  ">
          <ul className="flex flex-col gap-5 font-medium">
            <li className="flex items-center gap-2">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/scales--v1.png"
                alt="scales--v1"
              />
              Legal Services
            </li>
            <li className="flex items-center gap-2">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/truck.png"
                alt="truck"
              />
              Logistics and Supply Chain
            </li>
            <li className="flex items-center gap-2">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/reverse-conveyor-movement.png"
                alt="reverse-conveyor-movement"
              />
              Manufacturing
            </li>
            <li className="flex items-center gap-2">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/real-estate.png"
                alt="real-estate"
              />
              Real Estate
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 50 50"
              >
                <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 12.380859 C 43.266738 11.541629 42.201883 11 41 11 L 9 11 C 7.7981175 11 6.7332621 11.541629 6 12.380859 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 15 17 C 15.553 17 16 17.448 16 18 C 16 22.962 20.037 27 25 27 C 29.963 27 34 22.962 34 18 C 34 17.448 34.447 17 35 17 C 35.553 17 36 17.448 36 18 C 36 24.065 31.065 29 25 29 C 18.935 29 14 24.065 14 18 C 14 17.448 14.447 17 15 17 z"></path>
              </svg>
              Retail and E-commerce
            </li>
            <li className="flex items-center gap-2">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/radio-tower.png"
                alt="radio-tower"
              />
              Telecommunications
            </li>
            <li className="flex items-center gap-2"><img width="25" height="25" src="https://img.icons8.com/ios/50/sunbathe.png" alt="sunbathe"/>Travel and Hospitality</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Industries;
