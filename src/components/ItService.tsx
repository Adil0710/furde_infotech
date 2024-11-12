import React from "react";
import ServiceCards from "./ServiceCards";

function ItService() {
  return (
    <div className="bg-white md:pl-20 md:pr-20 px-5 py-10 text-black">
      <h1 className=" text-4xl font-bold leading-tight">
      IT SERVICES
      </h1>
      <p className=" mt-8 text-[#4B5563]">Leveraging advanced technologies to propel your business growth.</p>
      <ServiceCards/>
    </div>
  );
}

export default ItService;
