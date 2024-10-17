import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import bg from "@/assets/staticbg.jpg";

export default function Homepage() {
  return (
    <div className="relative min-h-screen">
      <Image
        src={bg}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0" // Ensure the image is behind other content
      />
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="absolute z-20 top-[25%] px-5 pl-10 w-1/2">
        <h1 className="text-[#9CA3AF] text-7xl font-semibold leading-tight">
          Welcome to <span className="text-white">FURDE INFOTECH</span>
        </h1>

        <h2 className=' text-[#9CA3AF] font-semibold text-2xl mt-5'>Empowering businesses with <span className=' text-white'>Innovative Stratergies</span></h2>

        <p className=' text-white mt-7 text-sm'>Furde Infotech Pvt. Ltd. is dedicated to delivering cutting-edge IT, KPO, and BPO solutions tailored to meet the unique needs of each client. Our approach focuses on driving operational excellence, enabling businesses to streamline workflows and enhance productivity. By providing customized and innovative services, we help organizations achieve their growth objectives while maintaining high standards of quality and efficiency. At Furde Infotech, we are committed to empowering businesses to thrive in an ever-evolving market landscape.</p>
      </div>
    </div>
  );
}
