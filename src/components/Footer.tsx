"use client";
import React from "react";
import bgfooter from "@/assets/footerbg.jpg";
import Image from "next/image";
import Link from "next/link";
import logomain from "@/assets/fitlogo.png";
import {
  FaLinkedin,
  FaLocationDot,
  FaXTwitter,
  // FaYoutube,
} from "react-icons/fa6";
import { BiPhone } from "react-icons/bi";
import { IoMailOutline } from "react-icons/io5";
// import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import ContactForm from "./ContactForm";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Headphones, BarChart3, Laptop } from "lucide-react";

const Links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Services",
    link: "/services",
    subLinks: [
      {
        title: "IT",
        link: "/services/IT",
        icon: <Laptop size={16} className="mr-1" />,
      },
      {
        title: "BPO",
        link: "/services/BPO",
        icon: <Headphones size={16} className="mr-1" />,
      },
      {
        title: "KPO",
        link: "/services/KPO",
        icon: <BarChart3 size={16} className="mr-1" />,
      },
    ],
  },
  {
    title: "Careers",
    link: "/careers",
  },
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "Contact Us",
    link: "/contact-us",
  },
];

export default function Footer() {
  return (
    <div className="relative min-h-screen">
      <Image
        src={bgfooter}
        alt="Background Image"
        fill
        quality={100}
        className="-z-[10] object-cover"
        priority // Optimizes the background image loading
      />

      <div className=" flex md:flex-row flex-col md:pl-20 md:pr-20 px-5 py-10 z-10 text-white">
        {/* Leftside */}
        <div className=" w-1/2">
          <Link href="/">
            <Image src={logomain} alt="FIT logo" height={50} width={150} />
          </Link>

          <Link
            href="https://maps.app.goo.gl/wG4EunDXihBcfHFH9"
            target="_blank"
            className=" mt-10 flex flex-col"
          >
            <p className=" flex flex-row text-2xl font-semibold gap-2">
              <FaLocationDot /> Solapur{" "}
            </p>
            <p className=" text-[#9CA3AF] mt-2">
              Furde complex, Damaninagar , Solapur-413001, Maharashtra, India
            </p>
          </Link>

          <Link
            href="https://maps.app.goo.gl/JwVtKnUuiWMD3gtx6"
            target="_blank"
            className=" mt-10 flex flex-col"
          >
            <p className=" flex flex-row text-2xl font-semibold gap-2">
              <FaLocationDot /> Pune{" "}
            </p>
            <p className=" text-[#9CA3AF] mt-2">
              SNO -151/5A, FL No-B1101, Sukhwani Emerald, Magarpatta Road
              Hadapsar, Pune -411028 Maharashtra, India
            </p>
          </Link>

          <div className=" flex flex-row mt-10 gap-20">
            <div>
              <h2 className=" text-3xl font-semibold">Quick Links</h2>
              <ul className=" mt-8 flex flex-col text-[#9CA3AF] justify-center gap-5">
                {Links.map((nav, index) => {
                  if (nav.title === "Services" && nav.subLinks) {
                    // Render Dropdown for "Services"
                    return (
                      <DropdownMenu key={index}>
                        <DropdownMenuTrigger asChild>
                          <li className="cursor-pointer flex flex-row items-center gap-2">
                            {nav.title} <ChevronDown size={18} />
                          </li>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="center"
                          sideOffset={0}
                          className="glass-effect text-white w-40"
                        >
                          {nav.subLinks.map((subLink, subIndex) => (
                            <DropdownMenuItem asChild key={subIndex}>
                              <Link
                                href={subLink.link}
                                className="flex items-center gap-2 px-2 py-1 hover:bg-gray-700 rounded"
                              >
                                {subLink.icon}
                                <span>{subLink.title}</span>
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    );
                  } else {
                    // Render regular nav items
                    return (
                      <Link href={nav.link} key={index}>
                        <li className="cursor-pointer">{nav.title}</li>
                      </Link>
                    );
                  }
                })}
              </ul>
            </div>

            <div className="">
              <h2 className=" text-3xl font-semibold">Connect with Us</h2>

              <Link
                href="tel:9689686686"
                target="_blank"
                className=" flex flex-row items-center mt-8 font-semibold gap-5"
              >
                <BiPhone className=" text-2xl" /> +91 9689686686
              </Link>

              <Link
                href="mailto:info@furdeinfotech.com"
                target="_blank"
                className=" flex flex-row items-center mt-5 font-semibold gap-5"
              >
                <IoMailOutline className=" text-2xl" />
                info@furdeinfotech.com
              </Link>

              <div className=" mt-8 flex flex-row justify-between items-center">
                {/* <Link href="" target="_blank" className="group">
                  <RiFacebookCircleFill className=" text-2xl group-hover:text-blue-500 duration-200" />
                </Link> */}

                <Link href="https://www.instagram.com/furdeinfotech" target="_blank" className="group">
                  <AiFillInstagram className=" text-2xl group-hover:text-rose-600 duration-200" />
                </Link>

                <Link href="https://x.com/FurdeInfotech" target="_blank" className="group">
                  <FaXTwitter className=" text-2xl group-hover:text-gray-400 duration-200" />
                </Link>

                <Link href="https://www.linkedin.com/company/furde-infotech-pvt-ltd?trk=blended-typeahead" target="_blank" className="group">
                  <FaLinkedin className=" text-2xl group-hover:text-blue-600 duration-200" />
                </Link>

                {/* <Link href="" target="_blank" className="group">
                  <FaYoutube className=" text-2xl group-hover:text-red-600 duration-200" />
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        {/* Rightside */}

        <div className="w-1/2 pl-40">
          <h1 className="text-3xl mb-10 mt-24 font-semibold leading-tight">
            Contact Us
          </h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
