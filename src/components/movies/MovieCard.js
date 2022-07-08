import React from "react";
import { Link } from "react-router-dom";
import '../styles.css';





export const MovieCard = ({movie}) => {

  const {release_date, title, popularity, vote_count, poster_path, vote_average} = movie;
  const baseURL = "https://image.tmdb.org/t/p/original";




    return (

 
    <div>
      

       

          <div className="movieCardSize" >

                <div className="cardHover">
                  
                  <Link to={`/moviedetails/${release_date}/${title}/${popularity}/${vote_count}${poster_path}/${vote_average}`}>
                    <img src={`${baseURL}${movie.poster_path}`} alt={movie.title} className="movieImage"></img>
                  </Link>
          
                </div>
                
          </div>
          
       

    </div>


  )
}
