import React from "react";

function Page() {
  return (
    <section className="py-5 px-5 h-auto w-auto flex items-center justify-center">
      <div className="grid gap-6 bg-neutral-50 min-w-[81vw] max-w-[80vw] rounded-2xl p-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md flex items-center justify-center p-4 md:w-60 w-full md:h-40 h-20"
          >
            <p className="text-lg font-medium text-gray-700">Board {index + 1}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Page;
