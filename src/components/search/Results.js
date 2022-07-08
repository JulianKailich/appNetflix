import React from 'react'

export const Results = ({movie}) => {
    
    const { title, poster_path } = movie;
    const baseURL = "https://image.tmdb.org/t/p/original";
  
    return (

    
        
        <div className="resultCard animate__animated animate__fadeIn">
            <img src={`${baseURL}${poster_path}`} alt={title}></img>
            <p>{title}</p>
        </div>
     

  )
}
