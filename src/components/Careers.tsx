"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import career from "@/assets/career-pic.png";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Careers() {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    const contentElement = contentRef.current;

    // Image animation: width reduces from 100% to 50% as you scroll
    gsap.fromTo(
      imageElement,
      { width: "100%" }, // Initial full width
      {
        width: "60%", // Reduced width
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageElement,
          start: "top 80%", // When the image hits the top of the viewport
          end: "center top", // Animation continues until the image reaches the center of the viewport
          scrub: true, // Smooth transition tied to scroll
        },
      }
    );

    // Content animation: comes in from the bottom and fades in
    gsap.fromTo(
      contentElement,
      { y: 100, opacity: 0 }, // Starting position below and invisible
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentElement,
          start: "top 90%", // Adjusted to start later
          end: "top 60%", // End point for the animation
          scrub: true, // Smooth transition tied to scroll
        },
      }
    );
  }, []);

  return (
    <div className="bg-black w-full text-white md:pl-20 md:pr-20 px-5 py-20 overflow-x-hidden">
    <div className=" flex flex-col md:flex-row gap-5 items-center">
      {/* Image Section */}
      <div ref={imageRef} className="w-full md:w-[100%] md:shrink-0">
        <Image
          src={career}
          alt="careers"
          className="rounded-md object-cover w-full"
        />
        
      </div>
      
      {/* Content Section */}
      <div
        ref={contentRef}
        className="opacity-0 md:opacity-100 w-full md:w-[27%] flex flex-col justify-center items-start md:ml-10"
      >
        <h1 className="text-4xl font-bold leading-tight uppercase">Careers</h1>
        <p className="mt-5">
          Unlock your potential in a dynamic environment where growth and innovation thrive.
        </p>
        <Link
          href="/careers"
          className="border mt-10 border-white rounded font-semibold text-white text-sm w-36 flex items-center justify-center py-2 hover:bg-white hover:text-black transition duration-500"
        >
          Explore Careers
        </Link>
      </div>
      
    </div>
    <p className=" text-blue-500 text-4xl mt-5 nothing-font leading-relaxed">Ready to unlock your potential? <br />
        
    <span className=" text-rose-500">Join us today!</span></p>
    </div>
  );
}
