import React from 'react'
import { Link } from 'react-router-dom';
import '../styles.css';



export const SerieCard = ({serie}) => {

    const {first_air_date, name, popularity, vote_count, poster_path, vote_average} = serie;
    const baseURL = "https://image.tmdb.org/t/p/original";




    return (

    <div>

   
    
    <div className="movieCardSize" >        

        <div className="cardHover">
          
        <Link to={`/seriedetails/${first_air_date}/${name}/${popularity}/${vote_count}${poster_path}/${vote_average}`}>
            <img src={`${baseURL}${serie.poster_path}`} alt={serie.name} className="movieImage"></img>
        </Link>
        
        </div>

    </div>

    

</div>
  )
}
