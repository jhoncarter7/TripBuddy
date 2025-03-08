import React from "react";


interface ICardProps {

  imgUrl: string,
  text: string
}
const Durationcard: React.FC<ICardProps> = ({ imgUrl, text }) => {
    console.log(imgUrl)
  return (

       <>
        
          <div className=" h-[25vh] md:h-[30vh] lg:h-[40vh] border-[1px] border-gray-200 rounded-lg bg-white shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 cursor-pointer hover:bg-[#E5F9F3] hover:border-[#00C684] flex flex-col gap-y-12 items-center justify-center" >
            <div className={` rounded-full size-24`} style={{ backgroundImage: `url(${imgUrl})` }}/>
            <p className="text-lg font-medium text-gray-600">{text}</p>
          </div>
      
       </>
    
  );
};

export default Durationcard;
