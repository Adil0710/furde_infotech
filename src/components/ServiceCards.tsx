import Image from 'next/image'
import React from 'react'
import mobile from "@/assets/mobile.png"
import Link from 'next/link'

function ServiceCards() {
  return (
    <div className=' mt-8 grid grid-cols-3 gap-8'>
        <div className='cardShadow bg-white flex flex-col text-[#111827]  overflow-hidden min-h-[350px] rounded-lg '>
            <div>
                <Image src={mobile} alt='service'/>
            </div>
            <div className='p-5'>
                <h1 className=' font-semibold text-2xl'>Mobile App Development</h1>
                <p className=' text-gray-700 mt-4'>Custom mobile solutions for iOS, Android, and cross-platform needs.</p>
                <div className=' flex justify-end mt-6'>
                    <Link href="" className="rounded bg-blue-500 text-white w-36 flex items-center gap-2 justify-center py-2 hover:bg-blue-800 duration-500">View More</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceCards