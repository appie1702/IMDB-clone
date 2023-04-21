import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className='bg-[#f4230c] py-2 flex justify-center space-x-4'>
            <NavbarItem title="Trending" param="fetchTrending"/>
            <NavbarItem title="Top Rated" param="fetchToprated"/>
    </div>
  )
}

export default Navbar