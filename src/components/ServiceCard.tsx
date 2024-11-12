import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";
type cardProps = {
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
  alt: string;
};
function ServiceCard({ image, title, description, link, alt }: cardProps) {
  return (
    <div className="cardShadow bg-white flex flex-col text-[#111827]  overflow-hidden min-h-[350px] rounded-2xl ">
      <div>
        <Image src={image} alt={alt} />
      </div>
      <div className="p-5">
        <h1 className=" font-semibold text-2xl">{title}</h1>
        <p className=" text-gray-700 mt-4">{description}</p>
        <div className=" flex justify-end mt-6">
          <Link
            href={link}
            className="rounded-lg bg-blue-500 text-white w-36 flex items-center gap-2 justify-center py-2 hover:bg-blue-800 duration-500"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
