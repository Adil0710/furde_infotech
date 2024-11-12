import React from "react";
import ServiceCard from "./ServiceCard";
import { itServices } from "@/lib/data";

function ItService() {
  return (
    <div className="bg-white md:pl-20 md:pr-20 px-5 py-10 text-black">
      <h1 className=" text-4xl font-bold leading-tight">IT SERVICES</h1>
      <p className=" mt-8 text-[#4B5563]">
        Leveraging advanced technologies to propel your business growth.
      </p>
      <div className=" mt-10 grid grid-cols-3 gap-8">
        {itServices.map((service, index) => {
          return (
            <ServiceCard
              key={index}
              image={service.image}
              alt={service.title}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ItService;
