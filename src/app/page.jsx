import Results from "@/components/Results";
import SearchBox from "@/components/SearchBox";
import PaginationButtons from "@/components/PaginationButtons";

export const dynamic = "force-dynamic";

const API_KEY = process.env.API_KEY

export default async function Home({searchParams}) {
  const genre = searchParams.genre || "fetchTrending"
  const page = searchParams.page || 1
  const res = await fetch(`https://api.themoviedb.org/3/${ genre === "fetchToprated" ? "movie/top_rated" : "trending/all/week"}?api_key=${API_KEY}&language=en-US&page=${page}`,{next:{revalidate:10000}});
  
  if(!res.ok){
    throw new Error("Failed to fetch data")
  }

  const data = await res.json();
  const results = data.results;

  return (
    <>
    <div>
      <SearchBox/>
    </div>
    <div className="flex flex-col justify-center">
      <Results results={results}/>
      <PaginationButtons genre={genre} page={page}/>
    </div>

    </>
  )
}
