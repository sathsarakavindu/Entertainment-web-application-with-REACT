import { useEffect, useRef, useState } from "react"
import GlobalApi from '../Services/GlobalAPI'
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";

function MovieList({genreId, index_}) {
const[movieList, setMovieList] = useState([]);
const elementRef = useRef(null);
   useEffect(()=>{
    getMovieByGenreId();
   }, [])

   const getMovieByGenreId = ()=>{
    GlobalApi.getMovieByGenreId(genreId).then(resp=>{
        console.log(resp.data.results);
        setMovieList(resp.data.results);
    });
   }

   const sliderRight = (element)=>{
    element.scrollLeft+=500;
  }
  const sliderLeft = (element)=>{
    element.scrollLeft-=500;
  }

  return (
    <div className="relative">

       <IoChevronBackOutline onClick={()=>sliderLeft(elementRef.current)}
        className={`text-[50px] text-white 
        p-2 z-10 cursor-pointer 
        hidden md:block absolute
        ${index_%3==0 ? 'mt-[80px]':'mt-[150px]'} `}/>
    <div className="flex overflow-x-auto gap-8 scrollbar-none pt-5 px-3 pb-5 scroll-smooth" ref={elementRef}>{
       movieList.map((item, index)=>(
        <>
        {index_ % 3 == 0 ? <HrMovieCard movie={item}/> : <MovieCard key={index} movie={item} />}
        </>
       ))
    }</div>
       <IoChevronForwardOutline onClick={()=>sliderRight(elementRef.current)}
        className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block 
         top-0 right-0 absolute scroll-smooth ${index_%3==0 ? 'mt-[80px]':'mt-[150px]'}`}/>
</div>
  )
}

export default MovieList