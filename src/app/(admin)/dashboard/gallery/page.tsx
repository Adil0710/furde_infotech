"use client"
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'

function page() {
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [deleteGalleryId, setDeleteGalleryId] = useState<number | null>(null);
  return (
    <section className="py-5 sm:px-5 px-0 h-auto w-auto flex flex-col items-start sm:items-center justify-center">
         <div className="relative md:w-1/2 w-[63%] sm:ml-0 ml-5">
        <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <Input
          className="bg-neutral-50 pl-10 shadow-none"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className=" bg-neutral-50 sm:min-w-[80vw] sm:max-w-[80vw] w-screen sm:rounded-2xl rounded-none px-5 py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 md:px-20 lg:grid-cols-4 sm:gap-8 gap-4 md:mt-12 mt-10">

      </div>
    </section>
  )
}

export default page