import React from "react";
import Image from "next/image";
import NoResultIcon from "@/assets/noresult.svg";

function JobsNotFound() {
  return (
    <div className="col-span-full flex items-center justify-center flex-col">
      {" "}
      <Image src={NoResultIcon} alt="No Results Found" width={300} />
      <p className="text-center text-lg text-gray-500">No Jobs Posted</p>
    </div>
  );
}

export default JobsNotFound;
