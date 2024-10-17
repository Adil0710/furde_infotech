import React from 'react';
import Navbar from '@/components/Navbar';

export default function Homepage() {
  return (
    <div className="relative min-h-screen">
      {/* Video background */}
      <video
        src="/videos/videobg.mp4" // Path to the video in the public folder
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="absolute z-20 top-[25%] px-5 pl-10 w-1/2">
        <h1 className="text-[#9CA3AF] text-7xl font-semibold leading-tight">
          Welcome to <span className="text-white">FURDE INFOTECH</span>
        </h1>

        <h2 className="text-[#9CA3AF] font-semibold text-2xl mt-5">
          Empowering businesses with <span className="text-white">Innovative Strategies</span>
        </h2>

        <p className="text-white mt-7 text-sm">
          Furde Infotech Pvt. Ltd. is dedicated to delivering cutting-edge IT, KPO, and BPO solutions tailored to meet the unique needs of each client. Our approach focuses on driving operational excellence, enabling businesses to streamline workflows and enhance productivity. By providing customized and innovative services, we help organizations achieve their growth objectives while maintaining high standards of quality and efficiency. At Furde Infotech, we are committed to empowering businesses to thrive in an ever-evolving market landscape.
        </p>
      </div>
    </div>
  );
}
