"use client"

import { use, useEffect } from "react"

export default function Error({error,reset}) {
    useEffect(()=>{
        console.log(error);

    },[error])

    return (
        <div className="text-center mt-12">
        <h1 className="text-2xl">Something went wrong</h1>
        <button onClick={()=> reset()} className="hover:text-[#f4230c] px-4 py-2 my-2 rounded-md bg-gray-400 text-2xl">Try Again</button>
        </div>

    )
}