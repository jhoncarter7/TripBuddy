"use client"
import Banner from "@/components/Banner";
import DestinationCard from "@/components/DestinationCard";
import SearchBar from "@/components/DummySearch";
import { useRouter } from "next/navigation";


export default function Home() {
   const router = useRouter()
  return (
   <div >
    <div className="w-full relative">
    <Banner/>
    <SearchBar navigate={()=> router.push('/customize')}/>
    <h1 className="absolute top-5/12 inset-0 flex gap-x-1.5 h-10 justify-center font-extrabold text-2xl md:text-3xl lg:text-4xl text-white">Plan a <span className="text-green-300"> Hassle - free </span> holiday</h1>
    </div>
   <div className="py-24">
    <h1 className="text-2xl text-gray-500 font-semibold pb-4 max-w-4/5 mx-auto pl-4 text-center">POPULAR DESTINATIONS</h1>
   <DestinationCard/>
   </div>
   </div>
  );
}


