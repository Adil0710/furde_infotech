
import CurrentOpenRoles from "@/components/CurrentOpenRoles";
import React from "react";

export default function OpenRoles() {
  return (
    <section className=" text-black bg-white">
      <div className="pt-[12%] md:pl-20 md:pr-20 pb-20 px-5 w-full">
        <h1 className=" text-4xl font-bold leading-tight uppercase">
          explore careers
        </h1>
        <CurrentOpenRoles/>
      </div>
    </section>
  );
}
