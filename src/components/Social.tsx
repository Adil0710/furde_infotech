import Link from 'next/link';
import React from 'react';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { AiFillInstagram } from "react-icons/ai";
// import { RiFacebookCircleFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";

function Social() {
  return (
    <div className='md:pl-20 md:pr-20 px-5 py-10'>
      <h1 className="text-4xl font-bold leading-tight">SOCIAL</h1>
      <p className="mt-5 text-md">Follow us for the latest updates.</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-40 mt-10'> {/* Adjusted grid classes */}

        {/* <Link href="" className='group flex gap-2 items-cente max-w-40'>
          <div><RiFacebookCircleFill className=' group-hover:text-blue-500 duration-200 text-4xl' /></div>
          <div className='flex flex-col'>
            <p className='font-semibold group-hover:text-blue-500 duration-200'>Facebook</p>
            <p className='text-xs'>Furde Infotech</p>
          </div>
        </Link> */}
        
        <Link href="https://www.instagram.com/furdeinfotech/" target='_blank' className='group flex gap-2 items-center max-w-40'>
          <div><AiFillInstagram className='text-4xl group-hover:text-rose-600 duration-200' /></div>
          <div className='flex flex-col'>
            <p className='font-semibold group-hover:text-rose-600 duration-200'>Instagram</p>
            <p className='text-xs'>@furdeinfotech</p>
          </div>
        </Link>

        <Link href="https://x.com/FurdeInfotech" target='_blank' className='group flex gap-2 items-center max-w-40'>
          <div><FaSquareXTwitter className='text-3xl' /></div>
          <div className='flex flex-col'>
            <p className='font-semibold'>X</p>
            <p className='text-xs'>@ FurdeInfotech</p>
          </div>
        </Link>

        <Link href="https://www.linkedin.com/company/furde-infotech-pvt-ltd?trk=blended-typeahead" target='_blank' className='group flex gap-2 items-center max-w-42'>
          <div><FaLinkedin className='text-3xl group-hover:text-blue-600 duration-200' /></div>
          <div className='flex flex-col'>
            <p className='font-semibold group-hover:text-blue-600 duration-200'>LinkedIn</p>
            <p className='text-xs'>Furde Infotech Pvt Ltd</p>
          </div>
        </Link>

        {/* <Link href="" className=' group flex gap-2 items-center max-w-40'>
          <div><FaYoutube className='text-3xl group-hover:text-red-600 duration-200' /></div>
          <div className='flex flex-col'>
            <p className='font-semibold group-hover:text-red-600 duration-200'>YouTube</p>
            <p className='text-xs'>Furde Infotech</p>
          </div>
        </Link> */}

      </div>
    </div>
  );
}

export default Social;
