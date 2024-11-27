import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe } from "lucide-react";
import React from "react";

function Page() {
  return (
    <section className="py-5 sm:px-5 px-0 h-auto w-auto flex items-center justify-center">
      <div className="grid gap-6 sm:min-w-[81vw] sm:max-w-[80vw] w-screen bg-neutral-50 sm:rounded-2xl rounded-none p-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {Array.from({ length: 8 }).map((_, index) => (
          <Card
            key={index}
            // className="bg-white rounded-lg shadow-sm border flex items-center justify-center p-4 md:w-60 w-full md:h-40 h-20"
          >
            <CardHeader>
              <CardTitle className="flex sm:text-base sm:flex-row flex-col-reverse gap-5 justify-between items-start sm:items-center"><p>Google Search</p><Globe strokeWidth={1.50} size={20}/></CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">{index + 1}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Page;
