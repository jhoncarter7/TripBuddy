import React from 'react'
import { Search } from 'lucide-react';


interface searchBarInter{
navigate?: ()=> void
}
const SearchBar: React.FC<searchBarInter> = ({navigate}) => {
    
  return (
    <div className='absolute inset-0 top-7/12 item flex justify-center h-10' >
       <div className='relative  cursor-pointer' onClick={navigate}>
       <input type="text"  className=' border-4 border-x-[#B0FF53] border-t-[#C7FF53] border-b-[#99FF53] rounded-2xl p-3 px-12 bg-white w-sm ' placeholder='Search countries, cities'  />
       <div className='absolute inset-0 translate-y-1/2 left-5'>
       <Search size={16}/>
       </div>
       </div>
    </div>
  )
}

export default SearchBar