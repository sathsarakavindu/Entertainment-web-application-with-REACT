import { useEffect, useState } from 'react'
import GlobalAPI from '../Services/GlobalAPI'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
function Slider() {

  const [movieList, setMovieList] = useState([]);

    useEffect(()=>{
        getTrendingMovies();
    }, [])

    const getTrendingMovies = ()=>{
        GlobalAPI.getTrendingVideos.then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    }

  return (
    <div>
      <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer'/>
      <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0'/>
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none'>
        {
            movieList.map((item, index)=>(
            
                <img key={index} src={IMAGE_BASE_URL+item.backdrop_path}
                className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md '/>
            ))
        }
        
    </div>
    </div>
  )
}

export default Slider