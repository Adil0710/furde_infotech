"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import floor3 from "@/assets/floor3.jpeg";
import floor5 from "@/assets/floor5.jpeg";
import floor6 from "@/assets/floor6.jpeg";
import reception from "@/assets/reception.jpeg";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { Skeleton } from "./ui/skeleton";

type Gallery = {
  id: string;
  title: string;
  category: string;
  image: string;
  orientation: string;
};

const Filters = ["All", "Office", "Events", "Client Visits"];

function Gallery() {
  const [filterValue, setFilterValue] = useState("All");
  const [galleryItems, setGalleryItems] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState(true);

  const { toast } = useToast();

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const fetchGalleryItems = async () => {
    setLoading(true);
    try {
      const response = await axios.get<{ gallery: Gallery[] }>(
        "/api/get-photo"
      );
      setGalleryItems(response.data.gallery);
      console.log(response.data.gallery);
    } catch (error) {
      console.log(error);
      toast({
        title: "Try Refreshing",
        description: `Failed to load Gallery:- ${error}`,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Filtered items based on the selected filter value
  const filteredItems =
    filterValue === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filterValue);

  return (
    <div className="relative w-full h-auto">
      {/* Filter Buttons */}
      <div className="glass-effect z-20 w-full absolute -top-20 sm:-top-14 md:pl-[30%] px-5 py-5 md:pr-[30%] flex items-center justify-between">
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

      {/* Grid Container */}
      {/* Wrap grid with AnimatePresence */}

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 md:px-20 px-5 lg:grid-cols-4 sm:gap-8 gap-4 pt-10 sm:pt-20 pb-10 sm:pb-12">
        {loading ? (
          <>
            {Array.from({ length: 8 }).map((_, index) => (
              <Skeleton className=" bg-gray-100 w-64 h-80" key={index} />
            ))}
          </>
        ) : (
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={`${item.id}`}
                className={clsx(
                  "relative group overflow-hidden flex items-center justify-center rounded-lg",
                  item.orientation === "vertical"
                    ? "col-span-1 row-span-2"
                    : "col-span-1 row-span-1"
                )}
                initial={{ opacity: 0, scale: 0.5, y: 200 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 200 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="responsive"
                  objectFit="cover"
                  width={100}
                  height={100}
                  className="rounded-lg transition group-hover:blur-sm"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                  className="absolute z-40 hidden bg-black/50 h-full w-full px-2 transition group-hover:flex rounded-lg items-center justify-center"
                >
                  <p className=" font-semibold text-white">{item.title}</p>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}

export default Gallery;
