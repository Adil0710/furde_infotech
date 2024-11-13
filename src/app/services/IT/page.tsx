import Image from "next/image";
import Link from "next/link";
import React from "react";
import bg from "@/assets/staticbg.jpg";
import ItService from "@/components/ItService";

export default function IT() {
  return (
    <section>
      <div className="relative min-h-screen">
        <Image
          src={bg}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="-z-[10]" // Ensure the image is behind other content
          priority
        />
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 md:pl-20 px-5 w-1/2">
          <h1 className=" text-4xl font-bold leading-tight text-white">
            IT SERVICES
          </h1>

          <p className=" text-white mt-8 text-md">
            Our IT services are designed to empower businesses with reliable,
            scalable, and future-ready technology solutions. We specialize in
            creating seamless digital experiences, optimizing infrastructure,
            and driving innovation through cutting-edge tools and methodologies.
            Our dedicated team of experts provides tailored solutions that cater
            to your unique business needs, ensuring robust performance and
            operational efficiency. From strategy and development to deployment
            and support, we&apos;re committed to elevating your business
            capabilities at every step. Trust us to help you navigate the
            complexities of the digital landscape with confidence and precision.
          </p>
          <div className=" flex flex-row gap-5 mt-16 w-full">
            <Link
              href="/contact-us"
              className=" border border-white rounded font-semibold text-white text-sm w-40 flex items-center justify-center py-2 hover:bg-white hover:text-black duration-500"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <ItService/>
    </section>
  );
}
