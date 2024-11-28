import React from 'react'
import { Skeleton } from './ui/skeleton'

function DashboardCardLoading() {
  return (
    <Skeleton className="rounded-xl bg-card shadow ">
    <div className="flex flex-col space-y-1.5 p-6">
      <div className="flex sm:flex-row flex-col-reverse gap-5 justify-between items-start sm:items-center">
        <Skeleton className="w-28 h-6" />
        <Skeleton className="w-6 h-6 rounded-full" />
      </div>
    </div>
    <div className="p-6 pt-0">
      <Skeleton className="h-8 w-12" />
    </div>
  </Skeleton>
  )
}

export default DashboardCardLoading