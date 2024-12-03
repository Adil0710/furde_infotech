import Image from 'next/image'
import React from 'react'
import floor from "@/assets/Floor.jpg"
import Gallery from '@/components/Gallery'
function page() {
  return (
   <section>
    <div className="relative sm:min-h-[90vh] h-[50vh]">
    <Image
          src={floor}
          alt="Background Image"
          layout="fill"
          quality={100}
          className="-z-[10] sm:object-cover object-contain top-0 left-0 h-96" // Ensure the image is behind other content
          priority
        />
    </div>
    <Gallery/>
   </section>
  )
}

export default page