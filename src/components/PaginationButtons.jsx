"use client"

import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import React from 'react'
import { useRouter } from 'next/navigation';
import toprated_page from "../hooks/toprated_page";
import trending_page from "../hooks/trending_page";


const PaginationButtons = ({genre, page}) => {
    const trending_page_no = trending_page();
    const toprated_page_no = toprated_page();
    const router = useRouter();

    const handleOnclickIncre = ()=>{
        if(genre == "fetchTrending"){
            router.push(`/trending/${trending_page_no.page}`);
            console.log(trending_page_no.page)
        }else{
            router.push(`/toprated/${toprated_page_no.page}`);
            console.log(toprated_page_no.page)
        }
    }

    const handleOnclickDecre = ()=>{
        
        if(genre == "fetchTrending"){
            router.push(`/trending/${trending_page_no.page}`);
            console.log(trending_page_no.page)
        }else{
            router.push(`/toprated/${toprated_page_no.page}`);
            console.log(toprated_page_no.page)
        }
    }


    const handleClickincre = (e)=>{
        e.preventDefault();

        if(genre=="fetchTrending"){
            trending_page_no.incre();
        }else{
            toprated_page_no.incre();
        }
        handleOnclickIncre();
    }


    const handleClickdecre = (e)=>{
        e.preventDefault();

        if(genre=="fetchTrending"){
            trending_page_no.decre();
        }else{
            toprated_page_no.decre();
        }
        handleOnclickDecre();
    }

  return (
    <div className='flex flex-row items-center justify-center space-x-12 mb-10 mt-4'>
        <button disabled={parseInt(page) === 1} onClick={()=>router.push(`/?genre=${genre}&page=${parseInt(page)-1}`)} className='rounded-full dark:bg-slate-800 bg-slate-200 p-3 hover:bg-[#f4230c] dark:hover:hover:bg-[#f4230c]'><AiOutlineArrowLeft size={24}/></button>
        <div className='flex w-12 h-12 items-center justify-center rounded-full bg-slate-300 dark:bg-slate-800 text-[#f4230c] text-2xl font-semibold'>{page}</div>
        <button onClick={()=>router.push(`/?genre=${genre}&page=${parseInt(page)+1}`)} className='rounded-full dark:bg-slate-800 bg-slate-200 p-3 hover:bg-[#f4230c] dark:hover:hover:bg-[#f4230c]'><AiOutlineArrowRight size={24}/></button>
    </div>
  )
}

export default PaginationButtons