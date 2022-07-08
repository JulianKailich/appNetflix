import React, { useEffect, useState } from 'react';
import { Banner } from '../banner/Banner';
import { Loading } from '../loading/Loading';
import { VerticalBar } from '../verticalbar/VerticalBar';
import { MovieScreen } from './MovieScreen';
import '../styles.css';


export const Movies = () => {

  const apiKey = "688ae98bf1c4a396903cf05ac4963908";
  const baseUrl = "https://api.themoviedb.org/3"
  const fetchUrlNetflix = `/discover/movie?api_key=${apiKey}&with_networks=213`;
  const fetchUrlTop = `/movie/top_rated?api_key=${apiKey}&language=en-US`;
  const fetchUrlAction = `/discover/movie?api_key=${apiKey}&with_genres=28`;
  const fetchUrlComedy = `/discover/movie?api_key=${apiKey}&with_genres=35`;
  const fetchUrlHorror = `/discover/movie?api_key=${apiKey}&with_genres=27`;
  const fetchUrlRomance = `/discover/movie?api_key=${apiKey}&with_genres=10749`;
  const fetchUrlDocumentaries = `/discover/movie?api_key=${apiKey}&with_genres=99`;

  const fetchBanner = `${baseUrl}/search/movie?api_key=${apiKey}&query=minions`;

  const [minions, setMinions] = useState([]);

  useEffect(() => {

    fetch(fetchBanner)
    .then(resp => resp.json())
    .then(data => setMinions(data.results[0]));

  }, [fetchBanner]);
  


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

        <Banner movie={minions} />
        
        <h4>Netflix originals</h4>
        <MovieScreen baseUrl={baseUrl} fetchUrl={fetchUrlNetflix} />
        


        <h4>Top rated</h4>
        <MovieScreen baseUrl={baseUrl} fetchUrl={fetchUrlTop} />
      

        <h4>Action Movies</h4>
        <MovieScreen baseUrl={baseUrl} fetchUrl={fetchUrlAction} />



        <h4>Comedy Movies</h4>
        <MovieScreen baseUrl={baseUrl} fetchUrl={fetchUrlComedy} />



        <h4>Horror Movies</h4>
        <MovieScreen baseUrl={baseUrl} fetchUrl={fetchUrlHorror} />



        <h4>Romance Movies</h4>
        <MovieScreen baseUrl={baseUrl} fetchUrl={fetchUrlRomance} />



        <h4>Documentaries</h4>
        <MovieScreen baseUrl={baseUrl} fetchUrl={fetchUrlDocumentaries} />

  

        </div>
    }
    </div>
   
  )
}
