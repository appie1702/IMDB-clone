import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'


const Card = ({result}) => {
  return (
    <div className=' cursor-pointer p-3 sm:hover:shadow-[#f4230c] sm:shadow-xl 
    rounded-lg m-2 transition-shadow duration-200 group justify-center min-h-14'>
        <Link href={`/movie/${result.id}`}>
            <Image
                src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                width={600}
                height={450}
                style={{
                    maxWidth: "100%",
                    maxheight: "auto",
                }}
                className='rounded-t-lg group-hover:opacity-90 transition-opacity duration-200 object-contain'
                placeholder='blur'
                blurDataURL='/spinner.svg'
                alt='Image is not available'
            />
            <div className='p-2'>
                <p className="line-clamp-3 text-md">{result.overview}</p>
                <h2 className=' mt-2 truncate text-lg font-bold'>{result.title || result.name}</h2>
                <p className='flex items-center '>
                    {result.release_date || result.first_air_date}
                    <BsFillHandThumbsUpFill className='h-5 mr-1 ml-5'/> {result.vote_count}</p>
            </div>
        </Link>
    </div>
  )
}

export default Card