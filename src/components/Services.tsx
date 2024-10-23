import Link from "next/link";
import React from "react";

function Services() {
  return (
    <div className="bg-black text-white md:pl-20 px-5 md:pr-20 py-10">
      <h1 className=" text-4xl font-semibold leading-tight">Services</h1>
      <p className="mt-5 text-md">
        We offer a comprehensive range of services tailored to meet the diverse
        needs of our clients across various industries.
      </p>

      <div className="grid mt-12 grid-cols-1 sm:grid-cols-3 gap-10">

        <div className="border border-r-white bg-neutral-800 overflow-hidden min-h-[350px] rounded-lg">
          <div className="bg-red-400">image to be added</div>
          <div className="pt-5 pb-5">
            <p className="font-semibold">IT</p>
            <p>Empowering businesses with innovative technology services that enhance efficiency,security and scalability.</p>
          </div>
          <div> 
          <Link
              href=""
              className=" border border-white rounded text-white text-sm w-36 flex items-center justify-center py-2 hover:bg-[#1d4ed8] hover:border-[#1d4ed8] duration-500"
            >
              Explore
            </Link>
          </div>
        </div>
        <div className="border border-r-white bg-neutral-800 overflow-hidden min-h-[350px] rounded-lg">
        <div className="bg-red-400">image to be added</div>
          <div className="pt-5 pb-5">
            <p className="font-semibold">KPO</p>
            <p>Delivering specialized knowledge and analytical insights to help companies make informed decisions and drive growth.</p>
          </div>
          <div> 
          <Link
              href=""
              className=" border border-white rounded text-white text-sm w-36 flex items-center justify-center py-2 hover:bg-[#1d4ed8] hover:border-[#1d4ed8] duration-500"
            >
              Explore
            </Link>
          </div>
          </div>
        <div className="border border-r-white bg-neutral-800 overflow-hidden min-h-[350px] rounded-lg">
        <div className="bg-red-400">image to be added</div>
          <div className="pt-5 pb-5">
            <p className="font-semibold">BPO</p>
            <p>Optimizing operational workflows with reliable outsourcing , ensuring cost efficiency and improved performance.</p>
          </div>
          <div> 
          <Link
              href=""
              className=" border border-white rounded text-white text-sm w-36 flex items-center justify-center py-2 hover:bg-[#1d4ed8] hover:border-[#1d4ed8] duration-500"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Services;
