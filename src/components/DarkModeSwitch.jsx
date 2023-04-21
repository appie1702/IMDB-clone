"use client"

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { BsFillMoonFill } from 'react-icons/bs'
import {MdLightMode} from 'react-icons/md'

const DarkModeSwitch = () => {
    const {systemTheme, theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false)

    const curr_theme = theme === "system" ? systemTheme : theme;


    //only when the UI is loaded we will check the current_theme
    //to remove the mismatch that may occur between theme of server
    //side and client side.
    useEffect(()=>{
        setMounted(true);
    },[])

  return (
    <>
        { mounted && (curr_theme === "dark" ? 
        (
            <MdLightMode className="cursor-pointer" onClick={()=>setTheme("light")}/>
        ) : 
        (
            <BsFillMoonFill className="cursor-pointer" onClick={()=>setTheme("dark")}/>
        ))}
    </>
  )
}

export default DarkModeSwitch