"use client"
import MovieList from "@/components/MovieList"
import HeaderMenu from "@/components/utilities/HeaderMenu"
import Pagination from "@/components/utilities/Pagination"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "@/libs/api-libs"

const Page = () => {

    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

     const fetchData = async () => {
         const data = await getAnimeResponse(`top/anime`,`page=${page}`)
        //  const data = await response.json()
         setTopAnime(data)
     }

     useEffect(() => {
        fetchData()
     }, [page])

    return (
        <>
          <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
         <MovieList api={topAnime} />
          <Pagination 
            page={page} 
            lastPage={topAnime.pagination?.last_visible_page}
            setPage={setPage} />  
        </>
    )
}

export default Page