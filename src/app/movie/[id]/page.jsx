import Image from 'next/image';
import React from 'react'

const page = async ({params}) => {
    const movieId = params.id;

    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
    
    const movie = await res.json();
    console.log(movie.id)

  return (
    <div className='w-full'>
        <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center 
        max-w-6xl mx-auto md:space-x-10'>
            <Image
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                width={500}
                height={400}
                style={{
                    maxWidth: "100%",
                    height: "100%"
                }}
                className='rounded-lg'
                placeholder='blur'
                blurDataURL='/spinner.svg'
                alt='Image is not available'
            />
            <div className='p-4 md:p-2'>
                <h2 className=' text-lg mb-3 font-bold'>{movie.title || movie.name}</h2>
                <p className='text-lg mb-3'>
                    <span className=' font-semibold mr-1'>Overview: </span>{movie.overview}
                </p>
                <p className='mb-3'>
                    <span className='font-semibold mr-1'>Date Released: </span>{movie.release_date || movie.first_air_date}
                </p>
                <p className='mb-3'>
                    <span className='font-semibold mr-1'>UpVotes: </span>{movie.vote_count}
                </p>
            </div>
        </div>
    </div>
  )
}

export default page