import React from 'react';
import { Link } from "react-router-dom";
import '../styles.css';

export const BannerSerie = ({serie}) => {


    
 const {first_air_date, name, overview, vote_average, poster_path} = serie;

  return (

    <div className="bannerContainerSerie">
        

        <div className="bannerInfo">
            <h4>{name}</h4>
            <p>{overview}</p>
            <div className="myBtnsBanner">
                <Link to={`/bannerseriedetails/${first_air_date}/${name}/${overview}/${vote_average}${poster_path}`}>
                    <button className="moreBtn">More</button>
                </Link>
                <button className="voteBtn"><i className="fa-solid fa-star"></i> {vote_average}</button>
            </div>
            <div className="bannerLogo">
                <img src='/assets/netflixlogosmall.png'></img>
                <p className="pSeriesLogo">Tv shows</p>
            </div>
        </div>

    </div>



  )
}
