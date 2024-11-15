'use client'
import React, { useState } from "react";
import { Button } from "./ui/button";
import axios from "axios";
import toast from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";

function Opinion() {
  const [allDisabled, setAllDisabled] = useState(() => {
    return localStorage.getItem("allButtonsDisabled") === "true";
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (buttonId: string) => {
    if (allDisabled || isLoading) return;

    setIsLoading(true);

    try {
      const response = await axios.put("/api/opinion", { buttonId });

      if (response.data.success) {
        toast.success("Thank you for your feedback!", {
            duration: 5000
        });
        setAllDisabled(true);
        localStorage.setItem("allButtonsDisabled", "true");
      } else {
        toast.error("Something went wrong, please try again.", {
            duration: 5000
        });
      }
    } catch (error) {
      console.error("Error clicking button:", error);
      toast.error("Error: Unable to submit your feedback.", {
        duration: 5000
    });
    } finally {
      setIsLoading(false);
    }
  };

  const buttons = [
    { id: "google_search", label: "Google Search" },
    { id: "social_media", label: "Social Media" },
    { id: "referral", label: "Referral from a Friend" },
    { id: "event", label: "Event or Conference" },
    { id: "job_board", label: "Job Board" },
    { id: "others", label: "Others" },
  ];

  return (
    <>
    
      <h1 className="mt-28 text-4xl font-bold leading-tight uppercase">
        Your Opinion Matters
      </h1>
      <p className="text-[#4B5563] mt-10">
        Bring Your Expertise to Our Department.
      </p>
      <div className="flex flex-row gap-5 mt-8 w-full">
        {buttons.map((button) => (
          <Button
            key={button.id}
            className="border border-black rounded bg-transparent hover:bg-transparent font-semibold text-black text-sm w-44 flex items-center justify-center py-2 duration-500"
            onClick={() => handleClick(button.id)}
            disabled={allDisabled || isLoading} // Disable buttons while loading or after clicking
          >
            {isLoading && button.id === button.id ? <> <LuLoader2 className=" animate-spin" /> Please Wait</> : button.label}
          </Button>
        ))}
      </div>
    </>
  );
}

export default Opinion;
