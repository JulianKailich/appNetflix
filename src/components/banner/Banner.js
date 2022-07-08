import React from 'react';
import { Link } from "react-router-dom";
import '../styles.css';


export const Banner = ({movie}) => {

/* /bannerdetails/:release_date/:title/:overview/:vote_average/:poster_path */
    
 const {release_date, title, overview, vote_average, backdrop_path} = movie;

  return (

    <div className="bannerContainer">
        

        <div className="bannerInfo">
            <h4>{title}</h4>
            <p>{overview}</p>
            <div className="myBtnsBanner">
                <Link to={`/bannerdetails/${release_date}/${title}/${overview}/${vote_average}${backdrop_path}`}>
                    <button className="moreBtn">More</button>
                </Link>
                <button className="voteBtn"><i className="fa-solid fa-star"></i> {vote_average}</button>
            </div>
            <div className="bannerLogo">
                <img src='/assets/netflixlogosmall.png'></img>
                <p>Movies</p>
            </div>
        </div>

    </div>



  )
}
