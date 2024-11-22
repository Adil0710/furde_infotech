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

    const mobileAnimation = () => {
      // Mobile animation logic
      gsap.fromTo(
        imageElement,
        { width: "50%" },
        {
          width: "100%",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageElement,
            start: "top 80%",
            end: "center top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        contentElement,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentElement,
            start: "top 70%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    };

    const desktopAnimation = () => {
      // Desktop animation logic
      gsap.fromTo(
        imageElement,
        { width: "100%" },
        {
          width: "50%",
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: imageElement,
            start: "top 75%",
            end: "center center",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        contentElement,
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: contentElement,
            start: "top 85%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    };

    const tabletAnimation = () => {
      // Tablet animation logic
      gsap.fromTo(
        imageElement,
        { width: "100%" },
        {
          width: "60%",
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageElement,
            start: "top 80%",
            end: "center top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        contentElement,
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentElement,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    };

    const applyAnimations = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const isTablet = window.matchMedia("(min-width: 769px) and (max-width: 1024px)").matches;

      if (isMobile) {
        mobileAnimation();
      } else if (isTablet) {
        tabletAnimation();
      } else {
        desktopAnimation();
      }
    };

    applyAnimations();
    window.addEventListener("resize", applyAnimations);

    return () => {
      window.removeEventListener("resize", applyAnimations);
    };
  }, []);

  return (
    <div className="bg-black w-full text-white md:pl-20 md:pr-20 px-5 py-10 overflow-x-hidden">
    <div className=" flex flex-col md:flex-row gap-5 items-center">
      {/* Image Section */}
      <div ref={imageRef} className="w-1/2 md:w-[100%]  md:shrink-0">
        <Image
          src={career}
          alt="careers"
          className="rounded-md object-cover w-full"
        />
       
      </div>
      <p className=" md:hidden block px-2 text-blue-500 text-3xl mt-5 nothing-font leading-relaxed tracking-widest">Ready to unlock your potential? <br />
        
        <span className=" text-rose-500 tracking-widest">Join us today!</span></p>
      
      {/* Content Section */}
      <div
        ref={contentRef}
        className=" md:opacity-100 w-full md:w-[27%] flex flex-col justify-center items-start md:ml-10"
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
    <p className="md:block hidden text-blue-500 text-5xl mt-5 nothing-font leading-relaxed tracking-widest">Ready to unlock your potential? <br />
        
    <span className=" text-rose-500 tracking-widest">Join us today!</span></p>
    </div>
  );
}
