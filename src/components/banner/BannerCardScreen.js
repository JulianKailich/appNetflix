import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../styles.css';



export const BannerCardScreen = () => {


  
const baseURL = "https://image.tmdb.org/t/p/original/";

const navigate = useNavigate();

const handleBackClick = () => {
  navigate('/movies');
};


const {release_date, title, overview, vote_average, backdrop_path} = useParams();


  return (
    <div className="moviecardscreen"> 

    <div className="movieCardSCreenContent">


         <div className="newCardImage animate__animated animate__fadeInRight">
         <img src={`${baseURL}${backdrop_path}`} alt={title}></img>
         </div>

         <div className="newCardInfo animate__animated animate__fadeInRight">
          <h2>{title}</h2> 
          
          <div className="stats"><p> {overview} </p></div>
          <div className="stats"><p><i className="fa-solid fa-clock"></i> Release date: {release_date}</p></div>
          <div className="stats"><p><i className="fa-solid fa-star"></i> Vote average: {vote_average}</p></div>
          {/* <div className="stats"><p><i className="fa-solid fa-people-group"></i> Vote count: {vote_count} users</p></div> */}
        
          <Link to= {`/youtubemovietrailer/${title}`}><button>Trailer</button></Link>
         </div>

          <button className="backBtn animate__animated animate__fadeInRight" onClick={handleBackClick}><i class="fa-solid fa-arrow-left-long"></i></button>

        </div>
    </div>
  )
}
