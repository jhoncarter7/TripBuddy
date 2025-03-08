"use client";
import React, { useRef, useState } from "react";
import { Search, X, ChevronLeft  } from "lucide-react";
import { useRouter } from "next/navigation";
const res = [
  "Maldives",
  "Egypt",
  "Bali",
  "Dubai",
  "Japan",
  "Australia",
  "Thailand",
];

const Customize = () => {
  const [destination, setDestination] = useState<string[] | undefined>(res);
  const router = useRouter()
  const ref = useRef<HTMLInputElement>(null);
  const handleFilter = () => {
    const filterDestination = res.filter((destination) =>
      destination
        .toLowerCase()
        .includes(ref.current?.value?.toLocaleLowerCase() || "")
    );
    setDestination(filterDestination);
  };

  return (
    <section className="h-screen">
      <div className=" flex flex-col gap-y-8 justify-center items-center h-full my-auto">
        <div className="px-6 flex h-[40vh] flex-col gap-y-8 md:gap-y-16 justify-end">
          <div className="flex justify-between gap-4">
          <div className="my-auto cursor-pointer block md:hidden  mt-1 p-1 rounded-full bg-gray-300" onClick={()=> router.push('/')}>
            <ChevronLeft />
          </div>
            <h1 className="text-xl mx-auto font-medium">
              What&apos;s{" "}
              <span className="text-[#17B770]  text-2xl font-medium">
                {" "}
                your pick
              </span>{" "}
              for your next vacation ?{" "}
            </h1>
            <div className="my-auto hidden md:block pt-1 cursor-pointer" onClick={()=> router.push('/')}><X size={34} className="text-gray-400"/></div>
          
          </div>
          <div className="relative mx-auto">
            <input
              type="text"
              name=""
              id=""
              ref={ref}
              onChange={handleFilter}
              className=" border-[1px] placeholder:font-bold placeholder:text-xl placeholder:text-gray-300 w-[90vw] md:w-[70vw] lg:w-[50vw] rounded-lg shadow-md px-6 py-4 pl-12"
              placeholder="Pick your destination"
            />
            <Search
              size={24}
              color="#7d7d7d"
              className="absolute inset-0  translate-y-4/6 left-4"
            />
          </div>
        </div>

        {/* list */}
        <div className="  h-[60vh] pb-4 mb-6 overflow-scroll text-gray-500 flex gap-y-4 flex-col ">
          {destination?.map((item, id) => (
            <div key={id} className="cursor-pointer ">
              <p className="text-xl font-medium flex items-center pl-4 md:pl-8 w-[90vw] md:w-[70vw] lg:w-[50vw] hover:rounded-xl border-[1px] border-white hover:bg-[#E5F9F3]  hover:border-[#00B277] h-12">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customize;
