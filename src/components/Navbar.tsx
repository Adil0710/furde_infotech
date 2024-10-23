import Image from 'next/image'
import React from 'react'
// import logo from '@/assets/fitlogo.png'
import logomain from '@/assets/fitmain.png'



export default function Navbar() {
  return (
    <nav className='glass-effect fixed w-full z-50 md:pl-20 px-5 py-5 md:pr-20 flex items-center justify-between'>
        <Image src={logomain} alt='FIT logo' height={50} width={150}/>
        <ul className=' text-gray-300 flex justify-center items-center gap-14'>
            <li className=' cursor-pointer'>Home</li>
            <li className=' cursor-pointer'>Services</li>
            {/* <li className=' cursor-pointer'>Industries</li> */}
            <li className=' cursor-pointer'>Careers</li>
            <li className=' cursor-pointer'><a href="/about-us">About Us</a></li>
            <li className=' cursor-pointer'><a href="/page2">Contact Us</a></li>
        </ul>
    </nav>
  )
}
