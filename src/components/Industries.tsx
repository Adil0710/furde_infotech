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

      <div className=" flex flex-row pt-5">
        {/* Leftside */}
        <div className=" w-1/2 text-black">
          <ul className="flex flex-col gap-5">
            <li className="flex items-center gap-2">
            <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/tesla-model-x.png" alt="tesla-model-x"/>
              Automotive
            </li>
            <li className="flex items-center gap-2">
            <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/book-and-pencil.png" alt="book-and-pencil"/>
              Education
            </li>
            <li className="flex items-center gap-2">
            <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/flash-on.png" alt="flash-on"/>
              Energy and Utilities
            </li>
            <li className="flex items-center gap-2">
            <BsBank2 />
              Finance and Banking
            </li>
            <li className="flex items-center gap-2">
            <FaLandmarkDome />
              Government and Public Sector
            </li>
            <li className="flex items-center gap-2">
            <FaHospital />
              Healthcare
            </li>
            <li className="flex items-center gap-2">
            <IoShieldCheckmarkSharp />
              Insurance
            </li>
          </ul>
        </div>

        {/* Rightside */}

        <div className=" w-1/2  ">

        <ul className="flex flex-col gap-5">
            <li className="flex items-center gap-2">
           
              Legal Services
            </li>
            <li className="flex items-center gap-2">
              Logistics and Supply Chain
            </li>
            <li className="flex items-center gap-2">
              Manufacturing
            </li>
            <li className="flex items-center gap-2">
              Real Estate
            </li>
            <li className="flex items-center gap-2">
              Retail and E-commerce
            </li>
            <li className="flex items-center gap-2">
              Telecommunications
            </li>
            <li className="flex items-center gap-2">
              Travel and Hospitality
            </li>
          </ul>

        </div>
      </div>

    </div>
  );
}

export default Industries;
