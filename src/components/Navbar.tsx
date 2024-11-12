import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import logomain from '@/assets/fitlogo.png';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { ChevronDown, Headphones, BarChart3, Laptop } from 'lucide-react';

const navbar = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "Services",
    link: "/services",
    subLinks: [
      { title: "IT", link: "/services/IT", icon: <Laptop size={16} className='mr-1'/> },
      { title: "BPO", link: "/services/BPO", icon: <Headphones size={16} className='mr-1'/> },
      { title: "KPO", link: "/services/KPO", icon: <BarChart3 size={16} className='mr-1'/> }
    ]
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
    title: "Contact Us",
    link: "/contact-us"
  },
];

export default function Navbar() {
  return (
    <nav className='glass-effect fixed w-full z-50 md:pl-20 px-5 py-5 md:pr-20 flex items-center justify-between'>
      <Link href="/"><Image src={logomain} alt='FIT logo' height={50} width={150} /></Link>
      
      <ul className='text-white flex justify-center items-center gap-14'>
        {navbar.map((nav, index) => {
          if (nav.title === "Services" && nav.subLinks) {
            // Render Dropdown for "Services"
            return (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger asChild>
                  <li className='cursor-pointer flex flex-row items-center gap-2'>{nav.title} <ChevronDown size={18} /></li>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" sideOffset={8} className="glass-effect text-white w-40">
                  {nav.subLinks.map((subLink, subIndex) => (
                    <DropdownMenuItem asChild key={subIndex}>
                      <Link href={subLink.link} className="flex items-center gap-2 px-2 py-1 hover:bg-gray-700 rounded">
                        {subLink.icon}
                        <span>{subLink.title}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          } else {
            // Render regular nav items
            return (
              <Link href={nav.link} key={index}>
                <li className='cursor-pointer'>{nav.title}</li>
              </Link>
            );
          }
        })}
      </ul>
    </nav>
  );
}
