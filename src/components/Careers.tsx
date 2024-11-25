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
  const joinref = useRef(null)
  const joinreftwo = useRef(null)

  useEffect(() => {
    const imageElement = imageRef.current;
    const contentElement = contentRef.current;
    const joinElement = joinref.current;
    const joinElementtwo = joinreftwo.current;

    const createMobileAnimation = () => {
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
        joinElement,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentElement,
            start: "top 80%",
            end: "top 40%",
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
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentElement,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    };

    const createDesktopAnimation = () => {
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
        joinElementtwo,
        { x: -150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentElement,
            start: "top 60%",
            end: "top 10%",
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

    // Use GSAP matchMedia for responsive animations
    const mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      // Clear existing animations
      ScrollTrigger.getAll().forEach((st) => st.kill());
      createMobileAnimation();
    });

    mm.add("(min-width: 769px)", () => {
      // Clear existing animations
      ScrollTrigger.getAll().forEach((st) => st.kill());
      createDesktopAnimation();
    });

    // Cleanup
    return () => {
      mm.revert(); // Revert all animations added by matchMedia
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="bg-black w-full text-white md:pl-20 md:pr-20 px-5 py-10 overflow-x-hidden">
      <div className="flex flex-col md:flex-row gap-5 items-center overflow-y-hidden">
        {/* Image Section */}
        <div ref={imageRef} className="w-[100%] md:shrink-0">
          <Image
            src={career}
            alt="careers"
            className="rounded-md object-cover w-full"
          />
        </div>
        <p ref={joinref} className="md:hidden opacity-0 block px-2 text-blue-500 text-lg mt-5 nothing-font leading-relaxed tracking-widest">
          Ready to unlock your potential? <br />
          <span className="text-rose-500 tracking-widest">Join us today!</span>
        </p>
        {/* Content Section */}
        <div
          ref={contentRef}
          className="opacity-0 md:opacity-100 w-full md:w-[27%] flex flex-col justify-center items-start md:ml-10"
        >
          <h1 className="text-4xl font-bold leading-tight uppercase">Careers</h1>
          <p className="mt-5">
            Unlock your potential in a dynamic environment where growth and
            innovation thrive.
          </p>
          <Link
            href="/careers"
            className="border mt-10 border-white rounded font-semibold text-white text-sm w-36 flex items-center justify-center py-2 hover:bg-white hover:text-black transition duration-500"
          >
            Explore Careers
          </Link>
        </div>
      </div>
      <p ref={joinreftwo} className="md:block opacity-0 hidden text-blue-500 text-5xl mt-5 nothing-font leading-relaxed tracking-widest">
        Ready to unlock your potential? <br />
        <span className="text-rose-500 tracking-widest">Join us today!</span>
      </p>
    </div>
  );
}
