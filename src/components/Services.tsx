import Link from "next/link";
import React from "react";
import IT from "@/assets/IT.png";
import KPO from "@/assets/KPO.png";
import BPO from "@/assets/BPO.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Image, { StaticImageData } from "next/image";

// Reusable ServiceCard component
const ServiceCard = ({ imageSrc, title, description }: { imageSrc: StaticImageData; title: string; description: string }) => (
  <div className="border border-r-white bg-neutral-800 overflow-hidden pb-5 min-h-[450px] rounded-xl">
    <Image src={imageSrc} alt={title} />
    <div className="pt-5 pb-5 px-10">
      <p className="font-semibold text-3xl">{title}</p>
      <p className="text-sm mt-2">{description}</p>
    </div>
    <div className="flex justify-end px-10 mt-5">
      <Link
        href=""
        className="border border-white rounded text-white text-sm w-36 flex items-center gap-2 justify-center py-2 hover:bg-[#1d4ed8] hover:border-[#1d4ed8] duration-500"
      >
        Explore <FaArrowRightLong />
      </Link>
    </div>
  </div>
);

// Data for the services
const services = [
  {
    imageSrc: IT,
    title: "IT",
    description: "Empowering businesses with innovative technology services that enhance efficiency, security, and scalability.",
  },
  {
    imageSrc: KPO,
    title: "KPO",
    description: "Delivering specialized knowledge and analytical insights to help companies make informed decisions and drive growth.",
  },
  {
    imageSrc: BPO,
    title: "BPO",
    description: "Optimizing operational workflows with reliable outsourcing, ensuring cost efficiency and improved performance.",
  },
];

function Services() {
  return (
    <div className="bg-black text-white md:pl-20 px-5 md:pr-20 py-10">
      <h1 className="text-4xl font-semibold leading-tight">Services</h1>
      <p className="mt-5 text-md">
        We offer a comprehensive range of services tailored to meet the diverse needs of our clients across various industries.
      </p>

      <div className="grid mt-12 grid-cols-1 sm:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            imageSrc={service.imageSrc}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
