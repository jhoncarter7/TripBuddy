
import React from "react";
import { X } from "lucide-react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
interface IstepProps{
step: number
}


const Stepper: React.FC<IstepProps> = ({step}) => {
    const {country} = useParams()
    const router = useRouter()
  return (
    <div className=" w-5/6 md:w-4/6 lg:w-1/2 mx-auto pt-24">
      <h1 className="font-semibold text-gray-500 text-sm">
        NOW PLANNING YOUR HOLIDAY TO
      </h1>
      <div className="flex gap-x-2 pt-3 items-center justify-between">
        <div className="flex gap-x-2 items-center">
       
          <div
           
            className="rounded-lg py-2 px-4 shadow-md border-1 font-semibold text-gray-600 cursor-pointer"
          >
            {country}
          </div>
          <div
           
            className="rounded-lg py-2 px-4 shadow-md border-1 font-semibold text-gray-600 cursor-pointer"
          >
           6-8 days
          </div>
     
        </div>
        <X  className="cursor-pointer" onClick={()=> router.push("/")}/>
      </div>
      
      <div className="flex  gap-x-1 pt-8">
        {
            Array.from({ length: 4 }).map((_, id)=> (
                <div key={id} className="w-5/6 md:w-4/6 lg:w-1/2">
                 <div className={`rounded-sm h-2 min-w-1/4   ${step >= id ? "bg-[#E5B52E]": "bg-gray-200"}`}/>
                </div>
            ))
        }
      </div>
      
    </div>
  );
};

export default Stepper;
