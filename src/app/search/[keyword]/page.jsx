import { getAnimeResponse } from "@/libs/api-libs"
import MovieList from "@/components/MovieList"
import Header from "@/components/MovieList/Header"

const Page = async ({params}) =>  {
    const { keyword } = params
    const decodedKeyword = decodeURI(keyword)
    const searchAnime = await getAnimeResponse(`anime`,`q=${decodedKeyword}`)
 
    
  return (
   <>
    <section>
      <Header title={`Pencarian untuk ${decodedKeyword}`} />
      <MovieList api={searchAnime} />
    </section>
   </>
  )
}

export default Page
