import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../styles.css';



export const SerieCardScreen = () => {

const baseURL = "https://image.tmdb.org/t/p/original/";

const navigate = useNavigate();

const handleBackClick = () => {
  navigate('/series');
}

 const {first_air_date, name, popularity, vote_count, vote_average, poster_path} = useParams();

  return (
    <div className="moviecardscreen" > 

    <div className="movieCardSCreenContent">


         <div className="newCardImage animate__animated animate__fadeInRight">
         <img src={`${baseURL}${poster_path}`} alt={name}></img>
         </div>

         <div className="newCardInfo animate__animated animate__fadeInRight">
          <h2>{name}</h2> 
          
          <div className="stats"><p><i className="fa-solid fa-fire"></i> Popularity: {popularity}</p></div>
          <div className="stats"><p><i className="fa-solid fa-clock"></i> First air date: {first_air_date}</p></div>
          <div className="stats"><p><i className="fa-solid fa-star"></i> Vote average: {vote_average}</p></div>
          <div className="stats"><p><i className="fa-solid fa-people-group"></i> Vote count: {vote_count} users</p></div>
       
          <Link to= {`/youtubeserietrailer/${name}`}><button>Trailer</button></Link>
         </div>

          <button className="backBtn animate__animated animate__fadeInRight" onClick={handleBackClick}><i className="fa-solid fa-arrow-left-long"></i></button>

        </div>
    </div>
  )
}
