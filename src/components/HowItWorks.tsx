import React from 'react'

export default function HowItWorks() {
  return (
    <div className="bg-white md:pl-20 md:pr-20 px-5 py-10">
        <div>
        <h1 className=" text-4xl font-bold leading-tight  text-black">HOW IT WORKS:OUR STREAMLINED WORKFLOW</h1>
      <p className="mt-5 text-md text-[#9CA3AF] ">
      Explore our streamlined workflow,where we combine clear planning,efficient execution and continuous feedback to deliver tailored solutions that drive results.
      </p>
      <div className='pt-5'>
        <ul className='flex flex-col gap-5'>
            <li>Initial Consultation</li>
            <li>Planning and Strategy</li>
            <li>Design and Development</li>
            <li>Testing and Assurance</li>
            <li>Client Feedeback</li>
        </ul>
      </div>
        </div>


    </div>
  )
}

