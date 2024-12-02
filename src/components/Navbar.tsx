"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Headphones,
  BarChart3,
  Laptop,
  Menu,
  X,
  ChevronUp,
} from "lucide-react";
import logomain from "@/assets/fitlogo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navbar = [
  { title: "Home", link: "/" },
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
  { title: "Careers", link: "/careers" },
  { title: "About Us", link: "/about-us" },
  { title: "Contact Us", link: "/contact-us" },
  { title: "Gallery", link: "/gallery" },
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const pathname = usePathname();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const closeSidebar = () => setSidebarOpen(false);

  const handleClick = () => {
    closeSidebar()
    setServicesOpen(false)
  }

  useEffect(() => {
    // Disable scrolling when the sidebar is open
    if (sidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup to remove class when component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [sidebarOpen]);

  if (pathname.startsWith("/dashboard")) {
    return <div></div>;
  }

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className="glass-effect fixed w-full z-50 md:pl-20 px-5 py-5 md:pr-20 flex items-center justify-between"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <Link href="/">
          <Image src={logomain} alt="FIT logo" className="md:w-36 w-28" />
        </Link>
        <div className="md:hidden flex items-center">
          <Menu
            size={28}
            className="cursor-pointer text-gray-200"
            onClick={toggleSidebar}
          />
        </div>
        <ul className="hidden md:flex text-gray-200 justify-center items-center gap-14">
          {navbar.map((nav, index) => {
            const isActive =
              pathname === nav.link || pathname.startsWith(nav.link + "/");
            return (
              <motion.li
                key={index}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`cursor-pointer flex flex-row items-center gap-2 duration-200 relative py-1.5 px-4 ${
                  isActive ? "text-black" : ""
                }`}
              >
                {nav.title === "Services" && nav.subLinks ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="cursor-pointer flex flex-row items-center gap-2">
                        {nav.title} <ChevronDown size={18} />
                        {isActive && (
                          <motion.span
                            className="absolute inset-0 -z-10 rounded-full bg-white"
                            layoutId="navbarActiveFilter"
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                            }}
                          ></motion.span>
                        )}
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="center"
                      sideOffset={8}
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
                ) : (
                  <Link href={nav.link} key={index}>
                    <span className="cursor-pointer">{nav.title}</span>
                    {isActive && (
                      <motion.span
                        className="absolute inset-0 -z-10 rounded-full bg-white"
                        layoutId="navbarActiveFilter"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                )}
              </motion.li>
            );
          })}
        </ul>
      </motion.nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-[#1f1f1f] bg-opacity-75 transition-opacity z-40 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-60 h-full glass-effect z-50 transition-transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-4 flex justify-between items-center mt-4">
          <h2 className="text-lg font-bold text-gray-200 ">Menu</h2>
          <X
            size={28}
            className="cursor-pointer text-gray-200 "
            onClick={closeSidebar}
          />
        </div>

        <div className="flex flex-col gap-4 p-4">
          {navbar.map((nav, index) => {
            if (nav.title === "Services" && nav.subLinks) {
              return (
                <div key={index}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex justify-between items-center w-full text-left text-white transition-all py-2 pl-2"
                  >
                    {nav.title}{" "}
                    {servicesOpen ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                  <div
                    className={`ml-4 flex flex-col gap-2 transition-all ${
                      servicesOpen ? "max-h-40 mt-2" : "max-h-0 overflow-hidden"
                    }`}
                  >
                    {nav.subLinks.map((subLink, subIndex) => {
                      const isSubLinkActive = pathname === subLink.link;
                      return (
                        <Link
                          href={subLink.link}
                          key={subIndex}
                          onClick={closeSidebar}
                          className={`flex items-center gap-2 py-1 pl-2 relative ${
                            isSubLinkActive ? "text-black" : " text-white"
                          }`}
                        >
                          {subLink.icon}
                          {subLink.title}
                          {isSubLinkActive && (
                            <span className="absolute inset-0 bg-white rounded-md z-[-1]"></span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            const isSidebarActive =
              pathname === nav.link || pathname.startsWith(nav.link + "/");

            return (
              <Link
                href={nav.link}
                key={index}
                onClick={handleClick}
                className={`py-2 pl-2 relative ${
                  isSidebarActive ? "text-black" : "text-white"
                }`}
              >
                {nav.title}
                {isSidebarActive && (
                  <span className="absolute inset-0 bg-white rounded-md z-[-1]"></span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
