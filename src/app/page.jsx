import MovieList from "@/components/MovieList"
import Header from "@/components/MovieList/Header"
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs"


const Page = async () =>  {

  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime","entry")
  recommendedAnime = reproduce(recommendedAnime, 2)
  // console.log(recommendedAnime)
  
  return (
   <>
    <section>
      <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
      <MovieList api={topAnime} />
    </section>
    <section>
      <Header title="Rekomendasi" />
      <MovieList api={recommendedAnime} />
    </section>
   </>
  )
}

export default Page
