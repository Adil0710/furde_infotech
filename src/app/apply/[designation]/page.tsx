"use client"
import { useState } from "react";

type ApplyFormProps = {
  params: {
    designation: string;
  };
  searchParams: {
    department?: string;
    description?: string;
    location?: string;
    type?: string;
  };
};

export default function ApplyForm({ params, searchParams }: ApplyFormProps) {
  const { designation } = params;
  const { department, description, location, type } = searchParams;

  // State to manage form input
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailContent = {
      applicantName,
      applicantEmail,
      message,
      jobDetails: { designation, department, description, location, type },
    };

    // Send the emailContent to your email API endpoint here
    console.log("Email content:", emailContent);

    // Clear form after submission
    setApplicantName("");
    setApplicantEmail("");
    setMessage("");
  };

  return (
    <div className="p-8 max-w-lg mx-auto pt-32">
<h1 className="text-3xl font-bold mb-4 capitalize">Apply for {designation}</h1>
<p className="text-gray-700 mb-2">{department}</p>
<p className="text-gray-500 mb-4">{description}</p>
<p className="text-gray-500">{location} • {type}</p>

<form onSubmit={handleSubmit} className="mt-8">
  <input
    type="text"
    value={applicantName}
    onChange={(e) => setApplicantName(e.target.value)}
    placeholder="Your Name"
    required
    className="w-full mb-4 p-2 border"
  />
  <input
    type="email"
    value={applicantEmail}
    onChange={(e) => setApplicantEmail(e.target.value)}
    placeholder="Your Email"
    required
    className="w-full mb-4 p-2 border"
  />
  <textarea
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    placeholder="Your Message"
    className="w-full mb-4 p-2 border"
  />
  <button type="submit" className="bg-blue-600 text-white px-4 py-2">
    Submit Application
  </button>
</form>
</div> 
  );
}


