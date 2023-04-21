"use client"

import Link from 'next/link'
import React from 'react'
import {useSearchParams} from "next/navigation"

const NavbarItem = ({title, param}) => {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");
  return (
    <div>
        <Link href={`/?genre=${param}&page=${1}`}
        className={`hover:text-red-100 dark:hover:text-slate-800 p-3 font-semibold 
        ${genre && genre===param && "underline underline-offset-8 decoration-4  decoration-slate-800 rounded-lg"}`}>
            {title}
        </Link>
    </div>
  )
}

export default NavbarItem
