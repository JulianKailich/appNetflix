import React, { useEffect, useState } from 'react'
import { Loading } from '../loading/Loading'
import { VerticalBar } from '../verticalbar/VerticalBar'
import { SerieScreen } from './SerieScreen'
import '../styles.css';
import { BannerSerie } from '../banner/BannerSerie';



export const Series = () => {


    // Populares
    const fetchPopulares = "https://api.themoviedb.org/3/tv/popular?api_key=688ae98bf1c4a396903cf05ac4963908&language=en-US&page=1"
    // More 
    const fetchMore = "https://api.themoviedb.org/3/tv/popular?api_key=688ae98bf1c4a396903cf05ac4963908&language=en-US&page=2"
    // Latest
   /*  const fetchLatest = "https://api.themoviedb.org/3/tv/latest?api_key=688ae98bf1c4a396903cf05ac4963908&language=en-US&page=1" */
    // Airing today
    const fetchAiring = "https://api.themoviedb.org/3/tv/airing_today?api_key=688ae98bf1c4a396903cf05ac4963908&language=en-US&page=1"
    // Top rated
    const fetchRated = "https://api.themoviedb.org/3/tv/top_rated?api_key=688ae98bf1c4a396903cf05ac4963908&language=en-US&page=1"
    // On the air
    const fetchOnAir = "https://api.themoviedb.org/3/tv/on_the_air?api_key=688ae98bf1c4a396903cf05ac4963908&language=en-US&page=1"


    const fetchBannerSerie = `https://api.themoviedb.org/3/search/tv?api_key=688ae98bf1c4a396903cf05ac4963908&query=peaky+blinders`;


    const [peaky, setPeaky] = useState([]);

    useEffect(() => {
  
      fetch(fetchBannerSerie)
      .then(resp => resp.json())
      .then(data => setPeaky(data.results[0]));
      
      console.log(peaky)
    }, [fetchBannerSerie]);



    const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    
    setTimeout(()=> {
      setLoading(false);
    },2000)  
    
  
  }, [])

  return (
    <div> 

{
      loading ?
      <Loading />

      :
        <div className="moviesContent">

            <VerticalBar />

            <BannerSerie serie={peaky} />

            <h4>Popular</h4>
            <SerieScreen url={fetchPopulares}/>

            <h4>Airing today</h4>
            <SerieScreen url={fetchAiring}/>

            <h4>Top rated</h4>
            <SerieScreen url={fetchRated}/>

            <h4>On the air</h4>
            <SerieScreen url={fetchOnAir}/>

            <h4>Mix</h4>
            <SerieScreen url={fetchMore}/>


        </div>
}
    </div>
  )
}
