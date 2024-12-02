"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const Filters = ["All", "Office", "Events", "Client Visits"];

function Gallery() {
  const [filterValue, setFilterValue] = useState("All");

  return (
    <div className="glass-effect z-20 w-full absolute sm:bottom-0 bottom-10 md:pl-[30%] px-5 py-5 md:pr-[30%] flex items-center justify-between">
      {Filters.map((filter) => (
        <motion.button
          className={clsx(
            "relative z-10 cursor-pointer md:text-base text-sm font-semibold px-4 py-1.5 transition rounded-full",
            {
              "text-black font-bold": filter === filterValue,
              "text-white": filter !== filterValue,
            }
          )}
          key={filter}
          onClick={() => setFilterValue(filter)}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          {filter}
          {filter === filterValue && (
            <motion.span
              className="absolute inset-0 -z-10 rounded-full bg-white"
              layoutId="galleryAtiveFilter"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}

export default Gallery;


// {navbar.map((nav, index) => {
//   const isActive =
//     pathname === nav.link || pathname.startsWith(nav.link + "/");

//   if (nav.title === "Services" && nav.subLinks) {
//     return (
//       <DropdownMenu key={index}>
//         <DropdownMenuTrigger asChild>
//           <li
//             className={`cursor-pointer flex flex-row items-center gap-2 duration-200 relative py-1.5 px-4 ${
//               isActive ? "text-black" : ""
//             }`}
//           >
//             {nav.title}
//             <ChevronDown size={18} />
//             {isActive && (
//               <motion.span
//                 className="absolute inset-0 -z-10 rounded-full bg-white"
//                 layoutId="navbarActiveFilter"
//                 transition={{
//                   type: "spring",
//                   stiffness: 400,
//                   damping: 30,
//                 }}
//               ></motion.span>
//             )}
//           </li>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent
//           align="center"
//           sideOffset={8}
//           className="glass-effect text-white w-40"
//         >
//           {nav.subLinks.map((subLink, subIndex) => (
//             <DropdownMenuItem asChild key={subIndex}>
//               <Link
//                 href={subLink.link}
//                 className="flex items-center gap-2 px-2 py-1 hover:bg-gray-700 rounded"
//               >
//                 {subLink.icon}
//                 <span>{subLink.title}</span>
//               </Link>
//             </DropdownMenuItem>
//           ))}
//         </DropdownMenuContent>
//       </DropdownMenu>
//     );
//   } else {
//     return (
//       <Link href={nav.link} key={index}>
//         <li
//           className={`cursor-pointer duration-200 relative px-4 py-1.5 ${
//             isActive ? "text-black" : ""
//           }`}
//         >
//           {nav.title}
//           {isActive && (
//             <motion.span
//             className="absolute inset-0 -z-10 rounded-full bg-white"
//             layoutId="navbarActiveFilter"
//             transition={{
//               type: "spring",
//               stiffness: 400,
//               damping: 30,
//             }}
//           ></motion.span>
//           )}
//         </li>
//       </Link>
//     );
//   }
// })}