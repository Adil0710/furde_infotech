"use client";
import ApplicationForm from "@/components/ApplicationForm";
// import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

type ApplyFormProps = {
  params: {
    designation: string;
  };
};

export default function ApplyForm({ params }: ApplyFormProps) {


  const router = useRouter();

  const designation = params.designation.replace(/-/g, " ");
  // // State to manage form input
  // const [applicantName, setApplicantName] = useState("");
  // const [applicantEmail, setApplicantEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const emailContent = {
  //     applicantName,
  //     applicantEmail,
  //     message,
  //     jobDetails: { designation, department, description, location, type },
  //   };

  //   // Send the emailContent to your email API endpoint here
  //   console.log("Email content:", emailContent);

  //   // Clear form after submission
  //   setApplicantName("");
  //   setApplicantEmail("");
  //   setMessage("");
  // };

  return (
    <section className=" text-gray-900 bg-white md:pt-[12%] pt-[25%] md:pl-20 md:pr-20 pb-20 px-5 w-full">
      <h1 className=" md:text-4xl text-2xl font-bold leading-tight capitalize flex flex-row items-center gap-6">
        <FaChevronLeft
          size={30}
          className=" cursor-pointer"
          onClick={() => router.back()}
        />{" "}
        {designation}
      </h1>
      <div className="mt-8 flex flex-row justify-between items-center">
        <p className=" text-gray-800 md:text-base text-xs">Enter the Following details</p>{" "}
        <p className=" text-gray-800 md:text-base text-xs">Fields marked with an asterisk <span className=" font-bold">*</span> are required.</p>
      </div>

      <ApplicationForm designation={designation} />
    </section>
  );
}

//     <div className="p-8 max-w-lg mx-auto pt-32">
// <h1 className="text-3xl font-bold mb-4 capitalize">Apply for {designation}</h1>
// <p className="text-gray-700 mb-2">{department}</p>
// <p className="text-gray-500 mb-4">{description}</p>
// <p className="text-gray-500">{location} • {type}</p>

// <form onSubmit={handleSubmit} className="mt-8">
//   <input
//     type="text"
//     value={applicantName}
//     onChange={(e) => setApplicantName(e.target.value)}
//     placeholder="Your Name"
//     required
//     className="w-full mb-4 p-2 border"
//   />
//   <input
//     type="email"
//     value={applicantEmail}
//     onChange={(e) => setApplicantEmail(e.target.value)}
//     placeholder="Your Email"
//     required
//     className="w-full mb-4 p-2 border"
//   />
//   <textarea
//     value={message}
//     onChange={(e) => setMessage(e.target.value)}
//     placeholder="Your Message"
//     className="w-full mb-4 p-2 border"
//   />
//   <button type="submit" className="bg-blue-600 text-white px-4 py-2">
//     Submit Application
//   </button>
// </form>
// </div>
