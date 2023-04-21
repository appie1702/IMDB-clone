"use client"

import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from "react-icons/ai"
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'
import {signOut} from 'next-auth/react'
import signinHook from "../hooks/signin"

const Header = ({currentUser}) => {
    const signinhook = signinHook();
    console.log(currentUser)
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
        <div className='flex'>
            <MenuItem title="HOME" address="/" Icon={AiFillHome}/>
            <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill}/>
        </div>
        {currentUser && (
            <div className="cursor-pointer pt-1 text-xl font-bold  ">
                Welcome! <span className='text-[#f4230c] dark:hover:text-white hover:text-black'>{currentUser.toUpperCase()}</span>
            </div>
        )}
        
        <div className='flex pr-2 items-center justify-between space-x-5'>
            <DarkModeSwitch/>
            <Link href="/">
                <h2 className="text-2xl">
                    <span className="font-bold bg-[#f4230c] rounded-lg py-1 px-2 mr-1">IMDB</span>
                    <span className='text-xl hidden sm:inline'>Clone</span>
                    
                </h2>
            </Link>
            {currentUser ? (
                <div onClick={()=>signOut()}  className=' cursor-pointer pt-1 text-lg font-semibold text-[#f4230c] dark:hover:text-white hover:text-black'>Logout</div>
            ) : (
                <div onClick={signinhook.onOpen} className=' cursor-pointer pt-1 text-lg font-semibold text-[#f4230c] dark:hover:text-white hover:text-black'>Login</div>
            )}
        </div>
    </div>
  )
}

export default Header