"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const SearchBox = () => {
  const [search, setsearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!search) return;
    router.push(`/search/${search}`);
    setsearch("")
  }

  return (
    <form onSubmit={handleSubmit} className=' flex w-full max-w-6xl mx-auto p-2 justify-between space-x-2'>
      <input
        value={search}
        onChange={(e)=>setsearch(e.target.value)}
        type='text'
        placeholder='Search keywords...'
        className=' w-full h-10 rounded-md placeholder-slate-500 outline-none dark:bg-gray-800 bg-gray-200 pl-3 flex-1'
      />
      <button disabled={!search} type='submit' className=' hover:text-[#f4230c] disabled:text-gray-500'>Search</button>
    </form>
  )
}

export default SearchBox