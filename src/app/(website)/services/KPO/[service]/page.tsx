import { notFound } from "next/navigation";

import Image from "next/image";
import { kpoServices } from "@/lib/data";

interface ServiceDetailsProps {
  params: {
    service: string;
  };
}

// Fetch the static paths
export async function generateStaticParams() {
  return kpoServices.map((service) => ({
    service: service.link.split("/").pop(), // Extract the service slug from the link
  }));
}

// Dynamic route component
const ServiceDetails = async ({ params }: ServiceDetailsProps) => {
  // Find the matching service data
  const serviceData = kpoServices.find(
    (item) => item.link.split("/").pop() === params.service
  );

  // Handle if no data found
  if (!serviceData) {
    notFound();
  }

  return (
    <section>
      <div className="relative min-h-screen">
        <Image
          src={serviceData.backgroundImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="-z-[10]" // Ensure the image is behind other content
          priority
        />
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 md:pl-20 px-5 w-full sm:w-1/2">
          <h1 className=" text-4xl font-bold leading-tight text-white">
            {serviceData.title}
          </h1>

          <p className=" text-white mt-8 text-md">
            {serviceData.descriptionvm}
          </p>
          <div className=" flex flex-row gap-5 mt-16 w-full"></div>
        </div>
      </div>

      {/* Bottom Side */}
      <div className="bg-white md:pl-20 md:pr-20 px-5 py-20 text-black flex flex-col justify-center items-center gap-28">
        {serviceData.cards.map((card, index) => (
          <div className="sm:grid hidden grid-cols-3 w-full gap-4" key={index}>
            {index % 2 === 1 ? (
              <>
                {/* Image on Left for even index */}
                <div className="col-span-1">
                  <Image
                    src={card.image}
                    alt={card.title}
                    className="rounded-md cardShadow"
                  />
                </div>

                {/* Text on Right for even index */}
                <div className="col-span-2 relative flex items-center">
                  {" "}
                  {/* Adjusted padding */}
                  <div className="  w-[70%] absolute right-0">
                    <h1 className="font-semibold text-3xl uppercase">
                      {card.title}
                    </h1>
                    <ul className="mt-8 flex flex-col gap-4 text-gray-500 list-disc list-inside -ml-3">
                      {card.descriptionLines.map((line, lineIndex) => (
                        <li key={lineIndex} className="pl-4">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Text on Left for odd index */}
                <div className="col-span-2 flex items-center">
                  <div>
                    <h1 className="font-semibold text-3xl uppercase">
                      {card.title}
                    </h1>
                    <ul className="mt-8 flex flex-col gap-4 text-gray-500 list-disc pl-5">
                      {card.descriptionLines.map((line, lineIndex) => (
                        <li key={lineIndex}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image on Right for odd index */}
                <div className="col-span-1">
                  <Image
                    src={card.image}
                    alt={card.title}
                    className="rounded-md cardShadow"
                  />
                </div>
              </>
            )}
          </div>
        ))}

        {serviceData.cards.map((card, index) => (
          <div
            key={index}
            className="sm:hidden flex flex-col justify-center items-center w-full h-full"
          >
            <h1 className="font-semibold text-3xl uppercase">{card.title}</h1>

            <Image
              src={card.image}
              alt={card.title}
              className="rounded-md cardShadow mt-6"
            />
            <ul className="mt-8 flex flex-col gap-4 text-gray-500 list-disc pl-5">
              {card.descriptionLines.map((line, lineIndex) => (
                <li key={lineIndex}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceDetails;

{
  /* <div
      style={{
        backgroundImage: `url(${serviceData.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen text-white px-5 py-10"
    >
      <div className="bg-black bg-opacity-50 p-10 rounded">
        <h1 className="text-5xl font-bold mb-5">{serviceData.title}</h1>
        <p className="text-lg mb-10">{serviceData.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {serviceData.cards.map((card, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg p-5 shadow-lg"
            >
              <Image
                src={card.image}
                alt={`Card image for ${serviceData.title}`}
                width={300}
                height={200}
                className="rounded mb-4"
              />
              <div className="space-y-2">
                {card.descriptionLines.map((line, lineIndex) => (
                  <p key={lineIndex} className="text-sm">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div> */
}
