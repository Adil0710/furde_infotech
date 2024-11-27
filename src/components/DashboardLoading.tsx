import React from "react";
import { Skeleton } from "./ui/skeleton";

function DashboardLoading() {
  return (
    <Skeleton
      className="cardShadow relative bg-white overflow-hidden min-h-[350px] rounded-lg flex justify-between flex-col"
    >
      <div className="py-5 px-5">
        <Skeleton className=" h-8 w-full" />
        <Skeleton className=" mt-2 h-6 w-1/2" />
        <Skeleton className=" mt-6 w-full h-4" />
        <Skeleton className=" mt-2 w-full h-4" />
        <Skeleton className=" mt-2 w-[75%] h-4" />
        <div className="mt-12 flex flex-row items-center gap-3">
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
  );
}

export default DashboardLoading;
