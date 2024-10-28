import Image from 'next/image'
import React from 'react'
import logomain from '@/assets/fitlogo.png'
import Link from 'next/link'
// import logomain from '@/assets/fitmain.png'

const navbar = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "Services",
    link: "/services"
  },
  {
    title: "Careers",
    link: "/careers"
  },
  {
    title: "About Us",
    link: "/about-us"
  },
  {
    title: "Contact US",
    link: "/contact-us"
  },
]

export default function Navbar() {
  return (
    <nav className='glass-effect fixed w-full z-50 md:pl-20 px-5 py-5 md:pr-20 flex items-center justify-between'>
        <Link href="/"><Image src={logomain} alt='FIT logo' height={50} width={150}/></Link>
        <ul className=' text-white flex justify-center items-center gap-14'>
            {
              navbar.map((nav, index) => {
                return (
                  <Link href={nav.link} key={index}><li className=' cursor-pointer'>{nav.title}</li></Link>
                )
              })
            }
        </ul>
    </nav>
  )
}
