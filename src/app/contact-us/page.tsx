import Image from 'next/image'
import React from 'react'
import bg from "@/assets/staticbg.jpg";
import ContactForm from '@/components/ContactForm';

function ContactUs() {
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
        <div className="absolute top-[75%] left-0 transform -translate-y-[75%] md:pl-20 px-5 w-1/2">
          <h1 className=" text-4xl font-bold leading-tight text-white">
          CONTACT US
          </h1>

          <p className=' text-white mt-6 mb-8'>Please fill out the form below with your details, and our team will get back to you as soon as possible!</p>

          <ContactForm/>

          
          
        </div>
      </div>
    </section>
  )
}

export default ContactUs