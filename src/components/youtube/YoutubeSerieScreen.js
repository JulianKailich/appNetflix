import React, { useEffect, useState } from 'react';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
import { useNavigate, useParams } from 'react-router-dom';

export const YoutubeSerieScreen = () => {

const {name} = useParams();

const [trailerUrl, setTrailerUrl] = useState("");

const opts = {
    playerVars: {
        autoplay: 1,
    }
  };


  useEffect(() => {
    if (trailerUrl) {
        setTrailerUrl("");
      } else {
        movieTrailer(name || "")
        .then((url) => {
    
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
    
        }).catch(error => console.log(error));
        
      }
  }, [])
  
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/series');
  };



  return (
    
    <div className="youtubeContainer">

        <h2>{name}</h2>
        <YouTube videoId={trailerUrl} opts={opts} />
        <button onClick={handleBackClick}><i className="fa-solid fa-arrow-left"></i> Tv Shows</button>

     </div>
  )
}
