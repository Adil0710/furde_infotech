import React from "react";
import RohanFurde from "@/assets/rohanfurde.jpg";
import SunilFurde from "@/assets/SunilFurde.jpg"
import Image from "next/image";



export default function SteeringOurMission() {
  return (
    <div className="bg-white md:pl-20 md:pr-20 px-5 py-10 text-[#111827]">
      <h1 className="text-4xl font-bold leading-tight">STEERING OUR MISSION</h1>

      <div className="flex flex-row justify-between mt-14">
        <div className="w-[63%] pt-10">
          <h2 className="mt-2 font-semibold text-2xl">Managing Director</h2>
          <h3 className="mt-5 font-semibold text-3xl">Rohan Furde</h3>
          <p className="mt-5">
            Rohan Furde, a graduate in Software Engineering from Walchand Institute of Technology, Solapur, is a dynamic entrepreneur and technology enthusiast. Currently serving as Director at Furde Constructions, he has embarked on a new journey as the Founder & Director of Furde Infotech Pvt Ltd. Here, he focuses on developing advanced applications designed to foster business growth and enhance monitoring capabilities. Rohan brings a blend of technical expertise and strategic vision to drive innovation and deliver impactful solutions in the tech industry.
          </p>
        </div>
        <div className="w-[35%] h-[450px] relative overflow-hidden rounded-lg ">
          <Image src={RohanFurde} alt="Rohan Furde" objectFit="contain" fill />
        </div>
      </div>

      <div className="flex flex-row justify-between mt-14">
      <div className="w-[35%] h-[450px] relative overflow-hidden rounded-lg cardShadow">
          <Image src={SunilFurde} alt="Rohan Furde" objectFit="cover" className=" -translate-y-24"/>
        </div>
        <div className="w-[63%] pt-10">
          <h2 className="mt-2 font-semibold text-2xl">Director</h2>
          <h3 className="mt-5 font-semibold text-3xl">Sunil Furde</h3>
          <p className="mt-5">
          Mr. Sunil Furde, Chairman and Managing Director of Sunil Furde Constructions Pvt. Ltd. and Proprietor of Amar Constructions, is a distinguished Civil Engineer with a Master&apos;s in Business Management. He began his career as a lecturer, advancing to Head of the Civil Engineering Department and Principal of a Polytechnic College, while simultaneously working as a Consulting Civil Engineer on various projects. Transitioning fully into business, Mr. Furde has established himself as a Government Registered Valuer, Promoter, Builder & Developer, and Project Management Consultant. He also holds significant leadership roles, including Vice President of CREDAI India, Past President of CREDAI Maharashtra State, and Founder President of RMEA, a business organization, and serves as a Director of Furde Infotech Pvt Ltd.
          </p>
        </div>
      </div>

      

      
    </div>
  );
}
