import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function page() {
  return (
    <div className="grid pt-60 pb-12 px-40 grid-cols-1 sm:grid-cols-3 gap-10">
      <Skeleton className="cardShadow bg-white  overflow-hidden min-h-[350px] rounded-lg flex justify-between flex-col">
        <div className="py-5 px-5">
          <Skeleton className=" h-8 w-full" />
          <Skeleton className=" mt-2 h-6 w-1/2" />
          <Skeleton className=" mt-6 w-full h-4" />
          <Skeleton className=" mt-2 w-full h-4" />
          <Skeleton className=" mt-2 w-[75%] h-4" />
          <Skeleton className=" mt-6 w-[60%] h-6" />
          <Skeleton className=" mt-3 w-32 h-6" />
        </div>
        <div className="flex justify-end pb-5 px-5">
          <Skeleton className=" h-8 w-28" />
        </div>
      </Skeleton>
      <Skeleton className="cardShadow bg-white  overflow-hidden min-h-[350px] rounded-lg flex justify-between flex-col">
        <div className="py-5 px-5">
          <Skeleton className=" h-8 w-full" />
          <Skeleton className=" mt-2 h-6 w-1/2" />
          <Skeleton className=" mt-6 w-full h-4" />
          <Skeleton className=" mt-2 w-full h-4" />
          <Skeleton className=" mt-2 w-[75%] h-4" />
          <div className="mt-6 flex flex-row items-center gap-3">
            {" "}
            <Skeleton className="rounded-full w-6 h-6" />{" "}
            <Skeleton className="  w-[60%] h-6" />
          </div>
          <div className="mt-2 flex flex-row items-center gap-3">
            {" "}
            <Skeleton className="rounded-full w-6 h-6" />{" "}
            <Skeleton className="  w-[60%] h-6" />
          </div>
        </div>
        <div className="flex justify-end pb-5 px-5">
          <Skeleton className=" h-8 w-28" />
        </div>
      </Skeleton>
      <Skeleton className="cardShadow relative bg-white overflow-hidden min-h-[350px] rounded-lg flex justify-between flex-col">
        <div className="py-5 px-5">
          <Skeleton className=" h-8 w-full" />
          <Skeleton className=" mt-2 h-6 w-1/2" />
          <Skeleton className=" mt-6 w-full h-4" />
          <Skeleton className=" mt-2 w-full h-4" />
          <Skeleton className=" mt-2 w-[75%] h-4" />
          <div className="mt-6 flex flex-row items-center gap-3">
            {" "}
            <Skeleton className="rounded-full w-6 h-6" />{" "}
            <Skeleton className="  w-[60%] h-6" />
          </div>
          <div className="mt-2 flex flex-row items-center gap-3">
            {" "}
            <Skeleton className="rounded-full w-6 h-6" />{" "}
            <Skeleton className="  w-[60%] h-6" />
          </div>
        </div>
        <div className="absolute bottom-0 w-full py-5 px-5 flex justify-between items-center">
          <div>
            <Skeleton className=" h-3 w-28" />
          </div>
          <div className=" flex flex-row justify-center items-center gap-6">
            <Skeleton className=" h-8 w-8" />
            <Skeleton className=" h-8 w-8" />
          </div>
        </div>
      </Skeleton>
    </div>
  );
}

export default page;
