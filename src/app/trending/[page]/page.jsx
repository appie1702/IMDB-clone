import Results from '@/components/Results';
import React from 'react'
import PaginationButtons from '@/components/PaginationButtons';


const API_KEY = process.env.API_KEY

const page = async ({params}) => {

    const res = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=${params.page}`,{next:{revalidate:10000}})
    if(!res.ok){
        throw new Error("Error fetching data");
    }

    const data = await res.json();
    console.log(data.results);
    const results = data.results;

  return (
    <div className="flex flex-col justify-center">
    {results && results.length === 0 && (
        <h1 className='text-center pt-6 text-lg font-semibold'>No results found</h1>
    )}

    {results && <Results results={results}/>}
    {results && <PaginationButtons genre="fetchTrending"/>}
    </div>
  )
}

export default page