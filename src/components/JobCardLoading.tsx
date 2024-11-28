import React from "react";
import { Skeleton } from "./ui/skeleton";

function JobCardLoading() {
  return (
    <Skeleton className="cardShadow bg-white  overflow-hidden min-h-[350px] rounded-lg flex justify-between flex-col max-w-full">
      <div className="py-5 px-5">
        <Skeleton className=" h-8 w-full" />
        <Skeleton className=" mt-3 h-6 w-1/2" />
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
          <Skeleton className="  w-32 h-6" />
        </div>
      </div>
      <div className="flex justify-end pb-5 px-5">
        <Skeleton className=" h-9 w-36" />
      </div>
    </Skeleton>
  );
}

export default JobCardLoading;
