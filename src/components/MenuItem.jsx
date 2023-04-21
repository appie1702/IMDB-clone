import Link from 'next/link'
import React from 'react'

const MenuItem = ({title, address, Icon}) => {
  return (
    <div>
        <Link href={address} className="mx-4 md:mx-6 hover:text-[#f4230c]">
            <Icon className="text-2xl mx-4 sm:hidden inline"/>
            <p className="hidden sm:inline my-2 text-sm">{title}</p>
        </Link>
    </div>
  )
}

export default MenuItem