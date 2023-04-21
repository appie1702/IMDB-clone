"use client"

import { handleClientScriptLoad } from 'next/script'
import React, { useCallback, useEffect, useState } from 'react'
import {signIn, signOut} from 'next-auth/react'
import signinHook from "../../hooks/signin"


const Modal = () => {
    const signinhook = signinHook();
    const [isMounted, setisMounted] = useState(false)
    const [showModal, setshowModal] = useState(signinhook.isOpen)
    


    useEffect(()=>{
        setisMounted(true)
        setshowModal(signinhook.isOpen)
    },[signinhook.isOpen])

    
    const handleSubmit = useCallback((text) =>{
        signIn(text);
        signinhook.onClose()
    })

    if(!isMounted){
        return null
    }

  return (
    <>
    {isMounted && showModal && (
        <>
            {/* in last classname: slash reduce the opacity to 70%*/}
            <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed 
            inset-0 z-50 outline-none focus:outline-none bg-neutral-900/70'>
                <div
                    className='relative w-full md:w-4/6 md:3/6 lg:3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto'
                >
                    <div className='flex flex-col items-center p-6 rounted-t justify-center relative gap-4'>
                        <button onClick={()=>handleSubmit("google")} className='px-5 py-3 bg-black text text-[#f4230c] hover:text-white rounded-lg'>Sign in with Google</button>
                        <button onClick={()=>handleSubmit("github")} className='px-5 py-3 bg-black text text-[#f4230c] hover:text-white rounded-lg'>Sign in with Github</button>
                    </div>
                </div>
            </div>
        </>
    )}
    </>
  )
}

export default Modal